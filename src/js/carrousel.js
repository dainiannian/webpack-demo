(function ($) {
    $.carrousel = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };
    $.carrousel.prototype = {
        // 初始化
        _init: function (options) {
            this.options = $.extend(options);
            console.log('options',options);
            this.$wrapper = this.$el.find('.dg-wrapper');
            this.$items = this.$wrapper.children();
            this.itemsCount = this.$items.length;
            this.$nav = this.$el.find('nav');
            this.$navPrev = this.$nav.find('.dg-prev');
            this.$navNext = this.$nav.find('.dg-next');
            this.button = $('#lightButton li');
            this.box = $('.banner');
            this.imgWidth = $('.banner .dg-wrapper a').width();

            this.indexB = 0;
            this.CSSX = 0;
            this.CSSXout = 0;

            this.button[0].classList.add('light');
            console.log('th...',this.button[0]);

            this.current = this.options.current;
            this.isAnim = false;
            this.$items.css({
                'opacity': 1
            });
            this._updateWidth();
            this._layout();
            // load the events
            this._loadEvents();


            var _self = this;
            for (var i = 0, len = this.button.length; i < len; i++) {     // 点击小圆点
                this.button[i].addEventListener('click', function() {
                    var toIndex = parseInt(this.getAttribute('index'));
                    var toMove = toIndex - _self.indexB;
                    switch (toMove) {
                        case 0:
                            break;
                        case 1:
                            _self._navigate('next', 'dg-transition');
                            break;
                        case -1:
                            _self._navigate('prev', 'dg-transition');
                            break;
                    }
                });
            }
        },

        // 自适应宽度
        _updateWidth: function () {
            this.CSSX = ($(this.box).width() - 10 - this.imgWidth * 0.7) / 2;
            this.CSSXout = 0;
        },

        // 显示小圆点
        _showButton: function () {
            var _self = this;
            for (var i = 0, len = _self.button.length; i < len; i++) {
                if (_self.button[i].classList.contains('light')) {
                    _self.button[i].classList.remove('light');
                    break;
                }
            }
            _self.button[_self.indexB].classList.add('light');
        },

        // 用来绑定点击事件
        _click: function (element, move) {
            var _self = this;
            element.off('click').on('click', function () {
                if (!this.isAnim) {
                    _self._navigate(move);
                }
            });
        },

        // 初始样式
        _layout: function () {
            this._setItems();

            this.$leftItm.css(this._getCoordinates('left'));
            this.$rightItm.css(this._getCoordinates('right'));
            this.$currentItm.css(this._getCoordinates('center')).addClass('dg-center');

            this._click(this.$leftItm, 'prev');
            this._click(this.$prevItm, 'prev');

            this.$currentItm.off('click.carrousel');

            this._click(this.$rightItm, 'next');
            this._click(this.$nextItm, 'next');

            this.$nextItm.css(this._getCoordinates('outright'));
            this.$prevItm.css(this._getCoordinates('outleft'));
        },

        // 更新图片位置
        _setItems: function () {

            this.$items.removeClass('dg-center');

            this.$currentItm = this.$items.eq(this.current);
            this.$leftItm = ( this.current === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$items.eq(this.current - 1);
            this.$rightItm = ( this.current === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$items.eq(this.current + 1);
            this.$nextItm = ( this.$rightItm.index() === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$rightItm.next();
            this.$prevItm = ( this.$leftItm.index() === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$leftItm.prev();
        },

        _loadEvents: function () {
            var _self = this;
            this.$navPrev.on('click.carrousel', function () {
                _self._navigate('prev');
                return false;
            });

            this.$navNext.on('click.carrousel', function () {
                _self._navigate('next');
                return false;
            });

            this.$wrapper.on('webkitTransitionEnd.carrousel transitionend.carrousel OTransitionEnd.carrousel', function () {
                _self.$currentItm.addClass('dg-center');
                _self.$items.removeClass('dg-transition');
                _self.$items.removeClass('dg-transition-fast');
                _self.isAnim = false;

                // 处理左右元素的点击事件
                _self._click(_self.$leftItm, 'prev');
                _self._click(_self.$prevItm, 'prev');

                _self.$currentItm.off('click.gallery');

                _self._click(_self.$rightItm, 'next');
                _self._click(_self.$nextItm, 'next');
            });
        },

        // 定义样式
        _getCoordinates: function (position) {

            switch (position) {
                case 'outleft':
                    return {
                        '-webkit-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                        '-moz-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                        '-o-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                        '-ms-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                        'transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                        'opacity': 1
                    };
                    break;
                case 'outright':
                    return {
                        '-webkit-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                        '-moz-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                        '-o-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                        '-ms-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                        'transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                        'opacity': 1
                    };
                    break;
                case 'left':
                    return {
                        '-webkit-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                        '-moz-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                        '-o-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                        '-ms-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                        'transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                        'opacity': 1,
                        'visibility': 'visible'
                    };
                    break;
                case 'right':
                    return {
                        '-webkit-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                        '-moz-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                        '-o-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                        '-ms-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                        'transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                        'opacity': 1,
                        'visibility': 'visible'
                    };
                    break;
                case 'center':
                    return {
                        '-webkit-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                        '-moz-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                        '-o-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                        '-ms-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                        'transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                        'opacity': 1,
                        'visibility': 'visible'
                    };
                    break;
                case 'hide':
                    return {
                        '-webkit-transform': 'translate(0px) scale(0.7)',
                        'opacity': 1,
                        'visibility': 'visible',
                        'z-index': 1
                    };
                    break;
            }

        },

        // 切换
        _navigate: function (dir, speedClass) {
            speedClass = speedClass || 'dg-transition';
            if (!this.isAnim) {
                this._updateWidth();

                this.isAnim = true;
                var _self = this;

                switch (dir) {
                    case 'next' :
                        this.indexB++;
                        if (this.indexB === this.itemsCount) {
                            this.indexB = 0;
                        }
                        this._showButton();
                        this.current = this.$rightItm.index();
                        // current item moves left
                        this.$currentItm.addClass(speedClass).css(this._getCoordinates('left'));

                        // right item moves to the center
                        this.$rightItm.addClass(speedClass).css(this._getCoordinates('center'));

                        // left item moves out
                        this.$leftItm.addClass(speedClass).css(this._getCoordinates('outleft'));

                        this.$nextItm.addClass(speedClass).css(this._getCoordinates('right'));

                        if (this.itemsCount > 5) {
                            this.$prevItm.addClass(speedClass).css(this._getCoordinates('hide'));
                            this.$prevItm.off('click.carrousel');
                        }

                        var nextEle = ( this.$nextItm.index() === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$nextItm.next();
                        $(nextEle).addClass(speedClass).css(this._getCoordinates('outright'));
                        $(nextEle).off('click.carrousel');

                        break;

                    case 'prev' :
                        this.indexB--;
                        if (this.indexB === -1) {
                            this.indexB = this.itemsCount - 1;
                        }
                        this._showButton();
                        this.current = this.$leftItm.index();
                        // current item moves right
                        this.$currentItm.addClass(speedClass).css(this._getCoordinates('right'));

                        // left item moves to the center
                        this.$leftItm.addClass(speedClass).css(this._getCoordinates('center'));

                        // right item moves out
                        this.$rightItm.addClass(speedClass).css(this._getCoordinates('outright'));

                        this.$prevItm.addClass(speedClass).css(this._getCoordinates('left'));

                        if (this.itemsCount > 5) {
                            this.$nextItm.addClass(speedClass).css(this._getCoordinates('hide'));
                            this.$nextItm.off('click.carrousel');
                        }

                        var prevEle = ( this.$prevItm.index() === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$prevItm.prev();
                        $(prevEle).addClass(speedClass).css(this._getCoordinates('outleft'));
                        $(prevEle).off('click.carrousel');

                        break;
                }
                this._setItems();
            }
        },
    };

    $.fn.carrousel = function (options) {
        new $.carrousel(options, this)
    };

})(jQuery);