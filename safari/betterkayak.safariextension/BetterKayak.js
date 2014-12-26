safari.self.addEventListener('message', handleMessage, false);
safari.self.tab.dispatchMessage('getPrefAlliance', 'prefAlliance');

var prefAlliance;

function setAlliance(a){
	if(a != undefined){
		var id = "fs_airlines_" + a + "_only";
		document.getElementById('flightFilterToggle-alliance-label').click();
	}else{
		document.getElementById('flightFilterToggle-airline-label').click();
		var id = "fs_airlines_reset";
	}
    document.getElementById(id).click();
}


function handleMessage(msg) {
    if (msg.name === 'setPrefAlliance') {
        prefAlliance = msg.message;
		document.arrive(".flightAirlinesFilterGroupContentAlliances", function() {
			setAlliance(prefAlliance);
			document.unbindArrive();
		});
	}
	if (msg.name === 'changePrefAlliance') {
        prefAlliance = msg.message;
		if(!!document.getElementsByClassName("flightAirlinesFilterGroupContentAlliances").length) {
			setAlliance(prefAlliance);
		}
    }
}
