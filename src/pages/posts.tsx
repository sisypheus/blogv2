import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import SearchBar from "./components/SearchBar";

const AllPosts = ({ data }: any) => {
  /* const [blogPosts, setBlogPosts] = useState(data.allStrapiBlogPosts.edges) */
  const [blogPosts, setBlogPosts] = useState([]);

  const displayPosts = () => {
    if (blogPosts.length > 0) {
      return blogPosts.map((post: any, index: number) => (
        <Post key={index} post={post} />
      ));
    } else {
      return (
        <div className="flex items-center justify-center">
          <p className="prose-xl font-semibold">No blog post found.</p>
        </div>
      );
    }
  };

  const filterPostsFromSearchBar = (filter: string) => {
    const filteredPosts = data.allStrapiBlogPosts.edges.filter((post: any) => {
      return post.node.Title.toLowerCase().includes(filter.toLowerCase());
    });
    setBlogPosts(filteredPosts);
  };

  return (
    <>
      <SearchBar filterPosts={filterPostsFromSearchBar} />
      {displayPosts()}
      <div className="pb-8"></div>
    </>
  );
};

/* export const pageQuery = graphql` */
/*   { */
/*     allStrapiBlogPosts { */
/*       edges { */
/*         node { */
/*           strapiId */
/*           Description */
/*           Slug */
/*           Title */
/*           Cover { */
/*             localFile { */
/*               childImageSharp { */
/*                 gatsbyImageData(width: 400, height: 250) */
/*               } */
/*             } */
/*           } */
/*         } */
/*       } */
/*     } */
/*   } */
/* ` */

export default AllPosts;
