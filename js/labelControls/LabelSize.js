if (!com) var com = {};
if (!com.logicpartners) com.logicpartners = {};
if (!com.logicpartners.labelControl) com.logicpartners.labelControl = {};

com.logicpartners.labelControl.size = function (designer, IPAddress, PortNum) {
  var self = this;
  this.designer = designer;
  this.IPAddress = IPAddress;
  this.PortNumber = PortNum;
  this.workspace = $("<div></div>")
    .addClass("designerLabelControl designerLabelControls")
    .attr("title", "Settings");

  this.widthContainer = $(
    "<div class='form-group row'><div class='text-dark col-sm-2 col-form-label'>Width: </div>"
  )
    .addClass("designerLabelControlContainer")
    .appendTo(this.workspace);
  this.widthController = $('<input type="text"  class="form-control"/></div>')
    .addClass("designerLabelControlElement")
    .css({
      height: "max-content",
      width: "65px",
      marginLeft: "35px",
    })
    .val(this.designer.labelWidth / this.designer.dpi)
    .appendTo(this.widthContainer)
    .on("blur", function () {
      self.updateDesigner();
    })
    .on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault();
        self.updateDesigner();
      }
    });

  this.heightContainer = $(
    "<div class='form-group row'><div class='text-dark col-sm-2 col-form-label'>Height: </div>"
  )
    .addClass("designerLabelControlContainer")
    .appendTo(this.workspace);
  this.heightController = $('<input type="text" class="form-control" /></div>')
    .addClass("designerLabelControlElement")
    .css({
      width: "65px",
      marginLeft: "37px",
    })
    .val(this.designer.labelHeight / this.designer.dpi)
    .appendTo(this.heightContainer)
    .on("blur", function () {
      self.updateDesigner();
    })
    .on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault();
        self.updateDesigner();
      }
    });

  this.dpiContainer = $(
    "<div class='form-group row'><div class='text-dark col-sm-2 col-form-label'>DPI: </div>"
  )
    .addClass("designerLabelControlContainer")
    .appendTo(this.workspace);
  this.dpiController = $('<input type="text" class="form-control"/></div>')
    .addClass("designerLabelControlElement")
    .css({
      width: "65px",
      marginLeft: "15px",
    })
    .val(this.designer.dpi)
    .appendTo(this.dpiContainer)
    .on("blur", function () {
      self.updateDesigner();
    })
    .on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault();
        self.updateDesigner();
      }
    });

  this.IPAddressContainer = $(
    "<div class='form-group row'><div class='text-dark col col-form-label'>Printer IP Address: </div>"
  )
    .addClass("designerLabelControlContainer")
    .appendTo(this.workspace);
  this.IPAddressController = $(
    '<input type="text" class="form-control" /></div>'
  )
    .addClass("designerLabelControlElement")
    .css({
      width: "180px",
      marginLeft: "15px",
      marginRight: "20px",
    })
    .val(this.IPAddress)
    .appendTo(this.IPAddressContainer)
    .on("blur", function () {
      self.updateDesigner();
    })
    .on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault();
        self.updateDesigner();
      }
    });

  this.PortNumberContainer = $(
    "<div class='form-group row'><div class='text-dark col-sm-2 col-form-label'># </div>"
  )
    .addClass("designerLabelControlContainer")
    .appendTo(this.workspace);
  this.PortNumberController = $('<input type="text" class="form-control"/>')
    .addClass("designerLabelControlElement")
    .css({
      width: "75px",
    })
    .val(this.PortNumber)
    .appendTo(this.PortNumberContainer)
    .on("blur", function () {
      self.updateDesigner();
    })
    .on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault();
        self.updateDesigner();
      }
    });

  this.updateDesigner = function () {
    var dpi = this.designer.dpi;

    if (!isNaN(this.dpiController.val())) dpi = this.dpiController.val();
    this.designer.dpi = dpi;

    var width = this.designer.labelWidth / this.designer.dpi;
    var height = this.designer.labelHeight / this.designer.dpi;

    if (!isNaN(this.widthController.val())) width = this.widthController.val();
    if (!isNaN(this.heightController.val()))
      height = this.heightController.val();

    this.designer.updateLabelSize(width, height);
    this.widthController.val(width);
    this.heightController.val(height);
  };

  this.update = function () {
    this.widthController.val(this.designer.labelWidth / this.designer.dpi);
    this.heightController.val(this.designer.labelHeight / this.designer.dpi);
  };
};
