import React from "react";
import Banner from "../components-styles/Banner";
import "./HomeScreen.css";
import Nav from "../components-styles/Nav";
import Row from "../components-styles/Row";
import requests from "../Requests";


function HomeScreen() {
  return (
    <div className="home__screen">
      <Nav />
      <Banner />
     
       <Row
     title='NETFLIX ORIGINALS'
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow />    

     

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
