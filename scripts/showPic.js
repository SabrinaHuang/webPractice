function showPic(whichpic)
{
	// 允许默认动作执行
//	if(!document.getElementById("placeholder"))	return true;
//	if(!document.getElementById("description"))	return true;
	
	// 源的路径
	var source = whichpic.getAttribute("href");
	// 用当前图片替换默认图片
	var placeholder = document.getElementById("placeholder");	
	placeholder.setAttribute("src", source);
	
	// 用关联的title替换当前title
	var title = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue=title;
	
	return false;
}


function prepareLinks(){	
	if( !document.getElementsByTagName ) return false;
	if( !document.getAttribute ) return false;

	var links = document.getElementsByTagName("a");

	for(var i=0; i<links.length; ++i){
		
		if( links[i].getAttribute("class") == "popUp" ){
			links[i].onclick = function(){
				return showPic(this);
			}
			link[i].onkeypress = links[i].onclick;
		}
	}
}

window.onload = prepareLinks;
