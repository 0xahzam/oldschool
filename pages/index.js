import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className='main'>
      <Flex flexDir={"column"} align={"center"}>

      <Flex color={"white"} gap={"40px"} marginTop={"52px"} marginRight={"94px"} marginLeft={"auto"}>
        <Text paddingTop={"10px"}>Story</Text>
        <Text paddingTop={"10px"}>Contribute Open Source</Text>
        <Button background={"#FF3465"} width={"176px"} height={"44px"} _hover={{backgroundColor:"white", color:"#FF3465"}}>Follow Creator</Button>
      </Flex>

      <Flex flexDir={"column"} marginTop={"52px"}>
        <Text fontSize={"128px"} textAlign={"center"} letterSpacing={"7px"} fontFamily={"Six Caps, sans-serif"} color={"white"}>WATCH YOUR FAVOURITE CONTENTS </Text>

        <Text fontFamily={"Architects Daughter, cursive"} textAlign={"center"} color={"white"} fontSize={"32px"}>The old school style</Text>

      </Flex>

      <Flex marginTop={"40px"}>
      <svg width="348" height="355" viewBox="0 0 416 423" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_31_115)">
      <ellipse cx="208" cy="211.5" rx="184" ry="187.5" fill="#FF3465"/>
      </g>
      <ellipse cx="208" cy="211.5" rx="184" ry="187.5" fill="url(#paint0_linear_31_115)"/>
      <path d="M317.575 187.478L167.04 94.9711C148.886 83.8148 126 97.4894 126 119.493V304.507C126 326.511 148.886 340.185 167.04 329.029L317.575 236.522C335.475 225.522 335.475 198.478 317.575 187.478Z" fill="#FF3465"/>
      <defs>
      <filter id="filter0_f_31_115" x="0" y="0" width="416" height="423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_31_115"/>
      </filter>
      <linearGradient id="paint0_linear_31_115" x1="208" y1="24" x2="208" y2="399" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1C1C1C"/>
      <stop offset="1" stop-color="#1C1C1C" stop-opacity="0.8"/>
      </linearGradient>
      </defs>
      </svg>
      </Flex>


      </Flex>
    </div>
  )
}
