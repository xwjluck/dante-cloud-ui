var t="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,o=Object.prototype.toString,r="[object Function]",e=function(e){var p=this;if("function"!=typeof p||o.call(p)!==r)throw new TypeError(t+p);for(var i,c=n.call(arguments,1),a=function(){if(this instanceof i){var t=p.apply(this,c.concat(n.call(arguments)));return Object(t)===t?t:this}return p.apply(e,c.concat(n.call(arguments)))},l=Math.max(0,p.length-c.length),u=[],y=0;y<l;y++)u.push("$"+y);if(i=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(a),p.prototype){var f=function(){};f.prototype=p.prototype,i.prototype=new f,f.prototype=null}return i},p=Function.prototype.bind||e;export{p as f};