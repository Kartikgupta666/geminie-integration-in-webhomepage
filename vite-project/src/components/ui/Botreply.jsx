import React from 'react'

export default function Botreply(props) {
    return (
        <>
            <div className="flex justify-start">
                <div className="bg-gray-300 text-black rounded-lg p-2 max-w-xs">
                    {props.reply}
                </div>
            </div>
        </>
    )
}
