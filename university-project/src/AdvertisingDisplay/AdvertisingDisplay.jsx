import styles from "./AdvertisingDisplay.module.css";
import React,{useState,useRef,useEffect} from "react"
import PropTypes from 'prop-types';
import logoPath from "../assets/Logo.png";
function AdvertisingDisplay(props) {
    const [advertizingToDisplay,setAdvertising]=useState()
    // setAdvertising(props.advertizing)
    useEffect(()=>{
        setAdvertising(props.advertizing)
        
    },[])
    // console.log(advertizing)
    return(
        // <div className="DisplayableAdvertisingContainer">
        //     <h2 className="AdvertizingImage">{props.advertizing.image}</h2>
        //     <h2 className="AdvertizingTitle">{props.advertizing.title}</h2>
        //     <h3 className="AdvertizingDescription">{props.advertizing.description}</h3>
        //     <h2 className="AdvertizingDate">{props.advertizing.registrationDate}</h2>
        // </div>
        <div className={styles.DisplayableAdvertisingContainer}>
            <div className={styles.AdvertisingDisplayHeader}>
                <img className={styles.AdvertizingImage} src={logoPath} alt="تصویر آگهی"></img>
                <p className={styles.AdvertizingDate}><label>تاریخ ثبت: </label>{props.advertizing.registrationDate}</p>
                <a className={styles.AdvertizingTitle}>{props.advertizing.title}</a>
            </div>
            
            <p className={styles.AdvertizingDescription}><label>توضیحات:</label> {props.advertizing.description}</p>
        </div>
    )
}
// AdvertisingDisplay.propTypes={
//     title=title
//     description=description
//     image=image
//     registrationDate=registrationDate
// }
AdvertisingDisplay.defaultProps={
    advertizing:{
        title:"عنوان پیشفرض",
        description:"توضیحات پیشفرض",
        image:"تصویر پیشفرض",
        registrationDate:"تاریخ پیشفرض"
    }
}

export default AdvertisingDisplay