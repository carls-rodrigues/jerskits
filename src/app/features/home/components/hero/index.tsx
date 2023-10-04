'use client'

import Box from "@/app/core/components/box/box";
import Typography from "@/app/core/components/typography/typography";

import {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";

import HeroBg from '@/app/core/assets/images/home-bg.png'
import VideoImage from '@/app/core/assets/images/home/video.png'

import BrandNikeIcon from '@/app/core/assets/icons/brand-nike.svg'
import DarkArrow from '@/app/core/assets/icons/dark-arrow.svg'
import LightArrow from '@/app/core/assets/icons/light-arrow.svg'


type HeroProps = {
    items: Array<{
        id: number,
        title: string,
        image: StaticImageData,
        logo: StaticImageData,
        banner: StaticImageData,
        description: string
    }>
}

export default function HomeHero({ items = [] }: HeroProps) {
    const [currentItem, setCurrentItem] = useState<typeof items[0]>({} as typeof items[0])
    const [nextItem, setNextItem] = useState<typeof items[1]>({} as typeof items[0])
    const [loading, setLoading] = useState<boolean>(true)

    const handleNextItem = () => {
        if (items.length < 1) return
        if (items.length === 1) return setCurrentItem(items[0])
        const currentIndex = items.findIndex(item => item.id === currentItem.id)
        const nextIndex = currentIndex + 1
        if (nextIndex < items.length) {
            setCurrentItem(items[nextIndex])
            if(nextIndex + 1 < items.length) setNextItem(items[nextIndex + 1])
            else setNextItem(items[0])
        } else {
            setCurrentItem(items[0])
            setNextItem(items[1])
        }
    }

    const handlePrevItem = () => {
        if (items.length < 1) return
        if (items.length === 1) return setCurrentItem(items[0])
        const currentIndex = items.findIndex(item => item.id === currentItem.id)
        const prevIndex = currentIndex - 1
        if (prevIndex >= 0) {
            setCurrentItem(items[prevIndex])
            setNextItem(items[prevIndex + 1])
        } else {
            setCurrentItem(items[items.length - 1])
            setNextItem(items[0])
        }
    }
    
    useEffect(() => {
        if(items.length < 1) return
        if(items.length === 1) return setCurrentItem(items[0])
        if(items.length > 1) {
            setCurrentItem(items[0])
            setNextItem(items[1])
        }
        setLoading(false)
    }, []);
    
    if(loading) return <Box className="w-full min-h-screen bg-neutral-light-grey" />
    return(
        <Box className="w-full h-full bg-neutral-light-grey relative overflow-x-hidden">
            <Box className="w-full h-full absolute">
                <Box className="w-full h-full absolute bg-neutral-black/90" />
                <Box className="w-full h-full">
                    <Image src={HeroBg} alt="bg" className="h-full" />
                </Box>
            </Box>
            <Box className="container m-auto min-h-screen z-50 relative max-w-1200">
                <Box className="pt-[11.4rem]">
                    <Box className="h-81 w-60">
                        <Image src={currentItem.logo} alt="liverpool-logo" className="w-full"/>
                    </Box>
                </Box>
                <Box className="flex gap-[1rem] select-none mt-[4.8rem] flex-col">
                    <BrandNikeIcon />
                    <Typography className="text-xl uppercase font-bold leading-[3.6rem] text-neutral-white">
                        Home kit 21/22
                    </Typography>
                    <Box className="mt-[3rem] min-w-1106 h-252">
                        <Image src={currentItem.banner} alt={currentItem.title} />
                    </Box>
                </Box>
                <Box className="flex w-full gap-[21rem] relative z-50">
                    <Box className="flex w-551 h-241 backdrop-blur-xl bg-neutral-black/10 mt-[5rem]">
                        <Box className="">
                            <Image src={VideoImage} alt="video" />
                        </Box>
                        <Box className="pl-[3rem] pt-[5.6rem] flex flex-col pr-5 w-310">
                            <Typography className="font-bold text-xl leading-[1.5] text-neutral-white">
                                How Was Made?
                            </Typography>
                            <Typography className="text-sm text-neutral-white/30">
                                The recycled polyester used in Nike products begins as recycled plastic bottles, which are cleaned, shredded into flakes and converted into pellets.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="w-[40rem] mt-[4rem]">
                        <Typography className="text-base text-neutral-grey font-medium">
                            {currentItem.description}
                        </Typography>
                        <Box className="flex w-full justify-between mt-[9.5rem]">
                            <button
                                className="py-[1.6rem] px-[2.4rem] bg-neutral-soft-grey flex items-center gap-[1.3rem] cursor-pointer"
                            >
                                <Typography className="text-base font-bold leading-[1.5]">
                                    SHOP NOW
                                </Typography>
                                <DarkArrow />
                            </button>
                            <Box className="flex gap-[3rem]">
                                <button
                                    className="w-50 h-50 rounded-full border border-neutral-white/20 flex items-center justify-center rotate-180"
                                    onClick={handlePrevItem}
                                >
                                    <LightArrow />
                                </button>
                                <button
                                    className="w-50 h-50 rounded-full border border-neutral-white/20 flex items-center justify-center"
                                    onClick={handleNextItem}
                                >
                                    <LightArrow />
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="absolute top-[11rem] left-[29.5rem] w-580 h-725">
                    <Image src={currentItem.image} alt="" className="w-full" />
                </Box>
                
                {
                    nextItem?.id && (
                        <Box className="absolute w-443 h-full bg-neutral-light-grey top-0 left-[92%]">
                            <Box className="w-full h-full bg-neutral-black/90 absolute" />
                            <Box className="flex flex-col z-50 relative mt-[7.2rem]">
                                <Box className="w-50 h-50">
                                    <Image src={nextItem.logo} alt="liverpool-logo" className="w-full" />
                                </Box>
                                <Box className="flex select-none mt-[4.8rem] flex-col">
                                    <Box className="flex items-center gap-[1rem]">
                                        <Box className="mt-[1rem]">
                                            <BrandNikeIcon />
                                        </Box>
                                        
                                        <Typography className="text-xl uppercase font-bold leading-[3.6rem] text-neutral-white">
                                            Home kit 21/22
                                        </Typography>
                                    </Box>
                                    <Box className="w-238 h-50">
                                        <Image src={nextItem.banner} alt="" className="w-full h-full" />
                                    </Box>
                                    <Box className="mt-[2.2rem] w-309 h-400">
                                        <Image src={nextItem.image} alt="" className="w-full h-full" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                  )
                }
            </Box>
        </Box>
    )
}