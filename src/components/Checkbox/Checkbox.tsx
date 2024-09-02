import { StyledCheckbox, StyledLabel } from "./Checkbox.style"

interface CheckboxProps {
    children: React.ReactNode
    name?: string
    id?: string
    value?: string
}

export const Checkbox = ({ children, name, id, value }: CheckboxProps) => {
    return (
        <>
            <StyledCheckbox name={name} id={id} value={value} />
            <StyledLabel htmlFor={id}>{children}</StyledLabel>
        </>
    )
}