<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
  $name = $_POST['name'];
  $sub = $_POST["sub"];
  $message = $_POST['message'];
  $error = '';
  if(!$name) {$error .= 'Укажите свое имя. ';}
  if(!$sub) {$error .= 'Укажите телефон или e-mail. ';}
  if(!$message || strlen($message) < 1) {$error .= 'Укажите товар ';}
  if(!$error) {
    $address = "alex300785@tut.by";
    $mes = "Заказ товара:\n\nИмя: ".$name."\n\nКонтакт: " .$sub."\n\nТовар: ".$message."\n\n";
    $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nОт:$email");
    header('Content-type: text/html; charset=utf-8');  
    if($send) {echo " 
    
    <div>
    
     <img class='success' src='http://by3d.by/images/success.jpg'/>
    
      <h2>Благодарим!</h2>    
      <h2>Ваш заказ принят!</h2>    
      <h3>В ближайшее время Мы свяжемся с Вами!</h3>    
      
       <a href='javascript:history.go(-1);'><img class='arrow' src='http://by3d.by/images/arrow.png'/>Вернуться назад</a>
             
      </div>
        
    <style>
    
h2,h3 {
color: green;
text-align:center;
margin-top: 10px;
}  
  
a {
display: block;
text-align:center;
padding: 10px 10px;
paddig-bottom: 13px;
margin: 30px auto;
background-color: #1e6e9c;
color: #ffffff;
text-decoration: none;
width: 200px;
border-radius: 7px;
}

a:hover {
background-color: #1e9c24;
color: #ffffff;
text-decoration: none;
}

img.success{
margin-top: 70px;
}

img.arrow{
width: 28px;
height: 10px;
margin-right: 15px;
}

div{
text-align:center;
}

  </style> ";      
               
              
              }
  }
  else {echo '<div class="err">'.$error.'</div>';}
}






?>
