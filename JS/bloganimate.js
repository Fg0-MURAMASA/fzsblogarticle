
$(document).ready(function(){
	
  var com1 = JSON.parse(localStorage.getItem("comInfo"));
  document.getElementById("type").innerHTML=com1+"!";
    
    window.onload=(function(){
    $("#cube1").slideDown();
    $("#title").show(1200);
    
    $("#commentbutton").fadeIn(3000);
  });

  $("#menutop").mouseenter(function(){
    $("#menu1").animate({
        width: '250px',
    }, 500);
    $("#menu2").animate({
        width: '250px',
    }, 600);
    $("#menu3").animate({
        width: '250px',
    }, 700);
  })
  $("#menutop").mouseleave(function(){
    $("#menu1").animate({
        width: '0px',
    }, 700);
    $("#menu2").animate({
        width: '0px',
    }, 600);
    $("#menu3").animate({
        width: '0px',
    }, 500);
  });
  $("#choose").mouseenter(function(){
    $("#darkchoose").animate({
        width:'100%',
    },500);
  });

$("#ALL").mouseleave(function(){
    $("#darkchoose").animate({
        width:'0%',
    },300);
  });

var page=0;

$("#menu1").click(function(){
  $("#allcontent1").animate({
    right:'10%',
  },600);
  if(page>1){
    $("#allcontent2").animate({
      right:'-34%',
    },650);
    $("#allcontent3").animate({
      right:'-35%',
    },700);
  }
  page=1;
})

$("#menu2").click(function(){
  $("#allcontent1").animate({
    right:'10%',
  },600);
  $("#allcontent2").animate({
    right:'9%',
  },650);
  if(page===3){
    $("#allcontent3").animate({
      right:'-35%',
    },700);
  }
  page=2;
})

$("#menu3").click(function(){
  $("#allcontent1").animate({
    right:'10%',
  },600);
  $("#allcontent2").animate({
    right:'9%',
  },650);
  $("#allcontent3").animate({
    right:'8%',
  },700);
  page=3;
})

$("#menu").click(function(){
  $("#allcontent1").animate({
    right:'-33%',
  },600);
  $("#allcontent2").animate({
    right:'-34%',
  },650);
  $("#allcontent3").animate({
    right:'-35%',
  },700);
  page=0;
})

$("#darkchoose").click(function(){
  switch(page){
    case 0:
        $("#allcontent1").animate({
          right:'10%',
        },600);
        page=1;
      break;
    case 1:
      $("#allcontent1").animate({
        right:'10%',
      },600);
      $("#allcontent2").animate({
        right:'9%',
      },650);
      page=2;
      break;
    case 2:
      $("#allcontent1").animate({
        right:'10%',
      },600);
      $("#allcontent2").animate({
        right:'9%',
      },650);
      $("#allcontent3").animate({
        right:'8%',
      },700);
      page=3;
      break;
    case 3:
      $("#allcontent1").animate({
        right:'10%',
      },600);
        $("#allcontent2").animate({
          right:'9%',
        },650);
        $("#allcontent3").animate({
          right:'8%',
        },700);
        $("#allcontent4").animate({
          right:'7%',
        },750)
      page=4;
      break;
    case 4:
      $("#allcontent1").animate({
        right:'-33%',
      },600);
        $("#allcontent2").animate({
          right:'-34%',
        },650);
        $("#allcontent3").animate({
          right:'-35%',
        },700);
        $("#allcontent4").animate({
          right:'-36%',
        },750)
        page=0;
    }
})


$("#commentbutton").click(function(){
  $("#commentdec").animate({
    width:"95%",
  },200)

  $("#ENTER").fadeIn('slow');
  
document.getElementById("type").className = "typing";
})

$("#ENTER").mouseenter(function(){
  $("#fivewords").fadeIn("slow");
})

$("#ENTER").click(function(){
  var obj= document.getElementById("fivewords").innerHTML;
  localStorage.setItem("comInfo",JSON.stringify(obj));
  alert("评论已保存,刷新界面试试!")
})

})
