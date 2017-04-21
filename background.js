// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {

  // No tabs or host permissions needed!
  console.log('is this change hot-loaded?');

  chrome.tabs.executeScript({
    code: `
  word = document.getElementById("qa").innerText.trim().toLowerCase();
  if (word) {
    //alert(word);
  }
  new Audio(chrome.extension.getURL("assets/_Piano.mp3")).play();
  `
  }, (result) => {
    // I do not know how results are passed here.
  })

});
