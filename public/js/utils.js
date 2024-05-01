function toast(message, status) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: status === 'error' ? '#ef233c' : '#a7c957'
        }
    }).showToast();
}