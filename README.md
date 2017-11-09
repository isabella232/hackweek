# Ads SDK Creative Testing
<img src="https://github.com/jindoujiao/hackweek/blob/master/demo/creative_flow.png" />
<h2>Problem:</h2> <p>Ads SDK creative testing is tedious.  Current solution is to manually test each creative using:</p>
<ul>
<li>https://github.com/Applifier/unity-ads-android for android </li>
<li>https://github.com/Applifier/unity-ads-ios for ios</li>
<li>http://fake-ads-backend.applifier.info/</li>
<li>https://www.charlesproxy.com/</li>
</ul>
<p>The process takes time for setup and testing for just one configuration. To speed up testing of creatives, 
there needs to be a better automated solution.</p>
<hr/>
<h2>Solution</h2>
<p>Automation can flow can be broken down into 3 sections for any creative:</p>
<ul><li>URL verification</li><li>Creative Playing/Render</li><li>Events emitted from device</li></ul>
<hr/>
<h2>How to use</h2>
<h4>Pre Requirements</h4>
<pre>npm install</pre>
<h4>To run scripts</h4>
<pre>node main.js</pre>
<hr/>
<h2>Future planned work</h2>
<p>Goal of this work is to incorporate this work into our flow for testing. 
There will be more work to improve the other steps.</p><p>Possible considerations include:</p>
<ul>
<li>IOS specific link limitations (e.g. https vs http)</li>
<li>more handling for different response codes</li>
<li>pretty reporting</li>
</ul>
  
  
