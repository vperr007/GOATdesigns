  email.onclick =(e) => e.preventDefault();
new Clipboard(email);

clipboard.on('success', function(e) {
    console.log(e);
    event.trigger.textContent = 'Copied';
});

clipboard.on('error', function(e) {
    
});