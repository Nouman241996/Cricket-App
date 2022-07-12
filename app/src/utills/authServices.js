class AuthApiService {

    authApiClass = async (url,raw) => {


      // console.log("post api raw",url,raw)

      return new Promise(async (classRes) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        myHeaders.append("Cookie", "ci_session=4d00d979ed322f868353c2f81f76cc4e1f2cf82a");
        
      
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(raw),
          redirect: 'follow'
        };
        
        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result =>{
            console.log(result)
            classRes(result)
            
            
          })
          .catch(error =>{

             classRes("signup failed")
            //console.log('error', error)
          })
            
    })


}

}
export const authApiSerive = new AuthApiService()