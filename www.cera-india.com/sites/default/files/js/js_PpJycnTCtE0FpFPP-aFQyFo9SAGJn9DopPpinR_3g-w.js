! function(I) {
    function e() {
        if (0 < I("#sticky").length) {
            var e;
            e = !(I(".basin-filters-main").hasClass("colourBasinFilters") && 768 <= I(window).width()) && I(".basin-filters-main").hasClass("colourBasinFilters") && I(window).width() < 768 ? I(window).scrollTop() + 75 : I(window).scrollTop() + 67;
            var i = I("#sticky-anchor").offset().top,
                a = I(".removeFilter").offset().top;
            i <= e && e < a ? I("#sticky").addClass("stick") : I("#sticky").removeClass("stick")
        }
    }

    function i() {
        var e;
        0 < I(".productBand").length && (e = 768 <= I(window).width() ? I(window).scrollTop() + 76 : I(window).scrollTop() + 75, I("#sticky-anchor").offset().top < e ? I("#sticky").addClass("stick") : I("#sticky").removeClass("stick"))
    }

    function a() {
        var e;
        0 < I(".commonBanner").length && (e = 768 <= I(window).width() ? I(window).scrollTop() + 65 : I(window).scrollTop(), I(".commonBanner").offset().top <= e ? (I(".navbar-inverse .topNavWrapper").addClass("hide"), I(".navbar-inverse .navMenuWrapper").addClass("navMenuWrapperFixed")) : (I(".navbar-inverse .topNavWrapper").removeClass("hide"), I(".navbar-inverse .navMenuWrapper").removeClass("navMenuWrapperFixed")))
    }
    I(document).ready(function() {
        var i, a, o, r;

        function e(e) {
            return i = I(e).offset().top, a = i + I(e).outerHeight(), o = I(window).scrollTop(), r = o + I(window).height(), o < a && i < r
        }
        0 < I(".topNavRight ul>li .subMenusWrapper2, .navbar-collapse ul>li .subMenusWrapper2").length && 1025 <= I(window).width() && I(".topNavRight ul>li.topNavLi, .cera-navbar .navbar-nav>li").hover(function() {
            I(this).find(".menuNav1").addClass("activeNav1"), I(this).find(".subMenusWrapper2").show(), I(".navMenuWrapper").addClass("open"), I(".topNavWrapper").addClass("open"), 10 < I("#bathroomT1C").find(".itemWrapper .item").length ? (I(".tabsMainWrapper").removeClass("noScroll"), I("#bathroomT1C").find(".itemWrapper").addClass("vheight"), I("#bathroomT1C").find(".itemWrapper").mCustomScrollbar()) : I(".tabsMainWrapper").addClass("noScroll")
        }, function() {
            I(this).find(".menuNav1").removeClass("activeNav1"), I(this).find(".subMenusWrapper2").hide(), I(".navMenuWrapper").removeClass("open"), I(".topNavWrapper").removeClass("open")
        }), I(document).mouseup(function(e) {
            var i = I(".subMenusWrapper2");
            i.is(e.target) || 0 !== i.has(e.target).length || i.hide()
        }), I(window).width() < 768 && (I(".mobNavBtn").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("openNav") ? (I(this).next(".subMenusWrapper2").hide(), I(".cera-navbar-mobile .subMenusWrapper2").css("width", "0"), I(".cera-navbar-mobile .mobNavBtn").removeClass("openNav")) : (I(".cera-navbar-mobile .subMenusWrapper2").css("width", "0"), I(".cera-navbar-mobile .mobNavBtn").removeClass("openNav"), I(this).addClass("openNav"), I(this).next(".subMenusWrapper2").show(), I(this).next(".subMenusWrapper2").css("width", "100%"))
        }), I(".menuBackBtn a").on("click", function(e) {
            e.preventDefault(), I(this).parents("li").find(".mobNavBtn").hasClass("openNav") && (I(".cera-navbar-mobile .subMenusWrapper2").css("width", "0"), I(".cera-navbar-mobile .mobNavBtn").removeClass("openNav"))
        }), I(".mobSubNavBtn").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("openSubNav") ? (I(this).next(".subMenusWrapper3").hide(), I(".cera-navbar-mobile .subMenusWrapper3").css("width", "0"), I(".cera-navbar-mobile .mobSubNavBtn").removeClass("openSubNav")) : (I(".cera-navbar-mobile .subMenusWrapper3").css("width", "0"), I(".cera-navbar-mobile .mobSubNavBtn").removeClass("openSubNav"), I(this).addClass("openSubNav"), I(this).next(".subMenusWrapper3").show(), I(this).next(".subMenusWrapper3").css("width", "100%"))
        }), I(".menuSubBackBtn a").on("click", function(e) {
            e.preventDefault(), I(this).parents("li").find(".mobSubNavBtn").hasClass("openSubNav") && (I(".cera-navbar-mobile .subMenusWrapper3").css("width", "0"), I(".cera-navbar-mobile .mobSubNavBtn").removeClass("openSubNav"))
        }), I(".cera-navbar-mobile .topNavWrapper ul>li>a").on("click", function(e) {
            I(this).hasClass("openBrand") ? (I(this).next(".topNavInner").hide(), I(".cera-navbar-mobile .topNavWrapper ul>li>a").removeClass("openBrand")) : (I(this).addClass("openBrand"), I(this).next(".topNavInner").show())
        }), I(".cera-navbar-mobile .topNavWrapper ul>li .btnClose").on("click", function(e) {
            I(this).parents("li").find(".topBrand").hasClass("openBrand") && (I(".cera-navbar-mobile .topNavWrapper .topNavInner").hide(), I(".cera-navbar-mobile .topNavWrapper ul>li>a").removeClass("openBrand"))
        })), 767 < I(window).width() && I(window).width() < 1025 && 0 < I(".topNavRight ul>li .subMenusWrapper2").length && I(".cera-navbar .menuNav1").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("activeNav1") ? (I(".cera-navbar .subMenusWrapper2").hide(), I(".cera-navbar .menuNav1").removeClass("activeNav1")) : (I(".cera-navbar .subMenusWrapper2").hide(), I(".cera-navbar .menuNav1").removeClass("activeNav1"), I(this).addClass("activeNav1"), I(this).next(".subMenusWrapper2").show())
        }), I(".navbar-toggle").on("click", function(e) {
            e.preventDefault(), "block" != I(".profileBoxWrapper").css("display") && "visible" != I(".profileBoxWrapper").css("visibility") || (I(".profileBoxWrapper").slideUp("slow"), I(".navProfileIconM").removeClass("open")), "block" != I(".searchBoxWrapper").css("display") && "visible" != I(".searchBoxWrapper").css("visibility") || (I(".searchBoxWrapper").slideUp("slow"), I(".navSearchIconM").removeClass("open")), "block" != I(".cart-wrapper").css("display") && "visible" != I(".cart-wrapper").css("visibility") || (I(".cart-wrapper").slideUp("slow"), I(".navCartIconM").removeClass("open"))
        }), I(".navSearchIcon").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).parents(".topNavRight").find(".searchBoxWrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).parents(".topNavRight").find(".searchBoxWrapper").slideDown("slow"), I(".searchBoxWrapper").find(".navSearchInput").focus()), "block" != I(".cart-wrapper").css("display") && "visible" != I(".cart-wrapper").css("visibility") || (I(".cart-wrapper").slideUp("slow"), I(".navcartIcon").removeClass("open")), "block" != I(".profileBoxWrapper").css("display") && "visible" != I(".profileBoxWrapper").css("visibility") || (I(".profileBoxWrapper").slideUp("slow"), I(".navProfileIcon").removeClass("open"))
        }), I(".navSearchIconM").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).next(".searchBoxWrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).next(".searchBoxWrapper").slideDown("slow")), "block" != I(".cart-wrapper").css("display") && "visible" != I(".cart-wrapper").css("visibility") || (I(".cart-wrapper").slideUp("slow"), I(".navcartIcon").removeClass("open")), "block" != I(".profileBoxWrapper").css("display") && "visible" != I(".profileBoxWrapper").css("visibility") || (I(".profileBoxWrapper").slideUp("slow"), I(".navProfileIcon").removeClass("open")), I(".navbar-collapse").hasClass("in") && (I(".navbar-collapse").removeClass("in"), I(".navbar-toggle").addClass("collapsed"))
        }), I(".navProfileIcon").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).parents(".topNavRight").find(".profileBoxWrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).parents(".topNavRight").find(".profileBoxWrapper").slideDown("slow")), "block" != I(".cart-wrapper").css("display") && "visible" != I(".cart-wrapper").css("visibility") || (I(".cart-wrapper").slideUp("slow"), I(".navcartIcon").removeClass("open")), "block" != I(".searchBoxWrapper").css("display") && "visible" != I(".searchBoxWrapper").css("visibility") || (I(".searchBoxWrapper").slideUp("slow"), I(".navSearchIcon").removeClass("open"))
        }), I(".navProfileIconM").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).next(".profileBoxWrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).next(".profileBoxWrapper").slideDown("slow")), "block" != I(".cart-wrapper").css("display") && "visible" != I(".cart-wrapper").css("visibility") || (I(".cart-wrapper").slideUp("slow"), I(".navcartIconM").removeClass("open")), "block" != I(".searchBoxWrapper").css("display") && "visible" != I(".searchBoxWrapper").css("visibility") || (I(".searchBoxWrapper").slideUp("slow"), I(".navSearchIconM").removeClass("open")), I(".navbar-collapse").hasClass("in") && (I(".navbar-collapse").removeClass("in"), I(".navbar-toggle").addClass("collapsed"))
        }), I(".navcartIcon").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).find("span").show(), I(this).parents(".topNavRight").find(".cart-wrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).parents(".topNavRight").find(".cart-wrapper").slideDown("slow"), I(this).find("span").hide()), "block" != I(".profileBoxWrapper").css("display") && "visible" != I(".profileBoxWrapper").css("visibility") || (I(".profileBoxWrapper").slideUp("slow"), I(".navProfileIcon").removeClass("open")), "block" != I(".searchBoxWrapper").css("display") && "visible" != I(".searchBoxWrapper").css("visibility") || (I(".searchBoxWrapper").slideUp("slow"), I(".navSearchIcon").removeClass("open"))
        }), 0 < I(".cart-body").length && I(".cart-body").mCustomScrollbar(), I(".navCartIconM").on("click", function(e) {
            e.preventDefault(), I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).next(".cart-wrapper").slideUp("slow")) : (I(this).addClass("open"), I(this).next(".cart-wrapper").slideDown("slow")), "block" != I(".profileBoxWrapper").css("display") && "visible" != I(".profileBoxWrapper").css("visibility") || (I(".profileBoxWrapper").slideUp("slow"), I(".navProfileIconM").removeClass("open")), "block" != I(".searchBoxWrapper").css("display") && "visible" != I(".searchBoxWrapper").css("visibility") || (I(".searchBoxWrapper").slideUp("slow"), I(".navSearchIconM").removeClass("open"))
        }), I("#freehandVideo-1").length && (I("video").each(function() {
            I(this).attr("webkit-playsinline", ""), I(this).attr("playsinline", ""), I(this).attr("muted", "muted"), document.getElementById("freehandVideo-1").load()
        }), I(window).scroll(function() {
            I("#freehandVideo-1").each(function() {
                1 == e(this) ? I(this)[0].play() : I(this)[0].pause()
            })
        }));
        I("#freehandVideo-M").length && (I("#freehandVideo-M").each(function() {
            I(this).attr("webkit-playsinline", ""), I(this).attr("playsinline", ""), I(this).attr("muted", "muted"), document.getElementById("freehandVideo-M").load()
        }), I(window).scroll(function() {
            I("#freehandVideo-M").each(function() {
                1 == e(this) ? I(this)[0].play() : I(this)[0].pause()
            })
        }));
        I("#freehandVideo-2").length && (I("video").each(function() {
            I(this).attr("webkit-playsinline", ""), I(this).attr("playsinline", ""), I(this).attr("muted", "muted"), document.getElementById("freehandVideo-2").load()
        }), I(window).scroll(function() {
            I("#freehandVideo-2").each(function() {
                1 == e(this) ? I(this)[0].play() : I(this)[0].pause()
            })
        }));
        if (0 < I(".cera-navbar .navBtnsWrapper").length && (I("#bathroomT1C").show(), 10 < I("#bathroomT1C").find(".itemWrapper .item").length ? (I("#bathroomT1C").find(".itemWrapper").addClass("vheight"), I("#bathroomT1C").find(".itemWrapper").mCustomScrollbar(), I(".tabsMainWrapper").removeClass("noScroll")) : I(".tabsMainWrapper").addClass("noScroll"), I("#bathroomT1").addClass("active"), I("#bathroomT1B").show(), I(".cera-navbar .tabs li").on("click", function(e) {
                e.preventDefault();
                var i = I(this).attr("id");
                I(this).hasClass("active") || (I(".cera-navbar .tabs li").removeClass("active"), I(this).addClass("active"), I("#" + i + "C").parents(".tabsMainWrapper").removeClass("noScroll"), I(".cera-navbar .tabContent").hide(), I("#" + i + "B").fadeIn("slow"), I("#" + i + "C").fadeIn("slow"), 10 < I("#" + i + "C").find(".itemWrapper .item").length ? (I("#" + i + "C").find(".itemWrapper").addClass("vheight"), I("#" + i + "C").find(".itemWrapper").mCustomScrollbar()) : I("#" + i + "C").parents(".tabsMainWrapper").addClass("noScroll"))
            })), 0 < I(".threeGrid").length && I(".commonFilterRight li").on("click", function() {
                var e = I(this).attr("class");
                if (!I(this).parents(".common-filter-wrapper").next(".filtersContainer").hasClass(e + "Col")) {
                    I(".commonFilterRight li").removeClass("open"), I(this).addClass("open");
                    var i = I(this).attr("class").split(" ")[0];
                    I(this).parents(".common-filter-wrapper").next().removeClass("threeGridCol"), I(this).parents(".common-filter-wrapper").next().removeClass("fourGridCol"), I(this).parents(".common-filter-wrapper").next().removeClass("oneGridCol"), I(this).parents(".common-filter-wrapper").next().addClass(i + "Col")
                }
            }), I(window).width() <= 768) {
            var s = I(window).height();
            I(".stack-cards__item").css("height", s + "px")
        }
        if (I(window).width() < 768) {
            var t = I(".drop-down .options ul li").first().html();
            I(".drop-down .selected").html(t), I(".drop-down .selected a").click(function() {
                I(".drop-down .options ul").toggle()
            }), I(".drop-down .options ul li a").click(function() {
                var e = I(this).html();
                I(".drop-down .selected a").html(e), I(".drop-down .options ul").hide()
            }), I(document).bind("click", function(e) {
                I(e.target).parents().hasClass("drop-down") || I(".drop-down .options ul").hide()
            })
        }
        0 < I(".homeBrandsSlider").length && I(".homeBrandsSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".homeBrandsPrev"),
            nextArrow: I(".homeBrandsNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1
                }
            }]
        });
        0 < I(".home-brands-wrapper .tabs").length && (I("#homeBrands1C").show(), I("#homeBrands1C").find(".homeBrandsSlider").slick("refresh"), I("#homeBrands1").addClass("active"), I(".home-brands-wrapper .tabs li").on("click", function(e) {
            e.preventDefault();
            var i = I(this).attr("id");
            I(this).hasClass("active") || (I(".home-brands-wrapper .tabs li").removeClass("active"), I(this).addClass("active"), I(".home-brands-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"), I("#" + i + "C").find(".homeBrandsSlider").slick("refresh"))
        })), I(".cucineClassificationSlider").slick({
            arrows: !0,
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".cucineClassificationPrev"),
            nextArrow: I(".cucineClassificationNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1
                }
            }]
        }), 0 < I(".cucine-classification-wrapper .nav-tabs").length && (I("#cucineClassification1C").show(), I("#cucineClassification1C").find(".cucineClassificationSlider").slick("refresh"), I("#cucineClassification1").addClass("active"), I(".cucine-classification-wrapper .nav-tabs li").on("click", function(e) {
            e.preventDefault();
            var i = I(this).attr("id");
            I(this).hasClass("active") || (I(".cucine-classification-wrapper .nav-tabs li").removeClass("active"), I(this).addClass("active"), I(".cucine-classification-wrapper .tab-pane").hide(), I("#" + i + "C").fadeIn("slow"), I("#" + i + "C").find(".cucineClassificationSlider").slick("refresh"))
        })), 0 < I(".isveaDesignersSlider").length && I(".isveaDesignersSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".isveaDesignersPrev"),
            nextArrow: I(".isveaDesignersNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1
                }
            }]
        });
        0 < I(".isvea-designers-wrapper .tabs").length && I(".isvea-designers-wrapper .tabs").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            focusOnSelect: !0,
            prevArrow: I(".isveaDesignerPrev"),
            nextArrow: I(".isveaDesignerNext"),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    draggable: !0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !0,
                    slidesToShow: 1,
                    draggable: !0
                }
            }]
        });
        var n = "";
        0 < I(".isvea-designers-wrapper .tabs").length && (I("#isveaDesigners1C").show(), I("#isveaDesigners1C").find(".isveaDesignersSlider").slick("refresh"), n = I(".slick-current").find(".tabItem")[0], I(n).addClass("active"), I(".isvea-designers-wrapper .tabs .slick-slide").each(function() {
            I(this).on("click", function(e) {
                var i = I(this).find(".tabItem").attr("data-id");
                "" == I(this).find(".tabItem").attr("id") ? I("#" + i).click() : (e.preventDefault(), I(n).removeClass("active"), I(this).find(".tabItem").addClass("active"), I(".isvea-designers-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"), I("#" + i + "C").find(".isveaDesignersSlider").slick("refresh"), n = I(this).find(".tabItem")[0])
            })
        })), 0 < I(".compliance-report-wrapper .tabs").length && (I("#cReport1C").show(), I("#cReport1").addClass("active"), I(".compliance-report-wrapper .tabs li").on("click", function(e) {
            e.preventDefault();
            var i = I(this).attr("id");
            I(this).hasClass("active") || (I(".compliance-report-wrapper .tabs li").removeClass("active"), I(this).addClass("active"), I(".compliance-report-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"))
        })), 0 < I(".homeBannerSlider").length && I(".homeBannerSlider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !1,
            dots: !0,
            autoplay: !0
        });
        var l = I(".fbContent").find(".slick-list");
        0 < I(".home-social-wrapper .tabs").length && (I("#homeSocial1C").show(), I("#homeSocial1C").find(".homeBrandsSlider").slick("refresh"), I("#homeSocial1").addClass("active"), I(".home-social-wrapper .tabs li").on("click", function(e) {
            e.preventDefault();
            var i = I(this).attr("id");
            I(this).hasClass("active") || (I(".home-social-wrapper .tabs li").removeClass("active"), I(this).addClass("active"), I(".home-social-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"), I("#" + i + "C").find(".homeSocialSlider").slick("refresh"), (l = I("#" + i + "C").find(".slick-list")).find(".slick-track").children().length < 4 ? I(".home-social-wrapper .slick-scroll").hide() : I(".home-social-wrapper .slick-scroll").show())
        })), 0 < I(".homeSocialSlider").length && I(".homeSocialSlider").slick({
            arrows: !1,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        if (I(".home-social-wrapper .slick-child").css("width", I(".home-social-wrapper .slick-track").width()), I(".home-social-wrapper .slick-scroll").on("scroll", function() {
                I("#homeSocial1C").find(" .slick-list").prop("scrollLeft", this.scrollLeft)
            }), I("#homeSocial1C").find(".slick-track").children().length < 4 ? I(".home-social-wrapper .slick-scroll").hide() : I(".home-social-wrapper .slick-scroll").show(), I(".home-social-wrapper .slick-scroll").on("scroll", function() {
                l.prop("scrollLeft", this.scrollLeft)
            }), 0 < I(".senator-social-wrapper .tabs").length && (I("#senatorSocial1C").show(), I("#senatorSocial1").addClass("active"), I(".senator-social-wrapper .tabs li").on("click", function(e) {
                e.preventDefault();
                var i = I(this).attr("id");
                I(this).hasClass("active") || (I(".senator-social-wrapper .tabs li").removeClass("active"), I(this).addClass("active"), I(".senator-social-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"))
            })), I(window).width() < 768 && 0 < I(".productCategoriesInner").length)
            if (8 < I(".productCategoriesInner .item").length) {
                var c = I(".productCategoriesInner .item").length;
                I(".productCategoriesInner .item:lt(" + (f = 8) + ")").css("display", "inline-block"), I(".productCategoriesWrapper .btnDoubleBox a").on("click", function(e) {
                    e.preventDefault(), f + 8 <= c ? (I(".productCategoriesInner .item:lt(" + (f += 8) + ")").css("display", "inline-block"), f == c && I(".productCategoriesWrapper .btnDoubleBox").hide()) : (I(".productCategoriesInner .item").css("display", "inline-block"), I(".productCategoriesWrapper .btnDoubleBox").hide())
                })
            } else I(".productCategoriesInner .item").css("display", "inline-block"), I(".productCategoriesWrapper .btnDoubleBox").hide();
        if (I(window).width() < 768 && 0 < I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper").length)
            if (3 < I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item").length) {
                c = I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item").length;
                I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item:lt(" + (f = 3) + ")").show(), I(".wash-basin-ideas-wrapper .btnDoubleBox a").on("click", function(e) {
                    e.preventDefault(), f + 3 <= c ? (I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item:lt(" + (f += 3) + ")").show(), f == c && I(".wash-basin-ideas-wrapper .btnDoubleBox").hide()) : (I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item").show(), I(".wash-basin-ideas-wrapper .btnDoubleBox").hide()), I(".homeTipsBoxWrapper").masonry({
                        columnWidth: ".grid-sizer",
                        gutter: 15,
                        itemSelector: ".item",
                        percentPosition: "true",
                        fitWidth: !0
                    })
                })
            } else I(".wash-basin-ideas-wrapper .homeTipsBoxWrapper .item").show(), I(".wash-basin-ideas-wrapper .btnDoubleBox").hide();
        if ("" == I.trim(I(".homeTipsBoxWrapper").find("p").html()) && I(".homeTipsBoxWrapper").find("p").css("padding-bottom", "0"), 0 < I("#slider-range").length) {
            var p = parseInt(I("#amountmin").val()),
                d = parseInt(I("#amountmax").val());
            I("#slider-range").slider({
                range: !0,
                min: p,
                max: d,
                values: [p, d],
                slide: function(e, i) {}
            })
        }
        if (0 < I("#slider-range-filter").length) {
            var h = parseInt(I("#amountmin1").val()),
                v = parseInt(I("#amountmax1").val());
            I("#slider-range-filter").slider({
                range: !0,
                min: h,
                max: v,
                values: [h, v],
                slide: function(e, i) {
                    I("#amountmin1").val(i.values[0]), I("#amountmax1").val(i.values[1])
                }
            }), I("#amountmin1").val(I("#slider-range-filter").slider("values", 0)), I("#amountmax1").val(I("#slider-range-filter").slider("values", 1));
            var w = 0,
                m = v;

            function u(e) {
                "min" == e ? w = I("#amountmin1").val() : "max" == e && (m = I("#amountmax1").val()), I("#slider-range-filter").slider("values", [w, m])
            }
            I("#amountmin1").on("keyup", function(e) {
                u("min")
            }), I("#amountmax1").on("keyup", function(e) {
                u("max")
            })
        }
        if (0 < I(".filter-category-wrapper").length && I(".filter-category-wrapper").mCustomScrollbar(), 0 < I(".colourBasinFilters .productFiltersInner").length)
            if (12 < I(".colourBasinFilters .productFiltersInner .item").length) {
                var f, g = (c = I(".colourBasinFilters .productFiltersInner .item").length) - (f = 12);
                I(".colourBasinFilters .loadMore a span").text("LOAD MORE PRODUCTS (" + g + ")"), I(".colourBasinFilters .productFiltersInner .item:lt(" + f + ")").css("display", "inline-block"), I(".colourBasinFilters .loadMore a").on("click", function(e) {
                    e.preventDefault(), f + 12 <= c ? (g = c - (f += 12), I(".colourBasinFilters .productFiltersInner .item:lt(" + f + ")").css("display", "inline-block"), I(".colourBasinFilters .loadMore a span").text("LOAD MORE PRODUCTS (" + g + ")"), f == c && I(".colourBasinFilters .loadMore").hide()) : (I(".colourBasinFilters .productFiltersInner .item").css("display", "inline-block"), I(".colourBasinFilters .loadMore").hide())
                })
            } else I(".colourBasinFilters .productFiltersInner .item").css("display", "inline-block"), I(".colourBasinFilters .loadMore").hide();
        0 < I(".basinTrendProductsSlider").length && I(".basinTrendProductsSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".trendPrev"),
            nextArrow: I(".trendNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".bathroomSlider").length && I(".bathroomSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".bathroomPrev"),
            nextArrow: I(".bathroomNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".innovationPopularSlider").length && I(".innovationPopularSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".popularPrev"),
            nextArrow: I(".popularNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".innovationMoreSlider").length && I(".innovationMoreSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".morePrev"),
            nextArrow: I(".moreNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        if (0 < I(".innovation-category-wrapper .categoryItems").length)
            if (f = 768 <= I(window).width() ? 9 : 5, I(".innovation-category-wrapper .categoryItems .item").length > f) {
                c = I(".innovation-category-wrapper .categoryItems .item").length;
                I(".innovation-category-wrapper .categoryItems .item:lt(" + f + ")").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox a").on("click", function(e) {
                    e.preventDefault(), f + f <= c ? (I(".innovation-category-wrapper .categoryItems .item:lt(" + (f += f) + ")").css("display", "inline-block"), f == c && I(".innovation-category-wrapper .btnDoubleBox").hide()) : (I(".innovation-category-wrapper .categoryItems .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide())
                })
            } else I(".innovation-category-wrapper .categoryItems .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide();
        I('.search-products-wrapper .nav a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
            var i;
            if (0 < I(".innovation-category-wrapper .categoryItems-innovation").length)
                if (i = 768 <= I(window).width() ? 9 : 5, I(".innovation-category-wrapper .categoryItems-innovation .item").length > i) {
                    var a = I(".innovation-category-wrapper .categoryItems-innovation .item").length;
                    I(".innovation-category-wrapper .categoryItems-innovation .item:lt(" + i + ")").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox a").on("click", function(e) {
                        e.preventDefault(), i + i <= a ? (I(".innovation-category-wrapper .categoryItems-innovation .item:lt(" + (i += i) + ")").css("display", "inline-block"), i == a && I(".innovation-category-wrapper .btnDoubleBox").hide()) : (I(".innovation-category-wrapper .categoryItems-innovation .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide())
                    })
                } else I(".innovation-category-wrapper .categoryItems-innovation .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide();
            if (0 < I(".innovation-category-wrapper .categoryItems-blogs").length)
                if (i = 768 <= I(window).width() ? 9 : 5, I(".innovation-category-wrapper .categoryItems-blogs .item").length > i) {
                    var o = I(".innovation-category-wrapper .categoryItems-blogs .item").length;
                    I(".innovation-category-wrapper .categoryItems-blogs .item:lt(" + i + ")").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox a").on("click", function(e) {
                        e.preventDefault(), i + i <= o ? (I(".innovation-category-wrapper .categoryItems-blogs .item:lt(" + (i += i) + ")").css("display", "inline-block"), i == o && I(".innovation-category-wrapper .btnDoubleBox").hide()) : (I(".innovation-category-wrapper .categoryItems-blogs .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide())
                    })
                } else I(".innovation-category-wrapper .categoryItems-blogs .item").css("display", "inline-block"), I(".innovation-category-wrapper .btnDoubleBox").hide()
        }), 0 < I(".my-account-form-wrapper .myAccountForm input#mobile").length && I(".my-account-form-wrapper .myAccountForm .btnUpdate").on("click", function(e) {
            e.preventDefault(), I(".my-account-form-wrapper .myAccountForm input#mobile").prop("disabled", !1)
        }), 0 < I(".cFToolTip .closeBtn").length && I(".closeBtn").on("click", function() {
            I(this).parent().hide()
        }), 0 < I(".eventsPresentations").length && I(".eventsPresentations h3").on("click", function() {
            I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).next(".eventsContent").slideUp()) : (I(this).addClass("open"), I(this).next(".eventsContent").slideDown())
        }), 0 < I(".financial-information-wrapper .tabs").length && (I("#financial1C").show(), I("#financial1").addClass("active"), I(".financial-information-wrapper .tabs li").on("click", function(e) {
            e.preventDefault();
            var i = I(this).attr("id");
            I(this).hasClass("active") || (I(".financial-information-wrapper .tabs li").removeClass("active"), I(this).addClass("active"), I(".financial-information-wrapper .tabContent").hide(), I("#" + i + "C").fadeIn("slow"))
        })), 0 < I(".financialInformation").length && I(".financialInformation h3").on("click", function() {
            I(this).hasClass("open") ? (I(this).removeClass("open"), I(this).next(".financialContent").slideUp()) : (I(this).addClass("open"), I(this).next(".financialContent").slideDown())
        }), 0 < I("#jFileClick").length && (I("#jFileClick").on("click", function() {
            I("#jFileUpload").trigger("click")
        }), I("#jFileUpload").change(function() {
            I("#jFileName").val(I(this).val())
        }));
        var b = 2;
        I("#addBill").each(function() {
            I(this).click(function() {
                var e = '<div class="fileUploadWrapper"><img src="assets/Images/bg-icon-upload.png" alt="" /><input type="button" class="fbFileClick" id="fbFileClick' + b + '" value="Choose File" /><input type="text" class="fbFileName" id="fbFileName' + b + '" /><input type="file" name="fbFileUpload" id="fbFileUpload' + b + '" class="fbFileUpload" /><a class="fbFlieRemove" id="fbremove' + b + '">Remove</a></div>';
                I(".fileUpload").append(e), b++
            })
        }), I(".fileUploadWrapper").each(function() {
            I(this).find(".fbFileClick").click(function() {
                I(this).siblings(".fbFileUpload").trigger("click")
            }), I(".fbFileUpload").change(function() {
                I(".fbFileName").val(I(this).val())
            })
        }), I("input[id^='fbFileUpload']").each(function() {
            var e = parseInt(this.id.replace("fbFileUpload", ""));
            I("#fbFileUpload" + e).change(function() {
                "" != I("#fbFileUpload" + e).val() && I("#addBill").show()
            })
        }), I(document).on("click", ".fbFlieRemove", function() {
            I(this).closest(".fileUploadWrapper").remove()
        }), 0 < I(".sanitarywareCollectionSlider").length && I(".sanitarywareCollectionSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".sanitarywarePrev"),
            nextArrow: I(".sanitarywareNext"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".homeNewSlider").length && I(".homeNewSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".homeNewPrev"),
            nextArrow: I(".homeNewNext"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".senatorCollectionSlider").length && I(".senatorCollectionSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".senatorPrev"),
            nextArrow: I(".senatorNext"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".productBand").length && I(".productBand a").on("click", function() {
            I(this).parent().hasClass("active") || (I(".productBand li").removeClass("active"), I(this).parent().addClass("active"))
        }), 0 < I(".product-desc .shareBtn").length && I(".product-desc .shareBtn").on("click", function(e) {
            e.preventDefault(), I(this).next(".shareicons").toggle()
        }), I(".filterCta").click(function() {
            I(".advance-filter-wrapper").slideToggle("slow")
        }), I(window).width() <= 768 && (I(".advance-filter-wrapper .colWrapper5").find("h3 a").remove("i"), I(".advance-filter-wrapper .colWrapper5").find("h3 a").each(function() {
            var e = I(this).parent().siblings().attr("id");
            I(this).attr({
                class: "accordion-toggle",
                "data-toggle": "collapse",
                "data-parent": ".colWrapper5",
                href: "#" + e
            })
        }), I(".advance-filter-wrapper .colWrapper5").find(".filter-list").addClass("panel-collapse collapse in")), I(document).on("click touchstart", "body", function(e) {}), I(document).mouseup(function(e) {
            var i = I(".filter-category-wrapper"),
                a = i.is(":visible");
            !i.is(e.target) && 0 === i.has(e.target).length && a && i.toggle("slide", "right", 500)
        }), I(".commonFilterInner .filterBtn").not(document).click(function(e) {
            e.stopPropagation(), I(".filter-category-wrapper").toggle("slide", "left", 500), I(this).hasClass("one_product_class") && I(".filter-category-wrapper").remove()
        }), I(".productCheck").each(function() {
            I(this).click(function() {})
        }), I(".advFilterClose").click(function() {
            I(".advance-filter-wrapper").slideUp("slow")
        }), I(".closeFilterDiv").click(function() {
            I(".filter-category-wrapper").hide(500)
        }), I(".toggle-accordion").on("click", function() {
            var e = I(this).attr("accordion-id"),
                i = I(e + " .collapse.in").length;
            I(this).toggleClass("active"), (0 == i ? openAllPanels : closeAllPanels)(e)
        }), openAllPanels = function(e) {
            I(e + ' .panel-collapse:not(".in")').collapse("show")
        }, closeAllPanels = function(e) {
            I(e + " .panel-collapse.in").collapse("hide")
        };
        var C = I(".panel-collapse");
        I(function(e) {
            C.on("show.bs.collapse hidden.bs.collapse", function() {
                e(this).prev().find(".glyphicon").toggleClass("glyphicon-plus glyphicon-minus")
            })
        }), I(".dropdown-wrapper ul").on("click", ".init", function() {
            I(this).closest("ul").children("li:not(.init)").toggle()
        });
        var k = I(".dropdown-wrapper ul").children("li:not(.init)");
        if (I(".dropdown-wrapper ul").on("click", "li:not(.init)", function() {
                k.removeClass("selected"), I(this).addClass("selected"), I("ul").children(".init").html(I(this).html()), k.toggle()
            }), I(".dropdown-wrapper ul").children().length < 2 && I(".dropdown-wrapper ul").addClass("hideDrp"), I(document).mouseup(function(e) {
                var i = I(".dropdown-wrapper ul").children("li:not(.init)"),
                    a = i.is(":visible");
                !i.is(e.target) && 0 === i.has(e.target).length && a && i.toggle()
            }), 0 < I(".productgallerySlider").length) {
            I(".productgallerySlider").slick({
                arrows: !1,
                centerPadding: "0",
                dots: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                prevArrow: I(".productgalleryPrev"),
                nextArrow: I(".productgalleryNext"),
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: !1
                    }
                }]
            }), I(".productgallerySlider .slick-list").attr("id", "scrollDiv"), I(".slick-child").css("width", I(".slick-track").width());
            l = I("#scrollDiv");
            I(".slick-scroll").on("scroll", function() {
                l.prop("scrollLeft", this.scrollLeft)
            })
        }
        0 < I(".washbasinProductSlider").length && I(".washbasinProductSlider").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".trendPrev"),
            nextArrow: I(".trendNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".bahtroomSliderwrapper").length && I(".bahtroomSliderwrapper").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".bathroomPrev"),
            nextArrow: I(".bathroomNext"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        I(".ProductdetailImgsWrapper").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !1,
            adaptiveHeight: !0,
            infinite: !1,
            useTransform: !0,
            speed: 400,
            cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !0
                }
            }]
        }), I(".ProductdetailSlider").on("init", function(e, i) {
            I(this).find(".slick-slide.slick-current").addClass("is-active")
        }).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: !0,
            dots: !1,
            focusOnSelect: !1,
            infinite: !1,
            arrows: !0
        }), I(".ProductdetailImgsWrapper").on("afterChange", function(e, i, a) {
            I(".ProductdetailSlider").slick("slickGoTo", a), I(".ProductdetailSlider").find(".slick-slide.is-active").removeClass("is-active"), I(".ProductdetailSlider").find('.slick-slide[data-slick-index="' + a + '"]').addClass("is-active")
        }), I(".ProductdetailSlider").on("click", ".slick-slide", function(e) {
            e.preventDefault();
            var i = I(this).data("slick-index");
            I(".ProductdetailImgsWrapper").slick("slickGoTo", i)
        }), 0 < I(".videoSlider1").length && I(".videoSlider1").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            swipe: !0,
            swipeToSlide: !0,
            touchMove: !0,
            touchThreshold: 4,
            prevArrow: I(".videoPrev1"),
            nextArrow: I(".videoNext1"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".videoSlider2").length && I(".videoSlider2").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".videoPrev2"),
            nextArrow: I(".videoNext2"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        0 < I(".videoSlider3").length && I(".videoSlider3").slick({
            arrows: !0,
            centerPadding: "0",
            dots: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: I(".videoPrev3"),
            nextArrow: I(".videoNext3"),
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1
                }
            }]
        });
        if (0 < I("#edit-product-category").length && (I("#edit-other-category").hide(), I("#edit-product-category-other").on("click", function() {
                I("#edit-other-category").show()
            }), I("#edit-product-category-sanitaryware").on("click", function() {
                I("#edit-other-category").hide()
            }), I("#edit-product-category-faucet").on("click", function() {
                I("#edit-other-category").hide()
            })), I("#videoModal-article").on("shown.bs.modal", function(e) {
                I("#article_video")[0].play()
            }), I("#videoModal-article").on("hidden.bs.modal", function() {
                I("#article_video")[0].pause()
            }), 0 < I("#articleDiv .embed-container").length && I("#articleDiv .embed-container").mCustomScrollbar(), 0 < I("#edit-pass-pass1").length && I(".toggle-password").click(function() {
                I(this).hasClass("glyphicon-eye-close") ? (I(this).removeClass("glyphicon-eye-close"), I(this).addClass("glyphicon-eye-open"), I("#edit-pass-pass1").attr("type", "text")) : (I(this).removeClass("glyphicon-eye-open"), I(this).addClass("glyphicon-eye-close"), I("#edit-pass-pass1").attr("type", "password"))
            }), 0 < I("#edit-pass-pass2").length && I(".toggle-passwordConfirm").click(function() {
                I(this).hasClass("glyphicon-eye-close") ? (I(this).removeClass("glyphicon-eye-close"), I(this).addClass("glyphicon-eye-open"), I("#edit-pass-pass2").attr("type", "text")) : (I(this).removeClass("glyphicon-eye-open"), I(this).addClass("glyphicon-eye-close"), I("#edit-pass-pass2").attr("type", "password"))
            }), jQuery(".close").click(function() {
                ! function(e, i, a) {
                    if (a) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3);
                        var r = "; expires=" + o.toGMTString()
                    } else r = "";
                    document.cookie = e + "=" + i + r + "; path=/", console.log(document.cookie)
                }("myCookie", "12345", 1)
            }), 0 < I(".form-date").length) {
            var y = (W = new Date).getMonth() + 1,
                S = W.getDate(),
                x = W.getFullYear();
            y < 10 && (y = "0" + y.toString()), S < 10 && (S = "0" + S.toString());
            var B = x + "-" + y + "-" + S;
            I(".form-date").attr("max", B)
        }
        if (0 < I("#edit-please-choose-your-date-for-cera-live-").length) {
            var W;
            y = (W = new Date).getMonth() + 1, S = W.getDate(), x = W.getFullYear();
            y < 10 && (y = "0" + y.toString()), S < 10 && (S = "0" + S.toString());
            var T = x + "-" + y + "-" + S;
            I("#edit-please-choose-your-date-for-cera-live-").removeAttr("max"), I("#edit-please-choose-your-date-for-cera-live-").attr("min", T)
        }
        0 < I(".invoice-copy").length && I(".invoice-copy").next().find(".form-item--error-message").addClass("fileError");
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent), window.chrome;
        var D = window.navigator;
        D.vendor, window.opr, D.userAgent.indexOf("Edg"), D.userAgent.match("CriOS");
        /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) && I(".innovation_video_wrapper").find(".content").addClass("content_safari"), 0 < I(".common-filter-wrapper").length && (0 < I(".common-filter-wrapper .commonFilterRight").find(".fieldWrapper").length || I(".common-filter-wrapper .commonFilterRight").find("ul").css("margin-top", "10px"))
    }), (new WOW).init(), jQuery(window).on("load", function() {
        if (0 < I(".form-date").length) {
            var e = new Date,
                i = e.getMonth() + 1,
                a = e.getDate(),
                o = e.getFullYear();
            i < 10 && (i = "0" + i.toString()), a < 10 && (a = "0" + a.toString());
            var r = o + "-" + i + "-" + a;
            I(".form-date").attr("max", r)
        }
    }), jQuery(window).on("load", function() {
        0 < I(".homeTipsBoxWrapper").length && I(".homeTipsBoxWrapper").masonry({
            columnWidth: ".grid-sizer",
            gutter: 15,
            itemSelector: ".item",
            percentPosition: "true",
            fitWidth: !0
        }), 0 < I("#stylegallery").length && 768 <= I(window).width() && I("#stylegallery").find(".address").mCustomScrollbar(), I(".footerWrapper .nested").each(function() {
            I(this).click(function() {
                I(this).next("ul").slideToggle(), I(this).parent().siblings("li").find("ul").hide()
            })
        })
    }), I(".linkOpen a").on("click", function(e) {
        e.preventDefault(), I(".linksDiv").slideToggle();
        var i = I("html,body");
        i.animate({
            scrollTop: i.height()
        }, 1e3)
    }), I(function() {
        I(window).scroll(e), e()
    }), I(function() {
        I(window).scroll(i), i()
    }), I(function() {
        I(window).scroll(a), a()
    }), I(document).ajaxComplete(function() {
        if (I(".webformmsg").length && setTimeout(function() {
                I("#detailsPopup").modal("hide")
            }, 300), 0 < I(".form-date").length) {
            var e = new Date,
                i = e.getMonth() + 1,
                a = e.getDate(),
                o = e.getFullYear();
            i < 10 && (i = "0" + i.toString()), a < 10 && (a = "0" + a.toString());
            var r = o + "-" + i + "-" + a;
            I(".form-date").attr("max", r)
        }
    }), I(document).ajaxError(function() {
        if (0 < I(".form-date").length) {
            var e = new Date,
                i = e.getMonth() + 1,
                a = e.getDate(),
                o = e.getFullYear();
            i < 10 && (i = "0" + i.toString()), a < 10 && (a = "0" + a.toString());
            var r = o + "-" + i + "-" + a;
            I(".form-date").attr("max", r)
        }
    })
}(jQuery);
jQuery(document).ready((function() {
    var o;
    jQuery(".video-modal-c1").click((function() {
        o = jQuery(this).data("src")
    })), console.log(o), jQuery("#videoModal").on("shown.bs.modal", (function(e) {
        jQuery("#videoc1").attr("src", o + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1")
    })), jQuery("#videoModal").on("hide.bs.modal", (function(e) {
        jQuery("#videoc1").attr("src", o)
    }))
}));;
'use strict';
(function($) {
    $.fn.tableExport = function(options) {
        let docData;
        const defaults = {
            csvEnclosure: '"',
            csvSeparator: ',',
            csvUseBOM: true,
            date: {
                html: 'dd/mm/yyyy'
            },
            displayTableName: false,
            escape: false,
            exportHiddenCells: false,
            fileName: 'tableExport',
            htmlContent: false,
            htmlHyperlink: 'content',
            ignoreColumn: [],
            ignoreRow: [],
            jsonScope: 'all',
            jspdf: {
                orientation: 'p',
                unit: 'pt',
                format: 'a4',
                margins: {
                    left: 20,
                    right: 10,
                    top: 10,
                    bottom: 10
                },
                onDocCreated: null,
                autotable: {
                    styles: {
                        cellPadding: 2,
                        rowHeight: 12,
                        fontSize: 8,
                        fillColor: 255,
                        textColor: 50,
                        fontStyle: 'normal',
                        overflow: 'ellipsize',
                        halign: 'inherit',
                        valign: 'middle'
                    },
                    headerStyles: {
                        fillColor: [52, 73, 94],
                        textColor: 255,
                        fontStyle: 'bold',
                        halign: 'inherit',
                        valign: 'middle'
                    },
                    alternateRowStyles: {
                        fillColor: 245
                    },
                    tableExport: {
                        doc: null,
                        onAfterAutotable: null,
                        onBeforeAutotable: null,
                        onAutotableText: null,
                        onTable: null,
                        outputImages: true
                    }
                }
            },
            mso: {
                fileFormat: 'xlshtml',
                onMsoNumberFormat: null,
                pageFormat: 'a4',
                pageOrientation: 'portrait',
                rtl: false,
                styles: [],
                worksheetName: '',
                xlsx: {
                    formatId: {
                        date: 14,
                        numbers: 2,
                        currency: 164
                    },
                    format: {
                        currency: '$#,##0.00;[Red]-$#,##0.00'
                    },
                    onHyperlink: null
                }
            },
            numbers: {
                html: {
                    decimalMark: '.',
                    thousandsSeparator: ','
                },
                output: {
                    decimalMark: '.',
                    thousandsSeparator: ','
                }
            },
            onAfterSaveToFile: null,
            onBeforeSaveToFile: null,
            onCellData: null,
            onCellHtmlData: null,
            onCellHtmlHyperlink: null,
            onIgnoreRow: null,
            onTableExportBegin: null,
            onTableExportEnd: null,
            outputMode: 'file',
            pdfmake: {
                enabled: false,
                docDefinition: {
                    pageSize: 'A4',
                    pageOrientation: 'portrait',
                    styles: {
                        header: {
                            background: '#34495E',
                            color: '#FFFFFF',
                            bold: true,
                            alignment: 'center',
                            fillColor: '#34495E'
                        },
                        alternateRow: {
                            fillColor: '#f5f5f5'
                        }
                    },
                    defaultStyle: {
                        color: '#000000',
                        fontSize: 8,
                        font: 'Roboto'
                    }
                },
                fonts: {}
            },
            preserve: {
                leadingWS: false,
                trailingWS: false
            },
            preventInjection: true,
            sql: {
                tableEnclosure: '`',
                columnEnclosure: '`'
            },
            tbodySelector: 'tr',
            tfootSelector: 'tr',
            theadSelector: 'tr',
            tableName: 'Table',
            type: 'csv'
        };
        const pageFormats = {
            'a0': [2383.94, 3370.39],
            'a1': [1683.78, 2383.94],
            'a2': [1190.55, 1683.78],
            'a3': [841.89, 1190.55],
            'a4': [595.28, 841.89],
            'a5': [419.53, 595.28],
            'a6': [297.64, 419.53],
            'a7': [209.76, 297.64],
            'a8': [147.40, 209.76],
            'a9': [104.88, 147.40],
            'a10': [73.70, 104.88],
            'b0': [2834.65, 4008.19],
            'b1': [2004.09, 2834.65],
            'b2': [1417.32, 2004.09],
            'b3': [1000.63, 1417.32],
            'b4': [708.66, 1000.63],
            'b5': [498.90, 708.66],
            'b6': [354.33, 498.90],
            'b7': [249.45, 354.33],
            'b8': [175.75, 249.45],
            'b9': [124.72, 175.75],
            'b10': [87.87, 124.72],
            'c0': [2599.37, 3676.54],
            'c1': [1836.85, 2599.37],
            'c2': [1298.27, 1836.85],
            'c3': [918.43, 1298.27],
            'c4': [649.13, 918.43],
            'c5': [459.21, 649.13],
            'c6': [323.15, 459.21],
            'c7': [229.61, 323.15],
            'c8': [161.57, 229.61],
            'c9': [113.39, 161.57],
            'c10': [79.37, 113.39],
            'dl': [311.81, 623.62],
            'letter': [612, 792],
            'government-letter': [576, 756],
            'legal': [612, 1008],
            'junior-legal': [576, 360],
            'ledger': [1224, 792],
            'tabloid': [792, 1224],
            'credit-card': [153, 243]
        };
        const jsPdfThemes = {
            'striped': {
                table: {
                    fillColor: 255,
                    textColor: 80,
                    fontStyle: 'normal',
                    fillStyle: 'F'
                },
                header: {
                    textColor: 255,
                    fillColor: [41, 128, 185],
                    rowHeight: 23,
                    fontStyle: 'bold'
                },
                body: {},
                alternateRow: {
                    fillColor: 245
                }
            },
            'grid': {
                table: {
                    fillColor: 255,
                    textColor: 80,
                    fontStyle: 'normal',
                    lineWidth: 0.1,
                    fillStyle: 'DF'
                },
                header: {
                    textColor: 255,
                    fillColor: [26, 188, 156],
                    rowHeight: 23,
                    fillStyle: 'F',
                    fontStyle: 'bold'
                },
                body: {},
                alternateRow: {}
            },
            'plain': {
                header: {
                    fontStyle: 'bold'
                }
            }
        };
        const jsPdfDefaultStyles = {
            cellPadding: 5,
            fontSize: 10,
            font: "helvetica",
            lineColor: 200,
            lineWidth: 0.1,
            fontStyle: 'normal',
            overflow: 'ellipsize',
            fillColor: 255,
            textColor: 20,
            halign: 'left',
            valign: 'top',
            fillStyle: 'F',
            rowHeight: 20,
            columnWidth: 'auto'
        };
        const FONT_ROW_RATIO = 1.15;
        const el = this;
        let DownloadEvt = null;
        let $head_rows = [];
        let $rows = [];
        let rowIndex = 0;
        let trData = '';
        let colNames = [];
        let ranges = [];
        let blob;
        let $hiddenTableElements = [];
        let checkCellVisibility = false;
        $.extend(true, defaults, options);
        if (defaults.type === 'xlsx') {
            defaults.mso.fileFormat = defaults.type;
            defaults.type = 'excel';
        }
        if (typeof defaults.excelFileFormat !== 'undefined' && typeof defaults.mso.fileFormat === 'undefined')
            defaults.mso.fileFormat = defaults.excelFileFormat;
        if (typeof defaults.excelPageFormat !== 'undefined' && typeof defaults.mso.pageFormat === 'undefined')
            defaults.mso.pageFormat = defaults.excelPageFormat;
        if (typeof defaults.excelPageOrientation !== 'undefined' && typeof defaults.mso.pageOrientation === 'undefined')
            defaults.mso.pageOrientation = defaults.excelPageOrientation;
        if (typeof defaults.excelRTL !== 'undefined' && typeof defaults.mso.rtl === 'undefined')
            defaults.mso.rtl = defaults.excelRTL;
        if (typeof defaults.excelstyles !== 'undefined' && typeof defaults.mso.styles === 'undefined')
            defaults.mso.styles = defaults.excelstyles;
        if (typeof defaults.onMsoNumberFormat !== 'undefined' && typeof defaults.mso.onMsoNumberFormat === 'undefined')
            defaults.mso.onMsoNumberFormat = defaults.onMsoNumberFormat;
        if (typeof defaults.worksheetName !== 'undefined' && typeof defaults.mso.worksheetName === 'undefined')
            defaults.mso.worksheetName = defaults.worksheetName;
        if (typeof defaults.mso.xslx !== 'undefined' && typeof defaults.mso.xlsx === 'undefined')
            defaults.mso.xlsx = defaults.mso.xslx;
        defaults.mso.pageOrientation = (defaults.mso.pageOrientation.substr(0, 1) === 'l') ? 'landscape' : 'portrait';
        defaults.date.html = defaults.date.html || '';
        if (defaults.date.html.length) {
            const patt = [];
            patt['dd'] = '(3[01]|[12][0-9]|0?[1-9])';
            patt['mm'] = '(1[012]|0?[1-9])';
            patt['yyyy'] = '((?:1[6-9]|2[0-2])\\d{2})';
            patt['yy'] = '(\\d{2})';
            const separator = defaults.date.html.match(/[^a-zA-Z0-9]/)[0];
            const formatItems = defaults.date.html.toLowerCase().split(separator);
            defaults.date.regex = '^\\s*';
            defaults.date.regex += patt[formatItems[0]];
            defaults.date.regex += '(.)';
            defaults.date.regex += patt[formatItems[1]];
            defaults.date.regex += '\\2';
            defaults.date.regex += patt[formatItems[2]];
            defaults.date.regex += '\\s*$';
            defaults.date.pattern = new RegExp(defaults.date.regex, 'g');
            let f = formatItems.indexOf('dd') + 1;
            defaults.date.match_d = f + (f > 1 ? 1 : 0);
            f = formatItems.indexOf('mm') + 1;
            defaults.date.match_m = f + (f > 1 ? 1 : 0);
            f = (formatItems.indexOf('yyyy') >= 0 ? formatItems.indexOf('yyyy') : formatItems.indexOf('yy')) + 1;
            defaults.date.match_y = f + (f > 1 ? 1 : 0);
        }
        colNames = GetColumnNames(el);
        if (typeof defaults.onTableExportBegin === 'function')
            defaults.onTableExportBegin();
        if (defaults.type === 'csv' || defaults.type === 'tsv' || defaults.type === 'txt') {
            let csvData = '';
            let rowLength = 0;
            ranges = [];
            rowIndex = 0;
            const csvString = function(cell, rowIndex, colIndex) {
                let result = '';
                if (cell !== null) {
                    const dataString = parseString(cell, rowIndex, colIndex);
                    const csvValue = (dataString === null || dataString === '') ? '' : dataString.toString();
                    if (defaults.type === 'tsv') {
                        if (dataString instanceof Date)
                            dataString.toLocaleString();
                        result = replaceAll(csvValue, '\t', ' ');
                    } else {
                        if (dataString instanceof Date)
                            result = defaults.csvEnclosure + dataString.toLocaleString() + defaults.csvEnclosure;
                        else {
                            result = preventInjection(csvValue);
                            result = replaceAll(result, defaults.csvEnclosure, defaults.csvEnclosure + defaults.csvEnclosure);
                            if (result.indexOf(defaults.csvSeparator) >= 0 || /[\r\n ]/g.test(result))
                                result = defaults.csvEnclosure + result + defaults.csvEnclosure;
                        }
                    }
                }
                return result;
            };
            const CollectCsvData = function($rows, rowselector, length) {
                $rows.each(function() {
                    trData = '';
                    ForEachVisibleCell(this, rowselector, rowIndex, length + $rows.length, function(cell, row, col) {
                        trData += csvString(cell, row, col) + (defaults.type === 'tsv' ? '\t' : defaults.csvSeparator);
                    });
                    trData = $.trim(trData).substring(0, trData.length - 1);
                    if (trData.length > 0) {
                        if (csvData.length > 0)
                            csvData += '\n';
                        csvData += trData;
                    }
                    rowIndex++;
                });
                return $rows.length;
            };
            rowLength += CollectCsvData($(el).find('thead').first().find(defaults.theadSelector), 'th,td', rowLength);
            findTableElements($(el), 'tbody').each(function() {
                rowLength += CollectCsvData(findTableElements($(this), defaults.tbodySelector), 'td,th', rowLength);
            });
            if (defaults.tfootSelector.length)
                CollectCsvData($(el).find('tfoot').first().find(defaults.tfootSelector), 'td,th', rowLength);
            csvData += '\n';
            if (defaults.outputMode === 'string')
                return csvData;
            if (defaults.outputMode === 'base64')
                return base64encode(csvData);
            if (defaults.outputMode === 'window') {
                downloadFile(false, 'data:text/' + (defaults.type === 'csv' ? 'csv' : 'plain') + ';charset=utf-8,', csvData);
                return;
            }
            saveToFile(csvData, defaults.fileName + '.' + defaults.type, 'text/' + (defaults.type === 'csv' ? 'csv' : 'plain'), 'utf-8', '', (defaults.type === 'csv' && defaults.csvUseBOM));
        } else if (defaults.type === 'sql') {
            rowIndex = 0;
            ranges = [];
            let tdData = 'INSERT INTO ' + defaults.sql.tableEnclosure + defaults.tableName + defaults.sql.tableEnclosure + ' (';
            $head_rows = collectHeadRows($(el));
            $($head_rows).each(function() {
                ForEachVisibleCell(this, 'th,td', rowIndex, $head_rows.length, function(cell, row, col) {
                    let colName = parseString(cell, row, col) || '';
                    if (colName.indexOf(defaults.sql.columnEnclosure) > -1)
                        colName = replaceAll(colName.toString(), defaults.sql.columnEnclosure, defaults.sql.columnEnclosure + defaults.sql.columnEnclosure);
                    tdData += defaults.sql.columnEnclosure + colName + defaults.sql.columnEnclosure + ',';
                });
                rowIndex++;
                tdData = $.trim(tdData).substring(0, tdData.length - 1);
            });
            tdData += ') VALUES ';
            $rows = collectRows($(el));
            $($rows).each(function() {
                trData = '';
                ForEachVisibleCell(this, 'td,th', rowIndex, $head_rows.length + $rows.length, function(cell, row, col) {
                    let dataString = parseString(cell, row, col) || '';
                    if (dataString.indexOf('\'') > -1)
                        dataString = replaceAll(dataString.toString(), '\'', '\'\'');
                    trData += '\'' + dataString + '\',';
                });
                if (trData.length > 3) {
                    tdData += '(' + trData;
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                    tdData += '),';
                }
                rowIndex++;
            });
            tdData = $.trim(tdData).substring(0, tdData.length - 1);
            tdData += ';';
            if (defaults.outputMode === 'string')
                return tdData;
            if (defaults.outputMode === 'base64')
                return base64encode(tdData);
            saveToFile(tdData, defaults.fileName + '.sql', 'application/sql', 'utf-8', '', false);
        } else if (defaults.type === 'json') {
            const jsonHeaderArray = [];
            ranges = [];
            $head_rows = collectHeadRows($(el));
            $($head_rows).each(function() {
                const jsonArrayTd = [];
                ForEachVisibleCell(this, 'th,td', rowIndex, $head_rows.length, function(cell, row, col) {
                    jsonArrayTd.push(parseString(cell, row, col));
                });
                jsonHeaderArray.push(jsonArrayTd);
            });
            const jsonArray = [];
            $rows = collectRows($(el));
            $($rows).each(function() {
                const jsonObjectTd = {};
                let colIndex = 0;
                ForEachVisibleCell(this, 'td,th', rowIndex, $head_rows.length + $rows.length, function(cell, row, col) {
                    if (jsonHeaderArray.length) {
                        jsonObjectTd[jsonHeaderArray[jsonHeaderArray.length - 1][colIndex]] = parseString(cell, row, col);
                    } else {
                        jsonObjectTd[colIndex] = parseString(cell, row, col);
                    }
                    colIndex++;
                });
                if ($.isEmptyObject(jsonObjectTd) === false)
                    jsonArray.push(jsonObjectTd);
                rowIndex++;
            });
            let save_data;
            if (defaults.jsonScope === 'head')
                save_data = JSON.stringify(jsonHeaderArray);
            else if (defaults.jsonScope === 'data')
                save_data = JSON.stringify(jsonArray);
            else
                save_data = JSON.stringify({
                    header: jsonHeaderArray,
                    data: jsonArray
                });
            if (defaults.outputMode === 'string')
                return save_data;
            if (defaults.outputMode === 'base64')
                return base64encode(save_data);
            saveToFile(save_data, defaults.fileName + '.json', 'application/json', 'utf-8', 'base64', false);
        } else if (defaults.type === 'xml') {
            rowIndex = 0;
            ranges = [];
            let xml = '<?xml version="1.0" encoding="utf-8"?>';
            xml += '<tabledata><fields>';
            $head_rows = collectHeadRows($(el));
            $($head_rows).each(function() {
                ForEachVisibleCell(this, 'th,td', rowIndex, $head_rows.length, function(cell, row, col) {
                    xml += '<field>' + parseString(cell, row, col) + '</field>';
                });
                rowIndex++;
            });
            xml += '</fields><data>';
            let rowCount = 1;
            $rows = collectRows($(el));
            $($rows).each(function() {
                let colCount = 1;
                trData = '';
                ForEachVisibleCell(this, 'td,th', rowIndex, $head_rows.length + $rows.length, function(cell, row, col) {
                    trData += '<column-' + colCount + '>' + parseString(cell, row, col) + '</column-' + colCount + '>';
                    colCount++;
                });
                if (trData.length > 0 && trData !== '<column-1></column-1>') {
                    xml += '<row id="' + rowCount + '">' + trData + '</row>';
                    rowCount++;
                }
                rowIndex++;
            });
            xml += '</data></tabledata>';
            if (defaults.outputMode === 'string')
                return xml;
            if (defaults.outputMode === 'base64')
                return base64encode(xml);
            saveToFile(xml, defaults.fileName + '.xml', 'application/xml', 'utf-8', 'base64', false);
        } else if (defaults.type === 'excel' && defaults.mso.fileFormat === 'xmlss') {
            const sheetData = [];
            const docNames = [];
            $(el).filter(function() {
                return isVisible($(this));
            }).each(function() {
                const $table = $(this);
                let ssName = '';
                if (typeof defaults.mso.worksheetName === 'string' && defaults.mso.worksheetName.length)
                    ssName = defaults.mso.worksheetName + ' ' + (docNames.length + 1);
                else if (typeof defaults.mso.worksheetName[docNames.length] !== 'undefined')
                    ssName = defaults.mso.worksheetName[docNames.length];
                if (!ssName.length)
                    ssName = $table.find('caption').text() || '';
                if (!ssName.length)
                    ssName = 'Table ' + (docNames.length + 1);
                ssName = $.trim(ssName.replace(/[\\\/[\]*:?'"]/g, '').substring(0, 31));
                docNames.push($('<div />').text(ssName).html());
                if (defaults.exportHiddenCells === false) {
                    $hiddenTableElements = $table.find('tr, th, td').filter(':hidden');
                    checkCellVisibility = $hiddenTableElements.length > 0;
                }
                rowIndex = 0;
                colNames = GetColumnNames(this);
                docData = '<Table>\r';

                function CollectXmlssData($rows, rowselector, length) {
                    const spans = [];
                    $($rows).each(function() {
                        let ssIndex = 0;
                        let nCols = 0;
                        trData = '';
                        ForEachVisibleCell(this, 'td,th', rowIndex, length + $rows.length, function(cell, row, col) {
                            if (cell !== null) {
                                let style = '';
                                let data = parseString(cell, row, col);
                                let type = 'String';
                                if (jQuery.isNumeric(data) !== false) {
                                    type = 'Number';
                                } else {
                                    const number = parsePercent(data);
                                    if (number !== false) {
                                        data = number;
                                        type = 'Number';
                                        style += ' ss:StyleID="pct1"';
                                    }
                                }
                                if (type !== 'Number')
                                    data = data.replace(/\n/g, '<br>');
                                let colspan = getColspan(cell);
                                let rowspan = getRowspan(cell);
                                $.each(spans, function() {
                                    const range = this;
                                    if (rowIndex >= range.s.r && rowIndex <= range.e.r && nCols >= range.s.c && nCols <= range.e.c) {
                                        for (let i = 0; i <= range.e.c - range.s.c; ++i) {
                                            nCols++;
                                            ssIndex++;
                                        }
                                    }
                                });
                                if (rowspan || colspan) {
                                    rowspan = rowspan || 1;
                                    colspan = colspan || 1;
                                    spans.push({
                                        s: {
                                            r: rowIndex,
                                            c: nCols
                                        },
                                        e: {
                                            r: rowIndex + rowspan - 1,
                                            c: nCols + colspan - 1
                                        }
                                    });
                                }
                                if (colspan > 1) {
                                    style += ' ss:MergeAcross="' + (colspan - 1) + '"';
                                    nCols += (colspan - 1);
                                }
                                if (rowspan > 1) {
                                    style += ' ss:MergeDown="' + (rowspan - 1) + '" ss:StyleID="rsp1"';
                                }
                                if (ssIndex > 0) {
                                    style += ' ss:Index="' + (nCols + 1) + '"';
                                    ssIndex = 0;
                                }
                                trData += '<Cell' + style + '><Data ss:Type="' + type + '">' +
                                    $('<div />').text(data).html() + '</Data></Cell>\r';
                                nCols++;
                            }
                        });
                        if (trData.length > 0)
                            docData += '<Row ss:AutoFitHeight="0">\r' + trData + '</Row>\r';
                        rowIndex++;
                    });
                    return $rows.length;
                }
                const rowLength = CollectXmlssData(collectHeadRows($table), 'th,td', 0);
                CollectXmlssData(collectRows($table), 'td,th', rowLength);
                docData += '</Table>\r';
                sheetData.push(docData);
            });
            const count = {};
            const firstOccurrences = {};
            let item, itemCount;
            for (let n = 0, c = docNames.length; n < c; n++) {
                item = docNames[n];
                itemCount = count[item];
                itemCount = count[item] = (itemCount == null ? 1 : itemCount + 1);
                if (itemCount === 2)
                    docNames[firstOccurrences[item]] = docNames[firstOccurrences[item]].substring(0, 29) + '-1';
                if (count[item] > 1)
                    docNames[n] = docNames[n].substring(0, 29) + '-' + count[item];
                else
                    firstOccurrences[item] = n;
            }
            const CreationDate = new Date().toISOString();
            let xmlssDocFile = '<?xml version="1.0" encoding="UTF-8"?>\r' + '<?mso-application progid="Excel.Sheet"?>\r' + '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"\r' + ' xmlns:o="urn:schemas-microsoft-com:office:office"\r' + ' xmlns:x="urn:schemas-microsoft-com:office:excel"\r' + ' xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\r' + ' xmlns:html="http://www.w3.org/TR/REC-html40">\r' + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">\r' + '  <Created>' + CreationDate + '</Created>\r' + '</DocumentProperties>\r' + '<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">\r' + '  <AllowPNG/>\r' + '</OfficeDocumentSettings>\r' + '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">\r' + '  <WindowHeight>9000</WindowHeight>\r' + '  <WindowWidth>13860</WindowWidth>\r' + '  <WindowTopX>0</WindowTopX>\r' + '  <WindowTopY>0</WindowTopY>\r' + '  <ProtectStructure>False</ProtectStructure>\r' + '  <ProtectWindows>False</ProtectWindows>\r' + '</ExcelWorkbook>\r' + '<Styles>\r' + '  <Style ss:ID="Default" ss:Name="Normal">\r' + '    <Alignment ss:Vertical="Bottom"/>\r' + '    <Borders/>\r' + '    <Font/>\r' + '    <Interior/>\r' + '    <NumberFormat/>\r' + '    <Protection/>\r' + '  </Style>\r' + '  <Style ss:ID="rsp1">\r' + '    <Alignment ss:Vertical="Center"/>\r' + '  </Style>\r' + '  <Style ss:ID="pct1">\r' + '    <NumberFormat ss:Format="Percent"/>\r' + '  </Style>\r' + '</Styles>\r';
            for (let j = 0; j < sheetData.length; j++) {
                xmlssDocFile += '<Worksheet ss:Name="' + docNames[j] + '" ss:RightToLeft="' + (defaults.mso.rtl ? '1' : '0') + '">\r' +
                    sheetData[j];
                if (defaults.mso.rtl) {
                    xmlssDocFile += '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">\r' + '<DisplayRightToLeft/>\r' + '</WorksheetOptions>\r';
                } else
                    xmlssDocFile += '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"/>\r';
                xmlssDocFile += '</Worksheet>\r';
            }
            xmlssDocFile += '</Workbook>\r';
            if (defaults.outputMode === 'string')
                return xmlssDocFile;
            if (defaults.outputMode === 'base64')
                return base64encode(xmlssDocFile);
            saveToFile(xmlssDocFile, defaults.fileName + '.xml', 'application/xml', 'utf-8', 'base64', false);
        } else if (defaults.type === 'excel' && defaults.mso.fileFormat === 'xlsx') {
            const sheetNames = [];
            const workbook = XLSX.utils.book_new();
            $(el).filter(function() {
                return isVisible($(this));
            }).each(function() {
                const $table = $(this);
                const ws = xlsxTableToSheet(this);
                let sheetName = '';
                if (typeof defaults.mso.worksheetName === 'string' && defaults.mso.worksheetName.length)
                    sheetName = defaults.mso.worksheetName + ' ' + (sheetNames.length + 1);
                else if (typeof defaults.mso.worksheetName[sheetNames.length] !== 'undefined')
                    sheetName = defaults.mso.worksheetName[sheetNames.length];
                if (!sheetName.length)
                    sheetName = $table.find('caption').text() || '';
                if (!sheetName.length)
                    sheetName = 'Table ' + (sheetNames.length + 1);
                sheetName = $.trim(sheetName.replace(/[\\\/[\]*:?'"]/g, '').substring(0, 31));
                sheetNames.push(sheetName);
                XLSX.utils.book_append_sheet(workbook, ws, sheetName);
            });
            const wbData = XLSX.write(workbook, {
                type: 'binary',
                bookType: defaults.mso.fileFormat,
                bookSST: false
            });
            saveToFile(xlsxWorkbookToArrayBuffer(wbData), defaults.fileName + '.' + defaults.mso.fileFormat, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'UTF-8', '', false);
        } else if (defaults.type === 'excel' || defaults.type === 'xls' || defaults.type === 'word' || defaults.type === 'doc') {
            const MSDocType = (defaults.type === 'excel' || defaults.type === 'xls') ? 'excel' : 'word';
            const MSDocExt = (MSDocType === 'excel') ? 'xls' : 'doc';
            const MSDocSchema = 'xmlns:x="urn:schemas-microsoft-com:office:' + MSDocType + '"';
            docData = '';
            let docName = '';
            $(el).filter(function() {
                return isVisible($(this));
            }).each(function() {
                const $table = $(this);
                if (docName === '') {
                    docName = defaults.mso.worksheetName || $table.find('caption').text() || 'Table';
                    docName = $.trim(docName.replace(/[\\\/[\]*:?'"]/g, '').substring(0, 31));
                }
                if (defaults.exportHiddenCells === false) {
                    $hiddenTableElements = $table.find('tr, th, td').filter(':hidden');
                    checkCellVisibility = $hiddenTableElements.length > 0;
                }
                rowIndex = 0;
                ranges = [];
                colNames = GetColumnNames(this);
                docData += '<table><thead>';
                $head_rows = collectHeadRows($table);
                $($head_rows).each(function() {
                    const $row = $(this);
                    trData = '';
                    ForEachVisibleCell(this, 'th,td', rowIndex, $head_rows.length, function(cell, row, col) {
                        if (cell !== null) {
                            let thStyle = '';
                            trData += '<th';
                            if (defaults.mso.styles.length) {
                                const cellStyles = document.defaultView.getComputedStyle(cell, null);
                                const rowStyles = document.defaultView.getComputedStyle($row[0], null);
                                for (let cssStyle in defaults.mso.styles) {
                                    let thCss = cellStyles[defaults.mso.styles[cssStyle]];
                                    if (thCss === '')
                                        thCss = rowStyles[defaults.mso.styles[cssStyle]];
                                    if (thCss !== '' && thCss !== '0px none rgb(0, 0, 0)' && thCss !== 'rgba(0, 0, 0, 0)') {
                                        thStyle += (thStyle === '') ? 'style="' : ';';
                                        thStyle += defaults.mso.styles[cssStyle] + ':' + thCss;
                                    }
                                }
                            }
                            if (thStyle !== '')
                                trData += ' ' + thStyle + '"';
                            const tdColspan = getColspan(cell);
                            if (tdColspan > 0)
                                trData += ' colspan="' + tdColspan + '"';
                            const tdRowspan = getRowspan(cell);
                            if (tdRowspan > 0)
                                trData += ' rowspan="' + tdRowspan + '"';
                            trData += '>' + parseString(cell, row, col) + '</th>';
                        }
                    });
                    if (trData.length > 0)
                        docData += '<tr>' + trData + '</tr>';
                    rowIndex++;
                });
                docData += '</thead><tbody>';
                $rows = collectRows($table);
                $($rows).each(function() {
                    const $row = $(this);
                    trData = '';
                    ForEachVisibleCell(this, 'td,th', rowIndex, $head_rows.length + $rows.length, function(cell, row, col) {
                        if (cell !== null) {
                            let tdValue = parseString(cell, row, col);
                            let tdStyle = '';
                            let tdCss = $(cell).attr('data-tableexport-msonumberformat');
                            if (typeof tdCss === 'undefined' && typeof defaults.mso.onMsoNumberFormat === 'function')
                                tdCss = defaults.mso.onMsoNumberFormat(cell, row, col);
                            if (typeof tdCss !== 'undefined' && tdCss !== '')
                                tdStyle = 'style="mso-number-format:\'' + tdCss + '\'';
                            if (defaults.mso.styles.length) {
                                const cellStyles = document.defaultView.getComputedStyle(cell, null);
                                const rowStyles = document.defaultView.getComputedStyle($row[0], null);
                                for (let cssStyle in defaults.mso.styles) {
                                    tdCss = cellStyles[defaults.mso.styles[cssStyle]];
                                    if (tdCss === '')
                                        tdCss = rowStyles[defaults.mso.styles[cssStyle]];
                                    if (tdCss !== '' && tdCss !== '0px none rgb(0, 0, 0)' && tdCss !== 'rgba(0, 0, 0, 0)') {
                                        tdStyle += (tdStyle === '') ? 'style="' : ';';
                                        tdStyle += defaults.mso.styles[cssStyle] + ':' + tdCss;
                                    }
                                }
                            }
                            trData += '<td';
                            if (tdStyle !== '')
                                trData += ' ' + tdStyle + '"';
                            const tdColspan = getColspan(cell);
                            if (tdColspan > 0)
                                trData += ' colspan="' + tdColspan + '"';
                            const tdRowspan = getRowspan(cell);
                            if (tdRowspan > 0)
                                trData += ' rowspan="' + tdRowspan + '"';
                            if (typeof tdValue === 'string' && tdValue !== '') {
                                tdValue = preventInjection(tdValue);
                                tdValue = tdValue.replace(/\n/g, '<br>');
                            }
                            trData += '>' + tdValue + '</td>';
                        }
                    });
                    if (trData.length > 0)
                        docData += '<tr>' + trData + '</tr>';
                    rowIndex++;
                });
                if (defaults.displayTableName)
                    docData += '<tr><td></td></tr><tr><td></td></tr><tr><td>' + parseString($('<p>' + defaults.tableName + '</p>')) + '</td></tr>';
                docData += '</tbody></table>';
            });
            let docFile = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' + MSDocSchema + ' xmlns="http://www.w3.org/TR/REC-html40">';
            docFile += '<meta http-equiv="content-type" content="application/vnd.ms-' + MSDocType + '; charset=UTF-8">';
            docFile += '<head>';
            if (MSDocType === 'excel') {
                docFile += '<!--[if gte mso 9]>';
                docFile += '<xml>';
                docFile += '<x:ExcelWorkbook>';
                docFile += '<x:ExcelWorksheets>';
                docFile += '<x:ExcelWorksheet>';
                docFile += '<x:Name>';
                docFile += docName;
                docFile += '</x:Name>';
                docFile += '<x:WorksheetOptions>';
                docFile += '<x:DisplayGridlines/>';
                if (defaults.mso.rtl)
                    docFile += '<x:DisplayRightToLeft/>';
                docFile += '</x:WorksheetOptions>';
                docFile += '</x:ExcelWorksheet>';
                docFile += '</x:ExcelWorksheets>';
                docFile += '</x:ExcelWorkbook>';
                docFile += '</xml>';
                docFile += '<![endif]-->';
            }
            docFile += '<style>';
            docFile += '@page { size:' + defaults.mso.pageOrientation + '; mso-page-orientation:' + defaults.mso.pageOrientation + '; }';
            docFile += '@page Section1 {size:' + pageFormats[defaults.mso.pageFormat][0] + 'pt ' + pageFormats[defaults.mso.pageFormat][1] + 'pt';
            docFile += '; margin:1.0in 1.25in 1.0in 1.25in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}';
            docFile += 'div.Section1 {page:Section1;}';
            docFile += '@page Section2 {size:' + pageFormats[defaults.mso.pageFormat][1] + 'pt ' + pageFormats[defaults.mso.pageFormat][0] + 'pt';
            docFile += ';mso-page-orientation:' + defaults.mso.pageOrientation + ';margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}';
            docFile += 'div.Section2 {page:Section2;}';
            docFile += 'br {mso-data-placement:same-cell;}';
            docFile += '</style>';
            docFile += '</head>';
            docFile += '<body>';
            docFile += '<div class="Section' + ((defaults.mso.pageOrientation === 'landscape') ? '2' : '1') + '">';
            docFile += docData;
            docFile += '</div>';
            docFile += '</body>';
            docFile += '</html>';
            if (defaults.outputMode === 'string')
                return docFile;
            if (defaults.outputMode === 'base64')
                return base64encode(docFile);
            saveToFile(docFile, defaults.fileName + '.' + MSDocExt, 'application/vnd.ms-' + MSDocType, '', 'base64', false);
        } else if (defaults.type === 'png') {
            html2canvas($(el)[0]).then(function(canvas) {
                const image = canvas.toDataURL();
                const byteString = atob(image.substring(22));
                const buffer = new ArrayBuffer(byteString.length);
                const intArray = new Uint8Array(buffer);
                for (let i = 0; i < byteString.length; i++)
                    intArray[i] = byteString.charCodeAt(i);
                if (defaults.outputMode === 'string')
                    return byteString;
                if (defaults.outputMode === 'base64')
                    return base64encode(image);
                if (defaults.outputMode === 'window') {
                    window.open(image);
                    return;
                }
                saveToFile(buffer, defaults.fileName + '.png', 'image/png', '', '', false);
            });
        } else if (defaults.type === 'pdf') {
            if (defaults.pdfmake.enabled === true) {
                const docDefinition = {
                    content: []
                };
                $.extend(true, docDefinition, defaults.pdfmake.docDefinition);
                ranges = [];
                $(el).filter(function() {
                    return isVisible($(this));
                }).each(function() {
                    const $table = $(this);
                    const widths = [];
                    const body = [];
                    rowIndex = 0;
                    const CollectPdfmakeData = function($rows, colselector, length) {
                        let rLength = 0;
                        $($rows).each(function() {
                            const r = [];
                            ForEachVisibleCell(this, colselector, rowIndex, length, function(cell, row, col) {
                                let cellContent;
                                if (typeof cell !== 'undefined' && cell !== null) {
                                    const colspan = getColspan(cell);
                                    const rowspan = getRowspan(cell);
                                    cellContent = {
                                        text: parseString(cell, row, col) || ' '
                                    };
                                    if (colspan > 1 || rowspan > 1) {
                                        cellContent['colSpan'] = colspan || 1;
                                        cellContent['rowSpan'] = rowspan || 1;
                                    }
                                } else
                                    cellContent = {
                                        text: ' '
                                    };
                                if (colselector.indexOf('th') >= 0)
                                    cellContent['style'] = 'header';
                                r.push(cellContent);
                            });
                            if (r.length)
                                body.push(r);
                            if (rLength < r.length)
                                rLength = r.length;
                            rowIndex++;
                        });
                        return rLength;
                    };
                    $head_rows = collectHeadRows($table);
                    let colcount = CollectPdfmakeData($head_rows, 'th,td', $head_rows.length);
                    for (let i = widths.length; i < colcount; i++)
                        widths.push('*');
                    $rows = collectRows($table);
                    colcount = CollectPdfmakeData($rows, 'td', $head_rows.length + $rows.length);
                    for (let i = widths.length; i < colcount; i++)
                        widths.push('*');
                    docDefinition.content.push({
                        table: {
                            headerRows: $head_rows.length ? $head_rows.length : null,
                            widths: widths,
                            body: body
                        },
                        layout: {
                            layout: 'noBorders',
                            hLineStyle: function(i, node) {
                                return 0;
                            },
                            vLineWidth: function(i, node) {
                                return 0;
                            },
                            hLineColor: function(i, node) {
                                return i < node.table.headerRows ? defaults.pdfmake.docDefinition.styles.header.background : defaults.pdfmake.docDefinition.styles.alternateRow.fillColor;
                            },
                            vLineColor: function(i, node) {
                                return i < node.table.headerRows ? defaults.pdfmake.docDefinition.styles.header.background : defaults.pdfmake.docDefinition.styles.alternateRow.fillColor;
                            },
                            fillColor: function(rowIndex, node, columnIndex) {
                                return (rowIndex % 2 === 0) ? defaults.pdfmake.docDefinition.styles.alternateRow.fillColor : null;
                            }
                        },
                        pageBreak: docDefinition.content.length ? "before" : undefined
                    });
                });
                if (typeof pdfMake !== 'undefined' && typeof pdfMake.createPdf !== 'undefined') {
                    pdfMake.fonts = {
                        Roboto: {
                            normal: 'Roboto-Regular.ttf',
                            bold: 'Roboto-Medium.ttf',
                            italics: 'Roboto-Italic.ttf',
                            bolditalics: 'Roboto-MediumItalic.ttf'
                        }
                    };
                    if (pdfMake.vfs.hasOwnProperty('Mirza-Regular.ttf')) {
                        docDefinition.defaultStyle.font = 'Mirza';
                        $.extend(true, pdfMake.fonts, {
                            Mirza: {
                                normal: 'Mirza-Regular.ttf',
                                bold: 'Mirza-Bold.ttf',
                                italics: 'Mirza-Medium.ttf',
                                bolditalics: 'Mirza-SemiBold.ttf'
                            }
                        });
                    } else if (pdfMake.vfs.hasOwnProperty('gbsn00lp.ttf')) {
                        docDefinition.defaultStyle.font = 'gbsn00lp';
                        $.extend(true, pdfMake.fonts, {
                            gbsn00lp: {
                                normal: 'gbsn00lp.ttf',
                                bold: 'gbsn00lp.ttf',
                                italics: 'gbsn00lp.ttf',
                                bolditalics: 'gbsn00lp.ttf'
                            }
                        });
                    } else if (pdfMake.vfs.hasOwnProperty('ZCOOLXiaoWei-Regular.ttf')) {
                        docDefinition.defaultStyle.font = 'ZCOOLXiaoWei';
                        $.extend(true, pdfMake.fonts, {
                            ZCOOLXiaoWei: {
                                normal: 'ZCOOLXiaoWei-Regular.ttf',
                                bold: 'ZCOOLXiaoWei-Regular.ttf',
                                italics: 'ZCOOLXiaoWei-Regular.ttf',
                                bolditalics: 'ZCOOLXiaoWei-Regular.ttf'
                            }
                        });
                    }
                    $.extend(true, pdfMake.fonts, defaults.pdfmake.fonts);
                    pdfMake.createPdf(docDefinition).getBuffer(function(buffer) {
                        saveToFile(buffer, defaults.fileName + '.pdf', 'application/pdf', '', '', false);
                    });
                }
            } else if (defaults.jspdf.autotable === false) {
                let doc = new jspdf.jsPDF({
                    orientation: defaults.jspdf.orientation,
                    unit: defaults.jspdf.unit,
                    format: defaults.jspdf.format
                });
                doc.html(el[0], {
                    callback: function() {
                        jsPdfOutput(doc, false);
                    },
                    html2canvas: {
                        scale: ((doc.internal.pageSize.width - defaults.jspdf.margins.left * 2) / el[0].scrollWidth)
                    },
                    x: defaults.jspdf.margins.left,
                    y: defaults.jspdf.margins.top
                });
            } else {
                const teOptions = defaults.jspdf.autotable.tableExport;
                if (typeof defaults.jspdf.format === 'string' && defaults.jspdf.format.toLowerCase() === 'bestfit') {
                    let rk = '',
                        ro = '';
                    let mw = 0;
                    $(el).each(function() {
                        if (isVisible($(this))) {
                            const w = getPropertyUnitValue($(this).get(0), 'width', 'pt');
                            if (w > mw) {
                                if (w > pageFormats.a0[0]) {
                                    rk = 'a0';
                                    ro = 'l';
                                }
                                for (let key in pageFormats) {
                                    if (pageFormats.hasOwnProperty(key)) {
                                        if (pageFormats[key][1] > w) {
                                            rk = key;
                                            ro = 'l';
                                            if (pageFormats[key][0] > w)
                                                ro = 'p';
                                        }
                                    }
                                }
                                mw = w;
                            }
                        }
                    });
                    defaults.jspdf.format = (rk === '' ? 'a4' : rk);
                    defaults.jspdf.orientation = (ro === '' ? 'w' : ro);
                }
                if (teOptions.doc == null) {
                    teOptions.doc = new jspdf.jsPDF(defaults.jspdf.orientation, defaults.jspdf.unit, defaults.jspdf.format);
                    teOptions.wScaleFactor = 1;
                    teOptions.hScaleFactor = 1;
                    if (typeof defaults.jspdf.onDocCreated === 'function')
                        defaults.jspdf.onDocCreated(teOptions.doc);
                }
                if (teOptions.outputImages === true)
                    teOptions.images = {};
                if (typeof teOptions.images !== 'undefined') {
                    $(el).filter(function() {
                        return isVisible($(this));
                    }).each(function() {
                        let rowCount = 0;
                        ranges = [];
                        if (defaults.exportHiddenCells === false) {
                            $hiddenTableElements = $(this).find('tr, th, td').filter(':hidden');
                            checkCellVisibility = $hiddenTableElements.length > 0;
                        }
                        $head_rows = collectHeadRows($(this));
                        $rows = collectRows($(this));
                        $($rows).each(function() {
                            ForEachVisibleCell(this, 'td,th', $head_rows.length + rowCount, $head_rows.length + $rows.length, function(cell) {
                                collectImages(cell, $(cell).children(), teOptions);
                            });
                            rowCount++;
                        });
                    });
                    $head_rows = [];
                    $rows = [];
                }
                loadImages(teOptions, function() {
                    $(el).filter(function() {
                        return isVisible($(this));
                    }).each(function() {
                        let colKey;
                        rowIndex = 0;
                        ranges = [];
                        if (defaults.exportHiddenCells === false) {
                            $hiddenTableElements = $(this).find('tr, th, td').filter(':hidden');
                            checkCellVisibility = $hiddenTableElements.length > 0;
                        }
                        colNames = GetColumnNames(this);
                        teOptions.columns = [];
                        teOptions.rows = [];
                        teOptions.teCells = {};
                        if (typeof teOptions.onTable === 'function')
                            if (teOptions.onTable($(this), defaults) === false)
                                return true;
                        defaults.jspdf.autotable.tableExport = null;
                        const atOptions = $.extend(true, {}, defaults.jspdf.autotable);
                        defaults.jspdf.autotable.tableExport = teOptions;
                        atOptions.margin = {};
                        $.extend(true, atOptions.margin, defaults.jspdf.margins);
                        atOptions.tableExport = teOptions;
                        if (typeof atOptions.createdHeaderCell !== 'function') {
                            atOptions.createdHeaderCell = function(cell, data) {
                                if (typeof teOptions.columns[data.column.dataKey] !== 'undefined') {
                                    const col = teOptions.columns[data.column.dataKey];
                                    if (typeof col.rect !== 'undefined') {
                                        let rh;
                                        cell.contentWidth = col.rect.width;
                                        if (typeof teOptions.heightRatio === 'undefined' || teOptions.heightRatio === 0) {
                                            if (data.row.raw[data.column.dataKey].rowspan)
                                                rh = data.row.raw[data.column.dataKey].rect.height / data.row.raw[data.column.dataKey].rowspan;
                                            else
                                                rh = data.row.raw[data.column.dataKey].rect.height;
                                            teOptions.heightRatio = cell.styles.rowHeight / rh;
                                        }
                                        rh = data.row.raw[data.column.dataKey].rect.height * teOptions.heightRatio;
                                        if (rh > cell.styles.rowHeight)
                                            cell.styles.rowHeight = rh;
                                    }
                                    cell.styles.halign = (atOptions.headerStyles.halign === 'inherit') ? 'center' : atOptions.headerStyles.halign;
                                    cell.styles.valign = atOptions.headerStyles.valign;
                                    if (typeof col.style !== 'undefined' && col.style.hidden !== true) {
                                        if (atOptions.headerStyles.halign === 'inherit')
                                            cell.styles.halign = col.style.align;
                                        if (atOptions.styles.fillColor === 'inherit')
                                            cell.styles.fillColor = col.style.bcolor;
                                        if (atOptions.styles.textColor === 'inherit')
                                            cell.styles.textColor = col.style.color;
                                        if (atOptions.styles.fontStyle === 'inherit')
                                            cell.styles.fontStyle = col.style.fstyle;
                                    }
                                }
                            };
                        }
                        if (typeof atOptions.createdCell !== 'function') {
                            atOptions.createdCell = function(cell, data) {
                                const tecell = teOptions.teCells[data.row.index + ':' + data.column.dataKey];
                                cell.styles.halign = (atOptions.styles.halign === 'inherit') ? 'center' : atOptions.styles.halign;
                                cell.styles.valign = atOptions.styles.valign;
                                if (typeof tecell !== 'undefined' && typeof tecell.style !== 'undefined' && tecell.style.hidden !== true) {
                                    if (atOptions.styles.halign === 'inherit')
                                        cell.styles.halign = tecell.style.align;
                                    if (atOptions.styles.fillColor === 'inherit')
                                        cell.styles.fillColor = tecell.style.bcolor;
                                    if (atOptions.styles.textColor === 'inherit')
                                        cell.styles.textColor = tecell.style.color;
                                    if (atOptions.styles.fontStyle === 'inherit')
                                        cell.styles.fontStyle = tecell.style.fstyle;
                                }
                            };
                        }
                        if (typeof atOptions.drawHeaderCell !== 'function') {
                            atOptions.drawHeaderCell = function(cell, data) {
                                const colopt = teOptions.columns[data.column.dataKey];
                                if ((colopt.style.hasOwnProperty('hidden') !== true || colopt.style.hidden !== true) && colopt.rowIndex >= 0)
                                    return prepareAutoTableText(cell, data, colopt);
                                else
                                    return false;
                            };
                        }
                        if (typeof atOptions.drawCell !== 'function') {
                            atOptions.drawCell = function(cell, data) {
                                const teCell = teOptions.teCells[data.row.index + ':' + data.column.dataKey];
                                const draw2canvas = (typeof teCell !== 'undefined' && teCell.isCanvas);
                                if (draw2canvas !== true) {
                                    if (prepareAutoTableText(cell, data, teCell)) {
                                        teOptions.doc.rect(cell.x, cell.y, cell.width, cell.height, cell.styles.fillStyle);
                                        if (typeof teCell !== 'undefined' && (typeof teCell.hasUserDefText === 'undefined' || teCell.hasUserDefText !== true) && typeof teCell.elements !== 'undefined' && teCell.elements.length) {
                                            const hScale = cell.height / teCell.rect.height;
                                            if (hScale > teOptions.hScaleFactor)
                                                teOptions.hScaleFactor = hScale;
                                            teOptions.wScaleFactor = cell.width / teCell.rect.width;
                                            const ySave = cell.textPos.y;
                                            drawAutotableElements(cell, teCell.elements, teOptions);
                                            cell.textPos.y = ySave;
                                            drawAutotableText(cell, teCell.elements, teOptions);
                                        } else
                                            drawAutotableText(cell, {}, teOptions);
                                    }
                                } else {
                                    const container = teCell.elements[0];
                                    const imgId = $(container).attr('data-tableexport-canvas');
                                    const r = container.getBoundingClientRect();
                                    cell.width = r.width * teOptions.wScaleFactor;
                                    cell.height = r.height * teOptions.hScaleFactor;
                                    data.row.height = cell.height;
                                    jsPdfDrawImage(cell, container, imgId, teOptions);
                                }
                                return false;
                            };
                        }
                        teOptions.headerrows = [];
                        $head_rows = collectHeadRows($(this));
                        $($head_rows).each(function() {
                            colKey = 0;
                            teOptions.headerrows[rowIndex] = [];
                            ForEachVisibleCell(this, 'th,td', rowIndex, $head_rows.length, function(cell, row, col) {
                                const obj = getCellStyles(cell);
                                obj.title = parseString(cell, row, col);
                                obj.key = colKey++;
                                obj.rowIndex = rowIndex;
                                teOptions.headerrows[rowIndex].push(obj);
                            });
                            rowIndex++;
                        });
                        if (rowIndex > 0) {
                            let lastrow = rowIndex - 1;
                            while (lastrow >= 0) {
                                $.each(teOptions.headerrows[lastrow], function() {
                                    let obj = this;
                                    if (lastrow > 0 && this.rect === null)
                                        obj = teOptions.headerrows[lastrow - 1][this.key];
                                    if (obj !== null && obj.rowIndex >= 0 && (obj.style.hasOwnProperty('hidden') !== true || obj.style.hidden !== true))
                                        teOptions.columns.push(obj);
                                });
                                lastrow = (teOptions.columns.length > 0) ? -1 : lastrow - 1;
                            }
                        }
                        let rowCount = 0;
                        $rows = [];
                        $rows = collectRows($(this));
                        $($rows).each(function() {
                            const rowData = [];
                            colKey = 0;
                            ForEachVisibleCell(this, 'td,th', rowIndex, $head_rows.length + $rows.length, function(cell, row, col) {
                                let obj;
                                if (typeof teOptions.columns[colKey] === 'undefined') {
                                    obj = {
                                        title: '',
                                        key: colKey,
                                        style: {
                                            hidden: true
                                        }
                                    };
                                    teOptions.columns.push(obj);
                                }
                                rowData.push(parseString(cell, row, col));
                                if (typeof cell !== 'undefined' && cell !== null) {
                                    obj = getCellStyles(cell);
                                    obj.isCanvas = cell.hasAttribute('data-tableexport-canvas');
                                    obj.elements = obj.isCanvas ? $(cell) : $(cell).children();
                                    if (typeof $(cell).data('teUserDefText') !== 'undefined')
                                        obj.hasUserDefText = true;
                                    teOptions.teCells[rowCount + ':' + colKey++] = obj;
                                } else {
                                    obj = $.extend(true, {}, teOptions.teCells[rowCount + ':' + (colKey - 1)]);
                                    obj.colspan = -1;
                                    teOptions.teCells[rowCount + ':' + colKey++] = obj;
                                }
                            });
                            if (rowData.length) {
                                teOptions.rows.push(rowData);
                                rowCount++;
                            }
                            rowIndex++;
                        });
                        if (typeof teOptions.onBeforeAutotable === 'function')
                            teOptions.onBeforeAutotable($(this), teOptions.columns, teOptions.rows, atOptions);
                        jsPdfAutoTable(teOptions.doc, teOptions.columns, teOptions.rows, atOptions);
                        if (typeof teOptions.onAfterAutotable === 'function')
                            teOptions.onAfterAutotable($(this), atOptions);
                        defaults.jspdf.autotable.startY = jsPdfAutoTableEndPosY() + atOptions.margin.top;
                    });
                    jsPdfOutput(teOptions.doc, (typeof teOptions.images !== 'undefined' && jQuery.isEmptyObject(teOptions.images) === false));
                    if (typeof teOptions.headerrows !== 'undefined')
                        teOptions.headerrows.length = 0;
                    if (typeof teOptions.columns !== 'undefined')
                        teOptions.columns.length = 0;
                    if (typeof teOptions.rows !== 'undefined')
                        teOptions.rows.length = 0;
                    delete teOptions.doc;
                    teOptions.doc = null;
                });
            }
        }

        function collectHeadRows($table) {
            const result = [];
            findTableElements($table, 'thead').each(function() {
                result.push.apply(result, findTableElements($(this), defaults.theadSelector).toArray());
            });
            return result;
        }

        function collectRows($table) {
            const result = [];
            findTableElements($table, 'tbody').each(function() {
                result.push.apply(result, findTableElements($(this), defaults.tbodySelector).toArray());
            });
            if (defaults.tfootSelector.length) {
                findTableElements($table, 'tfoot').each(function() {
                    result.push.apply(result, findTableElements($(this), defaults.tfootSelector).toArray());
                });
            }
            return result;
        }

        function findTableElements($parent, selector) {
            const parentSelector = $parent[0].tagName;
            const parentLevel = $parent.parents(parentSelector).length;
            return $parent.find(selector).filter(function() {
                return parentLevel === $(this).closest(parentSelector).parents(parentSelector).length;
            });
        }

        function GetColumnNames(table) {
            const result = [];
            let maxCols = 0;
            let row = 0;
            let col = 0;
            $(table).find('thead').first().find('th').each(function(index, el) {
                const hasDataField = $(el).attr('data-field') !== undefined;
                if (typeof el.parentNode.rowIndex !== 'undefined' && row !== el.parentNode.rowIndex) {
                    row = el.parentNode.rowIndex;
                    col = 0;
                    maxCols = 0;
                }
                const colSpan = getColspan(el);
                maxCols += (colSpan ? colSpan : 1);
                while (col < maxCols) {
                    result[col] = (hasDataField ? $(el).attr('data-field') : col.toString());
                    col++;
                }
            });
            return result;
        }

        function isVisible($element) {
            let isRow = typeof $element[0].rowIndex !== 'undefined';
            const isCell = isRow === false && typeof $element[0].cellIndex !== 'undefined';
            const isElementVisible = (isCell || isRow) ? isTableElementVisible($element) : $element.is(':visible');
            let tableexportDisplay = $element.attr('data-tableexport-display');
            if (isCell && tableexportDisplay !== 'none' && tableexportDisplay !== 'always') {
                $element = $($element[0].parentNode);
                isRow = typeof $element[0].rowIndex !== 'undefined';
                tableexportDisplay = $element.attr('data-tableexport-display');
            }
            if (isRow && tableexportDisplay !== 'none' && tableexportDisplay !== 'always') {
                tableexportDisplay = $element.closest('table').attr('data-tableexport-display');
            }
            return tableexportDisplay !== 'none' && (isElementVisible === true || tableexportDisplay === 'always');
        }

        function isTableElementVisible($element) {
            let hiddenEls = [];
            if (checkCellVisibility) {
                hiddenEls = $hiddenTableElements.filter(function() {
                    let found = false;
                    if (this.nodeType === $element[0].nodeType) {
                        if (typeof this.rowIndex !== 'undefined' && this.rowIndex === $element[0].rowIndex)
                            found = true;
                        else if (typeof this.cellIndex !== 'undefined' && this.cellIndex === $element[0].cellIndex && typeof this.parentNode.rowIndex !== 'undefined' && typeof $element[0].parentNode.rowIndex !== 'undefined' && this.parentNode.rowIndex === $element[0].parentNode.rowIndex)
                            found = true;
                    }
                    return found;
                });
            }
            return (checkCellVisibility === false || hiddenEls.length === 0);
        }

        function isColumnIgnored($cell, rowLength, colIndex) {
            let result = false;
            if (isVisible($cell)) {
                if (defaults.ignoreColumn.length > 0) {
                    if ($.inArray(colIndex, defaults.ignoreColumn) !== -1 || $.inArray(colIndex - rowLength, defaults.ignoreColumn) !== -1 || (colNames.length > colIndex && typeof colNames[colIndex] !== 'undefined' && $.inArray(colNames[colIndex], defaults.ignoreColumn) !== -1))
                        result = true;
                }
            } else
                result = true;
            return result;
        }

        function ForEachVisibleCell(tableRow, selector, rowIndex, rowCount, cellcallback) {
            if (typeof(cellcallback) === 'function') {
                let ignoreRow = false;
                if (typeof defaults.onIgnoreRow === 'function')
                    ignoreRow = defaults.onIgnoreRow($(tableRow), rowIndex);
                if (ignoreRow === false && (defaults.ignoreRow.length === 0 || ($.inArray(rowIndex, defaults.ignoreRow) === -1 && $.inArray(rowIndex - rowCount, defaults.ignoreRow) === -1)) && isVisible($(tableRow))) {
                    const $cells = findTableElements($(tableRow), selector);
                    let cellsCount = $cells.length;
                    let colCount = 0;
                    let colIndex = 0;
                    $cells.each(function() {
                        const $cell = $(this);
                        let colspan = getColspan(this);
                        let rowspan = getRowspan(this);
                        let c;
                        $.each(ranges, function() {
                            const range = this;
                            if (rowIndex > range.s.r && rowIndex <= range.e.r && colCount >= range.s.c && colCount <= range.e.c) {
                                for (c = 0; c <= range.e.c - range.s.c; ++c) {
                                    cellsCount++;
                                    colIndex++;
                                    cellcallback(null, rowIndex, colCount++);
                                }
                            }
                        });
                        if (rowspan || colspan) {
                            rowspan = rowspan || 1;
                            colspan = colspan || 1;
                            ranges.push({
                                s: {
                                    r: rowIndex,
                                    c: colCount
                                },
                                e: {
                                    r: rowIndex + rowspan - 1,
                                    c: colCount + colspan - 1
                                }
                            });
                        }
                        if (isColumnIgnored($cell, cellsCount, colIndex++) === false) {
                            cellcallback(this, rowIndex, colCount++);
                        }
                        if (colspan > 1) {
                            for (c = 0; c < colspan - 1; ++c) {
                                colIndex++;
                                cellcallback(null, rowIndex, colCount++);
                            }
                        }
                    });
                    $.each(ranges, function() {
                        const range = this;
                        if (rowIndex >= range.s.r && rowIndex <= range.e.r && colCount >= range.s.c && colCount <= range.e.c) {
                            for (let c = 0; c <= range.e.c - range.s.c; ++c) {
                                cellcallback(null, rowIndex, colCount++);
                            }
                        }
                    });
                }
            }
        }

        function jsPdfDrawImage(cell, container, imgId, teOptions) {
            if (typeof teOptions.images !== 'undefined') {
                const image = teOptions.images[imgId];
                if (typeof image !== 'undefined') {
                    const r = container.getBoundingClientRect();
                    const arCell = cell.width / cell.height;
                    const arImg = r.width / r.height;
                    let imgWidth = cell.width;
                    let imgHeight = cell.height;
                    const px2pt = 0.264583 * 72 / 25.4;
                    let uy = 0;
                    if (arImg <= arCell) {
                        imgHeight = Math.min(cell.height, r.height);
                        imgWidth = r.width * imgHeight / r.height;
                    } else if (arImg > arCell) {
                        imgWidth = Math.min(cell.width, r.width);
                        imgHeight = r.height * imgWidth / r.width;
                    }
                    imgWidth *= px2pt;
                    imgHeight *= px2pt;
                    if (imgHeight < cell.height)
                        uy = (cell.height - imgHeight) / 2;
                    try {
                        teOptions.doc.addImage(image.src, cell.textPos.x, cell.y + uy, imgWidth, imgHeight);
                    } catch (e) {}
                    cell.textPos.x += imgWidth;
                }
            }
        }

        function jsPdfOutput(doc, hasimages) {
            if (defaults.outputMode === 'string')
                return doc.output();
            if (defaults.outputMode === 'base64')
                return base64encode(doc.output());
            if (defaults.outputMode === 'window') {
                window.URL = window.URL || window.webkitURL;
                window.open(window.URL.createObjectURL(doc.output('blob')));
                return;
            }
            const fileName = defaults.fileName + '.pdf';
            try {
                const blob = doc.output('blob')
                saveAs(blob, fileName);
                if (typeof defaults.onAfterSaveToFile === 'function')
                    defaults.onAfterSaveToFile(blob, fileName);
            } catch (e) {
                downloadFile(fileName, 'data:application/pdf' + (hasimages ? '' : ';base64') + ',', hasimages ? doc.output('blob') : doc.output());
            }
        }

        function prepareAutoTableText(cell, data, cellopt) {
            let cs = 0
            if (typeof cellopt !== 'undefined')
                cs = cellopt.colspan;
            if (cs >= 0) {
                let cellWidth = cell.width
                let textPosX = cell.textPos.x
                const i = data.table.columns.indexOf(data.column)
                for (let c = 1; c < cs; c++) {
                    const column = data.table.columns[i + c]
                    cellWidth += column.width;
                }
                if (cs > 1) {
                    if (cell.styles.halign === 'right')
                        textPosX = cell.textPos.x + cellWidth - cell.width;
                    else if (cell.styles.halign === 'center')
                        textPosX = cell.textPos.x + (cellWidth - cell.width) / 2;
                }
                cell.width = cellWidth;
                cell.textPos.x = textPosX;
                if (typeof cellopt !== 'undefined' && cellopt.rowspan > 1)
                    cell.height = cell.height * cellopt.rowspan;
                if (cell.styles.valign === 'middle' || cell.styles.valign === 'bottom') {
                    const splittedText = typeof cell.text === 'string' ? cell.text.split(/\r\n|\r|\n/g) : cell.text;
                    const lineCount = splittedText.length || 1;
                    if (lineCount > 2)
                        cell.textPos.y -= ((2 - FONT_ROW_RATIO) / 2 * data.row.styles.fontSize) * (lineCount - 2) / 3;
                }
                return true;
            } else
                return false;
        }

        function collectImages(cell, elements, teOptions) {
            if (typeof cell !== 'undefined' && cell !== null) {
                if (cell.hasAttribute('data-tableexport-canvas')) {
                    const imgId = new Date().getTime();
                    $(cell).attr('data-tableexport-canvas', imgId);
                    teOptions.images[imgId] = {
                        url: '[data-tableexport-canvas="' + imgId + '"]',
                        src: null
                    };
                } else if (elements !== 'undefined' && elements != null) {
                    elements.each(function() {
                        if ($(this).is('img')) {
                            const imgId = strHashCode(this.src);
                            teOptions.images[imgId] = {
                                url: this.src,
                                src: this.src
                            };
                        }
                        collectImages(cell, $(this).children(), teOptions);
                    });
                }
            }
        }

        function loadImages(teOptions, callback) {
            let imageCount = 0;
            let pendingCount = 0;

            function done() {
                callback(imageCount);
            }

            function loadImage(image) {
                if (image.url) {
                    if (!image.src) {
                        const $imgContainer = $(image.url);
                        if ($imgContainer.length) {
                            imageCount = ++pendingCount;
                            html2canvas($imgContainer[0]).then(function(canvas) {
                                image.src = canvas.toDataURL('image/png');
                                if (!--pendingCount)
                                    done();
                            });
                        }
                    } else {
                        const img = new Image();
                        imageCount = ++pendingCount;
                        img.crossOrigin = 'Anonymous';
                        img.onerror = img.onload = function() {
                            if (img.complete) {
                                if (img.src.indexOf('data:image/') === 0) {
                                    img.width = image.width || img.width || 0;
                                    img.height = image.height || img.height || 0;
                                }
                                if (img.width + img.height) {
                                    const canvas = document.createElement('canvas');
                                    const ctx = canvas.getContext('2d');
                                    canvas.width = img.width;
                                    canvas.height = img.height;
                                    ctx.drawImage(img, 0, 0);
                                    image.src = canvas.toDataURL('image/png');
                                }
                            }
                            if (!--pendingCount)
                                done();
                        };
                        img.src = image.url;
                    }
                }
            }
            if (typeof teOptions.images !== 'undefined') {
                for (let i in teOptions.images)
                    if (teOptions.images.hasOwnProperty(i))
                        loadImage(teOptions.images[i]);
            }
            return pendingCount || done();
        }

        function drawAutotableElements(cell, elements, teOptions) {
            elements.each(function() {
                if ($(this).is('div')) {
                    const bColor = rgb2array(getStyle(this, 'background-color'), [255, 255, 255]);
                    const lColor = rgb2array(getStyle(this, 'border-top-color'), [0, 0, 0]);
                    const lWidth = getPropertyUnitValue(this, 'border-top-width', defaults.jspdf.unit);
                    const r = this.getBoundingClientRect();
                    const ux = this.offsetLeft * teOptions.wScaleFactor;
                    const uy = this.offsetTop * teOptions.hScaleFactor;
                    const uw = r.width * teOptions.wScaleFactor;
                    const uh = r.height * teOptions.hScaleFactor;
                    teOptions.doc.setDrawColor.apply(undefined, lColor);
                    teOptions.doc.setFillColor.apply(undefined, bColor);
                    teOptions.doc.setLineWidth(lWidth);
                    teOptions.doc.rect(cell.x + ux, cell.y + uy, uw, uh, lWidth ? 'FD' : 'F');
                } else if ($(this).is('img')) {
                    const imgId = strHashCode(this.src);
                    jsPdfDrawImage(cell, this, imgId, teOptions);
                }
                drawAutotableElements(cell, $(this).children(), teOptions);
            });
        }

        function drawAutotableText(cell, texttags, teOptions) {
            if (typeof teOptions.onAutotableText === 'function') {
                teOptions.onAutotableText(teOptions.doc, cell, texttags);
            } else {
                let x = cell.textPos.x;
                let y = cell.textPos.y;
                const style = {
                    halign: cell.styles.halign,
                    valign: cell.styles.valign
                };
                if (texttags.length) {
                    let tag = texttags[0];
                    while (tag.previousSibling)
                        tag = tag.previousSibling;
                    let b = false,
                        i = false;
                    while (tag) {
                        let txt = tag.innerText || tag.textContent || '';
                        const leadingSpace = (txt.length && txt[0] === ' ') ? ' ' : '';
                        const trailingSpace = (txt.length > 1 && txt[txt.length - 1] === ' ') ? ' ' : '';
                        if (defaults.preserve.leadingWS !== true)
                            txt = leadingSpace + trimLeft(txt);
                        if (defaults.preserve.trailingWS !== true)
                            txt = trimRight(txt) + trailingSpace;
                        if ($(tag).is('br')) {
                            x = cell.textPos.x;
                            y += teOptions.doc.internal.getFontSize();
                        }
                        if ($(tag).is('b'))
                            b = true;
                        else if ($(tag).is('i'))
                            i = true;
                        if (b || i)
                            teOptions.doc.setFont('undefined ', (b && i) ? 'bolditalic' : b ? 'bold' : 'italic');
                        let w = teOptions.doc.getStringUnitWidth(txt) * teOptions.doc.internal.getFontSize();
                        if (w) {
                            if (cell.styles.overflow === 'linebreak' && x > cell.textPos.x && (x + w) > (cell.textPos.x + cell.width)) {
                                const chars = '.,!%*;:=-';
                                if (chars.indexOf(txt.charAt(0)) >= 0) {
                                    const s = txt.charAt(0);
                                    w = teOptions.doc.getStringUnitWidth(s) * teOptions.doc.internal.getFontSize();
                                    if ((x + w) <= (cell.textPos.x + cell.width)) {
                                        jsPdfAutoTableText(s, x, y, style);
                                        txt = txt.substring(1, txt.length);
                                    }
                                    w = teOptions.doc.getStringUnitWidth(txt) * teOptions.doc.internal.getFontSize();
                                }
                                x = cell.textPos.x;
                                y += teOptions.doc.internal.getFontSize();
                            }
                            if (cell.styles.overflow !== 'visible') {
                                while (txt.length && (x + w) > (cell.textPos.x + cell.width)) {
                                    txt = txt.substring(0, txt.length - 1);
                                    w = teOptions.doc.getStringUnitWidth(txt) * teOptions.doc.internal.getFontSize();
                                }
                            }
                            jsPdfAutoTableText(txt, x, y, style);
                            x += w;
                        }
                        if (b || i) {
                            if ($(tag).is('b'))
                                b = false;
                            else if ($(tag).is('i'))
                                i = false;
                            teOptions.doc.setFont('undefined ', (!b && !i) ? 'normal' : b ? 'bold' : 'italic');
                        }
                        tag = tag.nextSibling;
                    }
                    cell.textPos.x = x;
                    cell.textPos.y = y;
                } else {
                    jsPdfAutoTableText(cell.text, cell.textPos.x, cell.textPos.y, style);
                }
            }
        }

        function escapeRegExp(string) {
            return string == null ? '' : string.toString().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }

        function replaceAll(string, find, replace) {
            return string == null ? '' : string.toString().replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }

        function trimLeft(string) {
            return string == null ? '' : string.toString().replace(/^\s+/, '');
        }

        function trimRight(string) {
            return string == null ? '' : string.toString().replace(/\s+$/, '');
        }

        function parseDateUTC(s) {
            if (defaults.date.html.length === 0)
                return false;
            defaults.date.pattern.lastIndex = 0;
            const match = defaults.date.pattern.exec(s);
            if (match == null)
                return false;
            const y = +match[defaults.date.match_y];
            if (y < 0 || y > 8099) return false;
            const m = match[defaults.date.match_m] * 1;
            const d = match[defaults.date.match_d] * 1;
            if (!isFinite(d)) return false;
            const o = new Date(y, m - 1, d, 0, 0, 0);
            if (o.getFullYear() === y && o.getMonth() === (m - 1) && o.getDate() === d)
                return new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
            else
                return false;
        }

        function parseNumber(value) {
            value = value || '0';
            if ('' !== defaults.numbers.html.thousandsSeparator)
                value = replaceAll(value, defaults.numbers.html.thousandsSeparator, '');
            if ('.' !== defaults.numbers.html.decimalMark)
                value = replaceAll(value, defaults.numbers.html.decimalMark, '.');
            return typeof value === 'number' || jQuery.isNumeric(value) !== false ? value : false;
        }

        function parsePercent(value) {
            if (value.indexOf('%') > -1) {
                value = parseNumber(value.replace(/%/g, ''));
                if (value !== false)
                    value = value / 100;
            } else
                value = false;
            return value;
        }

        function parseString(cell, rowIndex, colIndex, cellInfo) {
            let result = '';
            let cellType = 'text';
            if (cell !== null) {
                const $cell = $(cell);
                let htmlData;
                $cell.removeData('teUserDefText');
                if ($cell[0].hasAttribute('data-tableexport-canvas')) {
                    htmlData = '';
                } else if ($cell[0].hasAttribute('data-tableexport-value')) {
                    htmlData = $cell.attr('data-tableexport-value');
                    htmlData = htmlData ? htmlData + '' : '';
                    $cell.data('teUserDefText', 1);
                } else {
                    htmlData = $cell.html();
                    if (typeof defaults.onCellHtmlData === 'function') {
                        htmlData = defaults.onCellHtmlData($cell, rowIndex, colIndex, htmlData);
                        $cell.data('teUserDefText', 1);
                    } else if (htmlData !== '') {
                        const html = $.parseHTML('<div>' + htmlData + '</div>', null, false);
                        let inputIndex = 0;
                        let selectIndex = 0;
                        htmlData = '';
                        $.each(html, function() {
                            if ($(this).is('input')) {
                                htmlData += $cell.find('input').eq(inputIndex++).val();
                            } else if ($(this).is('select')) {
                                htmlData += $cell.find('select option:selected').eq(selectIndex++).text();
                            } else if ($(this).is('br')) {
                                htmlData += '<br>';
                            } else {
                                if (typeof $(this).html() === 'undefined')
                                    htmlData += $(this).text();
                                else if (jQuery().bootstrapTable === undefined || ($(this).hasClass('fht-cell') === false && $(this).hasClass('filterControl') === false && $cell.parents('.detail-view').length === 0))
                                    htmlData += $(this).html();
                                if ($(this).is('a')) {
                                    const href = $cell.find('a').attr('href') || '';
                                    if (typeof defaults.onCellHtmlHyperlink === 'function') {
                                        result += defaults.onCellHtmlHyperlink($cell, rowIndex, colIndex, href, htmlData);
                                    } else if (defaults.htmlHyperlink === 'href') {
                                        result += href;
                                    } else {
                                        result += htmlData;
                                    }
                                    htmlData = '';
                                }
                            }
                        });
                    }
                }
                if (htmlData && htmlData !== '' && defaults.htmlContent === true) {
                    result = $.trim(htmlData);
                } else if (htmlData && htmlData !== '') {
                    const cellFormat = $cell.attr('data-tableexport-cellformat');
                    if (cellFormat !== '') {
                        let text = htmlData.replace(/\n/g, '\u2028').replace(/(<\s*br([^>]*)>)/gi, '\u2060');
                        const obj = $('<div/>').html(text).contents();
                        let number = false;
                        text = '';
                        $.each(obj.text().split('\u2028'), function(i, v) {
                            if (i > 0)
                                text += ' ';
                            if (defaults.preserve.leadingWS !== true)
                                v = trimLeft(v);
                            text += (defaults.preserve.trailingWS !== true) ? trimRight(v) : v;
                        });
                        $.each(text.split('\u2060'), function(i, v) {
                            if (i > 0)
                                result += '\n';
                            if (defaults.preserve.leadingWS !== true)
                                v = trimLeft(v);
                            if (defaults.preserve.trailingWS !== true)
                                v = trimRight(v);
                            result += v.replace(/\u00AD/g, '');
                        });
                        result = result.replace(/\u00A0/g, ' ');
                        if (defaults.type === 'json' || (defaults.type === 'excel' && defaults.mso.fileFormat === 'xmlss') || defaults.numbers.output === false) {
                            number = parseNumber(result);
                            if (number !== false) {
                                cellType = 'number';
                                result = Number(number);
                            }
                        } else if (defaults.numbers.html.decimalMark !== defaults.numbers.output.decimalMark || defaults.numbers.html.thousandsSeparator !== defaults.numbers.output.thousandsSeparator) {
                            number = parseNumber(result);
                            if (number !== false) {
                                const frac = ('' + number.substr(number < 0 ? 1 : 0)).split('.');
                                if (frac.length === 1)
                                    frac[1] = '';
                                const mod = frac[0].length > 3 ? frac[0].length % 3 : 0;
                                cellType = 'number';
                                result = (number < 0 ? '-' : '') +
                                    (defaults.numbers.output.thousandsSeparator ? ((mod ? frac[0].substr(0, mod) + defaults.numbers.output.thousandsSeparator : '') + frac[0].substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + defaults.numbers.output.thousandsSeparator)) : frac[0]) +
                                    (frac[1].length ? defaults.numbers.output.decimalMark + frac[1] : '');
                            }
                        }
                    } else
                        result = htmlData;
                }
                if (defaults.escape === true) {
                    result = escape(result);
                }
                if (typeof defaults.onCellData === 'function') {
                    result = defaults.onCellData($cell, rowIndex, colIndex, result, cellType);
                    $cell.data('teUserDefText', 1);
                }
            }
            if (cellInfo !== undefined)
                cellInfo.type = cellType;
            return result;
        }

        function preventInjection(str) {
            if (str.length > 0 && defaults.preventInjection === true) {
                const chars = '=+-@';
                if (chars.indexOf(str.charAt(0)) >= 0)
                    return ('\'' + str);
            }
            return str;
        }

        function hyphenate(a, b, c) {
            return b + '-' + c.toLowerCase();
        }

        function rgb2array(rgb_string, default_result) {
            const re = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
            const bits = re.exec(rgb_string);
            let result = default_result;
            if (bits)
                result = [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
            return result;
        }

        function getCellStyles(cell) {
            let a = getStyle(cell, 'text-align');
            const fw = getStyle(cell, 'font-weight');
            const fs = getStyle(cell, 'font-style');
            let f = '';
            if (a === 'start')
                a = getStyle(cell, 'direction') === 'rtl' ? 'right' : 'left';
            if (fw >= 700)
                f = 'bold';
            if (fs === 'italic')
                f += fs;
            if (f === '')
                f = 'normal';
            const result = {
                style: {
                    align: a,
                    bcolor: rgb2array(getStyle(cell, 'background-color'), [255, 255, 255]),
                    color: rgb2array(getStyle(cell, 'color'), [0, 0, 0]),
                    fstyle: f
                },
                colspan: getColspan(cell),
                rowspan: getRowspan(cell)
            };
            if (cell !== null) {
                const r = cell.getBoundingClientRect();
                result.rect = {
                    width: r.width,
                    height: r.height
                };
            }
            return result;
        }

        function getColspan(cell) {
            let result = $(cell).attr('data-tableexport-colspan');
            if (typeof result === 'undefined' && $(cell).is('[colspan]'))
                result = $(cell).attr('colspan');
            return (parseInt(result) || 0);
        }

        function getRowspan(cell) {
            let result = $(cell).attr('data-tableexport-rowspan');
            if (typeof result === 'undefined' && $(cell).is('[rowspan]'))
                result = $(cell).attr('rowspan');
            return (parseInt(result) || 0);
        }

        function getStyle(target, prop) {
            try {
                if (window.getComputedStyle) {
                    prop = prop.replace(/([a-z])([A-Z])/, hyphenate);
                    return window.getComputedStyle(target, null).getPropertyValue(prop);
                }
                if (target.currentStyle) {
                    return target.currentStyle[prop];
                }
                return target.style[prop];
            } catch (e) {}
            return '';
        }

        function getUnitValue(parent, value, unit) {
            const baseline = 100;
            const temp = document.createElement('div');
            temp.style.overflow = 'hidden';
            temp.style.visibility = 'hidden';
            parent.appendChild(temp);
            temp.style.width = baseline + unit;
            const factor = baseline / temp.offsetWidth;
            parent.removeChild(temp);
            return (value * factor);
        }

        function getPropertyUnitValue(target, prop, unit) {
            const value = getStyle(target, prop);
            let numeric = value.match(/\d+/);
            if (numeric !== null) {
                numeric = numeric[0];
                return getUnitValue(target.parentElement, numeric, unit);
            }
            return 0;
        }

        function xlsxWorkbookToArrayBuffer(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        function xlsxTableToSheet(table) {
            let ssfId;
            const ws = ({});
            const rows = table.getElementsByTagName('tr');
            const sheetRows = Math.min(10000000, rows.length);
            const range = {
                s: {
                    r: 0,
                    c: 0
                },
                e: {
                    r: 0,
                    c: 0
                }
            };
            let merges = [],
                midx = 0;
            let _R = 0,
                R = 0,
                _C = 0,
                C = 0,
                RS = 0,
                CS = 0;
            let elt;
            const ssfTable = XLSX.SSF.get_table();
            for (; _R < rows.length && R < sheetRows; ++_R) {
                const row = rows[_R];
                let ignoreRow = false;
                if (typeof defaults.onIgnoreRow === 'function')
                    ignoreRow = defaults.onIgnoreRow($(row), _R);
                if (ignoreRow === true || (defaults.ignoreRow.length !== 0 && ($.inArray(_R, defaults.ignoreRow) !== -1 || $.inArray(_R - rows.length, defaults.ignoreRow) !== -1)) || isVisible($(row)) === false) {
                    continue;
                }
                const elts = (row.children);
                let _CLength = 0;
                for (_C = 0; _C < elts.length; ++_C) {
                    elt = elts[_C];
                    CS = +getColspan(elt) || 1;
                    _CLength += CS;
                }
                let CSOffset = 0;
                for (_C = C = 0; _C < elts.length; ++_C) {
                    elt = elts[_C];
                    CS = +getColspan(elt) || 1;
                    const col = _C + CSOffset;
                    if (isColumnIgnored($(elt), _CLength, col + (col < C ? C - col : 0)))
                        continue;
                    CSOffset += CS - 1;
                    for (midx = 0; midx < merges.length; ++midx) {
                        const m = merges[midx];
                        if (m.s.c == C && m.s.r <= R && R <= m.e.r) {
                            C = m.e.c + 1;
                            midx = -1;
                        }
                    }
                    if ((RS = +getRowspan(elt)) > 0 || CS > 1)
                        merges.push({
                            s: {
                                r: R,
                                c: C
                            },
                            e: {
                                r: R + (RS || 1) - 1,
                                c: C + CS - 1
                            }
                        });
                    const cellInfo = {
                        type: ''
                    };
                    let v = parseString(elt, _R, _C + CSOffset, cellInfo);
                    let o = {
                        t: 's',
                        v: v
                    };
                    let _t = '';
                    const cellFormat = $(elt).attr('data-tableexport-cellformat') || undefined;
                    if (cellFormat !== '') {
                        ssfId = parseInt($(elt).attr('data-tableexport-xlsxformatid') || 0);
                        if (ssfId === 0 && typeof defaults.mso.xlsx.formatId.numbers === 'function')
                            ssfId = defaults.mso.xlsx.formatId.numbers($(elt), _R, _C + CSOffset);
                        if (ssfId === 0 && typeof defaults.mso.xlsx.formatId.date === 'function')
                            ssfId = defaults.mso.xlsx.formatId.date($(elt), _R, _C + CSOffset);
                        if (ssfId === 49 || ssfId === '@')
                            _t = 's';
                        else if (cellInfo.type === 'number' || (ssfId > 0 && ssfId < 14) || (ssfId > 36 && ssfId < 41) || ssfId === 48)
                            _t = 'n';
                        else if (cellInfo.type === 'date' || (ssfId > 13 && ssfId < 37) || (ssfId > 44 && ssfId < 48) || ssfId === 56)
                            _t = 'd';
                    } else
                        _t = 's';
                    if (v != null) {
                        let vd;
                        if (v.length === 0) {
                            o.t = 'z';
                        } else if (v.trim().length === 0) {} else if (_t === 's') {} else if (cellInfo.type === 'function') {
                            o = {
                                f: v
                            };
                        } else if (v === 'TRUE') {
                            o = {
                                t: 'b',
                                v: true
                            };
                        } else if (v === 'FALSE') {
                            o = {
                                t: 'b',
                                v: false
                            };
                        } else if (_t === 'n' || isFinite(xlsxToNumber(v, defaults.numbers.output))) {
                            const vn = xlsxToNumber(v, defaults.numbers.output);
                            if (ssfId === 0 && typeof defaults.mso.xlsx.formatId.numbers !== 'function') {
                                ssfId = defaults.mso.xlsx.formatId.numbers;
                            }
                            if (isFinite(vn) || isFinite(v))
                                o = {
                                    t: 'n',
                                    v: (isFinite(vn) ? vn : v),
                                    z: (typeof ssfId === 'string') ? ssfId : (ssfId in ssfTable ? ssfTable[ssfId] : ssfId === defaults.mso.xlsx.formatId.currency ? defaults.mso.xlsx.format.currency : '0.00')
                                };
                        } else if ((vd = parseDateUTC(v)) !== false || _t === 'd') {
                            if (ssfId === 0 && typeof defaults.mso.xlsx.formatId.date !== 'function') {
                                ssfId = defaults.mso.xlsx.formatId.date;
                            }
                            o = {
                                t: 'd',
                                v: (vd !== false ? vd : v),
                                z: (typeof ssfId === 'string') ? ssfId : (ssfId in ssfTable ? ssfTable[ssfId] : 'm/d/yy')
                            };
                        }
                        const $aTag = $(elt).find('a');
                        if ($aTag && $aTag.length) {
                            const href = $aTag[0].hasAttribute("href") ? $aTag.attr('href') : '';
                            const content = (defaults.htmlHyperlink !== 'href' || href === '') ? v : '';
                            const hyperlink = (href !== '') ? '=HYPERLINK("' + href + (content.length ? '","' + content : '') + '")' : '';
                            if (hyperlink !== '') {
                                if (typeof defaults.mso.xlsx.onHyperlink === 'function') {
                                    v = defaults.mso.xlsx.onHyperlink($(elt), _R, _C, href, content, hyperlink);
                                    if (v.indexOf('=HYPERLINK') !== 0) {
                                        o = {
                                            t: 's',
                                            v: v
                                        };
                                    } else {
                                        o = {
                                            f: v
                                        };
                                    }
                                } else {
                                    o = {
                                        f: hyperlink
                                    };
                                }
                            }
                        }
                    }
                    ws[xlsxEncodeCell({
                        c: C,
                        r: R
                    })] = o;
                    if (range.e.c < C) {
                        range.e.c = C;
                    }
                    C += CS;
                }
                ++R;
            }
            if (merges.length) {
                ws['!merges'] = (ws["!merges"] || []).concat(merges);
            }
            range.e.r = Math.max(range.e.r, R - 1);
            ws['!ref'] = xlsxEncodeRange(range);
            if (R >= sheetRows) {
                ws['!fullref'] = xlsxEncodeRange((range.e.r = rows.length - _R + R - 1, range));
            }
            return ws;
        }

        function xlsxEncodeRow(row) {
            return '' + (row + 1);
        }

        function xlsxEncodeCol(col) {
            let s = '';
            for (++col; col; col = Math.floor((col - 1) / 26)) {
                s = String.fromCharCode(((col - 1) % 26) + 65) + s;
            }
            return s;
        }

        function xlsxEncodeCell(cell) {
            return xlsxEncodeCol(cell.c) + xlsxEncodeRow(cell.r);
        }

        function xlsxEncodeRange(cs, ce) {
            if (typeof ce === 'undefined' || typeof ce === 'number') {
                return xlsxEncodeRange(cs.s, cs.e);
            }
            if (typeof cs !== 'string') {
                cs = xlsxEncodeCell((cs));
            }
            if (typeof ce !== 'string') {
                ce = xlsxEncodeCell((ce));
            }
            return cs === ce ? cs : cs + ':' + ce;
        }

        function xlsxToNumber(s, numbersFormat) {
            let v = Number(s);
            if (isFinite(v)) return v;
            let wt = 1;
            let ss = s;
            if ('' !== numbersFormat.thousandsSeparator)
                ss = ss.replace(new RegExp('([\\d])' + numbersFormat.thousandsSeparator + '([\\d])', 'g'), '$1$2');
            if ('.' !== numbersFormat.decimalMark)
                ss = ss.replace(new RegExp('([\\d])' + numbersFormat.decimalMark + '([\\d])', 'g'), '$1.$2');
            ss = ss.replace(/[$]/g, '').replace(/[%]/g, function() {
                wt *= 100;
                return '';
            });
            if (isFinite(v = Number(ss))) return v / wt;
            ss = ss.replace(/[(](.*)[)]/, function($$, $1) {
                wt = -wt;
                return $1;
            });
            if (isFinite(v = Number(ss))) return v / wt;
            return v;
        }

        function strHashCode(str) {
            let hash = 0,
                i, chr, len;
            if (str.length === 0) return hash;
            for (i = 0, len = str.length; i < len; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            return hash;
        }

        function saveToFile(data, fileName, type, charset, encoding, bom) {
            let saveIt = true;
            if (typeof defaults.onBeforeSaveToFile === 'function') {
                saveIt = defaults.onBeforeSaveToFile(data, fileName, type, charset, encoding);
                if (typeof saveIt !== 'boolean')
                    saveIt = true;
            }
            if (saveIt) {
                try {
                    blob = new Blob([data], {
                        type: type + ';charset=' + charset
                    });
                    saveAs(blob, fileName, bom === false);
                    if (typeof defaults.onAfterSaveToFile === 'function')
                        defaults.onAfterSaveToFile(data, fileName);
                } catch (e) {
                    downloadFile(fileName, 'data:' + type +
                        (charset.length ? ';charset=' + charset : '') +
                        (encoding.length ? ';' + encoding : '') + ',', (bom ? ('\ufeff' + data) : data));
                }
            }
        }

        function downloadFile(filename, header, data) {
            const ua = window.navigator.userAgent;
            if (filename !== false && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(new Blob([data]), filename);
            } else if (filename !== false && (ua.indexOf('MSIE ') > 0 || !!ua.match(/Trident.*rv\:11\./))) {
                const frame = document.createElement('iframe');
                if (frame) {
                    document.body.appendChild(frame);
                    frame.setAttribute('style', 'display:none');
                    frame.contentDocument.open('txt/plain', 'replace');
                    frame.contentDocument.write(data);
                    frame.contentDocument.close();
                    frame.contentWindow.focus();
                    const extension = filename.substr((filename.lastIndexOf('.') + 1));
                    switch (extension) {
                        case 'doc':
                        case 'json':
                        case 'png':
                        case 'pdf':
                        case 'xls':
                        case 'xlsx':
                            filename += '.txt';
                            break;
                    }
                    frame.contentDocument.execCommand('SaveAs', true, filename);
                    document.body.removeChild(frame);
                }
            } else {
                const DownloadLink = document.createElement('a');
                if (DownloadLink) {
                    let blobUrl = null;
                    DownloadLink.style.display = 'none';
                    if (filename !== false)
                        DownloadLink.download = filename;
                    else
                        DownloadLink.target = '_blank';
                    if (typeof data === 'object') {
                        window.URL = window.URL || window.webkitURL;
                        const binaryData = [];
                        binaryData.push(data);
                        blobUrl = window.URL.createObjectURL(new Blob(binaryData, {
                            type: header
                        }));
                        DownloadLink.href = blobUrl;
                    } else if (header.toLowerCase().indexOf('base64,') >= 0) {
                        DownloadLink.href = header + base64encode(data);
                    } else {
                        DownloadLink.href = header + encodeURIComponent(data);
                    }
                    document.body.appendChild(DownloadLink);
                    if (document.createEvent) {
                        if (DownloadEvt === null)
                            DownloadEvt = document.createEvent('MouseEvents');
                        DownloadEvt.initEvent('click', true, false);
                        DownloadLink.dispatchEvent(DownloadEvt);
                    } else if (document.createEventObject)
                        DownloadLink.fireEvent('onclick');
                    else if (typeof DownloadLink.onclick === 'function')
                        DownloadLink.onclick();
                    setTimeout(function() {
                        if (blobUrl)
                            window.URL.revokeObjectURL(blobUrl);
                        document.body.removeChild(DownloadLink);
                        if (typeof defaults.onAfterSaveToFile === 'function')
                            defaults.onAfterSaveToFile(data, filename);
                    }, 100);
                }
            }
        }

        function utf8Encode(text) {
            if (typeof text === 'string') {
                text = text.replace(/\x0d\x0a/g, '\x0a');
                let utfText = '';
                for (let n = 0; n < text.length; n++) {
                    const c = text.charCodeAt(n);
                    if (c < 128) {
                        utfText += String.fromCharCode(c);
                    } else if ((c > 127) && (c < 2048)) {
                        utfText += String.fromCharCode((c >> 6) | 192);
                        utfText += String.fromCharCode((c & 63) | 128);
                    } else {
                        utfText += String.fromCharCode((c >> 12) | 224);
                        utfText += String.fromCharCode(((c >> 6) & 63) | 128);
                        utfText += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utfText;
            }
            return text;
        }

        function base64encode(input) {
            let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            let output = '';
            let i = 0;
            input = utf8Encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
            }
            return output;
        }
        var jsPdfDoc, jsPdfCursor, jsPdfSettings, jsPdfPageCount, jsPdfTable;

        function jsPdfAutoTable(doc, headers, data, options) {
            jsPdfValidateInput(headers, data, options);
            jsPdfDoc = doc;
            jsPdfSettings = jsPdfInitOptions(options || {});
            jsPdfPageCount = 1;
            jsPdfCursor = {
                y: jsPdfSettings.startY === false ? jsPdfSettings.margin.top : jsPdfSettings.startY
            };
            const userStyles = {
                textColor: 30,
                fontSize: jsPdfDoc.internal.getFontSize(),
                fontStyle: jsPdfDoc.internal.getFont().fontStyle
            };
            jsPdfCreateModels(headers, data);
            jsPdfCalculateWidths();
            const firstRowHeight = jsPdfTable.rows[0] && jsPdfSettings.pageBreak === 'auto' ? jsPdfTable.rows[0].height : 0;
            let minTableBottomPos = jsPdfSettings.startY + jsPdfSettings.margin.bottom + jsPdfTable.headerRow.height + firstRowHeight;
            if (jsPdfSettings.pageBreak === 'avoid') {
                minTableBottomPos += jsPdfTable.height;
            }
            if ((jsPdfSettings.pageBreak === 'always' && jsPdfSettings.startY !== false) || (jsPdfSettings.startY !== false && minTableBottomPos > jsPdfDoc.internal.pageSize.height)) {
                jsPdfDoc.addPage();
                jsPdfCursor.y = jsPdfSettings.margin.top;
            }
            jsPdfApplyStyles(userStyles);
            jsPdfSettings.beforePageContent(jsPdfHooksData());
            if (jsPdfSettings.drawHeaderRow(jsPdfTable.headerRow, jsPdfHooksData({
                    row: jsPdfTable.headerRow
                })) !== false) {
                jsPdfPrintRow(jsPdfTable.headerRow, jsPdfSettings.drawHeaderCell);
            }
            jsPdfApplyStyles(userStyles);
            jsPdfPrintRows();
            jsPdfSettings.afterPageContent(jsPdfHooksData());
            jsPdfApplyStyles(userStyles);
            return jsPdfDoc;
        }

        function jsPdfAutoTableEndPosY() {
            if (typeof jsPdfCursor === 'undefined' || typeof jsPdfCursor.y === 'undefined') {
                return 0;
            }
            return jsPdfCursor.y;
        }

        function jsPdfAutoTableText(text, x, y, styles) {
            if (typeof x !== 'number' || typeof y !== 'number') {
                console.error('The x and y parameters are required. Missing for the text: ', text);
            }
            const fontSize = jsPdfDoc.internal.getFontSize() / jsPdfDoc.internal.scaleFactor;
            const lineHeightProportion = FONT_ROW_RATIO;
            const splitRegex = /\r\n|\r|\n/g;
            let splittedText = null;
            let lineCount = 1;
            if (styles.valign === 'middle' || styles.valign === 'bottom' || styles.halign === 'center' || styles.halign === 'right') {
                splittedText = typeof text === 'string' ? text.split(splitRegex) : text;
                lineCount = splittedText.length || 1;
            }
            y += fontSize * (2 - lineHeightProportion);
            if (styles.valign === 'middle')
                y -= (lineCount / 2) * fontSize;
            else if (styles.valign === 'bottom')
                y -= lineCount * fontSize;
            if (styles.halign === 'center' || styles.halign === 'right') {
                let alignSize = fontSize;
                if (styles.halign === 'center')
                    alignSize *= 0.5;
                if (splittedText && lineCount >= 1) {
                    for (let iLine = 0; iLine < splittedText.length; iLine++) {
                        jsPdfDoc.text(splittedText[iLine], x - jsPdfDoc.getStringUnitWidth(splittedText[iLine]) * alignSize, y);
                        y += fontSize;
                    }
                    return jsPdfDoc;
                }
                x -= jsPdfDoc.getStringUnitWidth(text) * alignSize;
            }
            jsPdfDoc.text(text, x, y);
            return jsPdfDoc;
        }

        function jsPdfValidateInput(headers, data, options) {
            if (!headers || typeof headers !== 'object') {
                console.error("The headers should be an object or array, is: " + typeof headers);
            }
            if (!data || typeof data !== 'object') {
                console.error("The data should be an object or array, is: " + typeof data);
            }
            if (!!options && typeof options !== 'object') {
                console.error("The data should be an object or array, is: " + typeof data);
            }
            if (!Array.prototype.forEach) {
                console.error("The current browser does not support Array.prototype.forEach which is required for jsPDF-AutoTable");
            }
        }

        function jsPdfInitOptions(userOptions) {
            const settings = jsPdfExtend(jsPdfDefaultOptions(), userOptions);
            if (typeof settings.extendWidth !== 'undefined') {
                settings.tableWidth = settings.extendWidth ? 'auto' : 'wrap';
                console.error("Use of deprecated option: extendWidth, use tableWidth instead.");
            }
            if (typeof settings.margins !== 'undefined') {
                if (typeof settings.margin === 'undefined') settings.margin = settings.margins;
                console.error("Use of deprecated option: margins, use margin instead.");
            }
            [
                ['padding', 'cellPadding'],
                ['lineHeight', 'rowHeight'], 'fontSize', 'overflow'
            ].forEach(function(o) {
                const deprecatedOption = typeof o === 'string' ? o : o[0];
                const style = typeof o === 'string' ? o : o[1];
                if (typeof settings[deprecatedOption] !== 'undefined') {
                    if (typeof settings.styles[style] === 'undefined') {
                        settings.styles[style] = settings[deprecatedOption];
                    }
                    console.error("Use of deprecated option: " + deprecatedOption + ", use the style " + style + " instead.");
                }
            });
            const marginSetting = settings.margin;
            settings.margin = {};
            if (typeof marginSetting.horizontal === 'number') {
                marginSetting.right = marginSetting.horizontal;
                marginSetting.left = marginSetting.horizontal;
            }
            if (typeof marginSetting.vertical === 'number') {
                marginSetting.top = marginSetting.vertical;
                marginSetting.bottom = marginSetting.vertical;
            }
            ['top', 'right', 'bottom', 'left'].forEach(function(side, i) {
                if (typeof marginSetting === 'number') {
                    settings.margin[side] = marginSetting;
                } else {
                    const key = Array.isArray(marginSetting) ? i : side;
                    settings.margin[side] = typeof marginSetting[key] === 'number' ? marginSetting[key] : 40;
                }
            });
            return settings;
        }

        function jsPdfCreateModels(inputHeaders, inputData) {
            jsPdfTable = new jsPdfTableClass();
            jsPdfTable.x = jsPdfSettings.margin.left;
            const splitRegex = /\r\n|\r|\n/g;
            const headerRow = new jsPdfRowClass(inputHeaders);
            headerRow.index = -1;
            const themeStyles = jsPdfExtend(jsPdfDefaultStyles, jsPdfThemes[jsPdfSettings.theme].table, jsPdfThemes[jsPdfSettings.theme].header);
            headerRow.styles = jsPdfExtend(themeStyles, jsPdfSettings.styles, jsPdfSettings.headerStyles);
            inputHeaders.forEach(function(rawColumn, dataKey) {
                if (typeof rawColumn === 'object') {
                    dataKey = typeof rawColumn.dataKey !== 'undefined' ? rawColumn.dataKey : rawColumn.key;
                }
                if (typeof rawColumn.width !== 'undefined') {
                    console.error("Use of deprecated option: column.width, use column.styles.columnWidth instead.");
                }
                const col = new jsPdfColumnClass(dataKey);
                col.styles = jsPdfSettings.columnStyles[col.dataKey] || {};
                jsPdfTable.columns.push(col);
                const cell = new jsPdfCellClass();
                cell.raw = typeof rawColumn === 'object' ? rawColumn.title : rawColumn;
                cell.styles = $.extend({}, headerRow.styles);
                cell.text = '' + cell.raw;
                cell.contentWidth = cell.styles.cellPadding * 2 + jsPdfGetStringWidth(cell.text, cell.styles);
                cell.text = cell.text.split(splitRegex);
                headerRow.cells[dataKey] = cell;
                jsPdfSettings.createdHeaderCell(cell, {
                    column: col,
                    row: headerRow,
                    settings: jsPdfSettings
                });
            });
            jsPdfTable.headerRow = headerRow;
            inputData.forEach(function(rawRow, i) {
                const row = new jsPdfRowClass(rawRow);
                const isAlternate = i % 2 === 0;
                const themeStyles = jsPdfExtend(jsPdfDefaultStyles, jsPdfThemes[jsPdfSettings.theme].table, isAlternate ? jsPdfThemes[jsPdfSettings.theme].alternateRow : {});
                const userStyles = jsPdfExtend(jsPdfSettings.styles, jsPdfSettings.bodyStyles, isAlternate ? jsPdfSettings.alternateRowStyles : {});
                row.styles = jsPdfExtend(themeStyles, userStyles);
                row.index = i;
                jsPdfTable.columns.forEach(function(column) {
                    const cell = new jsPdfCellClass();
                    cell.raw = rawRow[column.dataKey];
                    cell.styles = jsPdfExtend(row.styles, column.styles);
                    cell.text = typeof cell.raw !== 'undefined' ? '' + cell.raw : '';
                    row.cells[column.dataKey] = cell;
                    jsPdfSettings.createdCell(cell, jsPdfHooksData({
                        column: column,
                        row: row
                    }));
                    cell.contentWidth = cell.styles.cellPadding * 2 + jsPdfGetStringWidth(cell.text, cell.styles);
                    cell.text = cell.text.split(splitRegex);
                });
                jsPdfTable.rows.push(row);
            });
        }

        function jsPdfCalculateWidths() {
            let tableContentWidth = 0;
            jsPdfTable.columns.forEach(function(column) {
                column.contentWidth = jsPdfTable.headerRow.cells[column.dataKey].contentWidth;
                jsPdfTable.rows.forEach(function(row) {
                    const cellWidth = row.cells[column.dataKey].contentWidth;
                    if (cellWidth > column.contentWidth) {
                        column.contentWidth = cellWidth;
                    }
                });
                column.width = column.contentWidth;
                tableContentWidth += column.contentWidth;
            });
            jsPdfTable.contentWidth = tableContentWidth;
            const maxTableWidth = jsPdfDoc.internal.pageSize.width - jsPdfSettings.margin.left - jsPdfSettings.margin.right;
            let preferredTableWidth = maxTableWidth;
            if (typeof jsPdfSettings.tableWidth === 'number') {
                preferredTableWidth = jsPdfSettings.tableWidth;
            } else if (jsPdfSettings.tableWidth === 'wrap') {
                preferredTableWidth = jsPdfTable.contentWidth;
            }
            jsPdfTable.width = preferredTableWidth < maxTableWidth ? preferredTableWidth : maxTableWidth;
            const dynamicColumns = [];
            let dynamicColumnsContentWidth = 0;
            const fairWidth = jsPdfTable.width / jsPdfTable.columns.length;
            let staticWidth = 0;
            jsPdfTable.columns.forEach(function(column) {
                const colStyles = jsPdfExtend(jsPdfDefaultStyles, jsPdfThemes[jsPdfSettings.theme].table, jsPdfSettings.styles, column.styles);
                if (colStyles.columnWidth === 'wrap') {
                    column.width = column.contentWidth;
                } else if (typeof colStyles.columnWidth === 'number') {
                    column.width = colStyles.columnWidth;
                } else if (colStyles.columnWidth === 'auto' || true) {
                    if (column.contentWidth <= fairWidth && jsPdfTable.contentWidth > jsPdfTable.width) {
                        column.width = column.contentWidth;
                    } else {
                        dynamicColumns.push(column);
                        dynamicColumnsContentWidth += column.contentWidth;
                        column.width = 0;
                    }
                }
                staticWidth += column.width;
            });
            jsPdfDistributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth);
            jsPdfTable.height = 0;
            const all = jsPdfTable.rows.concat(jsPdfTable.headerRow);
            all.forEach(function(row, i) {
                let lineBreakCount = 0;
                let cursorX = jsPdfTable.x;
                jsPdfTable.columns.forEach(function(col) {
                    const cell = row.cells[col.dataKey];
                    col.x = cursorX;
                    jsPdfApplyStyles(cell.styles);
                    const textSpace = col.width - cell.styles.cellPadding * 2;
                    if (cell.styles.overflow === 'linebreak') {
                        cell.text = jsPdfDoc.splitTextToSize(cell.text, textSpace + 1, {
                            fontSize: cell.styles.fontSize
                        });
                    } else if (cell.styles.overflow === 'ellipsize') {
                        cell.text = jsPdfEllipsize(cell.text, textSpace, cell.styles);
                    } else if (cell.styles.overflow === 'visible') {} else if (cell.styles.overflow === 'hidden') {
                        cell.text = jsPdfEllipsize(cell.text, textSpace, cell.styles, '');
                    } else if (typeof cell.styles.overflow === 'function') {
                        cell.text = cell.styles.overflow(cell.text, textSpace);
                    } else {
                        console.error("Unrecognized overflow type: " + cell.styles.overflow);
                    }
                    const count = Array.isArray(cell.text) ? cell.text.length - 1 : 0;
                    if (count > lineBreakCount) {
                        lineBreakCount = count;
                    }
                    cursorX += col.width;
                });
                row.heightStyle = row.styles.rowHeight;
                row.height = (row.heightStyle + lineBreakCount * row.styles.fontSize * FONT_ROW_RATIO) +
                    ((2 - FONT_ROW_RATIO) / 2 * row.styles.fontSize);
                jsPdfTable.height += row.height;
            });
        }

        function jsPdfDistributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth) {
            const extraWidth = jsPdfTable.width - staticWidth - dynamicColumnsContentWidth;
            for (let i = 0; i < dynamicColumns.length; i++) {
                const col = dynamicColumns[i];
                const ratio = col.contentWidth / dynamicColumnsContentWidth;
                const isNoneDynamic = col.contentWidth + extraWidth * ratio < fairWidth;
                if (extraWidth < 0 && isNoneDynamic) {
                    dynamicColumns.splice(i, 1);
                    dynamicColumnsContentWidth -= col.contentWidth;
                    col.width = fairWidth;
                    staticWidth += col.width;
                    jsPdfDistributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth);
                    break;
                } else {
                    col.width = col.contentWidth + extraWidth * ratio;
                }
            }
        }

        function jsPdfPrintRows() {
            jsPdfTable.rows.forEach(function(row, i) {
                if (jsPdfIsNewPage(row.height)) {
                    jsPdfAddPage();
                }
                row.y = jsPdfCursor.y;
                if (jsPdfSettings.drawRow(row, jsPdfHooksData({
                        row: row
                    })) !== false) {
                    jsPdfPrintRow(row, jsPdfSettings.drawCell);
                }
            });
        }

        function jsPdfAddPage() {
            jsPdfSettings.afterPageContent(jsPdfHooksData());
            jsPdfDoc.addPage();
            jsPdfPageCount++;
            jsPdfCursor = {
                x: jsPdfSettings.margin.left,
                y: jsPdfSettings.margin.top
            };
            jsPdfSettings.beforePageContent(jsPdfHooksData());
            if (jsPdfSettings.drawHeaderRow(jsPdfTable.headerRow, jsPdfHooksData({
                    row: jsPdfTable.headerRow
                })) !== false) {
                jsPdfPrintRow(jsPdfTable.headerRow, jsPdfSettings.drawHeaderCell);
            }
        }

        function jsPdfIsNewPage(rowHeight) {
            const afterRowPos = jsPdfCursor.y + rowHeight + jsPdfSettings.margin.bottom;
            return afterRowPos >= jsPdfDoc.internal.pageSize.height;
        }

        function jsPdfPrintRow(row, hookHandler) {
            for (let i = 0; i < jsPdfTable.columns.length; i++) {
                const column = jsPdfTable.columns[i];
                const cell = row.cells[column.dataKey];
                if (!cell) {
                    continue;
                }
                jsPdfApplyStyles(cell.styles);
                cell.x = column.x;
                cell.y = jsPdfCursor.y;
                cell.height = row.height;
                cell.width = column.width;
                if (cell.styles.valign === 'top') {
                    cell.textPos.y = jsPdfCursor.y + cell.styles.cellPadding;
                } else if (cell.styles.valign === 'bottom') {
                    cell.textPos.y = jsPdfCursor.y + row.height - cell.styles.cellPadding;
                } else {
                    cell.textPos.y = jsPdfCursor.y + row.height / 2;
                }
                if (cell.styles.halign === 'right') {
                    cell.textPos.x = cell.x + cell.width - cell.styles.cellPadding;
                } else if (cell.styles.halign === 'center') {
                    cell.textPos.x = cell.x + cell.width / 2;
                } else {
                    cell.textPos.x = cell.x + cell.styles.cellPadding;
                }
                const data = jsPdfHooksData({
                    column: column,
                    row: row
                });
                if (hookHandler(cell, data) !== false) {
                    jsPdfDoc.rect(cell.x, cell.y, cell.width, cell.height, cell.styles.fillStyle);
                    jsPdfAutoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
                        halign: cell.styles.halign,
                        valign: cell.styles.valign
                    });
                }
            }
            jsPdfCursor.y += row.height;
        }

        function jsPdfApplyStyles(styles) {
            const arr = [{
                func: jsPdfDoc.setFillColor,
                value: styles.fillColor
            }, {
                func: jsPdfDoc.setTextColor,
                value: styles.textColor
            }, {
                func: jsPdfDoc.setFont,
                value: styles.font,
                style: styles.fontStyle
            }, {
                func: jsPdfDoc.setDrawColor,
                value: styles.lineColor
            }, {
                func: jsPdfDoc.setLineWidth,
                value: styles.lineWidth
            }, {
                func: jsPdfDoc.setFont,
                value: styles.font
            }, {
                func: jsPdfDoc.setFontSize,
                value: styles.fontSize
            }];
            arr.forEach(function(obj) {
                if (typeof obj.value !== 'undefined') {
                    if (obj.value.constructor === Array) {
                        obj.func.apply(jsPdfDoc, obj.value);
                    } else if (typeof obj.style !== 'undefined') {
                        obj.func(obj.value, obj.style);
                    } else {
                        obj.func(obj.value);
                    }
                }
            });
        }

        function jsPdfHooksData(additionalData) {
            additionalData = additionalData || {};
            const data = {
                pageCount: jsPdfPageCount,
                settings: jsPdfSettings,
                table: jsPdfTable,
                cursor: jsPdfCursor
            };
            for (let prop in additionalData) {
                if (additionalData.hasOwnProperty(prop)) {
                    data[prop] = additionalData[prop];
                }
            }
            return data;
        }

        function jsPdfEllipsize(text, width, styles, ellipsizeStr) {
            ellipsizeStr = typeof ellipsizeStr !== 'undefined' ? ellipsizeStr : '...';
            if (Array.isArray(text)) {
                text.forEach(function(str, i) {
                    text[i] = jsPdfEllipsize(str, width, styles, ellipsizeStr);
                });
                return text;
            }
            if (width >= jsPdfGetStringWidth(text, styles)) {
                return text;
            }
            while (width < jsPdfGetStringWidth(text + ellipsizeStr, styles)) {
                if (text.length < 2) {
                    break;
                }
                text = text.substring(0, text.length - 1);
            }
            return text.trim() + ellipsizeStr;
        }

        function jsPdfGetStringWidth(text, styles) {
            jsPdfApplyStyles(styles);
            const w = jsPdfDoc.getStringUnitWidth(text);
            return w * styles.fontSize;
        }

        function jsPdfExtend(defaults) {
            const extended = {};
            let prop;
            for (prop in defaults) {
                if (defaults.hasOwnProperty(prop)) {
                    extended[prop] = defaults[prop];
                }
            }
            for (let i = 1; i < arguments.length; i++) {
                const options = arguments[i]
                for (prop in options) {
                    if (options.hasOwnProperty(prop)) {
                        extended[prop] = options[prop];
                    }
                }
            }
            return extended;
        }
        if (typeof defaults.onTableExportEnd === 'function')
            defaults.onTableExportEnd();
        return this;
    };

    function jsPdfDefaultOptions() {
        return {
            theme: 'striped',
            styles: {},
            headerStyles: {},
            bodyStyles: {},
            alternateRowStyles: {},
            columnStyles: {},
            startY: false,
            margin: 40,
            pageBreak: 'auto',
            tableWidth: 'auto',
            createdHeaderCell: function(cell, data) {},
            createdCell: function(cell, data) {},
            drawHeaderRow: function(row, data) {},
            drawRow: function(row, data) {},
            drawHeaderCell: function(cell, data) {},
            drawCell: function(cell, data) {},
            beforePageContent: function(data) {},
            afterPageContent: function(data) {}
        }
    }
    var jsPdfTableClass = (function() {
        function jsPdfTableClass() {
            this.height = 0;
            this.width = 0;
            this.x = 0;
            this.y = 0;
            this.contentWidth = 0;
            this.rows = [];
            this.columns = [];
            this.headerRow = null;
            this.settings = {};
        }
        return jsPdfTableClass;
    }());
    var jsPdfRowClass = (function() {
        function jsPdfRowClass(raw) {
            this.raw = raw || {};
            this.index = 0;
            this.styles = {};
            this.cells = {};
            this.height = 0;
            this.y = 0;
        }
        return jsPdfRowClass;
    }());
    var jsPdfCellClass = (function() {
        function jsPdfCellClass(raw) {
            this.raw = raw;
            this.styles = {};
            this.text = '';
            this.contentWidth = 0;
            this.textPos = {};
            this.height = 0;
            this.width = 0;
            this.x = 0;
            this.y = 0;
        }
        return jsPdfCellClass;
    }());
    var jsPdfColumnClass = (function() {
        function jsPdfColumnClass(dataKey) {
            this.dataKey = dataKey;
            this.options = {};
            this.styles = {};
            this.contentWidth = 0;
            this.width = 0;
            this.x = 0;
        }
        return jsPdfColumnClass;
    }());
})(jQuery);;
jQuery.fn.table2CSV = function(options) {
    var options = jQuery.extend({
        separator: ',',
        header: [],
        headerSelector: 'th',
        columnSelector: 'td',
        delivery: 'popup',
        transform_gt_lt: true
    }, options);
    var csvData = [];
    var headerArr = [];
    var el = this;
    var numCols = options.header.length;
    var tmpRow = [];
    if (numCols > 0) {
        for (var i = 0; i < numCols; i++) {
            tmpRow[tmpRow.length] = formatData(options.header[i]);
        }
    } else {
        $(el).filter(':visible').find(options.headerSelector).each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
    }
    row2CSV(tmpRow);
    $(el).find('tr').each(function() {
        var tmpRow = [];
        $(this).filter(':visible').find(options.columnSelector).each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
        row2CSV(tmpRow);
    });
    if (options.delivery == 'popup') {
        var mydata = csvData.join('\n');
        if (options.transform_gt_lt) {
            mydata = sinri_recover_gt_and_lt(mydata);
        }
        return popup(mydata);
    } else if (options.delivery == 'download') {
        var mydata = csvData.join('\n');
        if (options.transform_gt_lt) {
            mydata = sinri_recover_gt_and_lt(mydata);
        }
        var url = 'data:text/csv;charset=utf8,' + encodeURIComponent(mydata);
        window.open(url);
        return true;
    } else {
        var mydata = csvData.join('\n');
        if (options.transform_gt_lt) {
            mydata = sinri_recover_gt_and_lt(mydata);
        }
        return mydata;
    }

    function sinri_recover_gt_and_lt(input) {
        var regexp = new RegExp(/&gt;/g);
        var input = input.replace(regexp, '>');
        var regexp = new RegExp(/&lt;/g);
        var input = input.replace(regexp, '<');
        return input;
    }

    function row2CSV(tmpRow) {
        var tmp = tmpRow.join('')
        if (tmpRow.length > 0 && tmp != '') {
            var mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;
        }
    }

    function formatData(input) {
        var regexp = new RegExp(/["]/g);
        var output = input.replace(regexp, '""');
        var regexp = new RegExp(/\<[^\<]+\>/g);
        var output = output.replace(regexp, "");
        output = output.replace(/&nbsp;/gi, ' ');
        if (output == "") return '';
        return '"' + output.trim() + '"';
    }

    function popup(data) {
        var generator = window.open('', 'csv', 'height=400,width=600');
        generator.document.write('<html><head><title>CSV</title>');
        generator.document.write('</head><body >');
        generator.document.write('<textArea cols=70 rows=15 wrap="off" >');
        generator.document.write(data);
        generator.document.write('</textArea>');
        generator.document.write('</body></html>');
        generator.document.close();
        return true;
    }
};;
jQuery(document).ready(function() {
    jQuery(".cera-navbar .navMenuWrapper  ul > li .subMenusWrapper2 .navMainWrapper .colWrapper5 .col ul li").addClass("fourthNavWrapper");
    var price = jQuery('.price').html();
    if (price == "₹0.00") {
        jQuery(".text-wrapper").remove();
        jQuery(".price").remove();
    }
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };
    jQuery.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return results[1] || 0;
        }
    }
    var searchkey = decodeURIComponent(jQuery.urlParam('desksearch'));
    jQuery('.search-products-wrapper h2 span').append('"' + searchkey + '"');
    jQuery("input[name=productsearch]").val(searchkey);
    jQuery("input[name=blogsearch]").val(searchkey);
    jQuery("input[name=innovationsearch]").val(searchkey);
    jQuery('#edit-submit-product-search-tab').trigger('click');
    jQuery('#edit-submit-blog-search-tab').trigger('click');
    jQuery('#edit-submit-innovation-search-tab').trigger('click');
    var size_id = getUrlParameter('size_id');
    if (size_id) {
        jQuery(".checkboxcontainerclass").each(function() {
            var aid = jQuery(this).attr('data-aid');
            var items = aid.split('||');
            if (items[1] == size_id) {
                jQuery(this).trigger('click');
            }
        });
    }
    setTimeout(function() {
        jQuery('.search-products-wrapper ul li a.tpro1').append(jQuery('.view-product-search-tab .view-header span'));
        jQuery('.search-products-wrapper ul li a.tblog').append(jQuery('.view-blog-search-tab .view-header>span'));
        jQuery('.search-products-wrapper ul li a.tinnovation').append(jQuery('.view-innovation-search-tab .view-header>span'));
        jQuery(".left-filter-blog ul").addClass("filter-list filter-category");
        jQuery(".left-filter-innovation ul").addClass("filter-list filter-category");
    }, 4000);

    function sortby(key) {
        if (key == 'created_DESC') {
            jQuery("select[name='sort_bef_combine'] option:eq(1)").attr('selected', 'selected');
            jQuery("select[name='sort_bef_combine'] option:eq(0)").removeAttr("selected");
            jQuery("select[name='commonSort'] option:eq(0)").attr('selected', 'selected');
            jQuery("select[name='commonSort'] option:eq(1)").removeAttr("selected");
        } else if (key == 'created_ASC') {
            jQuery("select[name='sort_bef_combine'] option:eq(0)").attr('selected', 'selected');
            jQuery("select[name='sort_bef_combine'] option:eq(1)").removeAttr("selected");
            jQuery("select[name='commonSort'] option:eq(1)").attr('selected', 'selected');
            jQuery("select[name='commonSort'] option:eq(0)").removeAttr("selected");
        }
    }
    var bkey = getUrlParameter('sort_bef_combine');
    sortby(bkey);
    jQuery("#sortval").change(function() {
        var mkey = jQuery(this).val();
        sortby(mkey);
        jQuery("select[name='sort_bef_combine']").val(mkey).trigger('change');
    });
    jQuery('<button class="isveaDesignersPrev slick-arrow"> < </button><button class="isveaDesignersNext slick-arrow"> > </button>').insertAfter(".isveaDesignersSlider");
    if (jQuery('.sanitaryware-top-banner-wrapper')[0]) {
        jQuery("div").removeClass("no-banner");
    }
    if (jQuery('.view-category-page-with-banner')[0]) {
        jQuery("div").removeClass("no-banner");
    }
    if (jQuery('.home-banner-wrapper')[0]) {
        jQuery("div").removeClass("no-banner");
    }
    if (jQuery('.wash-basin-banner-wrapper img')[0]) {
        jQuery("div").removeClass("no-banner");
    }
    if (jQuery('body.path-frontpage').length) {
        jQuery("div").removeClass("no-banner");
    }
    if (jQuery('.no-banner')[0]) {
        jQuery(".breadcrumb-wrapper-product").append('<div class="commonBanner"></div>');
        jQuery(".breadcrumb-wrapper").append('<div class="commonBanner"></div>');
    }
    jQuery(".product-desc").insertAfter(".product-images");
    jQuery(".ProductdetailImgsSlider").insertAfter(".ProductdetailSlider");
    setTimeout(function() {
        jQuery(".dropstate").find(".form-item--error-message").insertAfter(".dropstate");
        jQuery(".dropprocat").find(".form-item--error-message").insertAfter(".dropprocat");
    }, 6000);
    jQuery(".ProductdetailImgsWrapper").find("#pSBox1C").show();
    jQuery(".invoice-copy").insertAfter(".fileUploadWrapper");
    jQuery("#edit-purchase-invoice-copy--label").insertAfter(".fileUploadWrapper");
    jQuery("#views-exposed-form-blog-listing-block-3").appendTo(".left-filter-blog");
    jQuery("#views-exposed-form-blog-listing-block-3").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
    jQuery("#views-exposed-form-blog-listing-block-6").appendTo(".left-filter-blog");
    jQuery("#views-exposed-form-blog-listing-block-6").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
    jQuery("#views-exposed-form-blog-listing-block-7").appendTo(".left-filter-blog");
    jQuery("#views-exposed-form-blog-listing-block-7").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
    jQuery("#views-exposed-form-innovation-listing-block-3").appendTo(".left-filter-innovation");
    jQuery("#views-exposed-form-innovation-listing-block-3").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
    jQuery("#views-exposed-form-innovation-listing-block-5").appendTo(".left-filter-innovation");
    jQuery("#views-exposed-form-innovation-listing-block-5").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
    jQuery("#views-exposed-form-innovation-listing-block-6").appendTo(".left-filter-innovation");
    jQuery("#views-exposed-form-innovation-listing-block-6").find("label").each(function() {
        jQuery(this).addClass("checkboxcontainer");
        var k = jQuery(this).prev("input");
        var p = '<span class="checkmark"></span>';
        jQuery(k).appendTo(jQuery(this));
        jQuery(p).appendTo(jQuery(this));
        jQuery(this).wrap("<div class='checkboxWrapper'></div>");
    });
});
(function($) {
    $('#newaddress').prop('checked', true);
    $(document).on('click', '#address', function(e) {
        $('#edit-address-new-on--2').prop('checked', false);
        console.log('address click');
    });
    $(document).on('click', '#newaddress', function(e) {
        $('#edit-address-11--2').prop('checked', false);
        console.log('new address click');
    });
    $('body').on("focusout", "#email", function(event) {
        $("#address_error").remove();
        $("#email").closest(".enquire_error").remove();
        var email = $('#email').val();
        if (email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                $(".address_error").html('');
                $("#email").after('<div class="address_error">Please enter valid email.</div>');
            } else {
                $(".address_error").html('');
                $(".address_error").hide();
            }
        }
    });
    $('body').on("keydown", "#first_name", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#last_name", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#phone", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    $('body').on("focusout", "#phone", function(event) {
        $(".address_error").remove();
        $('.enquire_error').remove();
        var phone = $('#phone').val();
        if (phone.length == '10') {
            var phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                $(".address_error").html('');
                $(".address_error").remove();
                $("#phone").after('<div class="address_error">Please enter valid mobile number.</div>');
            } else {
                $(".address_error").html('');
                $(".address_error").remove();
            }
        } else {
            if (phone.length == '') {
                $(".address_error").html('');
                $(".address_error").remove('');
                $("#phone").after('<div class="address_error">This field is required.</div>');
            } else {
                $(".address_error").html('');
                $(".address_error").remove('');
                $("#phone").after('<div class="address_error">Please enter atleast 10 digits.</div>');
            }
        }
    });
    $('body').on("keydown", "#pincode", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    $('body').on("focusout", "#pincode", function(event) {
        var zip = $('#pincode').val();
        $("#pincode").closest(".enquire_error").remove();
        if (zip.length == '6') {
            var zipRegex = /^[1-9]{1}[0-9]{5}$/;
            if (!zipRegex.test(zip)) {
                $(".address_error").html('');
                $(".address_error").after('<div class="address_error">Please enter valid pincode.</div>');
            } else {
                $(".address_error").html('');
                $(".address_error").hide();
            }
        } else {
            $(".address_error").hide();
            $(".address_error").html('');
            $("#pincode").after('<div class="address_error">Please enter atleast 6 digits.</div>');
        }
    });
    $('body').on("keydown", "#city", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#state", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#bill_first_name", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#bill_last_name", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#bill_phone", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    $('body').on("focusout", "#bill_phone", function(event) {
        $("#billaddress-error").remove();
        $("#bill_phone").closest(".enquire_error").remove();
        var billphone = $('#bill_phone').val();
        if (billphone.length == '10') {
            var billphoneRegex = /^[6-9]d{9}$/;
            if (!billphoneRegex.test(billphone)) {
                $(".billaddress-error").html('');
                $(".billaddress-error").remove();
                $("#billphone").after('<div class="billaddress-error">Please enter valid mobile number.</div>');
            } else {
                $(".billaddress-error").html('');
                $(".billaddress-error").remove();
            }
        } else {
            if (billphone.length == '') {
                $(".address_error").html('');
                $(".address_error").remove('');
                $("#billphone").after('<div class="address_error">Mobile field is required.</div>');
            } else {
                $(".billaddress-error").html('');
                $(".billaddress-error").remove();
                $("#billphone").after('<div class="billaddress-error">Please enter atleast 10 digits.</div>');
            }
        }
    });
    $('body').on("keydown", "#bill_pincode", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    $('body').on("focusout", "#bill_pincode", function(event) {
        var zip = $('#bill_pincode').val();
        $("#bill_pincode").closest(".enquire_error").remove();
        if (zip.length == '6') {
            var zipRegex = /^[1-9]{1}[0-9]{5}$/;
            if (!zipRegex.test(zip)) {
                $(".address_error").html('');
                $(".address_error").after('<div class="address_error">Please enter valid bill_pincode.</div>');
            } else {
                $(".address_error").html('');
                $(".address_error").hide();
            }
        } else {
            $(".address_error").hide();
            $(".address_error").html('');
            $("#bill_pincode").after('<div class="address_error">Please enter atleast 6 digits.</div>');
        }
    });
    $('body').on("keydown", "#bill_city", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    $('body').on("keydown", "#bill_state", function(e) {
        var key = e.keyCode;
        if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    });
    if (drupalSettings.path == null) {
        console.log('undefined drupal base');
        var getUrl = window.location;
        var baseUrl = window.location.origin + "/";
    } else {
        var baseUrl = drupalSettings.path.baseUrl;
    }
    $("#addtocart").on('click', function() {
        var vid = $(this).attr('data-vid');
        var pid = $(this).attr('data-pid');
        var qty = 1;
        if (vid.length) {
            $.ajax({
                url: baseUrl + "addtocart",
                type: 'post',
                dataType: "json",
                data: {
                    pid: pid,
                    vid: vid,
                    qty: qty
                },
                success: function(response) {
                    $('div.item-added-class').remove();
                    if (response.price != '') {
                        $('#addtocart_wrapper').append('<div class="item-added-class" style="color:green">Item is added to cart.</div>');
                        window.location.reload();
                    } else {}
                },
            });
        } else {}
    });
    $("#btaddtocart").on('click', function() {
        var pidarr = vidarr = [];
        $("input:checkbox[name=productCheck]:checked").each(function() {});
        $("input:checkbox[name=productCheck]:checked").each(function() {
            vidarr.push($(this).attr('data-vid'))
        });
        var vid = $("#product_details").attr('data-vid');
        var pid = $("#product_details").attr('data-pid');
        var qty = 1;
        $.ajax({
            url: baseUrl + "btaddtocart",
            type: 'post',
            dataType: "json",
            data: {
                pid: pid,
                vid: vid,
                vidarr: vidarr,
                qty: qty
            },
            success: function(response) {
                $('div.item-added-class').remove();
                if (response.price != '') {
                    $('#btaddtocart_wrapper').append('<div class="item-added-class" style="color:green">Selected items added to cart.</div>');
                    window.location.reload();
                } else {}
            },
        });
    });
    $("#bgaddtocart").on('click', function() {
        var pidarr = vidarr = [];
        $("input[name=bgvids]").each(function() {
            vidarr.push($(this).attr('data-vid'))
        });
        $.ajax({
            url: baseUrl + "bgaddtocart",
            type: 'post',
            dataType: "json",
            data: {
                vidarr: vidarr
            },
            success: function(response) {
                if (response.msg == 'success') {
                    $('#bgaddtocart_wrapper').append('<div class="item-added-class" style="color:green">Selected items added to cart.</div>');
                    window.location.reload();
                } else {}
            },
        });
    });
    $(".increament_id_minus").on('click', function() {
        var vid = $(this).attr('data-vid');
        var qty = 0;
        var proqty = $('#quantity' + vid).val();
        if (proqty == '1') {
            var order_id = $('#order_id').attr('data-order');
            var qty = 1;
            if (vid.length) {
                $.ajax({
                    url: baseUrl + "remove-item-cart",
                    type: 'post',
                    dataType: "json",
                    data: {
                        vid: vid,
                        order_id: order_id
                    },
                    success: function(response) {
                        location.reload();
                    },
                });
            } else {}
        } else {
            if (vid.length) {
                $.ajax({
                    url: baseUrl + "update-cart-item",
                    type: 'post',
                    dataType: "json",
                    data: {
                        vid: vid,
                        qty: qty
                    },
                    success: function(response) {
                        location.reload();
                    },
                });
            } else {}
        }
    });
    $(".increament_id_plus").click(function() {
        var vid = $(this).attr('data-vid');
        var qty = 1;
        if (vid.length) {
            $.ajax({
                url: baseUrl + "update-cart-item",
                type: 'post',
                dataType: "json",
                data: {
                    vid: vid,
                    qty: qty
                },
                success: function(response) {
                    location.reload();
                },
            });
        } else {}
    });
    $(".product_remove").on('click', function() {
        var vid = $(this).attr('data-vid');
        var order_id = $('#order_id').attr('data-order');
        var qty = 1;
        console.log(qty);
        if (vid.length) {
            $.ajax({
                url: baseUrl + "remove-item-cart",
                type: 'post',
                dataType: "json",
                data: {
                    vid: vid,
                    order_id: order_id
                },
                success: function(response) {
                    location.reload();
                },
            });
        } else {}
    });
    $(".remove").on('click', function() {
        $.ajax({
            url: baseUrl + "empty-cart",
            type: 'post',
            dataType: "json",
            success: function(response) {
                location.reload();
            },
        });
    });
    $(".dwj_file").on('click', function() {
        var fileURL = $(this).attr('data-path');
        var fileName = fileURL.split('/').pop();
        if (!window.ActiveXObject) {
            var save = document.createElement('a');
            save.href = fileURL;
            save.target = '_blank';
            save.download = fileName || 'unknown';
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        } else if (!!window.ActiveXObject && document.execCommand) {
            var _window = window.open(fileURL, '_blank');
            _window.document.close();
            _window.document.execCommand('SaveAs', true, fileName || fileURL)
            _window.close();
        }
    });
    $(document).ready(function() {
        var cururl = window.location.pathname;
        var checkurl = baseUrl + "senator/sanitaryware";
        if (cururl == checkurl) {
            $('.cat-EWCType').hide();
            $('.cat-Trap').hide();
            $('.cat-WallDistancemm').hide();
            $('.cat-Shapes').hide();
            $('.cat-EWCmounttype').hide();
            $('.cat-Rimtype').hide();
            $('.cat-Washbasintype').hide();
            $('.cat-Shapeforwashbasin').hide();
            $('.cat-Washbasinmounttype').hide();
            $('.cat-WashbasinRimtype').hide();
        }
    });
    $(".cat-1431").change(function() {
        if ($('.cat-1431').is(":checked")) {
            $('.cat-1533').prop('checked', false);
            $('.cat-EWCType').show();
            $('.cat-Trap').show();
            $('.cat-WallDistancemm').show();
            $('.cat-Shapes').show();
            $('.cat-EWCmounttype').show();
            $('.cat-Rimtype').show();
            $('.cat-Washbasintype').hide();
            $('.cat-Shapeforwashbasin').hide();
            $('.cat-Washbasinmounttype').hide();
            $('.cat-WashbasinRimtype').hide();
        } else {
            $('.cat-EWCType').hide();
            $('.cat-Trap').hide();
            $('.cat-WallDistancemm').hide();
            $('.cat-Shapes').hide();
            $('.cat-EWCmounttype').hide();
            $('.cat-Rimtype').hide();
            $('.cat-Washbasintype').hide();
            $('.cat-Shapeforwashbasin').hide();
            $('.cat-Washbasinmounttype').hide();
            $('.cat-WashbasinRimtype').hide();
        }
    });
    $(".cat-1533").change(function() {
        if ($('.cat-1533').is(":checked")) {
            $('.cat-1431').prop('checked', false);
            $('.cat-EWCType').hide();
            $('.cat-Trap').hide();
            $('.cat-WallDistancemm').hide();
            $('.cat-Shapes').hide();
            $('.cat-EWCmounttype').hide();
            $('.cat-Rimtype').hide();
            $('.cat-Washbasintype').show();
            $('.cat-Shapeforwashbasin').show();
            $('.cat-Washbasinmounttype').show();
            $('.cat-WashbasinRimtype').show();
        } else {
            $('.cat-EWCType').hide();
            $('.cat-Trap').hide();
            $('.cat-WallDistancemm').hide();
            $('.cat-Shapes').hide();
            $('.cat-EWCmounttype').hide();
            $('.cat-Rimtype').hide();
            $('.cat-Washbasintype').hide();
            $('.cat-Shapeforwashbasin').hide();
            $('.cat-Washbasinmounttype').hide();
            $('.cat-WashbasinRimtype').hide();
        }
    });
    $("#edit-field-category").on('click', function() {
        if ($("#edit-field-category option:selected").text() == 'Other') {
            $('.othercat').show();
        } else {
            $('.othercat').hide();
        }
    });
    $(".color-select").on('click', function() {
        var color_id = $(this).attr('data-value');
        var pid = $(this).attr('data-pid');
        var pin = $("input[name=pincode]").val();
        var getterm_id = $("input[name=getterm_id]").val();
        if (pin.length) {
            $.ajax({
                url: baseUrl + "change-product-details",
                type: 'post',
                dataType: "json",
                data: {
                    color_id: color_id,
                    pid: pid,
                    pin: pin,
                    getterm_id: getterm_id
                },
                success: function(response) {
                    if (response.price != '') {
                        $("#addtocart_wrapper").removeClass('hidebtn');
                        $("#addtocart").attr('data-vid', response.variation_id);
                        $("#addtocart").attr('data-pid', pid);
                        $(".error").remove();
                        $('.price').text('₹' + response.price);
                        $('.price').show();
                        $(".color-select.selected").attr('data-vid', response.variation_id);
                        for (var lp = 1; lp <= 16; lp++) {
                            if (response.btpr[lp] == null) {
                                if (lp == 1) {
                                    $('.boughtTogether-wrapper').hide();
                                } else {
                                    $('.btitemloop' + lp).hide();
                                }
                            } else {
                                $('.btpr' + lp).text('₹' + response.btpr[lp]);
                                $('.btvid' + lp).attr('data-vid', response.btvid[lp]);
                                $('.btpr' + lp).show();
                            }
                        }
                        if (response.btprice != null) {
                            $('.bttotalprice').text('₹' + response.btprice);
                        }
                        $(this).attr('data-vid', response.variation_id);
                        $('#product_details').attr('data-vid', response.variation_id);
                        $('.product-total-wrapper ').show();
                        if (response.yhtml != '') {
                            $('.washbasinProductSlider').remove();
                            $('.ymalslider').html(response.yhtml);
                            $('.washbasinProductSlider').slick({
                                arrows: true,
                                centerPadding: "0",
                                dots: false,
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                infinite: true,
                                prevArrow: $('.trendPrev'),
                                nextArrow: $('.trendNext'),
                                responsive: [{
                                    breakpoint: 768,
                                    settings: {
                                        arrows: false,
                                        slidesToShow: 1,
                                    }
                                }]
                            });
                        } else {
                            $('.basin-trend-products-wrapper').hide();
                        }
                    } else {
                        $(".error").remove();
                        $(".dropdown-wrapper").before('<span style="color:red" class="error">Product is not available on entered pincode</span>');
                        $("#addtocart_wrapper").addClass('hidebtn');
                    }
                },
            });
        } else {
            $("input[name=pincode]").focus();
        }
    });
    $("input[name=productCheck]").change(function() {
        var pidarr = vidarr = [];
        var prochecked = $('input[name=productCheck]:checked').length;
        if (prochecked == 0) {
            $('.product-total-wrapper ').hide();
        } else {
            $("input:checkbox[name=productCheck]:checked").each(function() {
                vidarr.push($(this).attr('data-vid'))
            });
            $.ajax({
                url: baseUrl + "change-bought-together",
                type: 'post',
                dataType: "json",
                data: {
                    vidarr: vidarr
                },
                success: function(response) {
                    if (response.btprice != null) {
                        $('.bttotalprice').text('₹' + response.btprice);
                        $('.product-total-wrapper ').show();
                    }
                }
            });
        }
    });
    $(".cFpincodeDesk").on('keyup change', function() {
        var pin = $(this).val();
        if (!$.isNumeric(pin)) {
            $(".error").remove();
            $(".cFpincodeDesk").val('');
            $(".filterpincode").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
        }
    });
    $(".cFpincodeMobile").on('keyup change', function() {
        var pin = $(this).val();
        if (!$.isNumeric(pin)) {
            $(".error").remove();
            $(".cFpincodeMobile").val('');
            $(".cFpincodeMobile").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
        }
    });
    $("input[name=pincode]").on('keyup change', function() {
        var color_id = $(".color-select.selected").attr('data-value');
        var pid = $(".dropdown-wrapper").attr('data-pid');
        var pin = $(this).val();
        var getterm_id = $("input[name=getterm_id]").val();
        if ($.isNumeric(pin)) {
            if ($(".color-select").length == 0) {
                if (pin.length == 6) {
                    $.ajax({
                        url: baseUrl + "change-product-details-pin",
                        type: 'post',
                        dataType: "json",
                        data: {
                            pid: pid,
                            pin: pin,
                            getterm_id: getterm_id
                        },
                        success: function(response) {
                            if (response.price != '') {
                                $("#addtocart_wrapper").removeClass('hidebtn');
                                $("#addtocart").attr('data-vid', response.variation_id);
                                $("#addtocart").attr('data-pid', pid);
                                $(".error").remove();
                                $('.price').text('₹' + response.price);
                                $('.price').show();
                                for (var lp = 1; lp <= 16; lp++) {
                                    if (response.btpr[lp] == null) {
                                        if (lp == 1) {
                                            $('.boughtTogether-wrapper').hide();
                                        } else {
                                            $('.btitemloop' + lp).hide();
                                        }
                                    } else {
                                        $('.btpr' + lp).text('₹' + response.btpr[lp]);
                                        $('.btvid' + lp).attr('data-vid', response.btvid[lp]);
                                        $('.btpr' + lp).show();
                                    }
                                }
                                if (response.btprice != null) {
                                    $('.bttotalprice').text('₹' + response.btprice);
                                }
                                $(this).attr('data-vid', response.variation_id);
                                $('#product_details').attr('data-vid', response.variation_id);
                                $('.product-total-wrapper ').show();
                                if (response.yhtml != '') {
                                    $('.washbasinProductSlider').remove();
                                    $('.ymalslider').html(response.yhtml);
                                    $('.washbasinProductSlider').slick({
                                        arrows: true,
                                        centerPadding: "0",
                                        dots: false,
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        prevArrow: $('.trendPrev'),
                                        nextArrow: $('.trendNext'),
                                        responsive: [{
                                            breakpoint: 768,
                                            settings: {
                                                arrows: false,
                                                slidesToShow: 1,
                                            }
                                        }]
                                    });
                                } else {
                                    $('.basin-trend-products-wrapper').hide();
                                }
                            } else {
                                $(".error").remove();
                                $("input[name=pincode]").after('<span style="color:red" class="error">Product is not available on entered pincode</span>');
                                $("#addtocart_wrapper").addClass('hidebtn');
                            }
                        },
                    });
                } else {
                    $(".error").remove();
                    $("input[name=pincode]").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
                }
            } else {
                if (pin.length == 6) {
                    if (color_id) {
                        $.ajax({
                            url: baseUrl + "change-product-details-pin",
                            type: 'post',
                            dataType: "json",
                            data: {
                                color_id: color_id,
                                pid: pid,
                                pin: pin,
                                getterm_id: getterm_id
                            },
                            success: function(response) {
                                if (response.price != '') {
                                    $("#addtocart_wrapper").removeClass('hidebtn');
                                    $("#addtocart").attr('data-vid', response.variation_id);
                                    $("#addtocart").attr('data-pid', pid);
                                    $(".error").remove();
                                    $('.price').text('₹' + response.price);
                                    $('.price').show();
                                    for (var lp = 1; lp <= 16; lp++) {
                                        if (response.btpr[lp] == null) {
                                            if (lp == 1) {
                                                $('.boughtTogether-wrapper').hide();
                                            } else {
                                                $('.btitemloop' + lp).hide();
                                            }
                                        } else {
                                            $('.btpr' + lp).text('₹' + response.btpr[lp]);
                                            $('.btvid' + lp).attr('data-vid', response.btvid[lp]);
                                            $('.btpr' + lp).show();
                                        }
                                    }
                                    if (response.btprice != null) {
                                        $('.bttotalprice').text('₹' + response.btprice);
                                    }
                                    $(this).attr('data-vid', response.variation_id);
                                    $('#product_details').attr('data-vid', response.variation_id);
                                    $('.product-total-wrapper ').show();
                                    if (response.yhtml != '') {
                                        $('.washbasinProductSlider').remove();
                                        $('.ymalslider').html(response.yhtml);
                                        $('.washbasinProductSlider').slick({
                                            arrows: true,
                                            centerPadding: "0",
                                            dots: false,
                                            slidesToShow: 4,
                                            slidesToScroll: 1,
                                            infinite: true,
                                            prevArrow: $('.trendPrev'),
                                            nextArrow: $('.trendNext'),
                                            responsive: [{
                                                breakpoint: 768,
                                                settings: {
                                                    arrows: false,
                                                    slidesToShow: 1,
                                                }
                                            }]
                                        });
                                    } else {
                                        $('.basin-trend-products-wrapper').hide();
                                    }
                                } else {
                                    $(".error").remove();
                                    $("input[name=pincode]").after('<span style="color:red" class="error">Product is not available on entered pincode</span>');
                                    $("#addtocart_wrapper").addClass('hidebtn');
                                }
                            },
                        });
                    } else {
                        $(".error").remove();
                        $(".dropdown-wrapper").before('<span style="color:red" class="error">Please select colour</span>');
                        $(".init").focus();
                    }
                } else {
                    $(".error").remove();
                    $("input[name=pincode]").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
                }
            }
        } else {
            $(".error").remove();
            $("input[name=pincode]").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
        }
    });
    $(document).ready(function() {
        var color_id = $(".color-select.selected").attr('data-value');
        var pid = $(".dropdown-wrapper").attr('data-pid');
        var pin = $("input[name=pincode]").val();
        var getterm_id = $("input[name=getterm_id]").val();
        if ($.isNumeric(pin)) {
            if ($(".color-select").length == 0) {
                if (pin.length == 6) {
                    $.ajax({
                        url: baseUrl + "change-product-details-pin",
                        type: 'post',
                        dataType: "json",
                        data: {
                            pid: pid,
                            pin: pin,
                            getterm_id: getterm_id
                        },
                        success: function(response) {
                            if (response.price != '') {
                                $("#addtocart_wrapper").removeClass('hidebtn');
                                $("#addtocart").attr('data-vid', response.variation_id);
                                $("#addtocart").attr('data-pid', pid);
                                $(".error").remove();
                                $('.price').text('₹' + response.price);
                                $('.price').show();
                                for (var lp = 1; lp <= 16; lp++) {
                                    if (response.btpr[lp] == null) {
                                        if (lp == 1) {
                                            $('.boughtTogether-wrapper').hide();
                                        } else {
                                            $('.btitemloop' + lp).hide();
                                        }
                                    } else {
                                        $('.btpr' + lp).text('₹' + response.btpr[lp]);
                                        $('.btvid' + lp).attr('data-vid', response.btvid[lp]);
                                        $('.btpr' + lp).show();
                                    }
                                }
                                if (response.btprice != null) {
                                    $('.bttotalprice').text('₹' + response.btprice);
                                }
                                $(this).attr('data-vid', response.variation_id);
                                $('#product_details').attr('data-vid', response.variation_id);
                                $('.product-total-wrapper ').show();
                                if (response.yhtml != '') {
                                    $('.washbasinProductSlider').remove();
                                    $('.ymalslider').html(response.yhtml);
                                    $('.washbasinProductSlider').slick({
                                        arrows: true,
                                        centerPadding: "0",
                                        dots: false,
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        prevArrow: $('.trendPrev'),
                                        nextArrow: $('.trendNext'),
                                        responsive: [{
                                            breakpoint: 768,
                                            settings: {
                                                arrows: false,
                                                slidesToShow: 1,
                                            }
                                        }]
                                    });
                                } else {
                                    $('.basin-trend-products-wrapper').hide();
                                }
                            } else {
                                $(".error").remove();
                                $("input[name=pincode]").after('<span style="color:red" class="error">Product is not available on entered pincode</span>');
                                $("#addtocart_wrapper").addClass('hidebtn');
                            }
                        },
                    });
                } else {
                    $(".error").remove();
                    $("input[name=pincode]").after('<span style="color:red" class="error"></span>');
                }
            } else {
                if (pin.length == 6) {
                    if (color_id) {
                        $.ajax({
                            url: baseUrl + "change-product-details-pin",
                            type: 'post',
                            dataType: "json",
                            data: {
                                color_id: color_id,
                                pid: pid,
                                pin: pin,
                                getterm_id: getterm_id
                            },
                            success: function(response) {
                                if (response.price != '') {
                                    $("#addtocart_wrapper").removeClass('hidebtn');
                                    $("#addtocart").attr('data-vid', response.variation_id);
                                    $("#addtocart").attr('data-pid', pid);
                                    $(".error").remove();
                                    $('.price').text('₹' + response.price);
                                    $('.price').show();
                                    for (var lp = 1; lp <= 16; lp++) {
                                        if (response.btpr[lp] == null) {
                                            if (lp == 1) {
                                                $('.boughtTogether-wrapper').hide();
                                            } else {
                                                $('.btitemloop' + lp).hide();
                                            }
                                        } else {
                                            $('.btpr' + lp).text('₹' + response.btpr[lp]);
                                            $('.btvid' + lp).attr('data-vid', response.btvid[lp]);
                                            $('.btpr' + lp).show();
                                        }
                                    }
                                    if (response.btprice != null) {
                                        $('.bttotalprice').text('₹' + response.btprice);
                                    }
                                    $(this).attr('data-vid', response.variation_id);
                                    $('#product_details').attr('data-vid', response.variation_id);
                                    $('.product-total-wrapper ').show();
                                    if (response.yhtml != '') {
                                        $('.washbasinProductSlider').remove();
                                        $('.ymalslider').html(response.yhtml);
                                        $('.washbasinProductSlider').slick({
                                            arrows: true,
                                            centerPadding: "0",
                                            dots: false,
                                            slidesToShow: 4,
                                            slidesToScroll: 1,
                                            infinite: true,
                                            prevArrow: $('.trendPrev'),
                                            nextArrow: $('.trendNext'),
                                            responsive: [{
                                                breakpoint: 768,
                                                settings: {
                                                    arrows: false,
                                                    slidesToShow: 1,
                                                }
                                            }]
                                        });
                                    } else {
                                        $('.basin-trend-products-wrapper').hide();
                                    }
                                } else {
                                    $(".error").remove();
                                    $("input[name=pincode]").after('<span style="color:red" class="error">Product is not available on entered pincode</span>');
                                    $("#addtocart_wrapper").addClass('hidebtn');
                                }
                            },
                        });
                    } else {
                        $(".error").remove();
                        $(".dropdown-wrapper").before('<span style="color:red" class="error">Please select colour</span>');
                        $(".init").focus();
                    }
                } else {
                    $(".error").remove();
                    $("input[name=pincode]").after('<span style="color:red" class="error"></span>');
                }
            }
        } else {
            $("input[name=pincode]").after('<span style="color:red" class="error"></span>');
        }
    });
    $("*").dblclick(function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    if ($('#slider-range-filter1').length > 0) {
        var minvalue = parseInt($('#amountmin1').val());
        var maxvalue = parseInt($('#amountmax1').val());
        $("#slider-range-filter1").slider({
            range: true,
            min: minvalue,
            max: maxvalue,
            values: [minvalue, maxvalue],
            stop: function(event, ui) {
                $("#amountmin1").val(ui.values[0]);
                $("#amountmax1").val(ui.values[1]);
                var sort_method = $('#commonSort').val();
                var term_id = $('#term-id').attr('data-term');
                var filter = [];
                var filter_cat = [];
                var filter_color = [];
                var unique = '';
                var myJsonString = '';
                var unique_cat = '';
                var myJsonString_cat = '';
                var unique_color = '';
                var myJsonString_color = '';
                var wminsize = '';
                var wmaxsize = '';
                var lminsize = '';
                var lmaxsize = '';
                var hminsize = '';
                var hmaxsize = '';
                var minprice = ui.values[0];
                var maxprice = ui.values[1];
                if ($('#wsizemin1').length > 0) {
                    var wminsize = parseInt($('#wsizemin1').val());
                    var wmaxsize = parseInt($('#wsizemax1').val());
                }
                if ($('#hsizemin1').length > 0) {
                    var hminsize = parseInt($('#hsizemin1').val());
                    var hmaxsize = parseInt($('#hsizemax1').val());
                }
                if ($('#lsizemin1').length > 0) {
                    var lminsize = parseInt($('#lsizemin1').val());
                    var lmaxsize = parseInt($('#lsizemax1').val());
                }
                pincode = $('.cFpincodeDesk').val();
                if (pincode) {
                    if (pincode.length != 6) {
                        pincode = $('.cFpincodeMobile').val();
                    }
                }
                $(".checkboxcontainerclass").each(function() {
                    if ($(this).is(':checked')) {
                        var aid = $(this).attr('data-aid');
                        var cid = $(this).attr('data-cid');
                        var colorid = $(this).attr('data-colorid');
                        if (cid) {
                            filter_cat.push(cid);
                        } else if (colorid) {
                            filter_color.push(colorid);
                        } else {
                            filter.push(aid);
                        }
                    }
                });
                var unique = filter.filter(onlyUnique);
                var myJsonString = JSON.stringify(unique);
                var myJsonString = JSON.parse(myJsonString);
                var unique_cat = filter_cat.filter(onlyUnique);
                var myJsonString_cat = JSON.stringify(unique_cat);
                var myJsonString_cat = JSON.parse(myJsonString_cat);
                var unique_color = filter_color.filter(onlyUnique);
                var myJsonString_color = JSON.stringify(unique_color);
                var myJsonString_color = JSON.parse(myJsonString_color);
                $.ajax({
                    url: baseUrl + "filterproductlist",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pincode: pincode,
                        myJsonString,
                        myJsonString_cat,
                        myJsonString_color,
                        term_id: term_id,
                        minprice: minprice,
                        maxprice: maxprice,
                        wminsize: wminsize,
                        wmaxsize: wmaxsize,
                        lminsize: lminsize,
                        lmaxsize: lmaxsize,
                        hminsize: hminsize,
                        hmaxsize: hmaxsize,
                        sort_method: sort_method
                    },
                    beforeSend: function() {
                        $("#overlay").fadeIn(300);
                    },
                    success: function(response) {
                        if (response.html != '') {
                            $('#explore_more').show();
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#appendfilterproduct').html(response.html);
                        } else {
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#appendfilterproduct').html(response.html);
                            $('#appendfilterproduct').html('<div class="ferror">Product not available for selected price<div>');
                            $('#explore_more').hide();
                        }
                        if (response.explore == 'no') {
                            $('#explore_more').hide();
                        }
                    },
                }).done(function() {
                    setTimeout(function() {
                        $("#overlay").fadeOut(300);
                    }, 500);
                });
            }
        });
        $("#amountmin1").val($("#slider-range-filter1").slider("values", 0));
        $("#amountmax1").val($("#slider-range-filter1").slider("values", 1));
        var min_val = 0;
        var max_val = maxvalue;

        function minMaxControl(type) {
            if (type == 'min') {
                min_val = $('#amountmin1').val();
            } else if (type == 'max') {
                max_val = $('#amountmax1').val();
            }
            $("#slider-range-filter1").slider('values', [min_val, max_val]);
            var sort_method = $('#commonSort').val();
            var term_id = $('#term-id').attr('data-term');
            var filter = [];
            var filter_cat = [];
            var filter_color = [];
            var unique = '';
            var myJsonString = '';
            var unique_cat = '';
            var myJsonString_cat = '';
            var unique_color = '';
            var myJsonString_color = '';
            var wminsize = '';
            var wmaxsize = '';
            var lminsize = '';
            var lmaxsize = '';
            var hminsize = '';
            var hmaxsize = '';
            var minprice = min_val;
            var maxprice = max_val;
            if ($('#wsizemin1').length > 0) {
                var wminsize = parseInt($('#wsizemin1').val());
                var wmaxsize = parseInt($('#wsizemax1').val());
            }
            if ($('#hsizemin1').length > 0) {
                var hminsize = parseInt($('#hsizemin1').val());
                var hmaxsize = parseInt($('#hsizemax1').val());
            }
            if ($('#lsizemin1').length > 0) {
                var lminsize = parseInt($('#lsizemin1').val());
                var lmaxsize = parseInt($('#lsizemax1').val());
            }
            pincode = $('.cFpincodeDesk').val();
            if (pincode) {
                if (pincode.length != 6) {
                    pincode = $('.cFpincodeMobile').val();
                }
            }
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minprice,
                    maxprice: maxprice,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hminsize: hminsize,
                    hmaxsize: hmaxsize,
                    sort_method: sort_method
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                        $('#appendfilterproduct').html('<div class="ferror">Product not available for selected price<div>');
                        $('#explore_more').hide();
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        }
        $("#amountmin1").on("keyup", function(e) {});
        $("#amountmax1").on("keyup", function(e) {
            var minvalue = parseInt($('#amountmin1').data('value'));
        });
    }
    if ($('#slider-range-filter2').length > 0) {
        var wminvalue = parseInt($('#wsizemin1').val());
        var wmaxvalue = parseInt($('#wsizemax1').val());
        $("#slider-range-filter2").slider({
            range: true,
            min: wminvalue,
            max: wmaxvalue,
            values: [wminvalue, wmaxvalue],
            stop: function(event, ui) {
                $("#wsizemin1").val(ui.values[0]);
                $("#wsizemax1").val(ui.values[1]);
                var sort_method = $('#commonSort').val();
                var term_id = $('#term-id').attr('data-term');
                var filter = [];
                var filter_cat = [];
                var filter_color = [];
                var unique = '';
                var myJsonString = '';
                var unique_cat = '';
                var myJsonString_cat = '';
                var unique_color = '';
                var myJsonString_color = '';
                var wminsize = '';
                var wmaxsize = '';
                var lminsize = '';
                var lmaxsize = '';
                var hminsize = '';
                var hmaxsize = '';
                var wminsize = ui.values[0];
                var wmaxsize = ui.values[1];
                var minprice = parseInt($('#amountmin1').val());
                var maxprice = parseInt($('#amountmax1').val());
                if ($('#lsizemin1').length > 0) {
                    var lminsize = parseInt($('#lsizemin1').val());
                    var lmaxsize = parseInt($('#lsizemax1').val());
                }
                if ($('#hsizemin1').length > 0) {
                    var hminsize = parseInt($('#hsizemin1').val());
                    var hmaxsize = parseInt($('#hsizemax1').val());
                }
                pincode = $('.cFpincodeDesk').val();
                if (pincode) {
                    if (pincode.length != 6) {
                        pincode = $('.cFpincodeMobile').val();
                    }
                }
                $(".checkboxcontainerclass").each(function() {
                    if ($(this).is(':checked')) {
                        var aid = $(this).attr('data-aid');
                        var cid = $(this).attr('data-cid');
                        var colorid = $(this).attr('data-colorid');
                        if (cid) {
                            filter_cat.push(cid);
                        } else if (colorid) {
                            filter_color.push(colorid);
                        } else {
                            filter.push(aid);
                        }
                    }
                });
                var unique = filter.filter(onlyUnique);
                var myJsonString = JSON.stringify(unique);
                var myJsonString = JSON.parse(myJsonString);
                var unique_cat = filter_cat.filter(onlyUnique);
                var myJsonString_cat = JSON.stringify(unique_cat);
                var myJsonString_cat = JSON.parse(myJsonString_cat);
                var unique_color = filter_color.filter(onlyUnique);
                var myJsonString_color = JSON.stringify(unique_color);
                var myJsonString_color = JSON.parse(myJsonString_color);
                $.ajax({
                    url: baseUrl + "filterproductlist",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pincode: pincode,
                        myJsonString,
                        myJsonString_cat,
                        myJsonString_color,
                        term_id: term_id,
                        minprice: minprice,
                        maxprice: maxprice,
                        wminsize: wminsize,
                        wmaxsize: wmaxsize,
                        lminsize: lminsize,
                        lmaxsize: lmaxsize,
                        hminsize: hminsize,
                        hmaxsize: hmaxsize,
                        sort_method: sort_method
                    },
                    beforeSend: function() {
                        $("#overlay").fadeIn(300);
                    },
                    success: function(response) {
                        if (response.html != '') {
                            $('#explore_more').show();
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#appendfilterproduct').html(response.html);
                        } else {
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#explore_more').hide();
                        }
                        if (response.explore == 'no') {
                            $('#explore_more').hide();
                        }
                    },
                }).done(function() {
                    setTimeout(function() {
                        $("#overlay").fadeOut(300);
                    }, 500);
                });
            }
        });
        $("#wsizemin1").val($("#slider-range-filter2").slider("values", 0));
        $("#wsizemax1").val($("#slider-range-filter2").slider("values", 1));
        var wmin_val = 0;
        var wmax_val = wmaxvalue;

        function wminMaxControl(type) {
            if (type == 'min') {
                wmin_val = $('#wsizemin1').val();
            } else if (type == 'max') {
                wmax_val = $('#wsizemax1').val();
            }
            $("#slider-range-filter2").slider('values', [wmin_val, wmax_val]);
            var sort_method = $('#commonSort').val();
            var term_id = $('#term-id').attr('data-term');
            var filter = [];
            var filter_cat = [];
            var filter_color = [];
            var unique = '';
            var myJsonString = '';
            var unique_cat = '';
            var myJsonString_cat = '';
            var unique_color = '';
            var myJsonString_color = '';
            var wminsize = '';
            var wmaxsize = '';
            var lminsize = '';
            var lmaxsize = '';
            var hminsize = '';
            var hmaxsize = '';
            var wminsize = wmin_val;
            var wmaxsize = wmax_val;
            var minprice = parseInt($('#amountmin1').val());
            var maxprice = parseInt($('#amountmax1').val());
            if ($('#lsizemin1').length > 0) {
                var lminsize = parseInt($('#lsizemin1').val());
                var lmaxsize = parseInt($('#lsizemax1').val());
            }
            if ($('#hsizemin1').length > 0) {
                var hminsize = parseInt($('#hsizemin1').val());
                var hmaxsize = parseInt($('#hsizemax1').val());
            }
            pincode = $('.cFpincodeDesk').val();
            if (pincode) {
                if (pincode.length != 6) {
                    pincode = $('.cFpincodeMobile').val();
                }
            }
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minprice,
                    maxprice: maxprice,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hmaxsize: hmaxsize,
                    hminsize: hminsize,
                    sort_method: sort_method
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#explore_more').hide();
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        }
        $("#wsizemin1").on("keyup", function(e) {});
        $("#wsizemax1").on("keyup", function(e) {});
    }
    if ($('#slider-range-filter3').length > 0) {
        var lminvalue = parseInt($('#lsizemin1').val());
        var lmaxvalue = parseInt($('#lsizemax1').val());
        $("#slider-range-filter3").slider({
            range: true,
            min: lminvalue,
            max: lmaxvalue,
            values: [lminvalue, lmaxvalue],
            stop: function(event, ui) {
                $("#lsizemin1").val(ui.values[0]);
                $("#lsizemax1").val(ui.values[1]);
                var sort_method = $('#commonSort').val();
                var term_id = $('#term-id').attr('data-term');
                var filter = [];
                var filter_cat = [];
                var filter_color = [];
                var unique = '';
                var myJsonString = '';
                var unique_cat = '';
                var myJsonString_cat = '';
                var unique_color = '';
                var myJsonString_color = '';
                var wminsize = '';
                var wmaxsize = '';
                var lminsize = '';
                var lmaxsize = '';
                var hminsize = '';
                var hmaxsize = '';
                var lminsize = ui.values[0];
                var lmaxsize = ui.values[1];
                var minprice = parseInt($('#amountmin1').val());
                var maxprice = parseInt($('#amountmax1').val());
                if ($('#wsizemin1').length > 0) {
                    var wminsize = parseInt($('#wsizemin1').val());
                    var wmaxsize = parseInt($('#wsizemax1').val());
                }
                if ($('#hsizemin1').length > 0) {
                    var hminsize = parseInt($('#hsizemin1').val());
                    var hmaxsize = parseInt($('#hsizemax1').val());
                }
                pincode = $('.cFpincodeDesk').val();
                if (pincode) {
                    if (pincode.length != 6) {
                        pincode = $('.cFpincodeMobile').val();
                    }
                }
                $(".checkboxcontainerclass").each(function() {
                    if ($(this).is(':checked')) {
                        var aid = $(this).attr('data-aid');
                        var cid = $(this).attr('data-cid');
                        var colorid = $(this).attr('data-colorid');
                        if (cid) {
                            filter_cat.push(cid);
                        } else if (colorid) {
                            filter_color.push(colorid);
                        } else {
                            filter.push(aid);
                        }
                    }
                });
                var unique = filter.filter(onlyUnique);
                var myJsonString = JSON.stringify(unique);
                var myJsonString = JSON.parse(myJsonString);
                var unique_cat = filter_cat.filter(onlyUnique);
                var myJsonString_cat = JSON.stringify(unique_cat);
                var myJsonString_cat = JSON.parse(myJsonString_cat);
                var unique_color = filter_color.filter(onlyUnique);
                var myJsonString_color = JSON.stringify(unique_color);
                var myJsonString_color = JSON.parse(myJsonString_color);
                $.ajax({
                    url: baseUrl + "filterproductlist",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pincode: pincode,
                        myJsonString,
                        myJsonString_cat,
                        myJsonString_color,
                        term_id: term_id,
                        minprice: minprice,
                        maxprice: maxprice,
                        wminsize: wminsize,
                        wmaxsize: wmaxsize,
                        lminsize: lminsize,
                        lmaxsize: lmaxsize,
                        hminsize: hminsize,
                        hmaxsize: hmaxsize,
                        sort_method: sort_method
                    },
                    beforeSend: function() {
                        $("#overlay").fadeIn(300);
                    },
                    success: function(response) {
                        if (response.html != '') {
                            $('#explore_more').show();
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#appendfilterproduct').html(response.html);
                        } else {
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#explore_more').hide();
                        }
                        if (response.explore == 'no') {
                            $('#explore_more').hide();
                        }
                    },
                }).done(function() {
                    setTimeout(function() {
                        $("#overlay").fadeOut(300);
                    }, 500);
                });
            }
        });
        $("#lsizemin1").val($("#slider-range-filter3").slider("values", 0));
        $("#lsizemax1").val($("#slider-range-filter3").slider("values", 1));
        var lmin_val = 0;
        var lmax_val = lmaxvalue;

        function lminMaxControl(type) {
            if (type == 'min') {
                lmin_val = $('#lsizemin1').val();
            } else if (type == 'max') {
                lmax_val = $('#lsizemax1').val();
            }
            $("#slider-range-filter3").slider('values', [lmin_val, lmax_val]);
            var sort_method = $('#commonSort').val();
            var term_id = $('#term-id').attr('data-term');
            var filter = [];
            var filter_cat = [];
            var filter_color = [];
            var unique = '';
            var myJsonString = '';
            var unique_cat = '';
            var myJsonString_cat = '';
            var unique_color = '';
            var myJsonString_color = '';
            var wminsize = '';
            var wmaxsize = '';
            var lminsize = '';
            var lmaxsize = '';
            var hminsize = '';
            var hmaxsize = '';
            var lminsize = lmin_val;
            var lmaxsize = lmax_val;
            var minprice = parseInt($('#amountmin1').val());
            var maxprice = parseInt($('#amountmax1').val());
            if ($('#wsizemin1').length > 0) {
                var wminsize = parseInt($('#wsizemin1').val());
                var wmaxsize = parseInt($('#wsizemax1').val());
            }
            if ($('#hsizemin1').length > 0) {
                var hminsize = parseInt($('#hsizemin1').val());
                var hmaxsize = parseInt($('#hsizemax1').val());
            }
            pincode = $('.cFpincodeDesk').val();
            if (pincode) {
                if (pincode.length != 6) {
                    pincode = $('.cFpincodeMobile').val();
                }
            }
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minprice,
                    maxprice: maxprice,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hminsize: hminsize,
                    hmaxsize: hmaxsize,
                    sort_method: sort_method
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#explore_more').hide();
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        }
        $("#lsizemin1").on("keyup", function(e) {});
        $("#lsizemax1").on("keyup", function(e) {});
    }
    if ($('#slider-range-filter4').length > 0) {
        var hminvalue = parseInt($('#hsizemin1').val());
        var hmaxvalue = parseInt($('#hsizemax1').val());
        $("#slider-range-filter4").slider({
            range: true,
            min: hminvalue,
            max: hmaxvalue,
            values: [hminvalue, hmaxvalue],
            stop: function(event, ui) {
                $("#hsizemin1").val(ui.values[0]);
                $("#hsizemax1").val(ui.values[1]);
                var sort_method = $('#commonSort').val();
                var term_id = $('#term-id').attr('data-term');
                var filter = [];
                var filter_cat = [];
                var filter_color = [];
                var unique = '';
                var myJsonString = '';
                var unique_cat = '';
                var myJsonString_cat = '';
                var unique_color = '';
                var myJsonString_color = '';
                var wminsize = '';
                var wmaxsize = '';
                var lminsize = '';
                var lmaxsize = '';
                var hminsize = '';
                var hmaxsize = '';
                var hminsize = ui.values[0];
                var hmaxsize = ui.values[1];
                var minprice = parseInt($('#amountmin1').val());
                var maxprice = parseInt($('#amountmax1').val());
                if ($('#wsizemin1').length > 0) {
                    var wminsize = parseInt($('#wsizemin1').val());
                    var wmaxsize = parseInt($('#wsizemax1').val());
                }
                if ($('#lsizemin1').length > 0) {
                    var lminsize = parseInt($('#lsizemin1').val());
                    var lminsize = parseInt($('#lsizemax1').val());
                }
                pincode = $('.cFpincodeDesk').val();
                if (pincode) {
                    if (pincode.length != 6) {
                        pincode = $('.cFpincodeMobile').val();
                    }
                }
                $(".checkboxcontainerclass").each(function() {
                    if ($(this).is(':checked')) {
                        var aid = $(this).attr('data-aid');
                        var cid = $(this).attr('data-cid');
                        var colorid = $(this).attr('data-colorid');
                        if (cid) {
                            filter_cat.push(cid);
                        } else if (colorid) {
                            filter_color.push(colorid);
                        } else {
                            filter.push(aid);
                        }
                    }
                });
                var unique = filter.filter(onlyUnique);
                var myJsonString = JSON.stringify(unique);
                var myJsonString = JSON.parse(myJsonString);
                var unique_cat = filter_cat.filter(onlyUnique);
                var myJsonString_cat = JSON.stringify(unique_cat);
                var myJsonString_cat = JSON.parse(myJsonString_cat);
                var unique_color = filter_color.filter(onlyUnique);
                var myJsonString_color = JSON.stringify(unique_color);
                var myJsonString_color = JSON.parse(myJsonString_color);
                $.ajax({
                    url: baseUrl + "filterproductlist",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pincode: pincode,
                        myJsonString,
                        myJsonString_cat,
                        myJsonString_color,
                        term_id: term_id,
                        minprice: minprice,
                        maxprice: maxprice,
                        wminsize: wminsize,
                        wmaxsize: wmaxsize,
                        lminsize: lminsize,
                        lmaxsize: lmaxsize,
                        hminsize: hminsize,
                        hmaxsize: hmaxsize,
                        sort_method: sort_method
                    },
                    beforeSend: function() {
                        $("#overlay").fadeIn(300);
                    },
                    success: function(response) {
                        if (response.html != '') {
                            $('#explore_more').show();
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#appendfilterproduct').html(response.html);
                        } else {
                            $('#appendfilterproduct').children().find('.item').remove();
                            $('#explore_more').hide();
                        }
                        if (response.explore == 'no') {
                            $('#explore_more').hide();
                        }
                    },
                }).done(function() {
                    setTimeout(function() {
                        $("#overlay").fadeOut(300);
                    }, 500);
                });
            }
        });
        $("#hsizemin1").val($("#slider-range-filter4").slider("values", 0));
        $("#hsizemax1").val($("#slider-range-filter4").slider("values", 1));
        var hmin_val = 0;
        var hmax_val = hmaxvalue;

        function hminMaxControl(type) {
            if (type == 'min') {
                hmin_val = $('#hsizemin1').val();
            } else if (type == 'max') {
                hmax_val = $('#hsizemax1').val();
            }
            $("#slider-range-filter4").slider('values', [hmin_val, hmax_val]);
            var sort_method = $('#commonSort').val();
            var term_id = $('#term-id').attr('data-term');
            var filter = [];
            var filter_cat = [];
            var filter_color = [];
            var unique = '';
            var myJsonString = '';
            var unique_cat = '';
            var myJsonString_cat = '';
            var unique_color = '';
            var myJsonString_color = '';
            var wminsize = '';
            var wmaxsize = '';
            var lminsize = '';
            var lmaxsize = '';
            var hminsize = '';
            var hmaxsize = '';
            var hminsize = hmin_val;
            var hmaxsize = hmax_val;
            var minprice = parseInt($('#amountmin1').val());
            var maxprice = parseInt($('#amountmax1').val());
            if ($('#wsizemin1').length > 0) {
                var wminsize = parseInt($('#wsizemin1').val());
                var wmaxsize = parseInt($('#wsizemax1').val());
            }
            if ($('#lsizemin1').length > 0) {
                var lminsize = parseInt($('#lsizemin1').val());
                var lminsize = parseInt($('#lsizemax1').val());
            }
            pincode = $('.cFpincodeDesk').val();
            if (pincode) {
                if (pincode.length != 6) {
                    pincode = $('.cFpincodeMobile').val();
                }
            }
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minprice,
                    maxprice: maxprice,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hminsize: hminsize,
                    hmaxsize: hmaxsize,
                    sort_method: sort_method
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#explore_more').hide();
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        }
        $("#hsizemin1").on("keyup", function(e) {});
        $("#hsizemax1").on("keyup", function(e) {});
    }
    $('#explore_more').on('click', function(event) {
        var explore_more = $(this).attr('data-value');
        var term_id = $('#term-id').attr('data-term');
        var filter = [];
        var filter_cat = [];
        var filter_color = [];
        var unique = '';
        var myJsonString = '';
        var unique_cat = '';
        var myJsonString_cat = '';
        var pincode = '';
        var unique_color = '';
        var myJsonString_color = '';
        var wminsize = '';
        var wmaxsize = '';
        var lminsize = '';
        var lmaxsize = '';
        var hminsize = '';
        var hmaxsize = '';
        var sort_method = '';
        sort_method = $('#commonSort').val();
        console.log(sort_method);
        if (sort_method == '' || sort_method == 'All' || sort_method == 'DESC') {
            sort_method = 'DESC';
        }
        pincode = $('.cFpincodeDesk').val();
        if (pincode) {
            if (pincode.length != 6) {
                pincode = $('.cFpincodeMobile').val();
            }
        }
        var minvalue = parseInt($('#amountmin1').val());
        var maxvalue = parseInt($('#amountmax1').val());
        if ($('#wsizemin1').length > 0) {
            var wminsize = parseInt($('#wsizemin1').val());
            var wmaxsize = parseInt($('#wsizemax1').val());
        }
        if ($('#hsizemin1').length > 0) {
            var hminsize = parseInt($('#hsizemin1').val());
            var hmaxsize = parseInt($('#hsizemax1').val());
        }
        if ($('#lsizemin1').length > 0) {
            var lminsize = parseInt($('#lsizemin1').val());
            var lmaxsize = parseInt($('#lsizemax1').val());
        }
        $(".checkboxcontainerclass").each(function() {
            if ($(this).is(':checked')) {
                var aid = $(this).attr('data-aid');
                var cid = $(this).attr('data-cid');
                var colorid = $(this).attr('data-colorid');
                if (cid) {
                    filter_cat.push(cid);
                } else if (colorid) {
                    filter_color.push(colorid);
                } else {
                    filter.push(aid);
                }
            }
        });
        var unique = filter.filter(onlyUnique);
        var myJsonString = JSON.stringify(unique);
        var myJsonString = JSON.parse(myJsonString);
        var unique_cat = filter_cat.filter(onlyUnique);
        var myJsonString_cat = JSON.stringify(unique_cat);
        var myJsonString_cat = JSON.parse(myJsonString_cat);
        var unique_color = filter_color.filter(onlyUnique);
        var myJsonString_color = JSON.stringify(unique_color);
        var myJsonString_color = JSON.parse(myJsonString_color);
        console.log(sort_method);
        $.ajax({
            url: baseUrl + "filterproductlist",
            type: 'post',
            dataType: "json",
            data: {
                sort_method: sort_method,
                pincode: pincode,
                myJsonString,
                myJsonString_cat,
                myJsonString_color,
                term_id: term_id,
                minprice: minvalue,
                maxprice: maxvalue,
                explore_more: explore_more,
                wminsize: wminsize,
                wmaxsize: wmaxsize,
                lminsize: lminsize,
                lmaxsize: lmaxsize,
                hminsize: hminsize,
                hmaxsize: hmaxsize
            },
            beforeSend: function() {
                $("#overlay").fadeIn(300);
            },
            success: function(response) {
                if (response.html != '') {
                    explore_more = parseInt(explore_more);
                    explore_more = explore_more + 1;
                    $('#explore_more').show();
                    $('#appendfilterproduct').append(response.html);
                    $("#explore_more").attr('data-value', explore_more);
                } else {
                    $("#explore_more").attr('data-value', '1');
                    $('#explore_more').hide();
                }
                if (response.explore == 'no') {
                    $('#explore_more').hide();
                }
            },
        }).done(function() {
            setTimeout(function() {
                $("#overlay").fadeOut(300);
            }, 500);
        });
    });
    $('.cFpincodeBtnDesk').on('click', function(event) {
        var pin = $('.cFpincodeDesk').val();
        if (pin.length == 6) {
            $.ajax({
                url: baseUrl + "usingpingetzoneid",
                type: 'post',
                dataType: "json",
                data: {
                    pin,
                    pin
                },
                success: function(response) {
                    window.location.reload();
                    var zone_id = 0;
                    $(".item .price").hide();
                    $(".item").each(function() {
                        var price = $(this).find(".price");
                        $(price).each(function() {
                            $('.cFToolTip').hide();
                            $('.cFToolTipMobile').hide();
                            zone_id = $(this).attr('data-zone');
                            if (parseInt(response.zode_tid) == parseInt(zone_id)) {
                                $(this).show();
                                return false;
                            } else {
                                $(this).hide();
                            }
                        });
                    });
                },
            });
        } else {
            $(".error").remove();
            $(".filterpincode").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
            $('.cFToolTipMobile').show();
        }
    });
    $('.bgpincodeBtnDesk').on('click', function(event) {
        var pin = $('.bgpincodeDesk').val();
        if (pin.length == 6) {
            $.ajax({
                url: baseUrl + "bgpingetzoneid",
                type: 'post',
                dataType: "json",
                data: {
                    pin,
                    pin
                },
                success: function(response) {
                    if (response.zode_tid != '') {
                        $('.bgToolTip').hide();
                        window.location.reload();
                    } else {
                        $(".error").remove();
                        $(".bgpincodeBtnDesk").after('<span style="color:red" class="error">Product is not available in this area.</span>');
                    }
                },
            });
        } else {
            $(".error").remove();
            $(".bgpincodeBtnDesk").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
        }
    });
    $('.gpincodeBtnDesk').on('click', function(event) {
        var pin = $('.gpincodeDesk').val();
        if (pin.length == 6) {
            $.ajax({
                url: baseUrl + "gpingetzoneid",
                type: 'post',
                dataType: "json",
                data: {
                    pin,
                    pin
                },
                success: function(response) {
                    $(".error").remove();
                },
            });
        } else {
            $(".error").remove();
            $(".gpincodeBtnDesk").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
        }
    });
    jQuery(document).ready(function() {
        if ($('.cFpincodeDesk').length > 0) {
            var pin = $('.cFpincodeDesk').val();
            if (pin.length == 6) {
                $.ajax({
                    url: baseUrl + "usingpingetzoneid",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pin,
                        pin
                    },
                    success: function(response) {
                        var zone_id = 0;
                        $(".item .price").hide();
                        $(".item").each(function() {
                            var price = $(this).find(".price");
                            $('.cFToolTip').hide();
                            $('.cFToolTipMobile').hide();
                            $(price).each(function() {
                                zone_id = $(this).attr('data-zone');
                                if (parseInt(response.zode_tid) == parseInt(zone_id)) {
                                    $(this).show();
                                    return false;
                                } else {
                                    $(this).hide();
                                }
                            });
                        });
                    },
                });
            }
        }
        if ($('.bgpincodeDesk').length > 0) {
            var pin = $('.bgpincodeDesk').val();
            if (pin.length == 6) {
                $.ajax({
                    url: baseUrl + "bgpingetzoneid",
                    type: 'post',
                    dataType: "json",
                    data: {
                        pin,
                        pin
                    },
                    success: function(response) {
                        if (response.zode_tid != '') {
                            $('.bgToolTip').hide();
                        }
                    },
                });
            }
        }
    });
    $('.cFpincodeBtnMobile').on('click', function(event) {
        var pin = $('.cFpincodeMobile').val();
        if (pin.length == 6) {
            $.ajax({
                url: baseUrl + "usingpingetzoneid",
                type: 'post',
                dataType: "json",
                data: {
                    pin,
                    pin
                },
                success: function(response) {
                    var zone_id = 0;
                    $(".item .price").hide();
                    $(".item").each(function() {
                        var price = $(this).find(".price");
                        $(price).each(function() {
                            zone_id = $(this).attr('data-zone');
                            if (parseInt(response.zode_tid) == parseInt(zone_id)) {
                                $(this).show();
                                return false;
                            } else {
                                $(this).hide();
                            }
                        });
                    });
                },
            });
        } else {
            $(".error").remove();
            $(".filterpincode").after('<span style="color:red" class="error">Please enter 6 digit number</span>');
            $('.cFToolTipMobile').show();
        }
    });
    $('#blogclear_filter').click(function() {
        location.reload(true);
    });
    $('#mobblogclear_filter').click(function() {
        location.reload(true);
    });
    $('#innovationclear_filter').click(function() {
        location.reload(true);
    });
    $('#mobinnovationclear_filter').click(function() {
        location.reload(true);
    });
    $('#clear_filter').on('click', function(event) {
        var term_id = $('#term-id').attr('data-term');
        $(".checkboxcontainerclass").each(function() {
            if ($(this).is(':checked')) {
                $(this).prop('checked', false);
            }
        });
        $.ajax({
            url: baseUrl + "filterproductlist",
            type: 'post',
            dataType: "json",
            data: {
                term_id: term_id
            },
            beforeSend: function() {
                $("#overlay").fadeIn(300);
            },
            success: function(response) {
                if (response.html != '') {
                    $("#commonSort").val($("#commonSort option:first").val());
                    $('.cFpincodeDesk').val('');
                    $('.cFpincodeMobile').val('');
                    $('#explore_more').show();
                    $('#appendfilterproduct').children().find('.item').remove();
                    $('#appendfilterproduct').html(response.html);
                    var minvalue = parseInt($('#amountmin1').data('value'));
                    var maxvalue = parseInt($('#amountmax1').data('value'));
                    console.log(minvalue);
                    console.log(maxvalue);
                    $("#amountmin1").val(minvalue);
                    $("#amountmax1").val(maxvalue);
                    $("#slider-range-filter1").slider("option", "values", [minvalue, maxvalue]);
                } else {
                    $("#commonSort").val($("#commonSort option:first").val());
                    $('.cFpincodeDesk').val('');
                    $('.cFpincodeMobile').val('');
                    $('#explore_more').hide();
                    $('#appendfilterproduct').children().find('.item').remove();
                    var minvalue = parseInt($('#amountmin1').data('value'));
                    var maxvalue = parseInt($('#amountmax1').data('value'));
                    console.log(minvalue);
                    console.log(maxvalue);
                    $("#slider-range-filter1").slider("option", "values", [minvalue, maxvalue]);
                }
                if (response.explore == 'no') {
                    $('#explore_more').hide();
                }
            },
        }).done(function() {
            setTimeout(function() {
                $("#overlay").fadeOut(300);
            }, 500);
        });
    });
    $('#mobclear_filter').on('click', function(event) {
        var term_id = $('#term-id').attr('data-term');
        $(".checkboxcontainerclass").each(function() {
            if ($(this).is(':checked')) {
                $(this).prop('checked', false);
            }
        });
        $.ajax({
            url: baseUrl + "filterproductlist",
            type: 'post',
            dataType: "json",
            data: {
                term_id: term_id
            },
            success: function(response) {
                if (response.html != '') {
                    $("#commonSort").val($("#commonSort option:first").val());
                    $('.cFpincodeDesk').val('');
                    $('.cFpincodeMobile').val('');
                    $('#explore_more').show();
                    $('#appendfilterproduct').children().find('.item').remove();
                    $('#appendfilterproduct').html(response.html);
                    var minvalue = parseInt($('#amountmin1').data('value'));
                    var maxvalue = parseInt($('#amountmax1').data('value'));
                    console.log(minvalue);
                    console.log(maxvalue);
                    $("#amountmin1").val(minvalue);
                    $("#amountmax1").val(maxvalue);
                    $("#slider-range-filter1").slider("option", "values", [minvalue, maxvalue]);
                } else {
                    $("#commonSort").val($("#commonSort option:first").val());
                    $('.cFpincodeDesk').val('');
                    $('.cFpincodeMobile').val('');
                    $('#explore_more').hide();
                    $('#appendfilterproduct').children().find('.item').remove();
                    var minvalue = parseInt($('#amountmin1').data('value'));
                    var maxvalue = parseInt($('#amountmax1').data('value'));
                    $("#slider-range-filter1").slider("option", "values", [minvalue, maxvalue]);
                }
                if (response.explore == 'no') {
                    $('#explore_more').hide();
                }
            },
        });
    });
    $.fn.checkout_page_reload = function(url) {
        console.log(url);
        window.location.replace(url);
    };
    $('#commonSort').on('change', function(event) {
        var sort_method = '';
        sort_method = $(this).val();
        var term_id = $('#term-id').attr('data-term');
        var filter = [];
        var filter_cat = [];
        var filter_color = [];
        var unique = '';
        var myJsonString = '';
        var unique_cat = '';
        var myJsonString_cat = '';
        var unique_color = '';
        var pincode = '';
        var myJsonString_color = '';
        var wminsize = '';
        var wmaxsize = '';
        var lminsize = '';
        var lmaxsize = '';
        var hminsize = '';
        var hmaxsize = '';
        var minvalue = parseInt($('#amountmin1').val());
        var maxvalue = parseInt($('#amountmax1').val());
        if ($('#wsizemin1').length > 0) {
            var wminsize = parseInt($('#wsizemin1').val());
            var wmaxsize = parseInt($('#wsizemax1').val());
        }
        if ($('#hsizemin1').length > 0) {
            var hminsize = parseInt($('#hsizemin1').val());
            var hmaxsize = parseInt($('#hsizemax1').val());
        }
        if ($('#lsizemin1').length > 0) {
            var lminsize = parseInt($('#lsizemin1').val());
            var lmaxsize = parseInt($('#lsizemax1').val());
        }
        $("#explore_more").attr('data-value', '1');
        pincode = $('.cFpincodeDesk').val();
        if (pincode) {
            if (pincode.length != 6) {
                pincode = $('.cFpincodeMobile').val();
            }
        }
        if (pincode.length == 6) {
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minvalue,
                    maxprice: maxvalue,
                    sort_method: sort_method,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hminsize: hminsize,
                    hmaxsize: hmaxsize
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                        $(".cFToolTip").hide();
                    } else {
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#explore_more').hide();
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        } else {
            $(".error").remove();
            $("#commonSort").val($("#commonSort option:first").val());
            $(".filterpincode").after('<span style="color:red" class="error">Please enter pincode first</span>');
            $(".cFpincodeDesk").focus();
        }
    });
    $(".checkboxcontainer").each(function() {
        $(this).find('input').on("click", function() {
            var term_id = $('#term-id').attr('data-term');
            var sort_method = '';
            var pincode = '';
            var sort_method = $('#commonSort').val();
            var filter = [];
            var filter_cat = [];
            var filter_color = [];
            var unique = '';
            var myJsonString = '';
            var unique_cat = '';
            var myJsonString_cat = '';
            var unique_color = '';
            var myJsonString_color = '';
            var wminsize = '';
            var wmaxsize = '';
            var lminsize = '';
            var lmaxsize = '';
            var hminsize = '';
            var hmaxsize = '';
            pincode = $('.cFpincodeDesk').val();
            if (pincode) {
                if (pincode.length != 6) {
                    pincode = $('.cFpincodeMobile').val();
                }
            }
            if ($('#amountmin1').length > 0) {
                var minvalue = parseInt($('#amountmin1').val());
                var maxvalue = parseInt($('#amountmax1').val());
            } else {
                var minvalue = '';
                var maxvalue = '';
            }
            if ($('#wsizemin1').length > 0) {
                var wminsize = parseInt($('#wsizemin1').val());
                var wmaxsize = parseInt($('#wsizemax1').val());
            }
            if ($('#hsizemin1').length > 0) {
                var hminsize = parseInt($('#hsizemin1').val());
                var hmaxsize = parseInt($('#hsizemax1').val());
            }
            if ($('#lsizemin1').length > 0) {
                var lminsize = parseInt($('#lsizemin1').val());
                var lmaxsize = parseInt($('#lsizemax1').val());
            }
            $(".checkboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var aid = $(this).attr('data-aid');
                    var cid = $(this).attr('data-cid');
                    var colorid = $(this).attr('data-colorid');
                    if (cid) {
                        filter_cat.push(cid);
                    } else if (colorid) {
                        filter_color.push(colorid);
                    } else {
                        filter.push(aid);
                    }
                }
            });
            var unique = filter.filter(onlyUnique);
            var myJsonString = JSON.stringify(unique);
            var myJsonString = JSON.parse(myJsonString);
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            var unique_color = filter_color.filter(onlyUnique);
            var myJsonString_color = JSON.stringify(unique_color);
            var myJsonString_color = JSON.parse(myJsonString_color);
            $.ajax({
                url: baseUrl + "filterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    pincode: pincode,
                    sort_method: sort_method,
                    myJsonString,
                    myJsonString_cat,
                    myJsonString_color,
                    term_id: term_id,
                    minprice: minvalue,
                    maxprice: maxvalue,
                    wminsize: wminsize,
                    wmaxsize: wmaxsize,
                    lminsize: lminsize,
                    lmaxsize: lmaxsize,
                    hminsize: hminsize,
                    hmaxsize: hmaxsize
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        $('#explore_more').show();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        $('#explore_more').hide();
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    }
                    if (response.explore == 'no') {
                        $('#explore_more').hide();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        });
    });
    $(".ncheckboxcontainer").each(function() {
        $(this).find('input').on("click", function() {
            var filter = [];
            var filter_cat = [];
            var unique_cat = '';
            var myJsonString_cat = '';
            $(".ncheckboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var cid = $(this).attr('data-cid');
                    if (cid) {
                        console.log('cid--', cid);
                        filter_cat.push(cid);
                    }
                }
            });
            var myJsonString_cat = JSON.stringify(filter_cat);
            console.log('before', myJsonString_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            console.log('after', myJsonString_cat);
            $.ajax({
                url: baseUrl + "nfilterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    myJsonString_cat
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        var filter_cat = [];
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        var filter_cat = [];
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        });
    });
    $(".gcheckboxcontainer").each(function() {
        $(this).find('input').on("click", function() {
            var filter_cat = [];
            var unique_cat = '';
            var myJsonString_cat = '';
            $(".gcheckboxcontainerclass").each(function() {
                if ($(this).is(':checked')) {
                    var cid = $(this).attr('data-cid');
                    if (cid) {
                        filter_cat.push(cid);
                    }
                }
            });
            var unique_cat = filter_cat.filter(onlyUnique);
            var myJsonString_cat = JSON.stringify(unique_cat);
            var myJsonString_cat = JSON.parse(myJsonString_cat);
            $.ajax({
                url: baseUrl + "gfilterproductlist",
                type: 'post',
                dataType: "json",
                data: {
                    myJsonString_cat
                },
                beforeSend: function() {
                    $("#overlay").fadeIn(300);
                },
                success: function(response) {
                    if (response.html != '') {
                        var filter_cat = [];
                        $('#appendfilterproduct').children().find('.item').remove();
                        $('#appendfilterproduct').html(response.html);
                    } else {
                        var filter_cat = [];
                        $('#appendfilterproduct').children().find('.item').remove();
                    }
                    if (response.fhtml != '') {
                        var filter_cat = [];
                        $('#fappendfilterproduct').children().find('.item').remove();
                        $('#fappendfilterproduct').html(response.fhtml);
                    } else {
                        var filter_cat = [];
                        $('#fappendfilterproduct').children().find('.item').remove();
                    }
                },
            }).done(function() {
                setTimeout(function() {
                    $("#overlay").fadeOut(300);
                }, 500);
            });
        });
    });
    var $radios = $('input:radio[name=address]');
    if ($radios.is(':checked') === false) {
        $radios.prop('checked', true);
    }
    $("#frmsearch").submit(function(event) {
        event.preventDefault();
        var searchval = $('input[name=desksearch]').val();
        searchval = $.trim(searchval);
        if (searchval == '') {
            $('#search_err').show();
            return false;
        } else {
            var searchval = $('input[name=desksearch]').val();
            searchval = $.trim(searchval);
            $('input[name=desksearch]').val(searchval);
            window.location.href = '/search-result?desksearch=' + searchval;
            return true;
        }
    });
    $("#mnavSearchBtn").on("click", function(event) {
        event.preventDefault();
        var searchval = $('#mdesksearch').val();
        console.log(searchval);
        searchval = $.trim(searchval);
        if (searchval == '') {
            $('#msearch_err').show();
            return false;
        } else {
            var searchval = $('#mdesksearch').val();
            searchval = $.trim(searchval);
            $('#mdesksearch').val(searchval);
            window.location.href = '/search-result?desksearch=' + searchval;
            return true;
        }
    });
    if ($('.careerFormWrapper').length > 0) {
        $('body').on("click", "input[name=purchase_invoice_copy_remove_button]", function(event) {
            console.log('click remove');
            var cid = '';
            $(".form-checkbox").each(function() {
                if ($(this).is(':checked')) {
                    var cid = 'checked';
                    console.log('cid...', cid);
                }
            });
            if (cid != 'checked') {
                console.log('not checked');
                $('.ajax-new-content:first').html('Please select the checkbox first');
            }
        });
    }
    var currentLocation = window.location.pathname;
    var shareLocation = baseUrl + "investor-relations/shareholding-pattern";
    if (currentLocation == shareLocation) {
        $.ajax({
            url: baseUrl + "jsonexport/shareholding_export",
            cache: false,
            success: function(res) {
                google.charts.load('current', {
                    'packages': ['corechart']
                });
                google.charts.setOnLoadCallback(drawChart);
                const json = [{
                    "condiment": res.data[0].names,
                    "number": JSON.parse(res.data[0].values)
                }, {
                    "condiment": res.data[1].names,
                    "number": JSON.parse(res.data[1].values)
                }, {
                    "condiment": res.data[2].names,
                    "number": JSON.parse(res.data[2].values)
                }, {
                    "condiment": res.data[3].names,
                    "number": JSON.parse(res.data[3].values)
                }, {
                    "condiment": res.data[4].names,
                    "number": JSON.parse(res.data[4].values)
                }, {
                    "condiment": res.data[5].names,
                    "number": JSON.parse(res.data[5].values)
                }, {
                    "condiment": res.data[6].names,
                    "number": JSON.parse(res.data[6].values)
                }];

                function drawChart() {
                    var condArray = [
                        ['Condiment', 'Number']
                    ];
                    for (i = 0; i < json.length; i++) {
                        condArray.push([json[i].condiment, json[i].number]);
                    }
                    var options = {
                        title: res.title[0].value,
                        width: '100%',
                        height: '100%',
                        slices: {
                            0: {
                                color: '#7cb5ec'
                            },
                            1: {
                                color: '#434348'
                            },
                            2: {
                                color: '#90ed7d'
                            },
                            3: {
                                color: '#f7a35c'
                            },
                            4: {
                                color: '#8085e9'
                            },
                            5: {
                                color: '#f15c80'
                            },
                            6: {
                                color: '#e4d354'
                            }
                        }
                    };
                    var data = google.visualization.arrayToDataTable(condArray)
                    var chart = new google.visualization.PieChart(document.getElementById('myChart'));
                    chart.draw(data, options);
                }
            }
        });
    }
})(jQuery);
var e = document.getElementById('lookingForm');
if (e) {
    document.getElementById('lookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (document.getElementById('product').value == '') {
            document.getElementById('lookempty').style.display = "block";
            return false;
        } else {
            document.getElementById('lookempty').style.display = "none";
            window.location = (document.getElementById('product').value);
        }
    });
}
jQuery("#edit-field-first-name-0-value").keydown(function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
    }
});
jQuery("#edit-field-last-name-0-value").keydown(function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
    }
});
jQuery("input[name=first_name]").keydown(function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
    }
});
jQuery("input[name=last_name]").keydown(function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
    }
});
jQuery("input[name=fullname]").keydown(function(e) {
    var key = e.keyCode;
    if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
    }
});
jQuery("#edit-name").keydown(function(e) {
    var specialKeys = new Array();
    specialKeys.push(8);
    specialKeys.push(9);
    specialKeys.push(46);
    specialKeys.push(190);
    specialKeys.push(36);
    specialKeys.push(35);
    specialKeys.push(37);
    specialKeys.push(39);
    specialKeys.push(64);
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || keyCode == 32 || (keyCode >= 97 && keyCode <= 122) || specialKeys.indexOf(keyCode) != -1);
    return ret;
});
jQuery("#edit-field-phone-0-value").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#edit-field-first-name-0-value").attr('maxlength', '50');
jQuery("#edit-field-last-name-0-value").attr('maxlength', '50');
jQuery("#edit-field-phone-0-value").attr('minlength', '10');
jQuery("#edit-field-phone-0-value").attr('maxlength', '10');
jQuery("#edit-field-zipcode-0-value").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#edit-field-zipcode-0-value").attr('minlength', '6');
jQuery("#edit-field-zipcode-0-value").attr('maxlength', '6');
if ((jQuery('.login-wrapper').length > 0) || (jQuery('.my-account-form-wrapper').length > 0)) {
    var loginerr = 'false';
    if (jQuery("#edit-field-category option:selected").text() == 'Other') {
        jQuery('.othercat').show();
    } else {
        jQuery('.othercat').hide();
    }
    jQuery('body').on("keydown", "#mobile_number_id", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (key === 8) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    jQuery('body').on("keyup", "#mobile_number_id", function(event) {
        jQuery("#mobile_number_id-error").hide();
        var phone = jQuery('#mobile_number_id').val();
        if (phone.length == '10') {
            var phoneRegex = /^[6-9]d{9}$/;
            if (!phoneRegex.test(phone)) {
                jQuery(".page_error").html('');
                jQuery("#mobile_number_id").after('<div class="page_error">Please enter valid mobile number.</div>');
                loginerr = 'true';
            } else {
                jQuery(".page_error").html('');
                jQuery(".page_error").hide();
            }
        } else {
            jQuery("#edit-field-phone-0-value-error").hide();
            jQuery(".page_error").html('');
            jQuery("#mobile_number_id").after('<div class="page_error">Please enter atleast 10 digits</div>');
            loginerr = 'true';
        }
    });
    jQuery('body').on("keyup", "#edit-field-zipcode-0-value", function(event) {
        jQuery("#edit-field-zipcode-0-value-error").hide();
    });
    jQuery('body').on("keyup", "#edit-field-phone-0-value", function(event) {
        jQuery("#edit-field-phone-0-value-error").hide();
    });
    jQuery('body').on("keyup", "#edit-mail", function(event) {
        jQuery("#edit-mail-error").hide();
    });
    jQuery('body').on("keydown", "#edit-field-zipcode-0-value", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    jQuery('body').on("keyup", "#edit-field-zipcode-0-value", function(event) {
        var zip = jQuery('#edit-field-zipcode-0-value').val();
        if (zip.length == '6') {
            var zipRegex = /^[1-9]{1}[0-9]{5}$/;
            if (!zipRegex.test(zip)) {
                jQuery(".login-error").html('');
                jQuery("#edit-field-zipcode-0-value").after('<div class="login-error">Please enter valid pincode.</div>');
                loginerr1 = 'true';
                return false;
            } else {
                jQuery(".login-error").html('');
                jQuery(".login-error").hide();
                loginerr1 = 'false';
            }
        } else {
            jQuery("#edit-field-zipcode-0-value-error").hide();
            jQuery(".login-error").html('');
            jQuery("#edit-field-zipcode-0-value").after('<div class="login-error">Please enter atleast 6 digits.</div>');
            loginerr1 = 'true';
            return false;
        }
    });
    jQuery('body').on("keydown", "#edit-field-phone-0-value", function(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    });
    jQuery('body').on("keyup", "#edit-field-phone-0-value", function(event) {
        var phone = jQuery('#edit-field-phone-0-value').val();
        if (phone.length == '10') {
            var phoneRegex = /^[6-9]d{9}$/;
            if (!phoneRegex.test(phone)) {
                jQuery(".login-error").html('');
                jQuery("#edit-field-phone-0-value").after('<div class="login-error">Please enter valid phone.</div>');
                loginerr2 = 'true';
                return false;
            } else {
                jQuery(".login-error").html('');
                jQuery(".login-error").hide();
                loginerr2 = 'false';
            }
        } else {
            jQuery("#edit-field-phone-0-value-error").hide();
            jQuery(".login-error").html('');
            jQuery("#edit-field-phone-0-value").after('<div class="login-error">Please enter atleast 10 digits.</div>');
            loginerr2 = 'true';
            return false;
        }
    });
    jQuery('body').on("focusout", "#edit-mail", function(event) {
        var email = jQuery('#edit-mail').val();
        if (email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                jQuery("#edit-mail-error").hide();
                jQuery(".login-error").html('');
                jQuery("#edit-mail").after('<div class="login-error">Please enter valid email.</div>');
                loginerr3 = 'true';
            } else {
                jQuery(".login-error").html('');
                jQuery(".login-error").hide();
                loginerr3 = 'false';
            }
        }
    });
    jQuery('body').on("focusout", "#edit-pass-pass1", function(event) {
        var pass1 = jQuery('#edit-pass-pass1').val();
        if (pass1) {
            var pass1Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (!pass1Regex.test(pass1)) {
                jQuery(".login-error").html('');
                jQuery("#edit-pass-pass1").after('<div class="login-error">Password should contain atleast 1 uppercase character, 1 digit and atleast 8 characters.</div>');
                loginerr4 = 'true';
            } else {
                jQuery(".login-error").html('');
                jQuery(".login-error").hide();
                loginerr4 = 'false';
            }
        }
    });
    jQuery("#myAccount").submit(function(e) {
        if (loginerr == 'true' && loginerr1 == 'true' && loginerr2 == 'true' && loginerr3 == 'true' && loginerr4 == 'true') {
            e.preventDefault();
        }
    });
    jQuery("#loginFrm").submit(function(e) {
        if (loginerr == 'true' && loginerr1 == 'true' && loginerr2 == 'true' && loginerr3 == 'true' && loginerr4 == 'true') {
            e.preventDefault();
        }
        if (jQuery("#edit-field-category option:selected").text() == 'Other') {
            var othercat = jQuery('#edit-field-other-consumer-type-0-value').val();
            if (othercat == '') {
                jQuery(".page_error").html('');
                jQuery("#edit-field-other-consumer-type-0-value").after('<div class="page_error">Other Category Type is required.</div>');
                e.preventDefault();
            } else {
                jQuery(".login-error").html('');
                jQuery(".page_error").html('');
                jQuery(".page_error").hide('');
            }
        }
    });
}
jQuery("#otp_number1").focus(function(event) {
    jQuery("#otp_number1").val('');
});
jQuery("#otp_number2").focus(function(event) {
    jQuery("#otp_number2").val('');
});
jQuery("#otp_number3").focus(function(event) {
    jQuery("#otp_number3").val('');
});
jQuery("#otp_number4").focus(function(event) {
    jQuery("#otp_number4").val('');
});
jQuery("#otp_number5").focus(function(event) {
    jQuery("#otp_number5").val('');
});
jQuery("#otp_number6").focus(function(event) {
    jQuery("#otp_number6").val('');
});
jQuery("#otp_number1").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#otp_number2").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#otp_number3").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#otp_number4").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#otp_number5").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("#otp_number6").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery('.numberOTP').on('keyup', function() {
    if (jQuery(this).val()) {
        jQuery(this).parent().next().find('.numberOTP').focus();
    }
});
jQuery('body').on('click', ".add_new_address", function(event) {
    jQuery('#add_new_address').toggle();
    if (jQuery('#newaddress').is(':visible')) {
        jQuery('#edit-address-new-on--2').prop('checked', true);
        jQuery('#edit-address-11--2').prop('checked', false);
    } else {
        jQuery('#edit-address-new-on--2').prop('checked', false);
        jQuery('#edit-address-11--2').prop('checked', true);
    }
});
jQuery("#edit-field-birth-date-0-value-date").attr('title', 'Birth Date');
jQuery("#edit-field-marriage-anniversary-0-value-date").attr('title', 'Marriage Anniversary Date');
jQuery("#edit-field-country-0-value--2").attr('disabled', true);
jQuery('.close').click(function() {
    createCookie('myCookie', '12345', 1);
    setCookie('productcookie', '', 0)
});
jQuery('body').on("keydown", "input[name=frmpincode]", function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery('body').on("keydown", "input[name=frmmobile]", function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("input[name=frmpincode]").keydown(function(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("input[name=frmmobile]").keydown(function(e) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
jQuery("input[name=mobile_number]").keydown(function(e) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
});
setTimeout(function() {
    if ((jQuery(".product-details-wrapper").length > 0) || (jQuery(".productFiltersWrapper").length > 0) || (jQuery(".product-enquiry-wrapper").length > 0) || (jQuery(".careers-wrapper").length > 0) || (jQuery(".feedback-form-wrapper").length > 0) || (jQuery(".newsletter-form-wrapper").length > 0)) {} else {
        var popupCookie = getCookie("myCookie");
        var prodcookie = getCookie("productcookie");
        console.log(popupCookie);
        if (prodcookie == 'productdetail') {
            if (popupCookie == '') {
                jQuery('#detailsPopup').modal();
            }
        } else {}
    }
}, 10000);
jQuery(document).ready(function() {
    if ((jQuery(".product-details-wrapper").length > 0) || (jQuery(".productFiltersWrapper").length > 0)) {
        var popupCookie = getCookie("myCookie");
        if (popupCookie == '') {
            createCookie('productcookie', 'productdetail', 1);
        }
    }
});
jQuery(window).on('load', function() {
    jQuery('.home-tips-wrapper').show();
});

function setCookie(cname, cvalue, exMins) {
    var d = new Date();
    d.setTime(d.getTime() + (exMins * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log(document.cookie);
}
if (jQuery('#edit-please-choose-your-date-for-cera-live-').length > 0) {
    jQuery('#edit-please-choose-your-date-for-cera-live-').removeClass('form-date');
}
if (jQuery('#tilegallery').length > 0) {
    if (jQuery(window).width() >= 768) {
        jQuery('#tilegallery').find('.address').mCustomScrollbar();
    }
}
jQuery(document).ready(function() {
    var pin = jQuery('.bgpincodeDesk').val();
    if (pin != '') {
        jQuery('.csvhide').css('display', 'inline-block');
    } else {
        jQuery(".csvhide").css("display", "none");
    }
    var str = jQuery('.breadcrumb-wrapper .container ul li:last-child').text();
    var prod_name = str.trim();
    var pn = 'Export ' + prod_name + ' Bathroom to Excel';
    jQuery('.bgfieldWrapper .csvhide').html(pn);
})

function doExport(selector, params) {
    var pin = jQuery('.bgpincodeDesk').val();
    var str = jQuery('.breadcrumb-wrapper .container ul li:last-child').text();
    var prod_name = str.trim();
    var csvfilename = 'Export ' + prod_name + ' Bathroom to Excel';
    const options = {
        tableName: 'Table name',
        fileName: csvfilename,
    };
    jQuery.extend(true, options, params);
    jQuery(selector).tableExport(options);
}

function DoOnCsvCellData(cell, row, col, data) {
    let result = data;
    if (result !== "" && row > 0 && col === 0) {
        result = "\x1F" + data;
    } else if (result !== "" && row > 0 && col === 2) {}
    return result;
};
Drupal.debounce = function(func, wait, immediate) {
    var timeout = void 0;
    var result = void 0;
    return function() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        var context = this;
        var later = function later() {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
};;
(function($, Drupal, debounce) {
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return this[0] && callback ? $.trim(callback(this[0])) : '';
    };
    $.fn.drupalSetSummary = function(callback) {
        var self = this;
        if (typeof callback !== 'function') {
            var val = callback;
            callback = function callback() {
                return val;
            };
        }
        return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function() {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated');
    };
    Drupal.behaviors.formSingleSubmit = {
        attach: function attach() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                var formValues = $form.serialize();
                var previousValues = $form.attr('data-drupal-form-submit-last');
                if (previousValues === formValues) {
                    e.preventDefault();
                } else {
                    $form.attr('data-drupal-form-submit-last', formValues);
                }
            }
            $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
        }
    };

    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }

    function fieldsList(form) {
        var $fieldList = $(form).find('[name]').map(function(index, element) {
            return element.getAttribute('id');
        });
        return $.makeArray($fieldList);
    }
    Drupal.behaviors.formUpdated = {
        attach: function attach(context) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
            var formFields = void 0;
            if ($forms.length) {
                $.makeArray($forms).forEach(function(form) {
                    var events = 'change.formUpdated input.formUpdated ';
                    var eventHandler = debounce(function(event) {
                        triggerFormUpdated(event.target);
                    }, 300);
                    formFields = fieldsList(form).join(',');
                    form.setAttribute('data-drupal-form-fields', formFields);
                    $(form).on(events, eventHandler);
                });
            }
            if (contextIsForm) {
                formFields = fieldsList(context).join(',');
                var currentFields = $(context).attr('data-drupal-form-fields');
                if (formFields !== currentFields) {
                    triggerFormUpdated(context);
                }
            }
        },
        detach: function detach(context, settings, trigger) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            if (trigger === 'unload') {
                var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
                if ($forms.length) {
                    $.makeArray($forms).forEach(function(form) {
                        form.removeAttribute('data-drupal-form-fields');
                        $(form).off('.formUpdated');
                    });
                }
            }
        }
    };
    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach: function attach(context, settings) {
            var userInfo = ['name', 'mail', 'homepage'];
            var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
            if ($forms.length) {
                userInfo.forEach(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    var browserData = localStorage.getItem('Drupal.visitor.' + info);
                    var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
                    if ($element.length && emptyOrDefault && browserData) {
                        $element.val(browserData);
                    }
                });
            }
            $forms.on('submit', function() {
                userInfo.forEach(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    if ($element.length) {
                        localStorage.setItem('Drupal.visitor.' + info, $element.val());
                    }
                });
            });
        }
    };
    var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
        var url = void 0;
        if (e.type === 'click') {
            url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
        } else {
            url = window.location;
        }
        var hash = url.hash.substr(1);
        if (hash) {
            var $target = $('#' + hash);
            $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
            setTimeout(function() {
                return $target.trigger('focus');
            }, 300);
        }
    };
    var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
