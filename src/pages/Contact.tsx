import'../styles/contact.scss';
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";

const  Contact = () => {
    return(
    <div className='sectionContact'>
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
            </div>
        </div>
    </div> 
    )
};

export default Contact;