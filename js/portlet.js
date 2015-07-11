$(function() {

  initializePortlets();
  addPropertiesToPortlets();
  addNewColumnEventListener();
  addCanvasEventListener();
});

/*******************************************************************************
* Add event listeners
*******************************************************************************/

var addNewColumnEventListener = function() {
  $("#portlet-column-add").on("click", function() {
    var newColumn = $('<div></div>').addClass("portlet-column");
    var newColumnHeader = $('<div>New Column</div>').addClass("portlet-column-header").appendTo(newColumn);
    // var newHeaderInput = $('<input>').attr({type: "text", value: "New Column"}).appendTo(newColumnHeader);
    newColumn.insertBefore(this);

    // FIXME: dynamically change body width here

    // FIXME: this is inefficient, as it re-adds properties
    // to existing portlets, not just the new one
    addPropertiesToPortlets();
  });
}

var addCanvasEventListener = function() {
  $(".portlet-column").on("click", function(event) {
    if (event.target.nodeName.toLowerCase() == "canvas") {
      event.stopPropagation();

      var canvas = $(event.target);

      // FIXME: this is for testing purposes for now, delete at any time
      canvas.toggleClass("border-for-test-purposes");
    }
  })
}

/*******************************************************************************
* Dynamically initialize layout of portlets based on user preferences
*******************************************************************************/

var initializePortlets = function() {

  // FIXME: this code will dynamically generate portlets in the HTML
  // For now, they are directly hard-coded in the HTML file

}

/*******************************************************************************
* Assign properties to portlets, code is from jQueryUI docs:
* http://jqueryui.com/sortable/#portlets
*******************************************************************************/

var addPropertiesToPortlets = function() {
  $(".sortable").sortable({
    handle: ".portlet-column-header",
    placeholder: "portlet-column-placeholder ui-corner-all"
  }).disableSelection();

  $(".portlet-column").sortable({
    connectWith: ".portlet-column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
      .addClass("ui-widget-header ui-corner-all")
      .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $(".portlet-toggle").click(function() {
    var icon = $(this);
    icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
    icon.closest(".portlet").find(".portlet-content").toggle();
  });
}