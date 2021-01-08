var atrs = [

{
	name:"Attack",
	target:"select",
	effect:"t:HP-.1;",
	conjugated:"attacks",
	infinitive:"attack",
	inverse_conjugated:"suffers",
	inverse_fail:"defends",
	mandatory:true,
	type:"action",
	defense:"HP.1;"
},{
	name:"Magic",
	target:"select",
	effect:"t:MP.1;",
	conjugated:"spells",
	infinitive:"spell",
	inverse_conjugated:"charms",
	inverse_fail:"overcomes",
	mandatory:true,
	type:"action",
	defense:"MP.1;"
},{
	name:"Heal",
	target:"select",
	effect:"o:HP.1;",
	conjugated:"heals",
	infinitive:"heal",
	inverse_conjugated:"heals",
	inverse_fail:"does not heal",
	mandatory:true,
	type:"action"
},{
	name:"MP",
	type:"gauge",
	initial:0,
	automake:true,
	states:["rock solid","in peace","magician","mage","wizard"]
},{
	name:"HP",
	mandatory:false,
	type:"gauge",
	initial:1,
	automake:true,
	states:["dead","weak", "fine", "healty","super"]
}


];



