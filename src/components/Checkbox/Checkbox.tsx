import { useState } from "react"
import { StyledCheckbox, StyledLabel } from "./Checkbox.style"

interface CheckboxProps {
    children: React.ReactNode
    name?: string
    id?: string
    value?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean
}

export const Checkbox = ({ children, name, id, value, onChange, isChecked }: CheckboxProps) => {
    
    
    return (
        <>
            <StyledCheckbox 
                name={name} 
                id={id} 
                value={value} 
                checked={isChecked}
                onChange={onChange}
            />
            <StyledLabel htmlFor={id} checked={isChecked}>{children}</StyledLabel>
        </>
    )
}