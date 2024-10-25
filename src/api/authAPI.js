const reformatPayload = (payload) => {
  const temp = {}
  payload.map(item => {
    if (item.key == 'phoneNumber') { return temp[item.key] = `+${item.countryNumber}${item.value}` }
    temp[item.key] = item.value
  })
  return temp
}

export const authAPI = {
  register: async (payload) => {
    const data = reformatPayload(payload)
    const response = await fetch('http://127.0.0.1:5050/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          phoneNumber: data.phoneNumber,
          givenName: data.firstName,
          familyName: data.lastName,
          name: `${data.firstName} ${data.lastName}`,
          password: data.password,
        })
      }
    )
    return response
  },
  login: async (payload) => {
    const data = reformatPayload(payload)
    const response = await fetch('http://127.0.0.1:5050/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      }
    )
    return response
  },
  user: async (token) => {
    const response = await fetch(`http://127.0.0.1:5050/auth/user?token=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        }
      }
    )

    return response
  }
}