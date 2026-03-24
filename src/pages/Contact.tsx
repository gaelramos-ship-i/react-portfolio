import'../styles/contact.scss';
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const  Contact = () => {
    return(
    <div id='sectionContact'>
        <h1>Mon <span>contact</span></h1>

        <div>
            <p>Mon profil vous intérrese ? Contactez moi !</p>
            <div id='flex'>  
                <article>
                    <CiMail />
                    <p>ramosgael108@gmail.com</p>
                </article>
                <article>
                    <IoIosPhonePortrait />
                    <p>07 66 27 10 20</p>
                </article>
                <article>
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/gaël-ramos-7714b0252" target='blank'>
                        <p>Mon profil Linkedin</p>
                    </a>
                </article>
            </div>
        </div>
    </div> 
    )
};

export default Contact;