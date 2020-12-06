document.addEventListener("DOMContentLoaded", () => {

    for (const item of document.getElementsByClassName('nav-link')) {
        document.getElementById(item.id).addEventListener('click', () => {
            for (const item of document.getElementsByClassName('nav-link')) {
                document.getElementById(item.id).classList.remove('nav-link--clicked')
            }
            document.getElementById(item.id).className += ' nav-link--clicked'
        })
    }

    document.getElementById('welcome-link').click()

    /*
        when the user scrolls past the welcome/about section, portrait in navbar will appear.
    */
    window.addEventListener("scroll", () => {
        let welcome_end_point = document.getElementById('project-section').offsetTop
        let project_end_point = document.getElementById('contact-section').offsetTop

        if(window.scrollY + 1 >= welcome_end_point) {
            document.getElementById('nav-portrait').className += ' nav-portrait--visible'
        }
        else {
            document.getElementById('nav-portrait').classList.remove('nav-portrait--visible')
            // document.getElementById('nav-portrait').className += ' nav-portrait--invisible'
        }

        if(window.scrollY + 1 >= project_end_point) {
            document.getElementById('icons').className += ' icons--invisible'
        }
        else {
            document.getElementById('icons').classList.remove('icons--invisible')
        }
    })

    var extenderIsClicked = false;

    document.getElementById('bio-expander').addEventListener('click', () => {
        if(!extenderIsClicked) {
            document.getElementById('bio-expander').className += ' --reveal'
            document.getElementById('extended-bio').className += ' extended-bio--visible'
            // document.getElementById('welcome-container').className += ' --reveal'
        }
        else {
            document.getElementById('bio-expander').classList.remove('--reveal')
            document.getElementById('extended-bio').classList.remove('extended-bio--visible')
            // document.getElementById('welcome-container').classList.remove('--reveal')
        }
        extenderIsClicked = !extenderIsClicked
    })

    $(".project-label").on('click', function() {
        $(this).toggleClass("project-label-clicked")
    })
})