import { Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { BsThreeDots } from "react-icons/bs";
const PostPage = () => {
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
        </>
    )
}

export default PostPage
