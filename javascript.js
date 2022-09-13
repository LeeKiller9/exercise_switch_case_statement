function check_month() {
    let day = null
    let month = document.getElementById('month').value
    if (month === '' || month < 1 || month > 12) {
        alert('Wrong data')
        document.getElementById('result').innerHTML = '...'
    } else {
        month = parseInt(month)
        switch (month) {
            case 2:
                day = 28
                break
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30
                break
            default:
                day = 31
        }
        document.getElementById('result').innerHTML = 'Month ' + month + ' have ' + day + ' Day'
    }
}