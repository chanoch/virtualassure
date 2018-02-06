function toggleNavigation(e) {
    e.preventDefault();
    var el = document.querySelector('#nav-toggle');
    console.log('Found el' + (el.className.length===0));
    var classNames = el.className;
    if(classNames.length===0) {
        el.className = 'show-nav';
    } else {
        el.className = '';
    }
}

function backToTop(e) {
    e.preventDefault();
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth',
    });
    return false;
}