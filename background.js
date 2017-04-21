// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.runtime.onConnect.addListener(function () {
  alert("onConnect has fired");
})

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {

  // No tabs or host permissions needed!
  console.log('is this change hot-loaded?');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="blue"'
  });
  let audio = new Audio(`.\\assets\\_Piano.mp3`);
  audio.play();
});
