import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {shallow, render, mount} from 'enzyme'
import UIFormTextarea from './UIFormTextarea'
import sinon from 'sinon'

describe('UIFormTextarea Component', () => {

  it('should add default class if no style type props are given', () => {
    const wrapper = mount( <UIFormTextarea meta={{}}/>)
    expect(wrapper.find('textarea').hasClass('default')).to.be.true
    expect(wrapper.find('textarea').hasClass('primary')).to.be.false
  })
  it('renders text given as props.children', () => {
    const wrapper = mount(<UIFormTextarea meta={{}}>test button</UIFormTextarea>)
    expect(wrapper.find('textarea').text()).to.equal('test button')
  })
  it('onClick prop should be called on click event', () => {
    const onClick = sinon.spy()
    const wrapper = mount( <UIFormTextarea input={{onClick}} meta={{}}  />);
    wrapper.find('textarea').simulate('click')
    expect(onClick.calledOnce).to.be.true
  });
  it('onBlur prop should be called on blur event', () => {
    const onBlur = sinon.spy()
    const wrapper = mount( <UIFormTextarea input={{onBlur}} meta={{}}  />);
    wrapper.find('textarea').simulate('blur')
    expect(onBlur.calledOnce).to.be.true
  });
  it('onFocus prop should be called on focus event', () => {
    const onFocus = sinon.spy()
    const wrapper = mount( <UIFormTextarea input={{onFocus}} meta={{}}  />);
    wrapper.find('textarea').simulate('focus')
    expect(onFocus.calledOnce).to.be.true
  });

})
