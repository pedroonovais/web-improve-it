import { createContext, useState, ReactNode } from 'react';

interface FormData {
  tipoServico: string
  servicosSelecionados: string[]
  seguradoPorto: boolean | null
  marcaVeiculo: string
  anoFabricacao: number | null
  anoModelo: number | null
  modelo: string
  cep: number | null
}

interface FormContextProps {
  formData: FormData
  setFormData: (data: FormData) => void;
}

interface FormProviderProps {
  children: ReactNode
}

const defaultFormData: FormData = {
  tipoServico: '',
  servicosSelecionados: [],
  seguradoPorto: null,
  marcaVeiculo: '',
  anoFabricacao: null,
  anoModelo: null,
  modelo: '',
  cep: null,
}

const defaultContextValue: FormContextProps = {
  formData: defaultFormData,
  setFormData: () => {}
}

export const FormContext = createContext<FormContextProps>(defaultContextValue)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}
