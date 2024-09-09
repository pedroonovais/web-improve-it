import { StyledImageArea } from "./ImageArea.style"

interface ImageAreaProps{
    children: React.ReactNode
}

export const ImageArea = ({children}:ImageAreaProps) => {
    return <StyledImageArea>{children}</StyledImageArea>
}