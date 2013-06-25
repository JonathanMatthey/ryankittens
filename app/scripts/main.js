$(document).ready(function(){

  $(function() {
    // $('#countdown').countdown({
    //     date: "June 28, 2013 14:00:00",
    //     render: function(data) {
    //       $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    //     }
    // });

    $('#countdown').countUp({'lang':'en', 'format':'full', 'sinceDate': '24/06/2013-12::00'});
    setTimeout(function(){
      var deadKittenCount = parseInt($("#countdown span").eq(0).html());
      console.log(deadKittenCount);
      $(".kitten").slice(0,deadKittenCount).addClass('dk');
    },1000);
  });

});