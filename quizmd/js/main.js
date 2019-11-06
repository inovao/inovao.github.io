
 jQuery(function ($) {
    'use strict';

    /**
     * Page Test
     */
    $(document).ready(function() {
        if ($('.message-test__wrap').length) showTest();
    });

    function showTestTabs() {
        var tabs = $('.message-tab');

        tabs.each(function() {
            $(this).find('.message-tab_controls a').click(function(e) {
                e.preventDefault();
                
                $(this).closest('.message-tab').find('.message-tab_content--item').each(function() {
                    $(this).removeClass('active');
                });

                $('#' + $(this).attr('href')).addClass('active');
            });
        });
    }

    showTestTabs();

    function showTest() {
        var wrapMessage = $('.message-test__wrap:not(.hidden-test-wrap)');

        setTimeout(function() {
            var hiddenTest = wrapMessage.find('.message-question');
            hiddenTest.removeClass('hidden-test typing');

            setTimeout(function() {
                if (wrapMessage.find('.message-test__controls.message-timer').length) {
                    var count = 3;

                    var time = setInterval(function() {
                        if (count <= 0) {
                            clearInterval(time);
                            window.location.href = 'https://secure.shapiromd.com/shop-natural/';
                        }

                        wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                        wrapMessage.find('.message-test__controls .message-timer').text('Redirecting you in ' + ' ' + count);
                        count--;
                    }, 1500);
                } else {
                    wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                }

                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 2000);

            $('html, body').animate({scrollTop: $(document).height()}, '500');
        }, 3000);        
    }

    function showTestMess() {
        var wrapMessage = $('.message-test__wrap--end .message-question:first');
        var count = 3;

        setTimeout(function() {
            wrapMessage.removeClass('hidden-test typing');
        }, 500);

        setInterval(function() {
            wrapMessage = wrapMessage.next();

            if (wrapMessage.length) {
                wrapMessage.removeClass('hidden-test-mess');

                setTimeout(function() {
                    wrapMessage.removeClass('hidden-test typing');
                }, 500);
            } else {
                var time = setInterval(function() {
                    if (count == 0) {
                        clearInterval(time);
                        window.location.href = 'https://secure.shapiromd.com/shop-natural/';
                    } else {
                        $('.message-timer').removeClass('hidden-test');
                        $('.message-timer-btn').text('Redirecting you in ' + ' ' + count);
                        count--;
                    }
                }, 1500);
            }

            $('html, body').animate({scrollTop: $(document).height()}, '500');
        }, 4000);
    }

    function showTestMessDiabet() {
        var wrapMessage = $('.message-test__wrap--diabet .message-question:first');
        var count = 3;

        $('.message-test__wrap--diabet').removeClass('hidden-test-wrap');

        setTimeout(function() {
            wrapMessage.removeClass('hidden-test typing');

            var time = setInterval(function() {
                if (count == 0) {
                    clearInterval(time);
                    window.location.href = '/';
                } else {
                    $('.message-timer').removeClass('hidden-test');
                    $('.message-timer-btn').text('Redirecting you in ' + ' ' + count);
                    count--;
                }

                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 3000);    

            $('html, body').animate({scrollTop: $(document).height()}, '500');        
        }, 500);
    }

    function showTestMessMale(radio) {
        var wrapMessage = $('.message-test__male');

        wrapMessage.removeClass('hidden-test-wrap');

        setTimeout(function() {
            wrapMessage.find('.message-question').removeClass('hidden-test typing');

            setTimeout(function() {
                wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 2000);            
        }, 500);
    }

    function showTestMessFemale(radio) {
        var wrapMessage = $('.message-test__female');

        wrapMessage.removeClass('hidden-test-wrap');

        setTimeout(function() {
            wrapMessage.find('.message-question').removeClass('hidden-test typing');

            setTimeout(function() {
                wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 2000);            
        }, 500);
    }

    $('.radio-male').click(function() {
        showTestMessMale();
    });

    $('.radio-female').click(function() {
        showTestMessFemale();
    });

    function showTestMessFour(radio) {
        if (radio.first().hasClass('radio-male')) {
            $('.message-test__wrap--four').find('.message-back').addClass('message-back-male');
        }

        var wrapMessage = $('.message-test__wrap--four');

        wrapMessage.removeClass('hidden-test-wrap');

        setTimeout(function() {
            wrapMessage.find('.message-question').removeClass('hidden-test typing');

            setTimeout(function() {
                wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 2000);   

            $('html, body').animate({scrollTop: $(document).height()}, '500');         
        }, 500);
    }

    $('.message-test__controls .message-btn').click(function() {
        var text = $(this).text(),
            parent = $(this).closest('.message-test__controls'),
            messageWrap = $(this).closest('.message-test__wrap').next();

        $(this).closest('.message-test__controls').find('.message-btn').each(function() {
            $(this).addClass('hide-btn');
        });

        if (!parent.find('.message-btn-info').length) {
            $(this).parent().append('<button class="message-btn-info"><span>' + text + '</span></button>');
        }

        messageWrap.removeClass('hidden-test-wrap');

        showTest();
    });

    $('.message-test__controls .radio').click(function(e) {
        e.preventDefault();

        var _this = $(this),
            parent = $(this).closest('.message-test__controls'),
            checked = parent.find('input[type="checkbox"]'),
            radio = parent.find('input[type="radio"]:checked'),
            rad = parent.find('.radio'),
            numberLbs = parent.find('.message-number input.lbs'),
            numberFt = parent.find('.message-number input.ft'),
            messageWrap = $(this).closest('.message-test__wrap').next(),
            wrap = parent.closest('.message-test__wrap'),
            text = '';

        _this.addClass('active-checked');
        if (rad.hasClass('radio-return')) {
            window.location.href = 'https://secure.shapiromd.com/shop-natural/';
        } else if (rad.hasClass('radio-sex')) {
            showTestMessSex(rad);
        } else if (rad.hasClass('radio-four')) {
            showTestMessFour(rad);
        } else {console.log('radio test');
            checked.each(function() {
                if ($(this).prop('checked')) {
                    text += $(this).val() + ', ';
                }
            });

            if (!parent.find('.message-btn-info').length) {
                if (radio.length) {
                    $(this).parent().append('<button class="message-btn-info"><span>' + radio.val() + '</span></button>');
                }

                if (checked.length) {
                    $(this).parent().append('<button class="message-btn-info"><span>' + text.substr(0, text.length - 2) + '</span></button>');
                }

                if (numberLbs.length) {
                    $(this).parent().append('<button class="message-btn-info"><span>' + numberLbs.val() + ' lbs</span></button>');
                }
                if (numberFt.length) {
                    $(this).parent().append('<button class="message-btn-info"><span>' + numberFt.val() + ' ft</span></button>');
                }
            }

            messageWrap.removeClass('hidden-test-wrap');

            $('.message-test__wrap').each(function() {
                $(this).removeClass('active-test');
            });

            messageWrap.addClass('active-test');

            if ($(this).hasClass('submit-btn-end')) {
                showTestMess();
            } else {
                showTest();
            }
        }
    });

    if ($('.message-test__wrap').length) {
        $('.message-test__wrap .message-checked input').change(function() {
            var change = $(this).closest('.message-test__controls').find('.message-checked');

            if ($(this).closest('.message-checked').hasClass('radio')) {
              change.each(function() {
                   $(this).removeClass('active-checked');
              });
            }

            $(this).closest('.message-checked').toggleClass('active-checked');
        });
    }

    $('.message-checked.radio').each(function() {
        if ($(this).find('input').prop('checked')) {
            $(this).closest('.message-checked').addClass('active-checked');
        }
    });

    $('.message-checked.check').each(function() {
        if ($(this).find('input').prop('checked')) {
            $(this).closest('.message-checked').addClass('active-checked');
        }
    });

    $('.message-back').click(function(e) {
        e.preventDefault();
        var prev = null;

        if ($(this).hasClass('message-back-male')) {
            prev = $('.message-test__male');
        } else if ($(this).hasClass('message-back_first')) {
            prev = $('.message-test__wrap').first();
        } else {
            prev = $(this).closest('.message-test__wrap').prev();
        }

        var current = $(this).closest('.message-test__wrap'),
            curInput = current.find('input'),
            prevInput = prev.find('input');

        if ($(this).hasClass('message-back_first')) {
            $('.message-first .message-checked').each(function() {
                $(this).removeClass('active-checked');
            });
        }

        prev.find('.message-checked').each(function() {
            $(this).removeClass('active-checked');
        });

        current.addClass('hidden-test-wrap');
        current.find('.message-btn-info').remove();
        current.find('.message-question').addClass('hidden-test typing');
        current.find('.message-test__controls').addClass('hidden-test');

        curInput.each(function() {
            $(this).val('');
        });

        prevInput.each(function() {
            $(this).val('');
        });

        prev.find('.submit-btn').show();
        prev.find('.message-btn-info').remove();

        $('.message-test__wrap.hidden-test-wrap').addClass('hidden-test typing');

        prev.removeClass('hidden-test-wrap');
        showTest();
    });

    $('.message-test__female .message-checked.last').removeClass('active-checked');

    return false;
});