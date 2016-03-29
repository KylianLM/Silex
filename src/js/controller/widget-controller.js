/**
 * Silex, live web creation
 * http://projects.silexlabs.org/?/silex/
 *
 * Copyright (c) 2012 Silex Labs
 * http://www.silexlabs.org/
 *
 * Silex is available under the GPL license
 * http://www.silexlabs.org/silex/silex-licensing/
 */

/**
 * @fileoverview A controller listens to a view element,
 *      and call the main {silex.controller.Controller} controller's methods
 *
 */
 goog.provide('silex.controller.WidgetController');

 goog.require('silex.controller.ControllerBase');

 /**
  * @constructor
  * @extends {silex.controller.ControllerBase}
  * listen to the view events and call the main controller's methods}
  * @param {silex.types.Model} model
  * @param  {silex.types.View} view  view class which holds the other views
  */
  silex.controller.WidgetController = function(model, view) {
    //call super
    silex.controller.ControllerBase.call(this, model, view);
    this.visibilityClass = 'widget-dialog';
  };

  goog.inherits(silex.controller.WidgetController, silex.controller.ControllerBase);

  /**
   * open settings dialog
   * @param {?function()=} opt_cbk   callback to be called when the user closes the dialog
   */
  silex.controller.WidgetController.prototype.openWidgets = function(opt_cbk) {
    this.onClose = opt_cbk;
    this.view.widgetDialog.openEditor()
  };
