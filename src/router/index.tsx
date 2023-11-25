import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "../ui/pages/HomePage";
import { CharacterDetailPage } from "../ui/pages/CharacterDetailPage";

export const router = createBrowserRouter([

  { path: '/', element: <HomePage /> },
  { path: '/character/:name', element: <CharacterDetailPage /> },
  { path: '*', element: <Navigate to="/" /> }

])