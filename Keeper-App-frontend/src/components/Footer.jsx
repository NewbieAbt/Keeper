import React from "react"

function Footer(){

const year = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright © {year}</p>
            <p>ABT</p>
        </footer>
    )
}

export default Footer;