import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Entertainment Web App</title>
        <meta name="description" content="multi-page entertainment web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen"><h1 className="text-3xl font-bold text-blue-500">Hello Next</h1></main>
    </>
  );
}
