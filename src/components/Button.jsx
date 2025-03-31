/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({
    children,
    className,
    type = 'button',
    bgcolor = '',
    textColor = '',
    ...props
}) {
    return (
        <div
            className={`px-4 py-2 rounded-md`}
            style={{backgroundColor:bgcolor,color:textColor}}
            {...props}
        >
            {children}
        </div>
    )
}

export default Button