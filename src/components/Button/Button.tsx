import { StyledButton } from "./Button.style"

interface ButtonProps{
    children: React.ReactNode
}

export const Button = ({children}: ButtonProps) => {
    return <StyledButton>{children}</StyledButton>
}