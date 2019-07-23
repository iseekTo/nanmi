import * as React from 'react'
import Button from '../../components/button'

class App extends React.Component<{}, {}> {
    

    render(): JSX.Element {
        return (
            <div className="container" style={{ margin: '10px' }}>
                <Button
                    types='danger'
                    size="large"
                    className="sa hid"
                >
                    哈哈哈哈哈
                </Button>
            </div>
        )
    }
}

export default App 
