import React from 'react'
import { Button as AntdButton, ButtonProps} from 'antd';
interface Props extends ButtonProps {
    placement?: string;
}

const Button = (props: Props) => {
    return (
        <AntdButton {...props}/>
    )
}

export default Button
