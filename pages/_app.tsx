import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const blobRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const createBlob = () => {
      document.body?.addEventListener("pointermove", (e) => {
        const { clientX, clientY } = e;

        blobRef.current?.animate(
          {
            left: `${clientX + window.scrollX}px`,
            top: `${clientY + window.scrollY}px`,
          },
          {
            duration: 4000,
            fill: "forwards",
          }
        );
      });
    };
    if (blobRef) createBlob();
  }, []);

  return (
    <>
      <div
        id="blur"
        style={{
          backdropFilter: "blur(300px)",
        }}
        className="top-0 bottom-0 fixed left-0 right-0 -z-[1]"
      />
      <main className="overflow-hidden relative">
        <div
          id="blob"
          ref={blobRef}
          className="h-64 aspect-square bg-gradient-to-tr animate-rotate-hehe rounded-full rotate -mt-32 -z-[2] -ml-32 to-[aquamarine] scale-x-150 absolute from-[mediumpurple]"
        />
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Major+Mono+Display&family=Poppins:wght@300;400;500;600;700;800;900&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
