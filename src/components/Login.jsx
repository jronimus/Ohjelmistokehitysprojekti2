import '../styles/LoginSignUp.css';
import Modal from './Modal';
import google from '../Images/Icons/google.png'

const Login = ({ onSignUp }) => {

    const handleSignUp = () => onSignUp();
    
    return (
        
            <div className="form-box">
                <div className="curved">
                <h2> Welcome<br/>back! </h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 35 1440 280"><path fill="whitesmoke" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,234.7C480,245,600,171,720,133.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="form-content">
                    <form action="#" className='form'>
                        <div className="input-field">
                            <input type="text" required />
                            <label>Username or email</label>
                        </div>
                        <div className="input-field next-input">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <a href="#" className="forgot-pass-link">Forgot password?</a><br/>
                        <div className="log-in">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                    <p className="or">or</p>
                    <div className="sign-in wrapper">
                        <button type="submit" className="btn-sign-in target">
                        <img src={google} alt='google-logo' />
                        <a href="#" id="signup-link">Sign in with Google</a>
                        </button>
                    </div>
                    <div className="terms">
                        <span className="dimColor">By continuing, you agree to JungleFind's</span> Terms of Service, Privacy Policy
                        <hr/>
                        <div>
                            <span className="dimColor">Not on JungleFind yet?</span> <span onClick={handleSignUp}>Register here</span>
                        </div>
                    </div>    
                </div>
            </div>
        
    )
     
}

export default Login;    