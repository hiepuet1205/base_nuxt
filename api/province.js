const apiUrl = 'http://localhost:8082/provinces/';

export const getAllProvinces = async () => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getProvince = async (id) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const createProvince = async (province) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
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

export const updateProvince = async (id, province) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
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

export const deleteProvince = async (id) => {
  try {
    await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
      },
      method: "DELETE"
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}