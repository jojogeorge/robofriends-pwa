import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

import * as actions from './actions';
import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

describe('setSearchField',()=>{

    it('should create an action to search robots', () => {
        const expectedAction = { type: CHANGE_SEARCHFIELD, payload: 'abc' };
        expect(actions.setSearchField('abc')).toEqual(expectedAction);
    })
   
})

describe('requestRobots',()=>{
    const mockStore = configureMockStore([thunkMiddleware]);
    const expectedAction = { type: REQUEST_ROBOTS_PENDING };

    it('handles requesting robots api ', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        
        expect(action[0]).toEqual(expectedAction);
    })
   
})
