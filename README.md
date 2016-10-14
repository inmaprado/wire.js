# Wire.js
#### Description

A small library for checking listen events.

### Examples
 http://46.101.187.32/wirejs/

### Installation
```sh
$ git clone https://github.com/inmaprado/wire.js.git
```

### Usage
```sh
    <!DOCTYPE html>
	<html>
		<head>
			<title> Wire.js </title>
			<script type="text/javascript" src="wire.js"></script>
		</head>
		<body>
			<button id="button1">Fire1</button>
			<button id="button2">Fire2</button>
			<button id="button3">Fire3</button>
		</body>

		<script type="text/javascript">
			var button1 = document.getElementById('button1');
			var button2 = document.getElementById('button2');
			var button3 = document.getElementById('button3');

			button1.addEventListener('click', function (e) { 
				document.dispatchEvent(new Event('event1'));
			}, false);

			button2.addEventListener('click', function (e) { 
				document.dispatchEvent(new Event('event2'));
			}, false);

			button3.addEventListener('click', function (e) { 
				document.dispatchEvent(new Event('event3'));
			}, false);

			function helloWorld() {
				alert('Hello World!')
			}
		
			var wire = new Wire(["event1", "event2", "event3"], helloWorld);
		</script>
	</html>
```

### Version
0.3

### License
GNU GENERAL PUBLIC LICENSE v3

Copyright (C) 2016 Inma Prado & José Moreno.
