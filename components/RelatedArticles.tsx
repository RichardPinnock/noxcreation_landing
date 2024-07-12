import { IconArrowUpRight } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog1.png",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog2.png",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog3.png",
    tags: ["Leadership", "Management"],
  },
];

export default function RelatedArticles() {
  return (
    <div className="p-4 mb-24 mt-12">
      <h1 className="text-2xl font-bold mb-4">Artículos Relacionados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            href="/blogs/blog1"
            key={post.title}
            className="flex flex-col bg-card p-4 hover:shadow-md"
          >
            <Image
              width={592}
              height={228}
              className="w-full mb-4 md:mb-0"
              src={post.image}
              alt={post.title}
            />
            <div className="flex flex-col justify-between mt-6">
              <div>
                <p className="text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                  <span className="inline-block ml-4">
                    <IconArrowUpRight className="inline-block hover:scale-110" />
                  </span>
                </h3>
                <p className="text-brand_dark mb-4">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
              </div>
              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
