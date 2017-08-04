$(function(){
	//nav
	function nav(){
		var meu=true;
		$(".meu").click(function(){
			if (meu) {
				$(".nav").addClass("ac1");
				$(".choose").addClass("ac2");
				$(".meu").addClass("ac3");
				$(".pre").addClass("ac4");
				$(".next").addClass("ac5");
				$(".main").addClass("ac6");
				return meu=false;
			}else{
				$(".nav").removeClass("ac1");
				$(".choose").removeClass("ac2");
				$(".meu").removeClass("ac3");
				$(".pre").removeClass("ac4");
				$(".next").removeClass("ac5");
				$(".main").removeClass("ac6");
				return meu=true;
			}		
		})
	}
	nav()


    // home 
    var slide=$(".slide")
	for (var i = 0; i < 4; i++) {
		$('<div class="item"></div>').appendTo(slide)
	}
	var count=5;
	var w=$(".slide").width()/count;
	$(".item").each(function(index){
		var change=index*90
		for (var i = 0; i < count; i++) {
			var x=i*w;
			$('<div class="pic"></div>')
			.width(w)
			.css({
				"left":x+"px",
				"background-image":"url(images/"+index+".jpg)",
				"background-position":(-x)+"px 0px",
				"transform":"rotateX("+change+"deg) translateZ(250px)"
			})
			.appendTo(this)
		}
		
	})

	var num=0
	$(".read").click(function(){
		num++;
		$(".item").each(function(index){
			var change=index*90-num*90;
			$(this).find(".pic").each(function(i){
				var delay=i*0.2;
				$(this).css({
				"transform":"rotateX("+change+"deg) translateZ(250px)",
				"transition":"transform 1s "+delay+"s"
				})
			})
		})		
	})


	//按钮翻页
/*	for (var i = 0; i < num; i++) {
		var z=-i*100;
		var items=$(".item").css({
			//"background-image":"url(images/"+i+".jpg)",
			"transform":"translateZ("+z+"px)"
		}).appendTo(main)
	}*/
		var state=true;
	var main=$(".main")
	$(".next").click(function(){
		if (!state) {
			return false
		}
		state=false

		var first=$(".it").eq(0);
		first.addClass(".add")

		setTimeout(function(){
			first.css({
				"transform":"rotateX(0deg) translateZ("+num*(-100)+"px)",
				"opacity":1
			})
			.appendTo(main)
			setTimeout(function(){
				$(".it").each(function(index){
					var move=-100*index;
					$(this).css({
						"transform":"translateZ("+move+"px)"
					})
				})
				state=true
			},300)	
		},500)
	})

	

		$(".pre").click(function(){
			var last=$(".it:last");
			last.addClass(".bdd")

			setTimeout(function(){
				last.css({
					"transform":"rotateX(0deg) translateZ(100px)",
					"opacity":1
				}).prependTo(main);
				setTimeout(function(){
					$(".it").each(function(index){

						var back=-100*index;
						$(this).css({
							"transform":"translateZ("+back+"px)"
						})
					})
				},300)
			},500)
		})


	


//导航换页


})