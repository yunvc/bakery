// JavaScript Document
/*home.html*/
$(document).on("pagecreate", "#page4home", function () {
	'use strict';
	$("#order2hide").hide();
	$("#checkinBtn").click(function () {
		var uid, upwd;
		uid = $("#checkinID").val();
		upwd = $("#checkinPWD").val();

		if (uid === sessionStorage.getItem("s-id")) {
			if (upwd === sessionStorage.getItem("s-pwd")) {
				alert("check in ok!");
				$("#order2hide").show();
				var uname, usex;
				uname = sessionStorage.getItem("s-name");
				usex = sessionStorage.getItem("s-sex");
				if (usex === "男") {
					$("#showName").text(uname + "先生,你好~");
				} else if (usex === "女") {
					$("#showName").text(uname + "小姐,你好~");
				}

			} else {
				alert("PWD is Wrong!");
			}

		}
		if (uid !== sessionStorage.getItem("s-id")) {
			if (upwd === sessionStorage.getItem("s-pwd")) {
				alert("Member is not Exist!");
			} else {
				alert("Please reinput!");
			}
		}
	});

	$("#logoutBtn").click(function () {
		sessionStorage.removeItem("s-id");
		sessionStorage.removeItem("s-pwd");
		sessionStorage.removeItem("s-name");
		sessionStorage.removeItem("s-sex");
		$("#checkinID").val("");
		$("#checkinPWD").val("");
		$("#showName").text("您好~");
	});


});


/*signUp.html*/
$(document).on("pagecreate", "#page4signUp", function () {
	'use strict';
	$(document).bind("mobileinit", function () {
		$.mobile.page.prototype.options.addBackBtn = true;
	});

	$(this).on("click", "#btn_signUp", function () {
		var rid, rpwd, rname, rsex;
		if ($("#uid").val() !== "" && $("#upwd").val() !== "" && $("#uname").val() !== "" && $("#usex").val() !== "") {
			rid = $("#uid").val();
			rpwd = $("#upwd").val();
			rname = $("#uname").val();
			rsex = $("#usex").val();

			sessionStorage.setItem("s-id", rid);
			sessionStorage.setItem("s-pwd", rpwd);
			sessionStorage.setItem("s-name", rname);
			sessionStorage.setItem("s-sex", rsex);
			alert("Welocome!");
		} else {
			alert("Every fields is required.");
		}

	});
});


/*cake.html*/
/*ref:https://www.w3school.com.cn/tiy/t.asp?f=jquery_event_mouseover_mouseout */
$(document).on("pagecreate", "#page4cake", function () {
	'use strict';
	$("#lemon1").click(function () {
		$("#lemon").attr("src", "img/lemonCake.png");
	});
	$("#lemon2").click(function () {
		$("#lemon").attr("src", "img/bigLemonCake.png");
	});
	$("#tiramisu1").click(function () {
		$("#tiramisu").attr("src", "img/tiramisu.png");
	});
	$("#tiramisu2").click(function () {
		$("#tiramisu").attr("src", "img/bigTiramisu.png");
	});
});
/*order.html*/
$(document).on("pagecreate","#page4order", function () {
	'use strict';
    $(this).on("click","#btn_order", function () {
		var s="";
		s="芋頭鹹蛋黃:"+$("#bagel1").val()+"個"+","+
		  "經典乳酪:"+$("#bagel2").val()+"個"+","+
		  "蔓越莓堅果餅乾:"+$("#cookie1").val()+"個"+","+
		  "杏仁脆餅:"+$("#cookie2").val()+"個"+","+
		  "檸檬起士蛋糕:"+$("#cake1").val()+"個"+
		  "提拉米蘇:"+$("#cake2").val()+"個";	  
	alert(s);
				
	sessionStorage.setItem("sbagel",$("#bagel1").val());
	sessionStorage.setItem("ssbagel",$("#bagel2").val());
	sessionStorage.setItem("scookie",$("#cookie1").val());
	sessionStorage.setItem("sscookie",$("#cookie1").val());
	sessionStorage.setItem("scake",$("#cake1").val());
	sessionStorage.setItem("sscake",$("#cookie2").val());	
		
	
	});
});




/*detail.html*/
$(document).on("pagecreate","#page4detail", function () {
	'use strict';
	var bagel,cookie,cake,ubagel,ucookie,ucake;	
	bagel = sessionStorage.getItem("sbagel");
	ubagel = sessionStorage.getItem("ssbagel");
	cookie = sessionStorage.getItem("scookie");
	ucookie = sessionStorage.getItem("sscookie");
	cake = sessionStorage.getItem("scake");
	ucake = sessionStorage.getItem("sscake");
	
	$("#bagel3").val(bagel).selectmenu("refresh");
	$("#bagel3").selectmenu();
	$("#bagel4").val(ubagel).selectmenu("refresh");
	$("#bagel4").selectmenu();
	$("#cookie3").val(cookie).selectmenu("refresh");
	$("#bagel4").selectmenu();
	$("#cookie4").val(ucookie).selectmenu("refresh");
	$("#cookie4").selectmenu();
	$("#cake3").val(cake).selectmenu("refresh");
	$("#cake3").selectmenu();
	$("#cake4").val(ucake).selectmenu("refresh");
	$("#cake4").selectmenu();
		
    var bs,bss,cks,ckss,cas,cass;
	  bs=$("#bagel3").val()*60;
		$("#btotal").val(bs);
	  bss = $("#bagel4").val()*55;
	    $("#btotal2").val(bss);
	  cks=$("#cookie3").val()*70;
	    $("#cktotal").val(cks);
	  ckss=$("#cookie4").val()*58;
	    $("#cktotal2").val(ckss);
	  cas=$("#cake3").val()*90;
	    $("#catotal").val(cas);
	  cass=$("#cake4").val()*95;
	    $("#catotal2").val(cass);
		var sum;
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
	
$("#bagel3").change(function () {	
		  bs=$("#bagel3").val()*60;
		$("#btotal").val(bs);	
sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
$("#bagel4").change(function () {	
          bss = $("#bagel4").val()*55;
	    $("#btotal2").val(bss);	
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
$("#cookie3").change(function () {	
	  cks=$("#cookie3").val()*70;
	    $("#cktotal").val(cks);
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
$("#cookie4").change(function () {	
	  ckss=$("#cookie4").val()*58;
	    $("#cktotal2").val(ckss);
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
$("#cake3").change(function () {	
	  cas=$("#cake3").val()*90;
	    $("#catotal").val(cas);	
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
$("#cake4").change(function () {	
	  cass=$("#cake4").val()*95;
	    $("#catotal2").val(cass);	
	sum=parseInt($("#btotal").val())+parseInt($("#btotal2").val())+parseInt($("#cktotal").val())+parseInt($("#cktotal2").val())+parseInt($("#catotal").val())+parseInt($("#catotal2").val());
	$("#total").text(sum);
});
	$(this).on("click","#btn_detail", function () {
alert("成功！");
		
		});
});