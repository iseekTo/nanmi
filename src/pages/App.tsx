import * as React from 'react'
import Button from '../../components/Button/Button'

interface AppState {};
class App extends React.Component<{}, AppState> {

    render(): JSX.Element {
        return (
            <div className="container" style={{ margin: '10px' }}>
                <Button 
                    types="success"
                    size="large"
                    icon="emmm"
                >
                    萨尔撒多111
                </Button>
            </div>
        )
    }
}

export default App 
