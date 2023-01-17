import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { getSortedPostsData } from "../../../lib/posts";
import PostCard from "../../components/PostCard";
import Head from "next/head";

const AllPosts = ({ allPostsData }: any) => {
  const [blogPosts, setBlogPosts] = useState(allPostsData);

  const displayPosts = () => {
    if (blogPosts.length > 0) {
      return blogPosts.map((post: any, index: number) => (
        <PostCard key={index} post={post} />
      ));
    }
    return (
      <div className="flex items-center justify-center">
        <p className="prose-xl font-semibold">No blog post found.</p>
      </div>
    );
  };

  const filterPostsFromSearchBar = (filter: string) => {
    const filteredPosts = allPostsData.filter((post: any) => {
      return post.title.toLowerCase().includes(filter.toLowerCase());
    });
    setBlogPosts(filteredPosts);
  };

  return (
    <>
      <Head>
        <title>Theo Poette - Posts</title>
        <meta name="description" content="All my blog posts" />
        <meta name="robots" content="index, follow" key="robots" />
      </Head>
      <SearchBar filterPosts={filterPostsFromSearchBar} />
      {displayPosts()}
      <div className="pb-8"></div>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default AllPosts;
