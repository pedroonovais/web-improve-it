import { StyledInput } from "./Input.style"

interface InputProps {
    children: React.ReactNode
    type: string
    id: string
    name: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({children, type, id, name, onChange, ...rest }: InputProps) => {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <StyledInput
                type={type}
                id={id}
                name={name}
                onChange={(e) => onChange(e)}
                {...rest}
            />
        </>
    )
}