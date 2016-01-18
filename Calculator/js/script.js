 

 var operator = ['+','-','*','/','%'];  // Mang luu cac phep toan
   var number = ['0','1','2','3','4','5','6','7','8','9']; //Mang luu cac toan tu
   var specialKey = ['=','C']; // Ky tu dac biet
   var keys = document.querySelectorAll('span'); //Lay tat cac cac nut nhan
   var myHistory  ; //Luu lich su gan nhat
   var keyHistory = document.getElementById("history");
   keyHistory.onclick = function(e)
   {
   	document.getElementById("screen").innerHTML = myHistory  ; // Xu ly su kien in lai lich su
   }
   for(var i = 0; i < keys.length - 1 ; i++)
   {
   	keys[i].onclick =function(e)
   			{	
   				var value = this.innerHTML;
   				var outPutScreen = document.getElementById("screen").innerHTML;  // Lay ra xau hien len screen
   				document.getElementById("screen").style.color = '#101010'; // Xet mau
   				outPutScreen.trim(); //Loai bo khoang trang
   				if(outPutScreen == '') //Man hinh rong
   				{
   					if(operator.indexOf(value) == '-1' && value != 'C' && value != '=' && value != '.')
   					{
   						document.getElementById("screen").innerHTML = outPutScreen + value; //Xu ly chi cho nhap ky tu dau la so, neu man hinh dang rong
   					}
   				}
   				else
   				{
   					var lastCharScreen = outPutScreen.charAt(outPutScreen.length-1); //Lay ky tu cuoi tren man hinh
   					if(number.indexOf(lastCharScreen) >= 0 && specialKey.indexOf(value) == -1) //Neu ky tu gan cuoi la so
   					{
                     var lastIndexDot = getLastPosition(outPutScreen,'.'); 
                      if(outPutScreen.length == 1 && lastCharScreen == '0')
                     {
                        if(value != '0')
                        {
                           document.getElementById("screen").innerHTML = outPutScreen + value;
                        }
                     }
   						
   						else if(value == '.')  
   						{
   						 if(lastIndexDot <= getLastPosition(outPutScreen,'+')||lastIndexDot <= getLastPosition(outPutScreen,'-')
   						 	||lastIndexDot <= getLastPosition(outPutScreen,'*')||lastIndexDot <= getLastPosition(outPutScreen,'/')
   						 	||lastIndexDot <= getLastPosition(outPutScreen,'%'))
   						 	{
   						 		document.getElementById("screen").innerHTML = outPutScreen + '.'; 
   						 	}
   						}
   						else
   						{
   							document.getElementById("screen").innerHTML = outPutScreen + value;
   						}
   					}
   					else if(operator.indexOf(lastCharScreen)>=0 && specialKey.indexOf(value) == -1)
   					{
   						if(lastCharScreen == '+' || lastCharScreen == '-' || lastCharScreen == '*')
   						{
   							if(number.indexOf(value) >= 0)
   							{
   							document.getElementById("screen").innerHTML = outPutScreen + value;
   							}
   						}
   						else 
   						{
   							if(number.indexOf(value) > 0)
   							{
   								document.getElementById("screen").innerHTML = outPutScreen + value;
   							}
   						}

   					}
   			
   					else if(lastCharScreen == '.' && specialKey.indexOf(value) == -1)
   					{
   						if(number.indexOf(value) >= 0)
   						{
   							document.getElementById("screen").innerHTML = outPutScreen + value;
   						}
   					}

   				}
   				if(value == 'C')
   				{
   					document.getElementById("screen").innerHTML = ""; // reset man hinh
   					outPutScreen = "";
   				}
   				if(value == '=')
   				{
   					if(outPutScreen.length > 25)
   					{
   						alert('Maximumn Input : ' + outPutScreen + " so, can't not evaluate");
   					}
   					else if(outPutScreen.length > 0 && operator.indexOf(outPutScreen.charAt(outPutScreen.length-1)) >= 0) // Tinh toan gia tri
   					{
   						alert("Input does not valid");
   					}
   					else
   					{
   						document.getElementById("screen").innerHTML = eval(outPutScreen);
   						document.getElementById("screen").style.color = "red";
   						changeValue(outPutScreen);
   					}
   				}

   			}
   	}
   	function changeValue(temp) // Ham set lay lich su
   	{
   	myHistory = temp;	
   	}

   	function getLastPosition(str,character) //Ham lay chi so vi tri cuoi cung cua ky tu truyen vao trong mot xau
   		{
   			var result ;
   			var strReverse = str.split('').reverse().join('');
   			for(var i = 0 ; i < strReverse.length ; i++)
   			{
   				if(strReverse[i] == character){
   					result = strReverse.length - i;
   					break;
   				}
   			}
   			return (result > 0) ? result : -1;
   		}
