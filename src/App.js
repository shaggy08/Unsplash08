import React, { useState ,useRef} from "react";
import "./App.css";
import Header from "./Components/Header";
import Catogery from "./Components/Catogery";
import Banner from "./Components/Banner";
import Gallery from "./Components/Gallery";

function App() {
  const [query, setquery] = useState("");
  const [page,setpage]=useState(1);
  const prevValue = useRef('')
  return (
    <div className="App">
      <Header />
      <Catogery />

      <Banner query={query} setquery={setquery} prevValue={prevValue} page={page} setpage={setpage}/>
      <Gallery query={query} setquery={setquery} prevValue={prevValue} page={page} setpage={setpage} />
    </div>
  );
}

export default App;
