import { MainArticle, mainArticleConst } from "@/app/(dashboard)/article";
import Footer from "@/app/(dashboard)/ui/components/footer";
import Navbar from "@/app/(dashboard)/ui/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100%]">
      <Navbar />
      <MainArticle content={mainArticleConst} />
      <Footer />
    </div>
  );
}
