import './topbar.css'
import {Search, Chat, Person, Notifications} from "@mui/icons-material"

export default function TopBar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">StudyBuddy</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input type="text" placeholder='Search' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <h3>Homepage</h3>
                    <h3>Timeline</h3>
                </div>
                <div className="topbar__icons">
                    <div className="icons__items">
                        <Person />
                        <span className="topbar__iconbadge">1</span>
                    </div>
                    <div className="icons__items">
                        <Chat />
                        <span className="topbar__iconbadge">1</span>
                    </div>
                    <div className="icons__items">
                        <Notifications />
                        <span className="topbar__iconbadge">1</span>
                    </div>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}