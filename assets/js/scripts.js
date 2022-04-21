	  purecookieDesc="<strong style='font-size: 20px;'>Cookies:</strong> A Internacional Marítima Guaratuba coleta dados para melhorar o desempenho e segurança do site, além de personalizar sua experiência. Você pode configurar suas preferências em nosso site e conferir nossa.",
      purecookieLink='<a href="https://drive.google.com/file/d/1QeI_3OIs9u02U6VYBraN2qsGNfIrmx_f/view?usp=sharing" target="_blank">Política de Privacidade.</a>',
      purecookieButton="Aceitar e continuar";function pureFadeIn(e,o){var i=document.getElementById(e);i.style.opacity=0,i.style.display=o||"block",function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){var o=document.getElementById(e);o.style.opacity=1,function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()}function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a class="anchor_01" onClick="acao();">Configurar Cookies</a><a class="anchor_02" onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",7),pureFadeOut("cookieConsentContainer")}
      
      //window.onload=function(){cookieConsent()};
      window.onload=cookieConsent();
	  //
      function acao(){
            let modal = document.querySelector('.modal')
            modal.style.display = 'block';
            //
            document.getElementById("blockScroll").style.overflow = "hidden";
      }
      
      function fechar(){        
        let modal = document.querySelector('.modal')
        modal.style.display = 'none';
        //
        document.getElementById("blockScroll").style.overflow = "visible";
    }

      function fecharSalvo(){        
          let modal = document.querySelector('.modal')
          modal.style.display = 'none';
          //
          document.getElementById("blockScroll").style.overflow = "visible";
          //
          purecookieDismiss();
      }