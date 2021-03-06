if (!com) var com = {};
if (!com.logicpartners) com.logicpartners = {};

com.logicpartners.toolsWindow = function (designer, canvas) {
  this.canvas = canvas;
  this.canvasElement = $(canvas);
  this.labelDesigner = designer;
  this.boundingBox = null;
  var self = this;

  // Create the property window.
  this.toolsWindow = $("<div></div>")
    .addClass(
      "designerUtilityToolbar col-xl-8 col-md-8 col-sm-8 offset-md-2 offset-xl-2 offset-sm-2"
    )
    .css({
      height: "max-content",
      paddingLeft: "2px",
      paddingRight: "2px",
      border: "solid grey 2px",
      "justify-items": "center",
      "justify-self": "center",
      "text-align": "center",
      "justify-content": "center",
      "align-content": "center",
      "align-items": "center",
      "align-self": "center",
      bottom: 15,
    })
    //.draggable({handle: "div.designerPropertyTitle"})
    .insertAfter(this.canvasElement);

  this.toolsViewContainer = $("<div></div>")
    .addClass("designerToolbarContent")
    .resizable({
      resize: function (event, ui) {
        ui.size.width = ui.originalSize.width;
      },
    })
    .appendTo(this.toolsWindow);

  this.titleBar = $("<div>Tools</div>")
    .addClass("designerPropertyTitle")
    .prependTo(this.toolsWindow)
    .on("dblclick", function () {
      self.toolsViewContainer.toggle();
    });

  this.buttonView = $("<div></div>").appendTo(this.toolsViewContainer);

  this.setTool = function (controller) {
    if (self.labelDesigner.newObjectController == controller) {
      self.labelDesigner.setNewObject(null);
      controller.button.removeClass("designerToolbarButtonActive");
    } else {
      if (self.labelDesigner.newObjectController)
        self.labelDesigner.newObjectController.button.removeClass(
          "designerToolbarButtonActive"
        );
      self.labelDesigner.setNewObject(controller);
      if (controller) {
        controller.button.addClass("designerToolbarButtonActive");

        if (controller.activate) controller.activate(this);
      }
    }
  };

  this.addTool = function (controller) {
    var self = this;
    controller.button.on("click", { tool: controller }, function (event) {
      self.setTool(event.data.tool);
    });

    this.buttonView.append(controller.button);
  };

  this.updatePosition = function (xchange) {
    this.boundingBox = this.toolsWindow[0].getBoundingClientRect();
  };

  this.update = function (activeElement) {};

  this.updatePosition(0);
};
