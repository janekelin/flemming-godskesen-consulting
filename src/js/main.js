window.addEventListener("load", function(){
	var nodes = document.querySelectorAll(".title");
	for(var i=0; i<nodes.length; i++){
		var words = nodes[i].innerText;
		var html = "";
		for(var i=0; i<words.length; i++){
			if(words[i] == " "){
        html += words[i];
      } else {
        html += "<span>"+words[i]+"</span>";
      }
		}
		nodes[i].innerHTML = html;
	}
});