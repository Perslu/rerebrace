import { assert } from 'chai'
import { shallow } from 'enzyme'
import UIButton from './index'

describe('UIButton Component',()=>{
  it('should render',()=>{

    //assert('foo' === 'bar', 'foo is not bar');
    //assert(Array.isArray([]), 'empty arrays are arrays');
  });
  it('should render button', () => {
    const wrapper = shallow(<UIButton />);
    assert.equal(wrapper.find('.default').length, 1, 'class default not exist');
  assert.equal(wrapper.find('button').length, 1);
  });
});
