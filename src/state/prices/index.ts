/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PriceApiResponse, PriceApiThunk, PriceState } from 'state/types'
import tokens from 'config/constants/tokens'

const initialState: PriceState = {
  isLoading: false,
  lastUpdated: null,
  data: null,
}

// Thunks
export const fetchPrices = createAsyncThunk<PriceApiThunk>('prices/fetch', async () => {
  const response = await fetch('https://api.pancakeswap.info/api/tokens')
  const data = (await response.json()) as PriceApiResponse

  // Return normalized token names
  const prices =  {
    updated_at: data.updated_at,
    data: Object.keys(data.data).reduce((accum, token) => {
      return {
        ...accum,
        [token.toLowerCase()]: parseFloat(data.data[token].price),
      }
    }, {}),
  }

  // BUNNYMOON, ROCKET
  // const response2 = await fetch('https://script.google.com/macros/s/AKfycbypRjgKTyZ2gnQ8yUYV92UZ3K8ORJZs1hzyR4u6cqHA7it3rOaprOZZNqigilkTLXROCQ/exec')
  const response2 = await fetch('https://stark-refuge-99599.herokuapp.com/api/ALL')
  const data2 = (await response2.json())
  prices.data[tokens.bunnymoon.address[56].toLowerCase()] = data2.BUNNYMOON.USD.price
  prices.data[tokens.rocket.address[56].toLowerCase()] = data2.ROCKET.USD.price

  // BANANA Coningecko
  const response3 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=apeswap-finance&vs_currencies=usd')
  const data3 = (await response3.json())
  prices.data[tokens.banana.address[56].toLowerCase()] = data3['apeswap-finance'].usd

  // TUSD
  prices.data[tokens.tusd.address[56].toLocaleLowerCase()] = 1;
  
  return prices;
})

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPrices.fulfilled, (state, action: PayloadAction<PriceApiThunk>) => {
      state.isLoading = false
      state.lastUpdated = action.payload.updated_at
      state.data = action.payload.data
    })
  },
})

export default pricesSlice.reducer
