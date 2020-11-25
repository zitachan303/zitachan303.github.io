//actionCompleted();//

function actionCompleted () {
	alert('Completed');
}

//actionCompleted();//去叫,進行這個活動//

//actionCompletedAgain();//與Var有順序問題//

var actionCompletedAgain = function() {
	alert('Completed again!');
};

//actionCompletedAgain();//

function popupMsg (msg) {
	var finalMsg = 'Site message: ' + msg;
	alert (finalMsg);
}

//popupMsg('Test!');//
//popupMsg('Warning!');//

function userMsg (name, msg = 'nothing') {
	var finalMsg = name + 'says: ' + msg;
	alert(finalMsg);
}

//userMsg('Victor', 'Surprise!');//
//userMsg('Victor');//

function complexCalc (x, y) {
	var result = 0;//varible 最初值是0,//
	result = x * y;
	result = result / (x - y);
	result = result * y - x ;
	return result;
}

//var finalResult = complexCalc(5,10);//
//alert(finalResult);//

var demoFuncs = {
	popupMsgFunc: popupMsg, 
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc
};

demoFuncs.userMsgFunc('Zita', 'I am calling a function in an object')