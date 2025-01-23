import React, { useState, useEffect } from 'react';

const CountUpToFive = () => {
    const [count, setCount] = useState(1); // Initialize state for count

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 5) {
                    clearInterval(interval); // Clear interval when count reaches 5
                    return prevCount; // Stop updating count
                }
                return prevCount + 1; // Increment count
            });
        }, 1000); // Run every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only on mount

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
};

export default CountUpToFive;
