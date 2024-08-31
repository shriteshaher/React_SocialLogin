import axios from 'axios';
export const url='http://localhost:8080/api'
export function saveDBSocialApiData(data){
  return axios.post(`${url}/google_login_save`,data)
}

export  function callGoogleSocialApp(user){
   return axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
}