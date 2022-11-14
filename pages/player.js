import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import ReactPlayer from 'react-player'


export default function Home() {
  return (
    
    <div className="main">

    <Flex flexDir={"column"} align={"center"}  paddingBottom={"38px"}>

    <Flex color={"white"} gap={"40px"} marginTop={"52px"} marginRight={"94px"} marginLeft={"auto"}>
      <Image width={"386"} height={"44px"} _hover={{cursor:"pointer"}} src="./bmc.png" alt="bmc"/>
      <Button background={"#FF3465"} width={"176px"} height={"44px"} _hover={{backgroundColor:"white", color:"#FF3465"}}><a href="https://twitter.com/intent/user?user_id=1037821162548428800">Follow Creator </a> </Button>
    </Flex>
    </Flex>
    
    <Flex  width={"1016"} height={"579"} marginTop={"67px"} marginLeft={"11"}>
    <ReactPlayer url="https://www.youtube.com/watch?v=9OB72GZOS4c&list=PLoXkGkpREHNAVv4R9ttq6g03YCIKbZZvW"/>
    </Flex>
    
    </div>

  )
}