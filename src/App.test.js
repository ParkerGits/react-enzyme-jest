import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain an element with logo as alt tag', () => {
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
