import { Asset, Entry, Sys } from "contentful";

export interface PostFields {
  name: string;
  content: string;
  image: Asset;
}

export interface Post extends Entry<PostFields> {
  sys: Sys;
}
