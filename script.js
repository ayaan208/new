(function ($) {
    'use strict';

    // :: Index of Plugins Active Code :: //

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    if ($window.width() > 767) {
        if ($.fn.sticky) {
            $("#stickyHeader").sticky({
                topSpacing: 0
            });
        }
    }

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip()

    // :: Nicescroll Active Code
    if ($.fn.niceScroll) {
        $("body, textarea").niceScroll({
            cursorcolor: "#151515",
            cursorwidth: "6px",
            background: "#f0f0f0"
        });
    }

    // :: Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        $('.hero-slides').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['Prev', 'Next'],
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        $('.testimonials-slider').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });

        $('.medilife-gallery-area').owlCarousel({
            items: 4,
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // :: Magnific Popup Active Code

    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }
    
})(jQuery);
/*!
  * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var o = function(t) {
        function e(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function n(e) {
            var n = this
              , i = !1;
            return t(this).one(s.TRANSITION_END, function() {
                i = !0
            }),
            setTimeout(function() {
                i || s.triggerTransitionEnd(n)
            }, e),
            this
        }
        var i = !1
          , s = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(e) {
                var n = e.getAttribute("data-target");
                n && "#" !== n || (n = e.getAttribute("href") || ""),
                "#" === n.charAt(0) && (n = function(e) {
                    return e = "function" == typeof t.escapeSelector ? t.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
                }(n));
                try {
                    return t(document).find(n).length > 0 ? n : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                t(e).trigger(i.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(i)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, n, i) {
                for (var r in i)
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var o = i[r]
                          , a = n[r]
                          , l = a && s.isElement(a) ? "element" : e(a);
                        if (!new RegExp(o).test(l))
                            throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".')
                    }
            }
        };
        return i = !window.QUnit && {
            end: "transitionend"
        },
        t.fn.emulateTransitionEnd = n,
        s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = {
            bindType: i.end,
            delegateType: i.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }),
        s
    }(e)
      , a = function(t) {
        var e = "alert"
          , n = "bs.alert"
          , i = "." + n
          , r = t.fn[e]
          , a = {
            CLOSE: "close" + i,
            CLOSED: "closed" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , l = "alert"
          , h = "fade"
          , c = "show"
          , u = function() {
            function e(t) {
                this._element = t
            }
            var i = e.prototype;
            return i.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, n),
                this._element = null
            }
            ,
            i._getRootElement = function(e) {
                var n = o.getSelectorFromElement(e)
                  , i = !1;
                return n && (i = t(n)[0]),
                i || (i = t(e).closest("." + l)[0]),
                i
            }
            ,
            i._triggerCloseEvent = function(e) {
                var n = t.Event(a.CLOSE);
                return t(e).trigger(n),
                n
            }
            ,
            i._removeElement = function(e) {
                var n = this;
                t(e).removeClass(c),
                o.supportsTransitionEnd() && t(e).hasClass(h) ? t(e).one(o.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }
            ,
            i._destroyElement = function(e) {
                t(e).detach().trigger(a.CLOSED).remove()
            }
            ,
            e._jQueryInterface = function(i) {
                return this.each(function() {
                    var s = t(this)
                      , r = s.data(n);
                    r || (r = new e(this),
                    s.data(n, r)),
                    "close" === i && r[i](this)
                })
            }
            ,
            e._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(),
                    t.close(this)
                }
            }
            ,
            s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }]),
            e
        }();
        return t(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', u._handleDismiss(new u)),
        t.fn[e] = u._jQueryInterface,
        t.fn[e].Constructor = u,
        t.fn[e].noConflict = function() {
            return t.fn[e] = r,
            u._jQueryInterface
        }
        ,
        u
    }(e)
      , l = function(t) {
        var e = "button"
          , n = "bs.button"
          , i = "." + n
          , r = ".data-api"
          , o = t.fn[e]
          , a = "active"
          , l = "btn"
          , h = "focus"
          , c = '[data-toggle^="button"]'
          , u = '[data-toggle="buttons"]'
          , f = "input"
          , d = ".active"
          , _ = ".btn"
          , g = {
            CLICK_DATA_API: "click" + i + r,
            FOCUS_BLUR_DATA_API: "focus" + i + r + " blur" + i + r
        }
          , m = function() {
            function e(t) {
                this._element = t
            }
            var i = e.prototype;
            return i.toggle = function() {
                var e = !0
                  , n = !0
                  , i = t(this._element).closest(u)[0];
                if (i) {
                    var s = t(this._element).find(f)[0];
                    if (s) {
                        if ("radio" === s.type)
                            if (s.checked && t(this._element).hasClass(a))
                                e = !1;
                            else {
                                var r = t(i).find(d)[0];
                                r && t(r).removeClass(a)
                            }
                        if (e) {
                            if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled"))
                                return;
                            s.checked = !t(this._element).hasClass(a),
                            t(s).trigger("change")
                        }
                        s.focus(),
                        n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(a)),
                e && t(this._element).toggleClass(a)
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, n),
                this._element = null
            }
            ,
            e._jQueryInterface = function(i) {
                return this.each(function() {
                    var s = t(this).data(n);
                    s || (s = new e(this),
                    t(this).data(n, s)),
                    "toggle" === i && s[i]()
                })
            }
            ,
            s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }]),
            e
        }();
        return t(document).on(g.CLICK_DATA_API, c, function(e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(l) || (n = t(n).closest(_)),
            m._jQueryInterface.call(t(n), "toggle")
        }).on(g.FOCUS_BLUR_DATA_API, c, function(e) {
            var n = t(e.target).closest(_)[0];
            t(n).toggleClass(h, /^focus(in)?$/.test(e.type))
        }),
        t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            m._jQueryInterface
        }
        ,
        m
    }(e)
      , h = function(t) {
        var e = "carousel"
          , n = "bs.carousel"
          , i = "." + n
          , a = t.fn[e]
          , l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , h = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , c = "next"
          , u = "prev"
          , f = "left"
          , d = "right"
          , _ = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , g = "carousel"
          , m = "active"
          , p = "slide"
          , v = "carousel-item-right"
          , E = "carousel-item-left"
          , T = "carousel-item-next"
          , y = "carousel-item-prev"
          , C = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , I = function() {
            function a(e, n) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = t(e)[0],
                this._indicatorsElement = t(this._element).find(C.INDICATORS)[0],
                this._addEventListeners()
            }
            var I = a.prototype;
            return I.next = function() {
                this._isSliding || this._slide(c)
            }
            ,
            I.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }
            ,
            I.prev = function() {
                this._isSliding || this._slide(u)
            }
            ,
            I.pause = function(e) {
                e || (this._isPaused = !0),
                t(this._element).find(C.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            I.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            I.to = function(e) {
                var n = this;
                this._activeElement = t(this._element).find(C.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        t(this._element).one(_.SLID, function() {
                            return n.to(e)
                        });
                    else {
                        if (i === e)
                            return this.pause(),
                            void this.cycle();
                        var s = e > i ? c : u;
                        this._slide(s, this._items[e])
                    }
            }
            ,
            I.dispose = function() {
                t(this._element).off(i),
                t.removeData(this._element, n),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            I._getConfig = function(t) {
                return t = r({}, l, t),
                o.typeCheckConfig(e, t, h),
                t
            }
            ,
            I._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(_.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && (t(this._element).on(_.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(_.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                "ontouchstart"in document.documentElement && t(this._element).on(_.TOUCHEND, function() {
                    e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }
            ,
            I._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next();
                        break;
                    default:
                        return
                    }
            }
            ,
            I._getItemIndex = function(e) {
                return this._items = t.makeArray(t(e).parent().find(C.ITEM)),
                this._items.indexOf(e)
            }
            ,
            I._getItemByDirection = function(t, e) {
                var n = t === c
                  , i = t === u
                  , s = this._getItemIndex(e)
                  , r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap)
                    return e;
                var o = (s + (t === u ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }
            ,
            I._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e)
                  , s = this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0])
                  , r = t.Event(_.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: s,
                    to: i
                });
                return t(this._element).trigger(r),
                r
            }
            ,
            I._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(m)
                }
            }
            ,
            I._slide = function(e, n) {
                var i, s, r, a = this, l = t(this._element).find(C.ACTIVE_ITEM)[0], h = this._getItemIndex(l), u = n || l && this._getItemByDirection(e, l), g = this._getItemIndex(u), I = Boolean(this._interval);
                if (e === c ? (i = E,
                s = T,
                r = f) : (i = v,
                s = y,
                r = d),
                u && t(u).hasClass(m))
                    this._isSliding = !1;
                else {
                    if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && l && u) {
                        this._isSliding = !0,
                        I && this.pause(),
                        this._setActiveIndicatorElement(u);
                        var A = t.Event(_.SLID, {
                            relatedTarget: u,
                            direction: r,
                            from: h,
                            to: g
                        });
                        o.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(u).addClass(s),
                        o.reflow(u),
                        t(l).addClass(i),
                        t(u).addClass(i),
                        t(l).one(o.TRANSITION_END, function() {
                            t(u).removeClass(i + " " + s).addClass(m),
                            t(l).removeClass(m + " " + s + " " + i),
                            a._isSliding = !1,
                            setTimeout(function() {
                                return t(a._element).trigger(A)
                            }, 0)
                        }).emulateTransitionEnd(600)) : (t(l).removeClass(m),
                        t(u).addClass(m),
                        this._isSliding = !1,
                        t(this._element).trigger(A)),
                        I && this.cycle()
                    }
                }
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , s = r({}, l, t(this).data());
                    "object" == typeof e && (s = r({}, s, e));
                    var o = "string" == typeof e ? e : s.slide;
                    if (i || (i = new a(this,s),
                    t(this).data(n, i)),
                    "number" == typeof e)
                        i.to(e);
                    else if ("string" == typeof o) {
                        if ("undefined" == typeof i[o])
                            throw new Error('No method named "' + o + '"');
                        i[o]()
                    } else
                        s.interval && (i.pause(),
                        i.cycle())
                })
            }
            ,
            a._dataApiClickHandler = function(e) {
                var i = o.getSelectorFromElement(this);
                if (i) {
                    var s = t(i)[0];
                    if (s && t(s).hasClass(g)) {
                        var l = r({}, t(s).data(), t(this).data())
                          , h = this.getAttribute("data-slide-to");
                        h && (l.interval = !1),
                        a._jQueryInterface.call(t(s), l),
                        h && t(s).data(n).to(h),
                        e.preventDefault()
                    }
                }
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            a
        }();
        return t(document).on(_.CLICK_DATA_API, C.DATA_SLIDE, I._dataApiClickHandler),
        t(window).on(_.LOAD_DATA_API, function() {
            t(C.DATA_RIDE).each(function() {
                var e = t(this);
                I._jQueryInterface.call(e, e.data())
            })
        }),
        t.fn[e] = I._jQueryInterface,
        t.fn[e].Constructor = I,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            I._jQueryInterface
        }
        ,
        I
    }(e)
      , c = function(t) {
        var e = "collapse"
          , n = "bs.collapse"
          , i = "." + n
          , a = t.fn[e]
          , l = {
            toggle: !0,
            parent: ""
        }
          , h = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , c = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , u = "show"
          , f = "collapse"
          , d = "collapsing"
          , _ = "collapsed"
          , g = "width"
          , m = "height"
          , p = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , v = function() {
            function i(e, n) {
                this._isTransitioning = !1,
                this._element = e,
                this._config = this._getConfig(n),
                this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                    var r = i[s]
                      , a = o.getSelectorFromElement(r);
                    null !== a && t(a).filter(e).length > 0 && this._triggerArray.push(r)
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var a = i.prototype;
            return a.toggle = function() {
                t(this._element).hasClass(u) ? this.hide() : this.show()
            }
            ,
            a.show = function() {
                var e = this;
                if (!this._isTransitioning && !t(this._element).hasClass(u)) {
                    var s, r;
                    if (this._parent && ((s = t.makeArray(t(this._parent).children().children(p.ACTIVES))).length || (s = null)),
                    !(s && (r = t(s).data(n)) && r._isTransitioning)) {
                        var a = t.Event(c.SHOW);
                        if (t(this._element).trigger(a),
                        !a.isDefaultPrevented()) {
                            s && (i._jQueryInterface.call(t(s), "hide"),
                            r || t(s).data(n, null));
                            var l = this._getDimension();
                            t(this._element).removeClass(f).addClass(d),
                            this._element.style[l] = 0,
                            this._triggerArray.length && t(this._triggerArray).removeClass(_).attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                            var h = function() {
                                t(e._element).removeClass(d).addClass(f).addClass(u),
                                e._element.style[l] = "",
                                e.setTransitioning(!1),
                                t(e._element).trigger(c.SHOWN)
                            };
                            if (o.supportsTransitionEnd()) {
                                var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                t(this._element).one(o.TRANSITION_END, h).emulateTransitionEnd(600),
                                this._element.style[l] = this._element[g] + "px"
                            } else
                                h()
                        }
                    }
                }
            }
            ,
            a.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(u)) {
                    var n = t.Event(c.HIDE);
                    if (t(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                        o.reflow(this._element),
                        t(this._element).addClass(d).removeClass(f).removeClass(u),
                        this._triggerArray.length)
                            for (var s = 0; s < this._triggerArray.length; s++) {
                                var r = this._triggerArray[s]
                                  , a = o.getSelectorFromElement(r);
                                if (null !== a) {
                                    t(a).hasClass(u) || t(r).addClass(_).attr("aria-expanded", !1)
                                }
                            }
                        this.setTransitioning(!0);
                        var l = function() {
                            e.setTransitioning(!1),
                            t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)
                        };
                        this._element.style[i] = "",
                        o.supportsTransitionEnd() ? t(this._element).one(o.TRANSITION_END, l).emulateTransitionEnd(600) : l()
                    }
                }
            }
            ,
            a.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            a.dispose = function() {
                t.removeData(this._element, n),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            a._getConfig = function(t) {
                return t = r({}, l, t),
                t.toggle = Boolean(t.toggle),
                o.typeCheckConfig(e, t, h),
                t
            }
            ,
            a._getDimension = function() {
                return t(this._element).hasClass(g) ? g : m
            }
            ,
            a._getParent = function() {
                var e = this
                  , n = null;
                o.isElement(this._config.parent) ? (n = this._config.parent,
                "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(s).each(function(t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }),
                n
            }
            ,
            a._addAriaAndCollapsedClass = function(e, n) {
                if (e) {
                    var i = t(e).hasClass(u);
                    n.length && t(n).toggleClass(_, !i).attr("aria-expanded", i)
                }
            }
            ,
            i._getTargetFromElement = function(e) {
                var n = o.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }
            ,
            i._jQueryInterface = function(e) {
                return this.each(function() {
                    var s = t(this)
                      , o = s.data(n)
                      , a = r({}, l, s.data(), "object" == typeof e && e);
                    if (!o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                    o || (o = new i(this,a),
                    s.data(n, o)),
                    "string" == typeof e) {
                        if ("undefined" == typeof o[e])
                            throw new Error('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            i
        }();
        return t(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this)
              , s = o.getSelectorFromElement(this);
            t(s).each(function() {
                var e = t(this)
                  , s = e.data(n) ? "toggle" : i.data();
                v._jQueryInterface.call(e, s)
            })
        }),
        t.fn[e] = v._jQueryInterface,
        t.fn[e].Constructor = v,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            v._jQueryInterface
        }
        ,
        v
    }(e)
      , u = function(t) {
        var e = "dropdown"
          , i = "bs.dropdown"
          , a = "." + i
          , l = ".data-api"
          , h = t.fn[e]
          , c = new RegExp("38|40|27")
          , u = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            CLICK: "click" + a,
            CLICK_DATA_API: "click" + a + l,
            KEYDOWN_DATA_API: "keydown" + a + l,
            KEYUP_DATA_API: "keyup" + a + l
        }
          , f = "disabled"
          , d = "show"
          , _ = "dropup"
          , g = "dropright"
          , m = "dropleft"
          , p = "dropdown-menu-right"
          , v = "dropdown-menu-left"
          , E = "position-static"
          , T = '[data-toggle="dropdown"]'
          , y = ".dropdown form"
          , C = ".dropdown-menu"
          , I = ".navbar-nav"
          , A = ".dropdown-menu .dropdown-item:not(.disabled)"
          , b = "top-start"
          , D = "top-end"
          , S = "bottom-start"
          , w = "bottom-end"
          , N = "right-start"
          , O = "left-start"
          , k = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }
          , P = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }
          , L = function() {
            function l(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var h = l.prototype;
            return h.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(f)) {
                    var e = l._getParentFromElement(this._element)
                      , i = t(this._menu).hasClass(d);
                    if (l._clearMenus(),
                    !i) {
                        var s = {
                            relatedTarget: this._element
                        }
                          , r = t.Event(u.SHOW, s);
                        if (t(e).trigger(r),
                        !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof n)
                                    throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(_) && (t(this._menu).hasClass(v) || t(this._menu).hasClass(p)) && (o = e),
                                "scrollParent" !== this._config.boundary && t(e).addClass(E),
                                this._popper = new n(o,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && !t(e).closest(I).length && t("body").children().on("mouseover", null, t.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            t(this._menu).toggleClass(d),
                            t(e).toggleClass(d).trigger(t.Event(u.SHOWN, s))
                        }
                    }
                }
            }
            ,
            h.dispose = function() {
                t.removeData(this._element, i),
                t(this._element).off(a),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            h.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            h._addEventListeners = function() {
                var e = this;
                t(this._element).on(u.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            h._getConfig = function(n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n),
                o.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            h._getMenuElement = function() {
                if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    this._menu = t(e).find(C)[0]
                }
                return this._menu
            }
            ,
            h._getPlacement = function() {
                var e = t(this._element).parent()
                  , n = S;
                return e.hasClass(_) ? (n = b,
                t(this._menu).hasClass(p) && (n = D)) : e.hasClass(g) ? n = N : e.hasClass(m) ? n = O : t(this._menu).hasClass(p) && (n = w),
                n
            }
            ,
            h._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }
            ,
            h._getPopperConfig = function() {
                var t = this
                  , e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                    e
                }
                : e.offset = this._config.offset;
                return {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }
            }
            ,
            l._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i);
                    if (n || (n = new l(this,"object" == typeof e ? e : null),
                    t(this).data(i, n)),
                    "string" == typeof e) {
                        if ("undefined" == typeof n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            l._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = t.makeArray(t(T)), s = 0; s < n.length; s++) {
                        var r = l._getParentFromElement(n[s])
                          , o = t(n[s]).data(i)
                          , a = {
                            relatedTarget: n[s]
                        };
                        if (o) {
                            var h = o._menu;
                            if (t(r).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                var c = t.Event(u.HIDE, a);
                                t(r).trigger(c),
                                c.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                n[s].setAttribute("aria-expanded", "false"),
                                t(h).removeClass(d),
                                t(r).removeClass(d).trigger(t.Event(u.HIDDEN, a)))
                            }
                        }
                    }
            }
            ,
            l._getParentFromElement = function(e) {
                var n, i = o.getSelectorFromElement(e);
                return i && (n = t(i)[0]),
                n || e.parentNode
            }
            ,
            l._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(C).length)) : c.test(e.which)) && (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(f))) {
                    var n = l._getParentFromElement(this)
                      , i = t(n).hasClass(d);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var s = t(n).find(A).get();
                        if (s.length) {
                            var r = s.indexOf(e.target);
                            38 === e.which && r > 0 && r--,
                            40 === e.which && r < s.length - 1 && r++,
                            r < 0 && (r = 0),
                            s[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t(n).find(T)[0];
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }
            ,
            s(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return k
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return P
                }
            }]),
            l
        }();
        return t(document).on(u.KEYDOWN_DATA_API, T, L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, C, L._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, L._clearMenus).on(u.CLICK_DATA_API, T, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            L._jQueryInterface.call(t(this), "toggle")
        }).on(u.CLICK_DATA_API, y, function(t) {
            t.stopPropagation()
        }),
        t.fn[e] = L._jQueryInterface,
        t.fn[e].Constructor = L,
        t.fn[e].noConflict = function() {
            return t.fn[e] = h,
            L._jQueryInterface
        }
        ,
        L
    }(e)
      , f = function(t) {
        var e = "modal"
          , n = "bs.modal"
          , i = "." + n
          , a = t.fn.modal
          , l = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , h = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , c = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            FOCUSIN: "focusin" + i,
            RESIZE: "resize" + i,
            CLICK_DISMISS: "click.dismiss" + i,
            KEYDOWN_DISMISS: "keydown.dismiss" + i,
            MOUSEUP_DISMISS: "mouseup.dismiss" + i,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , u = "modal-scrollbar-measure"
          , f = "modal-backdrop"
          , d = "modal-open"
          , _ = "fade"
          , g = "show"
          , m = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }
          , p = function() {
            function a(e, n) {
                this._config = this._getConfig(n),
                this._element = e,
                this._dialog = t(e).find(m.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            var p = a.prototype;
            return p.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            p.show = function(e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    o.supportsTransitionEnd() && t(this._element).hasClass(_) && (this._isTransitioning = !0);
                    var i = t.Event(c.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i),
                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(d),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function(t) {
                        return n.hide(t)
                    }),
                    t(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(c.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }
            ,
            p.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var i = t.Event(c.HIDE);
                    if (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = o.supportsTransitionEnd() && t(this._element).hasClass(_);
                        s && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(c.FOCUSIN),
                        t(this._element).removeClass(g),
                        t(this._element).off(c.CLICK_DISMISS),
                        t(this._dialog).off(c.MOUSEDOWN_DISMISS),
                        s ? t(this._element).one(o.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }
            ,
            p.dispose = function() {
                t.removeData(this._element, n),
                t(window, document, this._element, this._backdrop).off(i),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            p.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            p._getConfig = function(t) {
                return t = r({}, l, t),
                o.typeCheckConfig(e, t, h),
                t
            }
            ,
            p._showElement = function(e) {
                var n = this
                  , i = o.supportsTransitionEnd() && t(this._element).hasClass(_);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                i && o.reflow(this._element),
                t(this._element).addClass(g),
                this._config.focus && this._enforceFocus();
                var s = t.Event(c.SHOWN, {
                    relatedTarget: e
                })
                  , r = function() {
                    n._config.focus && n._element.focus(),
                    n._isTransitioning = !1,
                    t(n._element).trigger(s)
                };
                i ? t(this._dialog).one(o.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }
            ,
            p._enforceFocus = function() {
                var e = this;
                t(document).off(c.FOCUSIN).on(c.FOCUSIN, function(n) {
                    document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                })
            }
            ,
            p._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS)
            }
            ,
            p._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(c.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(c.RESIZE)
            }
            ,
            p._hideModal = function() {
                var e = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    t(document.body).removeClass(d),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(c.HIDDEN)
                })
            }
            ,
            p._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            p._showBackdrop = function(e) {
                var n = this
                  , i = t(this._element).hasClass(_) ? _ : "";
                if (this._isShown && this._config.backdrop) {
                    var s = o.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = f,
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(c.CLICK_DISMISS, function(t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    s && o.reflow(this._backdrop),
                    t(this._backdrop).addClass(g),
                    !e)
                        return;
                    if (!s)
                        return void e();
                    t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(g);
                    var r = function() {
                        n._removeBackdrop(),
                        e && e()
                    };
                    o.supportsTransitionEnd() && t(this._element).hasClass(_) ? t(this._backdrop).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else
                    e && e()
            }
            ,
            p._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            p._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            p._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            p._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(m.FIXED_CONTENT).each(function(n, i) {
                        var s = t(i)[0].style.paddingRight
                          , r = t(i).css("padding-right");
                        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }),
                    t(m.STICKY_CONTENT).each(function(n, i) {
                        var s = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }),
                    t(m.NAVBAR_TOGGLER).each(function(n, i) {
                        var s = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight
                      , i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }
            ,
            p._resetScrollbar = function() {
                t(m.FIXED_CONTENT).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                }),
                t(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
            }
            ,
            p._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = u,
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            a._jQueryInterface = function(e, i) {
                return this.each(function() {
                    var s = t(this).data(n)
                      , o = r({}, a.Default, t(this).data(), "object" == typeof e && e);
                    if (s || (s = new a(this,o),
                    t(this).data(n, s)),
                    "string" == typeof e) {
                        if ("undefined" == typeof s[e])
                            throw new Error('No method named "' + e + '"');
                        s[e](i)
                    } else
                        o.show && s.show(i)
                })
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            a
        }();
        return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
            var i, s = this, a = o.getSelectorFromElement(this);
            a && (i = t(a)[0]);
            var l = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var h = t(i).one(c.SHOW, function(e) {
                e.isDefaultPrevented() || h.one(c.HIDDEN, function() {
                    t(s).is(":visible") && s.focus()
                })
            });
            p._jQueryInterface.call(t(i), l, this)
        }),
        t.fn.modal = p._jQueryInterface,
        t.fn.modal.Constructor = p,
        t.fn.modal.noConflict = function() {
            return t.fn.modal = a,
            p._jQueryInterface
        }
        ,
        p
    }(e)
      , d = function(t) {
        var e = "tooltip"
          , i = "bs.tooltip"
          , a = "." + i
          , l = t.fn[e]
          , h = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , f = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , d = "show"
          , _ = "out"
          , g = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            INSERTED: "inserted" + a,
            CLICK: "click" + a,
            FOCUSIN: "focusin" + a,
            FOCUSOUT: "focusout" + a,
            MOUSEENTER: "mouseenter" + a,
            MOUSELEAVE: "mouseleave" + a
        }
          , m = "fade"
          , p = "show"
          , v = ".tooltip-inner"
          , E = ".arrow"
          , T = "hover"
          , y = "focus"
          , C = "click"
          , I = "manual"
          , A = function() {
            function l(t, e) {
                if ("undefined" == typeof n)
                    throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var A = l.prototype;
            return A.enable = function() {
                this._isEnabled = !0
            }
            ,
            A.disable = function() {
                this._isEnabled = !1
            }
            ,
            A.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            A.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY
                          , i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(n, i)),
                        i._activeTrigger.click = !i._activeTrigger.click,
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(p))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            A.dispose = function() {
                clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            A.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !s)
                        return;
                    var r = this.getTipElement()
                      , a = o.getUID(this.constructor.NAME);
                    r.setAttribute("id", a),
                    this.element.setAttribute("aria-describedby", a),
                    this.setContent(),
                    this.config.animation && t(r).addClass(m);
                    var h = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                      , c = this._getAttachment(h);
                    this.addAttachmentClass(c);
                    var u = !1 === this.config.container ? document.body : t(this.config.container);
                    t(r).data(this.constructor.DATA_KEY, this),
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(u),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new n(this.element,r,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: E
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }),
                    t(r).addClass(p),
                    "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var f = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null,
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        n === _ && e._leave(null, e)
                    };
                    o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION) : f()
                }
            }
            ,
            A.hide = function(e) {
                var n = this
                  , i = this.getTipElement()
                  , s = t.Event(this.constructor.Event.HIDE)
                  , r = function() {
                    n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e()
                };
                t(this.element).trigger(s),
                s.isDefaultPrevented() || (t(i).removeClass(p),
                "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                this._activeTrigger[C] = !1,
                this._activeTrigger[y] = !1,
                this._activeTrigger[T] = !1,
                o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(i).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                this._hoverState = "")
            }
            ,
            A.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            A.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            A.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }
            ,
            A.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            A.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(v), this.getTitle()),
                e.removeClass(m + " " + p)
            }
            ,
            A.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }
            ,
            A.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            A._getAttachment = function(t) {
                return u[t.toUpperCase()]
            }
            ,
            A._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                    else if (n !== I) {
                        var i = n === T ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                          , s = n === T ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(s, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }),
                this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            A._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            A._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? y : T] = !0),
                t(n.getTipElement()).hasClass(p) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout),
                n._hoverState = d,
                n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === d && n.show()
                }, n.config.delay.show) : n.show())
            }
            ,
            A._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? y : T] = !1),
                n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                n._hoverState = _,
                n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === _ && n.hide()
                }, n.config.delay.hide) : n.hide())
            }
            ,
            A._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            A._getConfig = function(n) {
                return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content && (n.content = n.content.toString()),
                o.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            A._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            A._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(h);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            A._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ,
            A._fixTransition = function() {
                var e = this.getTipElement()
                  , n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(m),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = n)
            }
            ,
            l._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i)
                      , s = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new l(this,s),
                    t(this).data(i, n)),
                    "string" == typeof e)) {
                        if ("undefined" == typeof n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            s(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return f
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return a
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            l
        }();
        return t.fn[e] = A._jQueryInterface,
        t.fn[e].Constructor = A,
        t.fn[e].noConflict = function() {
            return t.fn[e] = l,
            A._jQueryInterface
        }
        ,
        A
    }(e)
      , _ = function(t) {
        var e = "popover"
          , n = "bs.popover"
          , i = "." + n
          , o = t.fn[e]
          , a = new RegExp("(^|\\s)bs-popover\\S+","g")
          , l = r({}, d.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , h = r({}, d.DefaultType, {
            content: "(string|element|function)"
        })
          , c = "fade"
          , u = "show"
          , f = ".popover-header"
          , _ = ".popover-body"
          , g = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , m = function(r) {
            function o() {
                return r.apply(this, arguments) || this
            }
            !function(t, e) {
                t.prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e
            }(o, r);
            var d = o.prototype;
            return d.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            d.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }
            ,
            d.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            d.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(f), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(_), n),
                e.removeClass(c + " " + u)
            }
            ,
            d._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            d._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , s = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new o(this,s),
                    t(this).data(n, i)),
                    "string" == typeof e)) {
                        if ("undefined" == typeof i[e])
                            throw new Error('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return h
                }
            }]),
            o
        }(d);
        return t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            m._jQueryInterface
        }
        ,
        m
    }(e)
      , g = function(t) {
        var e = "scrollspy"
          , n = "bs.scrollspy"
          , i = "." + n
          , a = t.fn[e]
          , l = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , h = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , c = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api"
        }
          , u = "dropdown-item"
          , f = "active"
          , d = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , _ = "offset"
          , g = "position"
          , m = function() {
            function a(e, n) {
                var i = this;
                this._element = e,
                this._scrollElement = "BODY" === e.tagName ? window : e,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                t(this._scrollElement).on(c.SCROLL, function(t) {
                    return i._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var m = a.prototype;
            return m.refresh = function() {
                var e = this
                  , n = this._scrollElement !== this._scrollElement.window ? g : _
                  , i = "auto" === this._config.method ? n : this._config.method
                  , s = i === g ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight();
                t.makeArray(t(this._selector)).map(function(e) {
                    var n, r = o.getSelectorFromElement(e);
                    if (r && (n = t(r)[0]),
                    n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height)
                            return [t(n)[i]().top + s, r]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            m.dispose = function() {
                t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            m._getConfig = function(n) {
                if ("string" != typeof (n = r({}, l, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = o.getUID(e),
                    t(n.target).attr("id", i)),
                    n.target = "#" + i
                }
                return o.typeCheckConfig(e, n, h),
                n
            }
            ,
            m._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            m._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            m._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            m._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var s = this._offsets.length; s--; ) {
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                    }
                }
            }
            ,
            m._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var n = this._selector.split(",");
                n = n.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass(u) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f),
                i.addClass(f)) : (i.addClass(f),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(f),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)),
                t(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            m._clear = function() {
                t(this._selector).filter(d.ACTIVE).removeClass(f)
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n);
                    if (i || (i = new a(this,"object" == typeof e && e),
                    t(this).data(n, i)),
                    "string" == typeof e) {
                        if ("undefined" == typeof i[e])
                            throw new Error('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            a
        }();
        return t(window).on(c.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--; ) {
                var i = t(e[n]);
                m._jQueryInterface.call(i, i.data())
            }
        }),
        t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            m._jQueryInterface
        }
        ,
        m
    }(e)
      , m = function(t) {
        var e = "bs.tab"
          , n = "." + e
          , i = t.fn.tab
          , r = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , a = "dropdown-menu"
          , l = "active"
          , h = "disabled"
          , c = "fade"
          , u = "show"
          , f = ".dropdown"
          , d = ".nav, .list-group"
          , _ = ".active"
          , g = "> li > .active"
          , m = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
          , p = ".dropdown-toggle"
          , v = "> .dropdown-menu .active"
          , E = function() {
            function n(t) {
                this._element = t
            }
            var i = n.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(l) || t(this._element).hasClass(h))) {
                    var n, i, s = t(this._element).closest(d)[0], a = o.getSelectorFromElement(this._element);
                    if (s) {
                        var c = "UL" === s.nodeName ? g : _;
                        i = (i = t.makeArray(t(s).find(c)))[i.length - 1]
                    }
                    var u = t.Event(r.HIDE, {
                        relatedTarget: this._element
                    })
                      , f = t.Event(r.SHOW, {
                        relatedTarget: i
                    });
                    if (i && t(i).trigger(u),
                    t(this._element).trigger(f),
                    !f.isDefaultPrevented() && !u.isDefaultPrevented()) {
                        a && (n = t(a)[0]),
                        this._activate(this._element, s);
                        var m = function() {
                            var n = t.Event(r.HIDDEN, {
                                relatedTarget: e._element
                            })
                              , s = t.Event(r.SHOWN, {
                                relatedTarget: i
                            });
                            t(i).trigger(n),
                            t(e._element).trigger(s)
                        };
                        n ? this._activate(n, n.parentNode, m) : m()
                    }
                }
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, e),
                this._element = null
            }
            ,
            i._activate = function(e, n, i) {
                var s = this
                  , r = ("UL" === n.nodeName ? t(n).find(g) : t(n).children(_))[0]
                  , a = i && o.supportsTransitionEnd() && r && t(r).hasClass(c)
                  , l = function() {
                    return s._transitionComplete(e, r, i)
                };
                r && a ? t(r).one(o.TRANSITION_END, l).emulateTransitionEnd(150) : l()
            }
            ,
            i._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(u + " " + l);
                    var s = t(n.parentNode).find(v)[0];
                    s && t(s).removeClass(l),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(l),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                o.reflow(e),
                t(e).addClass(u),
                e.parentNode && t(e.parentNode).hasClass(a)) {
                    var r = t(e).closest(f)[0];
                    r && t(r).find(p).addClass(l),
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }
            ,
            n._jQueryInterface = function(i) {
                return this.each(function() {
                    var s = t(this)
                      , r = s.data(e);
                    if (r || (r = new n(this),
                    s.data(e, r)),
                    "string" == typeof i) {
                        if ("undefined" == typeof r[i])
                            throw new Error('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }
            ,
            s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta.3"
                }
            }]),
            n
        }();
        return t(document).on(r.CLICK_DATA_API, m, function(e) {
            e.preventDefault(),
            E._jQueryInterface.call(t(this), "show")
        }),
        t.fn.tab = E._jQueryInterface,
        t.fn.tab.Constructor = E,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = i,
            E._jQueryInterface
        }
        ,
        E
    }(e);
    !function(t) {
        if ("undefined" == typeof t)
            throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = o,
    t.Alert = a,
    t.Button = l,
    t.Carousel = h,
    t.Collapse = c,
    t.Dropdown = u,
    t.Modal = f,
    t.Popover = _,
    t.Scrollspy = g,
    t.Tab = m,
    t.Tooltip = d,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.min.js.map
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
* jquery.counterup.js
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this)
              , r = n
              , i = function() {
                var e = []
                  , n = r.time / r.delay
                  , i = t.text()
                  , s = /[0-9]+,[0-9]+/.test(i);
                i = i.replace(/,/g, "");
                var o = /^[0-9]+$/.test(i)
                  , u = /^[0-9]+\.[0-9]+$/.test(i)
                  , a = u ? (i.split(".")[1] || []).length : 0;
                for (var f = n; f >= 1; f--) {
                    var l = parseInt(i / n * f);
                    u && (l = parseFloat(i / n * f).toFixed(a));
                    if (s)
                        while (/(\d+)(\d{3})/.test(l.toString()))
                            l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    e.unshift(l)
                }
                t.data("counterup-nums", e);
                t.text("0");
                var c = function() {
                    t.text(t.data("counterup-nums").shift());
                    if (t.data("counterup-nums").length)
                        setTimeout(t.data("counterup-func"), r.delay);
                    else {
                        delete t.data("counterup-nums");
                        t.data("counterup-nums", null);
                        t.data("counterup-func", null)
                    }
                };
                t.data("counterup-func", c);
                setTimeout(t.data("counterup-func"), r.delay)
            };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}
)(jQuery);

// Owl Carousel js 

!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this.drag = a.extend({}, m),
        this.state = a.extend({}, n),
        this.e = a.extend({}, o),
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._invalidated = {},
        this._pipe = [],
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    function f(a) {
        if (a.touches !== d)
            return {
                x: a.touches[0].pageX,
                y: a.touches[0].pageY
            };
        if (a.touches === d) {
            if (a.pageX !== d)
                return {
                    x: a.pageX,
                    y: a.pageY
                };
            if (a.pageX === d)
                return {
                    x: a.clientX,
                    y: a.clientY
                }
        }
    }
    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)
            if (d = f[b],
            "undefined" != typeof e.style[d])
                return e = null,
                [d, b];
        return [!1]
    }
    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }
    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }
    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }
    function k() {
        return "ontouchstart"in b || !!navigator.msMaxTouchPoints
    }
    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    },
    n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    },
    o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    },
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Plugins = {},
    e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones
              , b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(),
            this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0,
            b = Math.abs(e / 2); b > a; a++)
                e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(),
                c.pop(),
                this.$stage.children().eq(0).remove(),
                c.pop()) : (c.push(c.length / 2),
                this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")),
                c.push(d.length - 1 - (c.length - 1) / 2),
                this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [],
            b = 0,
            c = this._clones.length + this._items.length; c > b; b++)
                a = this._mergers[this.relative(b)],
                a = this.settings.mergeFit && Math.min(a, this.settings.items) || a,
                f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d,
                this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(e),
            e = {
                width: this.settings.autoWidth ? "auto" : d - this.settings.margin
            },
            e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin,
            !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                return a > 1
            }).length > 0)
                for (b = 0,
                c = this._coordinates.length; c > b; b++)
                    e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin,
                    this.$stage.children().eq(b).css(e);
            else
                this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; d > c; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass),
            this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass),
            this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }],
    e.prototype.initialize = function() {
        if (this.trigger("initialize"),
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl),
        this.browserSupport(),
        this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"),
            c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            e = this.$element.children(c).width(),
            b.length && 0 >= e)
                return this.preloadAutoWidthImages(b),
                !1
        }
        this.$element.addClass("owl-loading"),
        this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this._width = this.$element.width(),
        this.refresh(),
        this.$element.removeClass("owl-loading").addClass("owl-loaded"),
        this.eventsCall(),
        this.internalEvents(),
        this.addTriggerableEvents(),
        this.trigger("initialized")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options),
        (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }
    ,
    e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center),
        this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1),
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; c > b; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {}
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        if (0 === this._items.length)
            return !1;
        (new Date).getTime();
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$stage.addClass("owl-refresh"),
        this.update(),
        this.$stage.removeClass("owl-refresh"),
        this.state.orientation = b.orientation,
        this.watchVisibility(),
        this.trigger("refreshed")
    }
    ,
    e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this),
        this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this),
        this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this),
        this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this),
        this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this),
        this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(),
        this.invalidate("width"),
        this.refresh(),
        void this.trigger("resized")) : !1
    }
    ,
    e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }
    ,
    e.prototype.internalEvents = function() {
        var c = (k(),
        l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)),
        this.$stage.on("dragstart", function() {
            return !1
        }),
        this.$stage.get(0).onselectstart = function() {
            return !1
        }
        ) : this.$element.addClass("owl-text-select-on"),
        this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)),
        this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1),
        this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }
    ,
    e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event,
        3 === e.which || this.state.isTouch)
            return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
        this.trigger("drag"),
        this.drag.startTime = (new Date).getTime(),
        this.speed(0),
        this.state.isTouch = !0,
        this.state.isScrolling = !1,
        this.state.isSwiping = !1,
        this.drag.distance = 0,
        g = f(e).x,
        h = f(e).y,
        this.drag.offsetX = this.$stage.position().left,
        this.drag.offsetY = this.$stage.position().top,
        this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin),
        this.state.inMotion && this.support3d)
            i = this.getTransformProperty(),
            this.drag.offsetX = i,
            this.animate(i),
            this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d)
            return this.state.inMotion = !1,
            !1;
        this.drag.startX = g - this.drag.offsetX,
        this.drag.startY = h - this.drag.offsetY,
        this.drag.start = g - this.drag.startX,
        this.drag.targetEl = e.target || e.srcElement,
        this.drag.updatedX = this.drag.start,
        ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1),
        a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event,
        e = f(c).x,
        g = f(c).y,
        this.drag.currentX = e - this.drag.startX,
        this.drag.currentY = g - this.drag.startY,
        this.drag.distance = this.drag.currentX - this.drag.offsetX,
        this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"),
        this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()),
        i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()),
        j = this.settings.pullDrag ? this.drag.distance / 5 : 0,
        this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)),
        (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1,
        this.state.isSwiping = !0),
        this.drag.updatedX = this.drag.currentX,
        (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0,
        this.drag.updatedX = this.drag.start),
        this.animate(this.drag.updatedX)))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
            this.trigger("dragged"),
            this.drag.targetEl.removeAttribute("draggable"),
            this.state.isTouch = !1,
            this.state.isScrolling = !1,
            this.state.isSwiping = !1,
            0 === this.drag.distance && this.state.inMotion !== !0)
                return this.state.inMotion = !1,
                !1;
            this.drag.endTime = (new Date).getTime(),
            d = this.drag.endTime - this.drag.startTime,
            e = Math.abs(this.drag.distance),
            (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
            f = this.closest(this.drag.updatedX),
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(f),
            this.invalidate("position"),
            this.update(),
            this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(),
            this.drag.distance = 0,
            a(c).off(".owl.dragEvents")
        }
    }
    ,
    e.prototype.removeClick = function(c) {
        this.drag.targetEl = c,
        a(c).on("click.preventClick", this.e._preventClick),
        b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }
    ,
    e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1,
        b.stopPropagation && b.stopPropagation(),
        a(b.target).off("click.preventClick")
    }
    ,
    e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"),
        a = a.replace(/matrix(3d)?\(|\)/g, "").split(","),
        c = 16 === a.length,
        c !== !0 ? a[4] : a[12]
    }
    ,
    e.prototype.closest = function(b) {
        var c = -1
          , d = 30
          , e = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a),
            -1 === c
        }, this)),
        this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
        c
    }
    ,
    e.prototype.animate = function(b) {
        this.trigger("translate"),
        this.state.inMotion = this.speed() > 0,
        this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }
    ,
    e.prototype.reset = function(a) {
        a = this.normalize(a),
        a !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }
    ,
    e.prototype.relative = function(a) {
        return a = this.normalize(a),
        a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = 0, f = this.settings;
        if (a)
            return this._items.length - 1;
        if (!f.loop && f.center)
            b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center)
                b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge)
                    throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1,
                c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c); )
                    b = ++e
            }
        else
            b = this._items.length - f.items;
        return b
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0,
        c)
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current())
              , f = this.current()
              , g = this.current()
              , h = this.current() + e
              , i = 0 > g - h ? !0 : !1
              , j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length,
            this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length,
            this.reset(f)),
            b.clearTimeout(this.e._goToLoop),
            this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)),
                this.current(f + e),
                this.update()
            }, this), 30)
        } else
            this.speed(this.duration(this.current(), c, d)),
            this.current(c),
            this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1,
        void this.trigger("translated"))
    }
    ,
    e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b)
            d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth)
            d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0),
        this.trigger("add", {
            content: a,
            position: b
        }),
        0 === this._items.length || b === this._items.length ? (this.$stage.append(a),
        this._items.push(a),
        this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a),
        this._items.splice(b, 0, a),
        this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)),
        this.invalidate("items"),
        this.trigger("added", {
            content: a,
            position: b
        })
    }
    ,
    e.prototype.remove = function(a) {
        a = this.normalize(a, !0),
        a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]),
                b.apply(this, [].slice.call(arguments, 1)),
                this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }
    ,
    e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }
        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"),
            this.refresh(),
            b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"),
        b.clearInterval(this.e._checkVisibile),
        this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0,
        d = this,
        b.each(function(g, h) {
            e = a(h),
            f = new Image,
            f.onload = function() {
                c++,
                e.attr("src", f.src),
                e.css("opacity", 1),
                c >= b.length && (d.state.imagesLoaded = !0,
                d.initialize())
            }
            ,
            f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }
    ,
    e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass),
        this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
        this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins)
            this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"),
        a(c).off(".owl.dragEvents"),
        this.$stage.get(0).onselectstart = function() {}
        ,
        this.$stage.off("dragstart", function() {
            return !1
        })),
        this.$element.off(".owl"),
        this.$stage.children(".cloned").remove(),
        this.e = null,
        this.$element.removeData("owlCarousel"),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.unwrap()
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : c > a;
        case ">":
            return d ? c > a : a > c;
        case ">=":
            return d ? c >= a : a >= c;
        case "<=":
            return d ? a >= c : c >= a
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d) {
        var e = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , f = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }),
        this.$element.trigger(g),
        this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)),
        g
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.browserSupport = function() {
        if (this.support3d = j(),
        this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()],
            this.vendorName = this.transformVendor.replace(/Transform/i, ""),
            this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }
    ,
    a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this,b))
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                        this.load(b)
                    }, this); e++ < d; )
                        this.load(g / 2 + this._core.relative(f)),
                        g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        },
        this._core.options = a.extend({}, c.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    },
    c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        },
        this._core.options = a.extend({}, b.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }
    ,
    b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._fullscreen = !1,
        this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"),
                this.fetch(c, a(b.content)))
            }, this)
        },
        this._core.options = a.extend({}, d.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube"
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1))
                throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
            b.after(d),
            b.after(e)
        };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length ? (l(h.attr(i)),
        h.remove(),
        !1) : void ("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }))
    }
    ,
    d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null
    }
    ,
    d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"),
        this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
        f.addClass("owl-video-playing"),
        this._playing = f,
        d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"),
        e.after(d)
    }
    ,
    d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0),
        this._fullscreen = !0),
        d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1,
        !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation,
        !1) : !0
    }
    ,
    d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)),
            f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.transitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b,
        this.core.options = a.extend({}, d.Defaults, this.core.options),
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval),
        this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }
    ,
    d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }
    ,
    d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }
    ,
    d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }
    ,
    d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current()
                      , c = this._core.maximum()
                      , d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(),
                this._initialized = !0),
                this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation")
            }, this)
        },
        this._core.options = a.extend({}, b.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    },
    b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),
        d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)),
        this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),
        this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(c, d.dotsSpeed)
        }, this)),
        b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),
        this._controls.$next = a("<" + d.navElement + ">"),
        this._controls.$previous = this._controls.$next.clone(),
        this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)),
        this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides)
            this._core[c] = a.proxy(this[c], this)
    }
    ,
    b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    b.prototype.update = function() {
        var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
        d.dots || "page" == d.slideBy)
            for (this._pages = [],
            a = e,
            b = 0,
            c = 0; f > a; a++)
                (b >= g || 0 === b) && (this._pages.push({
                    start: a - e,
                    end: a - e + g - 1
                }),
                b = 0,
                ++c),
                b += this._core.mergers(this._core.relative(a))
    }
    ,
    b.prototype.draw = function() {
        var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(),
        this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f),
        this._controls.$next.toggleClass("disabled", f >= this._core.maximum())),
        this._controls.$previous.toggle(e.nav),
        this._controls.$next.toggle(e.nav),
        e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length,
            e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++)
                    d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else
                b > 0 ? (d = new Array(b + 1).join(this._templates[0]),
                this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"),
            this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }
    ,
    b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }
    ,
    b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        },
        this._core.options = a.extend({}, c.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1)
              , c = this._core.$stage.children()
              , d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    },
    c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

// jquery easing js
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, r, u) {
        return jQuery.easing[jQuery.easing.def](n, e, t, r, u)
    },
    easeInQuad: function(n, e, t, r, u) {
        return r * (e /= u) * e + t
    },
    easeOutQuad: function(n, e, t, r, u) {
        return -r * (e /= u) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, r, u) {
        return r * (e /= u) * e * e + t
    },
    easeOutCubic: function(n, e, t, r, u) {
        return r * ((e = e / u - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, r, u) {
        return r * (e /= u) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, r, u) {
        return -r * ((e = e / u - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, r, u) {
        return r * (e /= u) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, r, u) {
        return r * ((e = e / u - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, r, u) {
        return -r * Math.cos(e / u * (Math.PI / 2)) + r + t
    },
    easeOutSine: function(n, e, t, r, u) {
        return r * Math.sin(e / u * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, r, u) {
        return -r / 2 * (Math.cos(Math.PI * e / u) - 1) + t
    },
    easeInExpo: function(n, e, t, r, u) {
        return 0 == e ? t : r * Math.pow(2, 10 * (e / u - 1)) + t
    },
    easeOutExpo: function(n, e, t, r, u) {
        return e == u ? t + r : r * (-Math.pow(2, -10 * e / u) + 1) + t
    },
    easeInOutExpo: function(n, e, t, r, u) {
        return 0 == e ? t : e == u ? t + r : (e /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function(n, e, t, r, u) {
        return -r * (Math.sqrt(1 - (e /= u) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, r, u) {
        return r * Math.sqrt(1 - (e = e / u - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, r, u) {
        var a = 1.70158
          , i = 0
          , s = r;
        if (0 == e)
            return t;
        if (1 == (e /= u))
            return t + r;
        if (i || (i = .3 * u),
        s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else
            var a = i / (2 * Math.PI) * Math.asin(r / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function(n, e, t, r, u) {
        var a = 1.70158
          , i = 0
          , s = r;
        if (0 == e)
            return t;
        if (1 == (e /= u))
            return t + r;
        if (i || (i = .3 * u),
        s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else
            var a = i / (2 * Math.PI) * Math.asin(r / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * u - a) * (2 * Math.PI) / i) + r + t
    },
    easeInOutElastic: function(n, e, t, r, u) {
        var a = 1.70158
          , i = 0
          , s = r;
        if (0 == e)
            return t;
        if (2 == (e /= u / 2))
            return t + r;
        if (i || (i = u * (.3 * 1.5)),
        s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else
            var a = i / (2 * Math.PI) * Math.asin(r / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i) * .5 + r + t
    },
    easeInBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158),
        r * (e /= u) * e * ((a + 1) * e - a) + t
    },
    easeOutBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158),
        r * ((e = e / u - 1) * e * ((a + 1) * e + a) + 1) + t
    },
    easeInOutBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158),
        (e /= u / 2) < 1 ? r / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + t : r / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + t
    },
    easeInBounce: function(n, e, t, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - e, 0, r, u) + t
    },
    easeOutBounce: function(n, e, t, r, u) {
        return (e /= u) < 1 / 2.75 ? r * (7.5625 * e * e) + t : 2 / 2.75 > e ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, r, u) {
        return u / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, r, u) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - u, 0, r, u) + .5 * r + t
    }
});

// Waypoints js
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t)
                return e
        }
        return -1
    }
      , e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    }
    )(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        }
                        ;
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        }
                        ;
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }
            ;
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            }
            ;
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            }
            ;
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            }
            ;
            t.prototype.disable = function() {
                return this.enabled = false
            }
            ;
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            }
            ;
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            }
            ;
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            }
            ;
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t,r,e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0],
            t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        }
        ;
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0],
            t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        }
        ;
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}
).call(this);

// Magnific-popup js
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});

// Scrollup js
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
(function($, window, document) {
    'use strict';
    // Main function
    $.fn.scrollUp = function(options) {
        // Ensure that only one scrollUp exists
        if (!$.data(document.body, 'scrollUp')) {
            $.data(document.body, 'scrollUp', true);
            $.fn.scrollUp.init(options);
        }
    }
    ;
    // Init
    $.fn.scrollUp.init = function(options) {
        // Define vars
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options), triggerVisible = false, animIn, animOut, animSpeed, scrollDis, scrollEvent, scrollTarget, $self;
        // Create element
        if (o.scrollTrigger) {
            $self = $(o.scrollTrigger);
        } else {
            $self = $('<a/>', {
                id: o.scrollName,
                href: '#top'
            });
        }
        // Set scrollTitle if there is one
        if (o.scrollTitle) {
            $self.attr('title', o.scrollTitle);
        }
        $self.appendTo('body');
        // If not using an image display text
        if (!(o.scrollImg || o.scrollTrigger)) {
            $self.html(o.scrollText);
        }
        // Minimum CSS to make the magic happen
        $self.css({
            display: 'none',
            position: 'fixed',
            zIndex: o.zIndex
        });
        // Active point overlay
        if (o.activeOverlay) {
            $('<div/>', {
                id: o.scrollName + '-active'
            }).css({
                position: 'absolute',
                'top': o.scrollDistance + 'px',
                width: '100%',
                borderTop: '1px dotted' + o.activeOverlay,
                zIndex: o.zIndex
            }).appendTo('body');
        }
        // Switch animation type
        switch (o.animation) {
        case 'fade':
            animIn = 'fadeIn';
            animOut = 'fadeOut';
            animSpeed = o.animationSpeed;
            break;
        case 'slide':
            animIn = 'slideDown';
            animOut = 'slideUp';
            animSpeed = o.animationSpeed;
            break;
        default:
            animIn = 'show';
            animOut = 'hide';
            animSpeed = 0;
        }
        // If from top or bottom
        if (o.scrollFrom === 'top') {
            scrollDis = o.scrollDistance;
        } else {
            scrollDis = $(document).height() - $(window).height() - o.scrollDistance;
        }
        // Scroll function
        scrollEvent = $(window).scroll(function() {
            if ($(window).scrollTop() > scrollDis) {
                if (!triggerVisible) {
                    $self[animIn](animSpeed);
                    triggerVisible = true;
                }
            } else {
                if (triggerVisible) {
                    $self[animOut](animSpeed);
                    triggerVisible = false;
                }
            }
        });
        if (o.scrollTarget) {
            if (typeof o.scrollTarget === 'number') {
                scrollTarget = o.scrollTarget;
            } else if (typeof o.scrollTarget === 'string') {
                scrollTarget = Math.floor($(o.scrollTarget).offset().top);
            }
        } else {
            scrollTarget = 0;
        }
        // To the top
        $self.click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: scrollTarget
            }, o.scrollSpeed, o.easingType);
        });
    }
    ;
    // Defaults
    $.fn.scrollUp.defaults = {
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'easeOutElastic',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationSpeed: 200,
        // Animation in speed (ms)
        scrollTrigger: false,
        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,
        // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Scroll to top',
        // Text for element, can contain HTML
        scrollTitle: false,
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    };
    // Destroy scrollUp plugin and clean all modifications to the DOM
    $.fn.scrollUp.destroy = function(scrollEvent) {
        $.removeData(document.body, 'scrollUp');
        $('#' + $.fn.scrollUp.settings.scrollName).remove();
        $('#' + $.fn.scrollUp.settings.scrollName + '-active').remove();
        // If 1.7 or above use the new .off()
        if ($.fn.jquery.split('.')[1] >= 7) {
            $(window).off('scroll', scrollEvent);
            // Else use the old .unbind()
        } else {
            $(window).unbind('scroll', scrollEvent);
        }
    }
    ;
    $.scrollUp = $.fn.scrollUp;
}
)(jQuery, window, document);

// WOW js

/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);

/*Credits: 
 * https://www.developphp.com/video/JavaScript/Circular-Progress-Loader-Canvas-JavaScript-Programming-Tutorial
 */

