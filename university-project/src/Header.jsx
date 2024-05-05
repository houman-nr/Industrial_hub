import searchBarImagePath from "./assets/searchBarImage.png";
import logoPath from "./assets/Logo.png";
function Header(){
    return(
        <div className="headerContainer">
            <div className="headerTop">
                <button className="logInButton">⬅ورود</button>
                <button className="SubscriptionButton">مشاهده اشتراک ها</button>
                <div className="searchBar">
                    <img src={searchBarImagePath} alt="آیکن جستجو" />
                    <input type="text" placeholder="جستجو"></input>
                </div>
                <img className="headerLogoImage" src={logoPath} alt="لوگو" />
            </div>
            <div className="navBar">
                <ul>
                    <li>خدمات</li>
                    <li>درباره ما</li>
                    <li>راه حل ها</li>
                </ul>
            </div>
        </div>
    )
}

export default Header