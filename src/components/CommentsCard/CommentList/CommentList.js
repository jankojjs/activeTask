import { useState } from 'react';
import classes from './CommentList.module.css';
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";

function CommentList(props) {
    const [comments] = useState(props.comms);

    return (
        <div className={classes.wrap}>
            {
                comments.map((singleComment)=>{
                    return (
                        <div key={singleComment.cid} className={classes.singleCommentWrap}>
                            <div className={classes.avatar}>
                                <div className={classes.avatarText}>{singleComment.username.charAt(0)}</div>
                            </div>
                            <div className={classes.commentPart}>
                                <div className={classes.commentTop}>
                                    <div className={classes.text}>
                                        <span className={classes.name}>Janko S.</span>
                                        <span className={classes.date}>{singleComment.timestamp.slice(0, 16)}</span>
                                    </div>
                                    <div className={classes.controls}>
                                        <span className={classes.editIcon}><RiEdit2Line /></span>
                                        <span className={classes.deleteIcon}><RiDeleteBin5Line /></span>
                                    </div>
                                </div>
                                <div className={classes.description} dangerouslySetInnerHTML={{ __html: singleComment.comment_desc }}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList;