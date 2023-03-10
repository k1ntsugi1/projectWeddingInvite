let chatid = "-1001667496163";
let token = "6029601858:AAHZ3Bn0d05uXLswYtrDfyzklrotUxAWo7k";
window.onload = getMyLocation; 
let	latitude;
let	longitude;
function getMyLocation () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation); 
	}
}

function  displayLocation(position) { 
	latitude = position.coords.latitude; //широтa
	longitude = position.coords.longitude; //долготa
	console.log(latitude, longitude)
}
    

function inform() {
    let formValue =`
        **Новый ответ:**
        от: ${latitude} : ${longitude},
        Фамилия: ${document.getElementById('family').value};
        Имя: ${document.getElementById('nameFamily').value};
        Буду: ${tfTranslate(document.getElementById('budu').checked)}; 
        Напитки: 
            вино: ${tfTranslate(document.getElementById('wine').checked)};
            Шампанское: ${tfTranslate(document.getElementById('spar').checked)}; 
            Водка: ${tfTranslate(document.getElementById('vodka').checked)}; 
            Виски: ${tfTranslate(document.getElementById('wiskey').checked)}; 
            Без алкоголя: ${tfTranslate(document.getElementById('no-alko').checked)};
            Другое: ${tfTranslate(document.getElementById('other').checked)};
        `
    let text = formValue;
    console.log(formValue);
    otpravka(token, text, chatid);
};
function otpravka(token, text, chatid) {
    let z = $.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
        data: "parse_mode=HTML&text=" + encodeURIComponent(text),
    });
};
function tfTranslate(tf){
    if (tf) return 'да';
    else return 'нет';
}

