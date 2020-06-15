import {shallow,mount, render} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

// use mount when dom apis / lifecycle methods are used
// shallow will not load child component
// render  children components inside tested component

it(' expect to render Card component',() => {
    expect(shallow(<Card />).length).toEqual(1);
})

it(' expect to render Card component',() => {
    
    const tree = renderer.create(<Card id={'101'} name={'jojo'} email={'j@test.com'}/>).toJSON();
    expect(tree).toMatchSnapshot();
    
})

