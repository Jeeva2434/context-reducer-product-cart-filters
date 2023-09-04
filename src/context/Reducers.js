export const cartReducer = (state,action) => {
   switch(action.type){
        case 'Add_to_cart':
            return {...state,cart:[...state.cart,{...action.payload,qty:1 }]};

        case 'Remove_cart':
            return {...state,cart : state.cart.filter(c => c.id !== action.payload.id)};

        case 'Qty_change':
            return {...state,cart: state.cart.filter(c => {
                if(c.id === action.payload.id){
                    return c.qty = action.payload.qty;
                }
                return c.qty;
            })}

        default : return state;
   }
}

export const productReducer = (state,action) => {
    switch(action.type){

        case 'searchTerm':
            return {...state,searchQuery: action.payload}

        case 'Low_To_High':
            return {...state, sort: action.type}

        case 'High_To_Low':
            return {...state, sort: action.type}

        case 'byStock':
            return {...state, byStock: !state.byStock}
 
        case 'byFastDelivery':
            return {...state, byFastDelivery: !state.byFastDelivery}

        case 'Change_ratings':
            return {...state, byRating: action.payload}
            
        case 'clearAllFilter':
            return {...state,
                    sort:'',
                    byStock : false,
                    byFastDelivery : false,
                    byRating : 0,
                    searchQuery : ''
            }
            
        default : return state;
    }
}