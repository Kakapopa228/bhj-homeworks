const editor = document.getElementById('editor');

window.addEventListener('beforeunload', function() {
	localStorage.setItem('textEditor', editor.value);
});

window.addEventListener('load', function() {
    let text = localStorage.getItem('textEditor');
    editor.value = text;
});
