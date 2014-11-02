(function(e) {
	function L(a, b) {
		e(a.currentImg.attr("data-text-id")).css("display", "block");
		var h = e(a.currentImg.attr("data-text-id")).children(), d = 0;
		currentText_arr = [];
		h.each(function() {
			currentText_arr[d] = e(this);
			var g = currentText_arr[d].attr("data-initial-left"), h = currentText_arr[d].attr("data-initial-top");
			b.responsive && ( g = parseInt(g / (b.origWidth / b.width), 10), h = parseInt(h / (b.origWidth / b.width), 10));
			currentText_arr[d].css({
				left : g + "px",
				top : h + "px",
				opacity : parseInt(currentText_arr[d].attr("data-fade-start"), 10) / 100
			});
			var k = currentText_arr[d];
			setTimeout(function() {
				b.responsive && ( newCss = "", -1 != k.css("font-size").lastIndexOf("px") ? ( fontSize = k.css("font-size").substr(0, k.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != k.css("font-size").lastIndexOf("em") && ( fontSize = k.css("font-size").substr(0, k.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != k.css("line-height").lastIndexOf("px") ? ( lineHeight = k.css("line-height").substr(0, k.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != k.css("line-height").lastIndexOf("em") && ( lineHeight = k.css("line-height").substr(0, k.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), k.wrapInner('<div class="newFS" style="' + newCss + '" />'));
				var g = k.attr("data-final-left"), h = k.attr("data-final-top");
				b.responsive && ( g = parseInt(g / (b.origWidth / b.width), 10), h = parseInt(h / (b.origWidth / b.width), 10));
				var f = 1;
				!0 == a.isVideoPlaying && ( f = 0);
				k.animate({
					opacity : f,
					left : g + "px",
					top : h + "px"
				}, 1E3 * k.attr("data-duration"), function() {
					!0 == a.isVideoPlaying && e(a.currentImg.attr("data-text-id")).children().css("opacity", 0);
				});
			}, 1E3 * currentText_arr[d].attr("data-delay"));
			d++;
		});
	}

	function M(a, b) {
		nowx = (new Date).getTime();
		!a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke());
	}

	function N(a, b, h) {
		var d = E();
		e(".stripe", a).remove();
		e(".block", a).remove();
		F = B = Math.round(b.width / b.numberOfStripes);
		for (var g = !0, t = 0; t < b.numberOfStripes; t++)
			t == b.numberOfStripes - 1 && ( F = a.width() - B * (b.numberOfStripes - 1)), !b.responsive || -1 == d || -1 != d && 9 <= d ? -1 != z.indexOf("ipad") || -1 != z.indexOf("iphone") || -1 != z.indexOf("ipod") || -1 != z.indexOf("webos") ? g = !1 : a.append(e('<div class="stripe"></div>').css({
				opacity : "0",
				left : B * t + "px",
				width : F + "px",
				height : "0px",
				background : 'url("' + h.current_imgInside.attr("src") + '") ' + -1 * t * B + "px 0%"
			})) : g = !1, g || ( mleft = -1 * B * t, a.append(e('<div class="stripe"><img src="' + h.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>').css({
				opacity : "0",
				left : B * t + "px",
				width : F + "px",
				height : "0px"
			})));
		b.responsive && g && (-1 == d || -1 != d && 9 <= d) && e(".stripe", a).css({
			"-webkit-background-size" : b.width + "px " + b.height + "px",
			"-moz-background-size" : b.width + "px " + b.height + "px",
			"-o-background-size" : b.width + "px " + b.height + "px",
			"-ms-background-size" : b.width + "px " + b.height + "px",
			"background-size" : b.width + "px " + b.height + "px"
		});
	}

	function K(a, b, e, d, g) {
		var t = a.width(), k = a.height();
		a.css({
			width : "0"
		});
		a.css({
			height : "0"
		});
		b == d.numberOfRows - 1 && e == d.numberOfColumns - 1 ? setTimeout(function() {
			a.animate({
				opacity : "1.0",
				width : t,
				height : k
			}, 1E3 * d.effectDuration / 3, "", function() {
				g.trigger("effectComplete");
			});
		}, u) : setTimeout(function() {
			a.animate({
				opacity : "1.0",
				width : t,
				height : k
			}, 1E3 * d.effectDuration / 3);
		}, u);
		u += H;
	}

	function G(a, b, e, d, g, t, k, n) {
		C = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
		1 === a || -1 === a ? (n.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
			opacity : 1,
			left : "+=" + a * n.carouselStep
		}, 500, "easeOutCubic", function() {
			O(n, b, e, d, g, t, k);
			n.isCarouselScrolling = !1;
		})) : C != -1 * Math.floor(n.current_img_no / g.numberOfThumbsPerScreen) * n.carouselStep && (n.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
			opacity : 1,
			left : -1 * Math.floor(n.current_img_no / g.numberOfThumbsPerScreen) * n.carouselStep
		}, 500, "easeOutCubic", function() {
			O(n, b, e, d, g, t, k);
			n.isCarouselScrolling = !1;
		}));
	}

	function O(a, b, e, d, g, t, k) {
		C = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
		0 > C ? e.hasClass("carouselLeftNavDisabled") && e.removeClass("carouselLeftNavDisabled") : e.addClass("carouselLeftNavDisabled");
		Math.abs(C - a.carouselStep) < (k.width() + a.thumbMarginLeft) * t ? d.hasClass("carouselRightNavDisabled") && d.removeClass("carouselRightNavDisabled") : d.addClass("carouselRightNavDisabled");
	}

	function D(a, b, h, d, g, t, k, n, w, f, m, r) {
		var s = !0;
		if (!f.loop && b.current_img_no + a >= m || !f.loop && 0 > b.current_img_no + a)
			s = !1;
		if (s) {
			e(".newFS", d).contents().unwrap();
			b.arcInitialTime = (new Date).getTime();
			b.timeElapsed = 0;
			f.showCircleTimer && (b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height), b.ctx.beginPath(), b.ctx.globalAlpha = f.behindCircleAlpha / 100, b.ctx.arc(f.circleRadius + 2 * f.circleLineWidth, f.circleRadius + 2 * f.circleLineWidth, f.circleRadius, 0, 2 * Math.PI, !1), b.ctx.lineWidth = f.circleLineWidth + 2, b.ctx.strokeStyle = f.behindCircleColor, b.ctx.stroke(), b.ctx.beginPath(), b.ctx.globalAlpha = f.circleAlpha / 100, b.ctx.arc(f.circleRadius + 2 * f.circleLineWidth, f.circleRadius + 2 * f.circleLineWidth, f.circleRadius, 0, 0, !1), b.ctx.lineWidth = f.circleLineWidth, b.ctx.strokeStyle = f.circleColor, b.ctx.stroke());
			e(b.currentImg.attr("data-text-id")).css("display", "none");
			e(g[b.current_img_no]).removeClass("thumbsHolder_ThumbON");
			f.randomizeImages && !b.bottomNavClicked ? ( a = Math.floor(Math.random() * m), b.current_img_no = b.current_img_no === a ? Math.floor(Math.random() * m) : a) : b.current_img_no = b.current_img_no + a >= m ? 0 : 0 > b.current_img_no + a ? m - 1 : b.current_img_no + a;
			b.bottomNavClicked = !1;
			e(g[b.current_img_no]).addClass("thumbsHolder_ThumbON");
			C = k.css("left").substr(0, k.css("left").lastIndexOf("px"));
			0 === b.current_img_no || b.current_img_no === m - 1 ? G(0, k, n, w, f, m, r, b) : G(1001, k, n, w, f, m, r, b);
			b.currentImg = e(t[b.current_img_no]);
			b.current_imgInside = b.currentImg.find("img:first");
			b.currentImg.attr("data-transition") ? ( h = b.currentImg.attr("data-transition"), "random" == h && ( h = I[Math.floor(Math.random() * I.length)])) : h = "random" != f.defaultEffect ? f.defaultEffect : I[Math.floor(Math.random() * I.length)];
			b.effectIsRunning = !0;
			if ("fade" == h || "slideFromLeft" == h || "slideFromRight" == h || "slideFromTop" == h || "slideFromBottom" == h)
				N(d, f, b), g = e(".stripe:first", d), "fade" == h && (g.css({
					top : "0px",
					height : "100%",
					width : d.width() + "px"
				}), g.animate({
					opacity : "1.0"
				}, 2E3 * f.effectDuration, "", function() {
					d.trigger("effectComplete");
				})), "slideFromLeft" == h && (g.css({
					top : "0px",
					height : "100%",
					width : "0"
				}), g.animate({
					opacity : "1.0",
					width : d.width() + "px"
				}, 1E3 * f.effectDuration, "", function() {
					d.trigger("effectComplete");
				})), "slideFromRight" == h && (g.css({
					top : "0px",
					height : "100%",
					width : "0",
					left : d.width() + 5 + "px"
				}), g.animate({
					opacity : "1.0",
					left : "0",
					width : d.width() + "px"
				}, 1E3 * f.effectDuration, "", function() {
					d.trigger("effectComplete");
				})), "slideFromTop" == h && (g.css({
					top : "0px",
					height : "0",
					width : d.width() + "px"
				}), g.animate({
					opacity : "1.0",
					height : d.height() + "px"
				}, 1E3 * f.effectDuration, "", function() {
					d.trigger("effectComplete");
				})), "slideFromBottom" == h && (g.css({
					top : "0px",
					height : "0",
					width : d.width() + "px",
					top : d.height() + "px"
				}), g.animate({
					opacity : "1.0",
					top : 0,
					height : d.height() + "px"
				}, 1E3 * f.effectDuration, "", function() {
					d.trigger("effectComplete");
				}));
			0 <= h.indexOf("Stripes") && (N(d, f, b), g = 0 <= h.indexOf("Reverse") ? e(".stripe", d).myReverse() : e(".stripe", d), u = 100, i = 0, g.each(function() {
				var a = e(this);
				("topBottomDroppingStripes" == h || "topBottomDroppingReverseStripes" == h) && a.css({
					top : "0px"
				});
				("bottomTopDroppingStripes" == h || "bottomTopDroppingReverseStripes" == h) && a.css({
					bottom : "0px"
				});
				("leftRightFadingStripes" == h || "leftRightFadingReverseStripes" == h) && a.css({
					top : "0px",
					height : "100%",
					width : "0"
				});
				"asynchronousDroppingStripes" == h && (i % 2 ? a.css({
					top : "0px"
				}) : a.css({
					bottom : "0px"
				}));
				if ("leftRightFadingStripes" == h || "leftRightFadingReverseStripes" == h) {
					var b = B;
					if ("leftRightFadingStripes" == h && i == f.numberOfStripes - 1 || "leftRightFadingReverseStripes" == h && 0 == i)
						b = F;
					i == f.numberOfStripes - 1 ? setTimeout(function() {
						a.animate({
							width : b + "px",
							opacity : "1.0"
						}, 800 * f.effectDuration, "", function() {
							d.trigger("effectComplete");
						});
					}, u) : setTimeout(function() {
						a.animate({
							width : b + "px",
							opacity : "1.0"
						}, 800 * f.effectDuration);
					}, u);
				} else
					i == f.numberOfStripes - 1 ? setTimeout(function() {
						a.animate({
							height : "100%",
							opacity : "1.0"
						}, 1E3 * f.effectDuration, "", function() {
							d.trigger("effectComplete");
						});
					}, u) : setTimeout(function() {
						a.animate({
							height : "100%",
							opacity : "1.0"
						}, 1E3 * f.effectDuration);
					}, u);
				u += Q;
				i++;
			}));
			if (0 <= h.indexOf("Blocks")) {
				g = E();
				e(".stripe", d).remove();
				e(".block", d).remove();
				t = Math.round(f.width / f.numberOfColumns);
				k = Math.round(f.height / f.numberOfRows);
				n = t;
				w = k;
				r = m = 0;
				a = !0;
				for ( s = 0; s < f.numberOfRows; s++)
					for (var J = 0; J < f.numberOfColumns; J++)
						m = t * J, r = k * s, n = J == f.numberOfColumns - 1 ? f.width - t * (f.numberOfColumns - 1) : t, w = s == f.numberOfRows - 1 ? f.height - k * (f.numberOfRows - 1) : k, !f.responsive || -1 == g || -1 != g && 9 <= g ? -1 != z.indexOf("ipad") || -1 != z.indexOf("iphone") || -1 != z.indexOf("ipod") || -1 != z.indexOf("webos") ? a = !1 : d.append(e('<div class="block"></div>').css({
							opacity : "0",
							left : m + "px",
							top : r + "px",
							width : n + "px",
							height : w + "px",
							background : 'url("' + b.current_imgInside.attr("src") + '") -' + m + "px -" + r + "px"
						})) : a = !1, a || ( mleft = -1 * m, mtop = -1 * r, d.append(e('<div class="block"><img src="' + b.current_imgInside.attr("src") + '" width="' + f.width + '" height="' + f.height + '" style="margin-left:' + mleft + "px; margin-top:" + mtop + 'px;"></div>').css({
							opacity : "0",
							left : m + "px",
							top : r + "px",
							width : n + "px",
							height : w + "px"
						})));
				f.responsive && a && (-1 == g || -1 != g && 9 <= g) && e(".block", d).css({
					"-webkit-background-size" : f.width + "px " + f.height + "px",
					"-moz-background-size" : f.width + "px " + f.height + "px",
					"-o-background-size" : f.width + "px " + f.height + "px",
					"-ms-background-size" : f.width + "px " + f.height + "px",
					"background-size" : f.width + "px " + f.height + "px"
				});
				if (0 <= h.indexOf("Reverse"))
					var p = e(".block", d).myReverse();
				else if ("randomBlocks" == h) {
					b = e(".block", d);
					var c;
					for ( g = b.length; g; p = parseInt(Math.random() * g, 10), c = b[--g], b[g] = b[p], b[p] = c);
					p = b;
				} else
					p = e(".block", d);
				u = 100;
				if ("randomBlocks" == h) {
					i = 0;
					var y = f.numberOfRows * f.numberOfColumns;
					p.each(function() {
						var a = e(this), b = a.width(), c = a.height();
						a.css({
							width : "0"
						});
						a.css({
							height : "0"
						});
						i == y - 1 ? setTimeout(function() {
							a.animate({
								opacity : "1.0",
								width : b,
								height : c
							}, 1E3 * f.effectDuration / 3, "", function() {
								d.trigger("effectComplete");
							});
						}, u) : setTimeout(function() {
							a.animate({
								opacity : "1.0",
								width : b,
								height : c
							}, 1E3 * f.effectDuration / 3);
						}, u);
						u += H;
						i++;
					});
				} else {
					var l = 0, v = 0, x = [];
					x[l] = [];
					p.each(function() {
						x[l][v] = e(this);
						v++;
						v == f.numberOfColumns && (l++, v = 0, x[l] = []);
					});
					v = l = 0;
					u = 100;
					p = e(x[l][v]);
					for (K(p, 0, 0, f, d); l < f.numberOfRows - 1 || v < f.numberOfColumns - 1; ) {
						l < f.numberOfRows - 1 && l++;
						v < f.numberOfColumns - 1 && v++;
						i = l;
						v < l && f.numberOfRows > f.numberOfColumns && ( i = l - v);
						j = 0;
						for (l < v && f.numberOfRows < f.numberOfColumns && ( j = v - l); 0 <= i && j <= v; )
							p = e(x[i--][j++]), K(p, i, j, f, d);
					}
					u = f.numberOfRows < f.numberOfColumns ? u - (f.numberOfRows - 1) * H : u - (f.numberOfColumns - 1) * H;
					limit_i = 0;
					for ( limit_j = v - l; limit_i < l && limit_j < v; ) {
						i = l + 1;
						for ( j = limit_j; i > limit_i && j < v; )
							i -= 1, j += 1, p = e(x[i][j]), K(p, i, j, f, d);
						limit_i++;
						limit_j++;
					}
				}
			}
		}
	}

	function P(a, b, h, d, g, t, k, n, w, f, m) {
		"opportune" != b.skin && (m.css({
			top : b.height + "px",
			"margin-top" : parseInt(b.thumbsWrapperMarginTop / (b.origWidth / b.width), 10) + "px",
			height : parseInt(b.origthumbsHolderWrapperH / (b.origWidth / b.width), 10) + "px"
		}), bgTopCorrection = 0, 1 == b.origWidth / b.width && 0 < b.thumbsReflection && ( bgTopCorrection = -7), k.css("background-position", "0px " + ((m.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), n.css("background-position", "0px " + ((m.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), f.css("width", b.width - k.width() - n.width()), b.origWidthThumbsHolderVisibleWrapper = b.origWidth - k.width() - n.width(), g.css({
			width : parseInt(b.origThumbW / (b.origWidthThumbsHolderVisibleWrapper / f.width()), 10) + "px",
			height : parseInt(b.origThumbH / (b.origWidthThumbsHolderVisibleWrapper / f.width()), 10) + "px"
		}), b.numberOfThumbsPerScreen >= h && f.css("left", parseInt((m.width() - (w.width() + a.thumbMarginLeft) * h) / 2, 10) + parseInt(a.thumbMarginLeft / 2, 10) + "px"), h = e(".thumbsHolder_ThumbOFF", d).find("img:first"), 0 < b.thumbsReflection && h.unreflect(), h.css({
			width : g.width() + "px",
			height : g.height() + "px",
			"margin-top" : parseInt((m.height() - g.height()) / 2, 10) + bgTopCorrection + "px"
		}), 1 == b.origWidth / b.width && 0 < b.thumbsReflection && h.reflect({
			opacity : b.thumbsReflection / 100
		}), a.thumbMarginLeft = Math.floor((m.width() - k.width() - n.width() - w.width() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), thumb_i = -1, t.children().each(function() {
			thumb_i++;
			theThumb = e(this);
			theThumb.css("background-position", "center " + b.thumbsOnMarginTop / (b.origWidth / b.width) + "px");
			0 >= thumb_i ? theThumb.css("margin-left", Math.floor((m.width() - k.width() - n.width() - (a.thumbMarginLeft + theThumb.width()) * (b.numberOfThumbsPerScreen - 1) - theThumb.width()) / 2) + "px") : theThumb.css("margin-left", a.thumbMarginLeft + "px");
		}), a.carouselStep = (w.width() + a.thumbMarginLeft) * b.numberOfThumbsPerScreen);
	}

	function E() {
		var a = -1;
		"Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && ( a = parseFloat(RegExp.$1));
		return parseInt(a, 10);
	}

	var I = "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks randomBlocks".split(" "), B, F, u = 100, Q = 50, H = 25, A = !1, C = 0, z = navigator.userAgent.toLowerCase();
	e.fn.allinone_thumbnailsBanner = function(a) {
		a = e.extend({}, e.fn.allinone_thumbnailsBanner.defaults, a);
		return this.each(function() {
			var b = e(this);
			responsiveWidth = b.parent().width();
			responsiveHeight = b.parent().height();
			a.responsiveRelativeToBrowser && ( responsiveWidth = e(window).width(), responsiveHeight = e(window).height());
			a.origWidth = a.width;
			a.width100Proc && (a.width = responsiveWidth);
			a.origHeight = a.height;
			a.height100Proc && (a.height = responsiveHeight);
			if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc))
				a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
			a.width = parseInt(a.width, 10);
			a.height = parseInt(a.height, 10);
			a.enableTouchScreen && a.responsive && (a.width -= 1);
			b.css("display", "block");
			var h = e("<div></div>").addClass("allinone_thumbnailsBanner").addClass(a.skin), d = e('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="thumbsHolderWrapper" id="custom"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <canvas class="mycanvas"></canvas>');
			b.wrap(h);
			b.after(d);
			a.showAllControllers || t.css("display", "none");
			var g = b.parent(".allinone_thumbnailsBanner"), t = e(".bannerControls", g), k = e(".leftNav", g), n = e(".rightNav", g);
			k.css("display", "none");
			n.css("display", "none");
			a.showNavArrows && a.showOnInitNavArrows && (k.css("display", "block"), n.css("display", "block"));
			var w = e(".thumbsHolderWrapper", g), f = e(".thumbsHolderVisibleWrapper", g), m = e(".thumbsHolder", g), r, s;
			r = e('<div class="carouselLeftNav"></div>');
			s = e('<div class="carouselRightNav"></div>');
			w.append(r);
			w.append(s);
			s.css("right", "0");
			m.css("width", r.width() + "px");
			(!a.showThumbs || !a.showOnInitThumbs) && w.css("display", "none");
			var h = E(), u = a.defaultEffect, p = 0, c = {
				current_img_no : 0,
				currentImg : 0,
				current_imgInside : "",
				windowWidth : 0,
				carouselStep : 0,
				thumbMarginLeft : 0,
				bottomNavClicked : !1,
				effectIsRunning : !1,
				mouseOverBanner : !1,
				timeoutID : "",
				intervalID : "",
				arcInitialTime : (new Date).getTime(),
				timeElapsed : 0,
				windowWidth : 0,
				canvas : "",
				ctx : "",
				bannerRatio : a.origWidth / a.origHeight
			};
			c.canvas = e(".mycanvas",g)[0];
			c.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
			c.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth;
			-1 != h && 9 > h && (a.showCircleTimer = !1);
			a.showCircleTimer && (c.ctx = c.canvas.getContext("2d"));
			g.width(a.width);
			g.height(a.height);
			t.css("margin-top", parseInt((a.height - k.height()) / 2, 10) + "px");
			var y = b.find("ul:first").children(), l, v = 0;
			y.each(function() {
				c.currentImg = e(this);
				c.currentImg.is("li") || (c.currentImg = c.currentImg.find("li:first"));
				if (c.currentImg.is("li")) {
					c.currentImg.css("display", "none");
					p++;
					var b = e(y[p - 1]).attr("data-bottom-thumb");
					l = e('<div class="thumbsHolder_ThumbOFF" rel="' + (p - 1) + '"><img src="' + b + '"></div>');
					m.append(l);
					0 == a.origThumbW && (0 == a.numberOfThumbsPerScreen && (a.numberOfThumbsPerScreen = Math.floor((a.origWidth - r.width() - s.width()) / l.width())), a.origThumbW = l.width(), a.origThumbH = l.height(), a.origthumbsHolderWrapperH = w.height(), c.thumbMarginLeft = Math.floor((a.origWidth - r.width() - s.width() - l.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1)));
					m.css("width", m.width() + c.thumbMarginLeft + l.width() + "px");
					1 >= p ? l.css("margin-left", Math.floor((w.width() - r.width() - s.width() - (c.thumbMarginLeft + l.width()) * (a.numberOfThumbsPerScreen - 1) - l.width()) / 2) + "px") : l.css("margin-left", c.thumbMarginLeft + "px");
					v = parseInt((w.height() - parseInt(l.css("height").substring(0, l.css("height").length - 2))) / 2, 10);
				}
			});
			f.css("width", f.width() - r.width() - s.width());
			f.css("left", r.width());
			c.carouselStep = (l.width() + c.thumbMarginLeft) * a.numberOfThumbsPerScreen;
			0 === Math.floor(c.current_img_no / a.numberOfThumbsPerScreen) && r.addClass("carouselLeftNavDisabled");
			Math.floor(c.current_img_no / a.numberOfThumbsPerScreen) == Math.floor(p / a.numberOfThumbsPerScreen) && s.addClass("carouselRightNavDisabled");
			0 < a.thumbsReflection && (v -= 7);
			d = e(".thumbsHolder_ThumbOFF", g).find("img:first");
			d.css("margin-top", v + "px");
			f.css({
				width : a.origWidth - r.width() - s.width(),
				left : r.width() + "px"
			});
			c.carouselStep = (l.width() + c.thumbMarginLeft) * a.numberOfThumbsPerScreen;
			r.addClass("carouselLeftNavDisabled");
			a.numberOfThumbsPerScreen >= p && (s.addClass("carouselRightNavDisabled"), r.css("display", "none"), s.css("display", "none"), f.css("left", parseInt((w.width() - (l.width() + c.thumbMarginLeft) * p) / 2, 10) + "px"));
			w.css("top", a.height + "px");
			d = e(".thumbsHolder_ThumbOFF", g).find("img:first");
			d.css("margin-top", v + "px");
			a.origthumbsHolder_MarginTop = v;
			var x = e(".thumbsHolder_ThumbOFF", g);
			P(c, a, p, g, x, m, r, s, l, f, w);
			c.current_img_no = a.firstImg;
			a.firstImg > p && (c.current_img_no = p);
			0 > a.firstImg && (c.current_img_no = 0);
			a.randomizeImages && (c.current_img_no = Math.floor(Math.random() * p));
			if (c.current_img_no >= a.numberOfThumbsPerScreen)
				for ( q = 0; q < Math.floor(c.current_img_no / a.numberOfThumbsPerScreen); q++)
					G(-1, m, r, s, a, p, l, c);
			c.currentImg = e(y[c.current_img_no]);
			c.current_imgInside = c.currentImg.find("img:first");
			-1 != z.indexOf("ipad") || -1 != z.indexOf("iphone") || -1 != z.indexOf("ipod") || -1 != z.indexOf("webos") || -1 != h && 7 >= h ? g.append('<img id="curBgImgIos" src="' + c.current_imgInside.attr("src") + '" width="' + a.width + '" height="' + a.height + '">') : (g.css("background", 'url("' + c.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == h || -1 != h && 9 <= h ? g.css({
				"-webkit-background-size" : a.width + "px " + a.height + "px",
				"-moz-background-size" : a.width + "px " + a.height + "px",
				"-o-background-size" : a.width + "px " + a.height + "px",
				"-ms-background-size" : a.width + "px " + a.height + "px",
				"background-size" : a.width + "px " + a.height + "px"
			}) : 8 == h && g.css({
				filter : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c.current_imgInside.attr("src") + "',sizingMethod='scale')"
			})));
			a.enableTouchScreen && ( h = Math.floor(1E5 * Math.random()), g.wrap('<div id="bannerWithThumbnailsParent_' + h + '" style="" />'), e("#bannerWithThumbnailsParent_" + h).width(a.width + 1), e("#bannerWithThumbnailsParent_" + h).height(a.height), g.css({
				cursor : "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move",
				left : "0px",
				position : "absolute"
			}), rightVal = parseInt(n.css("right").substring(0, n.css("right").length - 2), 10), g.mousedown(function() {
				rightVal = parseInt(n.css("right").substring(0, n.css("right").length - 2), 10);
				0 > rightVal && !A && (n.css("visibility", "hidden"), k.css("visibility", "hidden"), n.css("right", "0"));
			}), g.mouseup(function() {
				A = !1;
				0 > rightVal && (n.css("right", rightVal + "px"), n.css("visibility", "visible"), k.css("visibility", "visible"));
			}), g.draggable({
				axis : "x",
				containment : "parent",
				start : function() {
					origLeft = e(this).css("left");
				},
				stop : function() {
					c.effectIsRunning || ( finalLeft = e(this).css("left"), direction = 1, origLeft < finalLeft && ( direction = -1), D(direction, c, u, g, x, y, m, r, s, a, p, l));
					0 > rightVal && (n.css("right", rightVal + "px"), n.css("visibility", "visible"), k.css("visibility", "visible"));
					e(this).css("left", "0px");
				}
			}));
			L(c, a, b, t);
			g.bind("effectComplete", function() {
				var f = E();
				c.effectIsRunning = !1;
				-1 != z.indexOf("ipad") || -1 != z.indexOf("iphone") || -1 != z.indexOf("ipod") || -1 != z.indexOf("webos") || -1 != f && 7 >= f ? (e("#curBgImgIos", g).attr("src", c.current_imgInside.attr("src")), e("#curBgImgIos", g).width(a.width), e("#curBgImgIos", g).height(a.height)) : (g.css("background", 'url("' + c.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == f || -1 != f && 9 <= f ? g.css({
					"-webkit-background-size" : a.width + "px " + a.height + "px",
					"-moz-background-size" : a.width + "px " + a.height + "px",
					"-o-background-size" : a.width + "px " + a.height + "px",
					"-ms-background-size" : a.width + "px " + a.height + "px",
					"background-size" : a.width + "px " + a.height + "px"
				}) : 8 == f && g.css({
					filter : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c.current_imgInside.attr("src") + "',sizingMethod='scale')"
				})));
				c.arcInitialTime = (new Date).getTime();
				c.timeElapsed = 0;
				a.showCircleTimer && (clearInterval(c.intervalID), c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = a.behindCircleAlpha / 100, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 2 * Math.PI, !1), c.ctx.lineWidth = a.circleLineWidth + 2, c.ctx.strokeStyle = a.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = a.circleAlpha / 100, c.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), c.ctx.lineWidth = a.circleLineWidth, c.ctx.strokeStyle = a.circleColor, c.ctx.stroke(), c.intervalID = setInterval(function() {
					M(c, a);
				}, 125));
				L(c, a, b, t);
				0 < a.autoPlay && (1 < p && !c.mouseOverBanner) && (clearTimeout(c.timeoutID), c.timeoutID = setTimeout(function() {
					D(1, c, u, g, x, y, m, r, s, a, p, l);
				}, 1E3 * a.autoPlay));
			});
			g.mouseenter(function() {
				c.mouseOverBanner = !0;
				clearTimeout(c.timeoutID);
				nowx = (new Date).getTime();
				c.timeElapsed += nowx - c.arcInitialTime;
				a.autoHideNavArrows && a.showNavArrows && (k.css("display", "block"), n.css("display", "block"));
				a.autoHideThumbs && a.showThumbs && w.css("display", "block");
			});
			g.mouseleave(function() {
				c.mouseOverBanner = !1;
				nowx = (new Date).getTime();
				a.autoHideNavArrows && a.showNavArrows && (k.css("display", "none"), n.css("display", "none"));
				a.autoHideThumbs && a.showThumbs && w.css("display", "none");
				if (0 < a.autoPlay && 1 < p) {
					clearTimeout(c.timeoutID);
					c.arcInitialTime = (new Date).getTime();
					var b = parseInt(1E3 * a.autoPlay - (c.timeElapsed + nowx - c.arcInitialTime), 10);
					c.timeoutID = setTimeout(function() {
						D(1, c, u, g, x, y, m, r, s, a, p, l);
					}, b);
				}
			});
			g.click(function() {
				if (
				void 0 != e(y[c.current_img_no]).attr("data-link") && "" != e(y[c.current_img_no]).attr("data-link") && !c.effectIsRunning && !A) {
					var b = a.target;
					void 0 != e(y[c.current_img_no]).attr("data-target") && "" != e(y[c.current_img_no]).attr("data-target") && ( b = e(y[c.current_img_no]).attr("data-target"));
					"_blank" == b ? window.open(e(y[c.current_img_no]).attr("data-link")) : window.location = e(y[c.current_img_no]).attr("data-link");
				}
			});
			k.mousedown(function() {
				A = !0;
				c.effectIsRunning || (clearTimeout(c.timeoutID), D(-1, c, u, g, x, y, m, r, s, a, p, l));
			});
			k.mouseup(function() {
				A = !1;
			});
			n.mousedown(function() {
				A = !0;
				c.effectIsRunning || (clearTimeout(c.timeoutID), D(1, c, u, g, x, y, m, r, s, a, p, l));
			});
			n.mouseup(function() {
				A = !1;
			});
			var B = !1;
			e(window).resize(function() {
				var d = E();
				doResizeNow = !0;
				-1 != navigator.userAgent.indexOf("Android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = e(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = e(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = e(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && e(window).width() > a.windowOrientationScreenSize0) && ( doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && e(window).height() > a.windowOrientationScreenSize90) && ( doResizeNow = !1), a.windowOrientationScreenSize_90 && (-90 == window.orientation && e(window).height() > a.windowOrientationScreenSize_90) && ( doResizeNow = !1), 0 == c.windowWidth && ( doResizeNow = !1, c.windowWidth = e(window).width()));
				-1 != d && (9 == d && 0 == c.windowWidth) && ( doResizeNow = !1);
				c.windowWidth == e(window).width() ? ( doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : c.windowWidth = e(window).width();
				a.responsive && doResizeNow && (!1 !== B && clearTimeout(B), B = setTimeout(function() {
					var d = a, h = p, n = t, v = x, B = l, A = E(), C = e("body").css("overflow");
					e("body").css("overflow", "hidden");
					d.enableTouchScreen ? ( responsiveWidth = b.parent().parent().parent().width(), responsiveHeight = b.parent().parent().parent().height()) : ( responsiveWidth = b.parent().parent().width(), responsiveHeight = b.parent().parent().height());
					d.responsiveRelativeToBrowser && ( responsiveWidth = e(window).width(), responsiveHeight = e(window).height());
					d.width100Proc && (d.width = responsiveWidth);
					d.height100Proc && (d.height = responsiveHeight);
					if (d.origWidth != responsiveWidth || d.width100Proc) {
						d.origWidth > responsiveWidth || d.width100Proc ? d.width = responsiveWidth : d.width100Proc || (d.width = d.origWidth);
						d.height100Proc || (d.height = d.width / c.bannerRatio);
						d.width = parseInt(d.width, 10);
						d.height = parseInt(d.height, 10);
						d.enableTouchScreen && d.responsive && (d.width -= 1);
						g.width(d.width);
						g.height(d.height);
						-1 != z.indexOf("ipad") || -1 != z.indexOf("iphone") || -1 != z.indexOf("ipod") || -1 != z.indexOf("webos") || -1 != A && 7 >= A ? (e("#curBgImgIos", g).attr("src", c.current_imgInside.attr("src")), e("#curBgImgIos", g).width(d.width), e("#curBgImgIos", g).height(d.height)) : -1 == A || -1 != A && 9 <= A ? g.css({
							"-webkit-background-size" : d.width + "px " + d.height + "px",
							"-moz-background-size" : d.width + "px " + d.height + "px",
							"-o-background-size" : d.width + "px " + d.height + "px",
							"-ms-background-size" : d.width + "px " + d.height + "px",
							"background-size" : d.width + "px " + d.height + "px"
						}) : 8 == A && g.css({
							filter : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c.current_imgInside.attr("src") + "',sizingMethod='scale')"
						});
						d.enableTouchScreen && (g.parent().width(d.width + 1), g.parent().height(d.height));
						n.css("margin-top", parseInt((d.height - k.height()) / 2, 10) + "px");
						for ( i = 0; i < h; i++)
							e(e(y[i]).attr("data-text-id")).css("width", b.width() + "px");
						P(c, d, h, g, v, m, r, s, B, f, w);
						clearTimeout(c.timeoutID);
						D(1, c, u, g, v, y, m, r, s, d, h, B);
					}
					e("body").css("overflow", C);
				}, 300));
			});
			x = e(".thumbsHolder_ThumbOFF", g);
			x.mousedown(function() {
				A = !0;
				if (!c.effectIsRunning) {
					var b = e(this).attr("rel");
					e(x[c.current_img_no]).removeClass("thumbsHolder_ThumbON");
					c.bottomNavClicked = !0;
					c.current_img_no = b - 1;
					D(1, c, u, g, x, y, m, r, s, a, p, l);
				}
			});
			x.mouseup(function() {
				A = !1;
			});
			x.mouseenter(function() {
				var a = e(this);
				a.attr("rel");
				a.addClass("thumbsHolder_ThumbON");
			});
			x.mouseleave(function() {
				var a = e(this), b = a.attr("rel");
				c.current_img_no != b && a.removeClass("thumbsHolder_ThumbON");
			});
			r.click(function() {
				A = !0;
				c.isCarouselScrolling || ( C = m.css("left").substr(0, m.css("left").lastIndexOf("px")), 0 > C && G(1, m, r, s, a, p, l, c));
			});
			s.click(function() {
				A = !0;
				c.isCarouselScrolling || ( C = m.css("left").substr(0, m.css("left").lastIndexOf("px")), Math.abs(C - c.carouselStep) < (l.width() + c.thumbMarginLeft) * p && G(-1, m, r, s, a, p, l, c));
			});
			e(x[c.current_img_no]).addClass("thumbsHolder_ThumbON");
			0 < a.autoPlay && 1 < p && (a.showCircleTimer && (c.intervalID = setInterval(function() {
				M(c, a);
			}, 125)), c.timeoutID = setTimeout(function() {
				D(1, c, u, g, x, y, m, r, s, a, p, l);
			}, 1E3 * a.autoPlay));
		});
	};
	e.fn.myReverse = [].reverse;
	e.fn.allinone_thumbnailsBanner.defaults = {
		skin : "cool",
		width : 960,
		height : 384,
		width100Proc : !1,
		height100Proc : !1,
		randomizeImages : !1,
		firstImg : 0,
		numberOfStripes : 20,
		numberOfRows : 5,
		numberOfColumns : 10,
		defaultEffect : "random",
		effectDuration : 0.5,
		autoPlay : 4,
		loop : !0,
		target : "_blank",
		showAllControllers : !0,
		showNavArrows : !0,
		showOnInitNavArrows : !0,
		autoHideNavArrows : !0,
		showThumbs : !0,
		showOnInitThumbs : !0,
		autoHideThumbs : !1,
		thumbsReflection : 50,
		enableTouchScreen : !0,
		absUrl : "",
		showCircleTimer : !0,
		showCircleTimerIE8IE7 : !1,
		circleRadius : 10,
		circleLineWidth : 4,
		circleColor : "#FF0000",
		circleAlpha : 100,
		behindCircleColor : "#000000",
		behindCircleAlpha : 50,
		responsive : !1,
		responsiveRelativeToBrowser : !0,
		numberOfThumbsPerScreen : 0,
		thumbsOnMarginTop : 0,
		thumbsWrapperMarginTop : 0,
		origWidth : 0,
		origHeight : 0,
		origThumbW : 0,
		origThumbH : 0,
		origthumbsHolderWrapperH : 121,
		origthumbsHolder_MarginTop : 0,
		windowOrientationScreenSize0 : 0,
		windowOrientationScreenSize90 : 0,
		windowOrientationScreenSize_90 : 0,
		windowCurOrientation : 0
	};
})(jQuery); 