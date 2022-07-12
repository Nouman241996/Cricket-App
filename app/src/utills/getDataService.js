// const controller = new AbortController();
// const { signal } = controller;
// setTimeout(() => abortController.abort(), timeout)
class GetApiService {

    getApiClass = async (url) => {

        return new Promise(async (classRes) => {

          // const abortController = new AbortController();
          // const signal = abortController.signal;
          
          // setTimeout(() => abortController.abort(), 10000)

            // fetch(url,{signal})
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
              //console.log('Data fetched from services')
              classRes(json)
              
            })
            .catch((error) =>{
                console.log("get arror is",error)
                 classRes([])
            })
        })


    }

}
export const getApiSerive = new GetApiService()