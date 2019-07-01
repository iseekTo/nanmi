import * as React from 'react'
import Button from '../../components/Button/Button'


interface AppState {};
class App extends React.Component<{}, AppState> {

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
                    萨尔撒多
                </Button>
            </div>
        )
    }
}

export default App 
