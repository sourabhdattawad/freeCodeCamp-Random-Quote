$(document).ready(function() {
    $("#getMessage").on("click", function(){
      var left="<i class='fa fa-left' style='color:#FF0040'>"
      var quotes=["No act of kindness, no matter how small, is ever wasted.","Great things are done by a series of small things brought together.","Great minds discuss ideas; average minds discuss events; small minds discuss people.","Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.","The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it."];
  console.log("hello");
      $(".message").html("<i class='fa fa-quote-left' style='color:#FF0040' id='myicon'></i> " + quotes[Math.floor(Math.random() * quotes.length)]+ " <i class='fa fa-quote-right' style='color:#FF0040' id='myicon'></i>");
      // Only change code above this line.
    });

    // Only change code above this line.
  });
