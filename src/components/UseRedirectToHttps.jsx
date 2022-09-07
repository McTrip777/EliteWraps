import React, {useEffect} from 'react';
import {useLocation} from "react-router";

const UseRedirectToHttps = () => {
    let location = useLocation()
    useEffect(() => {
        
        if (window.location.protocol!=="https:") {
            window.location.replace("https://www.elitewraps.com/"+location.pathname);
        }
    })
};

export default UseRedirectToHttps;