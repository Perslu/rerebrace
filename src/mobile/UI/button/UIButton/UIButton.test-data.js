import React from 'react'
import {assert, expect} from 'chai'
import {shallow, render} from 'enzyme'
import UIButton from './index'

describe('UIButton Component', () => {
  it('should render', () => {
    const wrapper = render(<UIButton />);
    //assert.equal(wrapper.find('button').length, 1);
    expect(wrapper.find('button').length).to.equal(1);
    //assert('foo' === 'bar', 'foo is not bar');
    //assert(Array.isArray([]), 'empty arrays are arrays');
  });
  it('by default should add default class', () => {
    const wrapper = render(<UIButton />);
    expect(wrapper.find('button').attr('class').indexOf('default')).to.not.equal(-1);
    expect(wrapper.find('button').attr('class').indexOf('primary')).to.equal(-1);
  });
  it('should add primary class when primary props given', () => {
    const wrapper = render(<UIButton primary/>);
    expect(wrapper.find('button').attr('class')).to.include('primary');
    expect(wrapper.find('button').attr('class')).to.not.include('default');
  });
});
