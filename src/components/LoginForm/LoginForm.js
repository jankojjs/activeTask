import { useRef } from 'react';
import { useContext } from 'react';
import LoginContext from '../../store/login-context';
import { useHistory } from 'react-router-dom';
import classes from './LoginForm.module.css'; 

function LoginForm() {
    const loggedInCtx = useContext(LoginContext);
    let history = useHistory();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function loginFormHandler(e) {
        e.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPwd = passwordInputRef.current.value;

        fetch(
            'https://jjsolutions.rs/api.php?username='+enteredUsername+'&password='+enteredPwd
        ).then(response => response.json()).then(data => {
            if(data.user !== undefined) {
                loggedInCtx.loginUser(data.user);
                localStorage.setItem('user_id',data.user.user_id);
                localStorage.setItem('username',data.user.username);
                localStorage.setItem('avatar',data.user.profile_image);
                localStorage.setItem('verified',data.user.verified);
                history.push('/');
            } else {
                alert('Please check if you entered valid credentials.')
            }
        })

    }

    return <div className={classes.formDiv}>
        <form>
            <input type='text' name='username' placeholder='enter username' required ref={usernameInputRef} />
            <input type='password' name='password' placeholder='enter password' required ref={passwordInputRef} />
            <input className='alt' type='reset' value='Reset' />
            <button className='btn' onClick={loginFormHandler}>Submit</button>
        </form>
    </div>
}

export default LoginForm;