$(document).ready(function() {
    function DropDown(el) {
        this.select = el;
        this.placeholder = this.select.children('span');
        this.opts = this.select.find('.dropdown__item');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }

    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.select.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    };

    $(function() {

        var dd = new DropDown( $('#select') );

        $(document).click(function() {
            // all dropdowns
            $('.wrapper-dropdown-2').removeClass('active');
        });

    });
});

