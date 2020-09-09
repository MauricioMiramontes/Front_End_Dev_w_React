import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentsReducer';
import { Promotions } from './promotionsReducer';
import { Leaders } from './leadersReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './DefaultForms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}