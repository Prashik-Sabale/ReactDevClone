import './Navbar.css';
import logo from '../img/reactlogo.png'
function Navbar() {
    return (

        <>
            <span className='head'>Join us for React Conf on May 15-16.Learn more.</span>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link  " aria-current="page" href="#">Learn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Refernce</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Community</a>
                            </li>

                        </ul>
                    </div>
                    <form class="d-flex ">
                        <input class="form-control me-5 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </>
    );
}
export default Navbar;