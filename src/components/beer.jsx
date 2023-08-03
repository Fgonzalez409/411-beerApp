import React, { useState,useEffect } from "react";
import Heart from "react-animated-heart";

const Beer = (props) => {
    const[isLiked,setIsLiked] = useState(false)

    // acts as a componentDidMount lifecycle
    useEffect(() => {

    }, [])

    //acts as a componentDidUpdate
    useEffect(() => {

    }, [])

    return (
    <li className="item" key={props.id}>
        <h2>{props.name}</h2>
        <img className="item__image" 
        src={props.image} 
        alt={props.name} />
        <div>
            <button  onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "Liked" : "Hated"}
                {/* <Heart className="heart"isClick={isClick} onClick={() => setClick(!isClick)}/>     */}
            </button>
        </div>
        
    </li>
    )
}
export default Beer