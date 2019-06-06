window.onload = function() {
	
	/*导航分割线*/
	var nav_a = document.getElementsByName("nav_a");
	nav_a[nav_a.length-1].className = "no";

	/*banner*/
	var slide_container = document.getElementById("slide-container");
	var banner_width = document.getElementsByName("banner_width");
	slide_container.style.width = banner_width.length * 1200 + "px";
	/*slide-container宽度*/
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index = 0;
	var time;
	prev.onclick = function(){
		clearInterval(time);
		index = index + 1200;
		if(index > 0) {
			index = -banner_width.length * 1200 + 1200;
		}
		slide_container.style.left = index + "px";
		time = setInterval(function(){
			index = index + 1200;
			if(index > 0) {
				index = -banner_width.length * 1200 + 1200;
			} else if(index < -banner_width.length * 1200 +1200) {
				index = 0;
			}
			slide_container.style.left = index + "px";
		},6000)
	};
	next.onclick = function(){
		clearInterval(time);
		index = index - 1200;
		if(index < -banner_width.length * 1200 + 1200 ) {
			index = 0;
		}		
		slide_container.style.left = index + "px";
		time = setInterval(function(){
			index = index + 1200;
			if(index > 0) {
				index = -banner_width.length * 1200 + 1200;
			} else if(index < -banner_width.length * 1200 +1200) {
				index = 0;
			}
			slide_container.style.left = index + "px";
		},6000)
	};
	
	time = setInterval(function(){
		index = index + 1200;
		if(index > 0) {
			index = -banner_width.length * 1200 + 1200;
		} else if(index < -banner_width.length * 1200 +1200) {
			index = 0;
		}
		slide_container.style.left = index + "px";
	},6000)

	slide_container.onmouseover = function(){
		clearInterval(time);
	};
	slide_container.onmouseout = function(){
		time = setInterval(function(){
		index = index + 1200;
		if(index > 0) {
			index = -banner_width.length * 1200 + 1200;
			} else if(index < -banner_width.length * 1200 +1200) {
				index = 0;
			}
			slide_container.style.left = index + "px";
		},6000)
	}

	prev.onmouseover = function(){
		clearInterval(time);
	}
	/*banner轮播图*/

	var series_nav_ul_a = document.getElementsByName("series_nav_ul_a");
	var series_list = document.getElementsByClassName("series_list");
	for(var i=0; i<series_nav_ul_a.length; i++) {
		series_nav_ul_a[i].onclick = function(){
			this.className = "click";
			this.children[1].style.display = "block";
			var parent = series_nav_ul_a[0].parentNode.parentNode;
			for(var j=0; j<parent.children.length; j++) {
				if(this.className = "click") {
					parent.children[j].children[0].className = "";
				}
			}
			
		}
	}
	
	
	
	
	
		



















};



