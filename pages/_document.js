import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
        />

        <link rel="stylesheet" href="global.css"/> 

      </Head>
        
      <body>

      <div className="container">
        <Main />
      </div>

        <NextScript />
      </body>
    </Html>
  );
}
