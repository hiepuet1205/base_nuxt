const apiMaster = process.env.API_MASTER || "http://localhost:8082/"

const apiUrl = `${apiMaster}provinces/`;

export const getAllProvinces = async (token) => {
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

export const getProvince = async (token, id) => {
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

export const createProvince = async (token, province) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(province),
      method: "POST"
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateProvince = async (token, id, province) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(province),
      method: "PUT"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const deleteProvince = async (token, id) => {
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