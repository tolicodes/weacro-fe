import axios from 'axios';

const { REACT_APP_API_URL_BASE } = process.env;

function getOptions() {
  return {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };
}

async function getFromServer(url) {
  try {
    const res = await axios.get(`${REACT_APP_API_URL_BASE}${url}`, getOptions());
    localStorage.setItem(url, JSON.stringify(res.data));
    return res.data;
  } catch (e) {
    return console.log(e);
  }
}

function get(url, offline) {
  if (offline) {
    return JSON.parse(localStorage.getItem(url));
  }
  return getFromServer(url);
}

async function post(url, data, withoutToken) {
  if (!withoutToken) {
    try {
      const res = await axios.post(`${REACT_APP_API_URL_BASE}${url}`, data, getOptions());
      return res.data;
    } catch (e) {
      return console.log(e);
    }
  } else {
    try {
      const res = await axios.post(`${REACT_APP_API_URL_BASE}${url}`, data);
      return res.data;
    } catch (e) {
      return console.log(e);
    }
  }
}

async function remove(url) {
  try {
    const res = await axios.delete(`${REACT_APP_API_URL_BASE}${url}`, getOptions());
    return res.data;
  } catch (e) {
    return console.log(e);
  }
}

export default {
  user: {
    get: offline => get('/user', offline),
    login: async ({ email, password }) => post('/user/login', { email, password }, true),
    register: async (email, password, name) => post('/user/register', { email, password, name }, true),
  },

  poses: {
    get: offline => get('/poses', offline),
  },
  list: {
    add: async (pose_id, user_id, list_name) => post('/user/addPose', { pose_id, user_id, list_name }),
    remove: async (pose_id, user_id, list_name) => remove(`/user/removePose/${user_id}/${list_name}/${pose_id}`),
  },
};
