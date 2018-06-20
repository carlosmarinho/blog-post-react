import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
    case FETCH_POST: {
        //const post = action.payload.data;
        //const newState = { ...state };
        //newState[post.id] = post;
        //return newState;

        //this code here is exactly the same as above using ES6 syntax
        return { ...state, [action.payload.data.id]: action.payload.data };
    }
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}