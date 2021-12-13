import React from "react";
import Card from "../ui/Card";
import classes from "./PostItem.module.scss";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <Card>
      <div className={classes.postBody}>
        <span className={classes.title}>{props.post.title}</span>
        <img src={props.post.img} alt="" className={classes.img} />
        <p className={classes.desc}>{props.post.desc}</p>
        <div className={classes.btnblock}>
          <Link to={`/posts/${props.post.id}`}>
            <button className={classes.cardButton}>Read More</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
