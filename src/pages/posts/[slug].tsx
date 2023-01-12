import Image from "next/image";
import { getPostBySlug, getSortedPostsData } from "../../../lib/posts";
import { GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

const Post = ({ post }: any) => {
  if (!post) return null;
  const image = post?.matter?.image;

  return (
    <>
      <Head>
        <title>Theo Poette - {post.matter.title}</title>
        <meta name="description" content={post.matter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto max-w-5xl flex-col items-center justify-center px-6 md:px-0">
        <div className="space-y-2 p-10 text-center">
          <h1>{post.matter?.date}</h1>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {post.matter.title}
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/me.jpg"
              alt="Picture of author"
              className="h-12 w-12 rounded-full"
              width={48}
              height={48}
            />
            <div>
              <p className="text-sm font-medium tracking-tight text-gray-800">
                Theo Poette
              </p>
              <a
                style={{ color: "rgb(14,165,233)" }}
                href="https://github.com/sisypheus"
              >
                @sisypheus
              </a>
            </div>
          </div>
        </div>
        <div className="m-auto md:p-8">
          <Image
            src={image}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded w-92 h-92 m-auto"
            alt="Blog cover image"
            width={900}
            height={200}
          />
        </div>
        <div className="prose m-auto mb-8 max-w-3xl">
          <ReactMarkdown children={post.body} className="prose mx-auto" />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = getSortedPostsData();
  let prerender: any = [];
  paths.map((path: any) => {
    prerender.push({ params: { slug: path.slug } });
  });
  return {
    paths: prerender,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const post = getPostBySlug(context.params.slug);
  return {
    props: {
      post,
    },
  };
}

export default Post;
