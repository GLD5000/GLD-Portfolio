import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "GLD Portfolio",
  description:
    "View my portfolio projects, see my source code and get in touch with me.",
  keywords:
    "portfolio, React, web, coding, developer, HTML, CSS, JavaScript, TypeScript",
  authors: [{ name: "GLD", url: "https://github.com/GLD5000" }],
  manifest: "/manifest.json",
  icons: { icon: "/gldcondensed.ico" },
};
export default function Page() {
  if (HomePage === undefined) return null;
  return <HomePage />;
}
