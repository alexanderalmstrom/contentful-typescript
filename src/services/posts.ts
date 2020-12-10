import { EntryCollection } from "contentful";
import contentfulClient from "./contentfulClient";

export const getPosts = async (): Promise<EntryCollection<any>> =>
  contentfulClient.getEntries({ content_type: "post" });
