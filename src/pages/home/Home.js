import SideBar from "../../components/sidebar/SideBar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

import "./home.css"

export default function Home() {
    return (
        <>
            <div className="container">
                <SideBar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
} 