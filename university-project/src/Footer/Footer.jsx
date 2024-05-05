import styles from "./Footer.module.css";
import logoPath from "../assets/Logo.png";

function Footer(){
    return(
        <div className={styles.FooterOuterContainer}>
            <div className={styles.FooterContainer}>
                <ul className={styles.FooterInfoList}>
                    <ul>
                        <h2>راهنما</h2>
                        <li>تعرفه اشتراک ها</li>
                        <li>سوالات متداول</li>
                        <li>قوانین و مقررات</li>
                        <li>حریم خصوصی</li>
                    </ul>
                    <ul>
                        <h2>سرویس ها</h2>
                        <li>پروفایل شرکت ها</li>
                        <li>آمار تجارت</li>
                        <li>شبکه ارتباطات</li>
                    </ul>
                
                    <ul>
                        <h2>SAM</h2>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                    </ul>
                    <ul>
                        <img className={styles.logoImage}src={logoPath} alt="" />
                    </ul>
                </ul>
            </div>
        </div>
    )
}
export default Footer