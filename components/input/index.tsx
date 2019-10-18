import * as React from 'react'

type inputOmitProps = Omit<
	React.HTMLProps<HTMLInputElement>,
	'onBlur'
>

interface IProps {
	value: string
	onChanges: (val: string) => void
}

class Input extends React.Component<IProps, {}> {
	input: any;

	constructor(props: any) {
		super(props)
		this.input = React.createRef()
	}

	onchange = (event) => {
		console.log(event, 'event')
		this.props.onChanges(event.target.value)
	}

	public render(): JSX.Element {
		const { value } = this.props

		return <input type="text" value={value} onChange={this.onchange} />
	}
}


export default Input;
