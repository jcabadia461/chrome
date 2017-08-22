var scr = document.createElement("script");
scr.type="text/javascript";
var _innerHTML = "var salida='';if(typeof(mm_top_compilation)!='undefined')salida+= 'Compilación de TOP: ' + window.mm_top_compilation;if(typeof(mm_simple_compilation)!='undefined')salida+= '\\nCompilación de SIMPLE: ' + window.mm_simple_compilation;if(salida!=''){alert(salida);}"; 
scr.innerHTML = _innerHTML;
					
(document.head || document.body || document.documentElement).appendChild(scr);