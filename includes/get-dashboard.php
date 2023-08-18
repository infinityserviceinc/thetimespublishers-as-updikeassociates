<?php

$curl = curl_init();
curl_setopt_array($curl, array(
	CURLOPT_URL => "https://sms.thewebfounders.co.uk/api/get-dashboard2?token=help@123@",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => array(
		'Content-Type: application/json',

	),
	));

	$dashboardUrl = curl_exec($curl);
	$err = curl_error($curl);
	
	curl_close($curl);
    