import * as React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import "./index.css";
const Home = React.lazy(() => import("./containers/Home/Home"));
const Loading = () => <p>Loading ...</p>;
const App = () => (
  <HashRouter>
    <Layout>
      <React.Suspense fallback={<Loading />}></React.Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about"></Route>
        <Route path="/projects"></Route>
        <Route path="/articles"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </Layout>
  </HashRouter>
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
