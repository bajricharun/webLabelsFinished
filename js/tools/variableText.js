if (!com) var com = {};
if (!com.logicpartners) com.logicpartners = {};
if (!com.logicpartners.designerTools) com.logicpartners.designerTools = {};

com.logicpartners.designerTools.variableText = function () {
  var self = this;
  this.counter = 1;
  this.button = $("<div class='fa fa-text-width'></div>")
    .addClass("designerToolbarVariableText designerToolbarButton")
    .attr("title", "Variable Text")
    .append($("<div></div>"));

  this.object = function (x, y, width, height, textTitle) {
    this.name = "VarText " + self.counter++;
    this.text = textTitle || this.name;
    this.x = x;
    this.y = y;
    this.fontSize = 36;
    this.fontType = "Arial";
    this.strikethrough = "false";
    this.underlined = "false";
    this.width = 100;
    this.height = 0;

    this.readonly = ["width", "height"];

    this.getFontHeight = function () {
      var textMeasure = $("<div></div>")
        .css({
          "font-size": this.fontSize + "px",
          "font-family": this.fontType,
          opacity: 0,
        })
        .text("M")
        .appendTo($("body"));

      var height = textMeasure.outerHeight();
      textMeasure.remove();
      return height;
    };

    this.getZPLData = function () {
      return "";
    };

    this.toZPL = function (labelx, labely, labelwidth, labelheight) {
      return (
        "^FO" +
        (this.x - labelx) +
        "," +
        (this.y - labely) +
        "^FV" +
        this.text +
        "^FS"
      );
    };

    this.draw = function (context) {
      context.font = this.fontSize + "px " + this.fontType;
      var oColor = context.fillStyle;
      context.fillStyle = "white";
      this.height = this.getFontHeight();
      var measuredText = context.measureText(this.text);
      this.width = measuredText.width;
      context.globalCompositeOperation = "difference";
      context.fillText(this.text, this.x, this.y + this.height * 0.75);
      context.globalCompositeOperation = "source-over";
      context.fillStyle = oColor;

      newY = this.y + this.getFontHeight() / 2;
      underlineY = this.y + this.getFontHeight();
      if (this.strikethrough == "true") {
        context.fillRect(this.x, newY, this.width, 4);
      }
      if (this.underlined == "true") {
        context.fillRect(this.x, underlineY, this.width, 4);
      }
      //context.fillRect(this.x, this.y, this.width, this.height);
    };

    this.setWidth = function (width) {
      //this.width = width;
    };

    this.getWidth = function () {
      return this.width;
    };

    this.setHeight = function (height) {
      //height = height;
    };

    this.getHeight = function () {
      return this.height * 0.75;
    };

    this.setHandle = function (coords) {
      this.handle = this.resizeZone(coords);
    };

    this.getHandle = function () {
      return this.handle;
    };

    this.drawActive = function (context) {
      context.dashedStroke(
        parseInt(this.x + 1),
        parseInt(this.y + 1),
        parseInt(this.x) + parseInt(this.width) - 1,
        parseInt(this.y) + parseInt(this.height * 0.9) - 1,
        [2, 2]
      );
    };

    this.hitTest = function (coords) {
      return (
        coords.x >= parseInt(this.x) &&
        coords.x <= parseInt(this.x) + parseInt(this.width) &&
        coords.y >= parseInt(this.y) &&
        coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75
      );
    };

    this.GetElementType = function () {
      return "variableText";
    };
  };
};
