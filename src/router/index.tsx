import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage, CharacterDetailPage, VisitedCharactersPage } from "../pages";


export const router = createBrowserRouter([

  { path: '/', element: <HomePage /> },
  { path: '/character/:name', element: <CharacterDetailPage /> },
  { path: '/visited', element: <VisitedCharactersPage /> },
  { path: '*', element: <Navigate to="/" /> }

])