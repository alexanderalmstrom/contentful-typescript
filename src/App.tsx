import React, { useEffect, useReducer } from "react";
import styles from "./App.module.scss";
import { fetchPosts } from "./services/posts";
import postReducer from "./reducers/postReducer";
import Posts from "./components/Posts";

const App = () => {
  const [{ posts }, dispatch] = useReducer(postReducer, { posts: [] });

  const loadPosts = async () => {
    dispatch({ type: "LOAD_POSTS", payload: await fetchPosts() });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.root}>
      <Posts posts={posts} />
    </div>
  );
};

export default App;
