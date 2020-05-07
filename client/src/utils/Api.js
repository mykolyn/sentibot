import axios from "axios";

export default{
googleLogin:function(){
    // axios.get("http://localhost:3001/api/google")

    window.open("http://localhost:3001/api/google", "_self");
},

checkUser:function(){

    console.log("get user api")
    return axios.get("/api/checkuser")
},

logout:function(){
    console.log("in logout")
 return axios.get("/api/logout")
}


}