import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';


describe('searchRobots',()=>{
    const initialStateSearch = {searchField: ''};
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined,{})).toEqual(initialStateSearch);
    })
    it('should handle when action setSearchField type CHANGE_SEARCHFIELD triggerred', () => {
        expect(reducers.searchRobots(initialStateSearch,{type:CHANGE_SEARCHFIELD, payload:'a'})).toEqual({searchField: 'a'});
    })
})

describe('requestRobots',()=>{
    const initialStateRobots = {robots: [],isPending: false};
    const mockRobots =[{
        id:1,name:'john snow', username:'john',email:'john@test.com'
    }];
    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots);
    })
    it('should handle when action requestRobots of type  REQUEST_ROBOTS_PENDING triggerred', () => {
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_PENDING})).toEqual({isPending: true,robots: []});
    })
    it('should handle when action requestRobots of type  REQUEST_ROBOTS_SUCCESS triggerred', () => {
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_SUCCESS, payload:mockRobots})).toEqual({isPending: false, robots: mockRobots});
    })
    it('should handle when action requestRobots of type  REQUEST_ROBOTS_FAILED triggerred', () => {
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_FAILED, payload:'ERROR'})).toEqual({isPending: false, error: 'ERROR',robots: []});
    })
})