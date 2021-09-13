import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { BiClipboard } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FiAlignJustify, FiUser } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../store/login-context';

function MainNavigation() {
    const lgoutCtx = useContext(LoginContext);
    const [avatarLetter, setAvatarLetter] = useState("a");
    
    useEffect(()=>{
        setAvatarLetter(localStorage.getItem('username').charAt(0));
    }, [avatarLetter])

    return (
    <div>
        <div className={classes.navmob}>
            <div className={classes.wrap}>
                <div className={classes.item}>
                    <Link to='/'>
                        <BsFillGridFill className={classes.icon} size={24}/> 
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/my-work'>
                        <BiClipboard className={classes.icon} size={24} />
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/my-profile'>
                        <FiUser className={classes.icon} size={24} />
                    </Link>
                </div>
                <div className={`${classes.item} ${classes.others}`}>
                    <FiAlignJustify className={classes.icon} size={24} />
                    <div className={classes.modal}>
                        <ul>
                            <li>
                                <Link to='/friends'>
                                    <span className={classes.span}>
                                        <FaUserFriends size={16} className={classes.smicon}/> 
                                    </span>Friends
                                </Link>
                            </li>
                            <li>
                                <Link to='/messages'>
                                    <span className={classes.span}>
                                        <AiFillMessage size={16} className={classes.smicon} />  
                                    </span>Messages
                                </Link>
                            </li>
                            <li>
                                <button onClick={lgoutCtx.logoutUser} className='alt'>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.navd}>
            <div className={classes.dwrap}>
                <div className={classes.avatar}>{avatarLetter}</div>
                <div className={classes.dlinks}>
                    <div className={classes.ditem}>
                        <Link to='/'>
                            <BsFillGridFill className={classes.dicon} size={28}/> 
                        </Link>
                    </div>
                    <div className={classes.ditem}>
                        <Link to='/my-work'>
                            <BiClipboard className={classes.dicon} size={28} />
                        </Link>
                    </div>
                    <div className={classes.ditem}>
                        <Link to='/my-profile'>
                            <FiUser className={classes.dicon} size={28} />
                        </Link>
                    </div>
                    <div className={classes.ditem}>
                        <Link to='/friends'>
                            <FaUserFriends className={classes.dicon} size={28} />
                        </Link>
                    </div>
                    <div className={classes.ditem}>
                        <Link to='/messages'>
                            <AiFillMessage className={classes.dicon} size={28} />
                        </Link>
                    </div>
                    <div className={`${classes.ditem} ${classes.dlogout}`}>
                        <IoLogOutOutline onClick={lgoutCtx.logoutUser} className={classes.dicon} size={30} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainNavigation;