var w = 480, h = 340;
                    
                    
  function openWindow1(){
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
      '<img src="images/dumplings1.PNG" width=30%><img src="images/dumplings2.PNG" width=30%><img src="images/dumplings3.PNG" width=30%>'+
      ' <H1>Food: Chicken Dumplings</H1>'+
      'Flour coating with Chicken and vegtable fillings cooked in our special house made spicy sauce.' +
      '<br>' +
      'Ingredients:'+
      '<br>' +
      '<ul><li>Chicken</li><li>Carrots</li><li>Spinich</li><li>Red chillies</li></ul>' +
      '<h3>Tell us how was your experience with this dish:</h3>' +
      '<textarea id="w3mission" rows="4" cols="80"></textarea>' + '<br>' +
      '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
  }

  function openWindow2(){
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
        '<img src="images/rolls1.PNG" width=30%><img src="images/rolls2.PNG" width=30%><img src="images/rolls3.PNG" width=30%>'+
        ' <H1>Food: Vegtable Spring Rolls</H1>'+
        'Deep Fried bread coating with mix vegtable fillings.' +
        '<br>' +
        'Ingredients:'+
        '<br>' +
        '<ul><li>Bamboo</li><li>Cabbage</li><li>Carrot</li><li>Mushroom</li></ul>' +
        '<h3>Tell us how was your experience with this dish:</h3>' +
        '<textarea id="w3mission" rows="4" cols="80"></textarea>' + '<br>' +
        '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
    }