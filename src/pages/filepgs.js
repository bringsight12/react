import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom';


export const Profile = (props) => {

    const Navigate = useNavigate ()
    const {state} = useLocation()

  return (
    <div>
        <h3> Profil halaman </h3>
        <p>{state.title}</p>
        <p>{JSON.stringify(state)}</p>
        <button onClick={() => Navigate(-1)} >
            Balik Halaman Home
        </button>
        </div>
  )
}
