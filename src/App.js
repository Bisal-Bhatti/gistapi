import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Wrapper className="App" data-testid="app">
      <Header
        handleSearch={(e) => {
          setSearch(e);
        }}
      />
      <GlobalStyles />
      <GistList search={search} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
