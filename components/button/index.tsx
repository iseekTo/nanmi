import * as React from 'react'
import classnames from 'classnames'
import { buttonType, buttonSize } from '../../types/button'
import './style/p-btn.less'

interface IProps {
    type: buttonType,
    size?: buttonSize,
    text: string,
    click?: () => void,
    defaultclass?: string
}

export default class Button extends React.Component<IProps, {}> {
    static defaultProps = {
        type: 'none',
        size: 'middle',
        defaultclass: 'p-btn'
    }
    constructor(props: IProps) {
        super(props)
    }

    public render(): JSX.Element {
        const { type, size, defaultclass, click, text } = this.props
        const btnclass = classnames({
            [`${defaultclass}`]: defaultclass,
            [`${defaultclass}-${type}`]: type,
            [`${defaultclass}-${size}`]: size
        })
        return <button type="button" className={btnclass} onClick={click}>{ text }</button>
    }
}
