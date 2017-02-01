import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {shallow, render, mount} from 'enzyme'
import UILabelFormInput from './UILabelForInput'

describe('UILabelForInput Component', () => {
  it('label should render', ()=>{
    const wrapper = mount(<UILabelFormInput/>)
    expect(wrapper.find('label').exists()).to.be.true
  })
  it('span should render', ()=>{
    const wrapper = mount(<UILabelFormInput/>)
    expect(wrapper.find('span').exists()).to.be.false
  })
  it('label should add class default when primary props are not given', () => {
    const wrapper = mount(<UILabelFormInput />)
    expect(wrapper.find('label').hasClass('default')).to.be.true
  })
  it('label should add span child when required props are given', () => {
    const wrapper = mount(<UILabelFormInput required/>)
    expect(wrapper.find('span').exists()).to.be.true
  })
  it('label should add some text when label prop defined', () => {
    const wrapper = mount(<UILabelFormInput label={'some text'} />)
    expect(wrapper.find('label').text()).to.equal('some text')
  })
})
