(function($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.cvJqueryValidate = {
        attach: function(context) {
            if (typeof drupalSettings.cvJqueryValidateOptions === 'undefined') {
                drupalSettings.cvJqueryValidateOptions = {};
            }
            if (typeof Drupal.Ajax !== 'undefined') {
                if (typeof Drupal.Ajax.prototype.beforeSubmitCVOriginal === 'undefined') {
                    var validateAll = 2;
                    try {
                        validateAll = drupalSettings.clientside_validation_jquery.validate_all_ajax_forms;
                    } catch (e) {}
                    Drupal.Ajax.prototype.beforeSubmitCVOriginal = Drupal.Ajax.prototype.beforeSubmit;
                    Drupal.Ajax.prototype.beforeSubmit = function(form_values, element_settings, options) {
                        if (typeof this.$form !== 'undefined' && (validateAll === 1 || $(this.element).hasClass('cv-validate-before-ajax'))) {
                            $(this.$form).removeClass('ajax-submit-prevented');
                            $(this.$form).validate();
                            if (!($(this.$form).valid())) {
                                this.ajaxing = false;
                                $(this.$form).addClass('ajax-submit-prevented');
                                return false;
                            }
                        }
                        return this.beforeSubmitCVOriginal();
                    };
                }
            }
            if (drupalSettings.clientside_validation_jquery.force_validate_on_blur) {
                drupalSettings.cvJqueryValidateOptions.onfocusout = function(element) {
                    this.element(element);
                };
            }
            $(document).trigger('cv-jquery-validate-options-update', drupalSettings.cvJqueryValidateOptions);
            $(document).find('form').once('cvJqueryValidate').each(function() {
                if ($.isFunction($(this).validate)) {
                    $(this).validate(drupalSettings.cvJqueryValidateOptions);
                }
            });
        }
    };
})(jQuery, Drupal, drupalSettings);;
(function($, Drupal, debounce, CKEDITOR) {
    Drupal.behaviors.cvJqueryValidateCKEditor = {
        attach: function(context) {
            if (typeof CKEDITOR === 'undefined') {
                return;
            }
            var ignore = ':hidden';
            var not = [];
            for (var instance in CKEDITOR.instances) {
                if (CKEDITOR.instances.hasOwnProperty(instance)) {
                    not.push('#' + instance);
                }
            }
            ignore += not.length ? ':not(' + not.join(', ') + ')' : '';
            $('form').each(function() {
                var validator = $(this).data('validator');
                if (!validator) {
                    return;
                }
                validator.settings.ignore = ignore;
                validator.settings.errorPlacement = function(place, $element) {
                    var id = $element.attr('id');
                    var afterElement = $element[0];
                    if (CKEDITOR.instances.hasOwnProperty(id)) {
                        afterElement = CKEDITOR.instances[id].container.$;
                    }
                    place.insertAfter(afterElement);
                };
            });
            var updateText = function(instance) {
                return debounce(function(e) {
                    instance.updateElement();
                    var event = $.extend(true, {}, e.data.$);
                    delete event.target;
                    delete event.explicitOriginalTarget;
                    delete event.originalTarget;
                    delete event.currentTarget;
                    $(instance.element.$).trigger(new $.Event(e.name, event));
                }, 250);
            };
            CKEDITOR.on('instanceReady', function() {
                for (var instance in CKEDITOR.instances) {
                    if (CKEDITOR.instances.hasOwnProperty(instance)) {
                        CKEDITOR.instances[instance].document.on("keyup", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("paste", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("keypress", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("blur", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("change", updateText(CKEDITOR.instances[instance]));
                    }
                }
            });
        }
    };
})(jQuery, Drupal, Drupal.debounce, (typeof CKEDITOR === 'undefined') ? undefined : CKEDITOR);;
(function($) {
    $(document).once('cvjquery').on('cv-jquery-validate-options-update', function(event, options) {
        options.errorElement = 'strong';
        options.showErrors = function(errorMap, errorList) {
            for (var i in errorList) {
                $(errorList[i].element).parent().find('.form-item--error-message').remove();
            }
            this.defaultShowErrors();
            $(this.currentForm).find('strong.error').each(function() {
                if (!$(this).parent().hasClass('form-item--error-message')) {
                    $(this).wrap('<div class="form-item--error-message"/>');
                }
            });
        };
    });
})(jQuery);;