import React,{useState,useRef,useEffect} from "react"
import AdvertisingDisplay from "./AdvertisingDisplay/AdvertisingDisplay";

function Advertising() {
    
    const [advertisingList,setAdvertisingList]=useState([]);
    const [newAdvertising,setNewAdvertising]=useState();
    const [displayableAdvertisingList,setDisplayableAdvertisingList]=useState();
    //initialization
    useEffect(()=>{
        //  sample advertisings!!!!!!!
    let advertising=new AdvertisingClass("عنوان","تاسیس شرکت با مسئولیت محدود مهندسی هوش آفرین رایکا درتاریخ 21/06/1395 به شماره ثبت وارد شوید به شناسه ملی وارد شوید ثبت و امضا ذیل دفاترتکمیل گردیده که خلاصه آن به شرح زیر جهت اطلاع عموم آگهی میگردد. موضوع شرکت: اجرای پروژه های کامیپیوتری در همه ی حوزه های هوش مصنوعی، نرم افزاری، سخت افزاری، فناوری اطلاعات، تجارت الکترونیکی، شبکه های کامپیوتری و امنیت سیستم ها انجام موضوعات فعالیت در صورت ضرورت قانونی پس از اخذ مجوزهای لازم با قید اینکه ثبت موضوع فعالیت به منزله اخذ و صدور پروانه فعالیت نمی باشد 2 مدت شرکت: نامحدود 3 مرکز اصلی شرکت: رشت خیابان ملت پردیس دانشگاهی دانشگاه گیلان مرکز رشد اتاق 118 کد پستی وارد شوید 4 سرمایه شرکت: مبلغ وارد شوید ریال می باشد. اولین مدیران شرکت برای مدت نامحدود به قرار ذیل تعیین گردیدند: آقای سیدابوالقاسم میرروشندل به سمت رئیس هیئت مدیره و به شماره","تصویر","4/5/1403")
    // setNewAdvertising(<AdvertisingDisplay advertizing={ad}></AdvertisingDisplay>)
    // console.log(ad)
    setAdvertisingList(advertisingList=>[...advertisingList,advertising])
    setAdvertisingList(advertisingList=>[...advertisingList,advertising])
    // setAdvertisingList(advertisingList=>[...advertisingList,advertising])
    // setAdvertisingList(advertisingList=>[...advertisingList,advertising])
    console.log(advertisingList)
    // an array to show each advertising
    },[])
    useEffect(()=>{
        // console.log(advertisingList)
    setDisplayableAdvertisingList(advertisingList.map((advertizing,index)=><li key={index}>
                                                                                <AdvertisingDisplay advertizing={advertizing}></AdvertisingDisplay>
                                                                            </li>))
    },[advertisingList])

    class AdvertisingClass{

        constructor(title,description,image,registrationDate){
            this.title=title
            this.description=description
            this.image=image
            this.registrationDate=registrationDate
            setNewAdvertising(this)
            setAdvertisingList(ad=>[...ad,this])
        }
    }
    return(
        <div className="advertisingListContainer">
            <h1 className="advertisingListHeader">آگهی ها</h1>
            <div className="advertisingListBody">
                <div className="sortingContainer">
                <select className="sortingOptionSelector">
                    <option value="">جدیدترین</option>
                    <option value="">قدیمی ترین</option>
                </select>
                <p>مرتب سازی</p>
                </div>
                <ul className="advertisingList">
                    {displayableAdvertisingList}
                </ul>
            </div>
        </div>
)
}
export default Advertising