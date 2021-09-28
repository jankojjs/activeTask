import { useState } from 'react';
import classes from './CommentList.module.css';
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import CommentSingle from '../CommentSingle/CommentSingle';

function CommentList(props) {
    const [comments] = useState(props.comms);

    return (
        <div className={classes.wrap}>
            {
                comments.map((singleComment)=>{
                    return (
                        <CommentSingle singleComment={singleComment} key={singleComment.cid} changes={props.changes}/>
                    )
                })
            }
        </div>
    )
}

export default CommentList;