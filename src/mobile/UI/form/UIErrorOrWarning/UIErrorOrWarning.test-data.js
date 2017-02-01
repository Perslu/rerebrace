import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {mount} from 'enzyme'
import UIErrorOrWarning from './UIErrorOrWarning'

describe('UIErrorOrWarning Component', () => {
  it('span should render', ()=>{
    const wrapper = mount(<UIErrorOrWarning/>)
    expect(wrapper.find('span').exists())
  })
  it('span should add class errorColor when input tauched', ()=>{
    const wrapper = mount(<UIErrorOrWarning touched={true} error={true} warning=''/>)
    expect(wrapper.find('span').hasClass('errorColor'))
  })
  it('span should add class warningColor when input tauched', ()=>{
    const wrapper = mount(<UIErrorOrWarning touched={true} warning='true' error=''/>)
    expect(wrapper.find('span').hasClass('warningColor'))
  })


  it('span should add class warningColor when input tauched', ()=>{
    const wrapper = mount(<UIErrorOrWarning touched={true}  error='true'/>) // dla error lub warning = true warunek prawdziwy
    expect(wrapper.find('span').hasClass('warningColor'))
  })

})

