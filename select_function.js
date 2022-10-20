//function to select a candidtae to vote for
function select(id) {
    if (id === 'edwardSelect') {
        document.getElementById('edwardSelect').style.opacity = '1';
        document.getElementById('ed').style.filter = 'grayscale(0%)';
        document.getElementById('el').style.filter = 'grayscale(100%)';
        document.getElementById('elonSelect').style.opacity = '.7';
    } else {
        document.getElementById('elonSelect').style.opacity = '1';
        document.getElementById('el').style.filter = 'grayscale(0%)';
        document.getElementById('ed').style.filter = 'grayscale(100%)';
        document.getElementById('edwardSelect').style.opacity = '.7';
    }
}
