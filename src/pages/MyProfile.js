import MyProfileCard from '../components/MyProfileCard/MyProfileCard';
import classes from './MyProfile.module.css';

function MyProfilePage() {
    return (
        <div>
            <h2 className={classes.headline}>My Profile</h2>
            <div className={classes.grid}>
                <MyProfileCard />
            </div>
        </div>
    )
}

export default MyProfilePage;