import React from "react";

const currentTime = new Date();
const currentYear = currentTime.getFullYear();


function Footer() {
    return(
        <footer className="absolute text-center -bottom-0 w-full h-10 ">
            <p className="text-gray-300">Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;