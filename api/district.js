const apiMaster = process.env.API_MASTER || "http://localhost:8082/"

const apiUrl = `${apiMaster}districts/`;

export const getAllDistricts = async (token) => {
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

export const getDistrict = async (token, id) => {
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

export const createDistrict = async (token, district) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(district),
      method: "POST"
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateDistrict = async (token, id, district) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(district),
      method: "PUT"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const deleteDistrict = async (token, id) => {
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