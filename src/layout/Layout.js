import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div className={classes.grid}>
            { props.userOnline && <MainNavigation /> }
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;