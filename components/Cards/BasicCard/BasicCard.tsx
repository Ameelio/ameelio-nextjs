import React from 'react'
import { Card, CardProps } from 'antd';
interface Props extends CardProps {
}

const BasicCard = (props: Props) => {
    return (
        <Card {...props} className={`rounded ${props.className}`} /> 
    )
}

export default BasicCard
