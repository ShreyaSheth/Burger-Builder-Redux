import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const INGREDIENT_PRICE = {
    salad: 25,
    cheese: 20,
    tikki: 30,
    chillifire: 20
}
const initialState = {
    ingredients: null,
    totalPrice: 50,
    error: false,
    building: false
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
                building: true
            }
            return updateObject(state,updatedState);
};
const removeIngredient = (state, action ) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updatedIngs = updateObject(state.ingredients,updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
                building: true
            }
            return updateObject(state,updatedSt);
};
const setIngredients = (state, action) => {
    return updateObject(state,{
        ingredients: {
            salad: action.ingredients.salad,
            chillifire: action.ingredients.chillifire,
            cheese: action.ingredients.cheese,
            tikki: action.ingredients.tikki
        },
        totalPrice: 50,
        error: false,
        building: false
    });
};
const reducer = (state= initialState, action) =>{
    
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);           
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);        
        case actionTypes.SET_INGREDIENT: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
                return updateObject(state,{ error: true });
        default:
            return state;
    }
    // return state;
};
export default reducer;