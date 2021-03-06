﻿(function (window , document , jQuery , undefined) {
    'use strict';

    var projects = new factory();

    function factory() {
		this.$w      = jQuery(window);
		this.$d      = jQuery(document);
		this.$hb     = jQuery('html , body');
		this.$b      = jQuery('body');
		this._ORIGIN = window.location.origin;
		this._HREF   = window.location.href;
		this._EVENTS = 'click touchstart';
		this._u2b    = {
			_id        : null,
			$element   : null,
			_class     : null,
			_fullStyle : 'top : 0; left : 0; width : 100%; height : 100%; position : absolute;'
        };
    }

    /* get device ( PC or Tablet or Mobile )  */
    factory.prototype.device = function() {
        if ( projects.$w.width() < 768 ) {
            return 'Mobile';
        } else {
            if ( /Android|webOS|iPad|BlackBerry/i.test(navigator.userAgent) ) {
                return 'Tablet';
            } else {
                return 'PC';
            }
        }
    }

    /* get browsers */
    factory.prototype.browsers = function(){
        var _useragent = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        var _tem;

        if( /trident/i.test( _useragent[1] ) ){
            _tem = /\brv[ :]+(\d+)/g.exec( navigator.userAgent ) || [];
            return 'IE ' + (_tem[1] || '');
        }
        
        if( _useragent[1] === 'Chrome' ){
            _tem = navigator.userAgent.match( /\b(OPR|Edge)\/(\d+)/ );
            if ( _tem != null ) return _tem.slice(1).join(' ').replace('OPR', 'Opera');
        }

        _useragent = _useragent[2] ? [ _useragent[1] , _useragent[2] ]: [ navigator.appName , navigator.appVersion , '-?' ];

        if ( ( _tem = navigator.userAgent.match( /version\/(\d+)/i ) ) != null ) _useragent.splice(1 , 1 , _tem[1]);
            return _useragent.join(' ');
    }

    /* ajax init */
    factory.prototype.ajax = function(url , success , complete , erroe) {
        var _type          = /type=([^?&#]*)/.exec(url) ? ( /type=([^?&#]*)/.exec(url)[1] ) : 'POST',
            _url           = /^((?!(\?|\&)).)*/.exec(url)[0],
            _dataType      = /dataType=([^?&#]*)/.exec(url) ? ( /dataType=([^?&#]*)/.exec(url)[1] ) : 'script',
            _data          = /data=([^?&#]*)/.exec(url) ? ( /data=([^?&#]*)/.exec(url)[1] ) : '',
            _jsonpCallback = /callback=([^?&#]*)/.exec(url) ? ( ( /callback=([^?&#]*)/.exec(url)[1] ) !== '?' ? ( /callback=([^?&#]*)/.exec(url)[1] ) : 'Sugarfun_' + new Date().getTime() ) : null;


        if ( _data.indexOf('[object Object]') !== -1 ) {
            alert('data format error \n try JSON.stringify(data)');
        } else {
            if ( _url ) {
                $.ajax({
                    type          : _type,
                    url           : _url,
                    dataType      : _dataType,
                    data          : _data ? ( _type.toUpperCase() === 'GET' ? ( ( /(^{)(?=.*}$).*/.exec(_data)[0] ) ? jQuery.param(JSON.parse(_data)) : _data ) : JSON.parse(_data)) : '',
                    cache         : false,
                    crossDomain   : true,
                    contentType   : 'application/x-www-form-urlencoded; charset=UTF-8',
                    jsonpCallback : _jsonpCallback,
                    processData   : false,
                    success       : function(data) {
                        if ( success && typeof(success) === 'function' ) {
                            success(data);
                        }
                    },
                    complete      : function(data) {
                        if ( complete && typeof(complete) === 'function' ) {
                            complete(data);
                        }
                    },
                    error         : function(jqXHR, textStatus, errorThrown) {
                        if ( erroe && typeof(erroe) === 'function' ) {
                            erroe(jqXHR, textStatus, errorThrown);
                        }
                    }
                });
            }
        }
    }

    factory.prototype.documentOff = function(cName , func) {
        projects.$d.on('click' , function(e){
            e.stopPropagation();
            if ( ! jQuery( e.target ).is(cName) ) {
                if ( typeof(func) === 'function' ) {
                    func();
                } else {
                    eval(func);
                }
            }
        });
    }

    /* owlCarousel */
    factory.prototype.owlCarousel = function(element) {
        var $elem = jQuery(element);

        if ( $elem.length !== 0 ) {
            for ( var i = 0 ; i < $elem.length ; i ++ ) {
                $elem.eq(i).owlCarousel({
                    mouseDrag         : projects.device() !== 'PC' ? ( $elem.eq(i).data('mouse-drag') !== false ) ? true : false : false,
                    touchDrag         : ( $elem.eq(i).data('touch-drag') !== false ) ? true : false,
                    pullDrag          : ( $elem.eq(i).data('pull-drag') !== false ) ? true : false,
                    center            : ( $elem.eq(i).data('center') !== true ) ? false : true,
                    loop              : ( $elem.eq(i).find('> *').length > 1 ) ? ( ( $elem.eq(i).data('loop') !== true ) ? false : true ) : false,
                    nav               : ( $elem.eq(i).data('ctrl') !== true ) ? false : true,
                    dots              : ( $elem.eq(i).data('dots') !== false ) ? true : false,
                    items             : ( ( $elem.eq(i).data('items') | 0 ) > 0 ) ? ( $elem.eq(i).data('items') | 0 ) : 1,
                    responsive        : {
                        0 : {
                            items : ( ( $elem.eq(i).data('items-xs') | 0 ) > 0 ) ? ( $elem.eq(i).data('items-xs') | 0 ) : 1,
                            nav   : $elem.eq(i).data('ctrl') ? $elem.eq(i).data('ctrl') : ( $elem.eq(i).data('ctrl-xs') !== true ) ? false : true,
                            dots  : $elem.eq(i).data('dots') ? $elem.eq(i).data('dots') : ( $elem.eq(i).data('dots-xs') !== false ) ? true : false
                        },
                        768 : {
                            items : ( ( $elem.eq(i).data('items-sm') | 0 ) > 0 ) ? ( $elem.eq(i).data('items-sm') | 0 ) : 1,
                            nav   : $elem.eq(i).data('ctrl') ? $elem.eq(i).data('ctrl') : ( $elem.eq(i).data('ctrl-sm') !== true ) ? false : true,
                            dots  : $elem.eq(i).data('dots') ? $elem.eq(i).data('dots') : ( $elem.eq(i).data('dots-sm') !== false ) ? true : false
                        },
                        1000 : {
                            items : ( ( $elem.eq(i).data('items-md') | 0 ) > 0 ) ? ( $elem.eq(i).data('items-md') | 0 ) : 1,
                            nav   : $elem.eq(i).data('ctrl') ? $elem.eq(i).data('ctrl') : ( $elem.eq(i).data('ctrl-md') !== true ) ? false : true,
                            dots  : $elem.eq(i).data('dots') ? $elem.eq(i).data('dots') : ( $elem.eq(i).data('dots-md') !== false ) ? true : false
                        }
                    },
                    lazyLoad          : ( $elem.eq(i).data('img-load') !== true ) ? false : true,
                    autoplay          : ( $elem.eq(i).data('autoplay') !== true ) ? false : true,
                    autoplayTimeout   : $elem.eq(i).data('timeout') ? $elem.eq(i).data('timeout') : 5000,
                    navContainerClass : $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-ctrl' : 'm-owl-ctrl',
                    navClass          : ['' + ( $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-arrow' : 'm-owl-arrow') + ' ' + ( $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-arrow-prev' : 'is-prev'), ' ' + ( $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-arrow' : 'm-owl-arrow') + ' ' + ( $elem.eq(i).data('nav-class' ) ? $elem.eq(i).data('nav-class') + '-arrow-next' : 'is-next')],
                    navText           : $elem.eq(i).data('nav-text') ? $elem.eq(i).data('nav-text').split(',') : ['<i></i>' , '<i></i>'],
                    dotsClass         : $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-dots' : 'm-owl-dots ' + ( $elem.eq(i).data('dots-position') !== 'relative' ? 'is-absolute' : 'is-relative') + '',
                    dotClass          : $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-dot' : 'm-owl-dot',
                    centerClass       : $elem.eq(i).data('nav-class') ? $elem.eq(i).data('nav-class') + '-center' : 'm-owl-center',
                    startPosition     : ( parseInt( $elem.eq(i).data('start-position'), 10 ) > 0 ) ? parseInt( $elem.eq(i).data('start-position'), 10 ) : 0
                });
            }
        }
    }

    factory.prototype.owlEvents = function(element , onEvents , callback) {
        jQuery(element).on(onEvents , function(e){
            if ( typeof(callback) === 'function' ) {
                callback(e);
            } else if ( typeof(callback) === 'string' ) {
                eval(callback);
            }
        });
    }

    factory.prototype.owlStop = function(element) {
        jQuery(element).trigger('stop.owl.autoplay');
    }

    factory.prototype.owlPlay = function(element) {
        jQuery(element).trigger('play.owl.autoplay');
    }

    /* youtube */
    factory.prototype.u2bGet = function() {
        var _style = 'padding-top: 100%; position: relative;';

        for ( var i = 0 , _youtube = jQuery('[data-youtube]') ; i < _youtube.length ; i ++ ) {
            if ( _youtube.eq(i).data('youtube') !== '' ) {
                var _data = _youtube.eq(i).data('youtube');

                _youtube.eq(i).removeData('youtube');
                _youtube.eq(i).data( 'youtube' , ( _data + (( /\?/.test(_data) ) ? '&index='+i+'' : '?index='+i+'') ) );
                _youtube.eq(i).after('<div class="youtube-frame '+ ( ( _youtube.eq(i).data('fullscreen') === true ) ? 'is-fullscreen' : '' ) +'" style="'+ ( ( _youtube.eq(i).data('fullscreen') === true ) ? _style : '' ) +'"><span id="youtube-'+i+'" class="youtube-append" style="'+ projects._u2b._fullStyle +'"></span></div>');
            }
        }
    }

    factory.prototype.u2bAppend = function(url , ready , stateChange) {
        var _id       = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i)[1],
            _autoPlay = /autoplay\=/.test(url) ? ( /autoplay\=([^?&#]*)/.exec(url)[1] ) : 0,
            _ctrls    = /controls\=/.test(url) ? ( /controls\=([^?&#]*)/.exec(url)[1] ) : 0,
            _showinfo = /showinfo\=/.test(url) ? ( /showinfo\=([^?&#]*)/.exec(url)[1] ) : 0;
        var player;

        projects._u2b._id      = 'youtube-' + ( /index\=([^?&#]*)/.exec(url)[1] );
        projects._u2b.$element = ('#' + projects._u2b._id);
        projects._u2b._class   = jQuery(projects._u2b.$element).attr('class');

        player = new YT.Player(projects._u2b._id , {
            width            : '100%',
            height           : '100%',
            videoId          : _id,
            suggestedQuality : 'highres',
            playerVars : {
                autoplay       : _autoPlay,
                controls       : _ctrls,
                showinfo       : _showinfo,
                fs             : 0,
                rel            : 0,
                modestbranding : 1,
                iv_load_policy : 1,
                start          : 0,
                playsinline    : 0,
                enablejsapi    : 1,
                version        : 3,
                playlist       : '',
                origin         : projects._ORIGIN,
                wmode          : 'transparent'
            },
            events: {
                onReady : function(event) {
                    jQuery(projects._u2b.$element).css('z-index' , '5');

                    if ( ready ) {
                        if ( typeof(ready) === 'function' ) {
                            ready.call(event);
                        } else if ( typeof(ready) === 'string' ) {
                            eval(ready);
                        }
                    }
                },
                onStateChange : function(event) {
                    if ( event.data === 0 ) {
                        projects.u2bRemove();

                        if ( stateChange ) {
                            if ( typeof(stateChange) === 'function' ) {
                                stateChange.call(event);
                            } else if ( typeof(stateChange) === 'string' ) {
                                eval(stateChange);
                            }
                        }
                    }
                }
            }
        });
    }

    factory.prototype.u2bRemove = function() {
        if ( jQuery(projects._u2b.$element).length !== 0 ) {
            jQuery(projects._u2b.$element).after('<span id="'+projects._u2b._id+'" class="'+projects._u2b._class+'" style="'+ projects._u2b._fullStyle +'"></span>').remove();
        }
    }

    /* plugin isQuery function */
    factory.prototype.isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    }

    /* plugin accordion event */
    projects.accordion = jQuery.accordion = function () {
        projects.accordion.init.apply( this , arguments );
    }

    jQuery.extend( projects.accordion , {
        _defaults : {
            header        : null,
            content       : null,
            classEvent    : null,
            className     : null,
            selfClose     : true,
            siblingsClose : true,
            index         : 0
        },
        _group : {},
        _activeIndex : null,
        init : function(group , opts) {
            if ( ! group ) {
                return;
            }

            if ( ! $.isArray(group) ) {
                group = projects.isQuery(group) ? $(group).get() : [group];
            }

            $.each( group , function( i , element ) {
                var obj = {};

                obj = element;
                group[ i ] = obj;
            });

            projects.accordion.opts   = $.extend(true , {} , projects.accordion._defaults , opts);
            projects.accordion._group = group;

            return projects.accordion.click(projects.accordion.opts.index);
        },
        click : function(index) {
            var _coming = {},
                _regex,
                _obj;

            _obj = projects.accordion._group[ index ] || null;

            if ( ! _obj ) {
                return false;
            }

            _coming = $.extend(true , {} , projects.accordion.opts , _obj);

            _regex = /(?![\.]|[\#]).*/.exec(_coming.content)[0];

            for ( var i = 0 , _headerArr = _coming.header.split(',') , $showeElem = _coming.content ; i < _headerArr.length ; i ++ ) {
                for ( var j = 0 , $header = jQuery( jQuery.trim(_headerArr[i]) ) ; j < $header.length ; j ++ ) {
                    if ( $header.eq(j).hasClass(_coming.className) ) {
                        projects.accordion._activeIndex = j;
                    }
                    if ( $header.length > 1 && ( $header.eq(j).find(jQuery(_coming.content)).length !== 0 || $header.eq(j).next().hasClass(_regex) ) ) {
                        $header.eq(j).attr('data-index' , j);
                        if ( $header.eq(j).find(jQuery(_coming.content)).length !== 0 ) {
                            $header.eq(j).find($showeElem).addClass(_regex + '-' +  j);
                        } else if ( $header.eq(j).next().hasClass(_regex) ) {
                            $header.eq(j).next().addClass(_regex + '-' +  j);
                        }
                    } else if ( $header.length === 1 ) {
                        $header.eq(j).attr('data-index' , j);
                        jQuery($showeElem).addClass(_regex + '-' +  j);
                    }
                };
            };

            jQuery(_coming.header).bind('click' , function(e){
                var _self   = this;
                var _TIME   = 150;
                var _index  = jQuery(_self).data('index');
                var _times  = ( ( parseFloat(jQuery(_coming.content + '-' + _index).css('transition-duration') , 10) * 1000 ) + _TIME ) ||
                                ( ( parseFloat(jQuery(_coming.content + '-' + _index).css('animation-duration') , 10) * 10000 ) + _TIME ) ||
                                _TIME,
                    timeout = null;

                if ( _index !== undefined ) {
                    e.preventDefault();

                    clearTimeout(timeout);

                    if ( _coming.classEvent === 'toggle' ) {
                        if ( _coming.siblingsClose ) {
                            var _hasClass = jQuery(_self).hasClass(_coming.className) ? true : false;
                            if ( ! _coming.selfClose && projects.accordion._activeIndex === _index && jQuery(_self).hasClass(_coming.className) ) return;
                            jQuery(_coming.header).removeClass(_coming.className);
                            jQuery(_coming.content).removeClass(_coming.className);
                            if ( _hasClass ) {
                                jQuery(_self).addClass(_coming.className);
                                jQuery(_coming.content + '-' + _index).addClass(_coming.className);
                            }
                            jQuery(_self).toggleClass(_coming.className);
                            jQuery(_coming.content + '-' + _index).toggleClass(_coming.className);
                        } else {
                            jQuery(_self).toggleClass(_coming.className);
                            jQuery(_coming.content + '-' + _index).toggleClass(_coming.className);
                        }
                    } else if ( _coming.classEvent === 'add' && ! jQuery(_self).hasClass(_coming.className) ) {
                        jQuery(_coming.header).removeClass(_coming.className);
                        jQuery(_coming.content).removeClass(_coming.className);
                        jQuery(_self).addClass(_coming.className);
                        jQuery(_coming.content + '-' + _index).addClass(_coming.className);
                    } else if ( _coming.classEvent === 'remove' && jQuery(_self).hasClass(_coming.className) ) {
                        jQuery(_self).removeClass(_coming.className);
                        jQuery(_coming.content + '-' + _index).removeClass(_coming.className);
                    }

                    if ( typeof(_coming.callback) === 'function' ) {
                        timeout = setTimeout(function(){
                            _coming.callback(_self , _coming.content + '-' + _index , projects.accordion._activeIndex);
                        } , _times);
                    }
                }
            });
        }
    });

    if ( ! window.projects ) {
        window.projects = projects;
    }
}(window, document, jQuery));