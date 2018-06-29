window.onload=function(){

	/*购物车*/
	let headerright2=document.getElementsByClassName("header-right2")[0];  //获取购物车
	let iconxiazai1=document.getElementsByTagName("i")[0];    //获取i
	let span1=document.getElementsByTagName("span")[0];         //获取字
	
	let shopcon=document.getElementsByClassName("shopcon")[0];       //获取下框

	headerright2.onmouseover=function(){                             //鼠标移入
		this.style="background-color:#fff;"            
		shopcon.style=`height:98px;
		box-shadow:0 3px 5px 2px rgba(0,0,0,0.3);`
		iconxiazai1.style="color:#ff6700"
		span1.style="color:#ff6700"
	}
	headerright2.onmouseout=function(){                              //鼠标移出
		this.style="background-color:#424242;"
		shopcon.style=`height:0px;
		box-shadow:0 0px 0px 0px rgba(0,0,0,0.3);`
		iconxiazai1.style="color:#b0b0b0;"
		span1.style="color:#b0b0b0;"
	}
   //搜索
	let search4=document.getElementsByClassName("search4")[0];                 //搜索框           
	let search4R=document.getElementsByClassName("search4-R")[0];               //
	let input=document.querySelector(".search4>input")                          //input框
	let search4chubo= document.getElementsByClassName ("search4chubo")[0];       //
          let status=true;                                                     //状态确定
	    search4.onmouseover=function(){                                        //
	    	if(!status){
	    		return                                                          //状态
	    	}
	    	input.style.borderColor="#b0b0b0";
	    	search4R.style.borderColor="#b0b0b0";
	    }
	    search4.onmouseout=function(){
	    	if(!status){
	    		return
	    	}
	    	input.style.borderColor="#e0e0e0";
	    	search4R.style.borderColor="#e0e0e0";
	    	
	    }
       input.onfocus=function(){                                         //获取焦点 
       	    status=false;
       	    input.style.borderColor="#ff6700";
	    	search4R.style.borderColor="#ff6700";
	    	search4chubo.style.display="block";
       }
       
       input.onblur=function(){                                          //移出焦点
       	    status=true;
       	    input.style.borderColor="#e0e0e0";
	    	search4R.style.borderColor="#e0e0e0";
	    	search4chubo.style.display="none";
       }
   //star
    let starbtnL=document.querySelector(".star-btnL");
   
    let starbtnR=document.querySelector(".star-btnR");
    
    let starbottomnei=document.querySelector(".starbottomnei");
     let num=0;
    starbtnR.onclick=function(){
       num-=1226;
       if(num<=(-1226)*2){
       	  num=-1226*2;
          starbtnR.style="color:#e0e0e0";
       }
       starbottomnei.style.marginLeft=num+"px";
       starbtnL.style="color:#b0b0b0";
    }
    starbtnL.onclick=function(){
       num+=1226;
       if(num>=0){
       	  num=0;
          starbtnL.style="color:#e0e0e0";
       }
       starbottomnei.style.marginLeft=num+"px";
       starbtnR.style="color:#b0b0b0";
    }
    starbtnL.onmouseenter=function(){
      if(num<0){
        starbtnL.style="color:#ff6700";
      }
    }
    starbtnL.onmouseleave=function(){
      if(num<0){
        starbtnL.style="color:#b0b0b0";
      }
    }
    starbtnR.onmouseenter=function(){
      if(num>(-1226)*2){
        starbtnR.style="color:#ff6700";
      }
    }
    starbtnR.onmouseleave=function(){
      if(num>(-1226)*2){
        starbtnR.style="color:#b0b0b0";
      }
    }
//为你推荐
     let starbtnL1=document.querySelector(".star-btnL1");
     
    let starbtnR1=document.querySelector(".star-btnR1");
      
    let star1bottomnei=document.querySelector(".star1-bottomnei");
    
     let n=0;
    starbtnR1.onclick=function(){
       n-=1226;
       if(n<=(-1226)*3){
          n=-1226*3;
         starbtnR1.style="color:#e0e0e0";
       }
       star1bottomnei.style.marginLeft=n+"px";
       starbtnL1.style="color:#b0b0b0";
    }
    starbtnL1.onclick=function(){
       n+=1226;
       if(n>=0){
          n=0;
          starbtnL1.style="color:#e0e0e0";
       }
       star1bottomnei.style.marginLeft=n+"px";
       starbtnR1.style="color:#b0b0b0";
    } 

    starbtnL1.onmouseenter=function(){
      if(n<0){
        starbtnL1.style="color:#ff6700";
      }
    }

    starbtnL1.onmouseout=function(){
      if(n<0){
        starbtnL1.style="color:#b0b0b0";
      }
    }
    starbtnR1.onmouseenter=function(){
      if(n>(-1226)*3){
        starbtnR1.style="color:#ff6700";
      }
    }

    starbtnR1.onmouseleave=function(){
      if(n>(-1226)*3){
        starbtnR1.style="color:#b0b0b0";
      }
    }


  //banner选框
  let asideboxli=document.querySelectorAll(".aside-box>li");
  
   let asideboxdiv=document.querySelectorAll(".aside-box>li>div");
    console.log(asideboxdiv)
  for(let i=0;i<asideboxli.length;i++){
  	asideboxli[i].onmouseover=function(){
  		asideboxdiv.forEach((item)=>{
  			item.style.display="none";
        
  		})  
      asideboxdiv[i].style="display:block;border-right: 1px solid #e0e0e0;border-top: 1px solid #e0e0e0;box-shadow:0px 2px 3px 2px rgba(0,0,0,0.2)" 
  	}
  	asideboxli[i].onmouseout=function(){
  		asideboxdiv.forEach((item)=>{
  			item.style.display="none";
  		})
    }
     asideboxdiv[i].style=`border-right: 0px;
        border-top: 1px solid #e0e0e0;box-shadow:none`

  }

  //家电
   let jiadianright=document.querySelectorAll(".jiadian-right>li");
   
   let jiadianbottom2wai=document.querySelectorAll(".jiadianbottom2wai>ul");
   
   for(let i=0;i<jiadianright.length;i++){
       jiadianright[i].onmouseover=function(){
       	 jiadianright.forEach((item)=>{
       	 	item.className="";
       	 })
       	 jiadianright[i].className="hot1";
         jiadianbottom2wai.forEach((item)=>{
         	item.className="jiadianbottom2";
         })
         jiadianbottom2wai[i].className="jiadianbottom2 active";
       }
   	  
   }

   //智能
   let zhinengright=document.querySelectorAll(".zhineng-right>li");
  
   let jiadianbottom2waiwai2=document.querySelectorAll(".jiadianbottom2wai-wai2>ul");
  
   for(let i=0;i<zhinengright.length;i++){
       zhinengright[i].onmouseover=function(){
       	 zhinengright.forEach((item)=>{
       	 	item.className="";
       	 })
       	 zhinengright[i].className="hot1";
         jiadianbottom2waiwai2.forEach((item)=>{
         	item.className="jiadianbottom2";
         })
         jiadianbottom2waiwai2[i].className="jiadianbottom2 active";
       }
    }	  
  
   //搭配
   let dapeiright=document.querySelectorAll(".dapei-right>li");
  
   let jiadianbottom2waiwai3=document.querySelectorAll(".jiadianbottom2wai-wai3>ul");
   
   for(let i=0;i<dapeiright.length;i++){
       dapeiright[i].onmouseover=function(){
       	 dapeiright.forEach((item)=>{
       	 	item.className="";
       	 })
       	 dapeiright[i].className="hot1";
         jiadianbottom2waiwai3.forEach((item)=>{
         	item.className="jiadianbottom2";
         })
         jiadianbottom2waiwai3[i].className="jiadianbottom2 active";
       }
    }

    //配件	
    let peijianright=document.querySelectorAll(".peijian-right>li");
  
   let jiadianbottom2waiwai4=document.querySelectorAll(".jiadianbottom2wai-wai4>ul");
 
   for(let i=0;i<peijianright.length;i++){
       peijianright[i].onmouseover=function(){
       	 peijianright.forEach((item)=>{
       	 	item.className="";
       	 })
       	 peijianright[i].className="hot1";
         jiadianbottom2waiwai4.forEach((item)=>{
         	item.className="jiadianbottom2";
         })
         jiadianbottom2waiwai4[i].className="jiadianbottom2 active";
       }
    } 

    //周边
    let zhoubianright=document.querySelectorAll(".zhoubian-right>li");

   let jiadianbottom2waiwai5=document.querySelectorAll(".jiadianbottom2wai-wai5>ul");
   
   for(let i=0;i<zhoubianright.length;i++){
       zhoubianright[i].onmouseover=function(){
       	 zhoubianright.forEach((item)=>{
       	 	item.className="";
       	 })
       	 zhoubianright[i].className="hot1";
         jiadianbottom2waiwai5.forEach((item)=>{
         	item.className="jiadianbottom2";
         })
         jiadianbottom2waiwai5[i].className="jiadianbottom2 active";
       }
    } 

    

    //内容1
     let Larrow=document.querySelectorAll(".content>.con>.box>.Larrow")[0]; 
    let Rarrow=document.querySelectorAll(".content>.con>.box>.Rarrow")[0];
    let btnslists=document.querySelectorAll(".btns>div");
    let contenthuac=document.querySelector(".contenthuac")
     let m1=0;
     let n1=0;
     function runs(type="Rarrow"){
      if(type=="Rarrow"){
        m1-=296;
       if(m1<=(-296)*2){
          m1=-296*2;
       }
       n1++;
       if(n1>2){
        n1=2;
       }
       contenthuac.style.marginLeft=m1+"px";
       btnslists.forEach((item)=>{
        item.classList.remove("active")
       })
       btnslists[n1].classList.add("active");
      }
      if(type=="Larrow"){
        m1+=296;
       if(m1>0){
          m1=0;    
       }
       n1--;
       if(n1<0){
        n1=0;
       }
       contenthuac.style.marginLeft=m1+"px";
       btnslists.forEach((item)=>{
        item.classList.remove("active")
       })
       btnslists[n1].classList.add("active");
      }
    }
    Rarrow.onclick=function(){
       runs();
    }
    Larrow.onclick=function(){
      runs("Larrow")
    }
    btnslists.forEach((item,index)=>{
        item.onclick=function(){
          if(index>n1){
            n1=index-1;
            m1=-296*(index-1)
            runs();
          }else{
            n1=index+1;
            m1=-296*(index+1)
            runs("Larrow")
          }
        }
    })
    //内容2
    let Larrow1=document.querySelectorAll(".content>.con>.box>.Larrow1")[0];
    let Rarrow1=document.querySelectorAll(".content>.con>.box>.Rarrow1")[0];
    let contenthuac11=document.querySelectorAll(".contenthuac1")[0];
   
    let btnslists1=document.querySelectorAll(".btns3>div");
    let m2=0;
    let n2=0;
     function runs1(type="Rarrow"){
      if(type=="Rarrow"){
        m2-=296;
       if(m2<=(-296)*3){
          m2=-296*3;
       }
       n2++;
       if(n2>3){
        n2=3;
       }
       contenthuac11.style.marginLeft=m2+"px";
       btnslists1.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists1[n2].classList.add("active2");
      }
      if(type=="Larrow"){
        m2+=296;
       if(m2>0){
          m2=0;    
       }
       n2--;
       if(n2<0){
        n2=0;
       }
       contenthuac11.style.marginLeft=m2+"px";
       btnslists1.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists1[n2].classList.add("active2");
      }
    }
    Rarrow1.onclick=function(){
       runs1();
    }
    Larrow1.onclick=function(){
      runs1("Larrow")
    }
    btnslists1.forEach((item,index)=>{
        item.onclick=function(){
          if(index>n2){
            n2=index-1;
            m2=-296*(index-1)
            runs1();
          }else{
            n2=index+1;
            m2=-296*(index+1)
            runs1("Larrow")
          }
        }
    })

   //内容3
     let Larrow2=document.querySelectorAll(".content>.con>.box>.Larrow1")[1];
    let Rarrow2=document.querySelectorAll(".content>.con>.box>.Rarrow1")[1]; 
    let contenthuac12=document.querySelectorAll(".contenthuac1")[1];
    let btnslists2=document.querySelectorAll(".btns4>div");
    let m3=0;
    let n3=0;
     function runs2(type="Rarrow"){
      if(type=="Rarrow"){
        m3-=296;
       if(m3<=(-296)*3){
          m3=-296*3;
       }
       n3++;
       if(n3>3){
        n3=3;
       }
       contenthuac12.style.marginLeft=m3+"px";
       btnslists2.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists2[n3].classList.add("active2");
      }
      if(type=="Larrow"){
        m3+=296;
       if(m3>0){
          m3=0;    
       }
       n3--;
       if(n3<0){
        n3=0;
       }
       contenthuac12.style.marginLeft=m3+"px";
       btnslists2.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists2[n3].classList.add("active2");
      }
    }
    Rarrow2.onclick=function(){
       runs2();
    }
    Larrow2.onclick=function(){
      runs2("Larrow")
    }
    btnslists2.forEach((item,index)=>{
        item.onclick=function(){
          if(index>n3){
            n3=index-1;
            m3=-296*(index-1)
            runs2();
          }else{
            n3=index+1;
            m3=-296*(index+1)
            runs2("Larrow")
          }
        }
    })   

   //内容4
     let Larrow3=document.querySelectorAll(".content>.con>.box>.Larrow1")[2];
    let Rarrow3=document.querySelectorAll(".content>.con>.box>.Rarrow1")[2];
    let contenthuac13=document.querySelectorAll(".contenthuac1")[2];
    let btnslists3=document.querySelectorAll(".btns5>div");
    let m4=0;
    let n4=0;
     function runs3(type="Rarrow"){
      if(type=="Rarrow"){
        m4-=296;
       if(m4<=(-296)*3){
          m4=-296*3;
       }
       n4++;
       if(n4>3){
        n4=3;
       }
       contenthuac13.style.marginLeft=m4+"px";
       btnslists3.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists3[n4].classList.add("active2");
      }
      if(type=="Larrow"){
        m4+=296;
       if(m4>0){
          m4=0;    
       }
       n4--;
       if(n4<0){
        n4=0;
       }
       contenthuac13.style.marginLeft=m4+"px";
       btnslists3.forEach((item)=>{
        item.classList.remove("active2")
       })
       btnslists3[n4].classList.add("active2");
      }
    }
    Rarrow3.onclick=function(){
       runs3();
    }
    Larrow3.onclick=function(){
      runs3("Larrow")
    }
    btnslists3.forEach((item,index)=>{
        item.onclick=function(){
          if(index>n4){
            n4=index-1;
            m4=-296*(index-1)
            runs3();
          }else{
            n4=index+1;
            m4=-296*(index+1)
            runs3("Larrow")
          }
        }
    })   
     
    //banner动图
    let listtu=document.querySelectorAll(".img-box>li>a");   //获取a》图片
    let t=setInterval(runban, 3000);           //定时器（运行函数，只要有就每隔一段时间运行，不需要调用）
    let index=0;                          //申明并定义下表
    let  banner=document.querySelector(".banner");         //获取大banner
   
    let bannergouL=document.querySelector(".banner-gouL");    //获取左、后退箭头
   
    let bannergouR=document.querySelector(".banner-gouR");     //获取右、前进箭头
    let bannerbnt=document.querySelectorAll(".banner-bnt>li");   //获取滚动的按钮

   
    function runban(type="bannergouRb"){     //函数，默认参数为前进
    	if(type=="bannergouRb"){          //如果前进
            index++;
            if(index>4){
        	    index=0;
            }
        } 
        if(type=="bannergouLb"){        //如果后退
             index--;
             if(index<0){
             	index=4;
             }
        }
        listtu.forEach((item)=>{               
        	item.classList.remove("active");
        })
        listtu[index].classList.add("active");
        bannerbnt.forEach((item)=>{               
        	item.classList.remove("active");
        })
        bannerbnt[index].classList.add("active")

    }
    banner.onmouseenter=function(){            //鼠标移进运行函数，暂停
        clearInterval(t);
    }
    banner.onmouseleave=function(){             //鼠标移出运行函数，开始
    	t=setInterval(runban, 3000);          
    }
    bannergouR.onclick=function(){           //点击事件，点击时运行函数；
    	runban();                               //函数的回调
    }
    bannergouL.onclick=function(){            
    	runban("bannergouLb");            
    }
    bannerbnt.forEach((item,i)=>{
    	item.onclick=function(){
            
       	
        bannerbnt.forEach((item)=>{               
        	item.classList.remove("active");
        })
        bannerbnt[i].classList.add("active")

        index=i;
        listtu.forEach((item)=>{               
        	item.classList.remove("active");
        })
        listtu[index].classList.add("active");
       }
       
    })  

   for(let i=0;i<listtu.length;i++){
     	bannerbnt.onmouseover=function(){
            
       	
        bannerbnt.forEach((item)=>{               
        	item.className=" ";
        })
        bannerbnt[i].className="active";

        index=i;
        listtu.forEach((item)=>{               
        	item.className=" ";
        })
        listtu[index].className="active";
       }
   }


   //van下来图
   let van=document.querySelectorAll(".van");
   
   let search3li=document.querySelectorAll(".search3>li");
   let search3=document.querySelector(".search3");console.log(search3);
   let vanbig=document.querySelectorAll(".vanbig");console.log(vanbig);
    search3.onmouseenter=function(){
     	van.forEach((item)=>{
     		item.classList.add("transition");
     	})
    }
    
    
   search3li.forEach((item,index)=>{
   	  item.onmouseover=function(){
   	  	if(index>7){
   	  		return;
   	  	}
   	  	van.forEach((item)=>{
         
          item.style.zIndex=0;
        })
   	  	van[index].classList.add("active");
        vanbig[index].style=`border-top:1px solid #e0e0e0;
        box-shadow:0 1px 1px 1px rgba(0,0,0,0.2);z-index:30`
        
   	  }
   	  item.onmouseout=function(){
   	  	if(index>7){
   	  		return;
   	  	}
   	  	van[index].classList.remove("active");
   	    van.forEach((item)=>{
   	    	item.classList.remove("transition");
           
   	    })
   	    van[index].classList.add("transition");
        vanbig[index].style=`border-top:0px;box-shadow:none`
        
      
   	  }
   })
}