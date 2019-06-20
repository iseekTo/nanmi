import * as React from 'react'
import classnames from 'classnames'
import { p_type, size } from './types'
import './assets/p-btn.less'

interface IProps {
    type: p_type,
    size?: size,
    text: string,
    click?: () => void,
    defaultclass?: string
}

export default class Bingo extends React.Component<IProps, {}> {
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
        return (
            <div>
                <button type="button" className={btnclass} onClick={click}>{ text }</button>
            </div>
        )
    }
}