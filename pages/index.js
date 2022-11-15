import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import link from 'react-scroll'
export default function Home() { 
  const scrollTo = (event, selector) => {
  event.preventDefault();
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className='main'>
      <Flex flexDir={"column"} align={"center"}  paddingBottom={"38px"}>

      <Flex color={"white"} gap={"40px"} marginTop={"52px"} marginRight={"94px"} marginLeft={"auto"}>
        <Text paddingTop={"10px"}><a href='#story' onClick={(event) => scrollTo(event, '#story')}> Story </a></Text>
        <Text paddingTop={"10px"}><a href="https://www.google.com">Contribute Open Source</a></Text>
        <Button background={"#FF3465"} width={"176px"} height={"44px"} _hover={{backgroundColor:"white", color:"#FF3465"}}><a href="https://twitter.com/intent/user?user_id=1037821162548428800">Follow Creator </a> </Button>
      </Flex>

      <Flex flexDir={"column"} marginTop={"52px"}>
        <Text fontSize={"128px"} textAlign={"center"} letterSpacing={"7px"} fontFamily={"Six Caps, sans-serif"} color={"white"}>WATCH YOUR FAVOURITE CONTENTS </Text>

        <Text fontFamily={"Architects Daughter, cursive"} textAlign={"center"} color={"white"} fontSize={"32px"}>The old school style</Text>

      </Flex>

      <Flex marginTop={"40px"} _hover={{cursor:"pointer"}} alt={"play anything random"}>
      <Link href="./player">
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
      </Link>
      </Flex>

      <Flex marginTop={"140px"} gap={"58px"} width={"1400px"} _hover={{cursor:"pointer"}}>
        <Flex flexDir={"column"} gap={"38px"}>
          <Link href="./tmkoc"><Image src="./1.png" alt=""/></Link>
          <Link href="./anime"><Image src="./2.png" alt=""/></Link>
        </Flex>
        <Flex flexDir={"column"} gap={"38px"}>
          <Link href="./comedy"><Image src="./3.png" alt="comedy"/></Link>
          <Link href="./gameplay"><Image src="./4.png" alt="gameplay"/></Link>
        </Flex>
      </Flex>

      <div id='story'>
      <Flex flexDir={"column"} color={"white"} width={"1400px"} marginTop={"140px"}>
        <Text fontSize={"100px"} letterSpacing={"0px"} fontFamily={"Six Caps, sans-serif"}>STORY</Text>
        <Text fontSize={"25px"}>
        The story starts when I was eating my lunch and I&apos;ve this old habit of mine to watch something while eating. I&apos;m doing this since I was a kid and I belive we all do this. The problem arrives when we open OTT Platforms and start searching but coundn’t find anything. I realized how good it was back then we just have to switch on our TV and watch whatever offered and it was actually pretty good back then.So I came up with this idea and created OldTV.xyz, watch your favourites shows the old style. It will play a random episode from YouTube.
        </Text>
      </Flex>
      </div>

      <Flex flexDir={"row"} color={"white"} marginTop={"240px"} width={"1400px"} justifyContent={"space-between"}>
      <Flex paddingTop={"4px"} _hover={{cursor:"pointer"}}>
      <a href="https://twitter.com/intent/tweet?text= Hey everyone checkout this amazing player by @priynshuratnakr which plays anything randomly of your choice from YouTube so you don't have to.">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6_670)">
      <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_6_670">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </a>
      </Flex>


        <Flex gap={"31px"}>
        <Text paddingTop={"10px"} >support our work via </Text>
        <a href="https://www.buymeacoffee.com/0xratnakar">
        <Image _width="165" height={"34"}  hover={{cursor:"pointer"}} src="./bmc.png" alt="bmc"/>
        </a>
        </Flex>


      </Flex>


      </Flex>
    </div>
  )
}
