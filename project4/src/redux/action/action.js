import axios from "axios";
export const fetchPostList =  ()=>
{
    return async (dispatch) =>
    {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");


        console.log(response);

        dispatch({type: "FETCH_LIST", payload: response.data})

    }
   
};
