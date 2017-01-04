// JavaScript Document
window.onload=function(){
		var oBox=document.getElementById('pulldown_box');
		var aDiv=oBox.getElementsByClassName('list_down');
		var aInt=oBox.getElementsByTagName('input');
		var aList=oBox.getElementsByTagName('ul');
		var aIcon=oBox.getElementsByTagName('b');
		for(var i=0;i<aInt.length;i++){
			aDiv[i].index=i;
			aDiv[i].onmouseover=function(){
				aList[this.index].className='show pull_down';
				aIcon[this.index].style.backgroundPosition='-206px -87px';	
			};
			aDiv[i].onmouseout=function(){
				aList[this.index].className='pull_down';
				aIcon[this.index].style.backgroundPosition='-206px -148px';		
			};
		}	
		
		var oTit=document.getElementById('tit_box');
		var aHd=oTit.getElementsByClassName('hd_title');
		var aHide=oTit.getElementsByClassName('hide');
		for( var i=0;i<aHd.length;i++){
			aHd[i].index=i;
			aHd[i].onmouseover=function(){
				aHide[this.index].className='show hide';	
			};
			aHd[i].onmouseout=function(){
				for( var i=0;i<aHd.length;i++){
					aHide[i].className='hide';	
				}	
			};
		}
		
		var oMain=document.getElementById('main_r');
		var aInt2=oMain.getElementsByTagName('input');
		var aMlist=oMain.getElementsByClassName('news');
		for(var i=0;i<aInt2.length;i++){
			aInt2[i].index=i;
			aInt2[i].onmouseover=function(){
				for(var i=0;i<aInt2.length;i++){
					aInt2[i].className='';
					aMlist[i].className='news';
				}
				this.className='cur';
				aMlist[this.index].className='news show';
			};
		}
		
		var oInd=document.getElementById('introduce');
		var aInt3=oInd.getElementsByTagName('input');
		var aPic=oInd.getElementsByTagName('a');
		for( var i=0;i<aInt3.length;i++){
			aInt3[i].index=i;
			aInt3[i].onmouseover=function(){
				for( var i=0;i<aInt3.length;i++){
					aInt3[i].className='fl';
					aPic[i].className='';
				}
				this.className='cur fl';
				aPic[this.index].className='show';
			};
		}	
		
		var oTher=document.getElementById('items');
		var aInt4=oTher.getElementsByTagName('input');
		var aPic2=oTher.getElementsByClassName('msg');
		for( var i=0;i<aInt4.length;i++){
			aInt4[i].index=i;
			aInt4[i].onmouseover=function(){
				for( var i=0;i<aInt4.length;i++){
					aInt4[i].className='fl';
					aPic2[i].className='msg clearfix';
				}
				this.className='cur fl';
				aPic2[this.index].className='show msg clearfix';
			};
		}
			
		var oTher2=document.getElementById('items2');
		var aInt5=oTher2.getElementsByTagName('input');
		var aPic3=oTher2.getElementsByClassName('msg');
		for( var i=0;i<aInt5.length;i++){
			aInt5[i].index=i;
			aInt5[i].onmouseover=function(){
				for( var i=0;i<aInt5.length;i++){
					aInt5[i].className='fl';
					aPic3[i].className='msg clearfix';
				}
				this.className='cur fl';
				aPic3[this.index].className='show msg clearfix';
			};
		}
		
		var oTher3=document.getElementById('items3');
		var aInt6=oTher3.getElementsByTagName('input');
		var aPic4=oTher3.getElementsByClassName('pic_msg');
		for( var i=0;i<aInt6.length;i++){
			aInt6[i].index=i;
			aInt6[i].onmouseover=function(){
				for( var i=0;i<aInt6.length;i++){
					aInt6[i].className='fl';
					aPic4[i].className='pic_msg';
				}
				this.className='cur fl';
				aPic4[this.index].className='show pic_msg';
			};
		}		
		
		var oEnter_pic=document.getElementById('enter_pic');
		var aEnter_pica=oEnter_pic.getElementsByTagName('a');
		var oPrev=oEnter_pic.getElementsByTagName('i')[0];
		var oNext=oEnter_pic.getElementsByTagName('i')[1];
		var iNow=0;
		
		oPrev.onclick=function(){
			aEnter_pica[iNow].className='';
			iNow++;
			if(iNow==5){
				iNow=0;
			}
			aEnter_pica[iNow].className='show';
		};
		
		oNext.onclick=function(){
			aEnter_pica[iNow].className='';
			iNow--;
			if(iNow==-1){
				iNow=4;
			}
			aEnter_pica[iNow].className='show';
		};
		
	};