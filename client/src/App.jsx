import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";

//page
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/"exact>      
        <Redirect to="delivery"/>
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
    </>
  );
}

export default App;

//type:   -> can be any of the three in foodtab

//delivry
//dining out
//Nightlife

//master ->url parameters for rendering 