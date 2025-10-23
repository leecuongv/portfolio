import React, { useState, useEffect } from "react";
export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World!/>";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000); // Wait for 1 second before calling onComplete
            }
        }, 100);
        return () => clearInterval(interval);
    },[onComplete])
    return <div className="fixed inset-0 z-50 bg-surface text-primary flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold"> {text} <span className="animate-blink ml-1">|</span>
        </div>
        <div className="w-[200px] h-[2px] bg-card rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-primary shadow-[0_0_15px_rgba(11,87,208,0.6)] animate-loading-bar">
                {" "}
            </div>
        </div>
    </div>
}