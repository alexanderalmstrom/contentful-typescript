import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
});

export default contentfulClient;
