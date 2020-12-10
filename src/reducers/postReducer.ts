import { ContentfulCollection } from "contentful";
import { Post } from "../interfaces/Post";

interface State {
  posts: Post[];
}

interface Action {
  type: "LOAD_POSTS";
  payload: ContentfulCollection<any>;
}

const postReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        ...state,
        posts: action.payload.items,
      };
    default: {
      return state;
    }
  }
};

export default postReducer;
