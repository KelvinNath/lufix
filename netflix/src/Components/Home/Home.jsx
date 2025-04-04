import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from "axios";
import Footer from '../Footer/footer';

const apiKey = "e6c56c5abcd56be2868520331f90c386";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";  
const upcoming = "upcoming";
const nowPlaying = "now_playing"; 
const popular = "popular";
const topRated = "top_rated";  

// Fix: Use a placeholder image instead of absolute path
// Either import it correctly:
// import placeholderImage from "../../assets/images/placeholder.jpg";
// Or use a relative path that exists in your public folder:
const placeholderImage = "https://via.placeholder.com/500x750";

const Card = ({ img }) => (
  <img className="card" src={img} alt="cover" />
);

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.length > 0 ? (
        arr.map((item, index) => (
          <Card key={index} img={item.poster_path ? `${imgUrl}${item.poster_path}` : placeholderImage} />
        ))
      ) : (
        <Card img={placeholderImage} />
      )}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const { data: { results } } = await axios.get(`${url}/movie/${upcoming}`, {
          params: { api_key: apiKey },
        });
        setUpcomingMovies(results);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    const fetchNowPlaying = async () => {
      try {
        const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}`, { 
          params: { api_key: apiKey },
        });
        setNowPlayingMovies(results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    const fetchPopular = async () => {
      try {
        const { data: { results } } = await axios.get(`${url}/movie/${popular}`, {
          params: { api_key: apiKey },
        });
        setPopularMovies(results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    const fetchTopRated = async () => {
      try {
        const { data: { results } } = await axios.get(`${url}/movie/${topRated}`, { 
          params: { api_key: apiKey },
        });
        setTopRatedMovies(results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <section className="home">
      <div 
        className="banner"
        style={{
          backgroundImage: popularMovies.length > 0 && popularMovies[0].backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${popularMovies[0].backdrop_path})` 
            : "linear-gradient(to bottom, #111 0%, #000 100%)"
        }}
      >
        <div className="banner-content">
          <h1>{popularMovies.length > 0 ? popularMovies[0].title : "Loading..."}</h1>
          <p>{popularMovies.length > 0 ? (popularMovies[0].overview?.slice(0, 150) + "...") : ""}</p>
          <div className="banner-buttons">
            <button>Play</button>
            <button className="info-button">More Info</button>
          </div>
        </div>
      </div>

      <Row title="Upcoming" arr={upcomingMovies} />
      <Row title="Now Playing" arr={nowPlayingMovies} />
      <Row title="Popular" arr={popularMovies} />
      <Row title="Top Rated" arr={topRatedMovies} />

      <Footer/>
    </section>
  );
};

export default Home;