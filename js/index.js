
	//数码时钟
	;(function(){
		function time(){ 
			function toDou(n){
				return n<10?'0'+n:''+n;
			}
			//获取时间
			var oDate = new Date();
			var h = oDate.getHours();
			var min = oDate.getMinutes();
			var s = oDate.getSeconds();
			var week = oDate.getDay();
			var str2 = toDou(h)+'-'+toDou(min)+'-'+toDou(s)+'-'+week;
			var oTime = document.getElementById('time');
			var aTime = oTime.getElementsByTagName('img'); 
			for(var i = 0;i<aTime.length;i++){
				if(aTime[i].className == 'num'){
					aTime[i].src = 'images/'+str2.charAt(i)+'.png';
				}
			}
		}
		time();
		setInterval(time,1000);
			
	})()
	
	
	
	//简历
	;(function(){
		var obj = document.getElementById("box");
		var personalR = document.getElementById("personalR");
		var Woenr = document.getElementById("woenr");
		var WoenrUl = Woenr.getElementsByTagName("ul")[0];
		var aWoenrLi = WoenrUl.getElementsByTagName("li");
		var reveal = document.getElementById("reveal");
		var revealLeft = document.getElementById("revealLeft");
		var revealRight = document.getElementById("revealRight");
		var revealUl = document.getElementById("reveal_ul");
		var arevealLi = revealUl.getElementsByTagName("li");
		var matter = document.getElementById("matter");
		var shut = document.getElementById("shut");
		var matterDiv = document.getElementsByTagName("*");
		var attrDiv = [];
		var attrShut = [];
		var attrShutA = [];
		var attrAmong = [];
		var personalCWidth = 0;
		var t = null;
		var time = null;
		var i = 0; 
		var speed = 2;
		
		
		
		var oBtn=document.getElementById('carte');
		var oLeft=document.getElementById('mo');
		var oRight=document.getElementById('qi');
		var oRight1=document.getElementById('personalC');
		var personLi = oRight1.getElementsByTagName("li");
		var sUl=oRight1.getElementsByTagName('ul')[0];
		
		
		sUl.addEventListener('mouseover',function(ev){
			
			var Ev=ev||event;
			doMove(oLeft, -110);
			doMove(oRight, 350);
			Ev.cancelBubble=true;
		},false);
		
		sUl.addEventListener('mouseover',function(ev){
			
			var Ev=ev||event;
			doMove(oLeft, -110);
			doMove(oRight, 350);
			Ev.cancelBubble=true;
		},false);
		oBtn.addEventListener('click',function(ev){
			oRight1.style.WebkitTransition = '1s all ease';
			var Ev=ev||event;
			if(oRight1.style.opacity == 1){
				oBtn.style.background='url(psd/img1.gif) no-repeat 36px -6px';
				doMove(oLeft, 0);
				doMove(oRight, 214);
				Ev.cancelBubble=true;
				oRight1.style.opacity = 0;
			}else{
				oBtn.style.background='url(psd/img1.gif) no-repeat 36px 7px';
				doMove(oLeft, -110);
				doMove(oRight, 350);
				Ev.cancelBubble=true;
				oRight1.style.opacity = 1;
			}
		},false);
		
		
		function doMove(obj, iTarget){
			clearInterval(obj.iTime);
			obj.iTime=setInterval(function(){
				
				if(obj.offsetLeft==iTarget){
					clearInterval(obj.iTime);
				}
				else
				{
					var iSpeed=(iTarget-obj.offsetLeft)/8;
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
					
					obj.style.left=obj.offsetLeft+iSpeed+'px';
				}
			}, 14);
			
		}
	
		
		for (i=0;i<personLi.length;i++){
			personLi[i].addEventListener('mouseover',zhong,false);
			personLi[i].addEventListener('mouseout',chu,false);
		}
		function zhong(){
			for (i=0;i<personLi.length;i++){
				this.style.background='#332d24 url(psd/li3.gif) no-repeat 8px center';
			}
		}
		function chu(){
			for (i=0;i<personLi.length;i++){
				this.style.background='#1c1913 url(psd/li.gif) no-repeat 8px center';
			}
		}
		
		for (i=0;i<arevealLi.length;i++){
			arevealLi[i].addEventListener('mouseover',over,false);
			arevealLi[i].addEventListener('mouseout',nai,false);
		}
		function over(){
			for (i=0;i<arevealLi.length;i++){
				this.style.background='#453d31';
			}
		}
		function nai(){
			for (i=0;i<arevealLi.length;i++){
				this.style.background='#3b342a';
			}
		}
		for (i=0;i<aWoenrLi.length;i++){
			aWoenrLi[i].addEventListener('mouseover',ku,false);
			aWoenrLi[i].addEventListener('mouseout',out,false);
		}
		function ku(){
			for (i=0;i<aWoenrLi.length;i++){
				this.style.background='#453d31';
			}
		}
		function out(){
			for (i=0;i<aWoenrLi.length;i++){
				this.style.background='#231f19';
			}
		}
		for(i = 0; i < matterDiv.length; i++){
			if(matterDiv[i].className == "among"){
				attrAmong.push(matterDiv[i]);
			}	
		}
		for(i = 0; i < matterDiv.length; i++){
			if(matterDiv[i].className == "shutA"){
				attrShutA.push(matterDiv[i]);
			}	
		}
		for(i = 0; i < personLi.length; i++){
			personLi[i].index = i;
			personLi[i].addEventListener('click',function (){
				matter.style.display = "block";
				attrAmong[this.index].style.display = "block";
				attrAmong[this.index].style.height = 0 + "px";
				startMove(attrAmong[this.index], {height: 500,marginTop: -250});
			},false);
		}
		for(i = 0; i < attrShutA.length; i++){
			attrShutA[i].index = i;
			attrShutA[i].addEventListener('click',function (){
				var weniw = this.index;
				startMove(attrAmong[this.index], {height: 0,marginTop: 0},function (){
						matter.style.display = "none";
						attrAmong[weniw].style.display = "none";	
					});
			},false);
		}
		for(i = 0; i < matterDiv.length; i++){
			if(matterDiv[i].className == "matterCont"){
				attrDiv.push(matterDiv[i]);
			}	
		}
		for(i = 0; i < matterDiv.length; i++){
			if(matterDiv[i].className == "shut"){
				attrShut.push(matterDiv[i]);
			}	
		}
		for(i = 0; i < arevealLi.length; i++){
			arevealLi[i].index = i;
			arevealLi[i].addEventListener('click',function (){
				attrDiv[this.index].style.display = "block";
				attrDiv[this.index].style.height = 0 + "px";
				startMove(attrDiv[this.index], {height: 500,marginTop: -250});
			},false);
		}
		for(i = 0; i < attrShut.length; i++){
			attrShut[i].index = i;
			attrShut[i].addEventListener('click',function (){
				var weniw = this.index;
				startMove(attrDiv[this.index], {height: 0,marginTop: 0},function (){
						matter.style.display = "none";
						attrDiv[weniw].style.display = "none";	
					});
			},false);
		}
		for(i = 0; i < aWoenrLi.length; i++){
			aWoenrLi[i].index = i;
			aWoenrLi[i].addEventListener('click',function (){
				speed = this.index;
				show(speed);
			},false);
		}
		revealRight.addEventListener('click',function (){
			speed+=1;
			if(speed >= aWoenrLi.length){
				speed = aWoenrLi.length-1;
			};
			show(speed);
		},false);
		revealLeft.addEventListener('click',function (){
			speed-=1;
			if(speed <= 0){
				speed = 0;
			};
			show(speed);
		},false);
		function show(speed){
			for(i = 0; i < aWoenrLi.length; i++){
				aWoenrLi[i].className = "";
			}
			aWoenrLi[speed].className = "active";
			startMove(WoenrUl, {top: -aWoenrLi[0].offsetHeight * (speed-2)});
			startMove(revealUl, {top: -arevealLi[0].offsetHeight * speed});
		}
	})();

	
	//打开css例子
	;(function(){
		var oDemo1 = document.getElementById('demo1');
		var oDemo2 = document.getElementById('demo2');
		var oDemo3 = document.getElementById('demo3');
		var oDemo4 = document.getElementById('demo4');
		var oDemo5 = document.getElementById('demo5');
		var oDemo6 = document.getElementById('demo6');	
		oDemo1.addEventListener('click',function(){
			window.open('css_code/meilishuo/meilishuo.html','_blank');
		},false);
		oDemo2.addEventListener('click',function(){
			window.open('css_code/mi/mi.html','_blank');
		},false);
		oDemo3.addEventListener('click',function(){
			window.open('css_code/youku/youku.html','_blank');
		},false);
		oDemo4.addEventListener('click',function(){
			window.open('css_code/aiqiyi/aiqiyi.html','_blank');
		},false);
		oDemo5.addEventListener('click',function(){
			window.open('css_code/taobao/taobao.html','_blank');
		},false);
		oDemo6.addEventListener('click',function(){
			window.open('css_code/changyou/changyou.html','_blank');
		},false);

	})();
	
	//打开js例子
	;(function(){
		var oDemo1 = document.getElementById('js-demo1');
		var oDemo2 = document.getElementById('js-demo2');
		var oDemo3 = document.getElementById('js-demo3');
		var oDemo4 = document.getElementById('js-demo4');
		var oDemo5 = document.getElementById('js-demo5');
		var oDemo6 = document.getElementById('js-demo6');	
		oDemo1.addEventListener('click',function(){
			window.open('js_code/four/APPLE.html','_blank');
		},false);
		oDemo2.addEventListener('click',function(){
			window.open('js_code/slide.html','_blank');
		},false);
		oDemo3.addEventListener('click',function(){
			window.open('js_code/slide/slide.html','_blank');
		},false);
		oDemo4.addEventListener('click',function(){
			window.open('js_code/round.html','_blank');
		},false);
		oDemo5.addEventListener('click',function(){
			window.open('js_code/timg.html','_blank');
		},false);
		oDemo6.addEventListener('click',function(){
			window.open('js_code/separate.html','_blank');
		},false);

	})();
	
	//打开HTML5&CSS3例子
	;(function(){
		var oDemo1 = document.getElementById('h5c3-demo1');
		var oDemo2 = document.getElementById('h5c3-demo2');
		var oDemo3 = document.getElementById('h5c3-demo3');
		var oDemo4 = document.getElementById('h5c3-demo4');
		var oDemo5 = document.getElementById('h5c3-demo5');
		var oDemo6 = document.getElementById('h5c3-demo6');	
		oDemo1.addEventListener('click',function(){
			window.open('h5_code/box.html','_blank');
		},false);
		oDemo2.addEventListener('click',function(){
			window.open('h5_code/boom.html','_blank');
		},false);
		oDemo3.addEventListener('click',function(){
			window.open('h5_code/around.html','_blank');
		},false);
		oDemo4.addEventListener('click',function(){
			window.open('h5_code/books.html','_blank');
		},false);
		oDemo5.addEventListener('click',function(){
			window.open('h5_code/flip.html','_blank');
		},false);
		oDemo6.addEventListener('click',function(){
			window.open('h5_code/projection.html','_blank');
		},false);

	})();
	
	//打开捕鱼达人
	;(function(){
		var oCan = document.getElementById('c1');
		oCan.addEventListener('click',function(){
			window.open('fish_game/demo.html','_blank');
		},false);
	})();
