import LoginForm from "../LoginForm/LoginForm";
import classes from './LoginCard.module.css';

function LoginCard() {
    return (
        <div className={classes.loginCard}>
            <h2 className={classes.headline}>Welcome to activeTask</h2>
            <p className={classes.text}>Please enter your login credentials.</p>
            <LoginForm />
        </div>
    )
}

export default LoginCard;