$(document).ready(function(){
    var classes = ["yellowborder", "pinkborder", "cyanborder", "greenborder"];

    $(".outer").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
});