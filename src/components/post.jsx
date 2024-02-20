import React from 'react'
import axios from 'axios';
import { uri } from '../config';
import { useEffect } from 'react';
import { useState } from 'react';
import parse from 'html-react-parser';
import {useNavigate} from 'react-router-dom'
import User from './user';


export default function Post() {

    const navigate = useNavigate();

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(uri+"posts").then((response) => {
          setPost(response.data);
        });
        
        
    }, []);

    // const handleAjax=(author_id)=>{
    //     axios.get(uri+"users/"+author_id).then((response) => {
    //         setUser(response.data);
    //     });
    // };

    useEffect(() => {
        axios.get(uri+"users").then((response) => {
          setUser(response.data);
        });
        
    }, [setPost]);


    function pubblicazione(x){
        let d = new Date(x)
        //console.log(d.toDateString())
        const options = {
            //weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            // hour: 'numeric',
            // minute: 'numeric',
            // second: 'numeric',
          };
        // console.log(d.toLocaleDateString('it-IT'))
        // console.log(d.toLocaleDateString('it-IT',options))
        const mediumTime = new Intl.DateTimeFormat("it", {
            timeStyle: "medium",
        });
        //console.log(mediumTime.format(d));

        return (d.toLocaleDateString('it-IT',options) + " "+ mediumTime.format(d))
    }
    // if (!post.data) return null;
    // console.log(post)
    // console.log(user)

  return (
    <>
        <div>post</div>
        
        {post && post.map((x,index)=>
            <div key={index}>
                <h1 onClick={()=>{navigate("/post/" + x.id)}}>{x.title.rendered}</h1>

                <p>{x.author}</p>
                <p>{user[0].name}</p>
                
                {/* <p>{handleAjax(x.author) && user.name} pio</p> */}
                <p>{pubblicazione(x.date)}</p>
                {/* {parse(x.content.rendered)} */}
                {parse(x.excerpt.rendered)}
            </div>
        
        )}
    </>
  );
}
