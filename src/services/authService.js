import * as tokenService from "./tokenService";

const BASE_URL = '/api/auth/';

export function signup(user) {
  console.log('hitting create user servie')
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  })
}

export function getUser() {
  return tokenService.getUserFromToken();
}

export function logout() {
  tokenService.removeToken();
}

export function login(creds) {
  console.log('logging in service')
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
  .then((res) => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error("Bad Credentials!");
  })
  .then(({ token }) => tokenService.setToken(token));
}

