import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="w-full overflow-x-hidden">
      <Head>
        <title>Entertainment Web App</title>
        <meta name="description" content="multi-page entertainment web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <body className="w-screen h-screen bg-midnight-blue h-scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
