"use client";
import CodeEditor from "./editor.js";
import Head from "next/head";
import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Monaco Editor with Code Commenting</title>
        <meta
          name="description"
          content="Add comments to your code using an LLM API"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Code Commenter</h1>
        <h3 className="text-lg text-center mb-8">
          Insert code to add comments:
        </h3>
        <CodeEditor />
      </div>
      <Footer />
    </div>
  );
}
