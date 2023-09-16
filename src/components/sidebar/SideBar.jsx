import './sidebar.css';
import { PeopleAltOutlined, Settings } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

export default function SideBar() {
    const sidebarLinks = [
        { icon: <PeopleAltOutlined />, text: 'Chat Rooms' },
        { icon: <PersonOutlineOutlinedIcon />, text: 'My Profile' },
        { icon: <ChatBubbleOutlineRoundedIcon />, text: 'Private Chats' },
        { icon: <StarBorderRoundedIcon />, text: 'Starred' },
        { icon: <HelpOutlineRoundedIcon />, text: 'Help' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <ul className="sidebar__list">
                    {sidebarLinks.map((link, index) => (
                        <div className="sidebar__links" key={index}>
                            {link.icon}
                            <p>{link.text}</p>
                        </div>
                    ))}
                </ul>

                <div className="sidebar__bottom">
                    <div className="bottom__links">
                        <Settings />
                        <p>Settings</p>
                    </div>
                    <div className="bottom__links">
                        <PersonOutlineOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    ) 
}
