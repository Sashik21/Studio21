function updateTimeZones() {
	var now = new Date();
  
	var bostonTime = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' });
	document.getElementById('bostonTime').innerHTML = 'Boston: ' + bostonTime.replace(":", "<span class='blink'>:</span>");
  
	var kyivTime = now.toLocaleTimeString('en-US', { timeZone: 'Europe/Kiev', hour: '2-digit', minute: '2-digit' });
	document.getElementById('kyivTime').innerHTML = 'Kyiv: ' + kyivTime.replace(":", "<span class='blink'>:</span>");
  
	var londonTime = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' });
	document.getElementById('londonTime').innerHTML = 'London: ' + londonTime.replace(":", "<span class='blink'>:</span>");
  
	var tokyoTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' });
	document.getElementById('tokyoTime').innerHTML = 'Tokyo: ' + tokyoTime.replace(":", "<span class='blink'>:</span>");
  }
  
  // Update the time zones every second
  setInterval(updateTimeZones, 1000);