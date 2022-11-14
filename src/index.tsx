import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import RandomBrewery, { RandomBreweryLoader } from './random_brewery';

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RandomBrewery />} path='/' loader={RandomBreweryLoader}>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
);
