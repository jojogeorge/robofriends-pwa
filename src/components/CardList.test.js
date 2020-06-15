import {shallow} from 'enzyme'
import React from 'react';
import renderer from 'react-test-renderer'
import CardList from './CardList'

describe('CardList Component',()=> {
    const mockRobots =[{
        id:1,name:'john snow', username:'john',email:'john@test.com'
    }];

    it('expect CardList compoent to be renedered', ()=>{
        expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1);
        });
        
    it('expect CardList compoent to be renedered', ()=>{
        
        const tree = renderer.create(<CardList robots={mockRobots}/>).toJSON();
        expect(tree).toMatchSnapshot();
    
    });

})

