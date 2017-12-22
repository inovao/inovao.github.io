/* FULLPAGE
---------------------------------------------------- */

$('#fullpage').fullpage({
    anchors: ['introduction', 'services', 'testmonials', 'contacts'],
    menu: '#nav-fullpage',
    scrollingSpeed: 1000
}); 

/* SLICK
---------------------------------------------------- */

$('.slider-testimonials ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

/* MENU
---------------------------------------------------- */

function menu() {
    var touchMenu = document.getElementById('touch-menu'),
        menu = document.getElementsByClassName('nav-head');

    touchMenu.addEventListener('click', function() {
        if (menu[0].classList.contains('responsive')) {
            menu[0].classList.remove('responsive');
        } else {
            menu[0].classList.add('responsive');
        }
    });
}

menu();

/* MODAL
---------------------------------------------------- */

function Modal(modal) {
    var self = this;

    this.modal = modal;
    this.overlay = document.getElementById('modal-overlay');

    self.overlay.style.display = 'block';
    self.modal.style.display = 'block';
    self.modal.style.top = (window.scrollY + 50) + 'px';
    document.body.style.overflowX = 'hidden';

    var closeBtn = modal.getElementsByClassName('close');

    this.close = function () {
        self.overlay.style.display = 'none';
        self.modal.style.display = 'none';
        document.body.style.overflowX = 'auto';
    }

    closeBtn[0].onclick = function() {
        console.log('dfdf');
        self.close();
    }

    self.overlay.onclick = function() {
        self.close();
    }
}

var modalContactUs = document.getElementById('modal-contact-us');

/* SERVICES MODAL
---------------------------------------------------- */
function services() {
    var services = document.querySelector('.page-coaching .services'),
        li = services.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('a');
        a[0].onclick = function(e) {
            e.preventDefault();
            new Modal(modalContactUs);
        }
    }
}

services();