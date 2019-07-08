import * as React from 'react'
import classnames from 'classnames'
import { ButtonProps } from '../../types/button';
import './style/p-btn.less'


export default class Button extends React.Component<ButtonProps, any> {
    constructor(props: ButtonProps) {
        super(props)
    }
    static defaultProps = {
        type: 'none',
        size: 'middle',
        defaultcls: 'p-btn'
    }
    public render() {
        const { types, size, defaultcls, className } = this.props
        const btnclass = classnames(defaultcls, className, {
            [`${defaultcls}`]: defaultcls,
            [`${defaultcls}-${types}`]: types,
            [`${defaultcls}-${size}`]: size,
        })
        
        return (
            <button className={btnclass} {...this.props}></button>
        )
    }
}
