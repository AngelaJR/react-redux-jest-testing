import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

import { findByTestAttr } from '../../../../Utils/test-helper';

const setUp = (props={}) => {
	const mountedHeader = shallow(<Header {...props }/>);
	return mountedHeader;
};

describe('Header Component', () => {
	
	let mountedHeader;
	
	beforeEach(() => {
		mountedHeader = setUp();
	});
	
	it('should render without errors', () => {
		const wrapper = findByTestAttr(mountedHeader, 'main-header');
		expect(wrapper.length).toBe(1);
	});
	
	it('should render a logo', () => {
		const wrapper = findByTestAttr(mountedHeader, 'logo-img');
		expect(wrapper.length).toBe(1);
	});
});