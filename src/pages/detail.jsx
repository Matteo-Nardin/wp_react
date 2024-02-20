import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../components/user';

export default function Detail() {

  const { id } = useParams();

  return (
    <User id={id}></User>
  )
}
