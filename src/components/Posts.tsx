import React from "react";
import { Post } from "../interfaces/Post";
import PostCard from "./PostCard";
import styles from "./Posts.module.scss";

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  if (!posts) return null;

  return (
    <div className={styles.root}>
      {posts.map(({ sys, fields }) => {
        return <PostCard key={sys.id} fields={fields} />;
      })}
    </div>
  );
};

export default Posts;
