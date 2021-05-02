import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import GitHub__Logo from './assets-Card/_resources/_images/GitHub-Mark.png';
import './assets-Card/_css/Card.css';

const Card = () => {
  const { status, users } = useSelector((state) => state.search);
  if (users.length === 0) {
    return (
      <Link className='Link' to='/'>
        Back
      </Link>
    );
  }
  if (status === 'pending') {
    return (
      <>
        <Link className='Link' to='/'>
          Back
        </Link>
        <div>Loading...</div>
      </>
    );
  }
  if (status === 'rejected') {
    return (
      <>
        <Link className='Link' to='/'>
          Back
        </Link>
        <div>Not Found</div>
      </>
    );
  }
  const user = users[0];
  return (
    <div className='UserPage'>
      <div className='Container'>
        <div className='Card'>
          <div className='Card__InfoMain'>
            <div className='Card__Image'>
              <div className='Image__Circle1'> </div>
              <div className='Image__Circle2'></div>
              <img src={user.avatar_url} alt='avatar' />
            </div>
            <h1 className='Card__TextH1'>{user.login}</h1>
          </div>
          <div className='Card__InfoAdditional'>
            <ul>
              <li>
                <p>{user.followers}</p>
                followers
              </li>
              <li>
                <p>{user.following}</p>
                following
              </li>
              <li>
                <p>{user.hireable === null ? 'Not' : 'Is'}</p>
                hireable
              </li>
            </ul>
          </div>
        </div>
        <div className='Badge'>
          <a href={user.html_url}>
            <img src={GitHub__Logo} alt='GitHub' />
          </a>
          Open Github Profile
        </div>
      </div>
      <Link className='Link' to='/'>
        Back
      </Link>
    </div>
  );
};

export default withRouter(Card);
