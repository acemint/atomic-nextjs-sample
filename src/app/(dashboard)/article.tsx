import Image from "next/image";

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
    <div className="mb-16 flex h-[80%] w-[100%]">
      <div className="mx-auto my-auto flex w-[60%] justify-center">
        <main>
          <h1>{content.title}</h1>
          <h2>{content.catchPhrase}</h2>
          <p>{content.paragraph}</p>
          <button className="button-outward">{content.title}</button>
        </main>
      </div>
      <div className="flex h-[100%] w-[40%] justify-center">
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
