import React from 'react'

function Gravatar (){
    const email = props.email;
    const hash = md5(email);

    return(
        <img className={props.className} src={`http://es.gravatar.com/avatar/{hash}?d=identicon`} alt="Avatar"/>
    )
}