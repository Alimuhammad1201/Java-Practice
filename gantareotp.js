function gantareotp(length){
    let otp = "0";
    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
console.log(gantareotp(6));