<?php 

// Get Data 
$nameUser = strip_tags($_POST['nameUser']); 
$phoneUser = strip_tags($_POST['phoneUser']); 

// $url = strip_tags($_POST['url']); 
$subject = 'Заявка с сайта ' . $_SERVER['HTTP_HOST'];
// Вашу почту писать ниже
mail("mailto:ВашаПочта@yandex.ru", "Заказ звонка", 
"Имя: $nameUser\nТелефон: $phoneUser \n", 
"From: Website Form Enquiry <$email>"); 

?> 

<script type="text/javascript">
setTimeout('location.replace("/thankyou.html")', 500);
/*Изменить текущий адрес страницы через 1 секунды (500 миллисекунд)*/
</script> 

