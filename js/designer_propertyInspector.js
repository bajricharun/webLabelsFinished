if (!com) var com = {};
if (!com.logicpartners) com.logicpartners = {};

com.logicpartners.propertyInspector = function (designer, canvas) {
  this.canvas = canvas;
  this.canvasElement = $(canvas);
  this.labelDesigner = designer;
  this.activeElement = null;
  this.propertyNodes = {};
  this.boundingBox = null;
  var self = this;

  // Create the property window.
  this.propertyInspector = $("<div></div>")
    .addClass(
      "designerUtilityWindow col-xl-6 col-sm-6 col-md-6 offset-md-2 offset-xl-2 offset-sm-2"
    )
    .css({
      left: screen.width - 2 + "px",
      width: "max-content",
      top: this.canvas.getBoundingClientRect().top,
    })
    //.draggable({handle: "div.designerPropertyTitle"})
    .insertAfter(this.canvasElement);

  this.updatePosition = function (xchange) {
    this.propertyInspector.css(
      "left",
      parseInt(this.propertyInspector.css("left")) + xchange
    );
    this.boundingBox = this.propertyInspector[0].getBoundingClientRect();
  };

  this.propertyViewContainer = $("<div id='drag'></div>")
    .addClass("designerPropertyContainer")
    .resizable({
      resize: function (event, ui) {
        ui.size.width = ui.originalSize.width;
      },
    })
    .appendTo(this.propertyInspector);

  this.draggable = $(
    "<div id='dragheader' class='bg-dark' draggable='true'><p class='text-light center'>Click here to drag</p></div>"
  )
    .addClass("moveable")
    .css({
      height: "50px",
      textAlign: "center",
      cursor: "move",
      "z-index": "9",
    })
    .appendTo(this.propertyViewContainer);
  this.propertyView = $("<div></div>")
    .addClass("designerPropertyContent")
    .css({
      marginBottom: "10px",
      marginTop: "10px",
      padding: "5px",
    })
    .appendTo(this.propertyViewContainer);

  this.warning = $("<div class='bg-dark' id='warningB'></div>")
    .addClass("warningBox")
    .css({
      height: "50px",
      textAlign: "center",
    })
    .appendTo(this.propertyViewContainer);
  this.update = function (activeElement) {
    var self = this;
    var getType = {};
    var keys = [];

    if (this.activeElement == activeElement) {
      for (var key in activeElement) {
        if (
          !activeElement.readonly ||
          (key != "readonly" && $.inArray(key, activeElement.readonly) == -1)
        ) {
          if (
            getType.toString.call(activeElement[key]) != "[object Function]"
          ) {
            this.propertyNodes[key].val(activeElement[key]);
          }
        }
      }
    } else {
      this.activeElement = activeElement;
      this.propertyView.html("");

      for (var key in activeElement) {
        if (!keys[key]) {
          keys[key] = true;

          if (
            key != "readonly" &&
            getType.toString.call(activeElement[key]) != "[object Function]"
          ) {
            var elementKey = $(
              "<div class='form-group col'><label class='col-xl-12 col-sm-12 col-md-12 col-form-label'>" +
                key +
                "</label></div>"
            ).css({
              height: "20px",
              float: "left",
              "line-height": "20px",
              "border-right": "none",
              "text-align": "center",
              "padding-right": "5px",
              "margin-left": "5px",
            });
            var elementValue = $(
              '<input style="z-index:10;" class="form-control type="text" Name="' +
                key +
                '" value="' +
                activeElement[key] +
                '"></div>'
            ).css({
              "margin-left": "75px",
              width: "150px",
              height: "22px",
              "line-height": "20px",
              "padding-left": "5px",
            });

            if (
              !activeElement.readonly ||
              $.inArray(key, activeElement.readonly) == -1
            ) {
              elementValue.on("keyup", { objectProperty: key }, function (
                event
              ) {
                var data = self.activeElement[event.data.objectProperty];
                self.activeElement[event.data.objectProperty] =
                  data === parseInt(data, 10)
                    ? parseInt($(this).val())
                    : $(this).val();
                self.labelDesigner.updateCanvas();
              });
            } else {
              // Draw readonly textbox.
              elementValue.prop("readonly", true).css({
                "background-color": "grey",
                color: "black",
              });
            }

            this.propertyNodes[key] = elementValue;

            var elementContainer = $("<div></div>")
              .css({
                clear: "both",
                "padding-top": "2px",
              })
              .append(elementKey)
              .append(elementValue);
            this.propertyView.append(elementContainer);
          }
        }
      }
    }
  };

  this.updatePosition(0);

  dragElement(document.getElementById("drag"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
};
