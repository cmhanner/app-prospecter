import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './Layout';
import Home from './pages/Home';
import Database from './pages/Database';
import AddEdit from './pages/AddEdit';
import List from './pages/List';
import About from './pages/About';
import AppDetail from "./pages/AppDetail";
import FeaturedApps from './components/FeaturedApp';

export default function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/" element={<FeaturedApps />} />
      <Route path="/apps/:id" element={<AppDetail />} />
      <Route path = "database" element = {<Database />}/>
      <Route path="addedit" element={<AddEdit />}/>
      <Route path="list" element={<List />}/>
      <Route path="about" element={<About />}/>
    </Route>
  </Routes>
</BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

