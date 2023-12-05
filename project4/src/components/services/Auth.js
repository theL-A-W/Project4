import Client from './api'


// export const SignInUser = async (data) => {
//   try {
//     const res = await Client.post('/auth/login', data)
//     localStorage.setItem('token', res.data.token)
//     return res.data.user
//   } catch (error) {
//     throw error
//   }
// }

export const SignInUser = async (data) => {
  try {
    console.log(data);
    const res = await Client.post('/auth/login', data);
    console.log('Full response:', res);

    // Assuming token is available directly in res.data
    const token = res.data.token;

    localStorage.setItem('token', token);
    console.log('Token in Local Storage:', localStorage.getItem('token'));

    // Assuming user data is available directly in res.data.user
    const user = res.data.user;

    // Return an object containing both user data and token
    return { user, token };
  } catch (error) {
    throw error;
  }
};



export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}