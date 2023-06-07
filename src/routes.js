import { Favoritos } from "./pages/favoritos";
import { Inicio } from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Player } from "pages/Player";
import { PaginaBase } from "pages/PaginaBase";
import { NaoEncontrada } from "pages/NaoEncontrada";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
