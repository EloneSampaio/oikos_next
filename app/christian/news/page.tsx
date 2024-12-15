"use client";

import { ArrowLeft, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

function ArticleCard({
  image,
  title,
  excerpt,
  author,
  date,
}: ArticleCardProps) {
  return (
    <Card className="bg-[#274E2D] border-green-600 overflow-hidden rounded-xl">
      <div className="p-4 flex gap-4">
        <Image
          src={image}
          alt=""
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-2 line-clamp-2">{excerpt}</p>
          <div className="flex justify-between items-center text-xs text-white/60">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

const articles = [
  {
    image: "/assets/rb_825.png",
    title: "Quais resíduos não são recicláveis, e porque?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor",
    author: "Christian Cesar",
    date: "15 Agosto 2024 as 7:15h",
  },
  {
    image: "/assets/recycle.png",
    title: "Quais resíduos não são recicláveis, e porque?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor",
    author: "Christian Cesar",
    date: "15 Agosto 2024 as 7:15h",
  },
  {
    image: "/assets/rb_825.png",
    title: "Quais resíduos não são recicláveis, e porque?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor",
    author: "Christian Cesar",
    date: "15 Agosto 2024 as 7:15h",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#274E2D]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/home">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>

          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Link href="/christian/profile/view">
            <Button className="w-8 h-8 rounded-full p-0 overflow-hidden bg-gray-200">
              <Image
                src="/assets/avatar.png"
                alt="Perfil"
                width={32}
                height={32}
                className="object-cover"
              />
            </Button>
          </Link>
        </header>

        {/* Learn Section */}
        <section className="mb-8 ">
          <h2 className="text-lg font-semibold text-white mb-4">Aprender</h2>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <ArticleCard key={`learn-${index}`} {...article} />
            ))}
          </div>
        </section>

        {/* News Section */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Notícias</h2>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <ArticleCard key={`news-${index}`} {...article} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
