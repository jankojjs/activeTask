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

        const url='https://jjsolutions.rs/api/loginapi.php';
        const formData = new FormData();
        formData.append('username', enteredUsername);
        formData.append('password', enteredPwd);

        fetch(url, { method: 'POST', body: formData })
        .then((response) => {
        return response.json();
        })
        .then((body) => {
            if(body.user !== undefined) {
                loggedInCtx.loginUser(body.user);
                localStorage.setItem('user_id',body.user.user_id);
                localStorage.setItem('username',body.user.username);
                localStorage.setItem('avatar',body.user.profile_image);
                localStorage.setItem('verified',body.user.verified);
                localStorage.setItem('firstname',body.user.firstname);
                localStorage.setItem('lastname',body.user.lastname);
                localStorage.setItem('email',body.user.email);
                history.push('/');
            } else {
                alert('Please check if you entered valid credentials.')
            }
        });
    }

    return <div className={classes.formDiv}>
        <form>
            <input type='text' name='username' placeholder='enter username' required ref={usernameInputRef} autoComplete="off" />
            <input type='password' name='password' placeholder='enter password' required ref={passwordInputRef} />
            <input className='alt' type='reset' value='Reset' />
            <button className='btn' onClick={loginFormHandler}>Submit</button>
        </form>
    </div>
}

export default LoginForm;