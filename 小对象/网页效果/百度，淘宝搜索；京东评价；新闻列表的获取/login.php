<?php
$username = $GET_[username];
$password = $GET_[password];

if($username == 'admin'&&$password == '123456'){
	echo '{"code":1}'
}else{
	echo '{"code":0}'
}
?>