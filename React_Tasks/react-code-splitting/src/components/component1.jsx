
import React from "react";
export default function Component1() {
    return (
        <div>
            component1
            <div>
                <ul>
                    {[...Array.from(Array(10000).keys())].map((key) => (
                        <li key={key}>{key}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}