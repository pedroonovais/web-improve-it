import { StyledButton } from "./Button.style"

interface ButtonProps{
    children: React.ReactNode
    onClick?: () => void
    bgColor?: string
    txtColor?: string
}

export const Button = ({children, onClick, bgColor, txtColor}: ButtonProps) => {
    return <StyledButton 
                onClick={onClick} 
                bgColor={bgColor} 
                txtColor={txtColor}>
                    {children}
            </StyledButton>
}