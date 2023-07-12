import Image from "next/image";
import Link from "next/link";
import portrait from "src/assets/aboutme/bwportrait.jpg";
import LinkedInSvg from "@/icons/LinkedInSvg";
import GitHubSvg from "src/icons/GitHubSvg";
import IntersectionReference from "@/utilities/intersectionObserver/IntersectionReference";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="m-auto grid w-full gap-4 rounded bg-secondary-light pt-20 pb-32  text-black  dark:bg-secondary dark:text-white">
      <div className="m-auto grid w-body-sm  min-w-body max-w-body gap-4 rounded bg-transparent  text-black dark:text-white  sm:w-body">
        <div className="mx-auto mt-8 grid w-fit gap-4 sm:mt-0 sm:grid-cols-2">
          <Image
            placeholder="blur"
            src={portrait}
            className="m-auto h-40 w-40 rounded-full shadow-xl shadow-black"
            alt="Gareth Photo"
          />
          <div className="m-auto w-fit">
            <IntersectionReference identity="contact" header="Hi There!" />
            <p className="m-0 mx-auto text-center text-4xl">{`Let's chat!`}</p>
          </div>
        </div>
        <ContactForm />
        <p className="m-0 mx-auto text-center text-2xl">
          Other ways to connect...
        </p>
        <div className="mx-auto grid w-fit gap-6 xxs:grid-cols-2 ">
          <Link
            className="m-auto flex h-fit w-36 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary p-2 text-center text-base font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.linkedin.com/in/garethlouisdevlin/"
          >
            <div className="my-auto h-7 w-7">
              <LinkedInSvg />
            </div>
            LinkedIn
          </Link>
          <Link
            className="m-auto flex h-fit w-36 flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary p-2 text-center text-base font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://github.com/GLD5000"
          >
            <div className="my-auto h-7 w-7">
              <GitHubSvg />
            </div>
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
