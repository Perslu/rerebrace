import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {shallow, render, mount} from 'enzyme'
import UIButton from './index'

describe('UIButton Component', () => {
  
  it('should render', () => {
    const wrapper = mount(<UIButton>test button</UIButton>)
    expect(wrapper.find('button').length).to.equal(1)
  })
  
  // Obsolete
  it('should add default class if no style options are given', () => {
    const wrapper = render(<UIButton />)
    const classes = wrapper.find('button').attr('class')
    expect(classes.indexOf('default')).to.not.equal(-1)
    expect(classes.indexOf('primary')).to.equal(-1)
  })
  
  // Obsolete
  it('should add primary class when primary prop is given', () => {
    const wrapper = render(<UIButton primary />)
    const classes = wrapper.find('button').attr('class')
    expect(classes).to.include('primary')
    expect(classes).to.not.include('default')
  })
  
  it('version 2: should add default class if no style type props are given', () => {
    const wrapper = mount(<UIButton />)
    expect(wrapper.find('button').hasClass('default')).to.be.true
    expect(wrapper.find('button').hasClass('primary')).to.be.false
  })
  
  it('version 2: should add primary class when primary prop is given', () => {
    const wrapper = mount(<UIButton primary />)
    expect(wrapper.find('button').hasClass('primary')).to.be.true
    expect(wrapper.find('button').hasClass('default')).to.be.false
  })
  
  it('renders text given as props.children', () => {
    const wrapper = mount(<UIButton>test button</UIButton>)
    expect(wrapper.find('button').text()).to.equal('test button')
  })
  
  
})
