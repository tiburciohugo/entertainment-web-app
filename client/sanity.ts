import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "ia8fmily",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-25",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export default client;
