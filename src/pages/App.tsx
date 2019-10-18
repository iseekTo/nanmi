import * as React from 'react'
import Button from '../../components/button';
import Input from '../../components/input';

interface IState {
    inpVal: string
}

class App extends React.Component<{}, IState> {

	constructor(props: any) {
        super(props)
        this.state = {
            inpVal: ''
        }
	}
    

    click(e) {
        console.log(e, 'button event   ')
    }

    onChangeInput = (val: string) => {
        
        this.setState({
            inpVal: val
        })
    }

    render(): JSX.Element {
        const { inpVal } = this.state

        return (
            <div className="container" style={{ margin: '10px' }}>
                <h1>{inpVal}</h1>
                <Button
                    onClick={this.click.bind(this)}
                    types='success'
                    size='large'
                    className='sa hid'
                >
                    ojbk
                </Button>
                
                <Input 
                    value={inpVal}
                    onChanges={this.onChangeInput}
                />
                
            </div>
        )
    }
}

export default App 
