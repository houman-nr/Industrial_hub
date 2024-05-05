import logoPath from "./assets/Logo.png";
function SiteIntroduction(){
    return(
        <div className="siteIntroductionContainer">
            <div className="siteIntroductionImage">
                <img src={logoPath} alt="" />
            </div>
            <div className="siteIntroductionText">
                <h1>SAM</h1>
                <h3>پلتفرمی برای ارتباط{<br></br>} شرکت های کشاورزی</h3>
                <button>ثبت نام رایگان</button>
            </div>
        </div>
    )
}

export default SiteIntroduction