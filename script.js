//your JS code here. If required.
 const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

let currentActive = 1;
nextButton.addEventListener("click" , () => {
	if (currentActive < circles.length) {
        circles[currentActive].classList.add('active');
        currentActive++;
        prevButton.disabled = false;
      }
	if(currentActive === circles.length){
		nextButton.disabled = true;
	}
})

prevButton.addEventListener("click", ()=>{
	if(currentActive > 1){
		currentActive--;
		circles[currentActive].classList.remove('active');
		nextButton.disabled = false;
	}
	if(currentActive === 1){
		prevButton.disabled = true;
	}
})