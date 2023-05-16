/*用try，catch避免用户使用隐身模式浏览器报错*/
let defaultCity = "上海";
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {
  city: defaultCity
}
