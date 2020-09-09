import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentsReducer';
import { Promotions } from './promotionsReducer';
import { Leaders } from './leadersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}