import * as React from 'react'
import * as ReactDom from 'react-dom'
import Bingo from './bingo'
import './assets/reset.less'

export default class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        console.log(this)
        return (
            <div>
                <Bingo shope="large" />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)