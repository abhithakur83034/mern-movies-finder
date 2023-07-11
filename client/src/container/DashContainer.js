import {connect} from 'react-redux'
import Dashboard from "../components/Dashboard";
import {genres} from '../redux/action/action';



const mapStateToProps=state=>({

})

const mapDsipatchToProps=dispatch=>({
    comedyHandler:data=>dispatch(genres(data))
})


 export default connect(mapStateToProps , mapDsipatchToProps)(Dashboard)