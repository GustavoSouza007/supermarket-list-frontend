import { api } from "../api";

export const getList = async (username) => {
  try {
    const result = await api.get("/list-items", {
      headers: {
        username: username,
      },
    });
    return result.data;
  } catch (error) {
    alert("Erro ao buscar dados da API");
    return { error };
  }
};

export const createItem = async (item) => {
  try {
    const result = await api.post("/list-item", {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Erro ao salvar novo item");
    return { error };
  }
};

export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/list-item/${id}`, {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Erro ao atualizar item");
    return { error };
  }
};

export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/list-item/${id}`);
    return result.data;
  } catch (error) {
    alert("Erro ao deleta item");
    return { error };
  }
};
