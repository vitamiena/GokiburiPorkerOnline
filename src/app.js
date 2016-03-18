
var CardLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        // add the label as a child to this layer

        // add "HelloWorld" splash screen"
        this.gokiburi = new cc.Sprite(cards.Gokiburi);

        var scale = ( size.width / 10 ) / this.gokiburi.width;
        this.gokiburi.setScale(scale);
        this.gokiburi.setAnchorPoint(0, 0);
        this.gokiburi.attr({
            x: 0,
            y: 0
        });
        this.addChild(this.gokiburi, 0);

        return true;
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var backgroundLayer = new cc.LayerColor(cc.color(255, 255, 255, 255));
        this.addChild(backgroundLayer);

        var layer = new CardLayer();
        this.addChild(layer);
    }
});
