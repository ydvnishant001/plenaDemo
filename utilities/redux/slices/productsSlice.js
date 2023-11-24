import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: [],
  likedProducts: [],
  shoppingCart: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    updateProducts(state, action) {
      state.allProducts = [...action.payload.allProducts]
      state.likedProducts = [...action.payload.allProducts].map((item) =>
        {
        return {id: item.id, liked: false}
        }
      )
      state.shoppingCart = [...action.payload.allProducts].map((item) =>
        {
        return {product: item, count: 0}
        }
      )
    },
    productLiked(state, action){
      state.likedProducts[action.payload.index] = {...state.likedProducts[action.payload.index], liked : action.payload.liked}
    },
    addToCart(state, action){
      state.shoppingCart[action.payload.index].count = state.shoppingCart[action.payload.index].count + 1
    },
    removeFromCart(state, action){
      state.shoppingCart[action.payload.index].count = state.shoppingCart[action.payload.index].count - 1
    }
  }
})

export const { updateProducts, productLiked, addToCart, removeFromCart} = productsSlice.actions
export default productsSlice.reducer