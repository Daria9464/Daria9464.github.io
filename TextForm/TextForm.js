        const txtOutput = document.getElementById("txtOutput");
        //function for displaying name
         function textcontent(){
                var txtName = document.getElementById("txtName");      
                var name = txtName.value;
                txtOutput.value = name;
                
        }

        //function for changing background color
        function bgclr() {
               var bgcolor=document.getElementById('bgcolorpicker');
               txtOutput.style.backgroundColor = bgcolor.value;
        }
  

         //Function for changing text color
             function fontcolor(){
              var textcolor=document.getElementById('textcolorpicker');
                    txtOutput.style.color = textcolor.value;
                };
 
          //function for displaying font size number
         const size = document.querySelector("#size"); 
         const sizedisplay = document.querySelector(".size-output");
         sizedisplay.textContent = size.value;
         size.addEventListener("input", () => {
                sizedisplay.textContent = size.value;
         });
         //function for changing font size
         function fontsize(){
                var slider = document.getElementById("size");
                txtOutput.style.fontSize = slider.value+ "px";
        }
        
        //function for changing font type
        function fontType(element){
                txtOutput.style.fontFamily = element.value;
        }
        
        //function for resetting the page to their default values
       function resetOutput() { 
           txtOutput.value="";
           txtOutput.style.backgroundColor ="White";
           txtOutput.style.fontSize="12px";
           txtOutput.style.color="Black";
        
           //input  value go back to empty
           var txtName = document.getElementById("txtName"); 
           txtName.value="";
        
           //Background colorpicker go back to black
           var bgcolor=document.getElementById('bgcolorpicker');
           bgcolor.value="Black";
        
           //Font colorpicker go back to black
           var textcolor=document.getElementById('textcolorpicker');
            textcolor.value="Black";
        
           //the slider go back to default value 12
           var slider_default = "12";
           size.value=slider_default;
           sizedisplay.textContent =size.value;
       }
