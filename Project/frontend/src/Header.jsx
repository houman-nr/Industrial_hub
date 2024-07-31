import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import { loginPopUpContext } from './Contexts/LoginPopUpContext';
import logoPath from "./assets/Logo.png";


function LoginSignUpButton(){
  const {setOpenPopUp} = useContext(loginPopUpContext);
    return(
        <button onClick={()=>setOpenPopUp(true)} className='LoginSignUpButton'>
            <a href="#" className='loginButton'>ورد</a>
            <p>/</p>
            <a href="#" className='signUpButton'>ثبت نام</a>
            <div className='searchHover'></div>
        </button>
    );
}

function Header() {
  return (
    <div className='Header'>
      <div className='top'>
        <img className="headerLogoImage" src={logoPath} alt="لوگو" />
        <LoginSignUpButton></LoginSignUpButton>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default Header;
