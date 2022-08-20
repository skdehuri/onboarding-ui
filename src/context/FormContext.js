import { useState, createContext, useContext } from 'react'

export const FormContext = createContext()

export default function FormProvider({ children }) {
    const [formData, setFormData] = useState({})

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormData = () => useContext(FormContext)
