import * as React from 'react'
import Button from '../../components/Button/Button'

class App extends React.Component<{}, {}> {

    handleClick = (e: any) => {
        console.dir(e)
    }

    render(): JSX.Element {
        return (
            <div className="container">
                <Button 
                    onClick={this.handleClick}
                    type="success"
                    size="large"
                    className="asdsd"
                    style={{ padding: '20px' }}
                    icon="emmm"
                >
                    萨尔撒多11111
                </Button>
            </div>
        )
    }
}

export default App 
