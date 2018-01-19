
<div class="fieldset anim-step" style="margin-left:100%;" id="results">
  <div class="box-quiz loading"> <img src="img/Blocks.gif" alt="" class="loading-img">
    <h2 class="title">Analyzing Your Results...</h2>
  </div>
</div>
<script type="text/javascript">

		setTimeout(function(){ 
			
			$.ajax({
			  type: "POST",
			  url: "./module/shapiro.php",
			  data: "end=true",
			  success: function(result){
				  var grade = "C";
				  switch(parseInt(result)){
					  case 100: grade = "A+";break;
					  case 99: grade = "A+";break;
					  case 98: grade = "A+";break;
					  case 97: grade = "A+";break;
					  case 96: grade = "A+";break;
					  case 95: grade = "A";break;
					  case 94: grade = "A";break;
					  case 93: grade = "A";break;
					  case 92: grade = "A";break;
					  case 91: grade = "A-";break;
					  case 90: grade = "A-";break;
					  case 89: grade = "B+";break;
					  case 88: grade = "B+";break;
					  case 87: grade = "B+";break;
					  case 86: grade = "B+";break;
					  case 85: grade = "B+";break;
					  case 84: grade = "B";break;
					  case 83: grade = "B";break;
					  case 82: grade = "B";break;
					  case 81: grade = "B-";break;
					  case 80: grade = "B-";break;
					  case 79: grade = "C+";break;
					  case 78: grade = "C+";break;
					  case 77: grade = "C+";break;
					  case 76: grade = "C+";break;
				  }
				  $(".ko-progress-circle__overlay strong").html(grade);
				  if(result < 90){
					 $('.content').slideUp("slow");
					 $("#page-2").slideToggle("slow");
					 $('.ko-progress-circle').attr('data-progress', result);
				  }else{
					 $('.content').slideUp("slow");
					 $("#page-1").slideToggle("slow");
					 $('.ko-progress-circle').attr('data-progress', result); 
				  }
			  }
			});
			
			
			 //window.location.href = "/shapiro-questions/shop.html"
		}, 1000);   
			
</script>