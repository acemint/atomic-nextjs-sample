import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 bg-[var(--color-text)] pb-4 pt-32">
      <a
        className="flex items-center gap-2 text-[var(--color-background)] hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
        Learn
      </a>
      <a
        className="flex items-center gap-2 text-[var(--color-background)] hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
        Examples
      </a>
      <a
        className="flex items-center gap-2 text-[var(--color-background)] hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
        Go to nextjs.org →
      </a>
    </footer>
  );
}
