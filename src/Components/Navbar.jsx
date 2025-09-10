import { Link } from "react-router"

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light shadow-lg mb-5 ">
            <div class="container-fluid">
                <Link class="navbar-brand ms-2" to={'/'}>StudyPoint</Link>
                    <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">StudyPoint</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to={"/html"} >HTML</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link main" to={"/css"}>CSS</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link main" to={"/js"}>JavaScript</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar