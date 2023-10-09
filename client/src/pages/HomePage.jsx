import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <Link to={"/amoghkharche"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>
    )
}

export default HomePage;