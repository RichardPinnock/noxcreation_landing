import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

const blog = {
  title: "UX review presentations",
  date: "20 Jan 2022",
  image: "/blog_wall.png",
  tags: ["Design", "Research", "Presentation"],
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  content2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  content3: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto p-4 bg-card text-card-foreground">
        <Image
          data-aos="fade-zoom-in"
          width={1216}
          height={350}
          src="/blog_wall.png"
          alt="Office setup with chairs and desks"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <div className="flex items-center mb-2">
          <span className="text-muted-foreground">{blog.date}</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
        <div className="flex space-x-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>{blog.content}</p>
          <p>{blog.content2}</p>
          <p>{blog.content3}</p>
        </div>
      </div>
      <RelatedArticles />
    </div>
  );
}
