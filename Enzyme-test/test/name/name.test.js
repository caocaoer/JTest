import { assert } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15.4';
import Name from '../../src/name/Name';

// const { shallow } = Enzyme;

// Enzyme.configure({
//     adapter: new Adapter()
// });

describe('Enzyme的浅渲染测试套件====================', () => {
    it('Frame包含<Header/>', () => {
        const name = shallow(<Name />);
        expect(name.find('div').length).toEqual(1);
    });
    // it('Example组件中按钮的名字为text的值', () => {
    //     const name = '按钮';
    //     let app = shallow(<Name text={name}/>);
    //     assert.equal(app.find('button').text(). name);
    // });
});