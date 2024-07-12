import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog4.png",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog5.png",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "17 Jan 2022",
    image: "/blogs/blog6.png",
    tags: ["Leadership", "Management"],
  },
];

export default function BlogPost() {
  return (
    <div className="p-4 mb-24">
      <h1 className="text-2xl font-bold mb-4">Todos los post</h1>
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

      <div className="flex justify-between items-center mt-4">
        <button className="flex text-muted-foreground">
          <IconArrowLeft className="inline-block hover:scale-110 mr-4" />{" "}
          Anteriores
        </button>
        <div className="flex space-x-2">
          <Button className="bg-brand/30 text-primary-foreground px-2 py-1 rounded size-8">
            1
          </Button>
          <Button
            variant={"ghost"}
            className=" px-2 py-1 rounded size-8 hidden md:block"
          >
            2
          </Button>
          <Button
            variant={"ghost"}
            className=" px-2 py-1 rounded size-8 hidden md:block"
          >
            3
          </Button>
          <button className="text-muted-foreground">...</button>
          <Button
            variant={"ghost"}
            className=" px-2 py-1 rounded size-8 hidden md:block"
          >
            9
          </Button>
          <Button variant={"ghost"} className=" px-2 py-1 rounded size-8 ">
            10
          </Button>
        </div>
        <button className="text-muted-foreground">
          Siguientes{" "}
          <IconArrowRight className="inline-block hover:scale-110 ml-4" />
        </button>
      </div>
    </div>
  );
}
