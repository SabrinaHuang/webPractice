function showPic(whichpic)
{
	// ����Ĭ�϶���ִ��
//	if(!document.getElementById("placeholder"))	return true;
//	if(!document.getElementById("description"))	return true;
	
	// Դ��·��
	var source = whichpic.getAttribute("href");
	// �õ�ǰͼƬ�滻Ĭ��ͼƬ
	var placeholder = document.getElementById("placeholder");	
	placeholder.setAttribute("src", source);
	
	// �ù�����title�滻��ǰtitle
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
