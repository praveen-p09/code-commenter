// src/app/pages/editor.js
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { AppProps } from "next/app";
import dotenv from "dotenv";
dotenv.config();

// Load Monaco Editor dynamically
const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  { ssr: false }
);

const getApiUrl = () =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_API_KEY}`;

export default function Editor() {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setError("");

    try {
      const code = editorRef.current.getValue();
      const prompt = `Add suitable necessary comments beside lines of code. Don\'t comment the working code. Don\'t add comments for obvious things unnecessarily and try to explain the logic. The code is : ${code}`;

      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const apiUrl = getApiUrl();

      const response = await axios.post(apiUrl, payload, { headers });
      const responseCode =
        response?.data?.candidates[0]?.content.parts[0]?.text ??
        "No response from API";

      // Remove first and last lines from the responseText
      const lines = responseCode.split("\n");
      const filteredLines = lines.slice(1, lines.length - 1);
      const filteredText = filteredLines.join("\n");

      console.log(filteredText);
      editorRef.current.setValue(filteredText);
    } catch (err) {
      console.error(err);
      setError("Failed to generate comments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <main className="max-w-4xl w-full p-4">
        <div className="flex flex-row mb-5 items-center">
          <label htmlFor="language" className="text-white mr-2">
            Select Language:
          </label>
          <select
            id="language"
            className="text-black bg-white border border-gray-400 rounded p-1 ml-1 block"
            onChange={handleLanguageChange}
            value={selectedLanguage}
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
          </select>
        </div>
        <div className="flex items-center justify-center w-full border border-gray-400 ">
          <MonacoEditor
            height="60vh"
            width="100%"
            language={selectedLanguage}
            onMount={handleEditorDidMount}
            className="rounded-lg"
          />
        </div>
        <button
          className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded mt-4"
          onClick={handleGenerateClick}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Comments"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </main>
    </div>
  );
}
