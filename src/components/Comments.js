import React, { useState } from 'react'

function Comments({ props }) {
    const [buttonStatus, setButtonStatus] = useState(true);

    function handleCommentsStatus() {
        setButtonStatus(!buttonStatus)
    }

    const handleComment = buttonStatus ? props.map((comment) => (
        <div>
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
        </div>
    )) : null;

    return (
        <div style={{ margin: "20px" }}>
            <button onClick={handleCommentsStatus}>{buttonStatus ? "Hide Comments" : "Show Comments"}</button>
            {handleComment}


        </div>
    )
}
export default Comments;
