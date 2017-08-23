	window.onload = function(){
		init();
	}

var _tplib = false;
var _mmautoplay = false;
var _mmautoplayFlag = '';
var _mmbase = "";
var _mmbaseFlag = "";
var _mmpubli = "";
var _mmpubliFlag = "";
var _mmlang = "";
var _mmlangFlag = "";
var _tacustom = "";
var _innerHTML = "";
var _activo = "";


function init() {
	chrome.storage.sync.get(["activo", "tplib", "mmautoplay", "mmautoplayFlag", "mmbase", "mmbaseFlag", "mmpubli", "mmpubliFlag", "mmlang", "mmlangFlag", "tacustom", "tacustomFlag"], function(data) {
		_tplib = data.tplib==undefined?false:data.tplib;
		_mmautoplay = data.mmautoplay==undefined?'':data.mmautoplay;
		_mmautoplayFlag = data.mmautoplayFlag==undefined?false:data.mmautoplayFlag;
		_mmbase = data.mmbase==undefined?'':data.mmbase;
		_mmbaseFlag = data.mmbaseFlag==undefined?false:data.mmbaseFlag;
		_mmpubli = data.mmpubli==undefined?'':data.mmpubli;
		_mmpubliFlag = data.mmpubliFlag==undefined?false:data.mmpubliFlag;
		_mmlang = data.mmlang==undefined?'':data.mmlang;
		_mmlangFlag = data.mmlangFlag==undefined?false:data.mmlangFlag;
		_tacustom = data.tacustom==undefined?'':data.tacustom;
		_tacustomFlag = data.tacustomFlag==undefined?false:data.tacustomFlag;
		_activo = data.activo==undefined?'':data.activo;

		if(_activo == 'Activo')
			document.getElementById("btnActivar").checked = true;
		else 
			document.getElementById("btnActivar").checked = false;
		document.getElementById("btnTplib").checked = _tplib;

		document.getElementById("txt_mmbase").value = _mmbase;
		document.getElementById("btnMMbase").checked = _mmbaseFlag;

		document.getElementById("txt_mmpubli").value = _mmpubli;
		document.getElementById("btnMMpubli").checked = _mmpubliFlag;

		document.getElementById("txt_mmlang").value = _mmlang;
		document.getElementById("btnMMlang").checked = _mmlangFlag;

		document.getElementById("btnMMautoplay").checked = _mmautoplayFlag;

		document.getElementById("ta_custom").value = _tacustom;
		document.getElementById("btnCustom").checked = _tacustomFlag;

	});

	document.getElementById('btnManagerInfo').addEventListener('click', function(){
	   	chrome.tabs.getSelected(null, function(tab) {
			var _html = "var tmp = new Event('showInfo2'); document.dispatchEvent(tmp);";
			chrome.tabs.executeScript(tab.id, {code: _html});
			window.close();
		});
	})

	document.getElementById("btnActivar").addEventListener("click", function(){
		var _activo = this.checked?'Activo':'';
		chrome.storage.sync.set({"activo":_activo});
	});

	document.getElementById("btnTplib").addEventListener("click", function(){
		chrome.storage.sync.set({"tplib":this.checked});
	});

	document.getElementById("btnMMbase").addEventListener("click", function(){
		chrome.storage.sync.set({"mmbaseFlag":this.checked});
	});

	document.getElementById("btnMMpubli").addEventListener("click", function(){
		chrome.storage.sync.set({"mmpubliFlag":this.checked});
	});

	document.getElementById("btnMMlang").addEventListener("click", function(){
		chrome.storage.sync.set({"mmlangFlag":this.checked});
	});

	document.getElementById("btnMMautoplay").addEventListener("click", function(){
		chrome.storage.sync.set({"mmautoplayFlag":this.checked});
	});


	document.getElementById("btnCustom").addEventListener("click", function(){
		chrome.storage.sync.set({"tacustomFlag":this.checked});
	});

	document.getElementById("txt_mmbase").addEventListener("change", function(){
		save_mmbase();
	});

	document.getElementById("txt_mmpubli").addEventListener("change", function(){
		save_mmpubli();
	});

	document.getElementById("txt_mmlang").addEventListener("change", function(){
		save_mmlang();
	});

	document.getElementById("ta_custom").addEventListener("change", function(){
		save_tacustom();
	});

	document.getElementById("btn_debug").addEventListener("click", function(){
		debugtop();
	});

	document.getElementById("btn_compilation").addEventListener("click", function(){
		compilaciones();
	});


}




function debugtop(){
   	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.executeScript(tab.id, {file: 'debug.js'});
	});
}

function compilaciones(){
    chrome.tabs.executeScript(null, {file: "mm_compilation.js"});
}

function reload(){
	chrome.tabs.reload(null, {}, null)
}

function save_mmbase(){
	chrome.storage.sync.set({"mmbase":document.getElementById("txt_mmbase").value});
}

function save_mmpubli(){
	chrome.storage.sync.set({"mmpubli":document.getElementById("txt_mmpubli").value});
}

function save_mmlang(){
	chrome.storage.sync.set({"mmlang":document.getElementById("txt_mmlang").value});
}

function save_tacustom(){
	chrome.storage.sync.set({"tacustom":document.getElementById("ta_custom").value});
}





