import {shallow} from 'enzyme'
import React from 'react';
import renderer from 'react-test-renderer'
import MainPage from './MainPage'


describe('MainPage Component',()=> {
    let wrapper;
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchField: '',
        isPending: false,

    };
    beforeEach(() => {
        wrapper = shallow(<MainPage {...mockProps} />)
    });
   
    it('expect MainPage compoent to be renedered', ()=>{
        expect(wrapper.length).toEqual(1);
    });
        
    it('expect MainPage compoent to be renedered with snapshot', ()=>{     
        const tree = renderer.create(<MainPage {...mockProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('it filters robots correctly',()=>{
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots:[{
                id:3,
                name: 'john',
                email: 'john@gmail.com'
            }],
            searchField: 'john',
            isPending: false,

        };
        const wrapper2 =  shallow(<MainPage {...mockProps2}/>);
        const filteredRobots = [{
            id:3,
            name: 'john',
            email: 'john@gmail.com'
        }];
        expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
    });
    it('it filters robots correctly for wrong search',()=>{
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots:[{
                id:3,
                name: 'john',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: false,

        };
        const wrapper2 =  shallow(<MainPage {...mockProps3}/>);
        expect(wrapper2.instance().filterRobots()).toEqual([]);
    });

});
