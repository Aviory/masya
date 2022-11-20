jQuery(document).ready(function () {
     
     $(".phone").mask("+380 (99) 999-99-99"); 
    
   
    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
                 form.find('.status').html('Заявка отправлена успешно');
				 ga('send', {
					hitType: 'event',
					eventCategory: 'form',
					eventAction: 'send',
					eventLabel: 'feedback'
				  });
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


});