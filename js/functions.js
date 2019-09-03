$(document).ready(function(){
  $(document).on("click",".mais",function(){
    template = '<div class="bloco">';
    template += '<div class="conteudo-bloco">';
    template += '<div class="excluir" title="Excluir"></div>';
    template += '<div class="editor">';
    template += '<label><span>Url da imagem*</span><div class="interrogacao" title="O Link online de onde sua imagem está hospedada, exemplo http://www.gustavosapienza.com.br/imagem-teste.png"></div></label>';
    template += '<input type="text" class="url"><br>';
    template += '<label><span>Link ao clicar na imagem</span><div class="interrogacao" title="O Link da página de onde você quer que o usuário seja direcionado ao clicar, exemplo: http://www.gustavosapienza.com.br/"></div></label>';
    template += '<input type="text" class="link"><br>';
    template += '<label><span>Texto Alternativo</span><div class="interrogacao" title="O texto que será mostrado se a imagem não for carregada"></div></label>';
    template += '<input type="text" class="alt"><br>';
    template += '<button class="adicionar">Adicionar</button>';
    template += '</div>';
    template += '</div>';
    template += '</div>';
    $(".bloco").last().after(template)
  })


  $(document).on("click",".excluir",function(){
    if($(".bloco").length == "1"){
      alert("Você não pode excluir o último")
    }else{
      $(this).parents(".bloco").remove();
    }
    
  })

  $(document).on("click",".editar",function(){
       $(this).parents(".bloco").addClass("editando");
        alt_editando = $(this).parents(".bloco").find(".principal").attr("alt");
        url_editando = $(this).parents(".bloco").find(".link-imagem").attr("href");
        imagem_editando = $(this).parents(".bloco").find(".principal").attr("src");


    editor = '<div class="editor">';
    editor += '<label>Url da imagem*<div class="interrogacao" title="O Link online de onde sua imagem está hospedada, exemplo http://www.gustavosapienza.com.br/imagem-teste.png"></div></label>';
    editor += '<input type="text" class="url" value="'+url_editando+'"><br>';
    editor += '<label>Link ao clicar na imagem<div class="interrogacao" title="O Link da página de onde você quer que o usuário seja direcionado ao clicar, exemplo: http://www.gustavosapienza.com.br/"></label>';
    editor += '<input type="text" class="link" value="'+imagem_editando+'"><br>';
    editor += '<label>Texto Alternativo<div class="interrogacao" title="O texto que será mostrado se a imagem não for carregada"></div></label>';
    editor += '<input type="text" class="alt" value="'+alt_editando+'"><br>';
    editor += '<button class="adicionar botao">Atualizar</button>';
    editor += '</div>';

    $(this).parents(".conteudo-bloco").find(".excluir").after(editor);
  })

  $(document).on("click",".bloco a",function(){
    return false;
  })


  $(document).on("click",".adicionar",function(){
    $(this).text("Editar")
    url = $(this).parents(".editor").find(".url").val();
    link = $(this).parents(".editor").find(".link").val();
    if(!url){
      alert("Insira uma URL")
      return false;
    }

    if(url.indexOf("http") === -1){
      confirmacao = confirm("Nos parece que a URL da imagem não é válida, deseja continuar mesmo assim?")
      if (!confirmacao == true) {
        alert("Então coloque uma URL válida (Com http://...)")
        return false;
      }
    }

    alt = $(this).parents(".editor").find(".alt").val();
    
    imagem = '<div class="editar" title="Editar"></div>';
    imagem += '<div class="excluir" title="Excluir"></div>';
    if(link != undefined){
      imagem += '<a class="link-imagem" href="'+link+'" title="'+link+'">';
    }
        imagem += '<img class="principal" src="'+url+'" alt="'+alt+'">';
    if(link != undefined){
      imagem += '</a>';
    }
    $(".visualizar").show();
    $(".finalizar").show();
    $(this).parents(".bloco").removeClass("editando");
    $(this).parents(".conteudo-bloco").html(imagem);
  }) 

$(document).on("click",".visualizar",function(){
		visualizar = '<table border="0" cellpadding="0" cellspacing="0">\n';

		for (blocos = 0; blocos < $(".bloco").length; blocos++) { 
			  alt_visualizacao = $(".bloco").eq(blocos).find(".principal").attr("alt");
		    url_visualizacao = $(".bloco").eq(blocos).find(".link-imagem").attr("href");
		    imagem_visualizacao = $(".bloco").eq(blocos).find(".principal").attr("src");
			visualizar += '<tr>\n';
			visualizar += '<td>\n';
      if(url_visualizacao != undefined){
			   visualizar += '<a target="_blank" href="'+url_visualizacao+'">\n';
      }
			visualizar += '<img style="display:block; border:0;" alt="'+alt_visualizacao+'" title="'+alt_visualizacao+'" src="'+imagem_visualizacao+'">\n';
      if(url_visualizacao != undefined){
         visualizar += '</a>\n';
      }
			visualizar += '</td>\n';
			visualizar += '</tr>\n';
		}

		visualizar += '</table>\n';

		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$(".popup-visualizacao").html(visualizar);
		$(".popup").show();
		$(".fechar-grande").show();
		$(".fundo-popup").show();
		$(".popup-finalizar").text(finalizar);
 });



$(document).on("click",".finalizar",function(){
		finalizar = '<!DOCTYPE html>\n';
		finalizar += '<html lang="en">\n';
		finalizar += '<head>\n';
		finalizar += '<meta charset="UTF-8" />\n';
		finalizar += '<title>E-mail Marketing</title>\n';
		finalizar += '</head>\n';
		finalizar += '<body>\n';
    finalizar += '<center>\n';
		finalizar += '<table border="0" cellpadding="0" cellspacing="0">\n';

		for (blocos = 0; blocos < $(".bloco").length; blocos++) { 
			  alt_finalizar = $(".bloco").eq(blocos).find(".principal").attr("alt");
		    url_finalizar = $(".bloco").eq(blocos).find(".link-imagem").attr("href");
		    imagem_finalizar = $(".bloco").eq(blocos).find(".principal").attr("src");
			finalizar += '<tr>\n';
			finalizar += '<td>\n';
      if(url_finalizar != ""){
			  finalizar += '<a target="_blank" href="'+url_finalizar+'">\n';
      }
			finalizar += '<img style="display:block; border:0;" alt="'+alt_finalizar+'" title="'+alt_finalizar+'" src="'+imagem_finalizar+'">\n';
      if(url_finalizar != ""){
         finalizar += '</a>\n';
      }
			finalizar += '</td>\n';
			finalizar += '</tr>\n';
		}

		finalizar += '</table>\n';
    finalizar += '</center>\n';
		finalizar += '</body>\n';
		finalizar += '</html>\n';

		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$(".popup2").show();
		$(".fechar-grande").show();
		$(".fundo-popup").show();
		$(".popup-finalizar").text(finalizar);
    
 });


$(document).on("click",".fundo-popup, .fechar-grande",function(){
    $(this).hide();
    $(".popup").hide();
    $(".popup2").hide();
    $(".fundo-popup").hide();
})



});






  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-30104309-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();