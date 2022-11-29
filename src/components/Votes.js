import React, { useState } from 'react'


function Votes({ like, dislike }) {
    const [increaseLike, setIncreaseLike] = useState(like);
    const [decreaseLike, setDecreaseLike] = useState(dislike);
    function handleLike() {
        setIncreaseLike(increaseLike => increaseLike + 1);
        setDecreaseLike(decreaseLike => decreaseLike - 1)
    }
    function handleDislike() {
        setDecreaseLike(decreaseLike => decreaseLike + 1)
        setIncreaseLike(increaseLike => increaseLike - 1);
    }

    return (
        <div>
            <button onClick={handleLike}>{increaseLike}👍</button>
            <button onClick={handleDislike}>{decreaseLike}👎</button>
        </div>
    )
}
export default Votes;