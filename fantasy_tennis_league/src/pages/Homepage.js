import React from 'react';

import TennisPlayersImg from '../images/tennis-players-silhouette.png';
import BannerRegisterLogoImg from '../images/ftl-logo.png';

function Homepage() {
  return (
    <div>
      <div className='Banner'>
        <h1 className='BannerText'>Fantasy Tennis League</h1>
        <img className='BannerImg' src={TennisPlayersImg} alt="banner-img"></img>
      </div>

      <div className='BannerLogIn'>
        {/*Text*/}
        <h1 className='BannerLogInText'> Log In</h1>
        {/*Email Box*/}
        <h1 className='BannerLogInEmailText'>Email</h1>
        <div className='BannerLogInEmailBox'></div>
        {/*Password Box*/}
        <h1 className='BannerLogInPasswordText'>Password</h1>
        <div className='BannerLogInPasswordBox'></div>
        {/*Sign In Button*/}
        <div className='BannerLogInSignInButton'>
          <div className='BannerLogInSignInButtonText'>Sign In</div>
        </div>
        {/*Forgot Password Text*/}
        <h1 className='BannerLogInForgotPText'> Forgot your Password?</h1>
      </div>

      <div className='BannerRegister'>
        {/* Logo */}
        <div><img src={BannerRegisterLogoImg} alt='BannerRegisterLogoImg'></img></div>
        {/* Title */}
        <h1 className='BannerRegisterTitle'>Fantasy Tennis League</h1>
        {/* Header */}
        <h1 className='BannerRegisterHeader'>Register to play Fantasy Tennis League </h1>
        {/* Body Text */}
        <h1 className='BannerRegisterBodyText'>Covering all leagues, Fantasy Tennis League is one of the most
          Unique Fantasy Leagues in the world.
          It’s FREE to play!</h1>
        {/* Sign Up Button */}
        <div className='BannerRegisterSignUpButton'>
          <div className='BannerRegisterSignUpButtonText'>Sign Up Now</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage