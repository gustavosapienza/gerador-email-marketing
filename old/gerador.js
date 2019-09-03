function barrarletras(e){
    var tecla=(window.event)?event.keyCode:e.which;
	
	if ( tecla == 8 || tecla == 0 )
        return true;
    if ( tecla != 44 && tecla != 46 && tecla < 48 || tecla > 57 || tecla==13)
        return false;
		  

}



$(document).ready(function(){
$("tr").find("td").first().addClass("larguraminima");
$("tr").find("td").first().addClass("foco");
$('#btn4').attr("disabled",false);
$('#btn3').attr("disabled",false);
$('.col1').val("");
$('.col2').val("");
$('.col3').val("1");
$('.col4').val("");
$('.col5').val("");
$('.col6').val("");
$('.col7').val("");
$('.col5').focus();



$("td a").click(function() {
    return false;
 });
  


$("tr").eq(0).click(function(){
    $('.col3').val(1);
	$("td").removeClass("foco");
	$(this).find("td").addClass("foco");
    });

  $("#btn1").click(function(){

	var qtd = $("tr").first().find("td").length;  
    $("tr").last().after("<tr><td class='larguraminima'><div><p>Insira uma imagem</p></div></td></tr>");

	$("tr").click(function(){
    $('.col3').val(($(this).index())+1);
	$("td").removeClass("foco");
	$(this).find("td").addClass("foco");
	$('.col5').focus();
    });
 });
 

  $("#btn2").click(function(){
    if($("tr").length == 1)
	{alert("Ops, nao pode excluir a ultima fatia :(");}
	else
	{$("tr").last().remove();}
	$('.col5').focus();
  });
  
  
  
  $("#btn5").click(function(){
if($("tr td div").length >= 1 )
	{
alert("Insira alguma imagem")
$("tr td div").parent().addClass("foco")
return false
}

	$("tr").removeAttr("class");
	$("td").removeAttr("class");
	$("a").removeAttr("onclick");
	$("a").attr("target","_blank");
	$("#gerar").text("")
	$("tbody").removeAttr("class");
	
	$("tr td a[href=''] img").unwrap();

	var antes = ("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>Untitled Document</title></head><body bgcolor='#FFFFFF' leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'><center>");
	var depois = "</center></body></html>";
    $('#gerar').append($('.tabel').html());
    var w=window.open('','name','height=800,width=800');
	w.document.write(antes+($('#gerar').html()+depois));
	$('#resultado').html(antes+($('#gerar').html()+depois));
	$('#resultado, .fechar, .popup-fundo').fadeIn();
	w.document.close();

	$("td a").click(function() {
    return false;
  });
	
  });
  


  
  
  
  $("#btn6").click(function(){
	var col3 = ($('.col3').val())-1;
	var col5 = $('.col5').val();
	var col6 = $('.col6').val();
	var col7 = $('.col7').val();
	
	if ($('.col5').val() == "") 
	{alert ("Insira uma imagem!");
	$('.col5').focus();
	return false
	}
	
	if (col5.indexOf("http") == -1) 
	{alert ("A imagem deve estar em uma URL");
	$('.col5').focus();
	return false
	}
	
	
	$("tr").eq(col3).find("td").html("<a href='"+col7+"' onclick='return false'><img style='display:block; border:0;' alt='"+col6+"'  title='"+col6+"' src='"+col5+"' /></a>");
	$("tr").find("td").first().removeClass("larguraminima");
  	});
	
	

  
	
	$('.col5').keypress(function (e) {
  if (e == 13) {
    $(this).closest(".btn6").click();
  }
  





  
  
});


$("table").click(function(){
	var col3 = ($('.col3').val())-1;
    $('.col5').val($("tr").eq(col3).find("td").find("img").attr('src'));
	$('.col7').val($("tr").eq(col3).find("td").find("a").attr('href'));
	$('.col6').val($("tr").eq(col3).find("td").find("img").attr('alt'));
});  



});

