// reading inputs from the dom
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardTemplate2 = document.querySelector("[data-user-template2]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const userCardContainer2 = document.querySelector("[data-user-cards-container2]")
const searchInput = document.getElementById("search");
const searchResto = document.getElementById("searchResto");

// defining the arrays
let users = []
let users2 = []


// listening to event from the search
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    //   hiding the non matching users
           if(document.getElementById("search").value.length==0){
              userCardContainer.style.display='none';
           }
       
          if(document.getElementById("search").value.length!=0){
              userCardContainer.style.display='block';
           }

    })
})
// listening to event from the search
searchResto.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users2.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
         if(document.getElementById("searchResto").value.length==0){
              userCardContainer2.style.display='none';
           }
           //   hiding the non matching users
          if(document.getElementById("searchResto").value.length!=0){
              userCardContainer2.style.display='block';
           }
    })
})

// fetching json data from an api
// adding to the arrays defined
// adding the array elements to the dom
// the arrays could contain any type therefore strings to use imgs
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const card2 = userCardTemplate2.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            const header2 = card2.querySelector("[data-header2]")
            const body2 = card2.querySelector("[data-body2]")
            header.textContent = user.name;
            body.textContent = user.email;
            header2.textContent = user.name;
            body2.textContent = user.email;
            userCardContainer.append(card)
            userCardContainer2.append(card2)
            users2.push({ name: user.name, email: user.email, element: card2 })
            return { name: user.name, email: user.email, element: card }
        })

    })

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