(function($, Drupal) {
    'use strict';
    var isChrome = (/chrom(e|ium)/.test(window.navigator.userAgent.toLowerCase()));
    if (isChrome) {
        var backButton = false;
        if (window.performance) {
            var navEntries = window.performance.getEntriesByType('navigation');
            if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
                backButton = true;
            } else if (window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
                backButton = true;
            }
        }
        if (backButton) {
            var attachBehaviors = Drupal.attachBehaviors;
            Drupal.attachBehaviors = function(context, settings) {
                setTimeout(function(context, settings) {
                    attachBehaviors(context, settings);
                }, 300);
            };
        }
    }
})(jQuery, Drupal);;
(function($, Drupal) {
    var states = {
        postponed: []
    };
    Drupal.states = states;

    function invert(a, invertState) {
        return invertState && typeof a !== 'undefined' ? !a : a;
    }

    function _compare2(a, b) {
        if (a === b) {
            return typeof a === 'undefined' ? a : true;
        }
        return typeof a === 'undefined' || typeof b === 'undefined';
    }

    function ternary(a, b) {
        if (typeof a === 'undefined') {
            return b;
        }
        if (typeof b === 'undefined') {
            return a;
        }
        return a && b;
    }
    Drupal.behaviors.states = {
        attach: function attach(context, settings) {
            var $states = $(context).find('[data-drupal-states]');
            var il = $states.length;
            var _loop = function _loop(i) {
                var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
                Object.keys(config || {}).forEach(function(state) {
                    new states.Dependent({
                        element: $($states[i]),
                        state: states.State.sanitize(state),
                        constraints: config[state]
                    });
                });
            };
            for (var i = 0; i < il; i++) {
                _loop(i);
            }
            while (states.postponed.length) {
                states.postponed.shift()();
            }
        }
    };
    states.Dependent = function(args) {
        var _this = this;
        $.extend(this, {
            values: {},
            oldValue: null
        }, args);
        this.dependees = this.getDependees();
        Object.keys(this.dependees || {}).forEach(function(selector) {
            _this.initializeDependee(selector, _this.dependees[selector]);
        });
    };
    states.Dependent.comparisons = {
        RegExp: function RegExp(reference, value) {
            return reference.test(value);
        },
        Function: function Function(reference, value) {
            return reference(value);
        },
        Number: function Number(reference, value) {
            return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
        }
    };
    states.Dependent.prototype = {
        initializeDependee: function initializeDependee(selector, dependeeStates) {
            var _this2 = this;
            this.values[selector] = {};
            Object.keys(dependeeStates).forEach(function(i) {
                var state = dependeeStates[i];
                if ($.inArray(state, dependeeStates) === -1) {
                    return;
                }
                state = states.State.sanitize(state);
                _this2.values[selector][state.name] = null;
                $(selector).on('state:' + state, {
                    selector: selector,
                    state: state
                }, function(e) {
                    _this2.update(e.data.selector, e.data.state, e.value);
                });
                new states.Trigger({
                    selector: selector,
                    state: state
                });
            });
        },
        compare: function compare(reference, selector, state) {
            var value = this.values[selector][state.name];
            if (reference.constructor.name in states.Dependent.comparisons) {
                return states.Dependent.comparisons[reference.constructor.name](reference, value);
            }
            return _compare2(reference, value);
        },
        update: function update(selector, state, value) {
            if (value !== this.values[selector][state.name]) {
                this.values[selector][state.name] = value;
                this.reevaluate();
            }
        },
        reevaluate: function reevaluate() {
            var value = this.verifyConstraints(this.constraints);
            if (value !== this.oldValue) {
                this.oldValue = value;
                value = invert(value, this.state.invert);
                this.element.trigger({
                    type: 'state:' + this.state,
                    value: value,
                    trigger: true
                });
            }
        },
        verifyConstraints: function verifyConstraints(constraints, selector) {
            var result = void 0;
            if ($.isArray(constraints)) {
                var hasXor = $.inArray('xor', constraints) === -1;
                var len = constraints.length;
                for (var i = 0; i < len; i++) {
                    if (constraints[i] !== 'xor') {
                        var constraint = this.checkConstraints(constraints[i], selector, i);
                        if (constraint && (hasXor || result)) {
                            return hasXor;
                        }
                        result = result || constraint;
                    }
                }
            } else if ($.isPlainObject(constraints)) {
                for (var n in constraints) {
                    if (constraints.hasOwnProperty(n)) {
                        result = ternary(result, this.checkConstraints(constraints[n], selector, n));
                        if (result === false) {
                            return false;
                        }
                    }
                }
            }
            return result;
        },
        checkConstraints: function checkConstraints(value, selector, state) {
            if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
                state = null;
            } else if (typeof selector === 'undefined') {
                selector = state;
                state = null;
            }
            if (state !== null) {
                state = states.State.sanitize(state);
                return invert(this.compare(value, selector, state), state.invert);
            }
            return this.verifyConstraints(value, selector);
        },
        getDependees: function getDependees() {
            var cache = {};
            var _compare = this.compare;
            this.compare = function(reference, selector, state) {
                (cache[selector] || (cache[selector] = [])).push(state.name);
            };
            this.verifyConstraints(this.constraints);
            this.compare = _compare;
            return cache;
        }
    };
    states.Trigger = function(args) {
        $.extend(this, args);
        if (this.state in states.Trigger.states) {
            this.element = $(this.selector);
            if (!this.element.data('trigger:' + this.state)) {
                this.initialize();
            }
        }
    };
    states.Trigger.prototype = {
        initialize: function initialize() {
            var _this3 = this;
            var trigger = states.Trigger.states[this.state];
            if (typeof trigger === 'function') {
                trigger.call(window, this.element);
            } else {
                Object.keys(trigger || {}).forEach(function(event) {
                    _this3.defaultTrigger(event, trigger[event]);
                });
            }
            this.element.data('trigger:' + this.state, true);
        },
        defaultTrigger: function defaultTrigger(event, valueFn) {
            var oldValue = valueFn.call(this.element);
            this.element.on(event, $.proxy(function(e) {
                var value = valueFn.call(this.element, e);
                if (oldValue !== value) {
                    this.element.trigger({
                        type: 'state:' + this.state,
                        value: value,
                        oldValue: oldValue
                    });
                    oldValue = value;
                }
            }, this));
            states.postponed.push($.proxy(function() {
                this.element.trigger({
                    type: 'state:' + this.state,
                    value: oldValue,
                    oldValue: null
                });
            }, this));
        }
    };
    states.Trigger.states = {
        empty: {
            keyup: function keyup() {
                return this.val() === '';
            }
        },
        checked: {
            change: function change() {
                var checked = false;
                this.each(function() {
                    checked = $(this).prop('checked');
                    return !checked;
                });
                return checked;
            }
        },
        value: {
            keyup: function keyup() {
                if (this.length > 1) {
                    return this.filter(':checked').val() || false;
                }
                return this.val();
            },
            change: function change() {
                if (this.length > 1) {
                    return this.filter(':checked').val() || false;
                }
                return this.val();
            }
        },
        collapsed: {
            collapsed: function collapsed(e) {
                return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
            }
        }
    };
    states.State = function(state) {
        this.pristine = state;
        this.name = state;
        var process = true;
        do {
            while (this.name.charAt(0) === '!') {
                this.name = this.name.substring(1);
                this.invert = !this.invert;
            }
            if (this.name in states.State.aliases) {
                this.name = states.State.aliases[this.name];
            } else {
                process = false;
            }
        } while (process);
    };
    states.State.sanitize = function(state) {
        if (state instanceof states.State) {
            return state;
        }
        return new states.State(state);
    };
    states.State.aliases = {
        enabled: '!disabled',
        invisible: '!visible',
        invalid: '!valid',
        untouched: '!touched',
        optional: '!required',
        filled: '!empty',
        unchecked: '!checked',
        irrelevant: '!relevant',
        expanded: '!collapsed',
        open: '!collapsed',
        closed: 'collapsed',
        readwrite: '!readonly'
    };
    states.State.prototype = {
        invert: false,
        toString: function toString() {
            return this.name;
        }
    };
    var $document = $(document);
    $document.on('state:disabled', function(e) {
        if (e.trigger) {
            $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
        }
    });
    $document.on('state:required', function(e) {
        if (e.trigger) {
            if (e.value) {
                var label = 'label' + (e.target.id ? '[for=' + e.target.id + ']' : '');
                var $label = $(e.target).attr({
                    required: 'required',
                    'aria-required': 'true'
                }).closest('.js-form-item, .js-form-wrapper').find(label);
                if (!$label.hasClass('js-form-required').length) {
                    $label.addClass('js-form-required form-required');
                }
            } else {
                $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
            }
        }
    });
    $document.on('state:visible', function(e) {
        if (e.trigger) {
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
        }
    });
    $document.on('state:checked', function(e) {
        if (e.trigger) {
            $(e.target).prop('checked', e.value);
        }
    });
    $document.on('state:collapsed', function(e) {
        if (e.trigger) {
            if ($(e.target).is('[open]') === e.value) {
                $(e.target).find('> summary').trigger('click');
            }
        }
    });
})(jQuery, Drupal);;
(function($, Drupal) {
    'use strict';
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.states = Drupal.webform.states || {};
    Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
    Drupal.webform.states.slideDown.duration = 'slow';
    Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
    Drupal.webform.states.slideUp.duration = 'fast';
    $.fn.hasData = function(data) {
        return (typeof this.data(data) !== 'undefined');
    };
    $.fn.isWebform = function() {
        return $(this).closest('form[id^="webform"], form[data-is-webform]').length ? true : false;
    };
    $.fn.isWebformElement = function() {
        return ($(this).isWebform() || $(this).closest('[data-is-webform-element]').length) ? true : false;
    };
    Drupal.states.Trigger.states.empty.change = function change() {
        return this.val() === '';
    };
    var states = Drupal.states;
    Drupal.states.Dependent.prototype.compare = function compare(reference, selector, state) {
        var value = this.values[selector][state.name];
        var name = reference.constructor.name;
        if (!name) {
            name = $.type(reference);
            name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        if (name in states.Dependent.comparisons) {
            return states.Dependent.comparisons[name](reference, value);
        }
        if (reference.constructor.name in states.Dependent.comparisons) {
            return states.Dependent.comparisons[reference.constructor.name](reference, value);
        }
        return _compare2(reference, value);
    };

    function _compare2(a, b) {
        if (a === b) {
            return typeof a === 'undefined' ? a : true;
        }
        return typeof a === 'undefined' || typeof b === 'undefined';
    }
    Drupal.states.Dependent.comparisons.Object = function(reference, value) {
        if ('pattern' in reference) {
            return (new RegExp(reference['pattern'])).test(value);
        } else if ('!pattern' in reference) {
            return !((new RegExp(reference['!pattern'])).test(value));
        } else if ('less' in reference) {
            return (value !== '' && parseFloat(reference['less']) > parseFloat(value));
        } else if ('less_equal' in reference) {
            return (value !== '' && parseFloat(reference['less_equal']) >= parseFloat(value));
        } else if ('greater' in reference) {
            return (value !== '' && parseFloat(reference['greater']) < parseFloat(value));
        } else if ('greater_equal' in reference) {
            return (value !== '' && parseFloat(reference['greater_equal']) <= parseFloat(value));
        } else if ('between' in reference || '!between' in reference) {
            if (value === '') {
                return false;
            }
            var between = reference['between'] || reference['!between'];
            var betweenParts = between.split(':');
            var greater = betweenParts[0];
            var less = (typeof betweenParts[1] !== 'undefined') ? betweenParts[1] : null;
            var isGreaterThan = (greater === null || greater === '' || parseFloat(value) >= parseFloat(greater));
            var isLessThan = (less === null || less === '' || parseFloat(value) <= parseFloat(less));
            var result = (isGreaterThan && isLessThan);
            return (reference['!between']) ? !result : result;
        } else {
            return reference.indexOf(value) !== false;
        }
    };
    var $document = $(document);
    $document.on('state:required', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            var $target = $(e.target);
            toggleRequired($target.find('input[type="file"]'), e.value);
            if ($target.is('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other')) {
                toggleRequired($target.find('input[type="radio"]'), e.value);
            }
            if ($target.is('.js-form-type-checkboxes, .js-form-type-webform-checkboxes-other, .js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other')) {
                var $checkboxes = $target.find('input[type="checkbox"]');
                if (e.value) {
                    $checkboxes.on('click', statesCheckboxesRequiredEventHandler);
                    checkboxesRequired($target);
                } else {
                    $checkboxes.off('click', statesCheckboxesRequiredEventHandler);
                    toggleRequired($checkboxes, false);
                }
            }
            if ($target.is('.js-form-type-webform-select-other, .js-webform-type-webform-select-other')) {
                var $select = $target.find('select');
                toggleRequired($select, e.value);
                copyRequireMessage($target, $select);
            }
            if ($target.find('> label:not([for])').length) {
                $target.find('> label').toggleClass('js-form-required form-required', e.value);
            }
            if ($target.is('.js-webform-type-radios, .js-webform-type-checkboxes, fieldset')) {
                $target.find('legend span.fieldset-legend:not(.visually-hidden)').toggleClass('js-form-required form-required', e.value);
            }
            if ($target.is('fieldset')) {
                $target.removeAttr('required aria-required');
            }
        }
    });
    $document.on('state:checked', function(e) {
        if (e.trigger) {
            $(e.target).trigger('change');
        }
    });
    $document.on('state:readonly', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('readonly', e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly', e.value).find('input, textarea').prop('readonly', e.value);
            $(e.target).trigger('webform:readonly').find('select, input, textarea, button').trigger('webform:readonly');
        }
    });
    $document.on('state:visible state:visible-slide', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            if (e.value) {
                $(':input', e.target).addBack().each(function() {
                    restoreValueAndRequired(this);
                    triggerEventHandlers(this);
                });
            } else {
                $(':input', e.target).addBack().each(function() {
                    backupValueAndRequired(this);
                    clearValueAndRequired(this);
                    triggerEventHandlers(this);
                });
            }
        }
    });
    $document.on('state:visible-slide', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            var effect = e.value ? 'slideDown' : 'slideUp';
            var duration = Drupal.webform.states[effect].duration;
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);
        }
    });
    Drupal.states.State.aliases['invisible-slide'] = '!visible-slide';
    $document.on('state:disabled', function(e) {
        if (e.trigger && $(e.target).isWebformElement()) {
            $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea, button').prop('disabled', e.value);
            var fileElements = $(e.target).find(':input[type="hidden"][name$="[fids]"]');
            if (fileElements.length) {
                if ($(e.target).is('fieldset')) {
                    $(e.target).prop('disabled', false);
                }
                fileElements.removeAttr('disabled');
            }
            $(e.target).trigger('webform:disabled').find('select, input, textarea, button').trigger('webform:disabled');
        }
    });
    Drupal.behaviors.webformCheckboxesRequired = {
        attach: function(context) {
            $('.js-form-type-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes', context).once('webform-checkboxes-required').each(function() {
                var $element = $(this);
                $element.find('input[type="checkbox"]').on('click', statesCheckboxesRequiredEventHandler);
                setTimeout(function() {
                    checkboxesRequired($element);
                });
            });
        }
    };
    Drupal.behaviors.webformRadiosRequired = {
        attach: function(context) {
            $('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other', context).once('webform-radios-required').each(function() {
                var $element = $(this);
                setTimeout(function() {
                    radiosRequired($element);
                });
            });
        }
    };

    function checkboxesRequired($element) {
        var $firstCheckbox = $element.find('input[type="checkbox"]').first();
        var isChecked = $element.find('input[type="checkbox"]').is(':checked');
        toggleRequired($firstCheckbox, !isChecked);
        copyRequireMessage($element, $firstCheckbox);
    }

    function radiosRequired($element) {
        var $radios = $element.find('input[type="radio"]');
        var isRequired = $element.hasClass('required');
        toggleRequired($radios, isRequired);
        copyRequireMessage($element, $radios);
    }

    function statesCheckboxesRequiredEventHandler() {
        var $element = $(this).closest('.js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other');
        checkboxesRequired($element);
    }

    function triggerEventHandlers(input) {
        var $input = $(input);
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        var extraParameters = ['webform.states'];
        if (type === 'checkbox' || type === 'radio') {
            $input.trigger('change', extraParameters).trigger('blur', extraParameters);
        } else if (tag === 'select') {
            $input.trigger('change', extraParameters).trigger('blur', extraParameters);
        } else if (type !== 'submit' && type !== 'button' && type !== 'file') {
            $input.trigger('input', extraParameters).trigger('change', extraParameters).trigger('keydown', extraParameters).trigger('keyup', extraParameters).trigger('blur', extraParameters);
            if ($input.attr('data-inputmask-mask')) {
                setTimeout(function() {
                    $input.inputmask('remove').inputmask();
                });
            }
        }
    }

    function backupValueAndRequired(input) {
        var $input = $(input);
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        if ($input.prop('required') && !$input.hasData('webform-required')) {
            $input.data('webform-required', true);
        }
        if (!$input.hasData('webform-value')) {
            if (type === 'checkbox' || type === 'radio') {
                $input.data('webform-value', $input.prop('checked'));
            } else if (tag === 'select') {
                var values = [];
                $input.find('option:selected').each(function(i, option) {
                    values[i] = option.value;
                });
                $input.data('webform-value', values);
            } else if (type !== 'submit' && type !== 'button') {
                $input.data('webform-value', input.value);
            }
        }
    }

    function restoreValueAndRequired(input) {
        var $input = $(input);
        var value = $input.data('webform-value');
        if (typeof value !== 'undefined') {
            var type = input.type;
            var tag = input.tagName.toLowerCase();
            if (type === 'checkbox' || type === 'radio') {
                $input.prop('checked', value);
            } else if (tag === 'select') {
                $.each(value, function(i, option_value) {
                    $input.find("option[value='" + option_value + "']").prop('selected', true);
                });
            } else if (type !== 'submit' && type !== 'button') {
                input.value = value;
            }
            $input.removeData('webform-value');
        }
        var required = $input.data('webform-required');
        if (typeof required !== 'undefined') {
            if (required) {
                $input.prop('required', true);
            }
            $input.removeData('webform-required');
        }
    }

    function clearValueAndRequired(input) {
        var $input = $(input);
        if ($input.closest('[data-webform-states-no-clear]').length) {
            return;
        }
        var type = input.type;
        var tag = input.tagName.toLowerCase();
        if (type === 'checkbox' || type === 'radio') {
            $input.prop('checked', false);
        } else if (tag === 'select') {
            if ($input.find('option[value=""]').length) {
                $input.val('');
            } else {
                input.selectedIndex = -1;
            }
        } else if (type !== 'submit' && type !== 'button') {
            input.value = (type === 'color') ? '#000000' : '';
        }
        $input.prop('required', false);
    }

    function toggleRequired($input, required) {
        if (required) {
            $input.attr({
                'required': 'required',
                'aria-required': 'true'
            });
        } else {
            $input.removeAttr('required aria-required');
        }
    }

    function copyRequireMessage($source, $destination) {
        if ($source.attr('data-msg-required')) {
            $destination.attr('data-msg-required', $source.attr('data-msg-required'));
        }
    }
})(jQuery, Drupal);;
(function($, Drupal) {
    'use strict';
    Drupal.behaviors.webformRemoveFormSingleSubmit = {
        attach: function attach() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                $form.removeAttr('data-drupal-form-submit-last');
            }
            $('body').once('webform-single-submit').on('submit.singleSubmit', 'form.webform-remove-single-submit', onFormSubmit);
        }
    };
    Drupal.behaviors.webformDisableAutoSubmit = {
        attach: function(context) {
            $('.js-webform-disable-autosubmit input').not(':button, :submit, :reset, :image, :file').once('webform-disable-autosubmit').on('keyup keypress', function(e) {
                if (e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });
        }
    };
    Drupal.behaviors.webformRequiredError = {
        attach: function(context) {
            $(context).find(':input[data-webform-required-error], :input[data-webform-pattern-error]').once('webform-required-error').on('invalid', function() {
                this.setCustomValidity('');
                if (this.valid) {
                    return;
                }
                if (this.validity.patternMismatch && $(this).attr('data-webform-pattern-error')) {
                    this.setCustomValidity($(this).attr('data-webform-pattern-error'));
                } else if (this.validity.valueMissing && $(this).attr('data-webform-required-error')) {
                    this.setCustomValidity($(this).attr('data-webform-required-error'));
                }
            }).on('input change', function() {
                var name = $(this).attr('name');
                $(this.form).find(':input[name="' + name + '"]').each(function() {
                    this.setCustomValidity('');
                });
            });
        }
    };
    $(document).on('state:required', function(e) {
        $(e.target).filter('[data-webform-required-error]').each(function() {
            this.setCustomValidity('');
        });
    });
})(jQuery, Drupal);;
(function($, Drupal) {
    'use strict';
    var hasLocalStorage = (function() {
        try {
            localStorage.setItem('webform', 'webform');
            localStorage.removeItem('webform');
            return true;
        } catch (e) {
            return false;
        }
    }());
    Drupal.behaviors.webformDetailsSave = {
        attach: function(context) {
            if (!hasLocalStorage) {
                return;
            }
            $('details > summary', context).once('webform-details-summary-save').on('click', function() {
                var $details = $(this).parent();
                if ($details[0].hasAttribute('data-webform-details-nosave')) {
                    return;
                }
                var name = Drupal.webformDetailsSaveGetName($details);
                if (!name) {
                    return;
                }
                var open = ($details.attr('open') !== 'open') ? '1' : '0';
                localStorage.setItem(name, open);
            });
            $('details', context).once('webform-details-save').each(function() {
                var $details = $(this);
                var name = Drupal.webformDetailsSaveGetName($details);
                if (!name) {
                    return;
                }
                var open = localStorage.getItem(name);
                if (open === null) {
                    return;
                }
                if (open === '1') {
                    $details.attr('open', 'open');
                } else {
                    $details.removeAttr('open');
                }
            });
        }
    };
    Drupal.webformDetailsSaveGetName = function($details) {
        if (!hasLocalStorage) {
            return '';
        }
        if ($details.hasClass('vertical-tabs__pane')) {
            return '';
        }
        var webformId = $details.attr('data-webform-element-id');
        if (webformId) {
            return 'Drupal.webform.' + webformId.replace('--', '.');
        }
        var detailsId = $details.attr('id');
        if (!detailsId) {
            return '';
        }
        var $form = $details.parents('form');
        if (!$form.length || !$form.attr('id')) {
            return '';
        }
        var formId = $form.attr('id');
        if (!formId) {
            return '';
        }
        formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
        detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
        return 'Drupal.webform.' + formId + '.' + detailsId;
    };
})(jQuery, Drupal);;