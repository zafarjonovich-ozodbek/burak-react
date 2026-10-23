import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { About } from "./screens/About";
import { Users } from "./screens/Users";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
            {/* shu url'ga yetib keladi va pastdagi switchdan birxil url'ni qidiradi*/}
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          {" "}
          {/* va birxil url'dagi "component"ni ochib beradi*/}
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          {" "}
          {/* o'zak route(/) eng oxirida bolishi kerak*/}
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <Container>Home</Container>;
}

export default App;
