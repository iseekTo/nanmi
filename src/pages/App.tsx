import * as React from 'react'
import Button from '../../components/button'

class App extends React.Component<{}, {}> {
    
    render(): JSX.Element {
        return (
            <div className="container" style={{ margin: '10px' }}>
                <Button
                    types="success"
                    size="large"
                    icon="emmm"
                >
                    jdjk
                </Button>
            </div>
        )
    }
}

export default App 
