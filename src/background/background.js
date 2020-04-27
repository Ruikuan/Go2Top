chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.sendMessage(
        tab.id,
        {},
        function (response) {
          console.log("already roll to top.");
        }
      );
});