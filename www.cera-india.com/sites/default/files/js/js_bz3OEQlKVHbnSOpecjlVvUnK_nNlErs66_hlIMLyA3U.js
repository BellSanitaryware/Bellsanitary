(function($, Drupal) {
    'use strict';
    Drupal.behaviors.webformSelectOptionsDisabled = {
        attach: function(context) {
            $('select[data-webform-select-options-disabled]', context).once('webform-select-options-disabled').each(function() {
                var $select = $(this);
                var disabled = $select.attr('data-webform-select-options-disabled').split(/\s*,\s*/);
                $select.find('option').filter(function isDisabled() {
                    return ($.inArray(this.value, disabled) !== -1);
                }).attr('disabled', 'disabled');
            });
        }
    };
})(jQuery, Drupal);;