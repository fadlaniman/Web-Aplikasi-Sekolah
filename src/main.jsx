import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Pages/templatePage.jsx";
import App from "./App.jsx";
import LoginPage from "./fragments/loginPage.jsx";
import AppAdm from "./Pages/appAdm.jsx";
import Akreditas from "./fragments/akreditas.jsx";
import Kurikulum from "./fragments/kurikulum.jsx";
import Guru from "./fragments/daftarGuru.jsx";
import Staf from "./fragments/staff.jsx";
import Ruang from "./fragments/ruang.jsx";
import History from "./fragments/profil.jsx";
import Perpustakaan from "./fragments/perpustakaan.jsx";
import SaranaOlahraga from "./fragments/saranaOlahraga.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Visi from "./fragments/visi & misi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/halamanadmin",
    element: <AppAdm />,
  },
  {
    path: "/deskripsi",
    element: <Page title={<History />} />,
  },

  {
    path: "/profil/visi",
    element: <Page title={<Visi />} />,
  },
  {
    path: "/profil/daftarguru",
    element: <Page title={<Guru />} />,
  },
  {
    path: "/profil/staf",
    element: <Page title={<Staf />} />,
  },
  {
    path: "/akademik/kurikulum",
    element: <Page title={<Kurikulum />} />,
  },
  {
    path: "/akademik/akreditas",
    element: <Page title={<Akreditas />} />,
  },
  {
    path: "/fasilitas/ruang",
    element: <Page title={<Ruang />} />,
  },
  {
    path: "/fasilitas/perpustakaan",
    element: <Page title={<Perpustakaan />} />,
  },
  {
    path: "/fasilitas/saranaolahraga",
    element: <Page title={<SaranaOlahraga />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
