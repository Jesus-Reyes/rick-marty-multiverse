import { createBrowserRouter, Navigate } from "react-router-dom";
import {  CharacterDetailPage, VisitedCharactersPage } from "../pages";
import { App } from "../App";


export const router = createBrowserRouter([

  { path: '/', element: <App /> },
  { path: '/character/:name', element: <CharacterDetailPage /> },
  { path: '/visited', element: <VisitedCharactersPage /> },
  { path: '*', element: <Navigate to="/" /> }

])