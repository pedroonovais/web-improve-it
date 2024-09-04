import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext/FormContext";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyMembers = lazy(() => import("./pages/Members/Members"))

// Variaveis do formulario
const LazyInitialForm = lazy(() => import("./pages/ServiceForm/InitialForm"))
const LazyTypeServiceForm = lazy(() => import("./pages/ServiceForm/TypeServiceForm"))
const LazySelectServiceForm = lazy(() => import("./pages/ServiceForm/SelectServiceForm"))

function App() {
    return(
        <FormProvider>
            <BrowserRouter>
                <Suspense fallback={<>Carregando</>}>
                    <Routes>
                        <Route path="/" element={<LazyHome />} />
                        <Route path="/integrantes" element={<LazyMembers />} />
                        
                        {/* Rotas do formulario de atendimento */}
                        <Route path="/atendimento" element={<LazyInitialForm />} />
                        <Route path="/atendimento/tipo-servico" element={<LazyTypeServiceForm />} />
                        <Route path="/atendimento/selecionar-servicos" element={<LazySelectServiceForm />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </FormProvider>
    )
}

export default App;
