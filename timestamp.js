
function timstamp(date){
    const unix = Math.floor(new Date(date));
    const utc = new Date(parseInt(date)).toUTCString();
    if(unix){ 
        return {
            "unix":unix,
            "utc":new Date(unix).toUTCString()
        }
    }
    else if(utc){ 
        return{
            "unix":Math.floor(new Date(utc)),
            "utc":utc
        }
    }
    else{
        return { error : "Invalid Date" }
    }

}

module.exports = timstamp;
