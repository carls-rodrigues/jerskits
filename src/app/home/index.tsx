import Container from "@/app/components/container/container";
import Hero from "@/app/layout/hero/hero";
import HomeHero from "@/app/home/components/hero";

export default function Home() {
    return (
        <Container>
            <Hero>
                <HomeHero />
            </Hero>
        </Container>
    )
}
