function getran(min,max,obs){
	var gr = ((Math.random()*(max-min))+min);
	gr=Math.round(gr*100)/100;
	if(obs){gr=Math.round(gr);}
	return gr;
}

function rnd(min,max,obs){
	return getran(min,max,obs);
}

function formattime(decim){
      var hrs = Math.floor(decim);
  var min = Math.round(decim%1*60);
  min = min<10 ? "0"+min : min.toString();
  return hrs+"h"+min+"";
}

function round(num, dec){
    if(!dec){dec=0;}
    var zeros=Math.pow(10,dec);
    return Math.round(num * zeros) / zeros;
}

function moneyFormat(num){
   num=toNumber(num);
    return twoDecimals(num);
}

function formatMoney(num){
    return moneyFormat(num);
}

function toNumber(a){
   return parseFloat(a);
 }

function diagonal(a,b){
   var w=b[0]-a[0];
   var h=b[1]-a[1];
   var d=Math.sqrt((Math.pow(w,2))+(Math.pow(h,2)));
   return d;
}

function twoDecimals(num){
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isNull(n) {
    if(n==null){
	    return true;
    }else{
        return false;
    }
}

function timeNow(){
    var d = new Date();
    return parseInt(d.getTime()/1000);
}

function decimalFix(numb){
    return parseInt(numb*100)/100;
}

function isDefined(n) {
    if (typeof n !== 'undefined') {
        return true;
    }
    return false;
}

function isdef(n){
	return isDefined(n);
}

function inArray(arr,vname){
	for(var i in arr){
		if(arr[i]==vname)return true;
	}
	return false;
}

function getByName(arr,nm){
	for(var i in arr){
		if(arr[i].name==nm)return arr[i];
	}
	return false;
}

function getAtrByName(nm){
	for(var i in atrs){
		if(atrs[i].name==nm)return atrs[i];
	}
	return false;
}

function cloneObject(obj){
    return JSON.parse(JSON.stringify(obj));
}


function firstCap(str){
    if(str==""){return "";}
	str=str.trim();
	str=str.substring(0,1).toUpperCase()+str.substring(1);
	return str;
}


function removeItem(arr,itm){
	var retarr=[];
	for(var i in arr){
		if(arr[i]!=itm){retarr.push(arr[i]);}
	}
	return retarr;
}

function subtractArrays(a1,a2){
    var outa=[];var pass;
    for (var i in a1){
        pass=true;
        for (var j in a2) {
            if(a1[i]==a2[j]){pass=false;}
        }
        if(pass){outa.push(a1[i]);}
    }
    return outa;
}

function excludeEmptyIndexes(list){
    var out = [];
    for (var i in list){
        if((isDefined(list[i]))&&(list[i]!="")){
            out.push(list[i]);
        }
    }
    return out;
}


function foundOnArray(xarr,name){
	if(xarr.length==0){return true;}
	for(var i in xarr){
		if(xarr[i].toLowerCase()==name.toLowerCase()){return true;}
	}
	return false;
}

function isOnArray(parent,name){
    for(var i in parent){
        if(parent[i].toLowerCase()==name.toLowerCase()){return true;}
    }
    return false;
}


function removeDuplicates(arr){
    return deleteRepeated(arr);
}

function toNum(n){
   return toNumber(n);
}

function Capitular(str){
    return str.substring(0,1).toUpperCase()+str.substring(1);
}

function numberToLetter(n){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(n,n+1);
}

function letterList(n){
    return ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(0,n)).split("");
}

function letterToNumber(n){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(n);
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}