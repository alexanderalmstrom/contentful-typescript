import { EntryCollection } from "contentful";
import contentfulClient from "./contentfulClient";

const getPosts = async (): Promise<EntryCollection<unknown>> =>
  contentfulClient.getEntries({ content_type: "post" });

export default getPosts;
