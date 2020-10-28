function showWelcomeMessage(account) {
    console.log(account);

    seeProfile();

    $('#SignIn').unbind( 'click' );
    $('#SignIn').bind( 'click', signOut);
    $('#SignIn').addClass('btn btn-outline-danger');
    $('#SignIn').html('Sign Out');
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());
    $('.welcome-username').html(`Welcome, ${data.displayName}`);

    var chatIframe = $('<iframe />', {
        name: 'uipath-chatbot-iframe',
        id: 'uipath-chatbot-iframe',
        src: 'https://chatbot.uipath.com/web-channel?connectionId=d4d399c6-1912-4750-9896-1b9da7e6fc07'
    })
    .css('z-index', 9999)
    .css('position', 'fixed')
    .css('bottom', 0)
    .css('right', 0)
    .css('height', '112px')
    .css('width', '120px')
    .css('border', 0)
    .appendTo('body');

    $(window).bind('message', function (event) {
        console.log(event);
        if (event.originalEvent && event.originalEvent.data && event.originalEvent.data.hasOwnProperty("frameSize")) {
            const size = event.originalEvent.data.frameSize;
            document.getElementById("uipath-chatbot-iframe").style.height = size.height;
            document.getElementById("uipath-chatbot-iframe").style.width = size.width;
        }
    });

    console.log(data);
    console.log(endpoint);
}