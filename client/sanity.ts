import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "ia8fmily",
  dataset: "production",
  useCdn: true,
  apiVersion: "export const urlFor = (source) => builder.image(source);",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export default client;
