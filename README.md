<h1>AJAX Demo</h1>
<div>
	This app is intended to illustrate the basic components needed for making an AJAX call in a NodeJS/Express app.
</div>
<div>
	<ol>
		<li>Run `$ npm install` to install dependency (Express)</li>
		<li>Start your app with `$ npm start` (or `$ nodemon`, if you have installed nodemon)</li>
		<li>Navigate to http://localhost:3000</li>
	</ol>
</div>
<div>
	When you navigate to localhost:3000, you'll see the message "You got me!" displayed on the page - but if you look at `public/index.html`, you'll see that that message is not written into the HTML - it came from the server!  Here's how it works...</br>
	<ol>
		<li>
			You navigate to http://localhost:3000. When the page loads, the script in the tags at the bottom is triggered by the `$(document).ready(function()...` call.
		</li>
		<li>
			Inside the `ready` function, the first line begins `$.get('/target'...`
		</li>
		<li>
			This means "send a 'get' request to the server (index.js), pointing at the `/target` route".
		</li>
		<li>Here's what the relevant piece of index.js looks like:
			<pre>
				app.get("/target", function(req, res){
					res.json({message: "You got me!"});
				});
			</pre>
			This basically says "when a 'get' request comes in for the route `/target`, fire off the callback function".
		</li>
		<li>
			The callback function responds to the client with JSON data - in this case, a message with the text "You got me!". Now, look back to the client side (index.html)...
		</li>
		<li>
			Here's the entire script:
			<pre>
			$.get('/target', function(response){
				$("#container").text(response.message);
			});
			</pre>
			When the server responds to our initial 'get' request, the callback function runs with the response as an argument. If you stuck `console.log(response)` in the middle, you'd see this:
			<pre>
				{message: "You got me!"}
			</pre>
			So the last thing we do is put the content of the message on the page. The line executed by our callback function says "Find the element with the id 'container' and set its text to be the value of `response.message`.
		</li>
	</ol>
</div>