import classes from './MyProfileCard.module.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


function MyProfileCard() {
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [firstname, setFirstname] = useState(localStorage.getItem('firstname'));
    const [lastname, setLastname] = useState(localStorage.getItem('lastname'));
    const [userId, setUserId] = useState(localStorage.getItem('user_id'));
    const firstnameInput = useRef();
    const lastnameInput = useRef();
    const emailInput = useRef();

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.headline}>
                    <div className={classes.text}>Basic Info</div>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.img}>
                    <div className={classes.profileImg}></div>
                    <div className={classes.imgControls}>
                        <div className={classes.imgLabel}>
                            Profile Photo
                        </div>
                        <btn className='btn'>Choose file</btn>
                    </div>
                </div>
                <div className={classes.label}>First Name*</div>
                <input className={classes.input} ref={firstnameInput} defaultValue={firstname} type='text' />
                <div className={classes.label}>Last Name*</div>
                <input className={classes.input} ref={lastnameInput} defaultValue={lastname} type='text' />
                <div className={classes.label}>Email Address*</div>
                <input className={classes.input} ref={emailInput} defaultValue={email} type='text' />
                <div className={classes.mainControls}>
                    <Link to='/' className='alt'>Cancel</Link>
                    <input type='submit' className='btn' value='Save'/>
                </div>
            </div>
        </div>
    )
}

export default MyProfileCard;
