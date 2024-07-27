import styles from './ResponsiveLoginForm.module.css';
import React,{useState,useRef,useEffect, useContext} from "react"
import { IoClose } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { loginPopUpContext } from '../Contexts/LoginPopUpContext';

function LoginForm(){
    return (
        <div className={styles.loginContainer}>
            <form action="#">
                <div className={styles.formRow}>
                    <label htmlFor="">نام کاربری</label>
                    <input type="text" placeholder='نام کاربری .........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">رمز عبور</label>
                    <input type="text" placeholder='رمز عبور ..........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">تکرار رمز عبور</label>
                    <input type="text" placeholder='رمز عبور ..........' required/>
                </div>
                <div className={styles.pass}>
                    <a href="#">فراموشی رمز عبور</a>
                </div>
                <div className={styles.formRow}>
                    <input type="submit" value="ورود"/>
                </div>
            </form>
        </div>
    )
}

function SignUpForm(){
    const [signUpUserType, setSignUpUserType] = useState("none");
    const handleUserTypeChange = (type) => {
        setSignUpUserType(type);
    };
    return (
        <div className={styles.SignUpContainer}>
            <div >
            {signUpUserType === 'company' && (
                <CompanySignUpForm></CompanySignUpForm>
            )}
            {signUpUserType === 'customer' && (
                <CustomerSignUpForm></CustomerSignUpForm>
            )}
            {signUpUserType === 'none' && (
                <div className={styles.chooseUserTypeSection}>
                    <h2>ثبت نام</h2>
                    <p>آیا می خواهید یک شرکت را ثبت کنید یا به عنوان یک کاربر عادی ثبت نام کنید؟</p>
                    <div className={styles.chooseUserTypeButtons}>
                        <button onClick={() => handleUserTypeChange('customer')}>کاربر</button>
                        <button onClick={() => handleUserTypeChange('company')}>شرکت</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
function CustomerSignUpForm(){
    return(
        <div>
            <form action="#">
                <div className={styles.formRow}>
                    <label htmlFor="">ایمیل</label>
                    <input type="text" placeholder='آدرس ایمیل.......' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">نام کاربری</label>
                    <input type="text" placeholder='نام کاربری.........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">رمز عبور</label>
                    <input type="text" placeholder='رمز عبور.......' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">تکرار رمز عبور</label>
                    <input type="text" placeholder='تکرار رمز عبور.....' required/>
                </div>
                <div className={`${styles.signUpButton} ${styles.formRow}`}>
                    <input type="submit" value="ثبت نام"/>
                </div>
            </form>
        </div>
    )
}
function CompanySignUpForm(){
    return(
        <div>
            <form action="#">
                <div className={styles.formRow}>
                    <label htmlFor="">ایمیل</label>
                    <input type="text" placeholder='آدرس ایمیل.......' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">نام کاربری</label>
                    <input type="text" placeholder='نام کاربری.........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">نام شرکت</label>
                    <input type="text" placeholder='نام شرکت.........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">آدرس شرکت</label>
                    <input type="text" placeholder='آدرس شرکت.........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">شماره تلفن شرکت</label>
                    <input type="text" placeholder='شماره تلفن شرکت.........' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">رمز عبور</label>
                    <input type="text" placeholder='رمز عبور.......' required/>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="">تکرار رمز عبور</label>
                    <input type="text" placeholder='تکرار رمز عبور.....' required/>
                </div>
                <div className={`${styles.signUpButton} ${styles.formRow}`}>
                    <input type="submit" value="ثبت نام"/>
                </div>
            </form>
        </div>
    )
}

function LoginSignUpRadioButton(props){
    
    return(
        <div className={styles['switch-container']}>
            <input type="checkbox" id="switch" className={styles['switch-input']} checked={props.isSignUp} onChange={props.handleToggle}/>
            <label htmlFor="switch" className={styles['switch-label']}>
            <div className={styles['switch-label-content']} data-login="Login" data-signup="Sign Up">
                {/* {isSignUp ? 'Sign Up' : 'Login'} */}
                <p>ورود</p>
                <p>ثبت نام</p>
            </div>
            </label>
        </div>
    );
}

function ResponsiveLoginForm(props){
    const {setOpenPopUp} = useContext(loginPopUpContext);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };
    return (props.trigger) ? (
        <div className={styles.popUpContainer}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <header>
                        <button className={styles.closeButton} onClick={()=>setOpenPopUp(false)}>
                            <IoClose className={styles.closeIcon}></IoClose>
                        </button>
                        <div className={styles.personIcon}>
                            <IoPersonOutline></IoPersonOutline>
                        </div>
                        <LoginSignUpRadioButton isSignUp={isSignUp} handleToggle={handleToggle}></LoginSignUpRadioButton>
                    </header>
                    <div >
                        {isSignUp ?  <SignUpForm></SignUpForm> : <LoginForm />}
                    </div>
                    {/* {isSignUp ? <formContainer><formContainer/> : <LoginForm></LoginForm>} */}
                </div>
            </div>
        </div>
    ) : "";
}
export default ResponsiveLoginForm
