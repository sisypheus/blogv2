import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../../lib/posts";
import PostCard from "./components/PostCard";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Theo Poette - Blog</title>
        <meta name="description" content="Official blog of Theo Poette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="h-screen w-full"
        style={{ background: `url("/layered-waves.svg") center/cover` }}
      >
        <div>
          <div className="flex items-center justify-center">
            <div className="absolute top-1/3 -mt-20 sm:top-[40%] md:grid md:grid-cols-6 md:space-x-4">
              <div className="flex items-center justify-center md:col-span-3">
                <Image
                  src="/me.jpg"
                  className="h-40 w-40 overflow-hidden rounded-full md:col-span-3 md:h-72 md:w-72"
                  alt="Nice pic of me"
                  width={300}
                  height={390}
                />
              </div>
              <div className="col-span-3 flex items-center p-4 text-center">
                <div className="max-w-lg p-1 font-sans text-xl font-bold leading-8 text-white">
                  <p>Hi, Welcome to my blog!</p>
                  <p>
                    On this site, I'm posting the stories of a Full-Stack Web
                    developer
                  </p>
                  <p>
                    If you want to see my projects, or get to know me better,
                    visit:
                  </p>
                  <a href="https://theopoette.me">
                    <button className="m-4 rounded-lg border-4 border-indigo-900 bg-white py-2 px-4 font-sans font-bold text-indigo-900 transition-all duration-200 hover:bg-indigo-900 hover:text-white">
                      My website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex items-center justify-center p-8">
          <h1 className="border-b-4 border-blue-600 font-serif text-4xl font-bold sm:text-5xl">
            Featured
          </h1>
        </div>
        <div id="featured-posts">
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mx-4">
          <div className="m-auto my-8 flex max-w-sm flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
            <p className="text-xl font-bold">Want to see more ?</p>
            <Link href="/posts/">
              <button className="mt-4 transform rounded-lg bg-indigo-700 p-2 px-4 text-lg font-bold text-white duration-300 hover:-translate-y-1 hover:bg-indigo-800">
                All Posts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
