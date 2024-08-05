import React from 'react'

export default function Userchat(props) {
    return (
        <>
            <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
                    {props.command}
                </div>
            </div>
        </>
    )
}
