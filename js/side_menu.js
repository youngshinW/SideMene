function SideMenu(options) {
    this.init(options);
    this.initEvent();
}

SideMenu.prototype = {

    //구조 정의
    init: function (opt) {
        this.$sideMenu = $(opt.selector);
        this.$showBtn = $(opt.showBtnSelector);
        this.$hideBtn = this.$sideMenu.find('.close_btn');
        this.$list = this.$sideMenu.find('.main_menu > li > a');
        this.$dimming = $(opt.shadowSelector);
        this.duration = 500;
    },

    //처음부터 시작할 함수들 모음
    initEvent: function () {
        this.clickHandler();
    },

    //사이드 메뉴 나타남
    showMenu: function () {
        this.$sideMenu.stop().animate({
            left: 0
        }, this.duration);
        this.$dimming.stop().fadeIn(this.duration);
    },

    //사이드 메뉴 사라짐
    hideMenu: function () {
        this.$sideMenu.stop().animate({
            left: -500
        }, this.duration);
        this.$dimming.stop().fadeOut(this.duration);
    },

    //메뉴 열리고 닫힘
    togleList: function ($this) {
        $('.sub_menu').not($this.siblings('.sub_menu')).stop(false, true).slideUp(500);
        $this.siblings('.sub_menu').stop(false, true).slideDown(500);
    },

    clickHandler: function () {
        var _this = this;

        this.$showBtn.on('click', function () {
           _this.showMenu();
        });
        this.$hideBtn.on('click', function () {
            _this.hideMenu();
        });
        this.$list.on('click', function () {
            _this.togleList($(this));
        });
    }

};