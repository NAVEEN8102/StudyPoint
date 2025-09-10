function Footer() {
    return (
        < footer style={{ backgroundColor: "#14213D", color:"#ffffff"}} className=" target-footer mt-5 p-5" >
            <div className="p-lg-5 p-2  d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-5">
                        <a target="_blank" href="https://www.instagram.com/anameisnaveen">
                            <i style={{ color: "#fff" }} className="fa-brands fa-instagram fa-2xl m-3"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anameisnaveen">
                            <i style={{ color: "#fff" }} className="fa-brands fa-linkedin fa-2xl m-3"></i></a>
                        <a target="_blank" href="https://github.com/NAVEEN8102">
                            <i style={{ color: "#fff" }} className="fa-brands fa-github fa-2xl m-3"></i></a>
                    </div>
                    <p> © {new Date().getFullYear()} Copyright : StudyPoint </p>
                    <p>Made with{" "} <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                    {" "}by Naveen </p>
                </div>
            </div>
        </footer>
            )
}

export default Footer;

