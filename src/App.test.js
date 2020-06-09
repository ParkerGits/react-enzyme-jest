import React from 'react';
import { render } from '@testing-library/react';
import App, { Link } from './App';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<App /> shallow rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('<App /> mount rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
    wrapper.unmount()
  })
  it('matches the snapshot', () => {
    const tree = mount(<App />)
    expect(toJson(tree)).toMatchSnapshot()
    tree.unmount()
  })
})

describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  })
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  })
  it('returns null with a true hide props', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({ hide: true })
    expect(wrapper.get(0)).toBeNull()
  })
})
