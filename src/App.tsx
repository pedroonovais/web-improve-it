import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext/FormContext";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyMembers = lazy(() => import("./pages/Members/Members"))

// Variaveis do formulario
const LazyInitialForm = lazy(() => import("./pages/ServiceForm/InitialForm"))
const LazyTypeServiceForm = lazy(() => import("./pages/ServiceForm/TypeServiceForm"))
const LazySelectServiceForm = lazy(() => import("./pages/ServiceForm/SelectServiceForm"))
const LazyConfirmServicesForm = lazy(() => import("./pages/ServiceForm/ConfirmServicesForm"))
const LazyConfirmPortoCustomer = lazy(() => import("./pages/ServiceForm/ConfirmPortoCustomer"))
const LazyVehicleData = lazy(() => import("./pages/ServiceForm/VehicleData"))
const LazyCep = lazy(() => import("./pages/ServiceForm/Cep"))
const LazyConfirmCep = lazy(() => import("./pages/ServiceForm/ConfirmCep"))
const LazyConfirmBudget = lazy(() => import("./pages/ServiceForm/ConfirmBudget"))
const LazyApprovedBudget = lazy(() => import("./pages/ServiceForm/ApprovedBudget"))
const LazyReviewData = lazy(() => import("./pages/ServiceForm/ReviewData"))
const LazyDiagnosis = lazy(() => import("./pages/ServiceForm/InitDiagnosis"))
const LazyDescProblemDiagnosis = lazy(() => import("./pages/ServiceForm/DescProblemDiagnosis"))
const LazyConfirmDataDiagnosis = lazy(() => import("./pages/ServiceForm/ConfirmDataDiagnosis"))

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
                        <Route path="/atendimento/dados-revisao" element={<LazyReviewData />} />
                        <Route path="/atendimento/selecionar-servicos" element={<LazySelectServiceForm />} />
                        <Route path="/atendimento/confirmar-servicos" element={<LazyConfirmServicesForm />} />
                        <Route path="/atendimento/confirmar-cliente-porto" element={<LazyConfirmPortoCustomer />} />
                        <Route path="/atendimento/dados-veiculo" element={<LazyVehicleData />} />
                        <Route path="/atendimento/cep" element={<LazyCep />} />
                        <Route path="/atendimento/confirmar-cep" element={<LazyConfirmCep />} />
                        <Route path="/atendimento/confirmar-orcamento" element={<LazyConfirmBudget />} />
                        <Route path="/atendimento/orcamento-finalizado" element={<LazyApprovedBudget />} />
                        <Route path="/atendimento/diagnostico" element={<LazyDiagnosis />} />
                        <Route path="/atendimento/descricao-problema-diagnostico" element={<LazyDescProblemDiagnosis />} />
                        <Route path="/atendimento/confirmar-dados-diagnostico" element={<LazyConfirmDataDiagnosis />} />

                    </Routes>
                </Suspense>
            </BrowserRouter>
        </FormProvider>
    )
}

export default App;
