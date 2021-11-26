import classes from "./PreLoginNav.module.css";

function PreLoginNav(props) {
  return (
    <div className={classes.grid}>
      <div className={classes.logo}>activeTask</div>
      <div className={classes.controls}>
        <div className={classes.navItem}>Features</div>
        <div className={classes.navItem}>Pricing</div>
        <div className={classes.navItem}>What's New</div>
      </div>
      <div className={classes.ctas}>
        <div onClick={props.login} className={classes.login}>
          Log in
        </div>
        <div className={classes.signup}>Sign up</div>
      </div>
    </div>
  );
}

export default PreLoginNav;
