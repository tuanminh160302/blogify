import toast from 'react-hot-toast'

export const handleSuccessToast = (msg) => {
    toast.success(msg)
}

export const handleErrorToast = (msg) => {
    toast.error(msg)
}

export const handlePromiseToast = (f, loadingMsg, successMsg, errorMsg) => {
    toast.promise(f(), {
        loading: loadingMsg,
        success: <b>{successMsg}</b>,
        error: <b>{errorMsg}</b>
    })
}

export const handleEmojiToast = (msg, icon) => {
    toast(msg, {
        icon: icon
    })
}