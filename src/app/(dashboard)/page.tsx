import Navbar from "@/app/(dashboard)/ui/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100%]">
      <Navbar />
      <div className="mb-16 flex h-[80%] w-[100%]">
        <div className="mx-auto my-auto flex w-[60%] justify-center">
          <main>
            <h1>Power of Imagination</h1>
            <h2>Transforming Ideas into Reality</h2>
            <p>
              Our platform bridges the gap between creativity and execution,
              empowering you to bring your boldest ideas to life. Imagination is
              no longer just a thought—it's the foundation of something real.
            </p>
            <button className="button-outward">See more</button>
          </main>
        </div>
        <div className="flex h-[100%] w-[40%] justify-center">
          <Image
            className="shade mx-auto my-auto h-auto w-[70%] px-4 py-4"
            src="/lorem-ipsum-4.png"
            alt="Main Background"
            width={912}
            height={1144}
          />
        </div>
      </div>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
