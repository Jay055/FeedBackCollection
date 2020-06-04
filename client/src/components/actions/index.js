import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types'



export const fetchUser = () => async dispatch => { 
  const res = await axios.get('/api/current_user')
       dispatch({ 
         type: FETCH_USER,
         payload: res.data 
        })}



// Get and post our token from Stripe 
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({type: FETCH_USER, payload: res.data });

}


export const submitSurvey = (values,history, e) => async dispatch => {
  const res = await axios.post('/api/surveys', values);


  history.push('/surveys');
  dispatch({type: FETCH_USER, payload: res.data })
}


// Fetch Surveys from a user 
export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  
  dispatch({ type: FETCH_SURVEYS, payload: res.data})

}