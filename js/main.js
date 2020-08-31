document.addEventListener('DOMContentLoaded', () => {
    // Unix timestamp (in seconds) to count down to
    var finaleDate = new Date('2020-09-28T00:00:01.0000+02:00').getTime() / 1000;

    // Set up FlipDown
    new FlipDown(finaleDate, 'flipdown-container', {
        headings: ['Jours', 'Heures', 'Minutes', 'Secondes']
    }).start()

    var body = document.querySelector('body');
    var putPressure = document.querySelector('#pressure-button');
    var dialogWindow = document.querySelector('#dialog-window');

    putPressure.addEventListener('click', function(event) {
        dialogWindow.classList.add('active');
        event.stopPropagation();
    })
    body.addEventListener('click', function(event) {
        const targetClasses = event.target.classList;
        if (!targetClasses.contains('in-popin')) {
            dialogWindow.classList.remove('active');
        }
    })
});
