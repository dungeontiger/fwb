<?php

	// TODO: Change back to info@funwithbooks.org
	$to = "stephen.d.gibson@gmail.com";
	$subject = "Fun With Books Online Registration";
	$headers = "From: Fun With Books <info@funwithbooks.org>" . "\r\n";
	$headers .= "CC: " . $_POST["EMail"] . "\r\n";
	$headers .= "Reply-To: info@funwithbooks.org" . "\r\n" . "X-Mailer: PHP/" . phpversion();
	$headers .= "\r\nContent-Type: text/plain";

	$body = "Registration submitted on " . date("M d, Y") . "\n\n";
	
	$body .= $_POST["Parent_Name"] . "\n";
	$body .= $_POST["Address"];
	if ($_POST["Apt"] != "")
	{
		$body .= ", Apt# " . $_POST["Apt"] . "\n";
	}
	else
	{
		$body .= "\n";
	}
	$body .= $_POST["Town"] . ", " . $_POST["Province"] . "\n";
	$body .= $_POST["Postal_Code"] . "\n";
	$body .= $_POST["EMail"] . "\n";
	$body .= $_POST["Phone"] . "\n\n";
	
	for ($i = 1; $i < 5; $i++)
	{
		if ($_POST["Child_Name_#" . $i] != "")
		{
			$body .= $_POST["Child_Name_#" . $i] . "; " . $_POST["Gender_#" . $i] . "; " . $_POST["Birthday_#" . $i] . "\n";
		}
	}
	
	$body = wordwrap($body, 70);
	
	mail($to, $subject, $body, $headers);

	header('Location: index.html?thePage=email') ;

?>
