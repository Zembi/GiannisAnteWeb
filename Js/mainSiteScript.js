	function inViewport(element) {
	  
	  	// Get the elements position relative to the viewport
	  	var bb = element.getBoundingClientRect();
	  
	  	// Check if the element is outside the viewport
	  	// Then invert the returned value because you want to know the opposite
	  	return !(bb.top > innerHeight || bb.bottom < 0);
	  
	}

	var downPartAGC = document.getElementById('DownPartWithInfoAboutGiannis');
	var downPartFAC = document.getElementById('DownPartWithFreaksAchiev');

	// Listen for the scroll event
	document.addEventListener('scroll', event => {
 
		// Check the viewport status

		if(inViewport(downPartAGC)){
    	
    		downPartAGC.style.opacity = '1';
  		}
  		else {
    
    		downPartAGC.style.opacity = '0';
  		}

  		if(inViewport(downPartFAC)){
    	
    		downPartFAC.style.opacity = '1';
  		}
  		else {
    
    		downPartFAC.style.opacity = '0';
  		}
  
	});

	console.log($("#AboutGiannisButton"));

	//CODE FOR ALL THE SCROLLS ON THE SITE
	/*SCROLL OF ABOUT GIANNIS BUTTON*/
	$("#AboutGiannisButton").click(function() {
    	
    	$('html,body').animate({
        	
        	scrollTop: $("#DownPartWithInfoAboutGiannis").offset().top - 120
        }, 'fast');
	});

	/*SCROLL OF FREAK'S ACHIEVEMENTS BUTTON*/
	$("#FreaksAchievementsButton").click(function() {
    	
    	$('html,body').animate({
        	
        	scrollTop: $("#DownPartWithFreaksAchiev").offset().top - 120
        }, 'fast');
	});

	//BUTTONS FOR THE VIDEOS
	var video1FullWrapC = document.getElementById("FirstVideoFullWrapContainer")
	var video1Btn = document.getElementById("FirstVideoButton");
	var video1C = document.getElementById("FirstVideoContainer")
	var iframe1 = document.getElementById("Iframe1");
	var player1 = new Vimeo.Player(iframe1);
	var counter1 = 0;
	var video2FullWrapC = document.getElementById("SecondVideoFullWrapContainer")
	var video2Btn = document.getElementById("SecondVideoButton");
	var video2C = document.getElementById("SecondVideoContainer")
	var iframe2 = document.getElementById("Iframe2");
	var player2 = new Vimeo.Player(iframe2);
	var counter2 = 0;

	//FIRST PART OF CONTENT
	video1Btn.tabIndex = "-1";
	iframe1.tabIndex = "-1";

	video1Btn.onclick = function() {

		if(counter1 % 2 == 0) {

			var move1Px = "-" + video1C.offsetHeight - (-8);
			video1FullWrapC.style.transform = "translate(-50%, " + move1Px + "px)";

			video1Btn.style.top = "1px";

			document.body.onresize = function() {
				var move1Px = "-" + video1C.offsetHeight - (-8);
				video1FullWrapC.style.transform = "translate(-50%, " + move1Px + "px)";
			}

			video1Btn.onmouseover = function(){

				this.style.background = "rgb(15, 23, 12)";
				this.style.transform = "translate(-50%, 0)";
			};

			video1Btn.onmouseout = function(){

				this.style.background = "rgb(9, 32, 2)";
				this.style.transform = "translate(-50%, 0)";
			};

			player2.pause();
			counter1 = 1;
		}
		else {

			video1Btn.style.top = "0";

			document.body.onresize = function() {
				var move1Px = 0;
				video1FullWrapC.style.transform = "translate(-50%, " + move1Px + "px)";
			}

			video1FullWrapC.style.transform = "translate(-50%, 0)";

			video1Btn.onmouseover = function(){

				this.style.background = "rgb(15, 23, 12)";
				this.style.transform = "translate(-50%, -5px)";
			};

			video1Btn.onmouseout = function(){

				this.style.background = "rgb(9, 32, 2)";
				this.style.transform = "translate(-50%, 0)";
			};

			player1.pause();
			counter1 = 0;
		}

		this.style.transform = "translate(-50%, 0)";
	}

	//SECOND PART OF CONTENT
	video2Btn.tabIndex = "-1";
	iframe2.tabIndex = "-1";

	video2Btn.onclick = function() {

		if(counter2 % 2 == 0) {

			var move2Px = "-" + video2C.offsetHeight - (-8);
			video2FullWrapC.style.transform = "translate(-50%, " + move2Px + "px)";

			video2Btn.style.top = "1px";

			document.body.onresize = function() {
				var move2Px = "-" + video2C.offsetHeight - (-8);
				video2FullWrapC.style.transform = "translate(-50%, " + move2Px + "px)";
			}

			video2Btn.onmouseover = function(){

				this.style.background = "rgb(15, 23, 12)";
				this.style.transform = "translate(-50%, 0)";
			};

			video2Btn.onmouseout = function(){

				this.style.background = "rgb(9, 32, 2)";
				this.style.transform = "translate(-50%, 0)";
			};

			player1.pause()
			counter2 = 1;
		}
		else {

			video2Btn.style.top = "0";

			document.body.onresize = function() {
				var move2Px = 0;
				video2FullWrapC.style.transform = "translate(-50%, " + move2Px + "px)";
			}

			video2FullWrapC.style.transform = "translate(-50%, 0)";

			video2Btn.onmouseover = function(){

				this.style.background = "rgb(15, 23, 12)";
				this.style.transform = "translate(-50%, -5px)";
			};
			video2Btn.onmouseout = function(){

				this.style.background = "rgb(9, 32, 2)";
				this.style.transform = "translate(-50%, 0)";
			};

			player2.pause();
			counter2 = 0;
		}
		this.style.transform = "translate(-50%, 0)";
	}