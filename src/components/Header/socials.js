import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubFull} from 'react-icons/di'
import {SiGmail} from 'react-icons/si'

function Socials(){
    return(
    <div className="headerSocials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><DiGithubFull/></a>
        <a href="mailto:thomasmccalister@gmail.com"><SiGmail/></a>
    </div>
    );
}

export default Socials