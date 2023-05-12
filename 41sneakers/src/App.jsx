import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sneakers } from "./pages/Sneakers";
import { SneakerDetails } from "./pages/SneakerDetail";
import { About } from "./pages/About";

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/kix" element={<Sneakers/>}></Route>
          <Route exact path="/kix/:snkrId" element={<SneakerDetails/>}></Route>
          <Route exact path="/about-us" element={<About/>}></Route>
        </Routes>
      </Layout>
    </>
  );
};
