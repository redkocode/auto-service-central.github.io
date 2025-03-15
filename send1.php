<?php 

// Get Data 
$carBrand = strip_tags($_POST['carBrand']); 
$carModel = strip_tags($_POST['carModel']); 
$carYear = strip_tags($_POST['carYear']); 
$carMileage = strip_tags($_POST['carMileage']);
$carGearbox = strip_tags($_POST['carGearbox']);
$carMotor = strip_tags($_POST['carMotor']);

$crushInjury = strip_tags($_POST['crushInjury']);
$painted = strip_tags($_POST['painted']);
$loanOrMortgage = strip_tags($_POST['loanOrMortgage']);

$phoneUser = strip_tags($_POST['phoneUser']);



// $url = strip_tags($_POST['url']); 
$subject = 'Заявка с сайта ' . $_SERVER['HTTP_HOST'];
// Вашу почту писать ниже
mail("mailto:ВашаПочта@yandex.ru", "Заказ звонка ", 
"Марка Авто: $carBrand\n\nМодель: $carModel \n\nПробег: $carMileage \n\nКоробка: $carGearbox \n\nТип Двигателя: $carMotor \n\nПосле ДТП?: $crushInjury \n\nАвто Красилось?: $painted  \n\nЗалог или Кредит?: $loanOrMortgage \n\nТелефон: $phoneUser", 
"From: Website Form Enquiry <$email>"); 

?> 

<script type="text/javascript">
setTimeout('location.replace("/thankyou.html")', 500);
/*Изменить текущий адрес страницы через 1 секунды (500 миллисекунд)*/
</script> 

