import React from "react";
import Picture from './picture.png';

function Profile() {
  return (
    // <img src={require('./picture.png')} class="img-thumbnail" alt="pic"/>
    <img src={Picture} alt="pic" class="img-thumbnail"></img>
  )
}

export default Profile;