module.exports.getDate=function(){
    var options={
    weekday:"long",
    day:"numeric",
    month:"long"
}
let today=new Date();
let day=today.toLocaleDateString("en-US",options);

return day;
}

module.exports.getDay=getDay;

function getDay(){
    var options={
    weekday:"long"
}
let today=new Date();
let day=today.toLocaleDateString("en-US",options);

return day;
}