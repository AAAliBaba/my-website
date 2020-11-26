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
})