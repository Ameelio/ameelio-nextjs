
import React from 'react'

interface Props {
 className?: string;
 children?: React.ReactNode | React.ReactNode[];    
}

export const H1 = ({className, children}: Props) => {
    return (
        <h1 className={`font-bold text-5xl ${className}`}>
            {children}
        </h1>
    )
}



export const H2 = ({className, children}: Props) => {
    return (
        <h2 className={`font-bold text-3xl ${className}`}>
            {children}
        </h2>
    )
}
