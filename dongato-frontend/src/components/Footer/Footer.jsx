import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon'
import GithubIcon from '../Icons/GithubIcon/GithubIcon'
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon'
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon'
import logo from './../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid bg-dark">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center mt-2">
                        <Link to="/"><img src={logo} alt="ng games" className="footer__logo" /></Link>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 text-center text-white">
                           
                    </div>
                </div>
                <div className="footer-final row text-center pt-2">
                    <h4 className="text-white">Copyright © Don Gato S.A.S 2023</h4>
                </div>
            </footer>
        </>
    )
}

export default Footer
