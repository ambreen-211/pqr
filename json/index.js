$(document).ready(function () {
    var out = "";
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function (abc) {
            for (let i = 0; i < abc.length; i++) {
                // document.write(abc[i].name + "<br>");
                // document.write(abc[i].age+"<br>");                
                // document.write(abc[i].id+"<br>");                

                out += "<p>" + abc[i]["name"] + "</p>";
                out += "<div><p>" + abc[i]["name"] + "</p><p>" + abc[i]["age"] + "</p><p>" + abc[i]["id"] + "</p></div>";
                out += `<div class="user"><p> ${abc[i]["name"]} </p><p> ${abc[i]["age"]} </p><p> ${abc[i]["id"]} </p></div>`;
            }
            $("#data").html(out);
        }
    })
})
