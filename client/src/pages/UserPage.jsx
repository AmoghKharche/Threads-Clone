import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
    return (
        <>
            <UserHeader />
            <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about Threads.." />
            <UserPost likes={1600} replies={974} postImg="/post2.png" postTitle="A day in my Life" />
            <UserPost likes={10} replies={8} postImg="/post3.png" postTitle="This guy is fabulous" />
            <UserPost likes={1560} replies={896} postTitle="This is my first Thread." />


        </>
    )
}

export default UserPage
