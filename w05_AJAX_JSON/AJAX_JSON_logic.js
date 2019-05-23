var end_point_call = "";

function get_quote() {
    var ajaxRequest = new XMLHttpRequest();
			ajaxRequest.onreadystatechange = function(){
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200) {
                        document.getElementById("response").innerText = ajaxRequest.responseText;
                        let response_object = JSON.parse(ajaxRequest.responseText);;
                        document.getElementById("quote_only").innerText = response_object.quote;
					}
					else{
						console.log("Status error: " + ajaxRequest.status);
					}
				}
				else{
					console.log("Ignored readyState: " + ajaxRequest.readyState);
				}
			}
			ajaxRequest.open('GET', "https://api.kanye.rest");
			ajaxRequest.send();
}