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
* @fileoverview the Silex Widgets class
*
*/


goog.provide('silex.view.dialog.WidgetDialog');

goog.require('goog.events.KeyCodes');
goog.require('goog.ui.KeyboardShortcutHandler');

/**
 * the Silex Widgets class
 * load the template and make it a Widgets dialog
 * this is only the UI part, to let user setup publish functionnality
 * @extends {silex.view.dialog.DialogBase}
 * @constructor
 * @param {!Element} element   container to render the UI
 * @param  {!silex.types.Model} model  model class which holds
 *                                  the model instances - views use it for read operation only
 * @param  {!silex.types.Controller} controller  structure which holds
 *                                               the controller instances
 */
silex.view.dialog.WidgetDialog = function(element, model, controller) {
  // call super
  goog.base(this, element, model, controller);
  // set the visibility css class
  this.visibilityClass = 'widget-dialog';
};

goog.inherits(silex.view.dialog.WidgetDialog, silex.view.dialog.DialogBase);

/**
 * init the menu and UIs
 */
silex.view.dialog.WidgetDialog.prototype.buildUi = function() {
  // call super
  goog.base(this, 'buildUi');
};

/**
 * open settings dialog
 * @param {?function()=} opt_cbk   callback to be called when the user closes the dialog
 */
silex.view.dialog.WidgetDialog.prototype.openDialog = function(opt_cbk) {
  this.onClose = opt_cbk;
  this.openEditor();
};

/**
 * Open the editor
 */
silex.view.dialog.WidgetDialog.prototype.openEditor = function() {
  // call super
  goog.base(this, 'openEditor');
};

/**
 * close editor
 * this is private method, do not call it
 */
silex.view.dialog.WidgetDialog.prototype.closeEditor = function() {
  // call super
  goog.base(this, 'closeEditor');
  // notify caller
  if (this.onClose) {
    this.onClose();
  }
};
