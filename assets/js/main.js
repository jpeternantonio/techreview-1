document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;

	if(wrapper.className.indexOf('skewed') != -1){
	skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		topLayer.style.width= e.clientX + skew + delta + 'px';

	});
});

window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

	function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle2');
	let skew = 0;
	let delta = 0;

	if(wrapper.className.indexOf('skewed') != -1){
	skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		topLayer.style.width= e.clientX + skew + delta + 'px';

	});
});


$(document).on('mouseover', '.container1 .column', function(){
  		$(this).addClass('active').siblings().removeClass('active')
 })