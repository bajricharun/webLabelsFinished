if (!com) var com = {};
if (!com.logicpartners) com.logicpartners = {};
if (!com.logicpartners.designerTools) com.logicpartners.designerTools = {};
function sendErrorCode(errorCode) {
  var element = document.getElementById("warningB");
  var warningArr = [
    "",
    "Incorrect text.",
    "Length of the text is too small.",
    "Length of the bar exceeds standards.",
    "Text bar cannot be empty",
  ];
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
  var appendEl = $("<p>" + warningArr[errorCode] + "</p>")
    .addClass("text-light")
    .appendTo(element);
}

function sendZPL(
  zplStartCommand,
  displayValue,
  x,
  y,
  height,
  labelX,
  labelY,
  labelWidth,
  labelHeight,
  specialCaseNum,
  codeText
) {
  var ZPLString = "";
  var stringForText = "";
  if (displayValue == 1) {
    stringForText = "";
  } else {
    stringForText = "N,N";
  }
  var specialCode128 = [">C", ">:", ">;"];
  if (zplStartCommand == "^BC") {
    ZPLString =
      "^FO" +
      (x - labelX) +
      "," +
      (y - labelY) +
      "^BY1" +
      zplStartCommand +
      "N," +
      height +
      stringForText +
      "^FD" +
      specialCode128[specialCaseNum] +
      codeText +
      "^FS";
  } else {
    ZPLString =
      "^FO" +
      (x - labelX) +
      "," +
      (y - labelY) +
      "^BY1" +
      zplStartCommand +
      "N," +
      height +
      stringForText +
      "^FD" +
      codeText +
      "^FS";
  }
  return ZPLString;
}
/* 
  "^FO" +
          (this.x - labelx) +
          "," +
          (this.y - labely) +
          "^BY1^B9N," +
          this.height +
          stringForText +
          "^FD" +
          this.text +
          "^FS"
*/
com.logicpartners.designerTools.barcode = function () {
  var self = this;

  this.counter = 1;
  this.button = $("<div class='fa fa-barcode'></div>")
    .addClass("designerToolbarBarcode designerToolbarButton")
    .attr("title", "Barcode - Code 39")
    .append($("<div></div>"));
  this.object = function (x, y, width, height, barcodeTitle) {
    var width = 100;
    var canvasHolder = $("<canvas></canvas>")
      .prop("width", "100")
      .prop("height", "1");
    this.text = barcodeTitle || "BARCODE";
    this.barcodeType = "code39";
    this.x = x;
    this.displayValue = "true";
    this.y = y;
    this.height = height;
    this.width = width;

    this.readonly = ["width"];

    this.getZPLData = function () {
      return "";
    };
    this.toZPL = function (labelx, labely, labelwidth, labelheight) {
      var displayValue = 0;
      if (this.displayValue == "true") {
        displayValue = 1;
      } else {
        displayValue = 0;
      }
      if (this.barcodeType == "code39") {
        return sendZPL(
          "^B3",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      } else if (this.barcodeType == "ean8") {
        return sendZPL(
          "^B8",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      } else if (this.barcodeType == "ean13") {
        return sendZPL(
          "^BE",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      } else if (this.barcodeType == "upc") {
        return sendZPL(
          "^B9",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      } else if (
        this.barcodeType == "code128a" ||
        this.barcodeType == "code128"
      ) {
        return sendZPL(
          "^BC",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      } else if (this.barcodeType == "code128b") {
        return sendZPL(
          "^BC",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          1,
          this.text
        );
      } else if (this.barcodeType == "code128c") {
        return sendZPL(
          "^BC",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          2,
          this.text
        );
      } else if (this.barcodeType == "itf") {
        return sendZPL(
          "^B2",
          displayValue,
          this.x,
          this.y,
          this.height,
          labelx,
          labely,
          labelwidth,
          labelheight,
          0,
          this.text
        );
      }
    };

    this.draw = function (context) {
      var regexEAN8 = /[a-zA-Z\s!@#$%^&*()_+.?><,:;'"]/;
      var regexCODE39 = /[!@#^&*()_=:;<>?"']/;
      var regexEAN13 = /[a-zA-Z\s!@#$%^&*()_+.?><,:;'"]/;
      var regexUPCA = /[a-zA-Z\s!@#$%^&*()_+.?><,:;'"\[\]]/;

      if (this.barcodeType == "ean8") {
        if (regexEAN8.test(this.text)) {
          sendErrorCode(1);
        } else if (this.text.length < 7) {
          sendErrorCode(2);
        } else if (this.text.length > 7) {
          sendErrorCode(3);
        } else if (this.text.length == "0") {
          sendErrorCode(4);
        } else {
          sendErrorCode(0);
        }
      } else if (this.barcodeType == "code39") {
        if (regexCODE39.test(this.text)) {
          sendErrorCode(1);
        } else if (this.text.length == "0") {
          sendErrorCode(4);
        } else {
          sendErrorCode(0);
        }
      } else if (this.barcodeType == "ean13") {
        if (regexEAN13.test(this.text)) {
          sendErrorCode(1);
        } else if (this.text.length < 12) {
          sendErrorCode(2);
        } else if (this.text.length > 12) {
          sendErrorCode(3);
        } else if (this.text.length == "0") {
          sendErrorCode(4);
        } else {
          sendErrorCode(0);
        }
      } else if (this.barcodeType == "upc") {
        if (regexUPCA.test(this.text)) {
          sendErrorCode(1);
        } else if (this.text.length < 11) {
          sendErrorCode(2);
        } else if (this.text.length > 11) {
          sendErrorCode(3);
        } else if (this.text.length == "0") {
          sendErrorCode(4);
        } else {
          sendErrorCode(0);
        }
      }

      var d1 = document.getElementById("labelDesigner");
      d1.insertAdjacentHTML(
        "beforeend",
        '<img id="two" draggable="true"></img>'
      );

      var booleanVal = true;
      if (this.displayValue === "true") {
        booleanVal = true;
      } else {
        booleanVal = false;
      }
      JsBarcode("#two", this.text, {
        format: this.barcodeType,
        lineColor: "#000",
        background: "#ffffff99",
        displayValue: booleanVal,
        height: this.height,
        textPosition: "bottom",
        textAlign: "center",
      });
      ctx = d1.getContext("2d");
      var image = document.getElementById("two");

      ctx.drawImage(image, this.x, this.y);
      var cwidth = image.width;
      var cheight = image.height;
      width = cwidth;
    };

    this.setWidth = function (width) {
      this.width = width;
    };

    this.getWidth = function () {
      return width;
    };

    this.setHeight = function (height) {
      this.height = height;
    };

    this.getHeight = function () {
      return this.height;
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
        parseInt(this.x) + parseInt(width) - 1,
        parseInt(this.y) + parseInt(this.height) + 50,
        [2, 2]
      );
    };
    this.hitTest = function (coords) {
      return (
        coords.x >= parseInt(this.x) &&
        coords.x <= parseInt(this.x) + parseInt(width) &&
        coords.y >= parseInt(this.y) &&
        coords.y <= parseInt(this.y) + parseInt(this.height)
      );
    };

    this.GetElementType = function () {
      return "barcode";
    };
  };
};
