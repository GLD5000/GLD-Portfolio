import PaperPlaneSvg from "@/icons/PaperPlaneSvg";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import portrait from "src/assets/aboutme/bwportrait.jpg";
import LinkedInSvg from "@/icons/LinkedInSvg";
import GitHubSvg from "src/icons/GitHubSvg";

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
    <section
      id="contact"
      className="m-auto grid w-body-sm  min-w-body max-w-body gap-4 rounded bg-transparent py-20  text-black dark:text-white  sm:w-body"
    >
      <div className="mx-auto mt-8 grid w-fit gap-4 sm:mt-0 sm:grid-cols-2">
        <Image
          placeholder="blur"
          src={portrait}
          className="m-auto h-40 w-40 rounded-full shadow-xl shadow-black"
          alt="Gareth Photo"
        />
        <div className="m-auto w-fit">
          <p className="m-0 mx-auto text-center text-4xl">Hi There!</p>
          <p className="m-0 mx-auto text-center text-xl">{`Let's chat!`}</p>
        </div>
      </div>
      <form
        className="grid  w-full gap-4 rounded bg-transparent px-4   text-black dark:text-white "
        onSubmit={handleSubmit}
      >
        <p className="m-0 mx-auto text-center text-2xl">Send me a Message</p>

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
          className="m-auto flex h-fit w-60 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
          type="submit"
        >
          <PaperPlaneSvg />
          {messageSent ? "Message Sent!" : "Send Message"}
        </button>
      </form>

      <div className="grid gap-4 ">
        <p className="m-0 mx-auto text-center text-2xl">
          Other ways to connect...
        </p>

        <Link
          className="m-auto flex h-fit w-60 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.linkedin.com/in/garethlouisdevlin/"
        >
          <div className="my-auto h-8 w-8">
            <LinkedInSvg />
          </div>
          LinkedIn
        </Link>
        <Link
          className="m-auto flex h-fit w-60 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/GLD5000"
        >
          <div className="my-auto h-8 w-8">
            <GitHubSvg />
          </div>
          GitHub
        </Link>
      </div>
    </section>
  );
}

export default Contact;
