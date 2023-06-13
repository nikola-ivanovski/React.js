import "./App.scss";
import { Academy } from "./components/Academies/Academies";
import { Card } from "./components/Card/Card";
import { Counter } from "./components/Counter/Counter";

function App() {
  const academies = [
    { id: "1", name: "Academy One", description: "Academy One" },
    { id: "2", name: "Academy Two", description: "Academy Two" },
    { id: "3", name: "Academy Three", description: "Academy Three" },
    { id: "4", name: "Academy Four", description: "Academy Four" },
    { id: "5", name: "Academy Five", description: "Academy Five" },
  ];
  return (
    <div className="App">
      <div className="cards">
        <Card
          title="Product One"
          content="Product one description"
          imageUrl=""
        />
        <Card
          title="Product Two"
          content="Product two description"
          imageUrl=""
        />
        <Card
          title="Product Three"
          content="Product three description"
          imageUrl=""
        />
        <Card
          title="Product Four"
          content="Product four description"
          imageUrl=""
        />
        <Card
          title="Product Five"
          content="Product five description"
          imageUrl=""
        />
      </div>
      <div className="academies-container">
        <Academy academies={academies} name="Example Academies" />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
