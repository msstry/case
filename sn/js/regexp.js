function regs(type,str){
	var regObj = {
		"email": /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i,
		"ip": /^([1-9]|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])){3}$/,
		"cardId": /^\d{6}[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9X]$/,
		"date": /^([12]\d{3}\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[01])|[12]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])|[12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))$/,
		"iphone": /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g ,
		"pass" : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/g
	};
//	regObj["eamil"].test("hello");	
	return regObj[type].test(str);	
}