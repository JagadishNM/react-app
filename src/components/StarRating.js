//https://dev.to/kartikbudhraja/creating-a-dynamic-star-rating-system-in-react-2c8

import { useState } from "react";

export default function StarRating(){
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
        
        <>
            { [...Array(5)].map((_, index) =>{
                const currentRating = index + 1;
                return (
                    <label key={index}>
                    <input 
                        type="radio"
                        className="star-input"  
                        name="star"
                        value={currentRating}
                        onChange={() => setRating(currentRating)}
                    />
                    <span className="star" 
                    style={{color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    >
                    &#9733;
                    </span>
                </label>
                )
            })
        }
        </>
       
    )
}