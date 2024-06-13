
const FooterNet = () => {
    return(
        <>
        <div className="social-net">    
            <a href=""> 
                <img src = '../img/icons/SM-x.svg' alt="X" />
            </a>
            <a href=""> 
                <img onScroll="../img/icons/SM-instagram.svg" alt="Instagram" />
            </a>
            <a href=""> 
                <img src="../img/icons/SM-facebook.svg" alt="Facebook" />
            </a>
            <a href=""> 
                <img src="../img/icons/SM-youtube.svg" alt="Youtube" />
            </a>
            <a href=""> 
                <img src="../img/icons/SM-tiktok.svg" alt="Tiktok" />
            </a>
        </div>
        </>
    )
};

const FooterPolicy = () => {
    return (
        <>
        <div className="politicas">
            <img className="bandera" src="../img/icons/Spain.svg" />
            <a className="legal Spain" href="">
                {" "}Spain
            </a>
            <a className="legal privacy" href="">
                Privacy
            </a>
            <a className="legal google" href="">
                Google Nest Commitment to Privacy
            </a>
            <a className="legal sales" href="">
                Sales Terms
            </a>
            <a className="legal terms" href="">
                Terms of Service
            </a>
        </div>
        </>
    )
};


export { FooterNet, FooterPolicy };