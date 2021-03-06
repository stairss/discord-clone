import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';

const Login = () => {
    const signIn = e => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png" alt="discord logo" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;