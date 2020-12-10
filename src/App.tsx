import React, { useEffect, useReducer } from "react";
import styles from "./App.module.scss";
import { getPosts } from "./services/posts";
import postReducer from "./reducers/postReducer";
import Posts from "./components/Posts";

const App = () => {
  const [{ posts }, dispatch] = useReducer(postReducer, { posts: [] });

  const loadPosts = async () => {
    dispatch({ type: "LOAD_POSTS", payload: await getPosts() });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (!posts) return null;

  return (
    <div className={styles.root}>
      <Posts posts={posts} />
    </div>
  );
};

export default App;
