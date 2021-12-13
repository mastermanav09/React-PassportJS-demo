import React from "react";
import getPostData from "../../data/PostData";
import PostItem from "./PostItem";
import classes from "./HomePosts.module.scss";

const HomePosts = () => {
  const posts = getPostData();

  return (
    <div className={classes["home-posts"]}>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePosts;
