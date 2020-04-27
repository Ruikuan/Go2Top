chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sendResponse({ fromcontent: "This message is from content.js" });
});
