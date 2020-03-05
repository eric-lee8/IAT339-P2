var w = 480, h = 340;
                    
                    
  function openWindow(){
  if (document.getElementById) {
      w = screen.availWidth;
      h = screen.availHeight;
  }  
  
  var popW = 800, popH = 700;
  
  var leftPos = (w-popW)/2;
  var topPos = (h-popH)/2;
  
  
  
  msgWindow = window.open('','popup','width=' + popW + ',height=' + popH + 
                            ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');
  
  msgWindow.document.write 
      ('<HTML><HEAD><TITLE>Centered Window</TITLE></HEAD><BODY><FORM    NAME="form1">' +
      '<img src="images/Logo.PNG">'+
      ' <H1>Food: Gobi Manchurian</H1>'+
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      ' Click the button below to close the window.<br />' +
      '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
  }