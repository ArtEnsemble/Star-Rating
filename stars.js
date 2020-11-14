const stars = document.querySelectorAll('.star');
const starArr = Array.from(stars);
let starRating;

function starClick() {
   starArr.forEach(function(el){
        el.addEventListener('click', function() {
            starSelector(this);
    })   
    
   })
    }

    starClick();

function starSelector(star) {
    
    //star.classList.add('highlight');
    
    for (i=0; i<starArr.length; i++) {
        //starArr[i].classList.remove('highlight');
        
         //console.log('removed!');
        if (starArr[i] === star) {
        console.log(`you clicked star number ${i + 1}`);
        
        
        
        
        for (j=0; j<=i; j++) {
            starArr[j].classList.add('highlight');
        }
        for (j=starArr.length -1; j>i; j--) {
            
            starArr[j].classList.remove('highlight');
        }
        return (i);
        
    }
    starRating = i+1;
    
}

}