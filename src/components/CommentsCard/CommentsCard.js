import classes from './CommentsCard.module.css';
import { useState } from 'react';
import NewCommentButton from './NewCommentButton/NewCommentButton';

function CommentsCard() {
    const [newCommentHandler, setNewCommentHandler] = useState(false);

    function openNewCommentModal() {
        setNewCommentHandler(true);
    }

    function closeNewCommentModal() {
        setNewCommentHandler(false);
    }

    return (
        <div className={classes.card}>
            <div className={classes.discussion}>Discussion</div>
            { newCommentHandler ? <div onClick={closeNewCommentModal}>aaa</div> : <NewCommentButton onClick={openNewCommentModal}/> }
        </div>
    )
}

export default CommentsCard;