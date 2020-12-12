import React, { useEffect, useReducer } from "react";
import { gql, useQuery } from "@apollo/client";
import styles from "./App.module.scss";
import { Product } from "./interfaces/Product";
import { fetchPosts } from "./services/posts";
import postReducer from "./reducers/postReducer";
import Posts from "./components/Posts";

const App = () => {
  const [{ posts }, dispatch] = useReducer(postReducer, { posts: [] });
  const { data } = useQuery(gql`
    query AllProducts {
      allProducts {
        data {
          _id
          name
          price
        }
      }
    }
  `);

  const loadPosts = async () => {
    dispatch({ type: "LOAD_POSTS", payload: await fetchPosts() });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.root}>
      <Posts posts={posts} />
      {data?.allProducts.data.map((product: Product) => {
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
