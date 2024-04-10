import { api } from 'services/api'
import { toast } from 'react-toastify'

export const getList = async (username) => {
  try {
    const result = await api.get('/list-items', {
      headers: {
        username
      }
    })
    return result.data
  } catch (error) {
    toast.error('Erro ao buscar dados da API')
    return { error }
  }
}

export const createItem = async (item) => {
  try {
    const result = await api.post('/list-item', {
      ...item
    })
    return result.data
  } catch (error) {
    toast.error('Erro ao salvar novo item')
    return { error }
  }
}

export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/list-item/${id}`, {
      ...item
    })
    return result.data
  } catch (error) {
    toast.error('Erro ao atualizar item')
    return { error }
  }
}

export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/list-item/${id}`)
    return result.data
  } catch (error) {
    toast.error('Erro ao deleta item')
    return { error }
  }
}
