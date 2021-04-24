import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { selectUsers } from '../searchSlice';

const Card = () => {
  const { status, users } = useSelector((state) => state.search);
  if (users.length === 0) {
    return <Link to='/search'>Expore</Link>;
  }
  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'rejected') return <div>Not Found</div>;
  const user = users[0];
  return (
    <>
      <Link to='/search'>Expore</Link>
      <div>
        <h1>Login: {user.login}</h1>
        <img src={user.avatar_url} alt='avatar' />
        <p>followers: {user.followers}</p>
        <p>following: {user.following}</p>
        <p>hireable: {user.hireable === null ? 'no' : 'yes'}</p>
        <a href={user.html_url}>Profile on Github</a>
      </div>
    </>
  );
};

export default Card;
