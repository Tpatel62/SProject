
    // var i=1;
    // var v=1;
    // function displayForm(){
    //     document.getElementById("form").style.display='block';
    // }
    // function onFileSelected(event) {
    //   var selectedFile = event.target.files[0];
    //   var reader = new FileReader();
    
    //   var imgtag = document.getElementById("img"+v);
    //   imgtag.title = selectedFile.name;
    
    //   reader.onload = function(event) {
    //     imgtag.src = event.target.result;
    
    //   };
    
    //   reader.readAsDataURL(selectedFile);
    // v++;
    // document.getElementById("recentPost").style.display='none';

    // }
    // function displayRecentPost(){
    //     var location=document.getElementById("location").value;
    //     var text=document.getElementById("text").value;
    //     document.getElementById("recentPost").style.display='block';
    //     document.getElementById("date"+i).innerHTML="Date: "+Date();
    //     document.getElementById("text"+i).innerHTML="Text: "+text;
    //     document.getElementById("location"+i).innerHTML="Location: "+location;
    //     document.getElementById("block"+i).style.display='inline-block';
    //     i++;
    // }
    
    var img = $("<img/>");
    var imgPicked;

    $("#myBtn").click(function(){
      $(".imgSelect").after("");
      img.hide();
      $(".imgSelect").val("");
      $("#cap").val("");
      $("#sampleModal").modal("show");
    });

    $(".imgSelect").change(function(e) {


      var selected = $(this).val();
      console.log(selected);

      for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
          
          var file = e.originalEvent.srcElement.files[i];
          
          //img = $("<img/>");
          
          var reader = new FileReader();
          reader.onloadend = function() {
               img.src = reader.result;
               img.attr("src", reader.result);
               img.show();
               console.log(reader.result);
               imgPicked = reader.result;
          }
          reader.readAsDataURL(file);
          $(".imgSelect").after(img);
          img.attr('width', '100%');
          img.attr('height', '100%');
          img.attr('margin-bottom', '5%');
      }
  });

  $("#btnCancel").click(function(){
    $("#sampleModal").modal("hide");
  });


  $("#btnUpload").click(function(e){
    var captions = $("#cap").val();
    $("#bPosts").append("<div id='contains' class=''>" + 
                       "<img class='postedImgs' src='" + imgPicked + "' />" + 
                       "<div class='caps'><p class='captionsP'>" + captions + "</p></div>" + "</div>");
  });