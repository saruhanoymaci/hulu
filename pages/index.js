import Head from "next/head";
import requests from "../utils/request";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header*/}
      <Header />

      {/*Nav */}
      <Nav />
      {/*Results */}
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchRomanceMovies.url
    }`
  );
  const response = await request.json();
  (res) => request.json();
  return {
    props: {
      results: response.results,
    },
  };
}
