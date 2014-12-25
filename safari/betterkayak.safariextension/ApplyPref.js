safari.self.addEventListener('message', handleMessage, false);
safari.self.tab.dispatchMessage('getPref', 'pref');
console.log("asked pref");

var pref;

function setAlliance(a){
	if(a != undefined){
		var id = "fs_airlines_" + a + "_only";
		document.getElementById('flightFilterToggle-alliance-label').click();
	}else{
		document.getElementById('flightFilterToggle-airline-label').click();
		var id = "fs_airlines_reset";
	}
    document.getElementById(id).click();
    //console.log("KAYAK EXTENSION: Alliance set to " + a);
}


function handleMessage(msg) {
    if (msg.name === 'setPref') {
    	console.log('received pref');
        pref = msg.message;
		document.arrive(".flightAirlinesFilterGroupContentAlliances", function() {
			setAlliance(pref);
			document.unbindArrive();
		});
	}
	if (msg.name === 'changePref') {
        pref = msg.message;
		if(!!document.getElementsByClassName("flightAirlinesFilterGroupContentAlliances").length) {
			setAlliance(pref);
		}
    }
}
