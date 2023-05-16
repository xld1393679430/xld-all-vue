 const isPC = function () {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = ["android", "iphone",
      "symbianos", "windows phone",
      "ipad", "ipod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
 }

 export { isPC }

