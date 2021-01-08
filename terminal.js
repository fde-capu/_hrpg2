var textArea;
var buttonArea;
var gaugeArea;
var nameDisplay;

function makeAreas(){
	
	gaugeArea=document.createElement("div");
	gaugeArea.className="areas";
	document.body.appendChild(gaugeArea);
	
	textArea=document.createElement("div");
	textArea.className="areas";
	document.body.appendChild(textArea);
	
	buttonArea=document.createElement("div");
	buttonArea.innerHTML="button";
	buttonArea.className="areas";
	document.body.appendChild(buttonArea);
	
	nameDisplay=document.createElement("div");
	nameDisplay.className="nameDisplay";
	document.body.appendChild(nameDisplay);
	

	
}

var PArea=[];
var PAreacount=-1;

function makePArea(pc){
	PArea[pc]=document.createElement("div");
	PArea[pc].className="playerarea";
	PArea[pc].innerHTML=p[pc].name+"<br>";
	gaugeArea.appendChild(PArea[pc]);
	
		
	
}

function print(str){
	if(textArea.innerHTML!==""){textArea.innerHTML+="<br>";}
	textArea.innerHTML+=str;
	textArea.scrollTop = textArea.scrollHeight;

}

function pclear(){
	textArea.innerHTML="";
}

function bclear(){
	buttonArea.innerHTML="";
}

var gauge=[];
var marker=[];
var gaugecount=-1;
var player=[];

function makegauge(player,caption,val){
	
	gaugecount++;	gc=gaugecount;
	gauge[gc]=document.createElement("div");
	gauge[gc].className="gauge";
	marker[gc]=document.createElement("div");
	marker[gc].id=player+caption;
	marker[gc].className="marker";
	gauge[gc].appendChild(marker[gc]);
	capt=document.createElement("div");
	capt.innerHTML=caption;
	capt.style.position="relative";
	capt.style.top=-20+"px";
	capt.style.left=3+"px";
	gauge[gc].appendChild(capt);
	PArea[player].appendChild(gauge[gc]);
	setgauge(player,caption,val);
}

function setgauge(player,caption,val){
	document.getElementById(player+caption).style.width=
		parseFloat(window.getComputedStyle(document.getElementById(player+caption).parentElement).getPropertyValue("width"))*val+"px";
}

function getgaugeval(player,caption){
	if(isNull(document.getElementById(player+caption))){
		if(getAtrByName(caption).automake){
			makegauge(player,caption,getAtrByName(caption).initial);
		}else{
			return "fail";
		}
	}
	return parseFloat(document.getElementById(player+caption).style.width)/parseFloat(window.getComputedStyle(document.getElementById(player+caption).parentElement).getPropertyValue("width"));
}

function makebutton(bn) {
	btn=document.createElement("div");
	btn.className="button";
	btn.innerHTML=bn;
	btn.name=bn;
	btn.onmouseup=function(){
		execbtn(this.name);
	}
	buttonArea.appendChild(btn);
}
