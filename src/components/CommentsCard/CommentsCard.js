import classes from './CommentsCard.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'; 
import NewCommentButton from './NewCommentButton/NewCommentButton';
import CommentList from './CommentList/CommentList';

function CommentsCard() {
    const location = useLocation();
    const [taskId, setTaskId] = useState(location.pathname.replace('/task/',''));
    const [noCommentsHandler, setNoCommentsHandler] = useState(false);
    const [commentsArray, setCommentsArray] = useState();

    function fetchCommentsHandler() {
        fetch(
            'https://jjsolutions.rs/api/getcommentsapi.php?task_id='+taskId
        )
        .then(response=>response.json())
        .then(data => {
            if(data.length !== 0) {
                setCommentsArray(data);
                setNoCommentsHandler(true);
            } else {
                setNoCommentsHandler(false);
            }
        })
    }

    useEffect(() => {
        fetchCommentsHandler();

        return (taskId);
    }, [taskId])
    
    function pushNewHandler() {
        setNoCommentsHandler(false);
        fetchCommentsHandler();
    }

    return (
        <div className={classes.card}>
            <div className={classes.discussion}>Discussion</div>
            <NewCommentButton pushNew={pushNewHandler}/>
            { noCommentsHandler && <CommentList comms={commentsArray}/> }
        </div>
    )
}

export default CommentsCard;