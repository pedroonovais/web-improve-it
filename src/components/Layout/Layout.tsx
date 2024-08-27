import { Hero } from "../Hero/Hero"
import bannerImage from "/bannerHome.png"

interface LayoutProps{
    children?: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <Hero img={bannerImage}/>
            <main>{children}</main>
        </div>
    )
}