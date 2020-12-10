import { Post } from "../interfaces/Post";

interface States {
  posts: Post[];
}

interface Actions {
  type: string;
  payload: any;
}

const postReducer = (state: States, action: Actions) => {
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
