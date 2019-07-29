import * as React from 'react';
import { render, mount } from 'enzyme'
import Button from '../index'

describe('render button component', () => {
	it('is render default of button', () => {
		const container = render(<Button />)
		expect(container.contents).toMatchSnapshot()
	})
})