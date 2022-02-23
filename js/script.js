function changeTheme(){
	if(document.getElementById('bt-theme').innerHTML==='Theme'){
		document.body.style.background='#555';
		document.body.style.color='white';
		document.getElementById('bt-theme').innerHTML='Light Theme'
	}
	else{
		document.body.style.background='white';
		document.body.style.color='#555';
		document.getElementById('bt-theme').innerHTML='Dark Theme';
	}
}

function changeYoutube(){
  if(document.getElementById('bt-youtube')){
    window.open("https://youtube.com/c/CarlosAntonioExcel");  
  }
}

