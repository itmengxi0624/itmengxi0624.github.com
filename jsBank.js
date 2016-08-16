 function getStyle(obj, attr)
{
	if(obj.currentStyle)	//IE
	{
		return obj.currentStyle[attr];
	}
	else	//FF、chrome
	{
		return document.defaultView.getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, target, fnCallBack)
{
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	
	obj.timer=setInterval(function (){
		doMove(obj, target, fnCallBack);
	}, 14);
}

function doMove(obj, target, fnCallBack)
{
	var current=0;
	var attr='';
	var iSpeed=0;
	
	var bStop=true;	//假设这一次运动就会停止
	
	for(attr in target)
	{
		current=parseFloat(getStyle(obj, attr));
		
		//if(current!=target[attr])	//没有到达目标
		if(Math.abs(current-target[attr])>1/100)
		{
			bStop=false;
			
			iSpeed=(target[attr]-current)/4;
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(current+iSpeed)*100+')';
				obj.style.opacity=current+iSpeed;
			}
			else
			{
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				obj.style[attr]=current+iSpeed+'px';
			}
		}
	}
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		if(fnCallBack)
		{
			fnCallBack();
		}
	}
}