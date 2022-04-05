$(document).ready(function(){


	//메뉴----------------------------------
	$(".gnbMenu>li").hover(function(){
		$(this).find(">ul").stop(true, true).slideDown(); //첫번째 자손의 ul
	},function(){
		$(this).find(">ul").stop(true, true).slideUp();
	});
		
	//////유틸---------------------------------
	$(".util").mouseenter(function(){
		//jquery의 모든 경로는 html의 경로기준과 동일함 -> ../image 가 아님
		$(this).find("ul").show();
	});

	$(".util").mouseleave(function(){
		$(this).find("ul").hide();
	});



/*///// 메인 비주얼 /////*/

	var oldidx=0;  //기존이미지
	var idx=0;   //새로 바뀌는 이미지
	var img_n=$(".visual>ul>li").length; 

	//이미지와 버튼이 바뀌는 함수
	function changeImg(idx){  
		if(oldidx!=idx){ 

			$(".visual .btn>span").eq(idx).addClass("active"); 
			$(".visual .btn>span").eq(oldidx).removeClass("active"); 
			$(".visual ul li").eq(idx).stop(true,true).fadeIn(300); 
			$(".visual ul li").eq(oldidx).stop(true,true).fadeOut(300);  

		}
		oldidx=idx;

	}

	//자동함수 생성
	function changeAuto(){
		idx++;
		
		if(idx>img_n-1){ 
		  idx=0;
		}
		changeImg(idx);
	}

	timer=setInterval(changeAuto,4000);  



	//하단버튼 클릭시
	$(".visual .btn>span").click(function(){

		clearInterval(timer); 
		idx=$(this).index();  
		changeImg(idx);
		timer=setInterval(changeAuto,4000); 

	});



	//일정추천----------------------------------------------
		$(".btn2 .icon7").click(function(){

		$(".right_img ul").stop(true,true).animate({marginLeft:"-=195px"},1000,function(){			
			$(".right_img ul li:first-child").appendTo(".right_img ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

	});


	//이전보기
	$(".btn2 .icon6").click(function(){

		$(".right_img ul").stop(true,true).animate({marginLeft:"+=195px"},1000,function(){			
			$(".right_img ul li:last-child").prependTo(".right_img ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

	});





	// //테마여행---------------------------------
	$(".the li").click(function(){

		val=$(this).index(); 
		num=+200*val; 

		$(".tab-header .tab-highlight").animate({"left":num});
		$(".the li a").css("color","#000");  
		$(this).find(">a").css("color","#fff");  

		$(".panel1>li").hide();
		$($(this).find(">a").attr("href")).fadeIn();
	});





	//이벤트--------------------------------------------------
	//다음보기
	$(".btn3 .icon2").click(function(){

		$(".now_img ul").stop(true,true).animate({marginLeft:"-=260px"},1000,function(){			
			$(".now_img ul li:first-child").appendTo(".now_img ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

	});


	//이전보기
	$(".btn3 .icon1").click(function(){

		$(".now_img ul").stop(true,true).animate({marginLeft:"+=260px"},1000,function(){			
			$(".now_img ul li:last-child").prependTo(".now_img ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

	});







	//인스타그램=====================================
	var img_w= $(".notice-img ul li").width();   //이미지의 가로너비
	var img_nn= $(".notice-img ul li").length;  //이미지의 총개수  
	var oldidxx=0;  //기존이미지
	var index=0;  //선택된 새이미지


	//index번째 비주얼이미지 이동하는 함수생성
	function slideImg(index){

		targetX=-(index*img_w); //움직이는 거리(너비)

		$(".notice-img ul").animate({left:targetX},1000);

		oldidxx=index;

	} 

	//슬라이드 자동함수 생성
	function slideAuto(){
		index++;	
		if(index==img_nn){
			index=0;
		}
		slideImg(index);
	}

	auto=setInterval(slideAuto,4000);




	//이전버튼 클릭
	$(".icno3").click(function(){

		clearInterval(auto);
		index--;
		if(index<0){  //첫번째 이미지까지 오면 다시 맨 마지막 이미지부터 다시....
            index=img_nn-1; //총개수 4(이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3) 
        } 	
		slideImg(index);

		auto=setInterval(slideAuto,4000); //버튼 클릭안할땐 다시 자동함수 실행

	});


	//다음버튼 클릭
	$(".icon4").click(function(){

		clearInterval(auto);
		index++;	
		if(index>=img_nn){ //마지막 이미지까지 오면 다시 첫번재 이미지부터 다시....
            index=0;      
       	}
		slideImg(index);
		auto=setInterval(slideAuto,4000); //버튼 클릭안할땐 다시 자동함수 실행

	});

	////탭메뉴------------------------------

	$(".panel>li:not(:first)").hide();
	 //첫번째를 제외한 나머지 내용 숨기기

	 $(".tab li a").click(function(){
	 	$(".tab li a").removeClass("selected"); // 기존 선택된 selected 클래스 삭제
	 	$(this).addClass("selected"); // 새로 선택된 selected 클래스 생성

	 	$(".panel>li").hide(); //기존의 보여진 내용 숨기기
	 	$($(this).attr("href")).show(); //새로 선택된 내용 href 연결된 내용 보여주기

	 	return false; //a기능 차단

	 });

/////퀵메뉴---------------------------------------------

	$("#QuickBanner").hide();  //탑버튼 숨기기

	// 스크롤이 350이상일때  TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
	$(window).scroll(function(){

		if($(this).scrollTop()>500){
			$("#QuickBanner").fadeIn();
		}else{
			$("#QuickBanner").fadeOut();
		}

	});
	$(window).scroll(function(){ 
		var curpos=$(window).scrollTop();
 		$("#QuickBanner").stop().animate({"top":curpos-400},1300); 
	});


// //퀵메뉴가 마이너스를 안주면 자꾸 화면에서 사라집니다 끝도없이 내려가고 끝도없이 올라가요 ㅜㅜ 
// 어떻게 해야할지모르겟어요 ㅜㅜ




});