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
    // console.log(result);
    if (result.success) {
      setMessageSent(true);
    }
  };

  return (
    <form
      className="m-auto mb-20 grid w-fit gap-2 rounded bg-white   p-2 text-black dark:bg-secondary dark:text-white"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className="bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
        name="senderEmail"
        placeholder="Email"
        value={formData.senderEmail}
        onChange={handleChange}
        required
      />
      <textarea
        className="bg-inherit p-2 text-inherit placeholder:text-txt-mid placeholder:dark:text-txt-mid-dk"
        name="message"
        rows={7}
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {messageSent ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}

export default Contact;
