import Client from './api'

export const GetStocks = async () => {
    const res = await Client.get('/stocks')
    return res.data
}