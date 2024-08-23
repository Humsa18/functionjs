
function type(para){
    if(typeof(para)=="string"){
        return "Yes you are string"
    }else if(typeof(para)=="number"){
        return "Yes you are number"
    }else if (typeof(para)=="boolean"){
        return "Yes you are boolean"
    }else{
        return "Invalid value"
    }}

console.log(type("edward"));


