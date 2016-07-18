(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
		this._imageWrap      = '.image-wrap';
		this._start          = '.jq-start';
		this._required       = '.jq-required';
		this._checkbox       = '.jq-checkbox';
		this._btnTopic       = '.jq-topic';
		this._transition     = '.jq-transition';
		this._lightbox       = '.jq-lightbox';
		this._close          = '.jq-close';
		this._lContent       = '.l-content';
		this._lLightbox      = '.l-lightbox';
		this._stepList       = '.step-list';
		this._prevAge        = 20; // 預設年紀
		this._ageRange       = [30, 50, 70]; // 年紀區間
		this._steps          = [7, 17, 21, 22]; // 五階段的題目區隔
		this._prevIncome     = 0; // 預設收入
		this._IncomeAct      = [0, 0]; // 紀錄收入變化
		this._IncomeRange    = [0, 10, 30, 70, 120, 190]; // 收入區間
		this._prevLiability  = 0; // 預設負債
		this._LiabilityAct   = ''; // 紀錄負債變化
		this._LiabilityRange = ''; // 負債區間
		this._eduCost        = 30; // 子女教育費
	}

	// 沒作答就往下一題
	index.prototype.shake = function(className) {
		$(className).addClass('btn-shake');

		$(className).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(this).removeClass('btn-shake');
		});
	}

	// Q4 點擊 "沒有小孩"
	index.prototype.checkKid = function(className) {
		if (!$(className).hasClass('is-checked')) {
			if ($('.dog').siblings().find('.is-show').length === 0) {
				$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
			} else {
				$('input[data-age]').each(function(){
					$(this).data('ionRangeSlider').reset();
				});

				$('.dog').siblings().find('.is-show').addClass('ani-reverse');
				$('.ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).removeClass('ani-reverse is-show');

					if ($('.ani-reverse.is-show').length === 0) {
						$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
					}
				});
			}
			$(className).toggleClass('is-checked');
		// } else {
		// 	$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
		// 		$(this).removeClass('ani-reverse is-show');
		// 	});
		}
		// $(className).toggleClass('is-checked');
	}

	// 跑區間動畫
	index.prototype.mixAnimate = function(className, start, end, range) {
		var _direction;

		if (start < end) {
			_direction = 1;
		} else {
			_direction = -1;
		}

		if (range[start] !== undefined && range[start + _direction] !== undefined) {
			$(className).addClass('disabled').attr('data-level', range[start] + '-t-' + range[start + _direction]);

			$(className).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
				if (start + _direction !== end) {
					start += _direction;

					if (range[start] !== undefined && range[start + _direction] !== undefined) {
						$(className).attr('data-level', range[start] + '-t-' + range[start + _direction]);

						common.mixAnimate(className, start, end, range);
					}
				} else {
					$(className).removeClass('disabled').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
				}
			});
		}
	}

	// 開啟 lightbox
	index.prototype.openBox = function() {
		var _which = '';

		if ($('.l-main').hasClass('is-index')) {
			_which = '.is-notify';
		} else if ($('.l-main').hasClass('is-quest')) {
			_which = '.is-insurance';

			$(common._lLightbox).find('.inputbox').val('').end().find('.selection').each(function(){
				$(this).find('option').eq(0).prop('selected', 'selected');
			});

			$('.datepicker').DatePicker();
		}

		$(common._lLightbox).addClass('is-show animation-op').find(_which).addClass('is-show');
	}

	index.prototype.closeBox = function(confirm) {
		if (confirm === 'confirm') {
			$(common._lContent + '.quest').attr({
				'class': 'l-content quest is-ins-list',
				'data-quest': 'ins-list'
			});
		}

		$(common._lLightbox).removeClass('animation-op').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$(this).removeClass('is-show').off('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend');
		});
	}

	index.prototype.offClick = function() {
		projects.$d.off('click').on('click' , function(e){
			if ($(common._lLightbox).hasClass('is-show animation-op')) {
				e.stopPropagation();

				if (!$(e.target).is('.m-box, .m-box *, ' + common._lightbox + ', ' + common._lightbox + ' *, .sugarfun-datepicker, .sugarfun-datepicker *')) {
					common.closeBox();
				}
			}
		});
	}

	projects.$w.load(function(){
		$('.age-slider').ionRangeSlider({
			min      : 20,
			max      : 84,
			from     : common._prevAge,
			onStart  : function (data) {
				common._prevAge = data.min;
			},
			onFinish : function (data) {
				if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && common._prevAge < common._ageRange[0]) {
					// 青年拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-o');
				} else if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
					// 中年拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-o');
				} else if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && common._prevAge >= common._ageRange[2]) {
					// 人瑞拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-o');
				} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && common._prevAge < common._ageRange[0]) {
					// 青年拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-m');
				} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
					// 老年拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-m');
				} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && common._prevAge >= common._ageRange[2]) {
					// 人瑞拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-m');
				} else if (data.from < common._ageRange[0] && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
					// 老年拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-y');
				} else if (data.from < common._ageRange[0] && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
					// 中年拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-y');
				} else if (data.from < common._ageRange[0] && common._prevAge >= common._ageRange[2]) {
					// 人瑞拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-y');
				} else if (data.from >= common._ageRange[2] && common._prevAge < common._ageRange[0]) {
					// 青年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-c');
				} else if (data.from >= common._ageRange[2] && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
					// 中年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-c');
				} else if (data.from >= common._ageRange[2] && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
					// 老年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-c');
				} else {
					// 不改變
				}
				common._prevAge = data.from;
			}
		});

		$('.amount-slider').each(function(){
			$(this).ionRangeSlider({
				min      : 0,
				max      : 5,
				from     : 0,
				onFinish : function (data) {
					var _class = $(data.input).data('age'); // 取得是哪個年齡層的在做調整

					if (data.from === 0) {
						$('.kids-pool .' + _class + ' .is-show').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$(this).removeClass('ani-reverse is-show');
						});
					} else {
						$('[data-meta="dinky"]').removeClass('is-checked');
						$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$(this).removeClass('ani-reverse is-show');
						});

						for (var i = 0; i < data.from; i++) {
							$('.kids-pool .' + _class + ' *').eq(i).addClass('is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
						}

						for (var j = $('.kids-pool .' + _class + ' *').length; j > data.from; j--) {
							if ($('.kids-pool .' + _class + ' *').eq(j - 1).hasClass('is-show')) {
								$('.kids-pool .' + _class + ' *').eq(j - 1).addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
									$(this).removeClass('ani-reverse is-show');
								});
							}
						}
					}
				}
			});
		});

		$('.income-slider').ionRangeSlider({
			min                : 0,
			max                : 1000,
			from               : common._prevIncome,
			max_postfix        : '<i class="postfix"></i>',
			prettify_separator : ',',
			values             : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 250, 300, 350, 400, 450, 500],
			onStart            : function (data) {
				common._prevIncome = data.min;
			},
			onFinish           : function (data) {
				var _startRange, _endRange;

				common._IncomeAct[1] = data.from_value;

				for (var i = (common._IncomeRange.length - 1); i >= 0; i--) {
					if (common._IncomeAct[0] === common._IncomeRange[0]) {
						// = 最小值
						_startRange = i;
					} else if (common._IncomeAct[0] >= common._IncomeRange[common._IncomeRange.length - 1]) {
						// = 最大值
						_startRange = common._IncomeRange.length - 1;
					} else if (common._IncomeAct[0] <= common._IncomeRange[i]) {
						_startRange = ( common._IncomeAct[0] === common._IncomeRange[i] ) ? i : ( i - 1 );
					}
				}

				for (var j = 0; j < common._IncomeRange.length; j++) {
					if (common._IncomeAct[1] >= common._IncomeRange[j]) {
						_endRange = j;
					}
				}

				if (_startRange !== _endRange) {
					common.mixAnimate('.cut-6 ' + common._imageWrap, _startRange, _endRange, common._IncomeRange);
				}

				common._prevIncome = data.from_value;
				common._IncomeAct[0] = data.from_value;
			}
		});

		$('.expend-slider').each(function(){
			$(this).ionRangeSlider({
				min                : 0,
				max                : $(this).data('max'),
				max_postfix        : '<i class="postfix"></i>',
				prettify_separator : ',',
				from               : $(this).hasClass('edu-cost') ? common._eduCost : common._prevLiability,
				values             : $(this).data('values').split(','),
				onFinish           : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from_value;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					// 判斷是哪一 cut
					if (_startRange !== _endRange && $(data.input[0]).parents('.stage').hasClass('cut-8')) {
						var _base = $('.cut-8 ' + common._imageWrap).attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-8 ' + common._imageWrap, _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
					} else if (_startRange !== _endRange && $(data.input[0]).parents('.stage').hasClass('cut-9')) {
						var _base = $('.cut-9 ' + common._imageWrap).attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-9 ' + common._imageWrap, _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4, 5]);
					}

					// 紀錄子女教育費
					if ($(data.input[0]).hasClass('edu-cost')) {
						common._eduCost = data.from;
					}

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});
		});

		$('.medical-slider').each(function(){
			$(this).ionRangeSlider({
				min                : 0,
				max                : $(this).data('max'),
				max_postfix        : '<i class="postfix"></i>',
				prettify_separator : ',',
				from               : common._prevLiability,
				values             : $(this).data('values').split(','),
				onFinish           : function (data) {
					var $imgWrap = $(data.input[0]).parent().prev();

					$imgWrap.addClass('go-ani');
					$imgWrap.on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
						$(this).removeClass('go-ani');
					});
				}
			});
		});

		$('.edu-cost-slider').ionRangeSlider({
			min                : 0,
			max                : $('.edu-cost-slider').data('max'),
			max_postfix        : '<i class="postfix"></i>',
			prettify_separator : ',',
			from               : common._eduCost,
			values             : $('.edu-cost-slider').data('values').split(','),
			onStart            : function (data) {
				if (data.from !== 0) {
					var _endRange;
					// 判斷結束點在哪
					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}

					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (data.from_value >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_endRange >= 2) {_endRange = 2;}

					$('.cut-20 ' + common._imageWrap + ' .college').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
						common.mixAnimate('.cut-20 ' + common._imageWrap + ' .college', 0, _endRange, [0, 1, 2]);
					});

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			},
			onFinish           : function (data) {
				var _startRange,
					_endRange;

				common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
				common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

				// 字串轉數字
				for (var i = 0; i < common._LiabilityRange.length; i++) {
					common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
				}
				// 字串轉數字
				for (var i = 0; i < common._LiabilityAct.length; i++) {
					common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
				}
				// 紀錄變化結束點
				common._LiabilityAct[1] = data.from_value;

				// 判斷起始點在哪
				for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
					if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
						// 起始點 = 最小值
						_startRange = 0;
					} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
						// 起始點 = 最大值
						_startRange = common._LiabilityRange.length - 1;
					} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
						_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
					}
				}

				// 判斷結束點在哪
				for (var j = 0; j < common._LiabilityRange.length; j++) {
					if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
						_endRange = j;
					}
				}

				if (_endRange >= 2) {_endRange = 2;}

				if (_startRange !== _endRange) {
					var _base = $('.cut-20 ' + common._imageWrap + ' .college').attr('data-level').split('-t-')[1];

					_base = ( ! _base ) ? 0 : parseInt(_base, 10);

					common.mixAnimate('.cut-20 ' + common._imageWrap + ' .college', _base, _endRange - _startRange + _base, [0, 1, 2]);
				}

				// 紀錄子女教育費
				common._eduCost = data.from;

				common._LiabilityAct[0] = data.from_value;
				$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
			}
		});

		$('.edu-prepare-slider').ionRangeSlider({
			min                : 0,
			max                : $('.edu-prepare-slider').data('max'),
			max_postfix        : '<i class="postfix"></i>',
			prettify_separator : ',',
			from               : common._prevLiability,
			values             : $('.edu-prepare-slider').data('values').split(','),
			onFinish           : function (data) {
				var _startRange,
					_endRange;

				common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
				common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

				// 字串轉數字
				for (var i = 0; i < common._LiabilityRange.length; i++) {
					common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
				}
				// 字串轉數字
				for (var i = 0; i < common._LiabilityAct.length; i++) {
					common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
				}
				// 紀錄變化結束點
				common._LiabilityAct[1] = data.from_value;

				// 判斷起始點在哪
				for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
					if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
						// 起始點 = 最小值
						_startRange = 0;
					} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
						// 起始點 = 最大值
						_startRange = common._LiabilityRange.length - 1;
					} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
						_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
					}
				}

				// 判斷結束點在哪
				for (var j = 0; j < common._LiabilityRange.length; j++) {
					if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
						_endRange = j;
					}
				}

				if (_startRange !== _endRange) {
					var _base = $('.cut-20 ' + common._imageWrap + ' .money').attr('data-level').split('-t-')[1];

					_base = ( ! _base ) ? 0 : parseInt(_base, 10);

					common.mixAnimate('.cut-20 ' + common._imageWrap + ' .money', _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4]);
				}

				common._LiabilityAct[0] = data.from_value;
				$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
			}
		});

		if ($(common._lContent).hasClass('index')) {
			$(common._start).on('click', function(){
				if ($(common._required).hasClass('is-checked')) {
					$('.l-main').removeClass('is-index').addClass('is-quest');

					$(common._lContent + '.index').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$(this).remove();
					});
				} else {
					common.shake(common._required);
				}
			});

			$('.index ' + common._required + ', .index ' + common._checkbox).on('click', function(){
				$(this).addClass('is-checked').siblings('.btn-check').removeClass('is-checked');
			});
		}

		$(common._checkbox).on('click', function(){
			var $another = $(this).parent().siblings().find(common._checkbox),
				_meta    = $(this).data('meta');

			if ($(common._lContent).hasClass('quest-1')) {
				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked').removeClass('ani-reverse');
				}

				if ($another.hasClass('is-checked')) {
					$another.removeClass('is-checked').addClass('ani-reverse');
				}

				$(common._imageWrap).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).siblings().removeClass('ani-reverse');
				});
			} else if ($(common._lContent).hasClass('quest-2')) {
				$(common._transition).attr('data-first', '');

				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						var $this = $(this);

						$another.removeClass('is-checked');
						$('.quest-2 ' + common._transition).attr('data-reverse', $another.attr('data-meta'));

						setTimeout(function(){
							$('.quest-2 ' + common._transition).attr({
								'data-reverse': '',
								'data-select': $this.attr('data-meta')
							});
						}, (parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.quest-2 ' + common._transition).attr('data-select', $(this).attr('data-meta'));
					}
				}
			} else if ($(common._lContent).hasClass('quest-4')) {
				common.checkKid('.cut-4 ' + common._checkbox);
			} else if ($(common._lContent).hasClass('quest-5')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					// 已退休 與 新鮮人、待退休 衝突
					if ($(this).data('meta') === 'young'|| $(this).data('meta') === 'near-retired') {
						$(common._checkbox + '[data-meta="retired"]').removeClass('is-checked');

						if ($('.cut-5 .doll').length === 1 && $('.cut-5 .doll').attr('data-meta') === '') {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
							$('.cut-5 .doll[data-meta="retired"]').remove();
						}
					} else if ($(this).data('meta') === 'retired') {
						$(common._checkbox + '[data-meta="young"], ' + common._checkbox + '[data-meta="near-retired"]').removeClass('is-checked');

						if ($('.cut-5 .doll').length === 1) {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
							$('.cut-5 .doll[data-meta="young"], .cut-5 .doll[data-meta="near-retired"]').remove();
						}
					} else {
						if ($('.cut-5 .is-checked').length === 1) {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
						}
					}
				} else {
					// 取消勾選
					$(this).removeClass('is-checked');
					if ($('.cut-5 .is-checked').length === 0) {
						$('.cut-5 .doll').attr('data-meta', '');
					} else {
						$('.cut-5 .doll[data-meta="' + _meta + '"]').remove();
					}
				}
			} else if ($(common._lContent).hasClass('quest-10')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-10 ' + common._imageWrap).attr('data-reverse', $('.cut-10 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-10 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-10 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-10 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-10 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-11')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-11 ' + common._imageWrap + ' .function').attr('data-reverse', $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection'));

						setTimeout(function(){
							$('.cut-11 ' + common._imageWrap + ' .function').attr({
								'data-reverse': '',
								'data-selection': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-12')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						$another.removeClass('is-checked');
					} else {
						$('.cut-12 ' + common._imageWrap).addClass('go-ani');
					}
					$('.cut-12 ' + common._imageWrap + ' .function').attr('data-selection', _meta);

					setTimeout(function(){
						$('.cut-12 ' + common._imageWrap).addClass('finish-ani');
					}, (parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-duration'), 10) + parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-delay'), 10)) * 1000);
				}
			} else if ($(common._lContent).hasClass('quest-13')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						$another.removeClass('is-checked');
					} else {
						$('.cut-13 ' + common._imageWrap).addClass('go-ani');
					}
					$('.cut-13 ' + common._imageWrap + ' .envelopes').attr('data-selection', _meta);

					setTimeout(function(){
						$('.cut-13 ' + common._imageWrap).addClass('finish-ani');
					}, (parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-duration'), 10) + parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-delay'), 10)) * 1000);
				}
			} else if ($(common._lContent).hasClass('quest-14')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-14 ' + common._imageWrap).attr('data-reverse', $('.cut-14 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-14 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
							$('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection', _meta);
						}, (parseFloat($('[data-reverse="' + $('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection') + '"] .care').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection') + '"] .care').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-14 ' + common._imageWrap).attr('data-meta', _meta);
						$('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-18')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-18 ' + common._imageWrap).attr('data-reverse', $('.cut-18 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-18 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-18 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-18 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-18 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-27')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked').parent().addClass('disabled');
						$('.cut-27 ' + common._imageWrap).attr('data-reverse', _meta);

						setTimeout(function(){
							$('.cut-27 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});

							setTimeout(function(){
								$another.parent().removeClass('disabled');
							}, (parseFloat($('[data-meta="' + _meta + '"] .' + _meta).css('animation-duration'), 10) + parseFloat($('[data-meta="' + _meta + '"] .' + _meta).css('animation-delay'), 10)) * 1000);
						}, (parseFloat($('[data-reverse="' + _meta + '"] .' + _meta).css('animation-duration'), 10) + parseFloat($('[data-reverse="' + _meta + '"] .' + _meta).css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-27 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-28')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked').siblings().removeClass('is-checked');
				}
			}
		});

		// 前往其他題目
		$(common._btnTopic).on('click', function(){
			var $quest   = $(common._lContent + '.quest'),
				_num     = parseInt($quest.attr('data-quest'), 10),
				_meta    = $('.cut-' + _num).find('.is-checked').attr('data-meta'),
				_compare = '',
				_direct  = 0;

			// 判斷是上一題還是下一題
			if ($(this).hasClass('btn-next')) {
				_direct = 1;
				// 是否為第一題
				if (_num === 1) {
					// 作答了沒
					if (_meta !== undefined) {
						$(common._transition).addClass('chosen-' + _meta);
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}

					if (_meta === 'boy') {
						_compare = 'girl';
					} else if (_meta === 'girl') {
						_compare = 'boy';
					}

					if (_compare !== '') {
						$(common._imageWrap + '.' + _compare).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$quest.attr({
								'class': 'l-content quest quest-' + (_num + _direct),
								'data-quest': _num + _direct
							});
						});
					}
				} else if (_num === 2) {
					// 作答了沒
					if (_meta !== undefined) {
						$(common._transition).addClass('chosen-' + _meta);

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (_num === 4) {
					if ($('.kids-pool .is-show').length === 0) {
						common.shake('.cut-' + _num + ' .kids-selector');
					} else {
						$('.cut-20 .image-wrap').attr('data-kids', (($('.kids-pool .is-show').length >= 4) ? 4 : $('.kids-pool .is-show').length));

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					}
				} else if (_num === 10 || _num === 11 || _num === 12 || _num === 13) {
					// 將病房寫入下一題
					if ($('.cut-' + _num + ' .is-checked').length !== 0) {
						if (_num === 10) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap).attr('data-meta', $('.cut-' + _num + ' ' + common._imageWrap).attr('data-meta'));
						} else if (_num === 12) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .function').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .function').attr('data-selection'));
						} else if (_num === 13) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .function').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .function').attr('data-selection'));
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .envelopes').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .envelopes').attr('data-selection'));
						}

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (_num === 14 || _num === 18 || _num === 27) {
					// 作答了沒
					if (_meta !== undefined) {
					// 將保險選項寫入下一題
						if (_num === 27) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap).attr('data-meta', _meta);
							$('.cut-' + (_num + 1) + ' .respond-wrap').attr('data-meta', _meta);
						}

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (isNaN(parseInt($('.quest').attr('data-quest'), 10)) || _num === 28) {
					$quest.attr({
						'class': 'l-content quest is-final',
						'data-quest': 'final'
					});
				} else {
					if (_num === 8) {
						$('.edu-cost-slider').data('ionRangeSlider').update({
							from: common._eduCost
						});
					}

					$quest.attr({
						'class': 'l-content quest quest-' + (_num + _direct),
						'data-quest': _num + _direct
					});
				}

				for (var i = 0; i < common._steps.length; i++) {
					if (_num >= (common._steps[i] - 1)) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + (i + 1));
					}
				}
			} else {
				_direct = -1;

				if (isNaN(_num)) {
					_num = 29;
				}

				$quest.attr({
					'class': 'l-content quest quest-' + (_num + _direct),
					'data-quest': _num + _direct
				});

				$(common._imageWrap).off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');

				if (_num === 2) {
					// 還原預設值
					$(common._transition).removeClass('chosen-boy chosen-girl chosen-single chosen-merried').attr('data-first', 'true');
				} else if (_num === 20) {
					$('.expend-slider.edu-cost').data('ionRangeSlider').update({
						from: common._eduCost
					});
				}

				for (var i = common._steps.length - 1; i >= 0; i--) {
					if (_num <= (common._steps[i])) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + i);
					}
				}
			}

			// 療養金的動畫歸零
			if ($(common._lContent).hasClass('quest-12') && $('.cut-12 ' + common._imageWrap + ' .function').attr('data-selection') !== '') {
				$('.cut-12 ' + common._imageWrap).removeClass('finish-ani');

				setTimeout(function(){
					$('.cut-12 ' + common._imageWrap).addClass('finish-ani');
				}, (parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-duration'), 10) + parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-delay'), 10)) * 1000);
			} else if ($(common._lContent).hasClass('quest-13') && $('.cut-13 ' + common._imageWrap + ' .envelopes').attr('data-selection') !== '') {
				$('.cut-13 ' + common._imageWrap).removeClass('finish-ani');

				setTimeout(function(){
					$('.cut-13 ' + common._imageWrap).addClass('finish-ani');
				}, (parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-duration'), 10) + parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-delay'), 10)) * 1000);
			}
		});

		$(common._lightbox).on('click', function(){
			common.openBox();

			if ($(this).hasClass('btn-edit')) {
				// $(this).prev().find('.info').each(function(){
				// 	if ($(common._lLightbox + ' .' + $(this).attr('class').split('info ')[1])[0].tagName === 'INPUT') {
				// 		$(common._lLightbox + ' .' + $(this).attr('class').split('info ')[1]).val($(this).text());
				// 	} else if ($(common._lLightbox + ' .' + $(this).attr('class').split('info ')[1])[0].tagName === 'SELECT') {
				// 		var _text = $(this).text();

				// 		$(common._lLightbox + ' .' + $(this).attr('class').split('info ')[1]).find('option').each(function(){
				// 			if ($(this).text() === _text) {
				// 				$(this).prop('selected', 'selected');
				// 			}
				// 		});
				// 	}
				// });
				$(common._lLightbox + ' .is-insurance .box-title').text('編輯保單');
			} else if ($(this).hasClass('btn-add') || $(this).hasClass('btn-notify')) {
				$(common._lLightbox + ' .is-insurance .box-title').text('新增保單');
			}
		});

		$(common._close).on('click', function(){
			common.closeBox($(this).data('type'));
		});

		common.offClick();
	});

	projects.$d.ready(function(){
		$('img.b-lazy').lazyload();
	});
}(window, document, $));