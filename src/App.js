import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Question1 from "./Components/Question1";
import Question2 from "./Components/Question2";

function App() {
  const [name, setName] = useState("");

  const [view, setView] = useState(1)

  return (
    <div className="App">
      <Header />
      {view === 1 && (
        <Question1 enteringName={(e) => setName(e.target.value)} />
      )}

{view === 2 && (
        <Question2 enteringName={(e) => setName(e.target.value)} />
      )}
      {name}
    </div>
  );
}

export default App;
