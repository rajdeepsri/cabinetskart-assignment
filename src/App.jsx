import { useEffect, useState } from "react";
import Card from "./components/Card";
const API_URL = "https://rickandmortyapi.com/api/character/";

const App = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [filteredCharactersData, setFilteredCharactersData] = useState([]);
  const [seachQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const resp = await fetch(API_URL);
      const data = await resp.json();
      setCharactersData(data.results);
      setFilteredCharactersData(data.results);
    };
    fetchCharacters();
  }, []);

  // search logic
  useEffect(() => {
    let filteredData;
    if (seachQuery === "") {
      filteredData = charactersData;
    } else {
      filteredData = charactersData.filter((character) => {
        return character.name
          .toLowerCase()
          .startsWith(seachQuery.toLowerCase());
      });
    }

    setFilteredCharactersData(filteredData);
  }, [seachQuery, charactersData]);

  return (
    <div className="container">
      <nav>
        <h1>Software Engineer - UI Assignment</h1>
        <input
          type="text"
          placeholder="Search for Characters..."
          value={seachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </nav>
      <div className="cards_container">
        {filteredCharactersData.length > 0 ? (
          filteredCharactersData.map((character) => (
            <Card key={character.id} {...character} />
          ))
        ) : (
          <p>No Character matched your Search term</p>
        )}
      </div>
    </div>
  );
};

export default App;
