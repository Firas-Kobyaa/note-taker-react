import React from "react"


const Footer = () => {
    let curYear = new Date().getFullYear();

    return (
    <footer>
    <p>copyright &copy; {curYear} </p>
    </footer>
    )
}

export default Footer;