var scr = document.createElement("script");
scr.type="text/javascript";
var _innerHTML = "if(typeof(window.emic)=='undefined'){console.log('emic no está cargado')}else{if(typeof(window.emic.top)=='undefined'){console.log('emic.top no está cargado')}else{if(window.emic.top.debugTop==true){console.log('emic.top.debugTop desactivado');window.emic.top.debugTop = false;}else{console.log('emic.top.debugTop activado');window.emic.top.debugTop = true;}}};"; 
scr.innerHTML = _innerHTML;
					
(document.head || document.body || document.documentElement).appendChild(scr);