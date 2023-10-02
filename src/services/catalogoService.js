import { clientAxios } from '../config/axios';

export const getCatalogosApi = async (token) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.get('/catalogo', { headers });
    return data.catalogos;
  } catch (error) {
    throw new Error(error);
  }
};

export const postCatalogoApi = async (token, catalogo) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.post('/catalogo', catalogo, { headers });
    return data
  } catch (error) {
    throw new Error(error);
  }
};

export const getCatalogoByIdApi = async (token, id) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.get(`/catalogo/${id}`, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCatalogoApi = async (token, id) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.delete(`/catalogo/${id}`, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCatalogoApi = async (token, catalogo, id) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.put(`/catalogo/${id}`, catalogo, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
