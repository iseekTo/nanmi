import * as React from 'react'
import './style/1.css'
import { ButtonProps } from 'types/button';

interface iState {}

class Button extends React.Component<ButtonProps, iState> {
    
    render(): JSX.Element {
        return (
            <div className="btn">
                <h1 {...this.props}></h1>
            </div>
        )
    }
}

export default Button
// 5.6