(function() {
    var Progress = function(element) {
        this.context = element.getContext("2d");
        this.refElement = element.parentNode;
        this.loaded = 0;
        this.start = 4.72;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.total = parseInt(this.refElement.dataset.percent, 10);
        this.timer = null;
        this.diff = 0;
        this.init();
    };
    Progress.prototype = {
        init: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.run();
            }, 25);
        },
        run: function() {
            var self = this;
            self.diff = ((self.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
            self.context.clearRect(0, 0, self.width, self.height);
            self.context.lineWidth = 5;
            self.context.fillStyle = "#000000";
            self.context.strokeStyle = "#006cff";
            self.context.textAlign = "center";
            self.context.fillText(self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width);
            self.context.beginPath();
            self.context.arc(50, 50, 45, self.start, self.diff / 10 + self.start, false);
            self.context.stroke();
            if (self.loaded >= self.total) {
                clearInterval(self.timer);
            }
            self.loaded++;
        }
    };
    var CircularSkillBar = function(elements) {
        this.bars = document.querySelectorAll(elements);
        if (this.bars.length > 0) {
            this.init();
        }
    };
    CircularSkillBar.prototype = {
        init: function() {
            this.tick = 25;
            this.progress();
        },
        progress: function() {
            var self = this;
            var index = 0;
            var firstCanvas = self.bars[0].querySelector("canvas");
            var firstProg = new Progress(firstCanvas);
            var timer = setInterval(function() {
                index++;
                var canvas = self.bars[index].querySelector("canvas");
                var prog = new Progress(canvas);
                if (index == self.bars.length) {
                    clearInterval(timer);
                }
            }, self.tick * 100);
        }
    };
    document.addEventListener("DOMContentLoaded", function() {
        var circularBars = new CircularSkillBar(".single-pie-bar");
    });
}
)();

