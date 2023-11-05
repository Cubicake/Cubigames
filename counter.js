<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Courier; color: #0e0e0e; -webkit-text-stroke: #0e0e0e}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">let counter = 0;</span></p>
<p class="p1"><span class="s1">const counterElement = document.getElementById("counter");</span></p>
<p class="p1"><span class="s1">function updateCounter() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>counter++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>counterElement.textContent = counter;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const xhr = new XMLHttpRequest();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>xhr.open("POST", "/write_visitor_count.php", true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>xhr.send(JSON.stringify({ count: counter }));</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">updateCounter();</span></p>
</body>
</html>
