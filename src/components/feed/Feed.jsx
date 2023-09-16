import './feed.css'
import { Search } from "@mui/icons-material"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__container">
                <form action="." className="search">
                    <div className="search__icon">
                        <Search />
                    </div>
                    <input type="text" placeholder='Search' />
                </form>
                <div className="chat__rooms">
                    <div className="room">
                        <h3>Photography</h3>
                        <div className="room__card">
                            <div className="head">
                                <img src="" alt="" />
                                <div className="header">
                                    <h5>Photography Fanatics</h5>
                                    <p>
                                        If you can see it, you can shoot it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}