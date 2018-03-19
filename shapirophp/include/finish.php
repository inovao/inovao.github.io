
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
			  success: function(answer){
				  var grade = "C";
				  answer = JSON.parse(answer);
				  console.log(answer);
				  $(".ko-progress-circle__overlay strong").html(answer.grade);
				  if(answer.result < 90){
					 $('.content').slideUp("slow");
					 $("#page-2").slideToggle("slow");
					 $('.ko-progress-circle').attr('data-progress', answer.result);
				  }else{
					 $('.content').slideUp("slow");
					 $("#page-1").slideToggle("slow");
					 $('.ko-progress-circle').attr('data-progress', answer.result); 
				  }
			  }
			});
		}, 1000);   
			
</script>