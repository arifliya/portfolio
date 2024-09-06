(function(cjs, an) {
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "Homepage_animationCanvas_atlas_1",
            frames: [
                [
                    376,
                    391,
                    108,
                    90
                ],
                [
                    376,
                    0,
                    91,
                    163
                ],
                [
                    360,
                    286,
                    108,
                    103
                ],
                [
                    376,
                    165,
                    115,
                    119
                ],
                [
                    0,
                    223,
                    358,
                    195
                ],
                [
                    0,
                    462,
                    374,
                    26
                ],
                [
                    0,
                    420,
                    374,
                    40
                ],
                [
                    0,
                    0,
                    374,
                    221
                ]
            ]
        }
    ];
    (lib.AnMovieClip = function() {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        };
        this.play = function() {
            cjs.MovieClip.prototype.play.call(this);
        };
        this.gotoAndStop = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        };
        this.stop = function() {
            cjs.MovieClip.prototype.stop.call(this);
        };
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    (lib.CachedBmp_8 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_7 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_6 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_5 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_4 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_3 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_2 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    (lib.CachedBmp_1 = function() {
        this.initialize(ss["Homepage_animationCanvas_atlas_1"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }
    (lib.Symbol1 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("EgqTAAAMBUnAAA");
        this.shape.setTransform(270.8, 0);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1, -1, 543.6, 2), null);
    (lib.ClipGroup = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjwDhIAAnBIHhAAIAAHBg");
        mask.setTransform(24.125, 22.45);
        // Layer_3
        this.instance = new lib.CachedBmp_8();
        this.instance.setTransform(-5.7, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 48.3, 44.9), null);
    (lib.ClipGroup_1 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AjjGWIAAsrIHHAAIAAMrg");
        mask_1.setTransform(22.775, 40.625);
        // Layer_3
        this.instance_1 = new lib.CachedBmp_7();
        this.instance_1.setTransform(0, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_1
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0, 0, 45.5, 81.3), null);
    (lib.ClipGroup_2 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        mask_2.graphics.p("AkND5IAAnxIIbAAIAAHxg");
        mask_2.setTransform(26.975, 24.925);
        // Layer_3
        this.instance_2 = new lib.CachedBmp_6();
        this.instance_2.setTransform(0, -0.05, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_2
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0, 0, 54, 49.9), null);
    (lib.ClipGroup_3 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        mask_3.graphics.p("AkeEDIAAoFII9AAIAAIFg");
        mask_3.setTransform(28.725, 25.925);
        // Layer_3
        this.instance_3 = new lib.CachedBmp_5();
        this.instance_3.setTransform(0, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_3
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0, 0, 57.5, 51.9), null);
    (lib.ClipGroup_4 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        mask_4.graphics.p("At9HnIAAvOIb7AAIAAPOg");
        mask_4.setTransform(89.4, 48.75);
        // Layer_3
        this.instance_4 = new lib.CachedBmp_4();
        this.instance_4.setTransform(-0.05, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_4
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0, 0, 178.8, 97.5), null);
    (lib.ClipGroup_5 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_5 = new cjs.Shape();
        mask_5._off = true;
        mask_5.graphics.p("AulBBIAAiBIdLAAIAACBg");
        mask_5.setTransform(93.425, 6.525);
        // Layer_3
        this.instance_5 = new lib.CachedBmp_3();
        this.instance_5.setTransform(0, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_5
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0, 0, 186.9, 13), null);
    (lib.ClipGroup_6 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_6 = new cjs.Shape();
        mask_6._off = true;
        mask_6.graphics.p("AulBjIAAjFIdLAAIAADFg");
        mask_6.setTransform(93.425, 9.925);
        // Layer_3
        this.instance_6 = new lib.CachedBmp_2();
        this.instance_6.setTransform(0, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_6
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0, 0, 186.9, 19.9), null);
    (lib.ClipGroup_7 = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = true;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        // Layer_2 (mask)
        var mask_7 = new cjs.Shape();
        mask_7._off = true;
        mask_7.graphics.p("AulIpIAAxRIdLAAIAARRg");
        mask_7.setTransform(93.425, 55.3);
        // Layer_3
        this.instance_7 = new lib.CachedBmp_1();
        this.instance_7.setTransform(0, 0, 0.5, 0.5);
        var maskedShapeInstanceList = [
            this.instance_7
        ];
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++)maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0, 0, 186.9, 110.5), null);
    // stage content:
    (lib.HomepageanimationCanvas = function(mode, startPosition, loop, reversed) {
        if (loop == null) loop = false;
        if (reversed == null) reversed = false;
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [
            props
        ]);
        this.actionFrames = [
            79
        ];
        // timeline functions:
        this.frame_79 = function() {
            var _this = this;
            /*
		Stop the complete animation.
		*/ createjs.Ticker.removeEventListener("tick", stage);
        };
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));
        // Layer_1_copy_copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape.setTransform(821.6321, 582.45);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgPBmQAmghgJgwQgDgPgGgNQgXguAMgaQAJgQALgG");
        this.shape_1.setTransform(821.4011, 582.475);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgNBnQAfgjgGgvQgCgPgFgNQgRgtAKgbQAGgQAKgH");
        this.shape_2.setTransform(821.225, 582.425);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgMBnQAZglgEguQAAgPgDgMQgMgtAGgbQAGgQAHgH");
        this.shape_3.setTransform(821.1, 582.4);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgLBoQASgngBgtQABgPgCgMQgHgsAFgcQADgPAGgJ");
        this.shape_4.setTransform(821, 582.35);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgLQgCgsADgdQABgPAEgJ");
        this.shape_5.setTransform(820.875, 582.325);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBoQAGgpADgrQAEgPABgMQAEgqAAgdQAAgQABgJ");
        this.shape_6.setTransform(820.75, 582.3);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgBgrAHgqQADgPACgLQAKgrgCgeQgDgPAAgK");
        this.shape_7.setTransform(820.8156, 582.25);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgHgsAJgqQAGgOADgLQAPgqgFgeQgEgPgDgL");
        this.shape_8.setTransform(820.7671, 582.225);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgIBpQgOgtAMgpQAHgOAEgLQAVgqgHgeQgHgPgEgL");
        this.shape_9.setTransform(820.6798, 582.175);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAChpIAPAbQAKAggVAfIgTAfQgPApAVAw");
        this.shape_10.setTransform(820.6209, 582.15);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("rgba(255,255,255,0.945)").ss(2, 1, 1).p("AgHBpQgRguAMgpQAIgOAFgKQAXgqgIgeQgHgPgGgL");
        this.shape_11.setTransform(800.7231, 556.125);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("rgba(255,255,255,0.89)").ss(2, 1, 1).p("AgIBpQgNgtALgqQAHgNAEgLQAUgqgHgeQgGgPgEgL");
        this.shape_12.setTransform(780.8762, 530.075);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("rgba(255,255,255,0.831)").ss(2, 1, 1).p("AgJBpQgJgtAKgpQAGgOADgLQARgqgFgeQgFgPgEgL");
        this.shape_13.setTransform(761.0108, 504.025);
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("rgba(255,255,255,0.776)").ss(2, 1, 1).p("AgJBpQgGgsAJgqQAFgOADgLQAOgqgEgeQgEgPgDgL");
        this.shape_14.setTransform(741.1453, 477.975);
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("rgba(255,255,255,0.722)").ss(2, 1, 1).p("AgJBoQgCgqAHgrQAEgOACgLQALgqgDgeQgDgPgBgK");
        this.shape_15.setTransform(721.2611, 451.95);
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("rgba(255,255,255,0.667)").ss(2, 1, 1).p("AgJBoQACgqAFgrQADgOACgLQAIgrgCgeQgBgPAAgJ");
        this.shape_16.setTransform(701.3125, 425.925);
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("rgba(255,255,255,0.612)").ss(2, 1, 1).p("AgIBoQAFgpADgrQAEgPABgLQAEgrAAgeQAAgPABgJ");
        this.shape_17.setTransform(681.35, 399.875);
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("rgba(255,255,255,0.557)").ss(2, 1, 1).p("AgJBoQAJgpACgsQACgOABgMQABgrABgdQABgPACgJ");
        this.shape_18.setTransform(661.525, 373.85);
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("rgba(255,255,255,0.502)").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgMQgCgrADgdQABgPAEgJ");
        this.shape_19.setTransform(641.675, 347.825);
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("rgba(255,255,255,0.443)").ss(2, 1, 1).p("AgKBoQAPgnAAgsQABgPgBgNQgFgrAEgcQADgQAEgJ");
        this.shape_20.setTransform(621.825, 321.75);
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("rgba(255,255,255,0.388)").ss(2, 1, 1).p("AgLBnQATgmgCgtQABgPgCgMQgHgsAFgcQADgPAGgI");
        this.shape_21.setTransform(602, 295.725);
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("rgba(255,255,255,0.333)").ss(2, 1, 1).p("AgMBnQAXglgDgtQAAgPgDgNQgKgsAGgcQAFgPAHgI");
        this.shape_22.setTransform(582.125, 269.675);
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("rgba(255,255,255,0.278)").ss(2, 1, 1).p("AgMBnQAagkgEguQgBgPgEgNQgNgtAIgbQAFgQAIgH");
        this.shape_23.setTransform(562.275, 243.65);
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("rgba(255,255,255,0.224)").ss(2, 1, 1).p("AgNBnQAegkgGguQgBgPgFgNQgQgtAJgbQAGgQAKgH");
        this.shape_24.setTransform(542.45, 217.625);
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("rgba(255,255,255,0.169)").ss(2, 1, 1).p("AgNBnQAhgjgHgvQgCgPgFgNQgUgtALgbQAHgQALgH");
        this.shape_25.setTransform(522.6, 191.575);
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("rgba(255,255,255,0.11)").ss(2, 1, 1).p("AgPBmQAmghgJgvQgCgQgHgNQgWguAMgaQAIgQAMgG");
        this.shape_26.setTransform(502.7769, 165.525);
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("rgba(255,255,255,0.055)").ss(2, 1, 1).p("AgQBmQApgggKgwQgDgQgHgNQgaguAOgaQAJgQANgG");
        this.shape_27.setTransform(483.0126, 139.475);
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape_28.setTransform(463.2321, 113.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [
                {
                    t: this.shape
                }
            ]
        }, 51).to({
            state: [
                {
                    t: this.shape_1
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_2
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_3
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_4
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_5
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_6
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_7
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_8
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_9
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_10
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_11
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_12
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_13
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_14
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_15
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_16
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_17
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_18
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_19
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_20
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_21
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_22
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_23
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_24
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_25
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_26
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_27
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_28
                }
            ]
        }, 1).wait(1));
        // Layer_1_copy
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape_29.setTransform(811.6321, 582.45);
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgPBmQAmghgJgwQgDgPgGgNQgXguAMgaQAJgQALgG");
        this.shape_30.setTransform(811.4011, 582.475);
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgNBnQAfgjgGgvQgCgPgFgNQgRgtAKgbQAGgQAKgH");
        this.shape_31.setTransform(811.225, 582.425);
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgMBnQAZglgEguQAAgPgDgMQgMgtAGgbQAGgQAHgH");
        this.shape_32.setTransform(811.1, 582.4);
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgLBoQASgngBgtQABgPgCgMQgHgsAFgcQADgPAGgJ");
        this.shape_33.setTransform(811, 582.35);
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgLQgCgsADgdQABgPAEgJ");
        this.shape_34.setTransform(810.875, 582.325);
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBoQAGgpADgrQAEgPABgMQAEgqAAgdQAAgQABgJ");
        this.shape_35.setTransform(810.75, 582.3);
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgBgrAHgqQADgPACgLQAKgrgCgeQgDgPAAgK");
        this.shape_36.setTransform(810.8156, 582.25);
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgHgsAJgqQAGgOADgLQAPgqgFgeQgEgPgDgL");
        this.shape_37.setTransform(810.7671, 582.225);
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgIBpQgOgtAMgpQAHgOAEgLQAVgqgHgeQgHgPgEgL");
        this.shape_38.setTransform(810.6798, 582.175);
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAChpIAPAbQAKAggVAfIgTAfQgPApAVAw");
        this.shape_39.setTransform(810.6209, 582.15);
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("rgba(255,255,255,0.945)").ss(2, 1, 1).p("AgHBpQgRguANgpQAHgOAFgKQAXgqgIgeQgHgPgGgL");
        this.shape_40.setTransform(790.7453, 556.125);
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("rgba(255,255,255,0.89)").ss(2, 1, 1).p("AgIBpQgNgtALgqQAHgNAEgLQAUgqgHgeQgGgPgEgL");
        this.shape_41.setTransform(770.9208, 530.075);
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("rgba(255,255,255,0.831)").ss(2, 1, 1).p("AgIBpQgKgtAKgpQAGgOADgLQARgqgFgeQgFgPgEgL");
        this.shape_42.setTransform(751.0797, 504.025);
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f().s("rgba(255,255,255,0.776)").ss(2, 1, 1).p("AgJBpQgGgsAJgqQAFgOADgLQAOgqgFgeQgDgPgDgL");
        this.shape_43.setTransform(731.2306, 477.975);
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("rgba(255,255,255,0.722)").ss(2, 1, 1).p("AgJBoQgCgqAHgrQAEgOACgLQALgqgDgeQgDgPgBgK");
        this.shape_44.setTransform(711.3849, 451.95);
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f().s("rgba(255,255,255,0.667)").ss(2, 1, 1).p("AgJBoQACgqAGgrQADgOACgLQAHgrgBgeQgCgPAAgJ");
        this.shape_45.setTransform(691.4375, 425.925);
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("rgba(255,255,255,0.612)").ss(2, 1, 1).p("AgIBoQAFgpADgrQADgPABgLQAFgrAAgeQgBgPABgJ");
        this.shape_46.setTransform(671.525, 399.875);
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f().s("rgba(255,255,255,0.557)").ss(2, 1, 1).p("AgJBoQAIgpACgsQADgOAAgMQACgrACgdQAAgPACgJ");
        this.shape_47.setTransform(651.7, 373.85);
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("rgba(255,255,255,0.502)").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgMQgCgrADgdQABgPAEgJ");
        this.shape_48.setTransform(631.875, 347.825);
        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f().s("rgba(255,255,255,0.443)").ss(2, 1, 1).p("AgKBoQAPgnAAgsQABgPgBgNQgFgrAEgcQADgQAFgJ");
        this.shape_49.setTransform(612.05, 321.75);
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("rgba(255,255,255,0.388)").ss(2, 1, 1).p("AgLBnQATgmgBgtQAAgPgCgMQgHgsAFgcQADgPAGgI");
        this.shape_50.setTransform(592.225, 295.725);
        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f().s("rgba(255,255,255,0.333)").ss(2, 1, 1).p("AgMBnQAXglgDgtQAAgPgDgNQgKgsAGgcQAFgPAHgI");
        this.shape_51.setTransform(572.4, 269.675);
        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("rgba(255,255,255,0.278)").ss(2, 1, 1).p("AgMBnQAagkgEguQgBgPgEgNQgNgtAIgbQAFgQAIgH");
        this.shape_52.setTransform(552.575, 243.65);
        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f().s("rgba(255,255,255,0.224)").ss(2, 1, 1).p("AgNBnQAegkgGguQgBgPgFgNQgQgtAKgbQAGgQAJgH");
        this.shape_53.setTransform(532.75, 217.625);
        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("rgba(255,255,255,0.169)").ss(2, 1, 1).p("AgOBnQAigjgHgvQgCgPgFgNQgUgtALgbQAHgQALgH");
        this.shape_54.setTransform(512.925, 191.575);
        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f().s("rgba(255,255,255,0.11)").ss(2, 1, 1).p("AgPBmQAlghgIgvQgDgQgGgNQgXguANgaQAIgQALgG");
        this.shape_55.setTransform(493.1527, 165.525);
        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("rgba(255,255,255,0.055)").ss(2, 1, 1).p("AgQBmQApgggKgwQgDgQgHgNQgaguAOgaQAJgQANgG");
        this.shape_56.setTransform(473.3885, 139.475);
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f().s("rgba(255,255,255,0)").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape_57.setTransform(453.6321, 113.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [
                {
                    t: this.shape_29
                }
            ]
        }, 51).to({
            state: [
                {
                    t: this.shape_30
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_31
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_32
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_33
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_34
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_35
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_36
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_37
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_38
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_39
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_40
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_41
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_42
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_43
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_44
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_45
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_46
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_47
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_48
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_49
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_50
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_51
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_52
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_53
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_54
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_55
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_56
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_57
                }
            ]
        }, 1).wait(1));
        // Layer_1
        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape_58.setTransform(802.0321, 582.45);
        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgPBmQAmghgJgwQgDgPgGgNQgXguAMgaQAJgQALgG");
        this.shape_59.setTransform(801.8011, 582.475);
        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgNBnQAfgjgGgvQgCgPgFgNQgRgtAKgbQAGgQAKgH");
        this.shape_60.setTransform(801.625, 582.425);
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgMBnQAZglgEguQAAgPgEgMQgMgtAHgbQAFgQAIgH");
        this.shape_61.setTransform(801.5, 582.4);
        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgLBoQASgngBgtQABgPgCgMQgHgsAFgcQADgPAGgJ");
        this.shape_62.setTransform(801.4, 582.35);
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgLQgCgsADgdQABgPAEgJ");
        this.shape_63.setTransform(801.275, 582.325);
        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBoQAGgpADgrQADgPABgMQAEgqAAgdQAAgQABgJ");
        this.shape_64.setTransform(801.15, 582.3);
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgBgrAHgqQADgPACgLQAKgrgCgeQgDgPAAgK");
        this.shape_65.setTransform(801.2156, 582.25);
        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgJBpQgHgsAJgqQAGgOADgLQAPgqgFgeQgEgPgDgL");
        this.shape_66.setTransform(801.1671, 582.225);
        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AgIBpQgOgtAMgpQAHgOAEgLQAVgqgHgeQgHgPgEgL");
        this.shape_67.setTransform(801.0798, 582.175);
        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAChpIAPAbQAKAggVAfIgTAfQgPApAVAw");
        this.shape_68.setTransform(801.0209, 582.15);
        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f().s("rgba(255,255,255,0.945)").ss(2, 1, 1).p("AgHBpQgRguANgpQAHgOAFgKQAXgqgIgeQgHgPgGgL");
        this.shape_69.setTransform(781.233, 556.125);
        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("rgba(255,255,255,0.89)").ss(2, 1, 1).p("AgIBpQgNgtALgqQAHgNAEgLQAVgqgIgeQgGgPgEgL");
        this.shape_70.setTransform(761.4984, 530.075);
        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f().s("rgba(255,255,255,0.831)").ss(2, 1, 1).p("AgIBpQgKgtAKgpQAGgOAEgLQARgqgGgeQgFgPgDgL");
        this.shape_71.setTransform(741.7469, 504.025);
        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("rgba(255,255,255,0.776)").ss(2, 1, 1).p("AgJBpQgGgsAJgqQAFgOADgLQAOgqgFgeQgDgPgDgL");
        this.shape_72.setTransform(721.9806, 477.975);
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f().s("rgba(255,255,255,0.722)").ss(2, 1, 1).p("AgJBoQgCgqAHgrQAEgOACgLQALgqgDgeQgDgPgBgK");
        this.shape_73.setTransform(702.2268, 451.95);
        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f().s("rgba(255,255,255,0.667)").ss(2, 1, 1).p("AgJBoQACgqAFgrQADgOACgLQAIgrgBgeQgCgPAAgJ");
        this.shape_74.setTransform(682.3868, 425.925);
        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f().s("rgba(255,255,255,0.612)").ss(2, 1, 1).p("AgIBoQAFgpADgrQAEgPABgLQAEgrAAgeQAAgPABgJ");
        this.shape_75.setTransform(662.55, 399.875);
        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f().s("rgba(255,255,255,0.557)").ss(2, 1, 1).p("AgJBoQAJgpACgsQADgOAAgMQABgrACgdQAAgPACgJ");
        this.shape_76.setTransform(642.8, 373.85);
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f().s("rgba(255,255,255,0.502)").ss(2, 1, 1).p("AgKBoQAMgoABgsQACgPAAgMQgCgrADgdQABgPAEgJ");
        this.shape_77.setTransform(623.075, 347.825);
        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f().s("rgba(255,255,255,0.443)").ss(2, 1, 1).p("AgKBoQAOgnABgsQABgPgBgNQgFgrAEgcQACgQAFgJ");
        this.shape_78.setTransform(603.35, 321.75);
        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f().s("rgba(255,255,255,0.388)").ss(2, 1, 1).p("AgLBnQATgmgBgtQAAgPgCgMQgHgsAFgcQADgPAGgI");
        this.shape_79.setTransform(583.6, 295.725);
        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f().s("rgba(255,255,255,0.333)").ss(2, 1, 1).p("AgMBnQAXglgDgtQAAgPgDgNQgKgsAGgcQAFgPAHgI");
        this.shape_80.setTransform(563.875, 269.675);
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f().s("rgba(255,255,255,0.278)").ss(2, 1, 1).p("AgMBnQAagkgEguQgBgPgEgNQgNgtAIgbQAFgQAIgH");
        this.shape_81.setTransform(544.125, 243.65);
        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("rgba(255,255,255,0.224)").ss(2, 1, 1).p("AgNBnQAegkgGguQgBgPgEgNQgRgtAKgbQAGgQAJgH");
        this.shape_82.setTransform(524.4, 217.625);
        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f().s("rgba(255,255,255,0.169)").ss(2, 1, 1).p("AgNBnQAhgjgHgvQgCgPgFgNQgUgtAMgbQAGgQALgH");
        this.shape_83.setTransform(504.65, 191.575);
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f().s("rgba(255,255,255,0.11)").ss(2, 1, 1).p("AgPBmQAlghgIgvQgCgQgHgNQgXguANgaQAIgQAMgG");
        this.shape_84.setTransform(484.9696, 165.525);
        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f().s("rgba(255,255,255,0.055)").ss(2, 1, 1).p("AgQBmQApgggKgwQgDgQgHgNQgaguAOgaQAJgQANgG");
        this.shape_85.setTransform(465.2962, 139.475);
        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f().s("rgba(255,255,255,0)").ss(2, 1, 1).p("AAQhmQgPAGgIAOQgTAbAXAlIAHALQAJAPADAPQALAvgsAh");
        this.shape_86.setTransform(445.6321, 113.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [
                {
                    t: this.shape_58
                }
            ]
        }, 51).to({
            state: [
                {
                    t: this.shape_59
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_60
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_61
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_62
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_63
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_64
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_65
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_66
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_67
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_68
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_69
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_70
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_71
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_72
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_73
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_74
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_75
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_76
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_77
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_78
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_79
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_80
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_81
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_82
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_83
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_84
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_85
                }
            ]
        }, 1).to({
            state: [
                {
                    t: this.shape_86
                }
            ]
        }, 1).wait(1));
        // Coffee
        this.instance = new lib.ClipGroup();
        this.instance.setTransform(455.9, 86.85, 1, 1, 0, 0, 0, 21.2, 22.4);
        this.instance._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
            _off: false
        }, 0).wait(1).to({
            regX: 24.1,
            x: 458.8,
            y: 102.85
        }, 0).wait(1).to({
            y: 118.85
        }, 0).wait(1).to({
            y: 134.85
        }, 0).wait(1).to({
            y: 150.85
        }, 0).wait(1).to({
            y: 146.85
        }, 0).wait(1).to({
            y: 142.85
        }, 0).wait(1).to({
            y: 146.85
        }, 0).wait(1).to({
            y: 150.85
        }, 0).wait(1).to({
            y: 148.85
        }, 0).wait(1).to({
            y: 146.85
        }, 0).wait(1).to({
            y: 148.85
        }, 0).wait(1).to({
            y: 150.85
        }, 0).wait(29));
        // Phone
        this.instance_1 = new lib.ClipGroup_1();
        this.instance_1.setTransform(386.6, 82.05, 1, 1, 0, 0, 0, 21.8, 38.4);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({
            _off: false
        }, 0).wait(1).to({
            regX: 22.8,
            regY: 40.6,
            x: 387.6,
            y: 96.35
        }, 0).wait(1).to({
            y: 108.45
        }, 0).wait(1).to({
            y: 120.55
        }, 0).wait(1).to({
            y: 132.65
        }, 0).wait(1).to({
            y: 130.55
        }, 0).wait(1).to({
            y: 128.45
        }, 0).wait(1).to({
            y: 130.55
        }, 0).wait(1).to({
            y: 132.65
        }, 0).wait(1).to({
            y: 131.65
        }, 0).wait(1).to({
            y: 130.65
        }, 0).wait(1).to({
            y: 131.65
        }, 0).wait(1).to({
            y: 132.65
        }, 0).wait(37));
        // Pot
        this.instance_2 = new lib.ClipGroup_3();
        this.instance_2.setTransform(95.6, 25.9, 1, 1, 0, 0, 0, 28.7, 25.9);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({
            _off: false
        }, 0).wait(1).to({
            y: 56.25
        }, 0).wait(1).to({
            y: 86.65
        }, 0).wait(1).to({
            y: 117.05
        }, 0).wait(1).to({
            y: 147.45
        }, 0).wait(1).to({
            y: 139.45
        }, 0).wait(1).to({
            y: 131.45
        }, 0).wait(1).to({
            y: 139.45
        }, 0).wait(1).to({
            y: 147.45
        }, 0).wait(1).to({
            y: 143.45
        }, 0).wait(1).to({
            y: 139.45
        }, 0).wait(1).to({
            y: 143.45
        }, 0).wait(1).to({
            y: 147.45
        }, 0).wait(50));
        // Plant
        this.instance_3 = new lib.ClipGroup_2();
        this.instance_3.setTransform(97.2, 146.95, 0.5385, 0.5644, 0, 0, 0, 26.9, 48.6);
        this.instance_3._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({
            _off: false
        }, 0).wait(1).to({
            regX: 27,
            regY: 24.9,
            scaleX: 0.6557,
            scaleY: 0.6873,
            x: 97.4,
            y: 125
        }, 0).wait(1).to({
            scaleX: 0.773,
            scaleY: 0.8102,
            x: 97.6,
            y: 116.45
        }, 0).wait(1).to({
            scaleX: 0.8903,
            scaleY: 0.9331,
            x: 97.85,
            y: 108
        }, 0).wait(1).to({
            scaleX: 1.0075,
            scaleY: 1.056,
            x: 98.05,
            y: 99.45
        }, 0).wait(45));
        // Laptop_whole
        this.instance_4 = new lib.ClipGroup_7();
        this.instance_4.setTransform(245.75, 115.65, 1, 1, 0, 0, 0, 93.4, 53.1);
        this.instance_4._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({
            _off: false
        }, 0).wait(54));
        // Laptop_closed
        this.instance_5 = new lib.ClipGroup_6();
        this.instance_5.setTransform(245.75, 48.45, 1, 1, 0, 0, 0, 93.4, 7.2);
        this.instance_5._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({
            _off: false
        }, 0).wait(1).to({
            regY: 9.9,
            y: 73.55
        }, 0).wait(1).to({
            y: 95.95
        }, 0).wait(1).to({
            y: 118.35
        }, 0).wait(1).to({
            y: 140.75
        }, 0).wait(1).to({
            y: 163.15
        }, 0).wait(1).to({
            y: 159.15
        }, 0).wait(1).to({
            y: 155.15
        }, 0).wait(1).to({
            y: 159.15
        }, 0).wait(1).to({
            y: 163.15
        }, 0).wait(1).to({
            y: 161.15
        }, 0).wait(1).to({
            y: 159.15
        }, 0).wait(1).to({
            y: 161.15
        }, 0).wait(1).to({
            y: 163.15
        }, 0).wait(1).to({
            regY: 7.2,
            y: 160.45
        }, 0).to({
            _off: true
        }, 3).wait(59));
        // Screen
        this.instance_6 = new lib.ClipGroup_4();
        this.instance_6.setTransform(245.75, 161.1, 1, 0.0387, 0, 0, 0, 89.5, 96.8);
        this.instance_6._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({
            _off: false
        }, 0).wait(1).to({
            regX: 89.4,
            regY: 48.8,
            scaleY: 0.2786,
            x: 245.65,
            y: 147.7
        }, 0).wait(1).to({
            scaleY: 0.5184,
            y: 136.2
        }, 0).wait(1).to({
            scaleY: 0.7582,
            y: 124.7
        }, 0).wait(1).to({
            scaleY: 0.998,
            y: 113.15
        }, 0).wait(1).to({
            regY: 96.5,
            scaleY: 1,
            y: 161.05
        }, 0).to({
            _off: true
        }, 1).wait(54));
        // Laptop_base
        this.instance_7 = new lib.ClipGroup_5();
        this.instance_7.setTransform(245.75, 166.55, 1, 1, 0, 0, 0, 93.4, 6.5);
        this.instance_7._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({
            _off: false
        }, 0).wait(7).to({
            y: 166.6
        }, 0).to({
            _off: true
        }, 1).wait(52));
        // Table_line
        this.instance_8 = new lib.Symbol1();
        this.instance_8.setTransform(270.45, 174.35, 0.0428, 1, 0, 0, 0, 269.8, 0);
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({
            regX: 270.8,
            scaleX: 0.2817,
            x: 270.75
        }, 0).wait(1).to({
            scaleX: 0.5206,
            x: 271
        }, 0).wait(1).to({
            scaleX: 0.7595,
            x: 271.2
        }, 0).wait(1).to({
            scaleX: 0.9984,
            x: 271.45
        }, 0).wait(76));
        this._renderFirstFrame();
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(271.6, 87.5, 552.9, 506.20000000000005);
    // library properties:
    lib.properties = {
        id: "4A3911FE526E4FFF8736E43563AB9226",
        width: 543,
        height: 175,
        fps: 30,
        color: "#999999",
        opacity: 0.00,
        manifest: [
            {
                src: "images/Homepage_animationCanvas_atlas_1.png",
                id: "Homepage_animationCanvas_atlas_1"
            }
        ],
        preloads: []
    };
    // bootstrap callback support:
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    };
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
    };
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    };
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    };
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    };
    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    };
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) an.bootstrapListeners = [];
    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) for(var i = 0; i < an.bootcompsLoaded.length; ++i)fnCallback(an.bootcompsLoaded[i]);
    };
    an.compositions = an.compositions || {};
    an.compositions["4A3911FE526E4FFF8736E43563AB9226"] = {
        getStage: function() {
            return exportRoot.stage;
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j = 0; j < an.bootstrapListeners.length; j++)an.bootstrapListeners[j](id);
    };
    an.getComposition = function(id) {
        return an.compositions[id];
    };
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if (respDim == "width" && lastW == iw || respDim == "height" && lastH == ih) sRatio = lastS;
                else if (!isScale) {
                    if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) sRatio = Math.min(xRatio, yRatio);
                else if (scaleType == 2) sRatio = Math.max(xRatio, yRatio);
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {
                container.style.width = w * sRatio + "px";
                container.style.height = h * sRatio + "px";
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    };
    an.handleSoundStreamOnTick = function(event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) stageChild.syncStreamSounds();
        }
    };
    an.handleFilterCache = function(event) {
        if (!event.paused) {
            var target = event.target;
            if (target) {
                if (target.filterCacheList) for(var index = 0; index < target.filterCacheList.length; index++){
                    var cacheInst = target.filterCacheList[index];
                    if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                }
            }
        }
    };
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

//# sourceMappingURL=index.18b58606.js.map
