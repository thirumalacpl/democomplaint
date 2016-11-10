$(document).on('pageshow', '#pagethree1', function(){ 

 //alert('ASD');


$(document).ready(function(){


 //alert( "dfg");


 //$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
 // options.async = true;
//});

//var formData = $("#callAjaxForm").serialize();

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-complaint/user_complaint_city.php",
   context: document.body,
   async: 'true',
  crossDomain: true,
  dataType: 'json',
        success: function(data){
           //alert(data);

          sessionStorage.setItem("users",JSON.stringify(data));
user =  JSON.parse(sessionStorage.getItem("users"));


$('.cty').empty();

for(a=0;a<user.length;a++){
  var userli = user[a];
  //var _options ="";
  var list = '<option value="'+ userli.city_id+'">'+ userli.city_name +'</option>';
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href=""><i class="zmdi zmdi-whatsapp" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="intent://send/'+twokm_sear_add.contact_no+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><i class="zmdi zmdi-whatsapp " style="color: white;padding-right: 25px; font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'

$('#cty').append(list);
}




        }
});/*city ajax*/




  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-complaint/nature_complaint.php",
   context: document.body,
   async: 'true',
  crossDomain: true,
  dataType: 'json',
        success: function(data){
           //alert(data);

          sessionStorage.setItem("natures",JSON.stringify(data));
nature =  JSON.parse(sessionStorage.getItem("natures"));


$('#ntre').empty();

for(a=0;a<nature.length;a++){
  var natureli = nature[a];
  //var _options ="";
  var listntre = '<option value="'+ natureli.complaint_id+'">'+ natureli.nature_of_complaint +'</option>';
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href=""><i class="zmdi zmdi-whatsapp" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="intent://send/'+twokm_sear_add.contact_no+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><i class="zmdi zmdi-whatsapp " style="color: white;padding-right: 25px; font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'

$('#ntre').append(listntre);
}




        }
});/*nature ajax*/
    


$(document).off('click', '#subinsert').on('click', '#subinsert', function() {



var uname = $("#uname").val();
//var fname = $("#fname").val();
var phone = $("#phone").val();
var mail = $("#mail").val();
var suburb = $("#suburb").val();
var cities = $(".cities option:selected").val();
var ntre = $(".nature option:selected").val();
var lodge = $("input[name='lodg']:checked").val();
//alert(cities);
var description = $("#description").val();



if(uname != "" && phone != "" && mail != "" && suburb != "" && cities != "" && ntre != "" ){

// alert("rg");

  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-complaint/insert_complaint.php?uname="+uname+"&phone="+phone+"&mail="+mail+"&suburb="+suburb+"&cities="+cities+"&ntre="+ntre+"&lodge="+lodge+"&description="+description,
  data: formData,
  success: onSuccessfg,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorqwe

});
    function onSuccessfg(data){
//alert(data);

//sessionStorage.setItem("patient_detaias_array",JSON.stringify(result[0]));
sessionStorage.setItem("complaint",JSON.stringify(data));
complaint =  JSON.parse(sessionStorage.getItem("complaint"));

$.mobile.changePage($('#pagefour'), { transition: "none", changeHash: true, reverse: false });


  }
     function onErrorqwe(data){
alert('errrrr');
     }






}
else{
  alert("Fill the empty fields" );
  //return false;
  //$.mobile.changePage($('#pagethree1'), { transition: "none", changeHash: true, reverse: false });
  $.mobile.changePage("#pagethree1");
}








});/*overall submit*/

    

});/*document ready*/



});/*start*/


