import MyProfileCard from '../components/MyProfileCard/MyProfileCard';
import classes from './MyProfile.module.css';
import { useState } from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm/ChangePasswordForm';

function MyProfilePage() {

    const [pwdForm, setPwdForm] = useState(true);

    function changePwdHandler() {
        setPwdForm(false);
    }

    function closePwdHandler() {
        setPwdForm(true);
    }

    return (
        <div>
            <h2 className={classes.headline}>My Profile</h2>
            <div className={classes.grid}>
               { pwdForm ? <MyProfileCard pwdFormClick={changePwdHandler}/> : <ChangePasswordForm onCancel={closePwdHandler} /> }
            </div>
        </div>
    )
}

export default MyProfilePage;