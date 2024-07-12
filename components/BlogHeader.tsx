import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Post destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/blogs/blog1"
          className="flex flex-col bg-card p-4 hover:shadow-md"
        >
          <Image
            width={592}
            height={228}
            className="w-full mb-4 md:mb-0"
            src="/blogs/1.png"
            alt="Blog Pos 1"
          />
          <div className="flex flex-col justify-between mt-6">
            <div>
              <p className="text-muted-foreground mb-2">
                Olivia Rhye • 20 Jan 2022
              </p>
              <Link href="/blogs/blog1" className="group">
                <h3 className="text-xl font-semibold mb-2">
                  UX review presentations{" "}
                  <span className="inline-block ">
                    <IconArrowUpRight className="inline-block hover:scale-110" />
                  </span>
                </h3>
              </Link>
              <p className="text-brand_darkd mb-4">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
            <div className="flex space-x-2">
              <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                Design
              </span>
              <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                Research
              </span>
              <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                Presentation
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col space-y-6">
          <Link
            href="/blogs/blog1"
            className="flex flex-col md:flex-row p-4 hover:shadow-md"
          >
            <Image
              width={200}
              height={200}
              className="w-full md:w-1/3 mr-4"
              src="/blogs/2.png"
              alt="Blog Post 2"
            />
            <div className="flex flex-col justify-between  mt-6 md:mt-0">
              <div>
                <p className="text-muted-foreground mb-2">
                  Phoenix Baker • 19 Jan 2022
                </p>
                <Link href="/blogs/blog1" className="group">
                  <h3 className="text-xl font-semibold mb-2 group:hover:text-brand_dark">
                    Migrating to Linear 101
                    <span className="inline-block ">
                      <IconArrowUpRight className="inline-block hover:scale-110" />
                    </span>
                  </h3>
                </Link>
                <p className="text-brand_dark mb-4">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Heres how to get...
                </p>
              </div>
              <div className="flex space-x-2">
                <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                  Design
                </span>
                <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                  Research
                </span>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/blog1"
            className="flex flex-col md:flex-row p-4 hover:shadow-md"
          >
            <Image
              width={200}
              height={200}
              className="w-full md:w-1/3 mr-4"
              src="/blogs/3.png"
              alt="Blog Post 3"
            />
            <div className="flex flex-col justify-between mt-6 md:mt-0">
              <div>
                <p className="text-muted-foreground mb-2">
                  Lana Steiner • 18 Jan 2022
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Building your API Stack
                </h3>
                <p className="text-brand_dark mb-4">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
              </div>
              <div className="flex space-x-2">
                <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                  Design
                </span>
                <span className="bg-brand/20 text-brand px-2 py-1 rounded-full text-sm">
                  Research
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
