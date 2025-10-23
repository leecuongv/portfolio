import { useEffect, useState } from "react"


export const LoadingScreen = (props) => {
    const { onComplete } = props
    const [text, setText] = useState("")
    const fulltext = "{ Retrieving MK's Data }"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fulltext.substring(0, index))
            index++

            if (index > fulltext.length) {
                clearInterval(interval)
            }

            setTimeout(() => {
                onComplete();
            }, 2500)

        }, 100)
        return (
            () => {
                clearInterval(interval)
            }
        )
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-surface text-primary">
            <div className="text-xl md:text-4xl mb-4 ml-10 font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-surface rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-primary shadow-[0_0_15px_rgba(11,87,208,0.6)] animate-loading-bar" />
            </div>
        </div>
    )
}