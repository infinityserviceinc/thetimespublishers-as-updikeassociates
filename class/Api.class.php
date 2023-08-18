<?php
class Api {
    public function hit($url,$data=null,$method = "GET"){

        if($method == "GET"){
            $url.= "?".http_build_query($data);
        }
        $payload=json_encode($data);
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                "Authorization: Bearer 2|avECEuUc6cZOAAPKZHvLWoXJhqt9MdiQaBLr8Xvq",
            ),
        ));
        
        $response = curl_exec($curl);
        
        curl_close($curl);
        // var_dump($response);die;
        // $decodeResponse = json_decode($response);
        return $response;
    }
}