// Imageloaded
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0
              , o = i[n];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o; ) {
                var s = r && r[o];
                s && (this.off(e, o),
                delete r[o]),
                o.apply(this, t),
                n += s ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }
    ,
    t.allOff = t.removeAllListeners = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        var t = [];
        if (Array.isArray(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var i = 0; i < e.length; i++)
                t.push(e[i]);
        else
            t.push(e);
        return t
    }
    function o(e, t, r) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = n(e),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new o(e,t,r)
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});

// Isotope 
/*!
 * Isotope PACKAGED v3.0.2
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }),
            void 0 !== o ? o : t
        }
        function h(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                o._init()) : (o = new s(n,e),
                a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o; ) {
                var r = s && s[o];
                r && (this.off(t, o),
                delete s[o]),
                o.apply(this, e),
                n += r ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width),
            i.removeChild(e)
        }
    }
    function s(e) {
        if (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , I = a.borderTopWidth + a.borderBottomWidth
              , z = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + I),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ,
    i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                    o.push(i[s])
            }
        }),
        o
    }
    ,
    i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments
              , s = this;
            this[o] = setTimeout(function() {
                n.apply(s, e),
                delete s[o]
            }, i || 100)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function n(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = n.prototype = Object.create(t.prototype);
    d.constructor = n,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , o = t[i ? "top" : "bottom"]
          , s = this.layout.size
          , r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10)
          , a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r,
        a = isNaN(a) ? 0 : a,
        r -= e ? s.paddingLeft : s.paddingRight,
        a -= i ? s.paddingTop : s.paddingBottom,
        this.position.x = r,
        this.position.y = a
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , o = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[o];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = n ? "paddingTop" : "paddingBottom"
          , h = n ? "top" : "bottom"
          , d = n ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , o = parseInt(t, 10)
          , s = parseInt(e, 10)
          , r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e),
        r && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i
          , u = e - n
          , h = {};
        h.transform = this.getTranslate(a, u),
        this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = n ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , n = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[n]),
            n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this),
                delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o,
        f[o] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , n = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = o,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    n.extend(c, e.prototype),
    c.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = e[o]
              , r = new i(s,this);
            n.push(r)
        }
        return n
    }
    ,
    c._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
        this[t] = n ? i(n)[e] : o) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            r++,
            r == s && i()
        }
        var o = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var o = h.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = n.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , n = this._boundingRect
          , o = i(t)
          , s = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = n.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(o),
        n.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        n.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    }
    ;
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var n = i.prototype
      , o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    n.getSegmentSize = function(t, e) {
        var i = t + e
          , n = "outer" + e;
        if (this._getMeasurement(i, n),
        !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }
    ,
    n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    n.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n),
        o.prototype.constructor = o,
        e && (o.options = e),
        o.prototype.namespace = t,
        i.modes[t] = o,
        o
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth",
    i.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    i.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , o = this.containerWidth + this.gutter
          , s = o / n
          , r = n - o % n
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , n = e(i);
        this.containerWidth = n && n.innerWidth
    }
    ,
    i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
            x: this.columnWidth * r,
            y: s
        }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++)
            this.colYs[r + d] = u;
        return a
    }
    ,
    i.prototype._getColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }
    ,
    i.prototype._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , o = this._getOption("originLeft")
          , s = o ? n.left : n.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , n = i.prototype
      , o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        n
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var s = t[o]
                  , r = i.sortData[s]
                  , a = n.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            n = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return n(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var n = t[i];
            n.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , n = i[0]
              , o = n.match(/^\[(.+)\]$/)
              , s = o && o[1]
              , r = e(s, n)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory)
              , i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i),
            t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; i < o; i++)
                n = e[i],
                this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; i < o; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < o; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var s = e[n];
            o.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i,
        n
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});

/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var o = !1
      , t = !1
      , r = 0
      , i = 2e3
      , s = 0
      , n = e
      , l = document
      , a = window
      , c = n(a)
      , d = []
      , u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1
      , h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
    if (u)
        a.cancelAnimationFrame || (h = function(e) {}
        );
    else {
        var p = 0;
        u = function(e, o) {
            var t = (new Date).getTime()
              , r = Math.max(0, 16 - (t - p))
              , i = a.setTimeout(function() {
                e(t + r)
            }, r);
            return p = t + r,
            i
        }
        ,
        h = function(e) {
            a.clearTimeout(e)
        }
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1
      , f = Date.now || function() {
        return (new Date).getTime()
    }
      , g = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 27,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
            var e = l.currentScript || function() {
                var e = l.getElementsByTagName("script");
                return !!e.length && e[e.length - 1]
            }()
              , o = e ? e.src.split("?")[0] : "";
            return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1
    }
      , v = !1
      , w = function() {
        if (v)
            return v;
        var e = l.createElement("DIV")
          , o = e.style
          , t = navigator.userAgent
          , r = navigator.platform
          , i = {};
        return i.haspointerlock = "pointerLockElement"in l || "webkitPointerLockElement"in l || "mozPointerLockElement"in l,
        i.isopera = "opera"in a,
        i.isopera12 = i.isopera && "getUserMedia"in navigator,
        i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini),
        i.isie = "all"in l && "attachEvent"in e && !i.isopera,
        i.isieold = i.isie && !("msInterpolationMode"in o),
        i.isie7 = i.isie && !i.isieold && (!("documentMode"in l) || 7 === l.documentMode),
        i.isie8 = i.isie && "documentMode"in l && 8 === l.documentMode,
        i.isie9 = i.isie && "performance"in a && 9 === l.documentMode,
        i.isie10 = i.isie && "performance"in a && 10 === l.documentMode,
        i.isie11 = "msRequestFullscreen"in e && l.documentMode >= 11,
        i.ismsedge = "msCredentials"in a,
        i.ismozilla = "MozAppearance"in o,
        i.iswebkit = !i.ismsedge && "WebkitAppearance"in o,
        i.ischrome = i.iswebkit && "chrome"in a,
        i.ischrome38 = i.ischrome && "touchAction"in o,
        i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock,
        i.ischrome26 = !i.ischrome38 && i.ischrome && "transition"in o,
        i.cantouch = "ontouchstart"in l.documentElement || "ontouchstart"in a,
        i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1),
        i.ismac = /^mac$/i.test(r),
        i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r),
        i.isios4 = i.isios && !("seal"in Object),
        i.isios7 = i.isios && "webkitHidden"in l,
        i.isios8 = i.isios && "hidden"in l,
        i.isios10 = i.isios && a.Proxy,
        i.isandroid = /android/i.test(t),
        i.haseventlistener = "addEventListener"in e,
        i.trstyle = !1,
        i.hastransform = !1,
        i.hastranslate3d = !1,
        i.transitionstyle = !1,
        i.hastransition = !1,
        i.transitionend = !1,
        i.trstyle = "transform",
        i.hastransform = "transform"in o || function() {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++)
                if (void 0 !== o[e[t]]) {
                    i.trstyle = e[t];
                    break
                }
            i.hastransform = !!i.trstyle
        }(),
        i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)",
        i.hastranslate3d = /translate3d/.test(o[i.trstyle])),
        i.transitionstyle = "transition",
        i.prefixstyle = "",
        i.transitionend = "transitionend",
        i.hastransition = "transition"in o || function() {
            i.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++)
                if (e[s]in o) {
                    i.transitionstyle = e[s],
                    i.prefixstyle = t[s],
                    i.transitionend = r[s];
                    break
                }
            i.ischrome26 && (i.prefixstyle = t[1]),
            i.hastransition = i.transitionstyle
        }(),
        i.cursorgrabvalue = function() {
            var e = ["grab", "-webkit-grab", "-moz-grab"];
            (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
            for (var t = 0, r = e.length; t < r; t++) {
                var s = e[t];
                if (o.cursor = s,
                o.cursor == s)
                    return s
            }
            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(),
        i.hasmousecapture = "setCapture"in e,
        i.hasMutationObserver = !1 !== m,
        e = null,
        v = i,
        i
    }
      , b = function(e, p) {
        function v() {
            var e = T.doc.css(P.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function b() {
            var e = T.win;
            if ("zIndex"in e)
                return e.zIndex();
            for (; e.length > 0; ) {
                if (9 == e[0].nodeType)
                    return !1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 !== o)
                    return parseInt(o);
                e = e.parent()
            }
            return !1
        }
        function x(e, o, t) {
            var r = e.css(o)
              , i = parseFloat(r);
            if (isNaN(i)) {
                var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                return T.isie8 && i && (i += 1),
                s ? i : 0
            }
            return i
        }
        function S(e, o, t, r) {
            T._bind(e, o, function(r) {
                var i = {
                    original: r = r || a.event,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX),
                r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY),
                !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail,
                t.call(e, i)
            }, r)
        }
        function z(e, o, t, r) {
            T.scrollrunning || (T.newscrolly = T.getScrollTop(),
            T.newscrollx = T.getScrollLeft(),
            D = f());
            var i = f() - D;
            if (D = f(),
            i > 350 ? A = 1 : A += (2 - A) / 10,
            e = e * A | 0,
            o = o * A | 0,
            e) {
                if (r)
                    if (e < 0) {
                        if (T.getScrollLeft() >= T.page.maxw)
                            return !0
                    } else if (T.getScrollLeft() <= 0)
                        return !0;
                var s = e > 0 ? 1 : -1;
                X !== s && (T.scrollmom && T.scrollmom.stop(),
                T.newscrollx = T.getScrollLeft(),
                X = s),
                T.lastdeltax -= e
            }
            if (o) {
                if (function() {
                    var e = T.getScrollTop();
                    if (o < 0) {
                        if (e >= T.page.maxh)
                            return !0
                    } else if (e <= 0)
                        return !0
                }()) {
                    if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive)
                        return !0;
                    var n = T.view.h >> 1;
                    T.newscrolly < -n ? (T.newscrolly = -n,
                    o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n,
                    o = 1) : o = 0
                }
                var l = o > 0 ? 1 : -1;
                B !== l && (T.scrollmom && T.scrollmom.stop(),
                T.newscrolly = T.getScrollTop(),
                B = l),
                T.lastdeltay -= o
            }
            (o || e) && T.synched("relativexy", function() {
                var e = T.lastdeltay + T.newscrolly;
                T.lastdeltay = 0;
                var o = T.lastdeltax + T.newscrollx;
                T.lastdeltax = 0,
                T.rail.drag || T.doScrollPos(o, e)
            })
        }
        function k(e, o, t) {
            var r, i;
            return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0,
            i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0,
            i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0),
            o && M.oneaxismousemode && 0 === r && i && (r = i,
            i = 0,
            t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r,
            r = 0)),
            T.isrtlmode && (r = -r),
            z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1,
            e.stopImmediatePropagation(),
            e.preventDefault()))
        }
        var T = this;
        this.version = "3.7.6",
        this.name = "nicescroll",
        this.me = p;
        var E = n("body")
          , M = this.opt = {
            doc: E,
            win: !1
        };
        if (n.extend(M, g),
        M.snapbackspeed = 80,
        e)
            for (var L in M)
                void 0 !== e[L] && (M[L] = e[L]);
        if (M.disablemutationobserver && (m = !1),
        this.doc = M.doc,
        this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "",
        this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName),
        this.haswrapper = !1 !== M.win,
        this.win = M.win || (this.ispage ? c : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? c : this.win,
        this.body = E,
        this.viewport = !1,
        this.isfixed = !1,
        this.iframe = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != M.autohidemode,
        this.onmousedown = !1,
        this.onmouseup = !1,
        this.onmousemove = !1,
        this.onmousewheel = !1,
        this.onkeypress = !1,
        this.ongesturezoom = !1,
        this.onclick = !1,
        this.onscrollstart = !1,
        this.onscrollend = !1,
        this.onscrollcancel = !1,
        this.onzoomin = !1,
        this.onzoomout = !1,
        this.view = !1,
        this.page = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        "auto" == M.rtlmode) {
            var C = this.win[0] == a ? this.body : this.win
              , N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
            "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"),
            this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N,
            this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
        } else
            this.isrtlmode = !0 === M.rtlmode,
            this.isvertical = !1;
        if (this.scrollrunning = !1,
        this.scrollmom = !1,
        this.observer = !1,
        this.observerremover = !1,
        this.observerbody = !1,
        !1 !== M.scrollbarid)
            this.id = M.scrollbarid;
        else
            do {
                this.id = "ascrail" + i++
            } while (l.getElementById(this.id));
        this.rail = !1,
        this.cursor = !1,
        this.cursorfreezed = !1,
        this.selectiondrag = !1,
        this.zoom = !1,
        this.zoomactive = !1,
        this.hasfocus = !1,
        this.hasmousefocus = !1,
        this.railslocked = !1,
        this.locked = !1,
        this.hidden = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = M.overflowx,
        this.overflowy = M.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltax = 0,
        this.lastdeltay = 0,
        this.detected = w();
        var P = n.extend({}, this.detected);
        this.canhwscroll = P.hastransform && M.hwacceleration,
        this.ishwscroll = this.canhwscroll && T.haswrapper,
        this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1,
        this.istouchcapable = !1,
        P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0,
        M.enablemouselockapi || (P.hasmousecapture = !1,
        P.haspointerlock = !1),
        this.debounced = function(e, o, t) {
            T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
                h: u(function() {
                    T.delaylist[e].fn.call(T),
                    T.delaylist[e] = !1
                }, t)
            },
            o.call(T)),
            T.delaylist[e].fn = o)
        }
        ,
        this.synched = function(e, o) {
            T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o,
            u(function() {
                T && (T.synclist[e] && T.synclist[e].call(T),
                T.synclist[e] = null)
            }))
        }
        ,
        this.unsynched = function(e) {
            T.synclist[e] && (T.synclist[e] = !1)
        }
        ,
        this.css = function(e, o) {
            for (var t in o)
                T.saved.css.push([e, t, e.css(t)]),
                e.css(t, o[t])
        }
        ,
        this.scrollTop = function(e) {
            return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
        }
        ,
        this.scrollLeft = function(e) {
            return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
        }
        ;
        var R = function(e, o, t, r, i, s, n) {
            this.st = e,
            this.ed = o,
            this.spd = t,
            this.p1 = r || 0,
            this.p2 = i || 1,
            this.p3 = s || 0,
            this.p4 = n || 1,
            this.ts = f(),
            this.df = o - e
        };
        if (R.prototype = {
            B2: function(e) {
                return 3 * (1 - e) * (1 - e) * e
            },
            B3: function(e) {
                return 3 * (1 - e) * e * e
            },
            B4: function(e) {
                return e * e * e
            },
            getPos: function() {
                return (f() - this.ts) / this.spd
            },
            getNow: function() {
                var e = (f() - this.ts) / this.spd
                  , o = this.B2(e) + this.B3(e) + this.B4(e);
                return e >= 1 ? this.ed : this.st + this.df * o | 0
            },
            update: function(e, o) {
                return this.st = this.getNow(),
                this.ed = e,
                this.spd = o,
                this.ts = f(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            },
            P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
            this.getScrollTop = function(e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[13] : -o[5];
                    if (T.timerscroll && T.timerscroll.bz)
                        return T.timerscroll.bz.getNow()
                }
                return T.doc.translate.y
            }
            ,
            this.getScrollLeft = function(e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[12] : -o[4];
                    if (T.timerscroll && T.timerscroll.bh)
                        return T.timerscroll.bh.getNow()
                }
                return T.doc.translate.x
            }
            ,
            this.notifyScrollEvent = function(e) {
                var o = l.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !1, a, 1),
                o.niceevent = !0,
                e.dispatchEvent(o)
            }
            ;
            var _ = this.isrtlmode ? 1 : -1;
            P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function(e, o) {
                T.doc.translate.y = e,
                T.doc.translate.ty = -1 * e + "px",
                T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                T.doc.translate.x = e,
                T.doc.translate.tx = e * _ + "px",
                T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ) : (this.setScrollTop = function(e, o) {
                T.doc.translate.y = e,
                T.doc.translate.ty = -1 * e + "px",
                T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                T.doc.translate.x = e,
                T.doc.translate.tx = e * _ + "px",
                T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"),
                o || T.notifyScrollEvent(T.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return T.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(e) {
                T.docscroll.scrollTop(e)
            }
            ,
            this.getScrollLeft = function() {
                return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(e) {
                return setTimeout(function() {
                    if (T)
                        return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e),
                        T.docscroll.scrollLeft(e)
                }, 1)
            }
            ;
        this.getTarget = function(e) {
            return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }
        ,
        this.hasParent = function(e, o) {
            if (!e)
                return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
                t = t.parentNode || !1;
            return !1 !== t
        }
        ;
        var I = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getDocumentScrollOffset = function() {
            return {
                top: a.pageYOffset || l.documentElement.scrollTop,
                left: a.pageXOffset || l.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            if (T.isfixed) {
                var e = T.win.offset()
                  , o = T.getDocumentScrollOffset();
                return e.top -= o.top,
                e.left -= o.left,
                e
            }
            var t = T.win.offset();
            if (!T.viewport)
                return t;
            var r = T.viewport.offset();
            return {
                top: t.top - r.top,
                left: t.left - r.left
            }
        }
        ,
        this.updateScrollBar = function(e) {
            var o, t;
            if (T.ishwscroll)
                T.rail.css({
                    height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
                }),
                T.railh && T.railh.css({
                    width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
                });
            else {
                var r = T.getOffset();
                if (o = {
                    top: r.top,
                    left: r.left - (M.railpadding.left + M.railpadding.right)
                },
                o.top += x(T.win, "border-top-width", !0),
                o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"),
                (t = M.railoffset) && (t.top && (o.top += t.top),
                t.left && (o.left += t.left)),
                T.railslocked || T.rail.css({
                    top: o.top,
                    left: o.left,
                    height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
                }),
                T.zoom && T.zoom.css({
                    top: o.top + 1,
                    left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
                }),
                T.railh && !T.railslocked) {
                    o = {
                        top: r.top,
                        left: r.left
                    },
                    (t = M.railhoffset) && (t.top && (o.top += t.top),
                    t.left && (o.left += t.left));
                    var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0)
                      , s = o.left + x(T.win, "border-left-width");
                    T.railh.css({
                        top: i - (M.railpadding.top + M.railpadding.bottom),
                        left: s,
                        width: T.railh.width
                    })
                }
            }
        }
        ,
        this.doRailClick = function(e, o, t) {
            var r, i, s, n;
            T.railslocked || (T.cancelEvent(e),
            "pageY"in e || (e.pageX = e.clientX + l.documentElement.scrollLeft,
            e.pageY = e.clientY + l.documentElement.scrollTop),
            o ? (r = t ? T.doScrollLeft : T.doScrollTop,
            s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y,
            T.unsynched("relativexy"),
            r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy,
            s = t ? T.scroll.x : T.scroll.y,
            n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top,
            i = t ? T.view.w : T.view.h,
            r(s >= n ? i : -i)))
        }
        ,
        T.newscrolly = T.newscrollx = 0,
        T.hasanimationframe = "requestAnimationFrame"in a,
        T.hascancelanimationframe = "cancelAnimationFrame"in a,
        T.hasborderbox = !1,
        this.init = function() {
            if (T.saved.css = [],
            P.isoperamini)
                return !0;
            if (P.isandroid && !("hidden"in l))
                return !0;
            M.emulatetouch = M.emulatetouch || M.touchbehavior,
            T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
            var e = {
                "overflow-y": "hidden"
            };
            if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"),
            T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"),
            P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)),
            T.zindex = "auto",
            T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto",
            !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex),
            T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"),
            !T.ispage || !P.isieold) {
                var i = T.docscroll;
                T.ispage && (i = T.haswrapper ? T.win : T.doc),
                T.css(i, e),
                T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e),
                !P.isios || T.ispage || T.haswrapper || T.css(E, {
                    "-webkit-overflow-scrolling": "touch"
                });
                var d = n(l.createElement("div"));
                d.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: M.cursorwidth,
                    height: 0,
                    "background-color": M.cursorcolor,
                    border: M.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }),
                d.addClass("nicescroll-cursors"),
                T.cursor = d;
                var u = n(l.createElement("div"));
                u.attr("id", T.id),
                u.addClass("nicescroll-rails nicescroll-rails-vr");
                var h, p, f = ["left", "right", "top", "bottom"];
                for (var g in f)
                    p = f[g],
                    (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
                u.append(d),
                u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()),
                u.css({
                    width: u.width + "px",
                    zIndex: T.zindex,
                    background: M.background,
                    cursor: "default"
                }),
                u.visibility = !0,
                u.scrollable = !0,
                u.align = "left" == M.railalign ? 0 : 1,
                T.rail = u,
                T.rail.drag = !1;
                var v = !1;
                !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"),
                T.bind(v, "click", T.doZoom),
                T.bind(v, "mouseenter", function() {
                    T.zoom.css("opacity", M.cursoropacitymax)
                }),
                T.bind(v, "mouseleave", function() {
                    T.zoom.css("opacity", M.cursoropacitymin)
                }),
                T.zoom = n(v),
                T.zoom.css({
                    cursor: "pointer",
                    zIndex: T.zindex,
                    backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0 0"
                }),
                M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom),
                P.cantouch && M.gesturezoom && (T.ongesturezoom = function(e) {
                    return e.scale > 1.5 && T.doZoomIn(e),
                    e.scale < .8 && T.doZoomOut(e),
                    T.cancelEvent(e)
                }
                ,
                T.bind(T.win, "gestureend", T.ongesturezoom))),
                T.railh = !1;
                var w;
                if (M.horizrailenabled && (T.css(i, {
                    overflowX: "hidden"
                }),
                (d = n(l.createElement("div"))).css({
                    position: "absolute",
                    top: 0,
                    height: M.cursorwidth,
                    width: 0,
                    backgroundColor: M.cursorcolor,
                    border: M.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }),
                P.isieold && d.css("overflow", "hidden"),
                d.addClass("nicescroll-cursors"),
                T.cursorh = d,
                (w = n(l.createElement("div"))).attr("id", T.id + "-hr"),
                w.addClass("nicescroll-rails nicescroll-rails-hr"),
                w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()),
                w.css({
                    height: w.height + "px",
                    zIndex: T.zindex,
                    background: M.background
                }),
                w.append(d),
                w.visibility = !0,
                w.scrollable = !0,
                w.align = "top" == M.railvalign ? 0 : 1,
                T.railh = w,
                T.railh.drag = !1),
                T.ispage)
                    u.css({
                        position: "fixed",
                        top: 0,
                        height: "100%"
                    }),
                    u.css(u.align ? {
                        right: 0
                    } : {
                        left: 0
                    }),
                    T.body.append(u),
                    T.railh && (w.css({
                        position: "fixed",
                        left: 0,
                        width: "100%"
                    }),
                    w.css(w.align ? {
                        bottom: 0
                    } : {
                        top: 0
                    }),
                    T.body.append(w));
                else {
                    if (T.ishwscroll) {
                        "static" == T.win.css("position") && T.css(T.win, {
                            position: "relative"
                        });
                        var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                        n(x).scrollTop(0).scrollLeft(0),
                        T.zoom && (T.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": u.width + 4
                        }),
                        x.append(T.zoom)),
                        u.css({
                            position: "absolute",
                            top: 0
                        }),
                        u.css(u.align ? {
                            right: 0
                        } : {
                            left: 0
                        }),
                        x.append(u),
                        w && (w.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }),
                        w.css(w.align ? {
                            bottom: 0
                        } : {
                            top: 0
                        }),
                        x.append(w))
                    } else {
                        T.isfixed = "fixed" == T.win.css("position");
                        var S = T.isfixed ? "fixed" : "absolute";
                        T.isfixed || (T.viewport = T.getViewport(T.win[0])),
                        T.viewport && (T.body = T.viewport,
                        /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
                            position: "relative"
                        })),
                        u.css({
                            position: S
                        }),
                        T.zoom && T.zoom.css({
                            position: S
                        }),
                        T.updateScrollBar(),
                        T.body.append(u),
                        T.zoom && T.body.append(T.zoom),
                        T.railh && (w.css({
                            position: S
                        }),
                        T.body.append(w))
                    }
                    P.isios && T.css(T.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }),
                    M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"),
                    P.iswebkit && T.win.css("outline", "none"))
                }
                if (!1 === M.autohidemode ? (T.autohidedom = !1,
                T.rail.css({
                    opacity: M.cursoropacitymax
                }),
                T.railh && T.railh.css({
                    opacity: M.cursoropacitymax
                })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail),
                P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)),
                T.railh && (T.autohidedom = T.autohidedom.add(T.railh)),
                T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail),
                T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor),
                T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1,
                T.hide(),
                T.railslocked = !1),
                P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                    T.scrollmom = new y(T);
                    T.ontouchstart = function(e) {
                        if (T.locked)
                            return !1;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return !1;
                        if (T.hasmoving = !1,
                        T.scrollmom.timer && (T.triggerScrollEnd(),
                        T.scrollmom.stop()),
                        !T.railslocked) {
                            var o = T.getTarget(e);
                            if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type))
                                return T.stopPropagation(e);
                            var t = "mousedown" === e.type;
                            if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                            e.clientY = e.changedTouches[0].clientY),
                            T.forcescreen) {
                                var r = e;
                                (e = {
                                    original: e.original ? e.original : e
                                }).clientX = r.screenX,
                                e.clientY = r.screenY
                            }
                            if (T.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                st: T.getScrollTop(),
                                sl: T.getScrollLeft(),
                                pt: 2,
                                dl: !1,
                                tg: o
                            },
                            T.ispage || !M.directionlockdeadzone)
                                T.rail.drag.dl = "f";
                            else {
                                var i = {
                                    w: c.width(),
                                    h: c.height()
                                }
                                  , s = T.getContentSize()
                                  , l = s.h - i.h
                                  , a = s.w - i.w;
                                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                            }
                            if (M.emulatetouch && T.isiframe && P.isie) {
                                var d = T.win.position();
                                T.rail.drag.x += d.left,
                                T.rail.drag.y += d.top
                            }
                            if (T.hasmoving = !1,
                            T.lastmouseup = !1,
                            T.scrollmom.reset(e.clientX, e.clientY),
                            o && t) {
                                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))
                                    return P.hasmousecapture && o.setCapture(),
                                    M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick,
                                    o.onclick = function(e) {
                                        if (T.hasmoving)
                                            return !1;
                                        o._onclick.call(this, e)
                                    }
                                    ),
                                    T.cancelEvent(e)) : T.stopPropagation(e);
                                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                                    tg: o,
                                    click: !1
                                })
                            }
                        }
                    }
                    ,
                    T.ontouchend = function(e) {
                        if (!T.rail.drag)
                            return !0;
                        if (2 == T.rail.drag.pt) {
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                return !1;
                            T.rail.drag = !1;
                            var o = "mouseup" === e.type;
                            if (T.hasmoving && (T.scrollmom.doMomentum(),
                            T.lastmouseup = !0,
                            T.hideCursor(),
                            P.hasmousecapture && l.releaseCapture(),
                            o))
                                return T.cancelEvent(e)
                        } else if (1 == T.rail.drag.pt)
                            return T.onmouseup(e)
                    }
                    ;
                    var z = M.emulatetouch && T.isiframe && !P.hasmousecapture
                      , k = .3 * M.directionlockdeadzone | 0;
                    T.ontouchmove = function(e, o) {
                        if (!T.rail.drag)
                            return !0;
                        if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1)
                            return !0;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return !0;
                        if (2 == T.rail.drag.pt) {
                            "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                            e.clientY = e.changedTouches[0].clientY);
                            var t, r;
                            if (r = t = 0,
                            z && !o) {
                                var i = T.win.position();
                                r = -i.left,
                                t = -i.top
                            }
                            var s = e.clientY + t
                              , n = s - T.rail.drag.y
                              , a = e.clientX + r
                              , c = a - T.rail.drag.x
                              , d = T.rail.drag.st - n;
                            if (T.ishwscroll && M.bouncescroll)
                                d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                            else if (d < 0 ? (d = 0,
                            s = 0) : d > T.page.maxh && (d = T.page.maxh,
                            s = 0),
                            0 === s && !T.hasmoving)
                                return T.ispage || (T.rail.drag = !1),
                                !0;
                            var u = T.getScrollLeft();
                            if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c,
                            T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0,
                            a = 0),
                            u > T.page.maxw && (u = T.page.maxw,
                            a = 0))),
                            !T.hasmoving) {
                                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX)
                                    return T.cancelEvent(e);
                                var h = Math.abs(n)
                                  , p = Math.abs(c)
                                  , m = M.directionlockdeadzone;
                                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"),
                                !T.rail.drag.dl)
                                    return T.cancelEvent(e);
                                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                                T.hasmoving = !0
                            }
                            return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1,
                            T.preventclick.tg.onclick = T.onpreventclick),
                            T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)),
                            T.synched("touchmove", function() {
                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(),
                                T.rail.scrollable && T.setScrollTop(d),
                                T.scrollmom.update(a, s),
                                T.railh && T.railh.scrollable ? (T.setScrollLeft(u),
                                T.showCursor(d, u)) : T.showCursor(d),
                                P.isie10 && l.selection.clear())
                            }),
                            T.cancelEvent(e)
                        }
                        return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                    }
                    ,
                    T.ontouchstartCursor = function(e, o) {
                        if (!T.rail.drag || 3 == T.rail.drag.pt) {
                            if (T.locked)
                                return T.cancelEvent(e);
                            T.cancelScroll(),
                            T.rail.drag = {
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                pt: 3,
                                hr: !!o
                            };
                            var t = T.getTarget(e);
                            return !T.ispage && P.hasmousecapture && t.setCapture(),
                            T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"),
                            T.css(T.doc, {
                                "pointer-events": "none"
                            })),
                            T.cancelEvent(e)
                        }
                    }
                    ,
                    T.ontouchendCursor = function(e) {
                        if (T.rail.drag) {
                            if (P.hasmousecapture && l.releaseCapture(),
                            T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents),
                            3 != T.rail.drag.pt)
                                return;
                            return T.rail.drag = !1,
                            T.cancelEvent(e)
                        }
                    }
                    ,
                    T.ontouchmoveCursor = function(e) {
                        if (T.rail.drag) {
                            if (3 != T.rail.drag.pt)
                                return;
                            if (T.cursorfreezed = !0,
                            T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x),
                                T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y),
                                T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("touchmove", function() {
                                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(),
                                T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                            }),
                            T.cancelEvent(e)
                        }
                    }
                }
                if (T.onmousedown = function(e, o) {
                    if (!T.rail.drag || 1 == T.rail.drag.pt) {
                        if (T.railslocked)
                            return T.cancelEvent(e);
                        T.cancelScroll(),
                        T.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: T.scroll.x,
                            sy: T.scroll.y,
                            pt: 1,
                            hr: o || !1
                        };
                        var t = T.getTarget(e);
                        return P.hasmousecapture && t.setCapture(),
                        T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"),
                        T.css(T.doc, {
                            "pointer-events": "none"
                        })),
                        T.hasmoving = !1,
                        T.cancelEvent(e)
                    }
                }
                ,
                T.onmouseup = function(e) {
                    if (T.rail.drag)
                        return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(),
                        T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents),
                        T.rail.drag = !1,
                        T.cursorfreezed = !1,
                        T.hasmoving && T.triggerScrollEnd(),
                        T.cancelEvent(e))
                }
                ,
                T.onmousemove = function(e) {
                    if (T.rail.drag) {
                        if (1 !== T.rail.drag.pt)
                            return;
                        if (P.ischrome && 0 === e.which)
                            return T.onmouseup(e);
                        if (T.cursorfreezed = !0,
                        T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                        T.hasmoving = !0,
                        T.rail.drag.hr) {
                            T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x),
                            T.scroll.x < 0 && (T.scroll.x = 0);
                            var o = T.scrollvaluemaxw;
                            T.scroll.x > o && (T.scroll.x = o)
                        } else {
                            T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y),
                            T.scroll.y < 0 && (T.scroll.y = 0);
                            var t = T.scrollvaluemax;
                            T.scroll.y > t && (T.scroll.y = t)
                        }
                        return T.synched("mousemove", function() {
                            T.cursorfreezed && (T.showCursor(),
                            T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                        }),
                        T.cancelEvent(e)
                    }
                    T.checkarea = 0
                }
                ,
                P.cantouch || M.emulatetouch)
                    T.onpreventclick = function(e) {
                        if (T.preventclick)
                            return T.preventclick.tg.onclick = T.preventclick.click,
                            T.preventclick = !1,
                            T.cancelEvent(e)
                    }
                    ,
                    T.onclick = !P.isios && function(e) {
                        return !T.lastmouseup || (T.lastmouseup = !1,
                        T.cancelEvent(e))
                    }
                    ,
                    M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
                        cursor: P.cursorgrabvalue
                    }),
                    T.css(T.rail, {
                        cursor: P.cursorgrabvalue
                    }));
                else {
                    var L = function(e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var o = T.win.outerHeight()
                                  , t = e.pageY - T.selectiondrag.top;
                                t > 0 && t < o && (t = 0),
                                t >= o && (t -= o),
                                T.selectiondrag.df = t
                            }
                            if (0 !== T.selectiondrag.df) {
                                var r = -2 * T.selectiondrag.df / 6 | 0;
                                T.doScrollBy(r),
                                T.debounced("doselectionscroll", function() {
                                    L()
                                }, 50)
                            }
                        }
                    };
                    T.hasTextSelected = "getSelection"in l ? function() {
                        return l.getSelection().rangeCount > 0
                    }
                    : "selection"in l ? function() {
                        return "None" != l.selection.type
                    }
                    : function() {
                        return !1
                    }
                    ,
                    T.onselectionstart = function(e) {
                        T.ispage || (T.selectiondrag = T.win.offset())
                    }
                    ,
                    T.onselectionend = function(e) {
                        T.selectiondrag = !1
                    }
                    ,
                    T.onselectiondrag = function(e) {
                        T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function() {
                            L(e)
                        }, 250)
                    }
                }
                if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
                    "touch-action": "none"
                }),
                T.css(T.rail, {
                    "touch-action": "none"
                }),
                T.css(T.cursor, {
                    "touch-action": "none"
                }),
                T.bind(T.win, "pointerdown", T.ontouchstart),
                T.bind(l, "pointerup", T.ontouchend),
                T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
                    "-ms-touch-action": "none"
                }),
                T.css(T.rail, {
                    "-ms-touch-action": "none"
                }),
                T.css(T.cursor, {
                    "-ms-touch-action": "none"
                }),
                T.bind(T.win, "MSPointerDown", T.ontouchstart),
                T.bind(l, "MSPointerUp", T.ontouchend),
                T.delegate(l, "MSPointerMove", T.ontouchmove),
                T.bind(T.cursor, "MSGestureHold", function(e) {
                    e.preventDefault()
                }),
                T.bind(T.cursor, "contextmenu", function(e) {
                    e.preventDefault()
                })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0),
                T.bind(l, "touchend", T.ontouchend, !1, !0),
                T.bind(l, "touchcancel", T.ontouchend, !1, !0),
                T.delegate(l, "touchmove", T.ontouchmove, !1, !0)),
                M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0),
                T.bind(l, "mouseup", T.ontouchend, !1, !0),
                T.bind(l, "mousemove", T.ontouchmove, !1, !0)),
                (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
                    cursor: "default"
                }),
                T.railh && T.railh.css({
                    cursor: "default"
                }),
                T.jqbind(T.rail, "mouseenter", function() {
                    if (!T.ispage && !T.win.is(":visible"))
                        return !1;
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.rail, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }),
                M.sensitiverail && (T.bind(T.rail, "click", function(e) {
                    T.doRailClick(e, !1, !1)
                }),
                T.bind(T.rail, "dblclick", function(e) {
                    T.doRailClick(e, !0, !1)
                }),
                T.bind(T.cursor, "click", function(e) {
                    T.cancelEvent(e)
                }),
                T.bind(T.cursor, "dblclick", function(e) {
                    T.cancelEvent(e)
                })),
                T.railh && (T.jqbind(T.railh, "mouseenter", function() {
                    if (!T.ispage && !T.win.is(":visible"))
                        return !1;
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.railh, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }),
                M.sensitiverail && (T.bind(T.railh, "click", function(e) {
                    T.doRailClick(e, !1, !0)
                }),
                T.bind(T.railh, "dblclick", function(e) {
                    T.doRailClick(e, !0, !0)
                }),
                T.bind(T.cursorh, "click", function(e) {
                    T.cancelEvent(e)
                }),
                T.bind(T.cursorh, "dblclick", function(e) {
                    T.cancelEvent(e)
                })))),
                M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor),
                T.bind(T.cursor, "touchmove", T.ontouchmoveCursor),
                T.bind(T.cursor, "touchend", T.ontouchendCursor),
                T.cursorh && T.bind(T.cursorh, "touchstart", function(e) {
                    T.ontouchstartCursor(e, !0)
                }),
                T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor),
                T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)),
                M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend),
                T.onclick && T.bind(l, "click", T.onclick),
                M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown),
                T.bind(T.cursor, "mouseup", T.onmouseup),
                T.cursorh && T.bind(T.cursorh, "mousedown", function(e) {
                    T.onmousedown(e, !0)
                }),
                T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function(e) {
                    e.preventDefault()
                }),
                T.railh && T.bind(T.railh, "mousedown", function(e) {
                    e.preventDefault()
                }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup),
                T.bind(l, "mousemove", T.onmousemove),
                T.onclick && T.bind(l, "click", T.onclick),
                T.bind(T.cursor, "mousedown", T.onmousedown),
                T.bind(T.cursor, "mouseup", T.onmouseup),
                T.railh && (T.bind(T.cursorh, "mousedown", function(e) {
                    T.onmousedown(e, !0)
                }),
                T.bind(T.cursorh, "mouseup", T.onmouseup)),
                !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart),
                T.bind(l, "mouseup", T.onselectionend),
                T.bind(T.cursor, "mouseup", T.onselectionend),
                T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend),
                T.bind(l, "mousemove", T.onselectiondrag)),
                T.zoom && (T.jqbind(T.zoom, "mouseenter", function() {
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.zoom, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }))),
                M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel),
                T.mousewheel(T.rail, T.onmousewheel),
                T.railh && T.mousewheel(T.railh, T.onmousewheelhr)),
                T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
                    tabindex: ++r
                }),
                T.bind(T.win, "focus", function(e) {
                    o = T.getTarget(e).id || T.getTarget(e) || !1,
                    T.hasfocus = !0,
                    T.canshowonmouseevent && T.noticeCursor()
                }),
                T.bind(T.win, "blur", function(e) {
                    o = !1,
                    T.hasfocus = !1
                }),
                T.bind(T.win, "mouseenter", function(e) {
                    t = T.getTarget(e).id || T.getTarget(e) || !1,
                    T.hasmousefocus = !0,
                    T.canshowonmouseevent && T.noticeCursor()
                }),
                T.bind(T.win, "mouseleave", function(e) {
                    t = !1,
                    T.hasmousefocus = !1,
                    T.rail.drag || T.hideCursor()
                })),
                T.onkeypress = function(e) {
                    if (T.railslocked && 0 === T.page.maxh)
                        return !0;
                    e = e || a.event;
                    var r = T.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp))
                        return !0;
                    if (n(r).attr("contenteditable"))
                        return !0;
                    if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                        var i = e.keyCode;
                        if (T.railslocked && 27 != i)
                            return T.cancelEvent(e);
                        var s = e.ctrlKey || !1
                          , l = e.shiftKey || !1
                          , c = !1;
                        switch (i) {
                        case 38:
                        case 63233:
                            T.doScrollBy(72),
                            c = !0;
                            break;
                        case 40:
                        case 63235:
                            T.doScrollBy(-72),
                            c = !0;
                            break;
                        case 37:
                        case 63232:
                            T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72),
                            c = !0);
                            break;
                        case 39:
                        case 63234:
                            T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72),
                            c = !0);
                            break;
                        case 33:
                        case 63276:
                            T.doScrollBy(T.view.h),
                            c = !0;
                            break;
                        case 34:
                        case 63277:
                            T.doScrollBy(-T.view.h),
                            c = !0;
                            break;
                        case 36:
                        case 63273:
                            T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0),
                            c = !0;
                            break;
                        case 35:
                        case 63275:
                            T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh),
                            c = !0;
                            break;
                        case 32:
                            M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h),
                            c = !0);
                            break;
                        case 27:
                            T.zoomactive && (T.doZoom(),
                            c = !0)
                        }
                        if (c)
                            return T.cancelEvent(e)
                    }
                }
                ,
                M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress),
                T.bind(l, "keydown", function(e) {
                    (e.ctrlKey || !1) && (T.wheelprevented = !0)
                }),
                T.bind(l, "keyup", function(e) {
                    e.ctrlKey || !1 || (T.wheelprevented = !1)
                }),
                T.bind(a, "blur", function(e) {
                    T.wheelprevented = !1
                }),
                T.bind(a, "resize", T.onscreenresize),
                T.bind(a, "orientationchange", T.onscreenresize),
                T.bind(a, "load", T.lazyResize),
                P.ischrome && !T.ispage && !T.haswrapper) {
                    var C = T.win.attr("style")
                      , N = parseFloat(T.win.css("width")) + 1;
                    T.win.css("width", N),
                    T.synched("chromefix", function() {
                        T.win.attr("style", C)
                    })
                }
                if (T.onAttributeChange = function(e) {
                    T.lazyResize(T.isieold ? 250 : 30)
                }
                ,
                M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function(e) {
                    if (e.forEach(function(e) {
                        if ("attributes" == e.type)
                            return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                    }),
                    T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height)
                        return T.lazyResize(30)
                }
                ),
                T.observerbody.observe(l.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                !T.ispage && !T.haswrapper)) {
                    var R = T.win[0];
                    !1 !== m ? (T.observer = new m(function(e) {
                        e.forEach(T.onAttributeChange)
                    }
                    ),
                    T.observer.observe(R, {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }),
                    T.observerremover = new m(function(e) {
                        e.forEach(function(e) {
                            if (e.removedNodes.length > 0)
                                for (var o in e.removedNodes)
                                    if (T && e.removedNodes[o] === R)
                                        return T.remove()
                        })
                    }
                    ),
                    T.observerremover.observe(R.parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange),
                    P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange),
                    T.bind(R, "DOMNodeRemoved", function(e) {
                        e.target === R && T.remove()
                    }))
                }
                !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom),
                T.istextarea && (T.bind(T.win, "keydown", T.lazyResize),
                T.bind(T.win, "mouseup", T.lazyResize)),
                T.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var _ = function() {
                    T.iframexd = !1;
                    var o;
                    try {
                        (o = "contentDocument"in this ? this.contentDocument : this.contentWindow._doc).domain
                    } catch (e) {
                        T.iframexd = !0,
                        o = !1
                    }
                    if (T.iframexd)
                        return "console"in a && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    if (T.forcescreen = !0,
                    T.isiframe && (T.iframe = {
                        doc: n(o),
                        html: T.doc.contents().find("html")[0],
                        body: T.doc.contents().find("body")[0]
                    },
                    T.getContentSize = function() {
                        return {
                            w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                            h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    T.docscroll = n(T.iframe.body)),
                    !P.isios && M.iframeautoresize && !T.isiframe) {
                        T.win.scrollTop(0),
                        T.doc.height("");
                        var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        T.doc.height(t)
                    }
                    T.lazyResize(30),
                    T.css(n(T.iframe.body), e),
                    P.isios && T.haswrapper && T.css(n(o.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    }),
                    "contentWindow"in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll),
                    M.enablemousewheel && T.mousewheel(o, T.onmousewheel),
                    M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress),
                    P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart),
                    T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart),
                    T.bind(o, "mousemove", function(e) {
                        return T.ontouchmove(e, !0)
                    }),
                    M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
                        cursor: P.cursorgrabvalue
                    })),
                    T.bind(o, "mouseup", T.ontouchend),
                    T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom),
                    T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                };
                this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function() {
                    _.call(T.doc[0], !1)
                }, 500),
                T.bind(this.doc, "load", _)
            }
        }
        ,
        this.showCursor = function(e, o) {
            if (T.cursortimeout && (clearTimeout(T.cursortimeout),
            T.cursortimeout = 0),
            T.rail) {
                if (T.autohidedom && (T.autohidedom.stop().css({
                    opacity: M.cursoropacitymax
                }),
                T.cursoractive = !0),
                T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0),
                void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)),
                T.cursor.css({
                    height: T.cursorheight,
                    top: T.scroll.y
                }),
                T.cursorh) {
                    var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                    T.cursorh.css({
                        width: T.cursorwidth,
                        left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
                    }),
                    T.cursoractive = !0
                }
                T.zoom && T.zoom.stop().css({
                    opacity: M.cursoropacitymax
                })
            }
        }
        ,
        this.hideCursor = function(e) {
            T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function() {
                T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
                    opacity: M.cursoropacitymin
                }),
                T.zoom && T.zoom.stop().animate({
                    opacity: M.cursoropacitymin
                }),
                T.cursoractive = !1),
                T.cursortimeout = 0
            }, e || M.hidecursordelay)))
        }
        ,
        this.noticeCursor = function(e, o, t) {
            T.showCursor(o, t),
            T.rail.active || T.hideCursor(e)
        }
        ,
        this.getContentSize = T.ispage ? function() {
            return {
                w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
                h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
            }
        }
        : T.haswrapper ? function() {
            return {
                w: T.doc[0].offsetWidth,
                h: T.doc[0].offsetHeight
            }
        }
        : function() {
            return {
                w: T.docscroll[0].scrollWidth,
                h: T.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(e, o) {
            if (!T || !T.win)
                return !1;
            var t = T.page.maxh
              , r = T.page.maxw
              , i = T.view.h
              , s = T.view.w;
            if (T.view = {
                w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                h: T.ispage ? T.win.height() : T.win[0].clientHeight
            },
            T.page = o || T.getContentSize(),
            T.page.maxh = Math.max(0, T.page.h - T.view.h),
            T.page.maxw = Math.max(0, T.page.w - T.view.w),
            T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                if (T.ispage)
                    return T;
                var n = T.win.offset();
                if (T.lastposition) {
                    var l = T.lastposition;
                    if (l.top == n.top && l.left == n.left)
                        return T
                }
                T.lastposition = n
            }
            return 0 === T.page.maxh ? (T.hideRail(),
            T.scrollvaluemax = 0,
            T.scroll.y = 0,
            T.scrollratio.y = 0,
            T.cursorheight = 0,
            T.setScrollTop(0),
            T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom,
            T.rail.scrollable = !0),
            0 === T.page.maxw ? (T.hideRailHr(),
            T.scrollvaluemaxw = 0,
            T.scroll.x = 0,
            T.scrollratio.x = 0,
            T.cursorwidth = 0,
            T.setScrollLeft(0),
            T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right,
            T.railh && (T.railh.scrollable = M.horizrailenabled)),
            T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw,
            T.railslocked ? (T.ispage || T.updateScrollBar(T.view),
            !1) : (T.hidden || (T.rail.visibility || T.showRail(),
            T.railh && !T.railh.visibility && T.showRailHr()),
            T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20),
            T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))),
            T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight),
            T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))),
            T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth),
            T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom),
            T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight),
            T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w,
            T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)),
            T.ispage || T.updateScrollBar(T.view),
            T.scrollratio = {
                x: T.page.maxw / T.scrollvaluemaxw,
                y: T.page.maxh / T.scrollvaluemax
            },
            T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0,
            T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0,
            T.cursoractive && T.noticeCursor()),
            T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0),
            T)
        }
        ,
        this.resize = T.onResize;
        var O = 0;
        this.onscreenresize = function(e) {
            clearTimeout(O);
            var o = !T.ispage && !T.haswrapper;
            o && T.hideRails(),
            O = setTimeout(function() {
                T && (o && T.showRails(),
                T.resize()),
                O = 0
            }, 120)
        }
        ,
        this.lazyResize = function(e) {
            return clearTimeout(O),
            e = isNaN(e) ? 240 : e,
            O = setTimeout(function() {
                T && T.resize(),
                O = 0
            }, e),
            T
        }
        ,
        this.jqbind = function(e, o, t) {
            T.events.push({
                e: e,
                n: o,
                f: t,
                q: !0
            }),
            n(e).on(o, t)
        }
        ,
        this.mousewheel = function(e, o, t) {
            var r = "jquery"in e ? e[0] : e;
            if ("onwheel"in l.createElement("div"))
                T._bind(r, "wheel", o, t || !1);
            else {
                var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                S(r, i, o, t || !1),
                "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
            }
        }
        ;
        var Y = !1;
        if (P.haseventlistener) {
            try {
                var H = Object.defineProperty({}, "passive", {
                    get: function() {
                        Y = !0
                    }
                });
                a.addEventListener("test", null, H)
            } catch (e) {}
            this.stopPropagation = function(e) {
                return !!e && ((e = e.original ? e.original : e).stopPropagation(),
                !1)
            }
            ,
            this.cancelEvent = function(e) {
                return e.cancelable && e.preventDefault(),
                e.stopImmediatePropagation(),
                e.preventManipulation && e.preventManipulation(),
                !1
            }
        } else
            Event.prototype.preventDefault = function() {
                this.returnValue = !1
            }
            ,
            Event.prototype.stopPropagation = function() {
                this.cancelBubble = !0
            }
            ,
            a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(e, o, t) {
                this.attachEvent("on" + e, o)
            }
            ,
            a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(e, o, t) {
                this.detachEvent("on" + e, o)
            }
            ,
            this.cancelEvent = function(e) {
                return (e = e || a.event) && (e.cancelBubble = !0,
                e.cancel = !0,
                e.returnValue = !1),
                !1
            }
            ,
            this.stopPropagation = function(e) {
                return (e = e || a.event) && (e.cancelBubble = !0),
                !1
            }
            ;
        this.delegate = function(e, o, t, r, i) {
            var s = d[o] || !1;
            s || (s = {
                a: [],
                l: [],
                f: function(e) {
                    for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
                        if (!1 === (t = o[r].call(e.target, e)))
                            return !1;
                    return t
                }
            },
            T.bind(e, o, s.f, r, i),
            d[o] = s),
            T.ispage ? (s.a = [T.id].concat(s.a),
            s.l = [t].concat(s.l)) : (s.a.push(T.id),
            s.l.push(t))
        }
        ,
        this.undelegate = function(e, o, t, r, i) {
            var s = d[o] || !1;
            if (s && s.l)
                for (var n = 0, l = s.l.length; n < l; n++)
                    s.a[n] === T.id && (s.a.splice(n),
                    s.l.splice(n),
                    0 === s.a.length && (T._unbind(e, o, s.l.f),
                    d[o] = null))
        }
        ,
        this.bind = function(e, o, t, r, i) {
            var s = "jquery"in e ? e[0] : e;
            T._bind(s, o, t, r || !1, i || !1)
        }
        ,
        this._bind = function(e, o, t, r, i) {
            T.events.push({
                e: e,
                n: o,
                f: t,
                b: r,
                q: !1
            }),
            Y && i ? e.addEventListener(o, t, {
                passive: !1,
                capture: r
            }) : e.addEventListener(o, t, r || !1)
        }
        ,
        this._unbind = function(e, o, t, r) {
            d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
        }
        ,
        this.unbindAll = function() {
            for (var e = 0; e < T.events.length; e++) {
                var o = T.events[e];
                o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
            }
        }
        ,
        this.showRails = function() {
            return T.showRail().showRailHr()
        }
        ,
        this.showRail = function() {
            return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0,
            T.rail.css("display", "block")),
            T
        }
        ,
        this.showRailHr = function() {
            return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0,
            T.railh.css("display", "block"))),
            T
        }
        ,
        this.hideRails = function() {
            return T.hideRail().hideRailHr()
        }
        ,
        this.hideRail = function() {
            return T.rail.visibility = !1,
            T.rail.css("display", "none"),
            T
        }
        ,
        this.hideRailHr = function() {
            return T.railh && (T.railh.visibility = !1,
            T.railh.css("display", "none")),
            T
        }
        ,
        this.show = function() {
            return T.hidden = !1,
            T.railslocked = !1,
            T.showRails()
        }
        ,
        this.hide = function() {
            return T.hidden = !0,
            T.railslocked = !0,
            T.hideRails()
        }
        ,
        this.toggle = function() {
            return T.hidden ? T.show() : T.hide()
        }
        ,
        this.remove = function() {
            T.stop(),
            T.cursortimeout && clearTimeout(T.cursortimeout);
            for (var e in T.delaylist)
                T.delaylist[e] && h(T.delaylist[e].h);
            T.doZoomOut(),
            T.unbindAll(),
            P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange),
            !1 !== T.observer && T.observer.disconnect(),
            !1 !== T.observerremover && T.observerremover.disconnect(),
            !1 !== T.observerbody && T.observerbody.disconnect(),
            T.events = null,
            T.cursor && T.cursor.remove(),
            T.cursorh && T.cursorh.remove(),
            T.rail && T.rail.remove(),
            T.railh && T.railh.remove(),
            T.zoom && T.zoom.remove();
            for (var o = 0; o < T.saved.css.length; o++) {
                var t = T.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            T.saved = !1,
            T.me.data("__nicescroll", "");
            var r = n.nicescroll;
            r.each(function(e) {
                if (this && this.id === T.id) {
                    delete r[e];
                    for (var o = ++e; o < r.length; o++,
                    e++)
                        r[e] = r[o];
                    --r.length && delete r[r.length]
                }
            });
            for (var i in T)
                T[i] = null,
                delete T[i];
            T = null
        }
        ,
        this.scrollstart = function(e) {
            return this.onscrollstart = e,
            T
        }
        ,
        this.scrollend = function(e) {
            return this.onscrollend = e,
            T
        }
        ,
        this.scrollcancel = function(e) {
            return this.onscrollcancel = e,
            T
        }
        ,
        this.zoomin = function(e) {
            return this.onzoomin = e,
            T
        }
        ,
        this.zoomout = function(e) {
            return this.onzoomout = e,
            T
        }
        ,
        this.isScrollable = function(e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName)
                return !0;
            for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o)
                  , r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r))
                    return o.clientHeight != o.scrollHeight;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }
        ,
        this.getViewport = function(e) {
            for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o);
                if (/fixed|absolute/.test(t.css("position")))
                    return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
                    return t;
                if (t.getNiceScroll().length > 0)
                    return t;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }
        ,
        this.triggerScrollStart = function(e, o, t, r, i) {
            if (T.onscrollstart) {
                var s = {
                    type: "scrollstart",
                    current: {
                        x: e,
                        y: o
                    },
                    request: {
                        x: t,
                        y: r
                    },
                    end: {
                        x: T.newscrollx,
                        y: T.newscrolly
                    },
                    speed: i
                };
                T.onscrollstart.call(T, s)
            }
        }
        ,
        this.triggerScrollEnd = function() {
            if (T.onscrollend) {
                var e = T.getScrollLeft()
                  , o = T.getScrollTop()
                  , t = {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: o
                    },
                    end: {
                        x: e,
                        y: o
                    }
                };
                T.onscrollend.call(T, t)
            }
        }
        ;
        var B = 0
          , X = 0
          , D = 0
          , A = 1
          , q = !1;
        if (this.onmousewheel = function(e) {
            if (T.wheelprevented || T.locked)
                return !1;
            if (T.railslocked)
                return T.debounced("checkunlock", T.resize, 250),
                !1;
            if (T.rail.drag)
                return T.cancelEvent(e);
            if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1),
            M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable)
                return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
            var o = f()
              , t = !1;
            if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e),
            t = !0),
            T.checkarea = o,
            T.nativescrollingarea)
                return !0;
            var r = k(e, !1, t);
            return r && (T.checkarea = 0),
            r
        }
        ,
        this.onmousewheelhr = function(e) {
            if (!T.wheelprevented) {
                if (T.railslocked || !T.railh.scrollable)
                    return !0;
                if (T.rail.drag)
                    return T.cancelEvent(e);
                var o = f()
                  , t = !1;
                return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e),
                t = !0),
                T.checkarea = o,
                !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            }
        }
        ,
        this.stop = function() {
            return T.cancelScroll(),
            T.scrollmon && T.scrollmon.stop(),
            T.cursorfreezed = !1,
            T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)),
            T.noticeCursor(),
            T
        }
        ,
        this.getTransitionSpeed = function(e) {
            return 80 + e / 72 * M.scrollspeed | 0
        }
        ,
        M.smoothscroll)
            if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
                var j = "";
                this.resetTransition = function() {
                    j = "",
                    T.doc.css(P.prefixstyle + "transition-duration", "0ms")
                }
                ,
                this.prepareTransition = function(e, o) {
                    var t = o ? e : T.getTransitionSpeed(e)
                      , r = t + "ms";
                    return j !== r && (j = r,
                    T.doc.css(P.prefixstyle + "transition-duration", r)),
                    t
                }
                ,
                this.doScrollLeft = function(e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }
                ,
                this.doScrollTop = function(e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }
                ,
                this.cursorupdate = {
                    running: !1,
                    start: function() {
                        var e = this;
                        if (!e.running) {
                            e.running = !0;
                            var o = function() {
                                e.running && u(o),
                                T.showCursor(T.getScrollTop(), T.getScrollLeft()),
                                T.notifyScrollEvent(T.win[0])
                            };
                            u(o)
                        }
                    },
                    stop: function() {
                        this.running = !1
                    }
                },
                this.doScrollPos = function(e, o, t) {
                    var r = T.getScrollTop()
                      , i = T.getScrollLeft();
                    if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(),
                    M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0),
                    e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh),
                    e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)),
                    T.scrollrunning && e == T.newscrollx && o == T.newscrolly)
                        return !1;
                    T.newscrolly = o,
                    T.newscrollx = e;
                    var s = T.getScrollTop()
                      , n = T.getScrollLeft()
                      , l = {};
                    l.x = e - n,
                    l.y = o - s;
                    var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y)
                      , c = T.prepareTransition(a);
                    T.scrollrunning || (T.scrollrunning = !0,
                    T.triggerScrollStart(n, s, e, o, c),
                    T.cursorupdate.start()),
                    T.scrollendtrapped = !0,
                    P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped),
                    T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)),
                    T.setScrollTop(T.newscrolly),
                    T.setScrollLeft(T.newscrollx)
                }
                ,
                this.cancelScroll = function() {
                    if (!T.scrollendtrapped)
                        return !0;
                    var e = T.getScrollTop()
                      , o = T.getScrollLeft();
                    return T.scrollrunning = !1,
                    P.transitionend || clearTimeout(P.transitionend),
                    T.scrollendtrapped = !1,
                    T.resetTransition(),
                    T.setScrollTop(e),
                    T.railh && T.setScrollLeft(o),
                    T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm),
                    T.timerscroll = !1,
                    T.cursorfreezed = !1,
                    T.cursorupdate.stop(),
                    T.showCursor(e, o),
                    T
                }
                ,
                this.onScrollTransitionEnd = function() {
                    if (T.scrollendtrapped) {
                        var e = T.getScrollTop()
                          , o = T.getScrollLeft();
                        if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh),
                        o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw),
                        e != T.newscrolly || o != T.newscrollx)
                            return T.doScrollPos(o, e, M.snapbackspeed);
                        T.scrollrunning && T.triggerScrollEnd(),
                        T.scrollrunning = !1,
                        T.scrollendtrapped = !1,
                        T.resetTransition(),
                        T.timerscroll = !1,
                        T.setScrollTop(e),
                        T.railh && T.setScrollLeft(o),
                        T.cursorupdate.stop(),
                        T.noticeCursor(!1, e, o),
                        T.cursorfreezed = !1
                    }
                }
            } else
                this.doScrollLeft = function(e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }
                ,
                this.doScrollTop = function(e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }
                ,
                this.doScrollPos = function(e, o, t) {
                    var r = T.getScrollTop()
                      , i = T.getScrollLeft();
                    ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
                    var s = !1;
                    if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0,
                    s = !0) : o > T.page.maxh && (o = T.page.maxh,
                    s = !0)),
                    T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0,
                    s = !0) : e > T.page.maxw && (e = T.page.maxw,
                    s = !0)),
                    T.scrollrunning && T.newscrolly === o && T.newscrollx === e)
                        return !0;
                    T.newscrolly = o,
                    T.newscrollx = e,
                    T.dst = {},
                    T.dst.x = e - i,
                    T.dst.y = o - r,
                    T.dst.px = i,
                    T.dst.py = r;
                    var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y)
                      , l = T.getTransitionSpeed(n);
                    T.bzscroll = {};
                    var a = s ? 1 : .58;
                    T.bzscroll.x = new R(i,T.newscrollx,l,0,0,a,1),
                    T.bzscroll.y = new R(r,T.newscrolly,l,0,0,a,1);
                    f();
                    var c = function() {
                        if (T.scrollrunning) {
                            var e = T.bzscroll.y.getPos();
                            T.setScrollLeft(T.bzscroll.x.getNow()),
                            T.setScrollTop(T.bzscroll.y.getNow()),
                            e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1,
                            T.timer = 0,
                            T.triggerScrollEnd())
                        }
                    };
                    T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l),
                    T.scrollrunning = !0,
                    T.timer = u(c))
                }
                ,
                this.cancelScroll = function() {
                    return T.timer && h(T.timer),
                    T.timer = 0,
                    T.bzscroll = !1,
                    T.scrollrunning = !1,
                    T
                }
                ;
        else
            this.doScrollLeft = function(e, o) {
                var t = T.getScrollTop();
                T.doScrollPos(e, t, o)
            }
            ,
            this.doScrollTop = function(e, o) {
                var t = T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }
            ,
            this.doScrollPos = function(e, o, t) {
                var r = e > T.page.maxw ? T.page.maxw : e;
                r < 0 && (r = 0);
                var i = o > T.page.maxh ? T.page.maxh : o;
                i < 0 && (i = 0),
                T.synched("scroll", function() {
                    T.setScrollTop(i),
                    T.setScrollLeft(r)
                })
            }
            ,
            this.cancelScroll = function() {}
            ;
        this.doScrollBy = function(e, o) {
            z(0, e)
        }
        ,
        this.doScrollLeftBy = function(e, o) {
            z(e, 0)
        }
        ,
        this.doScrollTo = function(e, o) {
            var t = o ? Math.round(e * T.scrollratio.y) : e;
            t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh),
            T.cursorfreezed = !1,
            T.doScrollTop(e)
        }
        ,
        this.checkContentSize = function() {
            var e = T.getContentSize();
            e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
        }
        ,
        T.onscroll = function(e) {
            T.rail.drag || T.cursorfreezed || T.synched("scroll", function() {
                T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y),
                T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)),
                T.noticeCursor()
            })
        }
        ,
        T.bind(T.docscroll, "scroll", T.onscroll),
        this.doZoomIn = function(e) {
            if (!T.zoomactive) {
                T.zoomactive = !0,
                T.zoomrestore = {
                    style: {}
                };
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"]
                  , t = T.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                }
                T.zoomrestore.style.width = T.win.css("width"),
                T.zoomrestore.style.height = T.win.css("height"),
                T.zoomrestore.padding = {
                    w: T.win.outerWidth() - T.win.width(),
                    h: T.win.outerHeight() - T.win.height()
                },
                P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(),
                c.scrollTop(0)),
                T.win.css({
                    position: P.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: s + 100,
                    margin: 0
                });
                var n = T.win.css("backgroundColor");
                return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"),
                T.rail.css({
                    zIndex: s + 101
                }),
                T.zoom.css({
                    zIndex: s + 102
                }),
                T.zoom.css("backgroundPosition", "0 -18px"),
                T.resizeZoom(),
                T.onzoomin && T.onzoomin.call(T),
                T.cancelEvent(e)
            }
        }
        ,
        this.doZoomOut = function(e) {
            if (T.zoomactive)
                return T.zoomactive = !1,
                T.win.css("margin", ""),
                T.win.css(T.zoomrestore.style),
                P.isios4 && c.scrollTop(T.zoomrestore.scrollTop),
                T.rail.css({
                    "z-index": T.zindex
                }),
                T.zoom.css({
                    "z-index": T.zindex
                }),
                T.zoomrestore = !1,
                T.zoom.css("backgroundPosition", "0 0"),
                T.onResize(),
                T.onzoomout && T.onzoomout.call(T),
                T.cancelEvent(e)
        }
        ,
        this.doZoom = function(e) {
            return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
        }
        ,
        this.resizeZoom = function() {
            if (T.zoomactive) {
                var e = T.getScrollTop();
                T.win.css({
                    width: c.width() - T.zoomrestore.padding.w + "px",
                    height: c.height() - T.zoomrestore.padding.h + "px"
                }),
                T.onResize(),
                T.setScrollTop(Math.min(T.page.maxh, e))
            }
        }
        ,
        this.init(),
        n.nicescroll.push(this)
    }
      , y = function(e) {
        var o = this;
        this.nc = e,
        this.lastx = 0,
        this.lasty = 0,
        this.speedx = 0,
        this.speedy = 0,
        this.lasttime = 0,
        this.steptime = 0,
        this.snapx = !1,
        this.snapy = !1,
        this.demulx = 0,
        this.demuly = 0,
        this.lastscrollx = -1,
        this.lastscrolly = -1,
        this.chkx = 0,
        this.chky = 0,
        this.timer = 0,
        this.reset = function(e, t) {
            o.stop(),
            o.steptime = 0,
            o.lasttime = f(),
            o.speedx = 0,
            o.speedy = 0,
            o.lastx = e,
            o.lasty = t,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.update = function(e, t) {
            var r = f();
            o.steptime = r - o.lasttime,
            o.lasttime = r;
            var i = t - o.lasty
              , s = e - o.lastx
              , n = o.nc.getScrollTop() + i
              , l = o.nc.getScrollLeft() + s;
            o.snapx = l < 0 || l > o.nc.page.maxw,
            o.snapy = n < 0 || n > o.nc.page.maxh,
            o.speedx = s,
            o.speedy = i,
            o.lastx = e,
            o.lasty = t
        }
        ,
        this.stop = function() {
            o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            o.timer = 0,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.doSnapy = function(e, t) {
            var r = !1;
            t < 0 ? (t = 0,
            r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh,
            r = !0),
            e < 0 ? (e = 0,
            r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw,
            r = !0),
            r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(e) {
            var t = f()
              , r = e ? t + e : o.lasttime
              , i = o.nc.getScrollLeft()
              , s = o.nc.getScrollTop()
              , n = o.nc.page.maxh
              , l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0,
            o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && t - r <= 60;
            (s < 0 || s > n || i < 0 || i > l) && (a = !1);
            var c = !(!o.speedy || !a) && o.speedy
              , d = !(!o.speedx || !a) && o.speedx;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h,
                    o.speedy *= h,
                    u = 50
                }
                o.demulxy = 0,
                o.lastscrollx = o.nc.getScrollLeft(),
                o.chkx = o.lastscrollx,
                o.lastscrolly = o.nc.getScrollTop(),
                o.chky = o.lastscrolly;
                var p = o.lastscrollx
                  , m = o.lastscrolly
                  , g = function() {
                    var e = f() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)),
                    o.lastscrollx = p,
                    (p < 0 || p > l) && (e = .1)),
                    o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)),
                    o.lastscrolly = m,
                    (m < 0 || m > n) && (e = .1)),
                    o.demulxy = Math.min(1, o.demulxy + e),
                    o.nc.synched("domomentum2d", function() {
                        if (o.speedx) {
                            o.nc.getScrollLeft();
                            o.chkx = p,
                            o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            o.nc.getScrollTop();
                            o.chky = m,
                            o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(),
                        o.doSnapy(p, m))
                    }),
                    o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(),
                    o.nc.hideCursor(),
                    o.doSnapy(p, m))
                };
                g()
            } else
                o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }
      , x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o),
            this
        }
    },
    e.fn.scrollTop = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
        }
        return this.each(function() {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
        })
    }
    ;
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o),
            this
        }
    },
    e.fn.scrollLeft = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
        }
        return this.each(function() {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
        })
    }
    ;
    var z = function(e) {
        var o = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(e) {
            return n.each(o, e),
            o
        }
        ,
        this.push = function(e) {
            o[o.length] = e,
            o.length++
        }
        ,
        this.eq = function(e) {
            return o[e]
        }
        ,
        e)
            for (var t = 0; t < e.length; t++) {
                var r = n.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r,
                this.length++)
            }
        return this
    };
    !function(e, o, t) {
        for (var r = 0, i = o.length; r < i; r++)
            t(e, o[r])
    }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, o) {
        e[o] = function() {
            var e = arguments;
            return this.each(function() {
                this[o].apply(this, e)
            })
        }
    }),
    e.fn.getNiceScroll = function(e) {
        return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
    }
    ,
    (e.expr.pseudos || e.expr[":"]).nicescroll = function(e) {
        return void 0 !== n.data(e, "__nicescroll")
    }
    ,
    n.fn.niceScroll = function(e, o) {
        void 0 !== o || "object" != typeof e || "jquery"in e || (o = e,
        e = !1);
        var t = new z;
        return this.each(function() {
            var r = n(this)
              , i = n.extend({}, o);
            if (e) {
                var s = n(e);
                i.doc = s.length > 1 ? n(e, r) : s,
                i.win = r
            }
            !("doc"in i) || "win"in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r,
            l = new b(i,r),
            r.data("__nicescroll", l)),
            t.push(l)
        }),
        1 === t.length ? t[0] : t
    }
    ,
    a.NiceScroll = {
        getjQuery: function() {
            return e
        }
    },
    n.nicescroll || (n.nicescroll = new z,
    n.nicescroll.options = g)
});

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
// It will only set the 'top' and 'position' of your element, you might need to adjust the width in some cases.

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    var slice = Array.prototype.slice;
    // save ref to original slice()
    var splice = Array.prototype.splice;
    // save ref to original slice()

    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: '',
        widthFromWrapper: true,
        // works only when .getWidthFrom is empty
        responsiveWidth: false,
        zIndex: 'inherit'
    }
      , $window = $(window)
      , $document = $(document)
      , sticked = []
      , windowHeight = $window.height()
      , scroller = function() {
        var scrollTop = $window.scrollTop()
          , documentHeight = $document.height()
          , dwh = documentHeight - windowHeight
          , extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

        for (var i = 0, l = sticked.length; i < l; i++) {
            var s = sticked[i]
              , elementTop = s.stickyWrapper.offset().top
              , etse = elementTop - s.topSpacing - extra;

            //update height in case of dynamic content
            s.stickyWrapper.css('height', s.stickyElement.outerHeight());

            if (scrollTop <= etse) {
                if (s.currentTop !== null) {
                    s.stickyElement.css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'z-index': ''
                    });
                    s.stickyElement.parent().removeClass(s.className);
                    s.stickyElement.trigger('sticky-end', [s]);
                    s.currentTop = null;
                }
            } else {
                var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                if (newTop < 0) {
                    newTop = newTop + s.topSpacing;
                } else {
                    newTop = s.topSpacing;
                }
                if (s.currentTop !== newTop) {
                    var newWidth;
                    if (s.getWidthFrom) {
                        padding = s.stickyElement.innerWidth() - s.stickyElement.width();
                        newWidth = $(s.getWidthFrom).width() - padding || null;
                    } else if (s.widthFromWrapper) {
                        newWidth = s.stickyWrapper.width();
                    }
                    if (newWidth == null) {
                        newWidth = s.stickyElement.width();
                    }
                    s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);

                    s.stickyElement.parent().addClass(s.className);

                    if (s.currentTop === null) {
                        s.stickyElement.trigger('sticky-start', [s]);
                    } else {
                        // sticky is started but it have to be repositioned
                        s.stickyElement.trigger('sticky-update', [s]);
                    }

                    if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                        // just reached bottom || just started to stick but bottom is already reached
                        s.stickyElement.trigger('sticky-bottom-reached', [s]);
                    } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                        // sticky is started && sticked at topSpacing && overflowing from top just finished
                        s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                    }

                    s.currentTop = newTop;
                }

                // Check if sticky has reached end of container and stop sticking
                var stickyWrapperContainer = s.stickyWrapper.parent();
                var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

                if (unstick) {
                    s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
                } else {
                    s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
                }
            }
        }
    }
      , resizer = function() {
        windowHeight = $window.height();

        for (var i = 0, l = sticked.length; i < l; i++) {
            var s = sticked[i];
            var newWidth = null;
            if (s.getWidthFrom) {
                if (s.responsiveWidth) {
                    newWidth = $(s.getWidthFrom).width();
                }
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth != null) {
                s.stickyElement.css('width', newWidth);
            }
        }
    }
      , methods = {
        init: function(options) {
            return this.each(function() {
                var o = $.extend({}, defaults, options);
                var stickyElement = $(this);

                var stickyId = stickyElement.attr('id');
                var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

                stickyElement.wrapAll(function() {
                    if ($(this).parent("#" + wrapperId).length == 0) {
                        return wrapper;
                    }
                });

                var stickyWrapper = stickyElement.parent();

                if (o.center) {
                    stickyWrapper.css({
                        width: stickyElement.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    });
                }

                if (stickyElement.css("float") === "right") {
                    stickyElement.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    });
                }

                o.stickyElement = stickyElement;
                o.stickyWrapper = stickyWrapper;
                o.currentTop = null;

                sticked.push(o);

                methods.setWrapperHeight(this);
                methods.setupChangeListeners(this);
            });
        },

        setWrapperHeight: function(stickyElement) {
            var element = $(stickyElement);
            var stickyWrapper = element.parent();
            if (stickyWrapper) {
                stickyWrapper.css('height', element.outerHeight());
            }
        },

        setupChangeListeners: function(stickyElement) {
            if (window.MutationObserver) {
                var mutationObserver = new window.MutationObserver(function(mutations) {
                    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                        methods.setWrapperHeight(stickyElement);
                    }
                }
                );
                mutationObserver.observe(stickyElement, {
                    subtree: true,
                    childList: true
                });
            } else {
                if (window.addEventListener) {
                    stickyElement.addEventListener('DOMNodeInserted', function() {
                        methods.setWrapperHeight(stickyElement);
                    }, false);
                    stickyElement.addEventListener('DOMNodeRemoved', function() {
                        methods.setWrapperHeight(stickyElement);
                    }, false);
                } else if (window.attachEvent) {
                    stickyElement.attachEvent('onDOMNodeInserted', function() {
                        methods.setWrapperHeight(stickyElement);
                    });
                    stickyElement.attachEvent('onDOMNodeRemoved', function() {
                        methods.setWrapperHeight(stickyElement);
                    });
                }
            }
        },
        update: scroller,
        unstick: function(options) {
            return this.each(function() {
                var that = this;
                var unstickyElement = $(that);

                var removeIdx = -1;
                var i = sticked.length;
                while (i-- > 0) {
                    if (sticked[i].stickyElement.get(0) === that) {
                        splice.call(sticked, i, 1);
                        removeIdx = i;
                    }
                }
                if (removeIdx !== -1) {
                    unstickyElement.unwrap();
                    unstickyElement.css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'float': '',
                        'z-index': ''
                    });
                }
            });
        }
    };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    }
    ;

    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.unstick.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    }
    ;
    $(function() {
        setTimeout(scroller, 0);
    });
}));

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) {
    // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
}
)(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1
      , _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1
          , $elements = $(elements)
          , lastTop = null
          , rows = [];

        // group elements by their top position
        $elements.each(function() {
            var $that = $(this)
              , top = $that.offset().top - _parse($that.css('margin-top'))
              , lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    }
    ;

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options)
          , $elements = $(elements)
          , rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop()
          , htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this)
                  , display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row)
              , targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function() {
                    var $that = $(this)
                      , style = $that.attr('style')
                      , display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = {
                        'display': display
                    };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function() {
                var $that = $(this)
                  , verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    }
    ;

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this)
              , groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    }
    ;

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    }
    ;

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
              , n = t.find("option")
              , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
            n.each(function(t) {
                var n = e(this)
                  , i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var t = e(this)
                  , n = e(this).next(".nice-select")
                  , i = n.hasClass("open");
                n.length && (n.remove(),
                s(t),
                i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var t = e(this)
                  , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                t.css("display", ""))
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }),
        e(document).off(".nice_select"),
        e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"),
            s.toggleClass("open"),
            s.hasClass("open") ? (s.find(".option"),
            s.find(".focus").removeClass("focus"),
            s.find(".selected").addClass("focus")) : s.focus()
        }),
        e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }),
        e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this)
              , n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change")
        }),
        e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this)
              , n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode)
                return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"),
                    i.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"),
                    l.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (27 == t.keyCode)
                s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open"))
                return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);

// [End Include All Plugins]
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName))
            return window.document.body;
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        var o = e && e.offsetParent
          , i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }
    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = o ? e : t
          , n = o ? t : e
          , a = document.createRange();
        a.setStart(i, 0),
        a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n))
            return p(f) ? f : r(f);
        var l = s(e);
        return l.host ? d(l.host, t) : d(e, s(t).host)
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement
              , r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = a(t, 'top')
          , n = a(t, 'left')
          , r = o ? -1 : 1;
        return e.top += i * r,
        e.bottom += i * r,
        e.left += n * r,
        e.right += n * r,
        e
    }
    function l(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }
    function m(e, t, o, i) {
        return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function h() {
        var e = window.document.body
          , t = window.document.documentElement
          , o = ie() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }
    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function g(e) {
        var o = {};
        if (ie())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, 'top')
                  , n = a(e, 'left');
                o.top += i,
                o.left += n,
                o.bottom += i,
                o.right += n
            } catch (e) {}
        else
            o = e.getBoundingClientRect();
        var r = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , p = 'HTML' === e.nodeName ? h() : {}
          , s = p.width || e.clientWidth || r.right - r.left
          , d = p.height || e.clientHeight || r.bottom - r.top
          , f = e.offsetWidth - s
          , m = e.offsetHeight - d;
        if (f || m) {
            var g = t(e);
            f -= l(g, 'x'),
            m -= l(g, 'y'),
            r.width -= f,
            r.height -= m
        }
        return c(r)
    }
    function u(e, o) {
        var i = ie()
          , r = 'HTML' === o.nodeName
          , p = g(e)
          , s = g(o)
          , d = n(e)
          , a = t(o)
          , l = +a.borderTopWidth.split('px')[0]
          , m = +a.borderLeftWidth.split('px')[0]
          , h = c({
            top: p.top - s.top - l,
            left: p.left - s.left - m,
            width: p.width,
            height: p.height
        });
        if (h.marginTop = 0,
        h.marginLeft = 0,
        !i && r) {
            var u = +a.marginTop.split('px')[0]
              , b = +a.marginLeft.split('px')[0];
            h.top -= l - u,
            h.bottom -= l - u,
            h.left -= m - b,
            h.right -= m - b,
            h.marginTop = u,
            h.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)),
        h
    }
    function b(e) {
        var t = window.document.documentElement
          , o = u(e, t)
          , i = _(t.clientWidth, window.innerWidth || 0)
          , n = _(t.clientHeight, window.innerHeight || 0)
          , r = a(t)
          , p = a(t, 'left')
          , s = {
            top: r - o.top + o.marginTop,
            left: p - o.left + o.marginLeft,
            width: i,
            height: n
        };
        return c(s)
    }
    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }
    function w(e, t, i, r) {
        var p = {
            top: 0,
            left: 0
        }
          , s = d(e, t);
        if ('viewport' === r)
            p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)),
            'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var f = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var l = h()
                  , m = l.height
                  , c = l.width;
                p.top += f.top - f.marginTop,
                p.bottom = m + f.top,
                p.left += f.left - f.marginLeft,
                p.right = c + f.left
            } else
                p = f
        }
        return p.left += i,
        p.top += i,
        p.right -= i,
        p.bottom -= i,
        p
    }
    function v(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function E(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = w(o, i, r, n)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return se({
                key: e
            }, s[e], {
                area: v(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= o.clientWidth && i >= o.clientHeight
        })
          , f = 0 < a.length ? a[0].key : d[0].key
          , l = e.split('-')[1];
        return f + (l ? '-' + l : '')
    }
    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }
    function O(e) {
        var t = window.getComputedStyle(e)
          , o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
          , n = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + o
        };
        return n
    }
    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e)
          , n = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2,
        n[s] = o === s ? t[s] - i[a] : t[L(s)],
        n
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var i = T(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }
    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function(t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper),
            o.offsets.reference = c(o.offsets.reference),
            o = i(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference),
            e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = 'absolute',
            e = N(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , i = e.enabled;
            return i && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r])
                return r
        }
        return null
    }
    function D() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.left = '',
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || H(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function P(e, t, o, i) {
        o.updateBound = i,
        window.addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
        this.state = M(this.reference, this.state))
    }
    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function U(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'),
            e.style[o] = t[o] + i
        })
    }
    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function F(e, t, o) {
        var i = T(e, function(e) {
            var o = e.name;
            return o === t
        })
          , n = !!i && e.some(function(e) {
            return e.name === o && e.enabled && e.order < i.order
        });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }
    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = ae.indexOf(e)
          , i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +n[1]
          , p = n[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = i;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function G(e, t, o, i) {
        var n = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(i)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(T(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return q(e, n, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }),
        n
    }
    for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function(e) {
        return X.some(function(t) {
            return -1 < (e || '').toString().indexOf(t)
        })
    }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        }
    var i, te = J && Q(window.MutationObserver), oe = te ? function(e) {
        var t = !1
          , o = 0
          , i = document.createElement('span')
          , n = new MutationObserver(function() {
            e(),
            t = !1
        }
        );
        return n.observe(i, {
            attributes: !0
        }),
        function() {
            t || (t = !0,
            i.setAttribute('x-index', o),
            ++o)
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, $))
        }
    }
    , ie = function() {
        return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')),
        i
    }, ne = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }, re = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, i) {
            return o && e(t.prototype, o),
            i && e(t, i),
            t
        }
    }(), pe = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }, se = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var i in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
    , de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ae = de.slice(3), fe = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }, le = function() {
        function t(o, i) {
            var n = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            ne(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = oe(this.update.bind(this)),
            this.options = se({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o.jquery ? o[0] : o,
            this.popper = i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return se({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return re(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return D.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return A.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return I.call(this)
            }
        }]),
        t
    }();
    return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    le.placements = de,
    le.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets
                          , r = n.reference
                          , p = n.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , f = {
                            start: pe({}, d, r[d]),
                            end: pe({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = se({}, p, f[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0];
                    return o = R(+i) ? [+i, 0] : G(i, p, s, d),
                    'left' === d ? (p.top += o[0],
                    p.left -= o[1]) : 'right' === d ? (p.top += o[0],
                    p.left += o[1]) : 'top' === d ? (p.left += o[0],
                    p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
                    p.top += o[1]),
                    e.popper = p,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority
                      , p = e.offsets.popper
                      , s = {
                        primary: function(e) {
                            var o = p[e];
                            return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])),
                            pe({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = p[o];
                            return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))),
                            pe({}, o, n)
                        }
                    };
                    return n.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = se({}, p, s[t](e))
                    }),
                    e.offsets.popper = p,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , i = t.reference
                      , n = e.placement.split('-')[0]
                      , r = V
                      , p = -1 !== ['top', 'bottom'].indexOf(n)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
                    o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var o = t.element;
                    if ('string' == typeof o) {
                        if (o = e.instance.popper.querySelector(o),
                        !o)
                            return e;
                    } else if (!e.instance.popper.contains(o))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var i = e.placement.split('-')[0]
                      , n = e.offsets
                      , r = n.popper
                      , p = n.reference
                      , s = -1 !== ['left', 'right'].indexOf(i)
                      , d = s ? 'height' : 'width'
                      , a = s ? 'top' : 'left'
                      , f = s ? 'left' : 'top'
                      , l = s ? 'bottom' : 'right'
                      , m = O(o)[d];
                    p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)),
                    p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                    var h = p[a] + p[d] / 2 - m / 2
                      , g = h - c(e.offsets.popper)[a];
                    return g = _(z(r[d] - m, g), 0),
                    e.arrowElement = o,
                    e.offsets.arrow = {},
                    e.offsets.arrow[a] = Math.round(g),
                    e.offsets.arrow[f] = '',
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                      , i = e.placement.split('-')[0]
                      , n = L(i)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case fe.FLIP:
                        p = [i, n];
                        break;
                    case fe.CLOCKWISE:
                        p = K(i);
                        break;
                    case fe.COUNTERCLOCKWISE:
                        p = K(i, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1)
                            return e;
                        i = e.placement.split('-')[0],
                        n = L(i);
                        var a = e.offsets.popper
                          , f = e.offsets.reference
                          , l = V
                          , m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom)
                          , h = l(a.left) < l(o.left)
                          , c = l(a.right) > l(o.right)
                          , g = l(a.top) < l(o.top)
                          , u = l(a.bottom) > l(o.bottom)
                          , b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u
                          , y = -1 !== ['top', 'bottom'].indexOf(i)
                          , w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0,
                        (m || b) && (i = p[d + 1]),
                        w && (r = j(r)),
                        e.placement = i + (r ? '-' + r : ''),
                        e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)),
                        e = N(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , i = e.offsets
                      , n = i.popper
                      , r = i.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0),
                    e.placement = L(t),
                    e.offsets.popper = c(n),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = T(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , i = t.y
                      , n = e.offsets.popper
                      , p = T(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p, f = r(e.instance.popper), l = g(f), m = {
                        position: n.position
                    }, h = {
                        left: V(n.left),
                        top: V(n.top),
                        bottom: V(n.bottom),
                        right: V(n.right)
                    }, c = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? -l.height + h.bottom : h.top,
                    s = 'right' == u ? -l.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[u] = 0,
                        m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1
                          , w = 'right' == u ? -1 : 1;
                        m[c] = d * y,
                        m[u] = s * w,
                        m.willChange = c + ', ' + u
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, v, e.attributes),
                    e.styles = se({}, m, e.styles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return U(e.instance.popper, e.styles),
                    Y(e.instance.popper, e.attributes),
                    e.offsets.arrow && U(e.arrowElement, e.offsets.arrow),
                    e
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e)
                      , p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    U(t, {
                        position: 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    le
});
//# sourceMappingURL=popper.min.js.map
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "2.2.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"),
            b.text = a,
            d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (d = e.call(arguments, 2),
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || n.uniqueSort(e),
            D.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J),
        n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(),
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J),
        a.addEventListener("load", J))),
        I.promise(b)
    }
    ,
    n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!L(a))
                return {};
            var b = a[this.expando];
            return b || (b = {},
            L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[b] = c;
            else
                for (d in b)
                    e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b)
                    this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in f ? d = [b, e] : (d = e,
                    d = d in f ? [d] : d.match(G) || [])),
                    c = d.length;
                    while (c--)
                        delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M
      , O = new M
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()),
                    void 0 !== c)
                        return c;
                    if (d = n.camelCase(a),
                    c = O.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = R(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    d = n.camelCase(a),
                    this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b),
                        a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = N.get(a, b),
            c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = N.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i")
      , U = ["Top", "Right", "Bottom", "Left"]
      , V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var X = /^(?:checkbox|radio)$/i
      , Y = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option,
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead,
    $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o],
            f || 0 === f)
                if ("object" === n.type(f))
                    n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase(),
                    i = $[h] || $._default,
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    n.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f),
            g = _(l.appendChild(f), "script"),
            j && aa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    Z.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/
      , ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0
    }
    function ha() {
        return !1
    }
    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = ha;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d,
                e = c.documentElement,
                f = c.body,
                a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = ha),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , la = /<script|<style|<link/i
      , ma = /checked\s*(?:[^=]|=\s*.checked.)/i
      , na = /^true\/(.*)/
      , oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a),
            g = N.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a),
            i = n.extend({}, h),
            O.set(b, i))
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                ua(f, b, c, d)
            });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d),
        g = e.firstChild,
        1 === e.childNodes.length && (e = g),
        g || d)) {
            for (h = n.map(_(e, "script"), qa),
            i = h.length; o > m; m++)
                j = e,
                m !== p && (j = n.clone(j, !0, !0),
                i && n.merge(h, _(j, "script"))),
                c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                n.map(h, ra),
                m = 0; i > m; m++)
                    j = h[m],
                    Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h),
                f = _(a),
                d = 0,
                e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a),
                    g = g || _(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        sa(f[d], g[d]);
                else
                    sa(a, h);
            return g = _(h, "script"),
            g.length > 0 && aa(g, !i && _(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(_(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(_(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
                c = h === f ? this : this.clone(!0),
                n(e[h])[b](c),
                g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function za(a) {
        var b = d
          , c = xa[a];
        return c || (c = ya(a, b),
        "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = wa[0].contentDocument,
        b.write(),
        b.close(),
        c = ya(a, b),
        wa.detach()),
        xa[a] = c),
        c
    }
    var Aa = /^margin/
      , Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i")
      , Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
      , Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                h.innerHTML = "",
                Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top,
                f = "2px" === d.marginLeft,
                c = "4px" === d.width,
                h.style.marginRight = "50%",
                e = "4px" === d.marginRight,
                Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && i(),
                    c
                },
                pixelMarginRight: function() {
                    return null == c && i(),
                    e
                },
                reliableMarginLeft: function() {
                    return null == c && i(),
                    f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    h.style.width = "1px",
                    Ea.appendChild(g),
                    b = !parseFloat(a.getComputedStyle(c).marginRight),
                    Ea.removeChild(g),
                    h.removeChild(c),
                    b
                }
            })
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 !== g ? g + "" : g
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/
      , Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ka = ["Webkit", "O", "Moz", "ms"]
      , La = d.createElement("div").style;
    function Ma(a) {
        if (a in La)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ka.length;
        while (c--)
            if (a = Ka[c] + b,
            a in La)
                return a
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Pa(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ca(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ba.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = N.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d),
            "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Fa(a, b, d)),
            "normal" === e && b in Ja && (e = Ja[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = n.css(a, b)),
                Na(a, c, g)
            }
        }
    }),
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }),
    n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ra,
    Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
            this
        }
    },
    Ra.prototype.init.prototype = Ra.prototype,
    Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = Ra.prototype.init,
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }),
        Sa = n.now()
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = U[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Ua.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = N.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ya(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, Ya, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _a.tweeners[c] = _a.tweeners[c] || [],
                _a.tweeners[c].unshift(b)
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = N.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Sa = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(Ta),
        Ta = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        l.checkOn = "" !== a.value,
        l.optSelected = c.selected,
        b.disabled = !0,
        l.optDisabled = !c.disabled,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        }
    }),
    ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b],
            bb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            bb[b] = f),
            e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i
      , db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = fb(this),
                    b && N.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var gb = /\r/g
      , hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            l = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q,
                    ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : o.bindType || q,
                    m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"),
                    m && m.apply(h, c),
                    m = l && h[l],
                    m && m.apply && L(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l],
                i && (e[l] = null),
                n.event.triggered = q,
                e[q](),
                n.event.triggered = void 0,
                i && (e[l] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }),
    n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    l.focusin = "onfocusin"in a,
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b);
                e || d.addEventListener(a, c, !0),
                N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
                N.remove(d, b))
            }
        }
    });
    var jb = a.location
      , kb = n.now()
      , lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var mb = /#.*$/
      , nb = /([?&])_=[^&]*/
      , ob = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qb = /^(?:GET|HEAD)$/
      , rb = /^\/\//
      , sb = {}
      , tb = {}
      , ub = "*/".concat("*")
      , vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function xb(a, b, c, d) {
        var e = {}
          , f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > v)
                            for (b in a)
                                s[b] = [s[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b),
                    z(0, b),
                    this
                }
            };
            if (q.promise(x).complete = r.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"),
            m.type = c.method || c.type || m.method || m.type,
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""],
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)),
            xb(sb, m, c, x),
            2 === v)
                return x;
            k = n.event && m.global,
            k && 0 === n.active++ && n.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !qb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data,
            delete m.data),
            m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1,
                k && p.trigger("ajaxSend", [x, m]),
                2 === v)
                    return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1,
                    e.send(t, z)
                } catch (y) {
                    if (!(2 > v))
                        throw y;
                    z(-1, y)
                }
            } else
                z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                x.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && 300 > b || 304 === b,
                d && (u = zb(m, x, d)),
                u = Ab(m, u, x, j),
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (n.lastModified[f] = w),
                w = x.getResponseHeader("etag"),
                w && (n.etag[f] = w)),
                204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state,
                l = u.data,
                t = u.error,
                j = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                x.status = b,
                x.statusText = (c || y) + "",
                j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
                x.statusCode(s),
                s = void 0,
                k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
                r.fireWith(o, [x, y]),
                k && (p.trigger("ajaxComplete", [x, m]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    }
    ;
    var Bb = /%20/g
      , Cb = /\[\]$/
      , Db = /\r?\n/g
      , Eb = /^(?:submit|button|image|reset|file)$/i
      , Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Hb = {
        0: 200,
        1223: 204
    }
      , Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials"in Ib,
    l.ajax = Ib = !!Ib,
    n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
                    for (g in b.xhrFields)
                        h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)
                    h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }
                ,
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }
                ,
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)
                        throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = []
      , Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Jb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb)
            return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (e = d.getBoundingClientRect(),
                c = Mb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ea
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b),
            Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery
      , Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob),
        b && a.jQuery === n && (a.jQuery = Nb),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
