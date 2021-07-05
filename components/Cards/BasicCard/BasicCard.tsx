import React from 'react'
import { Card, CardProps } from 'antd';
interface Props extends CardProps {
}

const BasicCard = (props: Props) => {
    return (
        <Card style={{ borderRadius: 4 }} {...props}/> 
    )
}

export default BasicCard
