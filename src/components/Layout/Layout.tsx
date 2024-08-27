import { Hero } from "../Hero/Hero"

interface LayoutProps{
    children?: React.ReactNode
    textHero: string
    bannerImage: string
    btnAtendimento?: boolean
}

export const Layout = ({children, textHero, bannerImage, btnAtendimento}: LayoutProps) => {
    return (
        <div>
            <Hero img={bannerImage} btnAtendimento={btnAtendimento}>
                {textHero}
            </Hero>
            <main>{children}</main>
        </div>
    )
}