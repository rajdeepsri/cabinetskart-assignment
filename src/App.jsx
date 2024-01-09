import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useDebounce } from "./useDebounce";
const API_URL = "https://rickandmortyapi.com/api/character/";

const App = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [seachQuery, setSearchQuery] = useState("");
  const debouncedVal = useDebounce(seachQuery, 500);

  useEffect(() => {
    const fetchSearchedCharacter = async (characterName) => {
      try {
        const resp = await fetch(`${API_URL}?name=${characterName}`);
        const data = await resp.json();
        setCharactersData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedCharacter(debouncedVal);
  }, [debouncedVal]);

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
        {charactersData?.length > 0 ? (
          charactersData.map((character) => (
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
