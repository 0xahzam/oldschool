import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import ReactPlayer from 'react-player'


export default function Home() {
  return (
    
    <div className="main">

    <Flex flexDir={"column"} justify={"center"}  paddingBottom={"38px"}>



    <Flex flexDir={"column"} align={"center"} marginTop={"67px"} marginLeft={"11"}>

    <Flex p="12" rounded={"9px"} background={"black"} border={"1px solid white"} width={"1016px"} height={"579px"}/>    

    <Flex paddingTop={"72px"} justifyContent={"space-between"} width={"1016px"}>
      <Flex>
      <Button width={"170px"} border={"1px solid #383636"}  color={"white"} background={""}>Previous</Button>
      <Button width={"170px" }marginLeft={"49px"} border={"1px solid #383636"} color={"white"} background={""}>Next</Button>
      </Flex>
      <Button width={"170px"} border={"1px solid #383636"} color={"white"} background={""}>Share</Button>
    </Flex>
    </Flex>

    </Flex>

    
  </div>
)
}