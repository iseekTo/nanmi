import * as React from 'react';
import { IconProps } from '../../types/icon'
import './style/index'; 

class Icon extends React.Component<IconProps, {}> {

    constructor(props: IconProps) {
        super(props)
    }

    render(): JSX.Element {
        const {
            t
        } = this.props  
        
        return (
            <div className="container">
                <h1>is Icon</h1>
            </div>
        )
    }
}

export default Icon
