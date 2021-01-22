    var logEvents = document.getElementsByClassName("game-log");
    var output = "";

    for(var i=0;i<logEvents.length;i++) {
        var event = logEvents[i];
        var timeStamp = event.getElementsByClassName("timestamp")[0].innerText;
        var eventType = event.children[0].firstChild.nextSibling.className;
        var eventMessage = event.children[1].firstChild.nextSibling.innerText;
        output = output + timeStamp + ";" + eventType + ";" + eventMessage + "\n";
    };
