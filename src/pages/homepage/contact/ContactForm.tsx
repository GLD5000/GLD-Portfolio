"use client";

import PaperPlaneSvg from "@/icons/PaperPlaneSvg";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  senderEmail: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    senderEmail: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (messageSent) setMessageSent(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (result.success) {
      setMessageSent(true);
    }
  };

  return (
    <form
      className="mx-auto  my-6 grid w-full max-w-[55rem] gap-6 rounded-full p-4 text-black dark:text-white "
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          className="w-full rounded-lg  border-2 bg-white p-2 text-inherit placeholder:text-txt-mid dark:bg-black placeholder:dark:text-txt-mid-dk"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="w-full rounded-lg border-2 bg-white bg-inherit p-2 text-inherit placeholder:text-txt-mid dark:bg-black placeholder:dark:text-txt-mid-dk"
          name="senderEmail"
          placeholder="Your Email"
          value={formData.senderEmail}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        className="w-full rounded-lg border-2 bg-white bg-inherit  p-2 text-inherit placeholder:text-txt-mid dark:bg-black placeholder:dark:text-txt-mid-dk"
        name="message"
        rows={3}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        className="m-auto flex h-fit w-60 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-xl font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
        type="submit"
      >
        <PaperPlaneSvg />
        {messageSent ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}
