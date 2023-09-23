import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

export const sendCartData = function (cart) {
    return async function (dispatch) {
        dispatch(uiActions.showNotification({ status: "pending", title: "Sending...", message: "Sending cart data!" }))
        const sendRequest = async function () {
            const response = await fetch("https://react-http-c7367-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
                method: "PUT",
                body: JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity})
            })
            if (!response.ok) {
                throw new Error("Sending cart data failed.")
            }
        }
        try{
        await sendRequest()
        dispatch(uiActions.showNotification({ status: "success", title: "Success", message: "Sending cart data success!" }))
        }
        catch (error){
            dispatch(uiActions.showNotification({ status: "error", title: "Error...", message: "Sending cart data failed!" }))
        }
    }
}

export const fetchCartData=function(){
    return async function(dispatch){
        const fetchData=async function(){
            const response=await fetch("https://react-http-c7367-default-rtdb.europe-west1.firebasedatabase.app/cart.json")
            if(!response.ok){
                throw new Error("Fetching cart data failed.")
            }

            const data=await response.json()

            return data
        }

        try{
            const cartData=await fetchData()
            dispatch(cartActions.replaceCart({items:cartData.items||[],
            totalQuantity:cartData.totalQuantity
            }))
        }
        catch(err){
            dispatch(uiActions.showNotification({ status: "error", title: "Error...", message: "Fetching cart data failed!" }))
        }
    }
}