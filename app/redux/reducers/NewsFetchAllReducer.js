import {actionTypes} from '../types/ActionTypes';

const fetchNewsInitialState = {
    loading:true,
    error:false,
    allNews:[]
}

export const newsFetchAllReducer = (state = fetchNewsInitialState,action) => {

    const {type,payload,error} = action
    switch(type)
    {
        case actionTypes.FETCH_ALL_NEWS_REQUEST: {
            return {...state, loading:true, error:false}
        }
        case actionTypes.FETCH_ALL_NEWS_RESPONSE: {
            if(error){
                return {...state, loading:false, error:true}
            }
            return {...state, loading:false, allNews:payload,error:false}
        }
    }
    return state
}