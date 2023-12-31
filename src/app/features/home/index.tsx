import Container from "@/app/core/components/container/container";
import Hero from "@/app/core/layout/hero/hero";
import HomeHero from "@/app/features/home/components/hero";
import LiverpoolShirt from "@/app/core/assets/images/home/liverpool-shirt.png";
import LiverpoolLogo from "@/app/core/assets/images/home/liverpool-logo.png";
import BarcelonaShirt from "@/app/core/assets/images/home/barcelona-shirt.png";
import BarcelonaLogo from "@/app/core/assets/images/home/barcelona-logo.png";
import LiverpoolBanner from '@/app/core/assets/images/home/liverpool-banner.png';
import BarcelonaBanner from '@/app/core/assets/images/home/barcelona-banner.png';
import Featured from "@/app/features/home/featured/brands";
import KidsCollection from "@/app/features/home/featured/kids_collection";

export default function Home() {
  const items = [
    {
      id: 1,
      title: 'Liverpool',
      image: LiverpoolShirt,
      logo: LiverpoolLogo,
      banner: LiverpoolBanner,
      description: 'The Liverpool F.C. Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from at least 75% recycled polyester fibres.'
    },
    {
      id: 2,
      title: 'Barcelona',
      image: BarcelonaShirt,
      logo: BarcelonaLogo,
      banner: BarcelonaBanner,
      description: 'The Barcelona F.C. Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from at least 75% recycled polyester fibres.'
    },
    {
      id: 3,
      title: 'Bayern',
      image: LiverpoolShirt,
      logo: BarcelonaLogo,
      banner: LiverpoolBanner,
      description: 'The Bayern F.C. Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from at least 75% recycled polyester fibres.'
    }
  ]
  return (
    <Container>
      <Hero>
        <HomeHero items={items} />
      </Hero>
      <Featured />
      <KidsCollection />
    </Container>
  )
}
