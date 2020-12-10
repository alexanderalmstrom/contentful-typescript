import { Asset, Entry, Sys } from "contentful";

export interface Post extends Entry<PostFields> {
  sys: Sys;
}

export interface PostFields {
  name: string;
  content: string;
  image: Asset;
}
