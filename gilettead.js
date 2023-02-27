(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"gilettead_atlas_1", frames: [[402,842,182,571],[0,842,400,400],[0,0,750,840]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Gillettelogo = function() {
	this.initialize(img.Gillettelogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5000,3000);


(lib.pngimgcomgillette_razor_PNG18496 = function() {
	this.initialize(ss["gilettead_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pngimgcomgillette_razor_PNG77095pngcopy = function() {
	this.initialize(ss["gilettead_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sp_fusion_hydra_gel_cooling_shave_gel_402x = function() {
	this.initialize(ss["gilettead_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(6,1,1).p("AnBlFIODAAIAAKLIuDAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AnBFGIAAqLIODAAIAAKLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-35.6,96,71.2);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(6,1,1).p("AnBlFIODAAIAAKLIuDAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AnBFGIAAqLIODAAIAAKLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-35.6,96,71.2);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Everything You Need To Shave for Just 5.99!", "normal 400 18px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 31;
	this.text.lineWidth = 407;
	this.text.parent = this;
	this.text.setTransform(-209.5,-29.95);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-31.9,411,55.9);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Everything You Need To Shave for Just 5.99!", "20px 'Tw Cen MT Condensed Extra Bold'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 337;
	this.text.alpha = 0.04705882;
	this.text.parent = this;
	this.text.setTransform(-220.05,-18.4081,1.2287,1.2287);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.5,-20.8,419,41.7);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Look Sharp…Feel Sharp…Be Sharp!", "26px 'Tw Cen MT Condensed Extra Bold'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 366;
	this.text.alpha = 0.11764706;
	this.text.parent = this;
	this.text.setTransform(-188,-31.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-33.9,370,62.3);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("", "14px 'TwCenMT-CondensedExtraBold'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 100;
	this.text.alpha = 0.12156863;
	this.text.parent = this;
	this.text.setTransform(-382.95,255.8);

	this.text_1 = new cjs.Text("Look Sharp…Feel Sharp…Be Sharp!", "normal 400 14px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 223;
	this.text_1.parent = this;
	this.text_1.setTransform(-220.8,-137.6,1.0969,1.6808);
	if(!lib.properties.webfonts['Oswald']) {
		lib.webFontTxtInst['Oswald'] = lib.webFontTxtInst['Oswald'] || [];
		lib.webFontTxtInst['Oswald'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384.9,-140.9,410.9,413.9);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sp_fusion_hydra_gel_cooling_shave_gel_402x();
	this.instance.setTransform(-93.35,-104.55,0.2489,0.2489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,-104.5,186.7,209.1);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sp_fusion_hydra_gel_cooling_shave_gel_402x();
	this.instance.setTransform(-93.35,-104.55,0.2489,0.2489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,-104.5,186.7,209.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngimgcomgillette_razor_PNG77095pngcopy();
	this.instance.setTransform(-90,-90,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngimgcomgillette_razor_PNG77095pngcopy();
	this.instance.setTransform(-90,-90,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.razor1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// razor1
	this.instance = new lib.pngimgcomgillette_razor_PNG18496();
	this.instance.setTransform(0,0,0.4066,0.4066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.razor1, new cjs.Rectangle(0,0,74,232.2), null);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SHOP NOW", "21px 'Arial Rounded MT Bold'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(-33,-25.3);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(-203,-96.45,1,1,0,0,0,168,140);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-27.3,70,54.6);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SHOP NOW", "21px 'Arial Rounded MT Bold'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(-90,-74.15,1,1,0,0,0,168,140);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,54.6);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button();
	this.instance.setTransform(-45,-37.1,1,1,0,0,0,-10,-9.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-241.4,328,268.7);


// stage content:
(lib.gilettead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(371,236.45);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.setTransform(293,241.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({_off:true,x:293,y:241.45},6).wait(1));

	// square
	this.instance_3 = new lib.Tween15("synched",0);
	this.instance_3.setTransform(371,236.45);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween16("synched",0);
	this.instance_4.setTransform(291,240.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({_off:true,x:291,y:240.6},6).wait(1));

	// deal
	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(-155.45,139);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.setTransform(254.5,151.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},45).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:254.5,y:151.8,alpha:1},45).wait(1));

	// text
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.setTransform(-162.95,131.55);
	this.instance_7.alpha = 0.1484;

	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.setTransform(310,207.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},31).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:310,y:207.2,alpha:1},31,cjs.Ease.bounceIn).wait(15));

	// slogan
	this.text = new cjs.Text("", "11px 'TwCenMT-CondensedExtraBold'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(473,107);

	this.text_1 = new cjs.Text("THE BEST A MAN CAN GET", "normal 400 15px 'Bebas Neue'", "#FFFFFF");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 127;
	this.text_1.parent = this;
	this.text_1.setTransform(9,42.35);
	if(!lib.properties.webfonts['Bebas Neue']) {
		lib.webFontTxtInst['Bebas Neue'] = lib.webFontTxtInst['Bebas Neue'] || [];
		lib.webFontTxtInst['Bebas Neue'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{lineWidth:127}},{t:this.text,p:{font:"11px 'TwCenMT-CondensedExtraBold'",color:"#FFFFFF",lineHeight:15}}]}).to({state:[{t:this.text_1,p:{lineWidth:158}},{t:this.text,p:{font:"20px 'Gf-Cabin-Regular'",color:"#000000",lineHeight:30.85}}]},45).wait(1));

	// logo
	this.instance_9 = new lib.Gillettelogo();
	this.instance_9.setTransform(10,-10,0.0254,0.0254);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46));

	// shavingcream
	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(59.35,368.55);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.setTransform(73.35,265.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({_off:true,x:73.35,y:265.5},15).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},15).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// razor1
	this.instance_12 = new lib.razor1();
	this.instance_12.setTransform(166,380,1,1,0,0,0,37,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:267},15).wait(31));

	// razor2
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(168,387);

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(166,263);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,x:166,y:263},15).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:false},15).to({x:213},14).wait(3).to({x:221},0).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-209.9,130,784.9,366.2);
// library properties:
lib.properties = {
	id: '5C74723EB9B1CB45A66D0EFE36B85FE6',
	width: 336,
	height: 280,
	fps: 30,
	color: "#71A3FF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Gillettelogo.png?1676573450755", id:"Gillettelogo"},
		{src:"images/gilettead_atlas_1.png?1676573450695", id:"gilettead_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5C74723EB9B1CB45A66D0EFE36B85FE6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;