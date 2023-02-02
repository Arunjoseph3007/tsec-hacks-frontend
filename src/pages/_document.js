import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="corporate" lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div style={{ width: "400px", height: "300px" }} id="panorama-view" />
      </body>
    </Html>
  );
}
