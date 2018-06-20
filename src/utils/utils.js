export const dateFormat = function (date) {
    // date 为时间戳
    let mydate = new Date(date)
    let Y = mydate.getFullYear() + '-'
    let M = (mydate.getMonth() + 1 < 10 ? '0' + (mydate.getMonth() + 1) : mydate.getMonth() + 1) + '-'
    let D = mydate.getDate() < 10 ? '0' + mydate.getDate() + ' ' : mydate.getDate() + ' '
    let h = (mydate.getHours() < 10 ? '0' + (mydate.getHours()) : mydate.getHours()) + ':'
    let m = (mydate.getMinutes() < 10 ? '0' + (mydate.getMinutes()) : mydate.getMinutes()) + ':'
    let s = mydate.getSeconds() < 10 ? '0' + (mydate.getSeconds()) : mydate.getSeconds()
    return Y + M + D + h + m + s
}