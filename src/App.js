import { useEffect, useState } from "react";
import Card from "./Components/Card";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import "./App.css";

const API_URL = process.env.REACT_APP_APILINK;

function App() {
  const alltimefavourites = [
    "Harry Potter and the Goblet of Fire",
    "peabody",
    "star",
    "avengers",
    "heist",
    "big",
  ];
  const [moviename, setmoviename] = useState("");
  const [movielist, setmovielist] = useState([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    const recommendedMoviesData = [];
    const loadinitialposters = async () => {
      for (const title of alltimefavourites) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        if (data.Response === "True") {
          const temp = data.Search[0];
          recommendedMoviesData.push(temp);
        } else {
          seterror(data.Error);
        }
      }
      setmovielist(recommendedMoviesData);
    };
    loadinitialposters();
  }, []);

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Response === "False") {
      seterror(data.Error);
      setmovielist([]);
    } else {
      seterror("");
      setmovielist(data.Search);
    }
    setmoviename("");
  };
  function searchthemovie(event) {
    setmoviename(event.target.value);
  }
  function makerequest() {
    searchmovies(moviename);
  }

  return (
    <div className="full-page">
      <Box>
        <h1 className="web-title">Movieworld</h1>
      </Box>

      <div className="searchbar">
        <input
          label="Search Movie"
          placeholder="Search Movie"
          value={moviename}
          onChange={searchthemovie}
        />

        <SearchIcon
          onClick={makerequest}
          fontSize="large"
          style={{ margin: "10px", color: "white" }}
        />
      </div>
      {error && <p className="errorpara">{`Sorry! ${error}`}</p>}
      <Grid container className="Gridcontainer">
        {movielist.map((m1, index) => (
          <Card key={index} movie={m1} style={{ padding: "2%" }} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
