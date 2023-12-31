import { Flex, Text, Box, Divider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";


const PostPage = () => {
    const [liked, setLiked] = useState(false)
    return (
        <>
            <Flex>
                <Flex w={"full"} alignItems={"center"} gap={3}>
                    <Avatar src="/zuck-avatar.jpg" size={"md"} name="Amogh Kharche" />
                    <Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>amoghkharche</Text>
                        <Image src="/verified.png" w="4" h={4} ml="4" />
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems={"center"}>
                    <Text fontSize={"sm"} color={"gray.light"} >1d</Text>
                    <BsThreeDots />
                </Flex>

            </Flex>
            <Text my={3}>Let's Talk about Threads.</Text>
            <Box borderRadius={6}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"gray.light"}>
                <Image src="/post1.png" w={"full"} />
            </Box>

            <Flex gap={3} my={3}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>

            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"} fontSize={"sm"} >105 replies</Text>
                <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text color={"gray.light"} fontSize={"sm"} >
                    {200 + (liked ? 1 : 0)} likes
                </Text>
            </Flex>
            <Divider my={4} />
            <Flex justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"2xl"} >👋</Text>
                    <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
                </Flex>
                <Button>
                    Get
                </Button>
            </Flex>
            <Divider my={4} />
            <Comment
                comment="Looks really good!"
                createdAt="2d"
                likes={200}
                username="rohan.taye"
                userAvatar="https://bit.ly/dan-abramov"
            />
            <Comment
                comment="Fabulous"
                createdAt="1d"
                likes={20}
                username="davidright"
                userAvatar="https://bit.ly/prosper-baba"
            />
            <Comment
                comment="Amazing, Keep it up!"
                createdAt="1d"
                likes={150}
                username="segun.lo"
                userAvatar="https://bit.ly/code-beast"
            />

        </>
    )
}

export default PostPage
