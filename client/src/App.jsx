// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;

//type:   -> can be any of the three in foodtab

//delivry
//dining out
//Nightlife

//master ->url parameters for rendering 