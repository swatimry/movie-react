import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Card from "./Components/Card";
const API_URL = "http://www.omdbapi.com/?apikey=95010356&";

function App() {
  const [moviename, setmoviename] = useState("");
  const [movielist, setmovielist] = useState([]);
  const [error, seterror] = useState("");
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
  };
  function searchthemovie(event) {
    setmoviename(event.target.value);
  }
  function makerequest() {
    searchmovies(moviename);
  }

  return (
    <div>
      <h1>Movieworld</h1>
      <div>
        <input
          placeholder="Search movies"
          value={moviename}
          onChange={searchthemovie}
        />
        <BsSearch onClick={makerequest} />
      </div>
      {error && <p>{`Sorry! ${error}`}</p>}
      <div>
        {movielist.map((m1, index) => (
          <Card key={index} movie={m1} />
        ))}
      </div>
    </div>
  );
}

export default App;
