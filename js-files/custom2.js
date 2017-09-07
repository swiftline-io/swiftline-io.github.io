// jQuery Initialization
jQuery(document).ready(function($){
"use strict"; 


        /* =================================
        ===  MAILCHIMP                 ====
        =================================== */

        $('.mailchimp').ajaxChimp({
            callback: mailchimpCallback,
            url: "//swiftline.us16.list-manage.com/subscribe/post?u=ad3f5e93318f20b54625d1499&amp;id=e2c8c6f3b9" 
        });

        function mailchimpCallback(resp) {
             if (resp.result === 'success') {
                $('.subscription-success').html('<div class="success">' + resp.msg+ '</div>').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                
            } else if(resp.result === 'error') {
                $('.subscription-error').html('<div class="error">' + resp.msg + '</div>').fadeIn(1000);
            }  
        }



        //======================================================================================================
        //  END OF DOCUMENT
        //=================
});
