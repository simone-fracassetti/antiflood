# antiflood
Really efficient Antiflood for you API

<h3>Installation</h3>
<pre>$ npm i antiflood</pre>

<h3>Initialization</h3>
<pre>const Antiflood = require('antiflood');
const test = new Antiflood( (number)MAX_REQUESTS_COUNT, (number)FLOOD_RESET_TIME );</pre>

<h3># Declare a new request</h3>
(constants and variables names are based on the "<a href="#initialization">Initialization</a>" section)
<pre>test.feed(TOKEN)</pre>



<h3>Description of API</h3>
The constructor, accepts 2 numbers:
<ol>
  <li>MAX_REQUESTS_COUNT: <i>How many requests can a user make in FLOOD_RESET_TIME?</i></li>
  <li>FLOOD_RESET_TIME: <i>Time in seconds after user can make a new cycle of requests</i></li>
</ol>
<br><br>
<h4>How does tokens work?</h4>
The token is that identifying object that allows the flood to group users based on requests, so you can create various Antifloods based on the TOKEN object passed by parameter.
<b>Example:</b>
User A: makes 3 requests within 10 seconds, and is blocked
User B (with another token): at the same time as User A makes 2 requests in 10 seconds, he is not blocked because he has another token.

<pre>const email_verification = new Antiflood(2, 30); // 2 request every 30 seconds
email_verification.feed({user: 1}); // allowed
email_verification.feed({user: 2}); // allowed
email_verification.feed({user: 1}); // allowed
email_verification.feed({user: 1}); // denied
email_verification.feed({user: 2}); // allowed</pre>
