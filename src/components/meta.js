import React from 'react'

export default (props) => {
    return(
        <section id="meta">
            <h1>{props.meta.name}</h1>
            <p>{props.meta.location}</p>
            <p>{props.meta.contact}</p>
            <Profile {...props.meta.profile}/>
        </section>
    )
}


const Profile = (props) => {
    return(
      <>
        <h2>{props.title}</h2>
        <ul id="profile">
                {props.data.map((s,i)=><li key={`summary-${i}`}>{s}</li>)}
        </ul>
      </>
    )
  }