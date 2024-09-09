import { StyledInput } from "./Input.style"

interface InputProps {
    children?: React.ReactNode
    type: string
    id: string
    name: string
    label?: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({children, type, id, name, placeholder, onChange, ...rest }: InputProps) => {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <StyledInput
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                {...rest}
            />
        </>
    )
}