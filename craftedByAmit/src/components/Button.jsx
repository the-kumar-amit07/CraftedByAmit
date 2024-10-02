/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({
    children,
    className,
    type = 'button',
    bgcolor = 'bg-blue-600',
    textColor = 'text-white',
    ...props
}) {
    return (
        <div
            className={
                `px-4 py-2 rounded-md
                ${className}
                ${bgcolor}
                ${textColor}
                ${type}
                `
            }{...props}
        >
            {children}
        </div>
    )
}

export default Button