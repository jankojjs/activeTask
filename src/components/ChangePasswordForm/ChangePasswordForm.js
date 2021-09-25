import classes from './ChangePasswordForm.module.css';
import { useRef } from 'react';


function ChangePasswordForm(props) {
    const oldPwdInput = useRef();
    const newPwdInput = useRef();
    const newPwdConfInput = useRef();
    
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.headline}>
                    <div className={classes.text}>Change password</div>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.label}>Old Password*</div>
                <input className={classes.input} ref={oldPwdInput} type='text' />
                <div className={classes.label}>New Password*</div>
                <input className={classes.input} ref={newPwdInput} type='text' />
                <div className={classes.label}>Confirm New Password*</div>
                <input className={classes.input} ref={newPwdConfInput} type='text' />
                <div className={classes.mainControls}>
                    <button onClick={props.onCancel} className='alt'>Cancel</button>
                    <input type='submit' className='btn' value='Save'/>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordForm;
