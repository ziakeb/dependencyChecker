import React from "react";
import "./App.css";
import RepoList from "./components/RepoList";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <Container className="App">
      <RepoList />
    </Container>
  );
}

export default App;
