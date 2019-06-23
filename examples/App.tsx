import * as React from 'react'
import * as ReactDom from 'react-dom'
import Bingo from '../components/button/index'
import '../components/style/reset.less'

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
    document.getElementById('app') as HTMLElement
)