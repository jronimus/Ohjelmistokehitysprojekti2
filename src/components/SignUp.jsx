import '../styles/LoginSignUp.css';
import Modal from './Modal';
import back from '../Images/Icons/back.png'

const SignUp = ({ onBack }) => {

    const handleBack = () => onBack();

    return (
        <div className="form-box signup">
        <div className="curved">
           <img src={back} className="back"alt='Back icon' onClick={handleBack}/>
           <h2> Create<br />account </h2>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 35 1440 280"><path fill="whitesmoke" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,234.7C480,245,600,171,720,133.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        <div className="form-content">
            <form action="#">
                <div className="input-field">
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div className="input-field next-input">
                    <input type="password" required />
                    <label>Email</label>
                </div>
                <div className="input-field next-input">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="input-field next-input">
                    <input type="password" required />
                    <label>Confirm password</label>
                </div>
                <div className="sign-up">
                    <button type="submit">Sign up</button>
                </div>
            </form>
            <div className="terms">
                <span className="agreement">By continuing, you agree to JungleFind's</span> Terms of Service, Privacy Policy
            </div>    
        </div>
    </div>
    )
}

export default SignUp;        