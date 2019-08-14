import * as React from 'react'
import Button from '../../components/button'


class App extends React.Component<{}, {}> {

    click(e) {
        console.log(e, 'button event   ')
    }

    render(): JSX.Element {
        return (
            <div className="container" style={{ margin: '10px' }}>
                <Button
                    onClick={this.click.bind(this)}
                    types='success'
                    size='large'
                    className='sa hid'
                >
                    哈哈哈哈哈
                </Button>
            </div>
        )
    }
}

export default App 
