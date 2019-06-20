import * as React from 'react'
import * as ReactDom from 'react-dom'
import Bingo from './bingo'
import './assets/reset.less'

export default class App extends React.Component<{}, {}> {

    private handleClick = () => {
        console.log(this)
    }

    public render(): JSX.Element {
        return (
            <div>
                <Bingo type="success" text="is btn"  size="large" click={ this.handleClick } />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)