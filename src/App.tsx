import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyMembers = lazy(() => import("./pages/Members/Members"))

function App() {
    return(
        <BrowserRouter>
            <Suspense fallback={<>Carregando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/integrantes" element={<LazyMembers />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;
