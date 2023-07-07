import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const mainFont = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
