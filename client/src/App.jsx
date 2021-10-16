import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import  RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

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
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </>
  );
}

export default App;

//type:   -> can be any of the three in foodtab

//delivry
//dining out
//Nightlife

//master ->url parameters for rendering 