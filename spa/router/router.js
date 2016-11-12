/* 
 * @Author: zhuxinyong
 * @Date:   2016/11/12
 * @Email:  zhuxinyong.sh@superjia.com
 * @Last Modified by:   zhuxinyong
 * @Last Modified time: 2016/11/12
 */


 //let this snippet run before your hashchange event binding code
 // (function(){
 // 	var lastURL=document.URL;
 // 	window.addEventListener("hashchange",function(event){
 // 		Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
 // 		Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
 // 		lastURL=document.URL;
 // 	});
 // }());


function Router(){
	this.route = {};
	this.init();
}

Router.prototype = {
	constructor: Router,
	init:function(){
		var self = this;
		window.addEventListener('hashchange',function(event){
			self.hashChange();
		});
		window.addEventListener('load',function(){
			self.hashChange();
		});
	},
	on:function(key,value){
		this.route[key] = value || __.noop;
	},
	trigger:function(key){
		let callBack = this.route[key];
		callBack && callBack();
	},
	hashChange(){
		let self = this,
			hash = location.hash.slice(1);
		self.trigger(hash);
	}
}