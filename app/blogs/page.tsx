import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";

export default function Page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <BlogHeader />
      <BlogPost />
    </div>
  );
}
