import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]); // eslint-disable-next-line
  const [randQuote, setRandQuote] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      console.log(response);
      const data = await response.json();

      setQuotes(data);

      const randIndex = Math.floor(Math.random() * data.length);

      setRandQuote(data[randIndex]);
    }

    fetchData();
  }, []);

  const getNewQuote = () => {
    const randIndex = Math.floor(Math.random() * quotes.length);

    setRandQuote(quotes[randIndex]);
  };

  return (
    <div className="App">
      <div className="container text-center pt-5 w-200px">
        <div className="card">
          <div className="card-header">Quotes</div>
          <div className="card-body">
            {randQuote ? (
              <>
                <h2 className="card-title">
                  {randQuote.author || "No Author"}
                </h2>{" "}
                <p className="card-text">&quot;{randQuote.text}&quot;</p>
              </>
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
        <div classname="row">
          <button onClick={getNewQuote}>Get New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
