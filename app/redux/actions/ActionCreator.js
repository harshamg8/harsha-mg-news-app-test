import {actionTypes} from '../types/ActionTypes';
import {Helper} from '../../Helper'

export const actionCreators = {
    fetchNews: () => async(dispatch, getState) => {
        dispatch({type:actionTypes.FETCH_NEWS_REQUEST})

        try
        {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${Helper.API_KEY}`)
            const news = await response.json()
            dispatch({type:actionTypes.FETCH_NEWS_RESPONSE, payload:news.articles, error:false})
        
        }
        catch(e){
            dispatch({type:actionTypes.FETCH_NEWS_RESPONSE, payload:e, error:true})
        }
    },

    fetchAll: (query) => async(dispatch, getState) => {
        dispatch({type:actionTypes.FETCH_ALL_NEWS_REQUEST})

        try
        {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${Helper.API_KEY}`)
            const news = await response.json()
            dispatch({type:actionTypes.FETCH_ALL_NEWS_RESPONSE, payload:news.articles, error:false})
        }
        catch(e){
            dispatch({type:actionTypes.FETCH_ALL_NEWS_RESPONSE, payload:e, error:true})
        }
    }

}