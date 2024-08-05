import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            &quot;Drop Me a Line Start a Conversation&quot;
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Welcome to My Portfolio!<br /><br />

            I&apos;m excited to showcase my expertise in MERN stack Development.<br /><br />

            Dive into my projects to see how I leverage cutting-edge technologies and innovative solutions to drive results.<br /><br />

            With a strong foundation in React, Next.js, Express.js, Node.js, mongodb.<br /><br />

            I&apos;m ready to tackle your challenges and transform ideas into reality.<br /><br />

            Let&apos;s collaborate to engineer success together.<br /><br />

            Your support and engagement are highly appreciated—let&apos;s create something exceptional!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
