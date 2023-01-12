import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getSortedPostsData } from "../../../lib/posts";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";

const BlogPost = ({ post }: any) => {
  const image = post?.image;
  return (
    <div className="flex items-center justify-center p-3">
      <Link href={`/post/${post?.slug}/`}>
        <div className="cursor-pointer rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
          <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-5 sm:gap-8">
            {/* cover image of the post */}
            {image && (
              <Image
                className="rounded-t-2xl sm:col-span-2 sm:rounded-l-2xl sm:rounded-r-none"
                src={image}
                alt="Blog post cover image"
              />
            )}
            {/* title and description of the post */}
            <div className="prose-md flex w-full flex-col space-y-2 p-4 sm:col-span-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {/* {post.node.Title} */}
              </h1>
              <p className="flex h-full items-center align-middle font-medium text-gray-700">
                {/* {post.node.Description} */}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = getSortedPostsData();
  let prerender: any = [];
  paths.map((path: any) => {
    prerender.push({ params: { slug: path.slug } });
  });
  console.log(prerender, "prerender");
  return {
    paths: prerender,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const post = getPostBySlug(context.slug);
  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
