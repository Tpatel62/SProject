
    var i=1;
    var v=1;
    function displayForm(){
        document.getElementById("form").style.display='block';
    }
    function onFileSelected(event) {
      var selectedFile = event.target.files[0];
      var reader = new FileReader();
    
      var imgtag = document.getElementById("img"+v);
      imgtag.title = selectedFile.name;
    
      reader.onload = function(event) {
        imgtag.src = event.target.result;
    
      };
    
      reader.readAsDataURL(selectedFile);
    v++;
    document.getElementById("recentPost").style.display='none';

    }
    function displayRecentPost(){
        var location=document.getElementById("location").value;
        var text=document.getElementById("text").value;
        document.getElementById("recentPost").style.display='block';
        document.getElementById("date"+i).innerHTML="Date: "+Date();
        document.getElementById("text"+i).innerHTML="Text: "+text;
        document.getElementById("location"+i).innerHTML="Location: "+location;
        document.getElementById("block"+i).style.display='inline-block';
        i++;
    }
    