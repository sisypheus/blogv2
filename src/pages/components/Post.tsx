import * as React from "react";
import Link from "next/link";
/* import { graphql, useStaticQuery } from "gatsby" */
/* import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image" */
import Image from "next/image";

const BlogPost = ({ post }: any) => {
  /* const image = getImage(post.node.Cover?.localFile) */
  const image = post.image;
  return (
    <div className="flex items-center justify-center p-3">
      <Link href={`/post/${post.node.Slug}/`}>
        <div className="cursor-pointer rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
          <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-5 sm:gap-8">
            {/* cover image of the post */}
            {image && (
              <Image
                className="rounded-t-2xl sm:col-span-2 sm:rounded-l-2xl sm:rounded-r-none"
                /* image={image} */
                alt="Blog post cover image"
                src={image}
                width={400}
                height={250}
              />
            )}
            {/* title and description of the post */}
            <div className="prose-md flex w-full flex-col space-y-2 p-4 sm:col-span-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {post.node.Title}
              </h1>
              <p className="flex h-full items-center align-middle font-medium text-gray-700">
                {post.node.Description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
