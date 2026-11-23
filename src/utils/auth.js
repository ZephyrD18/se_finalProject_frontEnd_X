import { USERS_KEY } from "./constants";
import { readJson, writeJson } from "./storage";

const TOKEN_PREFIX = "fake-jwt.";

function getUsers() {
  return readJson(USERS_KEY, []);
}

function createToken(email) {
  return TOKEN_PREFIX + btoa(email);
}

function getEmailFromToken(token) {
  if (!token || !token.startsWith(TOKEN_PREFIX)) return null;
  try {
    return atob(token.slice(TOKEN_PREFIX.length));
  } catch {
    return null;
  }
}

function getNameFromEmail(email) {
  const name = email.split("@")[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function register({ email, password, name }) {
  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    return Promise.reject(new Error("This email is not available"));
  }
  const user = { _id: crypto.randomUUID(), email, password, name };
  writeJson(USERS_KEY, [...users, user]);
  return Promise.resolve({ _id: user._id, email, name });
}

export function authorize({ email, password }) {
  const user = getUsers().find((item) => item.email === email);
  if (user && user.password !== password) {
    return Promise.reject(new Error("Incorrect email or password"));
  }
  return Promise.resolve({ token: createToken(email) });
}

export function checkToken(token) {
  const email = getEmailFromToken(token);
  if (!email) {
    return Promise.reject(new Error("Invalid token"));
  }
  const user = getUsers().find((item) => item.email === email);
  return Promise.resolve({
    _id: user?._id || email,
    email,
    name: user?.name || getNameFromEmail(email),
  });
}
