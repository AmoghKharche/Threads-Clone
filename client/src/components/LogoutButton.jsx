import { Button } from "@chakra-ui/react"
import userAtom from "../../atoms/userAtom"
import { useSetRecoilState } from "recoil";
import useShowToast from "../hooks/useShowToast";
import { HiLogout } from "react-icons/hi"


const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom);
    const showToast = useShowToast()
    const handleLogout = async () => {

        try {

            const res = await fetch("/api/users/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }

            })
            const data = (await res).json();
            console.log(data);
            if (data.error) {
                showToast("Error", data.error, "error")
            }
            localStorage.removeItem("user-threads");
            setUser(null);

        } catch (error) {
            showToast("Error", data.error, "Error")
        }
    }
    return (
        <Button
            position={"fixed"}
            top={"30px"}
            right={"30px"}
            size={"sm"}
            onClick={handleLogout}
        >
            <HiLogout size={20} />
        </Button>
    )
}

export default LogoutButton
