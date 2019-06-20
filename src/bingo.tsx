import * as React from 'react'
import { bin } from './types'

interface IProps {
    shope: bin
}

export default class Bingo extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render(): JSX.Element {
        
        return (
            <div>
                <button >111111111111</button>
                <button >{ this.props.shope }</button>
            </div>
        )
    }
}