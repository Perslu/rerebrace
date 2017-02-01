import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {mount} from 'enzyme'
import UIFormSelect from './UIFormSelect'
import sinon from 'sinon'
import Field from 'redux-form'

describe('UIFormSelect Component', () => {
  it('select should render', ()=>{
    const wrapper = mount(<UIFormSelect meta={{}} options={[]}/>)
    expect(wrapper.find('select').exists())
  })
  it('should add default class if no style type props are given', () => {
    const wrapper = mount(<UIFormSelect meta={{}} options={[]}/>)
    expect(wrapper.find('select').hasClass('default')).to.be.true
    expect(wrapper.find('select').hasClass('primary')).to.be.false
  })
  // it('select should add class fieldInvalid when tauched', ()=>{
  //   const wrapper = mount(<UIFormSelect touched={true} invalid={true} options={[]}/>)
  //   expect(wrapper.find('select').hasClass('fieldInvalid'))
  // })
  it('onClick prop should be called on click event', () => {
    const onClick = sinon.spy()
    const wrapper = mount( <UIFormSelect meta={{}} options={[]} input={{onClick}} />);
    wrapper.find('select').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
  it('onBlur prop should be called on blur event', () => {
    const onBlur = sinon.spy();
    const wrapper = mount(<UIFormSelect meta={{}} options={[]} input={{onBlur}} />);
    wrapper.find('select').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });
  it('onFocus prop should be called on focus event', () => {
    const onFocus = sinon.spy();
    const wrapper = mount(<UIFormSelect meta={{}} options={[]} input={{onFocus}} />);
    wrapper.find('select').simulate('focus');
    expect(onFocus.calledOnce).to.be.true;
  });
  // it('onBlur prop should be called on blur event', () => {
  //   const wrapper = mount(<Field component={UIFormSelect} options={[]} name="selectInput"/>);
  //   expect(wrapper.find('select').exists())
  // });

})
