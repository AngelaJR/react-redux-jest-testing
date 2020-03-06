import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../Headline';

import { findByTestAttr } from '../../../../Utils/test-helper';

const setUp = (props={}) => {
	const mountedHeadline = shallow(<Headline {...props }/>);
	return mountedHeadline;
};

describe('Headline Component', () => {
	
	let mountedHeadline;
	
	describe('Have props', () => {
		
		
		beforeEach(() => {
			const props = {
				header: 'Test Header',
				desc: 'Test desc'
			};
			
			mountedHeadline = setUp(props);
		});
		
		it('should render with no errors', () => {
			const component = findByTestAttr(mountedHeadline, 'headline-component');
			expect(component.length).toBe(1);
		});
		
		it('should render a H1', () => {
			const h1 = findByTestAttr(mountedHeadline, 'headline-component');
			expect(h1.length).toBe(1);
		});
		
		it('should render a desc', () => {
			const desc = findByTestAttr(mountedHeadline, 'headline-desc');
			expect(desc.length).toBe(1);
		});
	
	});
	
	describe('Have NO props', () => {
		
		beforeEach(() => {
			mountedHeadline = setUp();
		});
		
		it('should not render', () => {
			const component = findByTestAttr(mountedHeadline, 'headline-component');
			expect(component.length).toBe(0);
		});
		
		it('should render a H1', () => {
			const h1 = findByTestAttr(mountedHeadline, 'headline-component');
			expect(h1.length).toBe(0);
		});
		
		it('should render a desc', () => {
			const desc = findByTestAttr(mountedHeadline, 'headline-desc');
			expect(desc.length).toBe(0);
		});
		
	});
});