function defaultTheme() {
    document.querySelector('body').className='theme1'
}

function oceanTheme() {
    document.querySelector('body').className='theme2'
}

function desertTheme() {
    document.querySelector('body').className='desert'
}

function highContrastTheme() {
    document.querySelector('body').className='highContrast'
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/