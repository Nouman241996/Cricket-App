import Toast from 'react-native-tiny-toast'
class TinyToastService {

    showLoadingToast = async (message) => {
        Toast.showLoading(message+'...')
    }
    hideToast = async () => {
        Toast.hide()
    }
    showToast = async (message) => {
        Toast.show('This is a default toast')
    }
    showSuccessToast = async (message) => {
        Toast.showSuccess(message)
    }

   
   
    

}
export const tinyToastSerive = new TinyToastService()