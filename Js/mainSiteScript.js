	
	function inViewport(element) {
		// Get the elements position relative to the viewport
		var bb = element.getBoundingClientRect();
	  
		// Check if the element is outside the viewport
		// Then invert the returned value because you want to know the opposite
		return !(bb.top > innerHeight || bb.bottom < 0);
	}

	//MENU BUTTON ACTIONS
	InitializeMenuButton();

	function InitializeMenuButton() {
		var btn = document.getElementById("ButtonToShowNoButtons");
		btn.value = "0";

		if(document.body.offsetWidth > 500) {
			btn.name = "-";
		}
		else {
			btn.name = "closed";
		}

		btn.onmousedown = function(e) {
			e.stopImmediatePropagation();
			MenuButtonEvent(this);
			e.preventDefault();
		};
	}

	document.body.onresize = function() {
		MenuButtonCheckResize();
	}

	function MenuButtonEvent(btn) {
		var buttonsC = document.getElementById("ButtonsContainer");
		var btn = document.getElementById("ButtonToShowNoButtons");
		
		btn = ActionsForMenuButton(btn, buttonsC);
	}

	function MenuButtonCheckResize() {
		var buttonsC = document.getElementById("ButtonsContainer");
		var btn = document.getElementById("ButtonToShowNoButtons");

		if(document.body.offsetWidth > 500) {
			buttonsC.style.display = "block";
			btn.name = "closed";
			btn.value = "0";
		}
		else {
			if(btn.name == "closed") {
				buttonsC.style.display = "none";
			}
			else if(btn.name == "opened") {
				buttonsC.style.display = "block";
			}
		}
	}

	function ActionsForMenuButton(btn, buttonsC) {
		if(btn.value == "0") {
			btn.value = "1";
			buttonsC.style.display = "block";
			btn.name = "opened";
		}
		else {
			btn.value = "0";
			buttonsC.style.display = "none";
			btn.name = "closed";
		}

		return btn;
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
	var vPlayers = [player1, player2];

	//FIRST PART OF CONTENT
	video1Btn.tabIndex = "-1";
	iframe1.tabIndex = "-1";

	video1Btn.onmousedown = function(e) {
		e.stopImmediatePropagation();
		counter1 = NewTab("1", video1FullWrapC, video1C, video1Btn, player1, vPlayers, counter1);
		e.preventDefault();
	}

	//SECOND PART OF CONTENT
	video2Btn.tabIndex = "-1";
	iframe2.tabIndex = "-1";

	video2Btn.onmousedown = function(e) {
		e.stopImmediatePropagation();
		counter2 = NewTab("2", video2FullWrapC, video2C, video2Btn, player2, vPlayers, counter2);
		e.preventDefault();
	}

	function NewTab(tabId, videoFullWrapC, videoC, videoBtn, player, vAllPlayers, counter) {
		if(counter % 2 == 0) {
			var movePx = "-" + videoC.offsetHeight - (-8);
			videoFullWrapC.style.transform = "translate(-50%, " + movePx + "px)";

			videoBtn.style.top = "1px";

			document.body.onresize = function() {
				MenuButtonCheckResize();
				var movePx = "-" + videoC.offsetHeight - (-8);

				if(document.body.offsetWidth <= 640) {
					movePx = 0;
				}

				videoFullWrapC.style.transform = "translate(-50%, " + movePx + "px)";
			}

			videoBtn.onmouseover = function(){
				videoBtn.style.background = "rgb(15, 23, 12)";
				videoBtn.style.transform = "translate(-50%, 0)";
			};

			videoBtn.onmouseout = function(){
				videoBtn.style.background = "rgb(9, 32, 2)";
				videoBtn.style.transform = "translate(-50%, 0)";
			};

			vAllPlayers.forEach(item => {
				if(item != player) {
					item.pause();
				}
			});

			counter = 1;
		}
		else {
			videoBtn.style.top = "0";

			document.body.onresize = function() {
				MenuButtonCheckResize();
				var movePx = 0;
				videoFullWrapC.style.transform = "translate(-50%, " + movePx + "px)";
			}

			videoFullWrapC.style.transform = "translate(-50%, 0)";

			videoBtn.onmouseover = function(){
				videoBtn.style.background = "rgb(15, 23, 12)";
				videoBtn.style.transform = "translate(-50%, -5px)";
			};

			videoBtn.onmouseout = function(){
				videoBtn.style.background = "rgb(9, 32, 2)";
				videoBtn.style.transform = "translate(-50%, 0)";
			};

			player.pause();
			counter = 0;
		}

		videoBtn.style.transform = "translate(-50%, 0)";

		return counter;
	}

	//FOOTER BUTTONS FOR INFO ABOUT GIT AND LINKEDIN
	function FooterInfoActions() {
		var gitHubBtn = document.getElementById("GitHubButton");
		var linkedInBtn = document.getElementById("LinkedInButton");

		gitHubBtn.onmousedown = function(e) {
			e.stopImmediatePropagation();
			window.open().location.href = "https://github.com/Zembi";
			e.preventDefault();
		}

		linkedInBtn.onmousedown = function(e) {
			e.stopImmediatePropagation();
			window.open().location.href = "https://gr.linkedin.com/in/vasileios-filippos-zembilas-a08908189?trk=public_profile_browsemap";
			e.preventDefault();
		}
	}

	FooterInfoActions();

	//FORCE PAGE TO SCROLL UP WHEN REFRESH
	/*if (history.scrollRestoration) {
		history.scrollRestoration = 'manual';
	} else {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		}
	}*/