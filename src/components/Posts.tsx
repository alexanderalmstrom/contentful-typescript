import React from "react";
import { Post } from "../interfaces/Post";

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.sys.id}>
            <img
              src={post.fields.image.fields.file.url}
              alt={post.fields.image.fields.title}
            />
            <h2>{post.fields.name}</h2>
            <p>{post.fields.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
