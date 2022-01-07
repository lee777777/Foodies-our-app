import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: '', name:''};
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return ({email, password, name}) => {
    // Do some API Request here
    console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        token: 'some access token here',
        email,
        name,
      },
    });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout' ,
        payload: {
        token: null,
        email: '',
        name: '',
      }});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: '',name: ''},
);