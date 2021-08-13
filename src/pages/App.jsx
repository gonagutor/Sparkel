import '../styles/App.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import TopDecoration from '../res/top-decoration.svg';

const stories = [{
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}, {
  id: '5b940de4-7bec-4d9e-9e57-aaa2c328dba7',
  user_id: '5b940de4-7bec-4d9e-9e57-cb52c328dba7',
  data_uri: 'https://picsum.photos/seed/picsum/720/1080',
  viewed_by: [],
  posted_on: Date.now(),
}];

function App({ history }) {
  if (localStorage.getItem('token') == null) history.push('/login');
  return (
    <div id="container">
      <img src={TopDecoration} id="topDecoration" height="130px" width="100vw" alt="" />
      <div id="storiesContainer">
        <div className="story">
          <div
            style={{
              boxShadow: 'var(--main-bg-color) 6px 6px 0 -2px,var(--main-color) 6px 6px', backgroundColor: 'var(--primary-50)', display: 'flex', justifyContent: 'center', alignContent: 'center',
            }}
            className="storyImage"
            alt="Uploaded by"
          >
            <i className="coco-add" style={{ fontSize: 32, alignSelf: 'center', justifySelf: 'center' }}></i>
          </div>
          <p className="storyLabel">
            Tu historia
          </p>
        </div>
        {stories.map((story) => (
          <Story
            userId={story.user_id}
            image={story.data_uri}
            history={history}
          />
        ))}
      </div>
    </div>
  );
}

function Story({
  // eslint-disable-next-line no-unused-vars
  userId, image, history, next, prev, seen,
}) {
  return (
    <div className="story">
      <img
        src={image}
        style={{ boxShadow: `${seen ? 'var(--main-bg-color)' : 'var(--accent-60)'} 6px 6px 0 -2px,var(--main-color) 6px 6px` }}
        className="storyImage"
        alt="Uploaded by"
      />
      <p className="storyLabel">
        {userId}
      </p>
    </div>
  );
}

Story.propTypes = {
  userId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  seen: PropTypes.bool.isRequired,
};

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(App);
