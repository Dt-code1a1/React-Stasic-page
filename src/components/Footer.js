import React from "react";
import facebookIcon from "../assets/FacebookIcon.svg"
import githubIcon from "../assets/GitHubIcon.svg"
import instagramIcon from "../assets/InstagramIcon.svg"
import linkedInIcon from "../assets/LinkedinIcon.svg"
import twitterIcon from "../assets/TwitterIcon.svg"

export default function Footer() {
    return (
       <footer>
           <a href="twitter.com"><img src={twitterIcon}/></a>
           <a href="facebook.com"><img src={facebookIcon}/></a>
           <a href="instagram.com"><img src={instagramIcon}/></a>
           <a href="linkedin.com"><img src={linkedInIcon}/></a>
           <a href="github.com"><img src={githubIcon}/></a>
       </footer>
    )
}