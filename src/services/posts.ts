import { EntryCollection } from "contentful";
import contentfulClient from "./contentfulClient";

export const fetchPosts = (): Promise<EntryCollection<any>> =>
  contentfulClient.getEntries({ content_type: "post" });
