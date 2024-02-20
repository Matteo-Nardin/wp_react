import React from 'react';
import axios from 'axios';
import { uri } from '../config';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useState } from 'react';

export default function User({id}) {

    const [user, setUser] = useState([]);
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(uri+"posts/"+id).then((response) => {
          setPost(response.data);
        });
        
    }, []);

    // useEffect(() => {
    //     axios.get(uri+"users/"+id).then((response) => {
    //         setUser(response.data);
    //     });
    // }, []);

  return (
    <>
        {/* <div>{user && user.name}</div> */}
        {post && parse(post.content.rendered)}
    </>
  )
}
