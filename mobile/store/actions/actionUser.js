import axios from "axios";
const mainUrl = "https://vast-woodland-47918.herokuapp.com";

export function login(userData) {
  return (dispatch, setState) => {
    axios({
      url: `${mainUrl}/login`,
      method: "POST",
      data: userData,
    })
      .then((res) => {
        dispatch({ type: "SET_TOKEN", payload: res.data.access_token });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function register(userData) {
  return (dispatch, setState) => {
    axios({
      url: `${mainUrl}/register`,
      method: "POST",
      data: userData,
    })
      .then((res) => {
        dispatch({ type: "SET_TOKEN", payload: res.data.access_token });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getUser(token) {
  return (dispatch, setState) => {
    axios({
      url: `${mainUrl}/user`,
      method: "GET",
      headers: { access_token: token },
    })
      .then((res) => {
        dispatch({ type: "GET_USER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function updateDataUser(updateData, token) {
  return (dispatch, setState) => {
    axios({
      url: `${mainUrl}/user`,
      method: "PUT",
      headers: {
        access_token: token,
      },
      data: updateData,
    })
      .then((res) => {
        dispatch({ type: "GET_USER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
