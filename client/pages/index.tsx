import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <div>
      <>
        <Head>
          <title>Entertainment Web App</title>
          <meta name="description" content="multi-page entertainment web app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <main className="flex items-center justify-center min-h-screen bg-midnight-blue">
          <h1 className="text-3xl font-bold text-bright-red">Hello Next</h1>
        </main>
      </>
    </div>
  );
};

export default Home;
