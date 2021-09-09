import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';
import Stopwatch from '../components/Stopwatch/Stopwatch';

function Layout(props) {
    return (
        <div className={classes.grid}>
            { props.userOnline && <MainNavigation /> }
            { props.userOnline && <div className={classes.stopwatch}><Stopwatch /></div> }
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;