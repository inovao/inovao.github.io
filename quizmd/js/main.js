
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
                            window.location.href = 'https://www.watch-may-birthday.com/J_6uOw-4i3jynaLt-Kdr_lCmGthCrWUDRCOmvyagtz6Y3WXr3bn_jDcio6wYMNm_KD1FCzZlabJDGrdQ1eLenA~~/';
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
                        window.location.href = 'https://www.getpurenatural.com/v..1/2/?AFFID=6B9532FF&c1=135&c2=380001&c3=1491814&c4=75422843-3083-4c8c-ba35-150c143cf2b8&c5=link';
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

    function showTestMessSex(radio) {
        var wrapMessage = '';

        if (radio.find('input').val() == 'Male') {
            wrapMessage = $('.message-test__male');
        } else if (radio.find('input').val() == 'Female') {
            wrapMessage = $('.message-test__female');
        }

        wrapMessage.removeClass('hidden-test-wrap');

        setTimeout(function() {
            wrapMessage.find('.message-question').removeClass('hidden-test typing');

            setTimeout(function() {
                wrapMessage.find('.message-test__controls').removeClass('hidden-test');
                $('html, body').animate({scrollTop: $(document).height()}, '500');
            }, 2000);            
        }, 500);
    }

    function showTestMessFour(radio) {
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

    $('.message-test__controls .submit-btn').click(function(e) {
        e.preventDefault();

        var _this = $(this),
            parent = $(this).closest('.message-test__controls'),
            checked = parent.find('input[type="checkbox"]'),
            radio = parent.find('input[type="radio"]:checked'),
            numberLbs = parent.find('.message-number input.lbs'),
            numberFt = parent.find('.message-number input.ft'),
            messageWrap = $(this).closest('.message-test__wrap').next(),
            wrap = parent.closest('.message-test__wrap'),
            text = '';

        if (parent.find('input.lbs').val() === '' || parent.find('input.ft').val() === '' || parent.find('input.rad1').val() === '' || parent.find('input.rad2').val() === '' || parent.find('input.rad3').val() === '') {
            $(this).addClass('error');
        } else {
            $(this).hide();
            if (radio.closest('.message-checked').hasClass('radio-return')) {
                showTestMessDiabet();
            } else if (radio.closest('.message-checked').hasClass('radio-sex')) {
                showTestMessSex(radio.closest('.message-checked'));
            } else if (radio.closest('.message-checked').hasClass('radio-four')) {
                showTestMessFour(radio.closest('.message-checked'));
            } else {
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
        var prev = $(this).closest('.message-test__wrap').prev(),
            current = $(this).closest('.message-test__wrap'),
            curInput = current.find('input'),
            prevInput = prev.find('input');

        current.addClass('hidden-test-wrap');
        current.find('.message-btn-info').remove();
        current.find('.message-question').addClass('hidden-test typing');

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
});