import { assert } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import UILinkButton from '.'
import UIButton from 'UI/button/UIButton'
import { Link } from 'react-router'


describe('UILinkButton component', () => {
  it('renders component', () => {
    const comp = shallow(<UILinkButton to="test"/>)
    assert(comp.find(UIButton).length == 1, 'Should have UIButton')
    assert(comp.find(Link).length == 1, 'Should have link')
  })
})
