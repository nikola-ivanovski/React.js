import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { Header } from "./components/header/header";
import { SwapiPeople } from "./Pages/People/People";
import { SwapiPlanets } from "./Pages/Planets/Planets";
import { SingleCharacter } from "./components/SingleCharacter/SingleCharacter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<SwapiPeople />} />
          <Route path="/planets" element={<SwapiPlanets />} />
          <Route path="/character/:id" element={<SingleCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
