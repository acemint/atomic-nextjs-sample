import Image from "next/image";
import { H1, H2, H3, P, Button } from "@/app/ui/atoms";

export type MainArticleContentType = {
  title: string;
  catchPhrase: string;
  paragraph: string;
  buttonText: string;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
};

export const mainArticleConst: MainArticleContentType = {
  title: "Power of Imagination",
  catchPhrase: "Transforming Ideas into Reality",
  paragraph: `Our platform bridges the gap between creativity and execution, 
                empowering you to bring your boldest ideas to life. 
                Imagination is no longer just a thought—it's the foundation of something real.`,
  buttonText: "See more",
  imgUrl: "/lorem-ipsum-4.png",
  imgWidth: 912,
  imgHeight: 1144,
};

export function MainArticle({ content }: { content: MainArticleContentType }) {
  return (
    <div className="mb-16 flex w-[100%] flex-col lg:h-[80%] lg:flex-row">
      <div className="mx-auto mb-32 mt-32 flex w-[60%] justify-center lg:my-auto">
        <main>
          <H1 className="mb-4">{content.title}</H1>
          <H2 className="mb-6">{content.catchPhrase}</H2>
          <P className="mb-8 max-w-3xl">{content.paragraph}</P>
          <Button variant="secondary">{content.buttonText}</Button>
        </main>
      </div>
      <div className="mx-auto my-auto hidden h-[100%] w-[40%] justify-center lg:flex">
        <Image
          className="mx-auto my-auto h-auto w-[70%] bg-[var(--color-primary)] px-4 py-4"
          src={content.imgUrl}
          alt="Main Background"
          width={content.imgWidth}
          height={content.imgHeight}
        />
      </div>
    </div>
  );
}
