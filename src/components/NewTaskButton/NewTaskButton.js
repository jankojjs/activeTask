function NewTaskButton(props) {
    return (
        <div className='alt' onClick={props.onClick}>
            Add a task to this list
        </div>
    )
}

export default NewTaskButton;