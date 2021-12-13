import React from "react";
import classes from "./PostDetail.module.scss";
import { getPost } from "../../data/PostData";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const post = getPost(params.postId);

  return (
    <div className={classes.post}>
      <img src={post.img} alt="post-img" className={classes.postImg} />
      <h1 className={classes["postTitle"]}>{post.title}</h1>
      <p className={classes["postDesc"]}>{post.desc}</p>
      <p className={classes["postLongDesc"]}>{post.longDesc}</p>
    </div>
  );
};

export default PostDetail;
