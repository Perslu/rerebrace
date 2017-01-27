import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import UILinkButton from '.'
import UIButton from 'UI/button/UIButton'
import { Link } from 'react-router'


describe('UILinkButton component', () => {
  it('renders component', () => {
    const wrapper = shallow(<UILinkButton to="test">Home</UILinkButton>)
    expect(wrapper.find(Link).exists()).to.be.true
    //console.log(wrapper.debug())
    expect(wrapper.find(Link).find(UIButton).exists()).to.be.true
  })
})
