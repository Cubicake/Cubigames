<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Courier; color: #0c0c0c; -webkit-text-stroke: #0c0c0c}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">&lt;?php</span></p>
<p class="p1"><span class="s1">$count = json_decode(file_get_contents("php://input"), true)["count"];</span></p>
<p class="p1"><span class="s1">$file = fopen("visitor_count.txt", "w");</span></p>
<p class="p1"><span class="s1">fwrite($file, $count);</span></p>
<p class="p1"><span class="s1">fclose($file);</span></p>
<p class="p1"><span class="s1">?&gt;</span></p>
</body>
</html>
