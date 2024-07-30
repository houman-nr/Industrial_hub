import React,{useState,useRef,useEffect} from 'react';
import MapComponent from './MapComponent';
import Header from './Header';
import ResponsiveLoginForm from "./ResponsiveLoginForm/ResponsiveLoginForm";
import { loginPopUpContext } from './Contexts/LoginPopUpContext';
const App = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    return (
        <div>
            {/* <loginPopUpContext.Provider value={{setOpenPopUp}}>
                <main>
                    <Header></Header>
                </main>
                <ResponsiveLoginForm trigger={openPopUp}></ResponsiveLoginForm>
            </loginPopUpContext.Provider> */}
            <MapComponent></MapComponent>
        </div>
    );
};

export default App;
