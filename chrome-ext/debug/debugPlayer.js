function injectJs() {
	var _tplib = false;
	var _mmautoplay = false;
	var _mmbase = "";
	var _mmpubli = "";
	var _mmlang = "";
	var _tacustom = "";
	var _innerHTML = "";
	var _activo = "";

	chrome.storage.sync.get(["activo", "tplib", "mmautoplay", "mmautoplayFlag", "mmbase", "mmbaseFlag", "mmpubli", "mmpubliFlag", "mmlang", "mmlangFlag", "tacustom", "tacustomFlag"], function(data) {
		_tplib = data.tplib==undefined?'':data.tplib;
		if(data.mmautoplayFlag == true)
			_mmautoplay = data.mmautoplayFlag==undefined?'':data.mmautoplayFlag;
		if(data.mmbaseFlag === true)
			_mmbase = data.mmbase==undefined?'':data.mmbase;
		if(data.mmpubliFlag === true)
			_mmpubli = data.mmpubli==undefined?'':data.mmpubli;
		if(data.mmlangFlag === true)
			_mmlang = data.mmlang==undefined?'':data.mmlang;
		if(data.tacustomFlag === true)
			_tacustom = data.tacustom==undefined?'':data.tacustom;
		_activo = data.activo==undefined?'':data.activo;
		if(_activo=="Activo"){
			console.log("** Debug Multimedia is ON **");
			_innerHTML+= _tplib?'tplib='+_tplib+';':'';
			_innerHTML+= _mmautoplay?'mm_autoplay='+_mmautoplay+';':'';
			_innerHTML+= _mmbase?'mm_base="'+_mmbase+'";':'';
			_innerHTML+= _mmpubli?'mm_publi="'+_mmpubli+'";':'';
			_innerHTML+= _mmlang?'mm_lang="'+_mmlang+'";':'';
			_innerHTML+= _tacustom?_tacustom:'';

			var scr = document.createElement("script");
			scr.type="text/javascript";
			scr.innerHTML = _innerHTML;
			(document.head || document.body || document.documentElement).appendChild(scr);
		} else {
			console.log("** Debug Multimedia is OFF **");
		}

	});

}

injectJs();
