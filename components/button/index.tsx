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
        const { types, size, defaultcls, style ,className, diasbled, loading } = this.props
        
        const btnclass = {
            className: classnames(defaultcls, className, {
                [`${defaultcls}`]: defaultcls,
                [`${defaultcls}-${types}`]: types,
                [`${defaultcls}-${size}`]: size,
            }),
            style
        }


        return (
            <button {...btnclass} >{this.props.children}</button>
        )
    }
}

