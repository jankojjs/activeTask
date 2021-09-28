import classes from './CommentSingle.module.css';
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { useState } from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import DeleteComment from '../DeleteComment/DeleteComment';

function CommentSingle(props) {
    const [singleComment] = useState(props.singleComment);
    const [deleteModalHandler, setDeleteModalHandler] = useState(false);

    function deleteCommentHandler() {
        // console.log(singleComment.cid);
        // props.changes();
    }

    function openDeleteModalHandler() {
        // console.log(singleComment.cid);
        // props.changes();
        setDeleteModalHandler(true);
    }

    function closeDeleteModalHandler() {
        setDeleteModalHandler(false);
    }

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
                        {/* <span className={classes.editIcon} onClick={editCommentHandler}><RiEdit2Line /></span> */}
                        <span className={classes.deleteIcon} onClick={openDeleteModalHandler}><RiDeleteBin5Line /></span>
                    </div>
                </div>
                <div className={classes.description} dangerouslySetInnerHTML={{ __html: singleComment.comment_desc }}></div>
            </div>
            { deleteModalHandler && <Backdrop onCancel={closeDeleteModalHandler}/> }
            { deleteModalHandler && <DeleteComment onSuccess={props.changes} cid={singleComment.cid} onCancel={closeDeleteModalHandler}/> }
        </div>
    )
}

export default CommentSingle;