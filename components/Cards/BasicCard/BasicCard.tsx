import React from 'react'
import { Card, CardProps } from 'antd';
interface Props extends CardProps {
}

const BasicCard = (props: Props) => {
    return (
        <Card {...props} className={`${props.className} rounded`} /> 
    )
}

export default BasicCard
