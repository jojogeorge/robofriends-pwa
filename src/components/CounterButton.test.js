import {shallow} from 'enzyme'
import React from 'react';
import renderer from 'react-test-renderer'
import CounterButton from './CounterButton'

describe('CounterButton Component',()=> {


    it('expect CardList compoent to be renedered', ()=>{
        expect(shallow(<CounterButton/>).length).toEqual(1);
        });
        
    it('expect CardList compoent to be renedered', ()=>{
        
        const tree = renderer.create(<CounterButton />).toJSON();
        expect(tree).toMatchSnapshot();
    
    });
    it('correctly increments counter', ()=>{
        
        const wrapper = shallow(<CounterButton/>);
        expect(wrapper.state()).toEqual({count:0});
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count:1});

        //expect(wrapper.props().color).toEqual('red');
    
    });

})

