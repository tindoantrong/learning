<?xml version="1.0" encoding="UTF-8" ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<!--
		CWB-205 Complete Web Scripting
		Final Project: Flashcard Game

		Author: Toni Owens
		Date: 11/30/14

		Filename: 			flashcards.htm
		Supporting Files: 	[tbd]
	-->

	<title>Flashcard Study Game</title>

	<link rel="stylesheet" type="text/css" href="style.css" />


</head>

<body>
	<div id="container">
		<div class="card-holder">
			<div class="flip-container" id="flip-container">
			</div>
			<div id="cardFooter">
				<input id="next_btn" type="image" src="next.png" alt="Next Card">
			</div>
		</div>
	</div><!-- #container -->

	<script type="text/javascript" src="jquery-3.3.1.min.js"></script>
	<script type="text/javascript">
		var frontSets = [];
		var backSets = [];

		<?php
			$this_file_name = basename(__FILE__, '.php'); 
			$content_csv = file_get_contents('data/'.$this_file_name.'/data.csv');
			$data_by_new_line = explode("\n",$content_csv);
			foreach ($data_by_new_line as $key => $value) {
				$data_by_tab = explode("	", $value);
				if(isset($data_by_tab[0]) && isset($data_by_tab[1]))
				{
					$front = trim($data_by_tab[0]);
					$back = trim($data_by_tab[1]);
		?>
					frontSets[<?= $key; ?>] = "<?= $front; ?>";
					backSets[<?= $key; ?>] = "<?= $back; ?>";
		<?php
				}
			}
		?>
	</script>
	<script type="text/javascript" src="flashcards.js"></script>
</body>
</html>