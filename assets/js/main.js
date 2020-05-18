(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        // for use only masonry plugin where image layout
        $('.projects-list').isotope({
          
          });
          
        //   for use image filtering
          $('.project-title li').on('click',function(){
              $('.project-title li').removeClass('active');
              $(this).addClass('active');
              var selector =$(this).attr ('data-filter');
             
            $('.projects-list').isotope({
                filter:selector
            });
          });
    });

}(jQuery));	