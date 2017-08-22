var _tplib = false;
var _mmbase = "";
var _mmbaseFlag = false;
var _activo = "";

chrome.storage.sync.get(["activo","tplib", "mmbase", "mmbaseFlag"], function(data){
	_tplib = data.tplib==undefined?'':data.tplib;
	_mmbase = data.mmbase==undefined?'':data.mmbase;
	_mmbaseFlag = data.mmbaseFlag==undefined?false:data.mmbaseFlag;
	_activo = data.activo==undefined?'':data.activo;
	paintIcon();
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
	if(typeof changes.tplib == 'object')
		_tplib = changes.tplib.newValue;

	if(typeof changes.mmbase == 'object')
		_mmbase = changes.mmbase.newValue;
	if(typeof changes.mmbaseFlag == 'object')
		_mmbaseFlag = changes.mmbaseFlag.newValue;


	if(typeof changes.activo == 'object') {
		_activo = changes.activo.newValue;
		paintIcon();
	}
	reload();
});


chrome.webRequest.onBeforeRequest.addListener(
	function(e){
		if(_activo == 'Activo'){
			if(e.url.indexOf('SimpleMediaPlayer.min.js') > 0){
				var _simple = e.url;
				if(_tplib === true){
					if(_mmbase && _mmbaseFlag){
						switch (_mmbase) {
							case 'int':
								_mmbase = "//playerint.top.prisasd.com";
								break;
							case 'pro':
								_mmbase = "//playertop.elpais.com";
								break;
						}
						_simple = _simple.replace("//"+getDomain(_simple), _mmbase);
					}
					_simple = _simple.replace('SimpleMediaPlayer.min.js', 'lib/SimpleMediaPlayer.lib.js');
					return {redirectUrl: _simple };
				}
			}
		}
	},
	{urls: ["*://*/*/media/simple/js/SimpleMediaPlayer.min.js*"]},
	["blocking"]
);

function reload(){
	chrome.tabs.getSelected(null, function(tab) {
		var code = 'window.location.reload();';
		chrome.tabs.executeScript(tab.id, {code: code});
	});
}

function getDomain(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};

function paintIcon(){
	if(_activo == 'Activo'){
		chrome.browserAction.setIcon({path: '/icon.png', tabId: null});
	} else {
		chrome.browserAction.setIcon({path: '/icon2.png', tabId: null});
	}
}
