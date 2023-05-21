import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const email = process.env.SECRET_EMAIL;
interface EmailData {
  name: string;
  senderEmail: string;
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, senderEmail, message }: EmailData = req.body;

    // Validate input data
    if (!name || !senderEmail || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Configure and send senderEmail
    try {
      const msg = {
        to: email,
        from: `${email}`,
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
      };
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error sending email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
  return res.status(500).json({ error: "Error sending email." });
};
