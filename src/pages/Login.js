import LoginForm from "../components/LoginForm/LoginForm";
import classes from './Login.module.css';

function LoginPage() {
    return (
        <div className={classes.loginCard}>
            <h2 className={classes.headline}>Welcome to activeTask</h2>
            <p className={classes.text}>Please enter your login credentials.</p>
            <LoginForm />
        </div>
    )
}

export default LoginPage;