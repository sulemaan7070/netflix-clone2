import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../Requests";
import RowBig from "./RowBig";

function HomeScreen() {
  return (
    <div className="home__screen">
      <Nav />
      <Banner />
      <RowBig
       title="Netflix Originals"
       fetchUrl={requests.fetchNetflixOriginals}
      />

     

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/*Banner */}
      {/*Row   */}
    </div>
  );
}

export default HomeScreen;
