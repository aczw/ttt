import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Atkinson_Hyperlegible, IBM_Plex_Mono } from "next/font/google";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-atkinson",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "700", "100", "200", "300", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${atkinson.variable} ${plexMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
