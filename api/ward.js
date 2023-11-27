const apiMaster = process.env.API_MASTER || "http://localhost:5000/"

const apiUrl = `${apiMaster}wards/`;

export const getAllWards = async (token) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getWard = async (tokenid) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const createWard = async (tokenward) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(ward),
      method: "POST"
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateWard = async (tokenid, ward) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(ward),
      method: "PUT"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const deleteWard = async (tokenid) => {
  try {
    await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "DELETE"
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}