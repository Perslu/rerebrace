import 'UI/_testing/init'
import React from 'react'
import {expect} from 'chai'
import {shallow, render, mount} from 'enzyme'
import UIButton from './index'
import sinon from 'sinon'

describe('UIButton Component', () => {

  it('should render', () => {
    const wrapper = mount(<UIButton>test button</UIButton>)
    expect(wrapper.find('button').length).to.equal(1)
  })

  it('should add default class if no style type props are given', () => {
    const wrapper = mount(<UIButton />)
    expect(wrapper.find('button').hasClass('default')).to.be.true
    expect(wrapper.find('button').hasClass('primary')).to.be.false
  })

  it('should add primary class when primary prop is given', () => {
    const wrapper = mount(<UIButton primary />)
    expect(wrapper.find('button').hasClass('primary')).to.be.true
    expect(wrapper.find('button').hasClass('default')).to.be.false
  })

  it('renders text given as props.children', () => {
    const wrapper = mount(<UIButton>test button</UIButton>)
    expect(wrapper.find('button').text()).to.equal('test button')
  })

  it('text inside needed', () => {
    const wrapper = mount( <UIButton>test button</UIButton>)
    expect(wrapper.find('button').text()).to.equal('test button')
  })

  it('onClick prop should be called on click event', () => {
    const onClick = sinon.spy()
    const wrapper = mount( <UIButton onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });

  it('onBlur prop should be called on blur event', () => {
    const onBlur = sinon.spy();
    const wrapper = mount(<UIButton onBlur={onBlur} />);
    wrapper.find('button').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('onFocus prop should be called on focus event', () => {
    const onFocus = sinon.spy();
    const wrapper = mount(<UIButton onFocus={onFocus} />);
    wrapper.find('button').simulate('focus');
    expect(onFocus.calledOnce).to.be.true;
  });

  it('onClick should not be called with disabled prop', () => {
    const onClick = sinon.spy();
    const wrapper = mount( <UIButton onClick={onClick} disabled/>);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.be.false;
  });

  it('default type should be "button"', () => {
    const wrapper = mount(<UIButton />);
    expect(wrapper.find('button').prop('type')).to.equal('button');
  });

  it('type should be "submit" when prop type is submit', () => {
    const wrapper = mount( <UIButton type="submit"/> );
    expect(wrapper.find('button').prop('type')).to.equal('submit');
  });

  it('type should be "reset" when prop type is reset', () => {
    const wrapper = mount( <UIButton type="reset"/>);
    expect(wrapper.find('button').prop('type')).to.equal('reset');
  });

})
