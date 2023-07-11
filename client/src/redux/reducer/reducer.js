const initialstate = {};

const genresReducer = (state=initialstate,action)=>{
    switch(action.type){
        case "Genres":
            console.log("reducer",action)
            return {
                data : action.data
            };



            default:
            return state;
    }
}


export default genresReducer;

















