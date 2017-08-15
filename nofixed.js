var observer = new MutationObserver(mutations => {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
            if (elem.classList.contains('fixed')){
                elem.style = 'display: none';
            }else{
                elem.style = '';        
            }
        }
    });
});
var elem = document.getElementsByClassName('post-header')[0];
observer.observe(elem, {attributes: true});