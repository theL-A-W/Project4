import Client from './api'

export const GetStocks = async () => {
  try {
    const res = await Client.get('/stocks')
    return res.data
  } catch (error) {
    throw error
  }
}