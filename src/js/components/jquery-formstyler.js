/* jQuery Form Styler v1.7.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
})(function (b) {
    function z(c, a) {
        this.element = c;
        this.options = b.extend({}, N, a);
        this.init()
    }

    function H(c) {
        if (!b(c.target).parents().hasClass("jq-selectbox") && "OPTION" != c.target.nodeName && b("div.jq-selectbox.opened").length) {
            c = b("div.jq-selectbox.opened");
            var a = b("div.jq-selectbox__search input", c), f = b("div.jq-selectbox__dropdown", c);
            c.find("select").data("_" +
                t).options.onSelectClosed.call(c);
            a.length && a.val("").keyup();
            f.hide().find("li.sel").addClass("selected");
            c.removeClass("focused opened dropup dropdown")
        }
    }

    var t = "styler", N = {
        wrapper: "form",
        idSuffix: "-styler",
        filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
        fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
        selectPlaceholder: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",
        selectSearch: !1,
        selectSearchLimit: 10,
        selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
        selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
        selectVisibleOptions: 0,
        singleSelectzIndex: "10",
        selectSmartPositioning: !0,
        onSelectOpened: function () {
        },
        onSelectClosed: function () {
        },
        onFormStyled: function () {
        }
    };
    z.prototype = {
        init: function () {
            function c() {
                var b = "", d = "", c = "", e = "";
                void 0 !== a.attr("id") && "" !== a.attr("id") && (b = ' id="' + a.attr("id") + f.idSuffix + '"');
                void 0 !== a.attr("title") && "" !== a.attr("title") && (d = ' title="' + a.attr("title") + '"');
                void 0 !== a.attr("class") && "" !== a.attr("class") && (c = " " +
                    a.attr("class"));
                var k = a.data(), v;
                for (v in k)"" !== k[v] && "_styler" !== v && (e += " data-" + v + '="' + k[v] + '"');
                this.id = b + e;
                this.title = d;
                this.classes = c
            }

            var a = b(this.element), f = this.options, B = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1, t = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1;
            if (a.is(":checkbox")) {
                var z = function () {
                    var f = new c, d = b("<div" + f.id + ' class="jq-checkbox' + f.classes + '"' + f.title + '><div class="jq-checkbox__div"></div></div>');
                    a.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(d).prependTo(d);
                    d.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden"
                    });
                    a.is(":checked") && d.addClass("checked");
                    a.is(":disabled") && d.addClass("disabled");
                    d.on("click.styler", function () {
                        d.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), d.removeClass("checked")) :
                            (a.prop("checked", !0), d.addClass("checked")), a.change());
                        return !1
                    });
                    a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
                        b(a.target).is("a") || (d.click(), a.preventDefault())
                    });
                    a.on("change.styler", function () {
                        a.is(":checked") ? d.addClass("checked") : d.removeClass("checked")
                    }).on("keydown.styler", function (a) {
                        32 == a.which && d.click()
                    }).on("focus.styler", function () {
                        d.is(".disabled") || d.addClass("focused")
                    }).on("blur.styler", function () {
                        d.removeClass("focused")
                    })
                };
                z();
                a.on("refresh",
                    function () {
                        a.off(".styler").parent().before(a).remove();
                        z()
                    })
            } else if (a.is(":radio")) {
                var C = function () {
                    var u = new c, d = b("<div" + u.id + ' class="jq-radio' + u.classes + '"' + u.title + '><div class="jq-radio__div"></div></div>');
                    a.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(d).prependTo(d);
                    d.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative"
                    });
                    a.is(":checked") && d.addClass("checked");
                    a.is(":disabled") && d.addClass("disabled");
                    d.on("click.styler", function () {
                        d.is(".disabled") || (d.closest(f.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.change());
                        return !1
                    });
                    a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
                        b(a.target).is("a") || (d.click(), a.preventDefault())
                    });
                    a.on("change.styler", function () {
                        a.parent().addClass("checked")
                    }).on("focus.styler",
                        function () {
                            d.is(".disabled") || d.addClass("focused")
                        }).on("blur.styler", function () {
                            d.removeClass("focused")
                        })
                };
                C();
                a.on("refresh", function () {
                    a.off(".styler").parent().before(a).remove();
                    C()
                })
            } else if (a.is(":file")) {
                a.css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    margin: 0,
                    padding: 0
                });
                var D = function () {
                    var u = new c, d = a.data("placeholder");
                    void 0 === d && (d = f.filePlaceholder);
                    var A = a.data("browse");
                    if (void 0 === A || "" === A)A = f.fileBrowse;
                    var e = b("<div" + u.id + ' class="jq-file' + u.classes +
                        '"' + u.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'), k = b('<div class="jq-file__name">' + d + "</div>").appendTo(e);
                    b('<div class="jq-file__browse">' + A + "</div>").appendTo(e);
                    a.after(e).appendTo(e);
                    a.is(":disabled") && e.addClass("disabled");
                    a.on("change.styler", function () {
                        var b = a.val();
                        if (a.is("[multiple]"))for (var b = "", c = a[0].files, n = 0; n < c.length; n++)b += (0 < n ? ", " : "") + c[n].name;
                        k.text(b.replace(/.+[\\\/]/, ""));
                        "" === b ? (k.text(d), e.removeClass("changed")) : e.addClass("changed")
                    }).on("focus.styler",
                        function () {
                            e.addClass("focused")
                        }).on("blur.styler", function () {
                            e.removeClass("focused")
                        }).on("click.styler", function () {
                            e.removeClass("focused")
                        })
                };
                D();
                a.on("refresh", function () {
                    a.off(".styler").parent().before(a).remove();
                    D()
                })
            } else if (a.is('input[type="number"]')) {
                var E = function () {
                    var c = b('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                    a.after(c).prependTo(c).wrap('<div class="jq-number__field"></div>');
                    a.is(":disabled") && c.addClass("disabled");
                    var d, f, e, k = null, v = null;
                    void 0 !== a.attr("min") && (d = a.attr("min"));
                    void 0 !== a.attr("max") && (f = a.attr("max"));
                    e = void 0 !== a.attr("step") && b.isNumeric(a.attr("step")) ? Number(a.attr("step")) : Number(1);
                    var K = function (n) {
                        var c = a.val(), h;
                        b.isNumeric(c) || (c = 0, a.val("0"));
                        n.is(".minus") ? (h = parseInt(c, 10) - e, 0 < e && (h = Math.ceil(h / e) * e)) : n.is(".plus") && (h = parseInt(c, 10) + e, 0 < e && (h = Math.floor(h / e) * e));
                        b.isNumeric(d) && b.isNumeric(f) ? h >= d && h <= f && a.val(h) : b.isNumeric(d) && !b.isNumeric(f) ? h >= d && a.val(h) : !b.isNumeric(d) &&
                        b.isNumeric(f) ? h <= f && a.val(h) : a.val(h)
                    };
                    c.is(".disabled") || (c.on("mousedown.styler", "div.jq-number__spin", function () {
                        var a = b(this);
                        K(a);
                        k = setTimeout(function () {
                            v = setInterval(function () {
                                K(a)
                            }, 40)
                        }, 350)
                    }).on("mouseup.styler mouseout.styler", "div.jq-number__spin", function () {
                        clearTimeout(k);
                        clearInterval(v)
                    }), a.on("focus.styler", function () {
                        c.addClass("focused")
                    }).on("blur.styler", function () {
                        c.removeClass("focused")
                    }))
                };
                E();
                a.on("refresh", function () {
                    a.off(".styler").closest(".jq-number").before(a).remove();
                    E()
                })
            } else if (a.is("select")) {
                var M = function () {
                    function u(a) {
                        a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (a) {
                            var c = null;
                            "mousewheel" == a.type ? c = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (c = 40 * a.originalEvent.detail);
                            c && (a.stopPropagation(), a.preventDefault(), b(this).scrollTop(c + b(this).scrollTop()))
                        })
                    }

                    function d() {
                        for (var a = 0; a < k.length; a++) {
                            var b = k.eq(a), c = "", d = "", e = c = "", w = "", r = "", x = "", y = "", g = "";
                            b.prop("selected") && (d = "selected sel");
                            b.is(":disabled") &&
                            (d = "disabled");
                            b.is(":selected:disabled") && (d = "selected sel disabled");
                            void 0 !== b.attr("id") && "" !== b.attr("id") && (e = ' id="' + b.attr("id") + f.idSuffix + '"');
                            void 0 !== b.attr("title") && "" !== k.attr("title") && (w = ' title="' + b.attr("title") + '"');
                            void 0 !== b.attr("class") && (x = " " + b.attr("class"), g = ' data-jqfs-class="' + b.attr("class") + '"');
                            var u = b.data(), p;
                            for (p in u)"" !== u[p] && (r += " data-" + p + '="' + u[p] + '"');
                            "" !== d + x && (c = ' class="' + d + x + '"');
                            c = "<li" + g + r + c + w + e + ">" + b.html() + "</li>";
                            b.parent().is("optgroup") && (void 0 !==
                            b.parent().attr("class") && (y = " " + b.parent().attr("class")), c = "<li" + g + r + ' class="' + d + x + " option" + y + '"' + w + e + ">" + b.html() + "</li>", b.is(":first-child") && (c = '<li class="optgroup' + y + '">' + b.parent().attr("label") + "</li>" + c));
                            v += c
                        }
                    }

                    function z() {
                        var e = new c, n = "", q = a.data("placeholder"), h = a.data("search"), t = a.data("search-limit"), w = a.data("search-not-found"), r = a.data("search-placeholder"), x = a.data("z-index"), y = a.data("smart-positioning");
                        void 0 === q && (q = f.selectPlaceholder);
                        if (void 0 === h || "" === h)h = f.selectSearch;
                        if (void 0 === t || "" === t)t = f.selectSearchLimit;
                        if (void 0 === w || "" === w)w = f.selectSearchNotFound;
                        void 0 === r && (r = f.selectSearchPlaceholder);
                        if (void 0 === x || "" === x)x = f.singleSelectzIndex;
                        if (void 0 === y || "" === y)y = f.selectSmartPositioning;
                        var g = b("<div" + e.id + ' class="jq-selectbox jqselect' + e.classes + '" style="display: inline-block; position: relative; z-index:' + x + '"><div class="jq-selectbox__select"' + e.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                        a.css({margin: 0, padding: 0}).after(g).prependTo(g);
                        var L = b("div.jq-selectbox__select", g), p = b("div.jq-selectbox__select-text", g), e = k.filter(":selected");
                        d();
                        h && (n = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + r + '"></div><div class="jq-selectbox__not-found">' + w + "</div>");
                        var l = b('<div class="jq-selectbox__dropdown" style="position: absolute">' + n + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + v + "</ul></div>");
                        g.append(l);
                        var s = b("ul", l), m = b("li", l), F = b("input", l), A = b("div.jq-selectbox__not-found", l).hide();
                        m.length < t && F.parent().hide();
                        "" === a.val() ? p.text(q).addClass("placeholder") : p.text(e.text());
                        var G = 0, C = 0;
                        m.each(function () {
                            var a = b(this);
                            a.css({display: "inline-block"});
                            a.innerWidth() > G && (G = a.innerWidth(), C = a.width());
                            a.css({display: ""})
                        });
                        p.is(".placeholder") && p.width() > G ? p.width(p.width()) : (n = g.clone().appendTo("body").width("auto"), h = n.outerWidth(), n.remove(), h == g.outerWidth() && p.width(C));
                        G > g.width() && l.width(G);
                        "" === k.first().text() && "" !== a.data("placeholder") && m.first().hide();
                        a.css({position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0});
                        var D = g.outerHeight(), I = F.outerHeight(), J = s.css("max-height"), n = m.filter(".selected");
                        1 > n.length && m.first().addClass("selected sel");
                        void 0 === m.data("li-height") && m.data("li-height", m.outerHeight());
                        var E = l.css("top");
                        "auto" == l.css("left") && l.css({left: 0});
                        "auto" == l.css("top") && l.css({top: D});
                        l.hide();
                        n.length && (k.first().text() != e.text() && g.addClass("changed"),
                            g.data("jqfs-class", n.data("jqfs-class")), g.addClass(n.data("jqfs-class")));
                        if (a.is(":disabled"))return g.addClass("disabled"), !1;
                        L.click(function () {
                            b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(b("div.jq-selectbox").filter(".opened"));
                            a.focus();
                            if (!B) {
                                var c = b(window), d = m.data("li-height"), e = g.offset().top, h = c.height() - D - (e - c.scrollTop()), r = a.data("visible-options");
                                if (void 0 === r || "" === r)r = f.selectVisibleOptions;
                                var n = 5 * d, p = d * r;
                                0 < r && 6 > r && (n = p);
                                0 === r && (p = "auto");
                                var r = function () {
                                    l.height("auto").css({
                                        bottom: "auto",
                                        top: E
                                    });
                                    var a = function () {
                                        s.css("max-height", Math.floor((h - 20 - I) / d) * d)
                                    };
                                    a();
                                    s.css("max-height", p);
                                    "none" != J && s.css("max-height", J);
                                    h < l.outerHeight() + 20 && a()
                                }, q = function () {
                                    l.height("auto").css({top: "auto", bottom: E});
                                    var a = function () {
                                        s.css("max-height", Math.floor((e - c.scrollTop() - 20 - I) / d) * d)
                                    };
                                    a();
                                    s.css("max-height", p);
                                    "none" != J && s.css("max-height", J);
                                    e - c.scrollTop() - 20 < l.outerHeight() + 20 && a()
                                };
                                !0 === y || 1 === y ? h > n + I + 20 ? (r(), g.removeClass("dropup").addClass("dropdown")) : (q(), g.removeClass("dropdown").addClass("dropup")) :
                                (!1 === y || 0 === y) && h > n + I + 20 && (r(), g.removeClass("dropup").addClass("dropdown"));
                                g.offset().left + l.outerWidth() > c.width() && l.css({left: "auto", right: 0});
                                b("div.jqselect").css({zIndex: x - 1}).removeClass("opened");
                                g.css({zIndex: x});
                                l.is(":hidden") ? (b("div.jq-selectbox__dropdown:visible").hide(), l.show(), g.addClass("opened focused"), f.onSelectOpened.call(g)) : (l.hide(), g.removeClass("opened dropup dropdown"), b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(g));
                                F.length && (F.val("").keyup(),
                                    A.hide(), F.keyup(function () {
                                    var c = b(this).val();
                                    m.each(function () {
                                        b(this).html().match(RegExp(".*?" + c + ".*?", "i")) ? b(this).show() : b(this).hide()
                                    });
                                    "" === k.first().text() && "" !== a.data("placeholder") && m.first().hide();
                                    1 > m.filter(":visible").length ? A.show() : A.hide()
                                }));
                                m.filter(".selected").length && ("" === a.val() ? s.scrollTop(0) : (0 !== s.innerHeight() / d % 2 && (d /= 2), s.scrollTop(s.scrollTop() + m.filter(".selected").position().top - s.innerHeight() / 2 + d)));
                                u(s);
                                return !1
                            }
                        });
                        m.hover(function () {
                            b(this).siblings().removeClass("selected")
                        });
                        m.filter(".selected").text();
                        m.filter(":not(.disabled):not(.optgroup)").click(function () {
                            a.focus();
                            var c = b(this), d = c.text();
                            if (!c.is(".selected")) {
                                var e = c.index(), e = e - c.prevAll(".optgroup").length;
                                c.addClass("selected sel").siblings().removeClass("selected sel");
                                k.prop("selected", !1).eq(e).prop("selected", !0);
                                p.text(d);
                                g.data("jqfs-class") && g.removeClass(g.data("jqfs-class"));
                                g.data("jqfs-class", c.data("jqfs-class"));
                                g.addClass(c.data("jqfs-class"));
                                a.change()
                            }
                            l.hide();
                            g.removeClass("opened dropup dropdown");
                            f.onSelectClosed.call(g)
                        });
                        l.mouseout(function () {
                            b("li.sel", l).addClass("selected")
                        });
                        a.on("change.styler", function () {
                            p.text(k.filter(":selected").text()).removeClass("placeholder");
                            m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                            k.first().text() != m.filter(".selected").text() ? g.addClass("changed") : g.removeClass("changed")
                        }).on("focus.styler", function () {
                            g.addClass("focused");
                            b("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler",
                            function () {
                                g.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function (b) {
                                var c = m.data("li-height");
                                "" === a.val() ? p.text(q).addClass("placeholder") : p.text(k.filter(":selected").text());
                                m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                if (38 == b.which || 37 == b.which || 33 == b.which || 36 == b.which)"" === a.val() ? s.scrollTop(0) : s.scrollTop(s.scrollTop() + m.filter(".selected").position().top);
                                40 != b.which && 39 != b.which && 34 != b.which && 35 != b.which || s.scrollTop(s.scrollTop() +
                                    m.filter(".selected").position().top - s.innerHeight() + c);
                                13 == b.which && (b.preventDefault(), l.hide(), g.removeClass("opened dropup dropdown"), f.onSelectClosed.call(g))
                            }).on("keydown.styler", function (a) {
                                32 == a.which && (a.preventDefault(), L.click())
                            });
                        H.registered || (b(document).on("click", H), H.registered = !0)
                    }

                    function e() {
                        var e = new c, f = b("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
                        a.css({margin: 0, padding: 0}).after(f);
                        d();
                        f.append("<ul>" + v + "</ul>");
                        var q = b("ul", f).css({
                            position: "relative",
                            "overflow-x": "hidden",
                            "-webkit-overflow-scrolling": "touch"
                        }), h = b("li", f).attr("unselectable", "on"), e = a.attr("size"), t = q.outerHeight(), w = h.outerHeight();
                        void 0 !== e && 0 < e ? q.css({height: w * e}) : q.css({height: 4 * w});
                        t > f.height() && (q.css("overflowY", "scroll"), u(q), h.filter(".selected").length && q.scrollTop(q.scrollTop() + h.filter(".selected").position().top));
                        a.prependTo(f).css({
                            position: "absolute", left: 0, top: 0, width: "100%", height: "100%",
                            opacity: 0
                        });
                        if (a.is(":disabled"))f.addClass("disabled"), k.each(function () {
                            b(this).is(":selected") && h.eq(b(this).index()).addClass("selected")
                        }); else if (h.filter(":not(.disabled):not(.optgroup)").click(function (c) {
                                a.focus();
                                var d = b(this);
                                c.ctrlKey || c.metaKey || d.addClass("selected");
                                c.shiftKey || d.addClass("first");
                                c.ctrlKey || (c.metaKey || c.shiftKey) || d.siblings().removeClass("selected first");
                                if (c.ctrlKey || c.metaKey)d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first");
                                if (c.shiftKey) {
                                    var e = !1, f = !1;
                                    d.siblings().removeClass("selected").siblings(".first").addClass("selected");
                                    d.prevAll().each(function () {
                                        b(this).is(".first") && (e = !0)
                                    });
                                    d.nextAll().each(function () {
                                        b(this).is(".first") && (f = !0)
                                    });
                                    e && d.prevAll().each(function () {
                                        if (b(this).is(".selected"))return !1;
                                        b(this).not(".disabled, .optgroup").addClass("selected")
                                    });
                                    f && d.nextAll().each(function () {
                                        if (b(this).is(".selected"))return !1;
                                        b(this).not(".disabled, .optgroup").addClass("selected")
                                    });
                                    1 == h.filter(".selected").length &&
                                    d.addClass("first")
                                }
                                k.prop("selected", !1);
                                h.filter(".selected").each(function () {
                                    var a = b(this), c = a.index();
                                    a.is(".option") && (c -= a.prevAll(".optgroup").length);
                                    k.eq(c).prop("selected", !0)
                                });
                                a.change()
                            }), k.each(function (a) {
                                b(this).data("optionIndex", a)
                            }), a.on("change.styler", function () {
                                h.removeClass("selected");
                                var a = [];
                                k.filter(":selected").each(function () {
                                    a.push(b(this).data("optionIndex"))
                                });
                                h.not(".optgroup").filter(function (c) {
                                    return -1 < b.inArray(c, a)
                                }).addClass("selected")
                            }).on("focus.styler", function () {
                                f.addClass("focused")
                            }).on("blur.styler",
                                function () {
                                    f.removeClass("focused")
                                }), t > f.height())a.on("keydown.styler", function (a) {
                            38 != a.which && 37 != a.which && 33 != a.which || q.scrollTop(q.scrollTop() + h.filter(".selected").position().top - w);
                            40 != a.which && 39 != a.which && 34 != a.which || q.scrollTop(q.scrollTop() + h.filter(".selected:last").position().top - q.innerHeight() + 2 * w)
                        })
                    }

                    var k = b("option", a), v = "";
                    a.is("[multiple]") ? t || B || e() : z()
                };
                M();
                a.on("refresh", function () {
                    a.off(".styler").parent().before(a).remove();
                    M()
                })
            } else if (a.is(":reset"))a.on("click", function () {
                setTimeout(function () {
                        a.closest(f.wrapper).find("input, select").trigger("refresh")
                    },
                    1)
            })
        }, destroy: function () {
            var c = b(this.element);
            c.is(":checkbox") || c.is(":radio") ? (c.removeData().off(".styler").removeAttr("style").parent().before(c).remove(), c.closest("label").add('label[for="' + c.attr("id") + '"]').off(".styler")) : c.is('input[type="number"]') ? c.removeData().off(".styler").closest(".jq-number").before(c).remove() : (c.is(":file") || c.is("select")) && c.removeData().off(".styler").removeAttr("style").parent().before(c).remove()
        }
    };
    b.fn[t] = function (c) {
        var a = arguments;
        if (void 0 === c || "object" === typeof c)return this.each(function () {
            b.data(this, "_" + t) || b.data(this, "_" + t, new z(this, c))
        }).promise().done(function () {
            var a = b(this[0]).data("_" + t);
            a && a.options.onFormStyled.call()
        });
        if ("string" === typeof c && "_" !== c[0] && "init" !== c) {
            var f;
            this.each(function () {
                var B = b.data(this, "_" + t);
                B instanceof z && "function" === typeof B[c] && (f = B[c].apply(B, Array.prototype.slice.call(a, 1)))
            });
            return void 0 !== f ? f : this
        }
    };
    H.registered = !1
});