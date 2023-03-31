import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './Movies';
import Podcast from './Podcasts';
import HomePage from './Home';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Podcasts" element={<Podcast />} />
          <Route path="Movies" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
