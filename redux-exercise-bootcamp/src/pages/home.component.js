import React from 'react';
import {withRouter} from 'react-router-dom'


 const HomePage =  ({history,match}) => {

     return(
         <div className="home-page">
                <p>this is from home page component</p>
                <button 
                className="button-signin"
                onClick={
                    () => {history.push(`${match.url}/signin`)}
                }
                >
                    Signin Now</button>
         </div>
     )
 }

 export default withRouter(HomePage);