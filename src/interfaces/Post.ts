import { Asset, Entry } from "contentful";

export interface Post extends Entry<PostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface PostFields {
  name: string;
  content: string;
  image: Asset;
}
