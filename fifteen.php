<!-- Checks if name has been submitted in HTML file,
then sets the data to a variable to use within this page -->
<?php
if(isset($_POST['submit'])){
$first_name = $_POST['name'];
}
?>

<html>
	<head>
		<title>Random Person Puzzle</title>

		<link href="fifteen.gif"
		      type="image/gif" rel="shortcut icon" />
		<link href="fifteen.css" type="text/css" rel="stylesheet" />
		<script src="fifteen.js" type="text/javascript"></script>
	</head>

	<body>
		<h1>"This Person Does Not Exist" Puzzle</h1>

		<p>
			Welcome, <?php echo $first_name;?>! <br>
			Hover over the squares to see a random, non-existent person.<br>
			Click the shuffle button to mix up the squares and solve the puzzle.<br>
			Refresh to solve a new puzzle!<br>
		</p>
		
		<div id="puzzlearea">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
			<div>10</div>
			<div>11</div>
			<div>12</div>
			<div>13</div>
			<div>14</div>
			<div>15</div>
		</div>

		<p id="controls">
			<button id = "shufflebutton">Shuffle</button>
		</p>

		<div id="output"></div>

	</body>
</html>
