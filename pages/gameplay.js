import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import ReactPlayer from 'react-player'
import React, { useState } from "react";
import { RWebShare } from "react-web-share";


export default function Home() {
  return (
    
    <div className="main">

    <Flex flexDir={"column"} justify={"center"}  paddingBottom={"38px"}>

    <Flex flexDir={"column"} align={"center"} marginTop={"67px"} marginLeft={"11"} >
         
    <ReactPlayer url={"https://youtu.be/XV8vBqNu9nI"}
      width={"1016px"} height={"579px"} 
      playsInline={true}
      playing={true}
      controls={false}
      volume={0.75}>
      </ReactPlayer>

    <Flex paddingTop={"72px"} justifyContent={"space-between"} width={"1016px"}>
      <Flex>
      <Button width={"170px"} border={"1px solid #383636"}  color={"white"} background={""} _hover={{backgroundColor:"#FF3465", color:"white"}}>Previous</Button>
      <Button width={"170px" }marginLeft={"49px"} border={"1px solid #383636"} color={"white"} background={""} _hover={{backgroundColor:"#FF3465", color:"white"}}>Next</Button>
      </Flex>

    <div>
      <RWebShare
        data={{
          text: "Hey checkout this amazing player, which let's you play random content of your taste",
          url: "https://www.oldtv.xyz",
          title: "OldTV",
        }}
        onClick={() => console.log("shared successfully!")}>
        <Button width={"170px"} border={"1px solid #383636"} color={"white"} background={""} _hover={{backgroundColor:"#FF3465", color:"white"}}>Share</Button>
      </RWebShare>
    </div>

    </Flex>
    </Flex>
    </Flex>
  </div>
)
}