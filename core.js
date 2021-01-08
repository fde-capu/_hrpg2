var debug=true;

var p=[]; // players
var currentPlayer;

window.onload=function(){pers_core_init();};

function pers_core_init(){
	makeAreas(); // terminal
	if(debug){test();}
	
}

function test(){
	pclear();
	print("Hello.");
	
	makeplayer("Player 1",1);
	makeplayer("Player 2",2);
	currentPlayer=0;
	nextPlayer();
	
	showbuttons();
	
}

function showbuttons(){
	bclear();
	for(var i in p[currentPlayer].atr){
		if(getAtrByName(p[currentPlayer].atr[i]).type=="action"){
			makebutton(p[currentPlayer].atr[i]);
		}
	}
}

function makeplayer(name,pc){
	p[pc]={};
	p[pc].name=name;
	makePArea(pc);
	p[pc].atr=getMandatory(pc);
	
}

function getMandatory(pc){
	aret=[];
	for(var i in atrs){
		if(atrs[i].mandatory){
			aret.push(atrs[i].name);
			if(atrs[i].type=="gauge"){
				makegauge(pc,atrs[i].name,atrs[i].initial);
			}
		}
	}
	return aret;
}

var ev=[];
var wait;
var waithelper;

function execbtn(btname){
	btn=getAtrByName(btname);
	ev=[currentPlayer,btn.name];
	if ((btn.target!="all")&&(btn.target!="none")){
		target=choosetarget();
		wait=true;
	}else{
		target=btn.target;
	}
	
	waithelper=setInterval(function(){
		if(wait)return false;
		clearInterval(waithelper);
		ev.push(target);

		calcEvent(); 
		nextPlayer();
		
	},100);
	
}

function nextPlayer(){
	currentPlayer++;cp=currentPlayer;
	if(!isdef(p[currentPlayer])){currentPlayer=1;};
	disp=p[currentPlayer].name;
	//for(var i in p[currentPlayer].atr){
	// disp+=" "+p[cp].atr[i];
	//}
	nameDisplay.innerHTML='Current: '+disp;
}

var efx;

function concatEfx(atnm){
	
	return getAtrByName(atnm).effect;
}

function calcEvent(){
	var toprint="";
	var o = ev[0];
	var t = ev[2];
	efx = concatEfx(ev[1]);
	if(!isdef(efx))return false;
	
	var firstrun=true;
	while(efx.length){
		var affect;
		var property;
		var amount;
		if(get("o:")){affect=o;}
		if(get("t:")){affect=t;}
		for(var i in atrs){
			if(get(atrs[i].name)){
				if(efx.match(/^-?(\d+\.?\d*)|(\d*\.?\d+)|^\+(\d*\.?\d+)/)){
					property=atrs[i].name;
					amount=parseFloat(efx.substr(0,efx.indexOf(";")));
					efx=efx.substr(efx.indexOf(";")+1);
				}
			}
		}
		
		if(affect!=currentPlayer){amount=amount+calcAttack(o,property);}
		amount=round(rnd(0,amount),3);
		if(amount!=0){
			if(firstrun)toprint+=p[o].name+" "+getAtrByName(ev[1]).conjugated+" "+amount+". ";
			nodefense=false;
		}else{
			if(firstrun)toprint+=p[o].name+"'s "+getAtrByName(ev[1]).infinitive+" fails. ";
			nodefense=true;
		}
		if(amount<0){taking=true;}else{taking=false;};
		if(affect!=currentPlayer){amount=amount-(amount*rnd(0,calcDefense(affect,property)))};
		amount=round(amount,3);
		if(taking){		if(amount>0){amount=0;}	}else{		if(amount<0){amount=0;}	}
		if(getgaugeval(affect,property)!="fail"){
			if(amount!=0){
				state=getStringState(affect,property);
				oldval=getgaugeval(affect,property);
				newval=getgaugeval(affect,property)+amount;
				newval=newval<0?0:newval>1?1:newval;
				setgauge(affect,property,newval);
				if(oldval!=newval){
					if(affect!=currentPlayer){
						if(firstrun)toprint+=p[affect].name+" "+getAtrByName(ev[1]).inverse_conjugated+" "+amount+". ";
					}
				}else{
					if(state!=false){
						toprint+="But "+p[affect].name+" is already "+state+". ";
					}
				}
				if(state!=getStringState(affect,property)){
					toprint+=p[affect].name+" is "+getStringState(affect,property)+". ";
				}
			}else{
				if(!nodefense){
					if(firstrun)toprint+=p[affect].name+" "+getAtrByName(ev[1]).inverse_fail+". ";
				}
			}
		}else{
			toprint+="Fails. "
		}
		
		firstrun=false;
	}
	print(toprint);
}

function getStringState(pn,pr){
	gv=getgaugeval(pn,pr);
	sts=getAtrByName(pr).states;
	if(!isdef(sts)){return false;};
	toret=sts[parseInt(1+(gv*(sts.length-2)))];
	if(gv>=1){toret=sts[sts.length-1];}
	if(gv<=0){toret=sts[0];}
	return toret;
}

function calcAttack(pn,pr){
	var defsum=0; 
	for(var i in p[pn].atr){
		if(getAtrByName(p[pn].atr[i]).attack){
			if(getAtrByName(p[pn].atr[i]).attack.substr(0,pr.length)==pr){
				tempstr=getAtrByName(p[pn].atr[i]).attack;
				tempstr=tempstr.substr(pr.length);
				defsum+=parseFloat(tempstr.substr(0,tempstr.indexOf(";")));
				tempstr=tempstr.substr(tempstr.indexOf(";")+1);
			}
		}
	}
	return defsum;
}

function calcDefense(pn,pr){
	var defsum=0; 
	for(var i in p[pn].atr){
		if(getAtrByName(p[pn].atr[i]).defense){
			if(getAtrByName(p[pn].atr[i]).defense.substr(0,pr.length)==pr){
				tempstr=getAtrByName(p[pn].atr[i]).defense;
				tempstr=tempstr.substr(pr.length);
				defsum+=parseFloat(tempstr.substr(0,tempstr.indexOf(";")));
				tempstr=tempstr.substr(tempstr.indexOf(";")+1);
			}
		}
	}
	return defsum;
}

function get(str){
	if(efx.substr(0,str.length)==str){
		efx=efx.substr(str.length);
		return true;
	}
	return false;
}

function choosetarget(){
	setTimeout(function(){wait=false;},100); // faking choice for now (only 2P for now).
	return currentPlayer==1?2:1;
}
