import React from 'react'

export default (props) => {
    return(
      <>
        <h2>{props.title}</h2>
        <ul id="profile">
                {props.data.map((s,i)=><li key={`summary-${i}`}>{s}</li>)}
        </ul>
      </>
    )
}