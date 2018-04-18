import {assert} from 'chai';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from '../src/Index2';

const { shallow, mount, render } = Enzyme;

Enzyme.configure({
    adapter: new Adapter()
});

describe('Enzyme的浅渲染测试套件', () => {
    it('Index组件中按钮的名字为text的值', () => {
        const name = '按钮';
        let app = mount(<Index text={name}/>);
        assert.equal(app.find('button').text(), app.find('p').text());
    });
});

describe('Enzyme render的静态HTML渲染（Static Rendered Markup）中', function () {
    it('Index组件中按钮的名字为子组件Sub中p的值', function () {
        const name = '按钮名';
        let app = render(<Index text={name}/>);
        assert.equal(app.find('button').text(), app.find('p').text());
    })
});