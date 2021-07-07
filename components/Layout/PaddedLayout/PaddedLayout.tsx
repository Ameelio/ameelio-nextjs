import React from 'react'
import { Layout, LayoutProps } from 'antd';

interface Props extends LayoutProps {}

const PaddedLayout = (props: Props) => {
    return (
        <Layout {...props} className={`${props.className} ameelio-layout`}>
            {props.children}
        </Layout>
    )
}

export default PaddedLayout
