

// SIDEBAR
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 350, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.logoBar').css("display", "None");
});

$('a').embedly({
  display: function(obj){
    // Overwrite the default display.
    if (obj.type === 'video' || obj.type === 'rich'){
      // Figure out the percent ratio for the padding. This is (height/width) * 100
      var ratio = ((obj.height/obj.width)*100).toPrecision(4) + '%'

      // Wrap the embed in a responsive object div. See the CSS here!
      var div = $('<div class="responsive-object">').css({
        paddingBottom: ratio
      });

      // Add the embed to the div.
      div.html(obj.html);

      // Replace the element with the div.
      $(this).replaceWith(div);
    }
  }
});

