import PaperPlaneSvg from "@/icons/PaperPlaneSvg";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  senderEmail: string;
  message: string;
}

function Contact() {
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
    const response = await fetch("/api/contact", {
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
      className="m-auto mb-20 grid  w-body-sm min-w-body max-w-body flex-col gap-4 rounded bg-transparent p-4   text-black dark:text-white  sm:w-body"
      onSubmit={handleSubmit}
    >
      <h2 className="m-auto w-fit text-3xl">Get In Touch!</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full border-b bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="w-full border-b bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
          name="senderEmail"
          placeholder="Your Email"
          value={formData.senderEmail}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        className="w-full border-b bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
        name="message"
        rows={3}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        className="m-auto flex  w-fit max-w-[40rem] flex-row items-center justify-center gap-2 rounded-full border p-2 text-center hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition hover:dark:bg-white hover:dark:text-black focus:dark:bg-white focus:dark:text-black"
        type="submit"
      >
        <PaperPlaneSvg />
        {messageSent ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}

export default Contact;
