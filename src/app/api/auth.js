const BASE_URL = 'http://10.0.1.73:8000/api/login';

export async function authLogin({ email, password }) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Login failed');
  }
}

export async function authRegister({ username, email, password }) {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Registration failed');
  }
}
