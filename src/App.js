import RouteSwitch from "pages/router";
import { RootContext } from "context/context";
import { useState } from "react";
import Layout from "components/Layout";
import { GlobalStyle } from "global/style";

function App() {
  const [title, setTitle] = useState("Chá de Casa Nova");
  const [gifts, setGifts] = useState([]);

  return (
    <RootContext.Provider value={{ title, setTitle, gifts, setGifts }}>
      <GlobalStyle />
      <Layout>
        <RouteSwitch />
      </Layout>
    </RootContext.Provider>
  );
}

export default App;
