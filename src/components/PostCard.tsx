import React from "react";
import ReactMarkdown from "react-markdown";
import { PostFields } from "../interfaces/Post";
import styles from "./PostCard.module.scss";
import Image from "./Image";

interface Props {
  fields: PostFields;
}

const PostCard = ({ fields }: Props) => {
  return (
    <div className={styles.root}>
      {fields.image && (
        <Image
          src={fields.image.fields?.file.url}
          alt={fields.image.fields?.title}
        />
      )}
      <h2>{fields.name}</h2>
      {fields.content && <ReactMarkdown>{fields.content}</ReactMarkdown>}
    </div>
  );
};

export default PostCard;
