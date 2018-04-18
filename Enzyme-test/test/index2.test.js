import { assert } from 'chai';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from '../src/Index2';

const { shallow, mount } = Enzyme;

Enzyme.configure({
    adapter: new Adapter()
});

describe('Enzyme的浅渲染测试套件', () => {
    it('Example组件中按钮的名字为text的值', () => {
        const name = '按钮';
        let app = mount(<Index text={name}/>);
        assert.equal(app.find('button').text(). name);
        assert.equal(app.find('p').text(). name);
    });
});