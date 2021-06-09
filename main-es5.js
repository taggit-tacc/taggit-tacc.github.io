function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCallbackCallbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"callback\">\r\n    <div>\r\n\t<i class=\"fas fa-spinner\"></i>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlBarControlBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"top-bar\" color=\"primary\">\r\n  <img src=\"assets/logo.svg\" width=\"40PX\">\r\n  <span style=\"color: white\">Taggit</span>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"project\" color=\"foreground\" class=\"project-menu\">\r\n\t<mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n\r\n  <mat-menu #project=\"matMenu\">\r\n\t<span mat-menu-item *ngIf=\"selectedProject\" (click)=\"openProjectModal(selectedProject)\">\r\n\t  Current Project : {{selectedProject.name}}\r\n\t</span>\r\n\t<button mat-menu-item (click)=\"openCreateProjectModal()\">Create Project</button>\r\n\t<button mat-menu-item [matMenuTriggerFor]=\"projectList\">Select Project</button>\r\n\t<button mat-menu-item (click)=\"openFilePicker()\">File Browser</button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #projectList=\"matMenu\">\r\n\t<button mat-menu-item class=\"clickable\" *ngFor=\"let p of projects\" (click)=\"selectProject(p)\" [ngClass]=\"{'active-project': p === selectedProject}\">\r\n\t  {{ p.name }}\r\n\t</button>\r\n  </mat-menu>\r\n\r\n  <span class=\"example-spacer\"></span>\r\n\r\n  <div *ngIf=\"showSidebar; else doThat\" class=\"path-buttons\">\r\n\t<div class=\"slides\" style=\"line-height: 1; font-size: 12px\">\r\n\t  {{imageName}}\r\n\t  <div class=\"lr-buttons\" style=\"margin-top: 5px\">\r\n\t\t<i (click)=\"otherPath(false)\" style=\"margin-right: 10px; cursor: pointer\" class=\"fas fa-angle-left\"></i>\r\n\t\t<i (click)=\"otherPath(true)\" style=\"margin-left: 10px; cursor: pointer\" class=\"fas fa-angle-right\"></i>\r\n\t  </div>\r\n\t</div>\r\n  </div>\r\n\r\n  <ng-template #doThat>\r\n\t<!-- <input placeholder=\"Search images\" -->\r\n\t<!--\t   name=\"\" -->\r\n\t<!--\t   type=\"text\" -->\r\n\t<!--\t   value=\"\" -->\r\n\t<!--\t   class=\"goods\"/> -->\r\n\r\n\r\n\t<!-- <mat-form-field appearance=\"fill\"> -->\r\n\t<!--   <input matInput placeholder=\"Search\"> -->\r\n\t<!-- </mat-form-field> -->\r\n\r\n\t<!-- <mat-form-field class=\"example-full-width\"> -->\r\n\t<!--   <input matInput type=\"text\" -->\r\n\t<!--\t\t [(ngModel)]=\"value\" -->\r\n\t<!--\t\t placeholder=\"Search\"> -->\r\n\t<!-- </mat-form-field> -->\r\n  </ng-template>\r\n\r\n  <span class=\"example-spacer\"></span>\r\n\r\n  <!-- <div *ngIf=\"showGroup\" class=\"group-bar grid-x align-right\"> -->\r\n  <div class=\"group-bar grid-x align-right\">\r\n\r\n\t<!-- A link that looks like a button, links to Hazmapper-->\r\n\t<a class=\"button-spacing\" mat-raised-button href={{hazMapperLink}} title=\"Open your project in HazMapper\" target=\"_blank\">\r\n\t\t<img src=\"assets/hazmapper-header-logo.png\" width=\"100PX\">\r\n\t</a>\r\n\r\n\t<button mat-raised-button\r\n\t\t\t(click)=\"openAddGroupModal(addGroupModal)\">Add Group</button>\r\n\r\n\t<ng-template #addGroupModal>\r\n\t  <mat-form-field>\r\n\t\t<mat-label>Group Name</mat-label>\r\n\t\t<input matInput placeholder=\"Group Name\" #groupInput>\r\n\t  </mat-form-field>\r\n\t  <br/>\r\n\t  <br/>\r\n\t  <button mat-raised-button matDialogClose color=\"primary\" (click)=\"addToGroupService(groupInput.value)\">Add Group</button>\r\n\t  <button mat-button matDialogClose color=\"secondary\">Cancel</button>\r\n\t</ng-template>\r\n  </div>\r\n\r\n  <!-- <button *ngIf=\"groupsExist && showSidebar && activePane == 'preset'\" -->\r\n  <!--\t\t  mat-button -->\r\n  <!--\t\t  color=\"secondary\" -->\r\n  <!--\t\t  (click)=\"goToRoute()\">Tagger</button> -->\r\n\r\n  <!-- <button *ngIf=\"groupsExist && showSidebar && activePane == 'tagger'\" -->\r\n  <!--\t\t  mat-button -->\r\n  <!--\t\t  color=\"secondary\" -->\r\n  <!--\t\t  (click)=\"goToRoute()\">Preset</button> -->\r\n\r\n\r\n  <button *ngIf=\"groupsExist && !showSidebar\"\r\n\t\t  mat-raised-button\r\n\t\t  style=\"margin-left: 15px\"\r\n\t\t  (click)=\"openSidebar()\">Taggit!</button>\r\n\r\n  <button *ngIf=\"groupsExist && showSidebar\"\r\n\t\t  mat-raised-button\r\n\t\t  style=\"margin-left: 15px\"\r\n\t\t  (click)=\"openSidebar()\">Gallery</button>\r\n\r\n\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageBoxImageBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"img-container\">\r\n  <img [ngClass]=\"status ? 'img-selected' : 'img-unselected'\"\r\n\t   [src]=\"featureSource\"\r\n\t   (click)=\"imageSelect()\"\r\n\t   class=\"img-responsive img-target\">\r\n\r\n  <div class=\"top-overlay\">\r\n\t<div class=\"image-option\"\r\n\t\t matTooltip=\"Zoom\"\r\n\t\t matTooltipPosition=\"below\"\r\n\t\t (click)=\"imageZoom(diffSizes)\">\r\n\t  <i class=\"fas fa-search-plus\"></i>\r\n\t</div>\r\n\r\n\t<ng-template #diffSizes>\r\n\t  <div class=\"zoom-content\">\r\n\t\t<div class=\"img-container\">\r\n\t\t  <img [src]=\"featureSource\">\r\n\t\t</div>\r\n\t\t<div class=\"img-details\">\r\n\t\t  <div class=\"detail-container\">\r\n\t\t\t<div class=\"title\">\r\n\t\t\t  Coordinates\r\n\t\t\t</div>\r\n\t\t\t<div class=\"detail-contents\">\r\n\t\t\t  <div class=\"detail-item\">\r\n\t\t\t\t{{coordinates[0]}},\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"detail-item\">\r\n\t\t\t\t{{coordinates[1]}}\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  <div class=\"detail-container\">\r\n\t\t\t<div class=\"title\">\r\n\t\t\t  Path\r\n\t\t\t</div>\r\n\t\t\t<div class=\"detail-contents\">\r\n\t\t\t  <div class=\"detail-item\">\r\n\t\t\t\t{{featureSource}}\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<button mat-button class=\"close-button\" matDialogClose aria-label=\"Close modal\" type=\"button\">\r\n\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t  </div>\r\n\t</ng-template>\r\n\r\n\t<div class=\"image-option\"\r\n\t\t matTooltip=\"Remove\"\r\n\t\t matTooltipPosition=\"below\"\r\n\t\t (click)=\"openImageDeleteModal(deleteImage)\">\r\n\t  <i class=\"fas fa-trash\"></i>\r\n\t</div>\r\n\r\n\t<ng-template #deleteImage>\r\n\t  <div>\r\n\t  This image will be deleted from the current project. It will not be deleted from the Data Depot.\r\n\t  </div>\r\n\r\n\t  <button mat-raised-button color=\"primary\" matDialogClose (click)=\"imageDelete()\">Delete Image</button>\r\n\t  <button mat-button matDialogClose>Cancel</button>\r\n\t</ng-template>\r\n\r\n\t<div class=\"image-option\"\r\n\t\t matTooltip=\"Add To Group\"\r\n\t\t matTooltipPosition=\"below\"\r\n\t\t (click)=\"openImageAddModal(addMoreToGroup)\">\r\n\t  <i class=\"fas fa-plus\"></i>\r\n\t</div>\r\n\r\n\t<ng-template #addMoreToGroup>\r\n\r\n\t  <mat-form-field appearance=\"fill\">\r\n\t\t<mat-label>Groups</mat-label>\r\n\t\t<mat-select matNativeControl required [(value)]=\"activeGroup\">\r\n\t\t  <mat-option>\r\n\t\t\tNone\r\n\t\t  </mat-option>\r\n\t\t  <mat-option *ngFor=\"let group of groupList\" [value]=\"group.name\">\r\n\t\t\t{{ group.name }}\r\n\t\t  </mat-option>\r\n\t\t</mat-select>\r\n\t  </mat-form-field>\r\n\r\n\t  <!-- <select #selectGroup class=\"form-control\" [value]=\"activeGroup\"> -->\r\n\t  <!--\t<option *ngFor=\"let group of groupList\"> -->\r\n\t  <!--\t  {{ group.name }} -->\r\n\t  <!--\t</option> -->\r\n\t  <!-- </select> -->\r\n\t  <!-- <button mat-raised-button color=\"primary\" matDialogClose (click)=\"selectGroupForm(selectGroup.value)\">Add To Group</button> -->\r\n\t  <p>\r\n\t\t<button mat-raised-button color=\"primary\" matDialogClose (click)=\"selectGroupForm(activeGroup)\" [disabled]=\"!activeGroup\">Add To Group</button>\r\n\t\t<button mat-button color=\"secondary\" matDialogClose>Cancel</button>\r\n\t  </p>\r\n\r\n\t  <!-- <button mat-raised-button color=\"primary\" class=\"button\" matDialogClose aria-label=\"Close modal\" type=\"button\"> -->\r\n\t  <!--\t<span aria-hidden=\"true\">&times;</span> -->\r\n\t  <!-- </button> -->\r\n\t</ng-template>\r\n  </div>\r\n\r\n  <div class=\"bottom-overlay\">\r\n\r\n\t<!-- <div class=\"color-container\"> -->\r\n\t  <!-- TODO This should be an iff relationship -->\r\n\t  <div *ngIf=\"hasGroup && colors.length > 0\">\r\n\r\n\t\t<div *ngIf=\"colors.length < 5; else dotdot\" class=\"group-tags\">\r\n\t\t  <div *ngFor=\"let color of colors\"\r\n\t\t\t   class=\"center\"\r\n\t\t\t   (mouseover)=\"getGroupNameFromColor(color)\"\r\n\t\t\t   [matTooltip]=\"currentGroup\"\r\n\t\t\t   matTooltipPosition=\"below\">\r\n\t\t\t<svg class=\"box\" width=\"25px\" height=\"75px\">\r\n\t\t\t  <!-- <rect width=\"15px\" height=\"15px\" [style.fill]=\"color\"/> -->\r\n\t\t\t  <rect width=\"15px\" height=\"15px\" x=\"5\" y=\"30\" [style.fill]=\"color\"/>\r\n\t\t\t  <rect class=\"inner-del\" width=\"25px\" height=\"15px\" rx=\"3\" x=\"0\" y=\"0\" style=\"fill: #ffffff\"/>\r\n\t\t\t  <rect (click)=\"deleteFromGroup(color)\" class=\"inner-del\" width=\"15px\" height=\"5px\" x=\"5\" y=\"5\" style=\"fill: #DE6363\"/>\r\n\t\t\t</svg>\r\n\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t<ng-template #dotdot class=\"text\">\r\n\t\t  <div class=\"image-option\"\r\n\t\t\t   (click)=\"openMoreGroupsModal(moreGroupsModal)\">\r\n\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\r\n\t\t  </div>\r\n\t\t</ng-template>\r\n\r\n\t\t<!-- TODO Should close modal once zero groups -->\r\n\t\t<ng-template #moreGroupsModal>\r\n\t\t  <div style=\"display: flex; justify-content: center; align-items: center\">\r\n\t\t\t<div *ngFor=\"let color of colors\"\r\n\t\t\t\t class=\"center-temp\"\r\n\t\t\t\t style=\"display: flex\"\r\n\t\t\t\t (mouseover)=\"getGroupNameFromColor(color)\"\r\n\t\t\t\t [matTooltip]=\"currentGroup\"\r\n\t\t\t\t matTooltipPosition=\"right\">\r\n\t\t\t  <svg style=\"padding: 1\" (click)=\"deleteFromGroup(color)\" width=\"15px\" height=\"15px\">\r\n\t\t\t\t<rect width=\"15px\" height=\"15px\" [style.fill]=\"color\"/>\r\n\t\t\t\t<rect class=\"inner-del-temp\" width=\"8px\" height=\"4px\" x=\"3.3\" y=\"5.5\" style=\"fill: #000\"/>\r\n\t\t\t  </svg>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</ng-template>\r\n\r\n\t  </div>\r\n\t<!-- </div> -->\r\n\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageGalleryImageGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loaded; else loader\" id=\"loading-load\">\r\n  <div *ngIf=\"projectsExist; else noProjWarn\" id=\"gallery-container\">\r\n\t<div *ngIf=\"imagesExist; else noImgWarn\" id=\"gallery-container-container\">\r\n\t  <div [ngClass]=\"status ? 'success' : 'danger'\"\r\n\t\t   infiniteScroll\r\n\t\t   [infiniteScrollDistance]=\"1\"\r\n\t\t   [infiniteScrollThrottle]=\"1500\"\r\n\t\t   (scrolled)=\"onScroll()\"\r\n\t\t   class=\"img-list-container\"\r\n\t\t   *ngIf=\"!showSidebar; else elseBlock\">\r\n\t\t<app-image-box\r\n\t\t  *ngFor=\"let feat of featureListScroll\"\r\n\t\t  [feature]=\"feat\">\r\n\t\t</app-image-box>\r\n\t  </div>\r\n\r\n\t  <ngx-spinner\r\n\t\tbdOpacity = 0.9\r\n\t\tbdColor = \"\"\r\n\t\tsize = \"default\"\r\n\t\tcolor = \"#3ADB76\"\r\n\t\ttype = \"line-scale-pulse-out\"\r\n\t\tid = \"img-spin\"\r\n\t\t[fullScreen] = \"false\">\r\n\t  </ngx-spinner>\r\n\t  <ng-template #elseBlock>\r\n\t\t<div *ngIf=\"groupExist; else noImgDisplay\">\r\n\t\t  <div class=\"imager\">\r\n\t\t\t<img class=\"view-image\" [src]=\"getPath()\">\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<ng-template #noImgDisplay> No Images exist for this Group </ng-template>\r\n\t\t<!-- <div (click)=\"otherPath(1)\">next</div> -->\r\n\t\t<!-- <div (click)=\"otherPath(-1)\">prev</div> -->\r\n\r\n\r\n\t\t<!-- <img [src]=\"getPath()\"> -->\r\n\t\t<!-- <button class=\"button\" (click)=\"otherPath(1)\">next</button> -->\r\n\t\t<!-- <button class=\"button\" (click)=\"otherPath(-1)\">prev</button> -->\r\n\r\n\t\t<!-- <app-image-list> -->\r\n\t\t  <!--   <\\!-- *ngFor=\"let feat of features.features\" -\\-> -->\r\n\t\t\t<!--   <\\!-- [feature]=\"feat\" -\\-> -->\r\n\r\n\t\t\t  <!--   <\\!-- *ngFor=\"let feat of features.features\" -\\-> -->\r\n\t\t\t\t<!--   <\\!-- [feature]=\"features.features\" -\\-> -->\r\n\t\t\t\t  <!--   <\\!-- (clickRequest)=\"addGroupList($event)\" -\\-> -->\r\n\t\t\t\t\t<!-- </app-image-list> -->\r\n\r\n\t  </ng-template>\r\n\t  <div *ngIf=\"showSidebar\" class=\"side-bar-container\">\r\n\t\t<app-side-bar></app-side-bar>\r\n\t  </div>\r\n\t</div>\r\n\t<ng-template #noImgWarn>\r\n\t  <div id=\"no-img\">\r\n\t\tNo images have been imported!<br>Please import images through the menu.\r\n\t  </div>\r\n\t</ng-template>\r\n  </div>\r\n\r\n  <ng-template #noProjWarn>\r\n\t<div id=\"no-proj\">\r\n\t  No project has been created!<br>Please create a project through the menu.\r\n\t</div>\r\n  </ng-template>\r\n\r\n  <!-- <div id=\"gallery-container\"> -->\r\n\t<!--   <div [ngClass]=\"status ? 'success' : 'danger'\"> -->\r\n\t  <!--\t<div class=\"img-list-container\" *ngIf=\"!showSidebar; else elseBlock\"> -->\r\n\t\t<!--\t  <app-image-box -->\r\n\t\t<!--\t\t*ngFor=\"let feat of features.features\" -->\r\n\t\t<!--\t\t[feature]=\"feat\" -->\r\n\t\t<!--\t\t(clickRequest)=\"addGroupList($event)\"> -->\r\n\t\t  <!--\t  </app-image-box> -->\r\n\t\t<!--\t</div> -->\r\n\r\n\t  <!--\t<ng-template #elseBlock> -->\r\n\t\t<!--\t  <app-image-list> -->\r\n\t\t  <!--\t  </app-image-list> -->\r\n\t\t<!--\t</ng-template> -->\r\n\r\n\t  <!--   </div> -->\r\n\t<!--   <div *ngIf=\"showSidebar\" class=\"side-bar-container\"> -->\r\n\t  <!--\t<app-side-bar></app-side-bar> -->\r\n\t  <!--   </div> -->\r\n\t<!-- </div> -->\r\n\r\n</div>\r\n\r\n<ng-template #loader>\r\n  <div id=\"loader\">\r\n\tLoading...\r\n  </div>\r\n\r\n  <ngx-spinner\r\n\tbdOpacity = 0.9\r\n\tbdColor = \"\"\r\n\tsize = \"default\"\r\n\tcolor = \"#3ADB76\"\r\n\ttype = \"line-scale-pulse-out\"\r\n\tid = \"load-spin\"\r\n\t[fullScreen] = \"false\">\r\n  </ngx-spinner>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"grid-x\"> -->\r\n\r\n<!--   <div class=\"top-bar\" style=\"background-color: black\" id=\"navbar\"> -->\r\n\r\n<!--\t<div class=\"top-bar-left\"> -->\r\n<!--\t  <img src=\"assets/logo.svg\" width=\"30PX\"> -->\r\n<!--\t  <span style=\"color: white\">Taggit</span> -->\r\n<!--\t</div> -->\r\n\r\n\r\n<!--\t<div class=\"top-bar-right\"> -->\r\n<!--\t  <div class=\"light-blue\" *ngIf=\"currentUser\">{{ currentUser.username }}</div> -->\r\n<!--\t</div> -->\r\n\r\n<!--   </div> -->\r\n\r\n<!--   <\\!-- <div class=\"cell control-bar\"> -\\-> -->\r\n<!--   <\\!--\t<app-control-bar></app-control-bar> -\\-> -->\r\n<!--   <\\!-- </div> -\\-> -->\r\n<!-- </div> -->\r\n\r\n<app-control-bar></app-control-bar>\r\n<!-- NOTE Router Outlet was here -->\r\n<app-image-gallery></app-image-gallery>\r\n\r\n<!-- NOTE Leaflet was here -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"map\" style=\"min-height: calc(100vh - 67px)\"></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalCreateProjectModalCreateProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4> Create a new Project </h4>\r\n<form [formGroup]=\"projCreateForm\" (ngSubmit)=\"submit()\" id=\"create-project-form\">\r\n  <mat-form-field>\r\n\t<mat-label>Name:</mat-label>\r\n\t<input matInput type=\"text\" formControlName=\"name\" required=\"true\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n\t<mat-label>Description</mat-label>\r\n\t<textarea matInput formControlName=\"description\" required=\"true\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <div class=\"button-group small\">\r\n\t<button mat-raised-button color=\"warn\" class=\"button small warning\" type=\"button\" (click)=\"close()\">Close</button>\r\n\t<button mat-raised-button color=\"primary\" class=\"button small align-right\" type=\"submit\" [disabled]=\"!projCreateForm.valid\">Submit</button>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalCurrentProjectModalCurrentProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4> Current Project </h4>\r\n<form [formGroup]=\"projCreateForm\" (ngSubmit)=\"update()\" id=\"current-project-form\">\r\n  <mat-form-field>\r\n\t<mat-label>Name:</mat-label>\r\n\t<input matInput type=\"text\" formControlName=\"name\" appearance=\"filled\"  required=\"true\">\r\n\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Description</mat-label>\r\n    <textarea matInput formControlName=\"description\" required=\"true\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <div class=\"button-group small\">\r\n    <button mat-raised-button color=\"basic\" class=\"button small warning\" type=\"button\" (click)=\"close()\">Close</button>\r\n    <button mat-raised-button color=\"warn\" class=\"button small warning\" type=\"delete\" (click)=\"delete()\">Delete</button>\r\n    <button mat-raised-button color=\"primary\" class=\"button small align-right\" type=\"submit\" [disabled]=\"!projCreateForm.valid\">Update</button>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalFileBrowserModalFileBrowserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4> Select Files </h4>\r\n<small><em> Note: Only files are selectable, not folders. Double click on a folder to navigate into it. </em></small>\r\n<hr>\r\n<select (ngModelChange)=\"selectSystem($event)\" [(ngModel)]=\"selectedSystem\">\r\n\t<option [ngValue]=\"myDataSystem\"> My Data </option>\r\n\t<option [ngValue]=\"communityDataSystem\"> Community Data</option>\r\n\t<option [ngValue]=\"publishedDataSystem\"> Published Data</option>\r\n\t<optgroup label=\"My Projects\">\r\n\t\t<option *ngFor=\"let project of projects\" [ngValue]=\"project\">{{project.description}}</option>\r\n\t</optgroup>\r\n</select>\r\n<div class=\"fileslisting\">\r\n\t<div class=\"grid-x\" *ngIf=\"inProgress\">\r\n\t\t<div class=\"cell medium-12\">\r\n\t\t\t<i class=\"fas fa-spin fa-atom\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"grid-x file-row\" *ngFor=\"let file of filesList\" [ngClass]=\"{'selected':selectedFiles.has(file.path)}\">\r\n\t\t<div class=\"cell medium-9 clickable\" (click)=\"select(file)\"  (dblclick)=\"browse(file)\">\r\n\t\t\t<i class=\"fas fa-folder\" *ngIf=\"file.type === 'dir'\" ></i>\r\n\t\t\t<i class=\"far fa-file\" *ngIf=\"file.type !== 'dir'\"></i>\r\n\t\t\t<span > {{ file.name }} </span>\r\n\t\t</div>\r\n\t\t<div class=\"cell medium-3\">\r\n\t\t\t{{file.length | filesize }}\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"button-group\">\r\n\t<button mat-raised-button color=\"warn\" class=\"button warning\" (click)=\"cancel()\">Cancel</button>\r\n\t<button mat-raised-button color=\"primary\" class=\"button\" [disabled]=\"!selectedFiles.size\" (click)=\"chooseFiles()\">Import</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotfoundNotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  notfound works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSelectGroupSelectGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"select-group\">\r\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Groups</div>\r\n  <div *ngIf=\"showSubitem\" class=\"subitem group-subitem\">\r\n\t<!-- TODO redundant functionality radio is just for style -->\r\n\t<form class=\"boxed\">\r\n\t  <div *ngFor=\"let group of groupList\" (click)=\"selectGroupForm(group.name)\" class=\"box form\">\r\n\t\t<input type=\"radio\" [id]=\"group.name\" [value]=\"group.name\" name=\"skills\" [checked]=\"isChecked(group.name)\">\r\n\t\t<label class=\"group-container\" style=\"cursor: pointer\" [for]=\"group.name\">\r\n\t\t  <div class=\"name-group\">\r\n\t\t\t{{group.name}}\r\n\t\t\t<svg class=\"box\" width=\"10px\" height=\"10px\">\r\n\t\t\t  <rect width=\"10px\" height=\"10px\" style=\"fill: #ffffff\"/>\r\n\t\t\t  <rect width=\"8px\" height=\"8px\" x=\"1px\" y=\"1px\" [style.fill]=\"group.color\"/>\r\n\t\t\t</svg>\r\n\t\t  </div>\r\n\t\t  <div class=\"button-group\">\r\n\t\t\t<div (click)=\"deleteGroup(group.name)\">\r\n\t\t\t  <i class=\"fas fa-minus\"\r\n\t\t\t\t matTooltip=\"Delete\"\r\n\t\t\t\t matTooltipPosition=\"below\">\r\n\t\t\t  </i>\r\n\t\t\t</div>\r\n\t\t\t<div (click)=\"openRenameModal(renameModal, group.name)\">\r\n\t\t\t  <i class=\"fas fa-edit\"\r\n\t\t\t\t matTooltip=\"Rename\"\r\n\t\t\t\t matTooltipPosition=\"below\">\r\n\t\t\t  </i>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</label>\r\n\t  </div>\r\n\t</form>\r\n\r\n\t<ng-template #renameModal>\r\n\t  <input matInput #groupRename\r\n\t\t\t placeholder=\"Rename Group\"\r\n\t\t\t (keyup.enter)=\"renameGroup(groupRename.value)\">\r\n\t  <br/>\r\n\t  <br/>\r\n\t  <div class=\"button-group\">\r\n\t\t<button matDialogClose color=\"primary\" mat-raised-button (click)=\"renameGroup(groupRename.value)\">Rename</button>\r\n\t\t<button matDialogClose mat-button>Cancel</button>\r\n\t  </div>\r\n\t</ng-template>\r\n  </div> <!-- subitem -->\r\n</div> <!-- select-group -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSelectImageSelectImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"asset-list\">\r\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Image List</div>\r\n\r\n  <div *ngIf=\"showSubitem\" class=\"subitem asset-subitem\">\r\n\r\n\t<div *ngFor=\"let asset of getActiveFeatures()\" (click)=\"jumpToImage(asset)\" class=\"asset-container\" [ngClass]=\"{'highlight': isActiveFeature(asset)}\">\r\n\r\n\t  <div class=\"name-group\">\r\n\t\t{{ getAssetDisplay(asset) }}\r\n\t  </div>\r\n\r\n\t  <div class=\"button-group\">\r\n\t\t<div (click)=\"deleteAsset(asset.id)\">\r\n\t\t  <i class=\"fas fa-minus\"\r\n\t\t\t matTooltip=\"Delete\"\r\n\t\t\t matTooltipPosition=\"above\">\r\n\t\t  </i>\r\n\t\t</div>\r\n\t  </div>\r\n\t</div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>side-bar works!</p> -->\r\n<!-- <app-preset-generator></app-preset-generator> -->\r\n<!-- <app-tagger></app-tagger> -->\r\n<app-select-group></app-select-group>\r\n<app-select-image></app-select-image>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarTagGeneratorTagGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"create-prompt\">\r\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\r\n\t<span>\r\n\t  Create Tag\r\n\t</span>\r\n\t<!-- <span style=\"cursor: pointer\" -->\r\n\t<!--\t  (click)=\"addFormItem(); clearLabel(); clearOption()\" -->\r\n\t<!--\t  matTooltip=\"Add Form Item\" -->\r\n\t<!--\t  style=\"cursor: pointer; margin-right: 20px\" -->\r\n\t<!--\t  matTooltipPosition=\"above\"> -->\r\n\t<!--   <i class=\"fas fa-plus\"></i> -->\r\n\t<!-- </span> -->\r\n  </div> <!-- subitem-title -->\r\n\r\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\r\n\t<form class=\"form-type-form\">\r\n\t  <div *ngFor=\"let control of enabledControls; let idx = index\" class=\"box form\">\r\n\t\t<input type=\"radio\" [id]=\"control\" value=\"control.toLowerCase()\" name=\"form-type\" [checked]=\"(idx === 0)\" (change)=\"selectInputForm(control.toLowerCase())\">\r\n\t\t<label style=\"cursor: pointer; margin: 3px; padding: 3px; font-size: 10px\" [for]=\"control\">{{ control }}</label>\r\n\t  </div> <!-- form-type-form -->\r\n\t</form>\r\n\r\n\t<div *ngIf=\"formType == 'text'; else optionForms\">\r\n\t  <div class=\"form-name\">\r\n\t\t<mat-form-field class=\"input-label-group\">\r\n\t\t  <mat-label>Label</mat-label>\r\n\t\t  <input matInput placeholder=\"Label\" #labelValue [(ngModel)]=\"labelFilter\" (keyup)=\"inputFormLabel($event)\" name=\"labelFilter\" class=\"tiny\" type=\"text\">\r\n\t\t</mat-form-field>\r\n\t  </div> <!--form-name -->\r\n\t</div> <!-- formtype -->\r\n\r\n\t<ng-template #optionForms>\r\n\t  <div class=\"form-name\">\r\n\r\n\t\t<mat-form-field class=\"input-label-group\">\r\n\t\t  <mat-label>Label</mat-label>\r\n\t\t  <input matInput placeholder=\"Label\" #labelValue [(ngModel)]=\"labelFilter\" (keyup)=\"inputFormLabel($event)\" name=\"labelFilter\" class=\"tiny\" type=\"text\">\r\n\t\t</mat-form-field>\r\n\t\t<mat-form-field class=\"input-label-group\">\r\n\t\t  <mat-label>Options</mat-label>\r\n\t\t  <div class=\"input-group\">\r\n\t\t\t<input matInput #optionValue class=\"input-group-field\" placeholder=\"Option\" type=\"text\" [(ngModel)]=\"optionFilter\" name=\"optionFilter\">\r\n\t\t  </div> <!-- input-group -->\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div class=\"input-group-button\">\r\n\t\t  <button mat-button color=\"accent\" class=\"button\" (click)=\"addOptionItem(optionValue.value); optionValue.value = ''; clearOption()\">\r\n\t\t\t<i class=\"fas fa-plus\"></i>\r\n\t\t  </button>\r\n\t\t</div> <!-- input-group-button -->\r\n\r\n\t\t<ul class=\"form-option-container\">\r\n\t\t  <li *ngFor=\"let opt of formOptions\" class=\"list-group\">\r\n\t\t\t<div [className]=\"showOpt\">\r\n\t\t\t  {{opt.label}}\r\n\t\t\t</div> <!-- showopt -->\r\n\t\t\t<div class=\"button-group\">\r\n\t\t\t  <div (click)=\"deleteOption(opt)\">\r\n\t\t\t\t<i class=\"fas fa-minus\"\r\n\t\t\t\t   matTooltip=\"Delete\"\r\n\t\t\t\t   matTooltipPosition=\"above\"\r\n\t\t\t\t   style=\"cursor: pointer\">\r\n\t\t\t\t</i>\r\n\t\t\t  </div> <!-- delete opt -->\r\n\r\n\t\t\t  <div (click)=\"openRenameOptionModal(renameOptionModal)\">\r\n\t\t\t\t<i class=\"fas fa-edit\"\r\n\t\t\t\t   style=\"cursor: pointer\"\r\n\t\t\t\t   matTooltip=\"Rename\"\r\n\t\t\t\t   matTooltipPosition=\"above\">\r\n\t\t\t\t</i>\r\n\t\t\t  </div>\r\n\r\n\t\t\t  <ng-template #renameOptionModal>\r\n\t\t\t\t<input matInput #optionRename\r\n\t\t\t\t\t   placeholder=\"Rename Option\">\r\n\t\t\t\t<br/>\r\n\t\t\t\t<br/>\r\n\t\t\t\t<div class=\"button-group\">\r\n\t\t\t\t  <button matDialogClose\r\n\t\t\t\t\t\t  mat-raised-button\r\n\t\t\t\t\t\t  color=\"primary\"\r\n\t\t\t\t\t\t  (click)=\"renameOption(opt, optionRename.value)\">Rename</button>\r\n\t\t\t\t  <button matDialogClose\r\n\t\t\t\t\t\t  mat-button>Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t  </ng-template>\r\n\r\n\t\t\t</div> <!-- button group -->\r\n\r\n\t\t  </li>\r\n\t\t</ul>\r\n\t  </div> <!-- form name -->\r\n\t</ng-template> <!-- form options -->\r\n\r\n\t<button mat-raised-button color=\"primary\" (click)=\"addFormItem(); clearLabel(); clearOption()\">Save</button>\r\n\t<button mat-button color=\"primary\" (click)=\"cancelCreate(); clearLabel(); clearOption()\">Cancel</button>\r\n\r\n  </div> <!-- subitem -->\r\n</div> <!-- create-group -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarTagImagesFormGeneratorFormGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <label for=\"\"> -->\r\n<!--   Name: -->\r\n<!--   <\\!-- {{field.label}} -\\-> -->\r\n<!--   <input name=\"\" [formControl]=\"name\"/> -->\r\n<!-- </label> -->\r\n\r\n<div [formGroup]=\"form\">\r\n  <!-- <label [attr.for]=\"field.label\">{{field.label}}</label> -->\r\n\r\n  <div [ngSwitch]=\"field.type\" class=\"form-controls\">\r\n\t<mat-form-field *ngSwitchCase=\"'text'\">\r\n\t  <input matInput color=\"primary\" [formControlName]=\"field.label\"\r\n\t\t\t [id]=\"field.label\" [type]=\"field.type\">\r\n\t</mat-form-field>\r\n\r\n\t<mat-form-field *ngSwitchCase=\"'dropdown'\">\r\n\t  <mat-select [id]=\"field.label\" [id]=\"field.label\" [formControlName]=\"field.label\">\r\n\t\t<mat-option *ngFor=\"let opt of field.options\" [value]=\"opt.label\">\r\n\t\t  {{opt.label}}\r\n\t\t</mat-option>\r\n\t  </mat-select>\r\n\t</mat-form-field>\r\n\r\n\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t  <mat-radio-group [formControlName]=\"field.label\" class=\"radio-group\">\r\n\t\t<mat-radio-button *ngFor=\"let opt of field.options\" class=\"input-group\" type=\"radio\" [value]=\"opt.label\">\r\n\t\t  {{opt.label}}\r\n\t\t</mat-radio-button>\r\n\t  </mat-radio-group>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t  <div *ngFor=\"let opt of field.options\" [id]=\"field.label\" class=\"input-group\">\r\n\t\t<mat-checkbox type=\"checkbox\" [value]=\"opt.label\" [formControlName]=\"field.label\">\r\n\t\t  {{opt.label}}\r\n\t\t</mat-checkbox>\r\n\t  </div>\r\n\t</ng-container>\r\n\r\n  </div>\r\n\r\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{field.label}} is required</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\"> -->\r\n<!--   <div *ngFor=\"let field of formsService.activeFormList | async\"> -->\r\n<!--   <\\!-- <div *ngFor=\"let field of fields\"> -\\-> -->\r\n<!--\t<\\!-- <app-form-fields [field]=\"field\" [form]=\"form\"></app-form-fields> -\\-> -->\r\n<!--   </div> -->\r\n<!-- </form> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarTagImagesTagImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tag-forms\">\r\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\r\n\t<span>\r\n\t  Tag Images\r\n\t</span>\r\n\t<span>\r\n\t  <span style=\"cursor: pointer\"\r\n\t\t\tmatTooltip=\"Export Tags\"\r\n\t\t\tstyle=\"cursor: pointer; margin-right: 10px\"\r\n\t\t\tmatTooltipPosition=\"above\">\r\n\t\t<i class=\"fas fa-file-download\"></i>\r\n\t  </span>\r\n\r\n\t  <span style=\"cursor: pointer\"\r\n\t\t\t(click)=\"createNewTag()\"\r\n\t\t\tmatTooltip=\"Add New Tag\"\r\n\t\t\tstyle=\"cursor: pointer; margin-right: 10px\"\r\n\t\t\tmatTooltipPosition=\"above\">\r\n\t\t<i class=\"fas fa-plus\"></i>\r\n\t  </span>\r\n\r\n\t  <span style=\"cursor: pointer; margin-right: 20px\"\r\n\t\t\tmatTooltip=\"Save Tags\"\r\n\t\t\tmatTooltipPosition=\"above\">\r\n\t\t<i class=\"fas fa-save\"></i>\r\n\t  </span>\r\n\t</span>\r\n  </div> <!-- subitem-title -->\r\n\r\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\r\n\t<div class=\"subitem-scroll\">\r\n\t  <div *ngIf=\"(formsService.activeFormList | async)?.length > 0; else elseBlock\">\r\n\t\t<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"formsService.formGroup | async\">\r\n <!--  -->\r\n\t\t  <div *ngFor=\"let form of formsService.activeFormList | async\" class=\"main-form-container\">\r\n\t\t\t<div class=\"form-item-container\">\r\n\r\n\t\t\t  <div class=\"name-group\">\r\n\t\t\t\t{{form.label}} ({{form.type}})\r\n\t\t\t  </div> <!-- name-group -->\r\n\r\n\t\t\t  <div class=\"button-group\">\r\n\r\n\t\t\t\t<div (click)=\"formsService.deleteForm(activeGroup, form)\">\r\n\t\t\t\t  <i class=\"fas fa-minus\"\r\n\t\t\t\t\t matTooltip=\"Delete\"\r\n\t\t\t\t\t matTooltipPosition=\"above\"\r\n\t\t\t\t\t style=\"cursor: pointer\">\r\n\t\t\t\t  </i>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div (click)=\"openRenameOptionModal(renameFormItemModal)\">\r\n\t\t\t\t  <i class=\"fas fa-edit\"\r\n\t\t\t\t\t matTooltip=\"Rename\"\r\n\t\t\t\t\t matTooltipPosition=\"above\"\r\n\t\t\t\t\t style=\"cursor: pointer\">\r\n\t\t\t\t  </i>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div *ngIf=\"form.type != 'text'\">\r\n\r\n\t\t\t\t  <div (click)=\"openOptionToggle(form.label)\">\r\n\t\t\t\t\t<i class=\"fas fa-ellipsis-h\"\r\n\t\t\t\t\t   style=\"cursor: pointer\"\r\n\t\t\t\t\t   matTooltip=\"More Options\"\r\n\t\t\t\t\t   matTooltipPosition=\"above\">\r\n\t\t\t\t\t</i>\r\n\t\t\t\t  </div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ng-template #renameFormItemModal>\r\n\t\t\t\t  <input matInput #formItemRename\r\n\t\t\t\t\t\t placeholder=\"Rename Form Item\">\r\n\t\t\t\t  <br/>\r\n\t\t\t\t  <br/>\r\n\t\t\t\t  <div class=\"button-group\">\r\n\t\t\t\t\t<button matDialogClose\r\n\t\t\t\t\t\t\tmat-raised-button\r\n\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\t(click)=\"formsService.renameForm(activeGroup, form, formItemRename.value)\">Rename</button>\r\n\t\t\t\t\t<button matDialogClose\r\n\t\t\t\t\t\t\tmat-button>Cancel</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t  </div> <!-- button group -->\r\n\t\t\t</div>  <!-- form-item-container -->\r\n\r\n\r\n\r\n\t\t\t<div *ngIf=\"form.options.length && form.type != 'text' && openOption[form.label]\" class=\"options-container\">\r\n\r\n\t\t\t  <div *ngFor=\"let opt of form.options\" class=\"list-group list-suboptions\">\r\n\t\t\t\t<div>\r\n\t\t\t\t  {{opt.label}}\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"button-group\">\r\n\r\n\t\t\t\t  <div (click)=\"formsService.deleteOption(activeGroup, opt, form)\">\r\n\t\t\t\t\t<i class=\"fas fa-minus\"\r\n\t\t\t\t\t   style=\"cursor: pointer\"\r\n\t\t\t\t\t   matTooltip=\"Delete\"\r\n\t\t\t\t\t   matTooltipPosition=\"below\">\r\n\t\t\t\t\t</i>\r\n\t\t\t\t  </div>\r\n\r\n\t\t\t\t  <div (click)=\"openRenameOptionModal(renameDeeperOptionModal)\">\r\n\t\t\t\t\t<i class=\"fas fa-edit\"\r\n\t\t\t\t\t   matTooltip=\"Rename\"\r\n\t\t\t\t\t   style=\"cursor: pointer\"\r\n\t\t\t\t\t   matTooltipPosition=\"below\">\r\n\t\t\t\t\t</i>\r\n\t\t\t\t  </div>\r\n\r\n\t\t\t\t  <ng-template #renameDeeperOptionModal>\r\n\t\t\t\t\t<input matInput #optionDeeperRename\r\n\t\t\t\t\t\t   placeholder=\"Rename Option\">\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<div class=\"button-group\">\r\n\t\t\t\t\t  <button matDialogClose\r\n\t\t\t\t\t\t\t  mat-raised-button\r\n\t\t\t\t\t\t\t  color=\"primary\"\r\n\t\t\t\t\t\t\t  (click)=\"formsService.renameOption(activeGroup, opt, form, optionDeeperRename.value)\">Rename</button>\r\n\t\t\t\t\t  <button matDialogClose\r\n\t\t\t\t\t\t\t  mat-button>Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </ng-template>\r\n\t\t\t\t</div> <!-- button-ggroup -->\r\n\t\t\t  </div> <!-- option loop -->\r\n\t\t\t</div> <!-- options container -->\r\n\r\n\r\n\t\t\t<!-- <app-form-generator [form]=\"form\"></app-form-generator> -->\r\n\t\t\t<app-form-generator [field]=\"form\"></app-form-generator>\r\n\t\t\t<!-- Conditional -->\r\n\t\t\t<!-- <div *ngIf=\"(formsService.activeFormList | async)?.length > 0; else elseBlock\"> -->\r\n\t\t\t  <!-- Does not work without this -->\r\n\t\t\t  <!-- <div *ngIf=\"fields\"> -->\r\n\t\t\t\t<!-- <app-form-generator></app-form-generator> -->\r\n\t\t\t\t<!-- <app-form-generator [fields]=\"getFields()\"></app-form-generator> -->\r\n\t\t\t\t<!-- <app-form-generator [fields]=\"fields\"></app-form-generator> -->\r\n\t\t\t\t<!-- </div> -->\r\n\t\t\t  <!-- </div> -->\r\n\r\n\r\n\t\t  </div> <!-- loop -->\r\n\r\n\t\t  <div class=\"form-row\">\r\n\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n\t\t  </div>\r\n\t\t</form>\r\n\t  </div> <!-- conditional -->\r\n\t</div> <!-- subitem scroll -->\r\n  </div> <!--subitem -->\r\n\r\n  <ng-template #elseBlock>\r\n\tNo tag presets for this Group!\r\n  </ng-template>\r\n\r\n</div> <!-- tag-forms -->\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: Activate, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Activate", function () {
      return Activate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/notfound/notfound.component */
    "./src/app/components/notfound/notfound.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/side-bar/tag-generator/tag-generator.component */
    "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
    /* harmony import */


    var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/side-bar/tag-images/tag-images.component */
    "./src/app/components/side-bar/tag-images/tag-images.component.ts"); // import { TaggerComponent } from './components/tagger/tagger.component';
    // import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';


    var Activate =
    /*#__PURE__*/
    function () {
      function Activate(authSvc) {
        _classCallCheck(this, Activate);

        this.authSvc = authSvc;
      }

      _createClass(Activate, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authSvc.isLoggedIn()) {
            return true;
          }

          this.authSvc.login();
        }
      }]);

      return Activate;
    }();

    Activate.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    Activate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], Activate);
    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
      canActivate: [Activate],
      children: [// {path: '', redirectTo: '/tagger', pathMatch: 'full'},
      // TODO IAN cache value on parent route
      // {path: 'gallery', component: ImageGalleryComponent, canActivateChild: [Activate]},
      // {path: 'tagger', component: TaggerComponent, canActivateChild: [Activate]},
      // {path: 'preset', component: PresetGeneratorComponent, canActivateChild: [Activate]}
      {
        path: 'tagger',
        component: _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__["TagImagesComponent"],
        canActivateChild: [Activate]
      }, {
        path: 'preset',
        component: _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__["TagGeneratorComponent"],
        canActivateChild: [Activate]
      }]
    }, {
      path: 'callback',
      component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__["CallbackComponent"]
    }, {
      path: '404',
      component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [Activate]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'viewer';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.login();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.interceptors.ts":
  /*!*************************************!*\
    !*** ./src/app/app.interceptors.ts ***!
    \*************************************/

  /*! exports provided: AuthInterceptor, TokenInterceptor */

  /***/
  function srcAppAppInterceptorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this.authService.logout();

              location.reload();
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthInterceptor);

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(authSvc) {
        _classCallCheck(this, TokenInterceptor);

        this.authSvc = authSvc;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (request.url.indexOf('https://agave.designsafe-ci.org') > -1) {
            if (this.authSvc.isLoggedIn()) {
              request = request.clone({
                setHeaders: {
                  Authorization: 'Bearer ' + this.authSvc.userToken.token
                }
              });
            }
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-foundation */
    "./node_modules/ngx-foundation/index.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var ngx_masonry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-masonry */
    "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
    /* harmony import */


    var ngx_filesize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-filesize */
    "./node_modules/ngx-filesize/dist/index.js");
    /* harmony import */


    var ng_tapis__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-tapis */
    "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/notfound/notfound.component */
    "./src/app/components/notfound/notfound.component.ts");
    /* harmony import */


    var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/control-bar/control-bar.component */
    "./src/app/components/control-bar/control-bar.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _app_interceptors__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./app.interceptors */
    "./src/app/app.interceptors.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/modal-file-browser/modal-file-browser.component */
    "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/image-gallery/image-gallery.component */
    "./src/app/components/image-gallery/image-gallery.component.ts");
    /* harmony import */


    var _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/image-box/image-box.component */
    "./src/app/components/image-box/image-box.component.ts");
    /* harmony import */


    var _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/side-bar/tag-images/form-generator/form-generator.component */
    "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts");
    /* harmony import */


    var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");
    /* harmony import */


    var _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/side-bar/select-group/select-group.component */
    "./src/app/components/side-bar/select-group/select-group.component.ts");
    /* harmony import */


    var _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/side-bar/select-image/select-image.component */
    "./src/app/components/side-bar/select-image/select-image.component.ts");
    /* harmony import */


    var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/side-bar/tag-generator/tag-generator.component */
    "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
    /* harmony import */


    var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/side-bar/tag-images/tag-images.component */
    "./src/app/components/side-bar/tag-images/tag-images.component.ts");
    /* harmony import */


    var _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/modal-create-project/modal-create-project.component */
    "./src/app/components/modal-create-project/modal-create-project.component.ts");
    /* harmony import */


    var _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/modal-current-project/modal-current-project.component */
    "./src/app/components/modal-current-project/modal-current-project.component.ts"); // CommonModule for dynamic field
    // import { TaggerComponent } from './components/tagger/tagger.component';
    // import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';
    // import { ImageListComponent } from './components/image-list/image-list.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_24__["MapComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"], _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_27__["ControlBarComponent"], _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_29__["CallbackComponent"], _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_32__["ModalFileBrowserComponent"], _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_34__["ImageGalleryComponent"], // TaggerComponent,
      // PresetGeneratorComponent,
      _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_35__["ImageBoxComponent"], _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_36__["FormGeneratorComponent"], _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_37__["SideBarComponent"], // ImageListComponent,
      _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_38__["SelectGroupComponent"], _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_39__["SelectImageComponent"], _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_40__["TagGeneratorComponent"], _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_41__["TagImagesComponent"], _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_42__["ModalCreateProjectComponent"], _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_43__["ModalCurrentProjectComponent"]],
      imports: [// this is for the ng-tapis library
      ng_tapis__WEBPACK_IMPORTED_MODULE_21__["ApiModule"].forRoot({
        rootUrl: 'https://agave.designsafe-ci.org/'
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], ngx_masonry__WEBPACK_IMPORTED_MODULE_19__["NgxMasonryModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], ngx_filesize__WEBPACK_IMPORTED_MODULE_20__["FileSizeModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        multi: true,
        useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_30__["AuthInterceptor"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        multi: true,
        useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_30__["TokenInterceptor"]
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"],
        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].baseHref
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
      entryComponents: [_components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_32__["ModalFileBrowserComponent"], _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_42__["ModalCreateProjectComponent"], _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_43__["ModalCurrentProjectComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/callback/callback.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/callback/callback.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCallbackCallbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/callback/callback.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/callback/callback.component.ts ***!
    \***********************************************************/

  /*! exports provided: CallbackComponent */

  /***/
  function srcAppComponentsCallbackCallbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallbackComponent", function () {
      return CallbackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var CallbackComponent =
    /*#__PURE__*/
    function () {
      function CallbackComponent(route, auth) {
        _classCallCheck(this, CallbackComponent);

        this.route = route;
        this.auth = auth;
      }

      _createClass(CallbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // TODO: For some reason wso2 is sending back a fragment like #access_token=qadad&expires_in=3600
          var frag = this.route.snapshot.fragment;
          var params = new URLSearchParams(frag);
          var token = params.get('access_token');
          var expires_in = +params.get('expires_in');
          this.auth.setToken(token, expires_in);
        }
      }]);

      return CallbackComponent;
    }();

    CallbackComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-callback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./callback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./callback.component.scss */
      "./src/app/components/callback/callback.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], CallbackComponent);
    /***/
  },

  /***/
  "./src/app/components/control-bar/control-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/control-bar/control-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlBarControlBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .current-project {\n  padding: 30px;\n  font-size: 14px;\n}\n:host .goods {\n  height: 27px;\n  margin: 0px;\n  padding: 0px;\n}\n:host .toggler {\n  margin-left: 10px;\n}\n:host .picker {\n  display: inline-block;\n}\n:host .group-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .path-buttons {\n  text-align: center;\n}\n:host .project-menu {\n  margin-left: 10px;\n}\n:host .top-bar {\n  position: fixed;\n  margin-top: -50px;\n  height: 50px;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n:host .my-button {\n  border-radius: 5px;\n  padding: 5px;\n}\n:host .button-spacing {\n  margin-right: 15px;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n  }\n}\n:host .example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWJhci9EOlxcRGVzaWduU2FmZVxcdGFnZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250cm9sLWJhclxcY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1iYXIvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtYmFyL2NvbnRyb2wtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0QseUJDYmE7QUNEZDtBRmtCQztFQUNFLG1CQUFBO0FFaEJIO0FGNEJFO0VBQ0QsU0FBQTtBRTFCRDtBRjZCRTtFQUNELGFBQUE7RUFDQSxlQUFBO0FFM0JEO0FGOEJFO0VBQ0QsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FFNUJEO0FGK0JFO0VBQ0QsaUJBQUE7QUU3QkQ7QUZnQ0U7RUFDRCxxQkFBQTtBRTlCRDtBRmlDRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBRS9CRDtBRmtDRTtFQUNELGtCQUFBO0FFaENEO0FGbUNFO0VBQ0QsaUJBQUE7QUVqQ0Q7QUZvQ0U7RUFDRCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBT0EsWUFBQTtBRXhDRDtBRjJDRTtFQUVELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRTFDRDtBRjZDRTtFQUNELGtCQUFBO0VBQ0EsWUFBQTtBRTNDRDtBRjhDRTtFQUNFLGtCQUFBO0FFNUNKO0FGK0NFO0VBQ0Q7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO1lBQUEsY0FBQTtFRTdDRDtBQUNGO0FGZ0RFO0VBQ0QsbUJBQUE7VUFBQSxjQUFBO0FFOUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWJhci9jb250cm9sLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLy8gbWFyZ2luLXRvcCA0MHB4XHJcbiAgLy8gZGlzcGxheSBibG9ja1xyXG4gIC8vIGZvbnQtc2l6ZSAwLjhlbVxyXG4gIC8vIGhlaWdodCAyN3B4XHJcbiAgLy8gdmVydGljYWwtYWxpZ24gY2VudGVyXHJcbiAgLy8gd2lkdGggMTAwJVxyXG4gIC8vIHotaW5kZXggOTk5XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvciAjZmZmXHJcblxyXG4gIC8vIE5PVEUgbG90LWxhbi1sYWJlbCB3YXMgaGVyZVxyXG5cclxuICAuYWN0aXZlLXByb2plY3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRncmVlbkFjdGl2ZTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuXHRidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcclxuXHQgIHBhZGRpbmc6IDAuODVlbSAxZW07XHJcblx0fVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIC5tZW51LmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gIC8vXHR6LWluZGV4OiAxMDAwMDtcclxuICAvLyB9XHJcblxyXG4gIC8vIE5PVEUgc3dpdGNoIHdhcyBoZXJlXHJcblxyXG4gIC8vIE5PVEUgdGlueSB3YXMgaGVyZVxyXG4gIC5idXR0b24udGlueSB7XHJcblx0bWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQtcHJvamVjdCB7XHJcblx0cGFkZGluZzogMzBweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuZ29vZHMge1xyXG5cdGhlaWdodDogMjdweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudG9nZ2xlciB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucGlja2VyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZ3JvdXAtYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAucGF0aC1idXR0b25zIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1tZW51IHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC50b3AtYmFyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0bWFyZ2luLXRvcDogLTUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdC8vIHBhZGRpbmc6IDVweDtcclxuXHQvLyBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG5cdC8vIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuXHQvLyAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8vIHdpZHRoOiAxMDAlO1xyXG5cdHotaW5kZXg6IDk5OTtcclxuICB9XHJcblxyXG4gIC50b3AtYmFyLXJpZ2h0XHJcbiAgLnRvcC1iYXItbGVmdCB7XHJcblx0LXdlYmtpdC1ib3gtZmxleDogMDtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRmbGV4OiAwIDEgYXV0bztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubXktYnV0dG9uIHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1zcGFjaW5nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XHJcblx0LnRvcC1iYXIge1xyXG5cdCAgZmxleC13cmFwOiBub3dyYXA7XHJcblx0ICBmbGV4OiAwIDEgYXV0bztcclxuXHR9XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1zcGFjZXIge1xyXG5cdGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIkbGlnaHRCbHVlOiAjMGY4M2JkO1xyXG4kbGlnaHRHcmV5OiAjZDNkM2QzO1xyXG4kYmFja2dyb3VuZEhpZ2hsaWdodDogI2IzZTVmZjtcclxuJGdyZWVuQWN0aXZlOiAjMWFmZjhjO1xyXG4kQXBwTWVkaXVtQmx1ZTogIzIyYzdmZjtcclxuIiwiOmhvc3QgLmFjdGl2ZS1wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhZmY4Yztcbn1cbjpob3N0IC5tZW51IGJ1dHRvbi5kcm9wZG93bi5idXR0b24ge1xuICBwYWRkaW5nOiAwLjg1ZW0gMWVtO1xufVxuOmhvc3QgLmJ1dHRvbi50aW55IHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmN1cnJlbnQtcHJvamVjdCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5nb29kcyB7XG4gIGhlaWdodDogMjdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbjpob3N0IC50b2dnbGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAucGlja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmdyb3VwLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAucGF0aC1idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLnByb2plY3QtbWVudSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLnRvcC1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cbjpob3N0IC50b3AtYmFyLXJpZ2h0IC50b3AtYmFyLWxlZnQge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbjpob3N0IC5teS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IC5idXR0b24tc3BhY2luZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gIDpob3N0IC50b3AtYmFyIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgfVxufVxuOmhvc3QgLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/control-bar/control-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/control-bar/control-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ControlBarComponent */

  /***/
  function srcAppComponentsControlBarControlBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlBarComponent", function () {
      return ControlBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-foundation */
    "./node_modules/ngx-foundation/index.js");
    /* harmony import */


    var _modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-file-browser/modal-file-browser.component */
    "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
    /* harmony import */


    var _modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-create-project/modal-create-project.component */
    "./src/app/components/modal-create-project/modal-create-project.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../modal-current-project/modal-current-project.component */
    "./src/app/components/modal-current-project/modal-current-project.component.ts");

    var ControlBarComponent =
    /*#__PURE__*/
    function () {
      function ControlBarComponent(projectsService, geoDataService, bsModalService, groupsService, formsService, authService, router, dialog) {
        _classCallCheck(this, ControlBarComponent);

        this.projectsService = projectsService;
        this.geoDataService = geoDataService;
        this.bsModalService = bsModalService;
        this.groupsService = groupsService;
        this.formsService = formsService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.featureList = [];
        this.REFRESHTIME = 60; // 60 secs per reload

        this.mapMouseLocation = new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](0, 0);
        this.liveRefresh = true;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(this.REFRESHTIME * 1000);
      }

      _createClass(ControlBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.geoDataService.features.subscribe(function (fc) {
            _this2.features = fc;

            if (_this2.features != undefined) {
              _this2.featureList = _this2.features.features;

              _this2.groupsService.setActiveProject(_this2.featureList[0]); // TODO This should activate persistence by looping through all features and creating new groups and
              //


              _this2.groupsService.setGroupProperties(_this2.featureList); // console.log(this.featureList[this.activeFeatureNum].assets[0].path);
              // this.activeFeature = this.featureList[this.activeFeatureNum];

            }
          });
          this.groupsService.activeGroup.subscribe(function (next) {
            _this2.activeGroup = next;
          });
          this.groupsService.activePane.subscribe(function (next) {
            _this2.activePane = next;
          });
          this.geoDataService.activeFeature.subscribe(function (next) {
            _this2.activeFeature = next;
            if (_this2.activeFeature) console.log(_this2.activeFeature.assets[0].path);
          });
          this.authService.currentUser.subscribe(function (next) {
            return _this2.currentUser = next;
          });
          this.projectsService.getProjects();
          this.projectsService.projects.subscribe(function (projects) {
            _this2.projects = projects;

            if (_this2.projects.length) {
              _this2.projectsService.setActiveProject(_this2.projects[0]);
            }

            _this2.groupsService.groups.subscribe(function (next) {
              _this2.groupList = next;

              if (_this2.groupList.length > 0) {
                _this2.groupsExist = true;
              } else {
                _this2.groupsExist = false;
              }
            });

            _this2.groupsService.activeFeatureNum.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0)).subscribe(function (next) {
              _this2.activeFeatureNum = next;

              _this2.groupList.forEach(function (e) {
                if (e.name == _this2.activeGroup) {
                  if (e.features[next]) {
                    if (e.features[next].assets[0].display_path) {
                      _this2.imageName = /[^/]*$/.exec(e.features[next].assets[0].display_path)[0];
                    } else {
                      _this2.imageName = /[^/]*$/.exec(e.features[next].assets[0].path)[0];
                    }
                  }
                }
              });
            });

            _this2.groupsService.tempGroup.subscribe(function (next) {
              _this2.tempGroup = next;
            });

            _this2.groupsService.showGroup.subscribe(function (next) {
              _this2.showGroup = next;
            });

            _this2.groupsService.showSidebar.subscribe(function (next) {
              _this2.showSidebar = next;
            });

            _this2.groupsService.tempGroup.subscribe(function (next) {
              _this2.tempGroup = next;
            });
          });
          this.projectsService.activeProject.subscribe(function (next) {
            _this2.selectedProject = next;

            _this2.getDataForProject(_this2.selectedProject); //retrieves uuid for project, formats result into a link to that Hazmapper map


            _this2.hazMapperLink = "https://hazmapper.tacc.utexas.edu/hazmapper/project/" + next.uuid;
          });
          this.geoDataService.mapMouseLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1)).subscribe(function (next) {
            _this2.mapMouseLocation = next;
          });
          this.timerSubscription = this.timer.subscribe(function () {
            _this2.reloadFeatures();
          }); // FIXME Maybe redundant

          this.groupsService.setActiveFeatureNum(0);
        }
      }, {
        key: "reloadFeatures",
        value: function reloadFeatures() {
          this.geoDataService.getFeatures(this.selectedProject.id);
        }
      }, {
        key: "setLiveRefresh",
        value: function setLiveRefresh(option) {
          var _this3 = this;

          option ? this.timerSubscription = this.timer.subscribe(function () {
            _this3.reloadFeatures();
          }) : this.timerSubscription.unsubscribe();
        }
      }, {
        key: "selectProject",
        value: function selectProject(p) {
          this.projectsService.setActiveProject(p);
          this.getDataForProject(p);
        }
      }, {
        key: "getDataForProject",
        value: function getDataForProject(p) {
          this.geoDataService.getFeatures(p.id);
          this.geoDataService.getOverlays(p.id);
          this.geoDataService.getPointClouds(p.id);
        }
      }, {
        key: "openFilePicker",
        value: function openFilePicker() {
          var _this4 = this;

          var modal = this.dialog.open(_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__["ModalFileBrowserComponent"]);
          modal.afterClosed().subscribe(function (files) {
            _this4.geoDataService.importFileFromTapis(_this4.selectedProject.id, files);
          }); // const modal: BsModalRef = this.bsModalService.show(ModalFileBrowserComponent);
          // modal.content.onClose.subscribe( (files: Array<RemoteFile>) => {
          //   this.geoDataService.importFileFromTapis(this.selectedProject.id, files);
          // });
        } // nameGroup(event: any) {
        //	this.groupName = event;
        //	this.groupsService.setActiveGroup(event.toLowerCase());
        // }

      }, {
        key: "openCreateProjectModal",
        value: function openCreateProjectModal() {
          this.dialog.open(_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_8__["ModalCreateProjectComponent"], {
            height: '400px',
            width: '600px'
          }); // modal.afterClosed().subscribe( (files: Array<RemoteFile>) => {
          //   this.geoDataService.importFileFromTapis(this.selectedProject.id, files);
          // });
        }
      }, {
        key: "openProjectModal",
        value: function openProjectModal(project) {
          // console.log(project);
          this.dialog.open(_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_15__["ModalCurrentProjectComponent"], {
            height: '400px',
            width: '600px',
            data: {
              id: project.id,
              name: project.name,
              description: project.description,
              uuid: project.uuid
            }
          });
        } // TODO This should add color

      }, {
        key: "addToGroupService",
        value: function addToGroupService(name) {
          // TODO: add group data (name) to Individual Feature property
          // for (this.featureIds) {
          //   for this.projectsService.features {
          //	if project feature id = this.fatureids {
          //	  project feature.properties[groupName] = this.groupName;
          //	}
          //   }
          // }
          this.groupName = name; // this.groupsService.setActiveGroup(name.toLowerCase());

          this.groupsService.setActiveGroup(name); // let activeGroup = this.groupList.filter(group => group.name == name);
          // if (activeGroup[0].features.length == 0) {
          //   this.groupsService.setFeatureImagesExist(false);
          // } else {
          //   this.groupsService.setFeatureImagesExist(true);
          // }

          if (this.groupList.length != 1000) {
            // TODO Make this better
            if (!name || 0 === name.length) {
              console.log("Invalid Name");
            } else if (this.groupList.filter(function (e) {
              return e.name === name;
            }).length) {
              console.log("Existing Name");
            } else {
              var myRandColor = this.getRandomColor();
              this.groupList.push({
                name: name,
                features: this.tempGroup,
                color: myRandColor
              });
              this.groupsService.addGroup(this.groupList);
              this.formsService.addGroup(this.groupName); // TODO make this work for persistence

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.tempGroup[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var feat = _step.value;
                  // this should be a shared group of
                  // all the currently created objects of a particular feature
                  // let featProp = {group: []};
                  var featProp = feat.properties;

                  if (featProp.group) {
                    console.log("nope");
                    featProp.group.push({
                      name: name,
                      color: myRandColor
                    });
                  } else {
                    console.log("This is actually happening");
                    var featPropList = featProp.group = [];
                    featPropList.push({
                      name: name,
                      color: myRandColor
                    });
                  }

                  this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(feat.id), featProp);
                  console.log("In control-bar");
                  console.log("Current feat: " + feat.id);
                  console.log("featProp: what gets sent to server");
                  console.log(featProp);
                  console.log("groupList: internal listing"); // console.log(this.groupList);
                } // TODO Also should create parser that loops through all features and generates groups in an object

              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          } // TODO Clear input value
          // this.filterName = '';
          // Also clear selection


          this.tempGroup = [];
          this.groupsService.addTempGroup(this.tempGroup);
          this.groupsService.setUnselectAll(true);
          this.groupsService.setShowGroup(false);
        }
      }, {
        key: "openAddGroupModal",
        value: function openAddGroupModal(template) {
          this.dialog.open(template); // this.modalRef = this.bsModalService.show(template, {class: 'tiny'});
        }
      }, {
        key: "openSidebar",
        value: function openSidebar() {
          var _this5 = this;

          var showSidebar = !this.showSidebar;
          var showGroup = false; // let showGroupButton = !this.showGroupButton;

          this.groupsService.setActiveGroup(this.groupList[0].name);
          var activeGroup = this.groupList.filter(function (group) {
            return group.name == _this5.activeGroup;
          });

          if (activeGroup[0].features.length == 0) {
            this.groupsService.setFeatureImagesExist(false);
          } else {
            this.groupsService.setFeatureImagesExist(true);
          }

          this.groupsService.setActiveFeatureNum(0);
          this.groupsService.setShowSidebar(showSidebar);
          this.groupsService.setShowGroup(showGroup);
          this.router.navigateByUrl('/tagger', {
            skipLocationChange: true
          });
          this.tempGroup = [];
          this.groupsService.addTempGroup(this.tempGroup);
          this.groupsService.setUnselectAll(true);
          this.groupsService.setActivePane('tagger');
        } // TODO Make it prettier

      }, {
        key: "otherPath",
        value: function otherPath(dir) {
          var _this6 = this;

          var activeGroupObj = this.groupList.filter(function (realGroup) {
            return realGroup.name === _this6.activeGroup;
          }); // right

          if (dir) {
            this.activeFeatureNum += 1;
            this.activeFeatureNum = this.activeFeatureNum % activeGroupObj[0].features.length; // this.activeFeature = this.tempGroup[this.activeFeatureNum];
          } else {
            if (this.activeFeatureNum == 0) {
              this.activeFeatureNum = activeGroupObj[0].features.length;
            }

            this.activeFeatureNum -= 1; // this.activeFeature = this.tempGroup[this.activeFeatureNum];
          } // console.log(this.activeFeatureNum);
          // console.log(this.activeFeature.assets[0].path);


          this.groupsService.setActiveFeatureNum(this.activeFeatureNum); // console.log(this.activeGroup);
        }
      }, {
        key: "getRandomColor",
        value: function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';

          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          return color;
        } // TODO

      }, {
        key: "goToRoute",
        value: function goToRoute() {
          if (this.activePane == "preset") {
            this.groupsService.setActivePane("tagger");
            this.router.navigateByUrl('/tagger', {
              skipLocationChange: true
            });
          } else {
            this.groupsService.setActivePane("preset");
            this.router.navigateByUrl('/preset', {
              skipLocationChange: true
            });
          }

          this.groupsService.setActiveGroup(this.activeGroup); // let activeGroup = this.groupList.filter(what => what.name == this.activeGroup);
          // if (activeGroup[0].features.length == 0) {
          //   this.groupsService.setFeatureImagesExist(false);
          // } else {
          //   this.groupsService.setFeatureImagesExist(true);
          // }
        } // TODO

      }, {
        key: "clearAndUnselect",
        value: function clearAndUnselect() {}
      }]);

      return ControlBarComponent;
    }();

    ControlBarComponent.ctorParameters = function () {
      return [{
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }, {
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"]
      }, {
        type: ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_10__["GroupsService"]
      }, {
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_11__["FormsService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
      }];
    };

    ControlBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-control-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control-bar.component.scss */
      "./src/app/components/control-bar/control-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"], ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_10__["GroupsService"], _services_forms_service__WEBPACK_IMPORTED_MODULE_11__["FormsService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]])], ControlBarComponent);
    /***/
  },

  /***/
  "./src/app/components/image-box/image-box.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/image-box/image-box.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImageBoxImageBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .img-container {\n  position: relative;\n}\n:host .img-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: default;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .top-overlay {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  opacity: 0;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n  text-align: center;\n}\n:host .bottom-overlay {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  opacity: 1;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  text-align: center;\n}\n:host .img-container:hover img {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay:hover {\n  opacity: 1;\n}\n:host .image-option {\n  opacity: 0.9;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  color: black;\n  width: 40px;\n  height: 30px;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 3px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .image-option:hover {\n  opacity: 1;\n}\n:host .image-option .fas {\n  top: 5px;\n}\n:host .img-selected {\n  border: solid #4FB876;\n  border-width: 5px;\n}\n:host .img-unselected {\n  border: solid #fff;\n  border-width: 5px;\n}\n:host .group-tags {\n  opacity: 0.9;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: auto;\n  height: 30px;\n  border-radius: 5px;\n  padding: 5px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 999;\n}\n:host .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .center .inner-del {\n  opacity: 0;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n:host .center:hover .inner-del {\n  opacity: 1;\n}\n:host .box {\n  padding: 1px;\n}\n.center-temp {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.center-temp .inner-del-temp {\n  opacity: 0;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n.center-temp:hover .inner-del-temp {\n  opacity: 0.5;\n}\n.zoom-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-height: 700px;\n}\n.zoom-content .img-container {\n  overflow-y: scroll;\n  width: 100%;\n  height: 100%;\n  background-color: #e7e7e7;\n}\n.zoom-content .img-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 24px;\n  background-color: #e7e7e7;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n.zoom-content .title {\n  background-color: #ccc;\n  padding: 5px;\n}\n.zoom-content .detail-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 5px;\n}\n.zoom-content .detail-contents {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px;\n  background-color: #fff;\n}\n.zoom-content .detail-item {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1ib3gvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW1hZ2UtYm94XFxpbWFnZS1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNELGtCQUFBO0FDQUQ7QURLRTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNIRDtBRE9FO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTkQ7QURXRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDWEQ7QURnQkU7RUFDRCxZQUFBO0FDZEQ7QURpQkU7RUFDRCxZQUFBO0FDZkQ7QURrQkU7RUFDRCxVQUFBO0FDaEJEO0FEbUJFO0VBQ0QsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakJEO0FEb0JFO0VBQ0QsVUFBQTtBQ2xCRDtBRHFCRTtFQUNELFFBQUE7QUNuQkQ7QURzQkU7RUFDRCxxQkFBQTtFQUNBLGlCQUFBO0FDcEJEO0FEdUJFO0VBQ0Qsa0JBQUE7RUFDQSxpQkFBQTtBQ3JCRDtBRHdCRTtFQUNELFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDdEJEO0FEeUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDeEJEO0FEeUJDO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxlQUFBO0FDdkJIO0FENEJDO0VBQ0UsVUFBQTtBQzFCSDtBRCtCRTtFQUNELFlBQUE7QUM3QkQ7QURrQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ2hDRjtBRGlDRTtFQUNELFVBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtBQy9CRDtBRG9DRTtFQUNELFlBQUE7QUNqQ0Q7QURxQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ2xDRjtBRG9DRTtFQUNELGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ25DRDtBRHNDRTtFQUlELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUN2Q0Q7QUQwQ0U7RUFDRCxzQkFBQTtFQUNBLFlBQUE7QUN4Q0Q7QUQyQ0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDekNEO0FENENFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDMUNEO0FENkNFO0VBQ0QsWUFBQTtBQzNDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuaW1nLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC8vIHdpZHRoOiAxMDAlO1xyXG5cdC8vIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbWctY29udGFpbmVyIGltZyB7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0bWF4LWhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAudG9wLW92ZXJsYXkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQvLyBUT0RPIG1ha2UgaXQgd29yayB3aXRoIHdpbmRvd3MgYW5kIHRyYW5zZm9ybTtcclxuXHRyaWdodDogMTBweDtcclxuXHR0b3A6IDEwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQvLyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLW92ZXJsYXkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQvLyBUT0RPIG1ha2UgaXQgd29yayB3aXRoIHdpbmRvd3MgYW5kIHRyYW5zZm9ybSAob3IgcG9zdGNzcyBwcmVmaXgpO1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG5cdGJvdHRvbTogMTBweDtcclxuXHQvLyBjdXJzb3I6IHBvaW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOztcclxuXHQvLyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7O1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb250YWluZXI6aG92ZXIgaW1nIHtcclxuXHRvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvbnRhaW5lcjpob3ZlciAudG9wLW92ZXJsYXkge1xyXG5cdG9wYWNpdHk6IDAuOTtcclxuICB9XHJcblxyXG4gIC5pbWctY29udGFpbmVyOmhvdmVyIC50b3Atb3ZlcmxheTpob3ZlciB7XHJcblx0b3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1vcHRpb24ge1xyXG5cdG9wYWNpdHk6IDAuOTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRtYXJnaW46IDNweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLW9wdGlvbjpob3ZlciB7XHJcblx0b3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1vcHRpb24gLmZhcyB7XHJcblx0dG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLXNlbGVjdGVkIHtcclxuXHRib3JkZXI6IHNvbGlkICM0RkI4NzY7XHJcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLXVuc2VsZWN0ZWQge1xyXG5cdGJvcmRlcjogc29saWQgI2ZmZjtcclxuXHRib3JkZXItd2lkdGg6IDVweDtcclxuICB9XHJcblxyXG4gIC5ncm91cC10YWdzIHtcclxuXHRvcGFjaXR5OiAwLjk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ei1pbmRleDogOTk5O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cdC8vIGN1cnNvcjogcG9pbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC5pbm5lci1kZWwge1xyXG5cdCAgb3BhY2l0eTogMDtcclxuXHQgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cdCAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuICB9XHJcblxyXG4gIC5jZW50ZXI6aG92ZXIge1xyXG5cdC5pbm5lci1kZWwgIHtcclxuXHQgIG9wYWNpdHk6IDE7XHJcblx0fVxyXG4gIH1cclxuXHJcblxyXG4gIC5ib3gge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uY2VudGVyLXRlbXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuaW5uZXItZGVsLXRlbXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlci10ZW1wOmhvdmVyIHtcclxuICAuaW5uZXItZGVsLXRlbXAgIHtcclxuXHRvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcblxyXG4uem9vbS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcblxyXG4gIC5pbWctY29udGFpbmVyIHtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0Ly8gb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gIH1cclxuXHJcbiAgLmltZy1kZXRhaWxzIHtcclxuXHQvLyB3aWR0aDogMTAwJTtcclxuXHQvLyBoZWlnaHQ6IDEwMCU7XHJcblx0Ly8gbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLWNvbnRlbnRzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLWl0ZW0ge1xyXG5cdHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuaW1nLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLnRvcC1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJvdHRvbS1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5pbWctY29udGFpbmVyOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbjpob3N0IC5pbWctY29udGFpbmVyOmhvdmVyIC50b3Atb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbjpob3N0IC5pbWctY29udGFpbmVyOmhvdmVyIC50b3Atb3ZlcmxheTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCAuaW1hZ2Utb3B0aW9uIHtcbiAgb3BhY2l0eTogMC45O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmltYWdlLW9wdGlvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCAuaW1hZ2Utb3B0aW9uIC5mYXMge1xuICB0b3A6IDVweDtcbn1cbjpob3N0IC5pbWctc2VsZWN0ZWQge1xuICBib3JkZXI6IHNvbGlkICM0RkI4NzY7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuOmhvc3QgLmltZy11bnNlbGVjdGVkIHtcbiAgYm9yZGVyOiBzb2xpZCAjZmZmO1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5ncm91cC10YWdzIHtcbiAgb3BhY2l0eTogMC45O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG59XG46aG9zdCAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jZW50ZXIgLmlubmVyLWRlbCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmNlbnRlcjpob3ZlciAuaW5uZXItZGVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC5ib3gge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5jZW50ZXItdGVtcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlci10ZW1wIC5pbm5lci1kZWwtdGVtcCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyLXRlbXA6aG92ZXIgLmlubmVyLWRlbC10ZW1wIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uem9vbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNzAwcHg7XG59XG4uem9vbS1jb250ZW50IC5pbWctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xufVxuLnpvb20tY29udGVudCAuaW1nLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uem9vbS1jb250ZW50IC50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi56b29tLWNvbnRlbnQgLmRldGFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uem9vbS1jb250ZW50IC5kZXRhaWwtY29udGVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uem9vbS1jb250ZW50IC5kZXRhaWwtaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/image-box/image-box.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/image-box/image-box.component.ts ***!
    \*************************************************************/

  /*! exports provided: ImageBoxComponent */

  /***/
  function srcAppComponentsImageBoxImageBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageBoxComponent", function () {
      return ImageBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-foundation/modal */
    "./node_modules/ngx-foundation/modal/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ImageBoxComponent =
    /*#__PURE__*/
    function () {
      function ImageBoxComponent(geoDataService, groupsService, projectsService, modalService, dialog) {
        _classCallCheck(this, ImageBoxComponent);

        this.geoDataService = geoDataService;
        this.groupsService = groupsService;
        this.projectsService = projectsService;
        this.modalService = modalService;
        this.dialog = dialog;
        this.status = false;
        this.hasGroup = false;
        this.colors = []; // This is for tooltip

        this.currentGroup = "hello";
        this.unselectAll = false; // FIXME Bad

        this.imageCollection = {};
      }

      _createClass(ImageBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
          var featureSource = this.environment.apiUrl + '/assets/' + this.feature.assets[0].path;
          featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
          this.featureSource = featureSource;
          this.coordinates = this.feature.geometry['coordinates']; // console.log(coordinates[0]);

          this.projectsService.activeProject.subscribe(function (next) {
            _this7.selectedProject = next;
          });
          this.groupsService.groups.subscribe(function (next) {
            _this7.groupList = next;

            if (_this7.groupList != null && _this7.groupList.length > 0 && _this7.featureSource != null) {
              _this7.groupList.forEach(function (e) {
                e.features.forEach(function (c) {
                  if (c.id == _this7.feature.id) {
                    if (!_this7.colors.includes(e.color)) {
                      _this7.colors.push(e.color);

                      console.log(e.color);
                    }

                    _this7.hasGroup = true;
                  }
                });
              });
            }
          });
          this.groupsService.tempGroup.subscribe(function (next) {
            _this7.tempGroup = next;
          });
          this.groupsService.activeGroup.subscribe(function (next) {
            _this7.activeGroup = next;
          });
          this.groupsService.unselectAll.subscribe(function (next) {
            _this7.unselectAll = next;

            if (_this7.unselectAll == true) {
              _this7.status = false;
            }
          });
        } // click() {
        //   this.clickRequest.emit(this.feature);
        // // imageSelect(event: any) {
        // //   if (event.target.classList.contains('img-selected')) {
        // //     this.renderer.removeClass(event.target, "img-selected");
        // //     this.renderer.addClass(event.target, "img-unselected");
        // //   } else {
        // //     this.renderer.removeClass(event.target, "img-unselected");
        // //     this.renderer.addClass(event.target, "img-selected");
        // //   }
        // // }
        // }
        // delete() {
        //   this.geoDataService.deleteFeature(this.feature);
        // }

      }, {
        key: "imageSelect",
        value: function imageSelect() {
          var _this8 = this;

          if (this.unselectAll == true) {
            this.unselectAll = false;
            this.groupsService.setUnselectAll(false);
          }

          this.status = !this.status;

          if (this.tempGroup.filter(function (v) {
            return v.assets[0].id == _this8.feature.assets[0].id;
          }).length > 0) {
            this.tempGroup = this.tempGroup.filter(function (v) {
              return v.assets[0].id != _this8.feature.assets[0].id;
            });
          } else {
            this.tempGroup.push(this.feature);
          }

          this.groupsService.addTempGroup(this.tempGroup); // console.log(this.tempGroup.filter(v => v.assets[0].id == feature.assets[0].id).length > 0)
          // Hide group-bar

          if (this.tempGroup.length == 0) {
            this.groupsService.setShowGroup(false);
          } else {
            this.groupsService.setShowGroup(true);
          }
        }
      }, {
        key: "imageZoom",
        value: function imageZoom(template) {
          // this.modalRef = this.modalService.show(template, {class: 'full'});
          this.dialog.open(template);
        }
      }, {
        key: "imageDelete",
        value: function imageDelete() {
          this.geoDataService.deleteFeature(this.feature);
        }
      }, {
        key: "openMoreGroupsModal",
        value: function openMoreGroupsModal(template) {
          // this.modalRef = this.modalService.show(template, {class: 'tiny'});
          this.dialog.open(template);
        }
      }, {
        key: "openImageDeleteModal",
        value: function openImageDeleteModal(template) {
          // this.modalRef = this.modalService.show(template, {class: 'tiny'});
          this.dialog.open(template);
        }
      }, {
        key: "deleteFromGroup",
        value: function deleteFromGroup(color) {
          var _this9 = this;

          console.log(this.groupList);
          this.groupList.forEach(function (e) {
            // When it is the sole feature
            if (e.features.length <= 1) {
              _this9.groupList = _this9.groupList.filter(function (e) {
                return e.color != color;
              });
            } else {
              if (e.color == color) {
                e.features = e.features.filter(function (i) {
                  return i.id != _this9.feature.id;
                });
              }
            }
          });
          var featProp = this.feature.properties;
          featProp.group = featProp.group.filter(function (e) {
            return e.color != color;
          });
          this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(this.feature.id), featProp);
          this.groupsService.addGroup(this.groupList);
          this.colors = this.colors.filter(function (e) {
            return e != color;
          });
        }
      }, {
        key: "openImageAddModal",
        value: function openImageAddModal(template) {
          // this.modalRef = this.modalService.show(template, {class: 'tiny'});
          this.dialog.open(template);
        }
      }, {
        key: "selectGroupForm",
        value: function selectGroupForm(name) {
          var _this10 = this;

          var color = "";
          this.groupsService.setActiveFeatureNum(0);
          this.groupList.forEach(function (e) {
            if (e.name == name) {
              e.features.push(_this10.feature);
              color = e.color;
            }
          });
          var featProp = this.feature.properties;

          if (featProp.group) {
            var featGroupList = featProp.group.map(function (e) {
              return e.name;
            });

            if (!featGroupList.includes(name)) {
              featProp.group.push({
                name: name,
                color: color
              });
            }
          } else {
            featProp.group = [];
            featProp.group.push({
              name: name,
              color: color
            });
          }

          this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(this.feature.id), featProp);
          this.groupsService.addGroup(this.groupList);
        }
      }, {
        key: "getGroupNameFromColor",
        value: function getGroupNameFromColor(color) {
          var _this11 = this;

          this.groupList.forEach(function (e) {
            if (e.color == color) {
              _this11.currentGroup = e.name;
            }
          });
        }
      }]);

      return ImageBoxComponent;
    }();

    ImageBoxComponent.ctorParameters = function () {
      return [{
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]
      }, {
        type: ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_models__WEBPACK_IMPORTED_MODULE_2__["Feature"])], ImageBoxComponent.prototype, "feature", void 0);
    ImageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-box.component.scss */
      "./src/app/components/image-box/image-box.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"], ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])], ImageBoxComponent);
    /***/
  },

  /***/
  "./src/app/components/image-gallery/image-gallery.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/image-gallery/image-gallery.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImageGalleryImageGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .img-list-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1em;\n  height: 100%;\n  padding: 1em;\n}\n:host #no-img {\n  font-size: 32px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 70vh;\n}\n:host #no-proj {\n  font-size: 32px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 70vh;\n}\n:host app-image-box {\n  height: 100%;\n}\n:host .masonry-item {\n  width: 200px;\n}\n:host img-spin {\n  position: relative;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n:host load-spin {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n:host .side-bar-container {\n  background-color: #F1F1F1;\n  position: fixed;\n  width: 25%;\n  margin-right: 0px;\n  height: calc(100vh - 50px);\n  right: 0;\n}\n:host .success {\n  margin-right: 20%;\n}\n:host .danger {\n  margin-right: 0%;\n}\n:host #gallery-container-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 0px;\n}\n:host #loading-load {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 50px;\n}\n:host #gallery-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host #gallery-container .gallery-image {\n  height: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host #gallery-container .gallery-image img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .imager {\n  width: 75%;\n  height: calc(100vh - 50px);\n  background-color: #fefefe;\n}\n:host .view-image {\n  max-width: 100%;\n  height: auto;\n}\n:host .gallery-btn {\n  width: 35px;\n  height: 35px;\n  background: #000;\n  color: #fff;\n  text-align: center;\n  line-height: 35px;\n  cursor: pointer;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  font-size: 20px;\n  box-sizing: border-box;\n  padding-left: 2px;\n  position: fixed;\n  bottom: 10px;\n}\n:host .gallery-btn:hover {\n  background: #222;\n}\n:host .gallery-close {\n  top: 10px;\n}\n:host .gallery-close .gallery-next {\n  right: 10px;\n}\n:host .gallery-prev {\n  right: 50px;\n}\n:host .gallery-prev .gallery-next {\n  bottom: 10px;\n}\n@media (min-width: 478px) {\n  :host .img-list-container img:nth-child(3n):not(last-of-type) {\n    grid-row-end: span 2;\n  }\n}\n@media (max-width: 768px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n}\n@media (max-width: 450px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5L0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGltYWdlLWdhbGxlcnlcXGltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0QsYUFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUQ7QURHRTtFQUNELGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNERDtBREtFO0VBQ0QsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hEO0FETUU7RUFDRCxZQUFBO0FDSkQ7QURPRTtFQUNELFlBQUE7QUNMRDtBRFFFO0VBQ0Qsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNORDtBRFNFO0VBQ0Qsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDUEQ7QURXRTtFQUNELHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBR0EsUUFBQTtBQ1hEO0FEY0U7RUFDRCxpQkFBQTtBQ1pEO0FEZUU7RUFDRCxnQkFBQTtBQ2JEO0FEZ0JFO0VBQ0Qsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtBQ2hCRDtBRG9CRTtFQUNELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDbkJEO0FEc0JFO0VBQ0Qsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDdEJEO0FEMkJFO0VBQ0QsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3pCRDtBRDRCRTtFQUNELGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUMxQkQ7QUQ2QkU7RUFDRCxVQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQzNCRDtBRDhCRTtFQUNELGVBQUE7RUFDQSxZQUFBO0FDNUJEO0FEK0JFO0VBQ0QsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUdBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDN0JEO0FEZ0NFO0VBQ0QsZ0JBQUE7QUM5QkQ7QURpQ0U7RUFDRCxTQUFBO0FDL0JEO0FEa0NFO0VBRUQsV0FBQTtBQ2pDRDtBRG9DRTtFQUNELFdBQUE7QUNsQ0Q7QURxQ0U7RUFFRCxZQUFBO0FDcENEO0FEdUNFO0VBQ0Q7SUFDRSxvQkFBQTtFQ3JDRDtBQUNGO0FEd0NFO0VBQ0Q7SUFDRSwyREFBQTtFQ3RDRDtBQUNGO0FEeUNFO0VBQ0Q7SUFDRSwyREFBQTtFQ3ZDRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmltZy1saXN0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcblx0Z3JpZC1nYXA6IDFlbTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMWVtO1xyXG4gIH1cclxuXHJcbiAgI25vLWltZyB7XHJcblx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDcwdmg7XHJcblx0Ly8gei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgI25vLXByb2oge1xyXG5cdGZvbnQtc2l6ZTogMzJweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuXHJcbiAgYXBwLWltYWdlLWJveCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hc29ucnktaXRlbSB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nLXNwaW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3R0b206IDBweDtcclxuXHRsZWZ0OiAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgbG9hZC1zcGluIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFrZSBvdmVyZmxvdyBmb3IgdGhpcyBoaWRkZW5cclxuICAuc2lkZS1iYXItY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMjUlO1xyXG5cdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0Ly8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHRyaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5zdWNjZXNzIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC5kYW5nZXIge1xyXG5cdG1hcmdpbi1yaWdodDogMCU7XHJcbiAgfVxyXG5cclxuICAjZ2FsbGVyeS1jb250YWluZXItY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdC8vIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcclxuXHQvLyB6LWluZGV4OiAtMTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHQvLyB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gICNsb2FkaW5nLWxvYWQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8vIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI2dhbGxlcnktY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdC8vIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcclxuXHQvLyB6LWluZGV4OiAtMTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC8vIG1hcmdpbi10b3A6IDUwcHg7XHJcblx0Ly8gei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAjZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2Uge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2dhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlIGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1heC1oZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VyIHtcclxuXHR3aWR0aDogNzUlO1xyXG5cdGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgfVxyXG5cclxuICAudmlldy1pbWFnZSB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LWJ0biB7XHJcblx0d2lkdGg6IDM1cHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRwYWRkaW5nLWxlZnQ6IDJweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnktYnRuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnktY2xvc2Uge1xyXG5cdHRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LWNsb3NlXHJcbiAgLmdhbGxlcnktbmV4dCB7XHJcblx0cmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeS1wcmV2IHtcclxuXHRyaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LXByZXZcclxuICAuZ2FsbGVyeS1uZXh0IHtcclxuXHRib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDc4cHgpIHtcclxuXHQuaW1nLWxpc3QtY29udGFpbmVyIGltZzpudGgtY2hpbGQoM24pOm5vdChsYXN0LW9mLXR5cGUpIHtcclxuXHQgIGdyaWQtcm93LWVuZDogc3BhbiAyO1xyXG5cdH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdC5pbWctbGlzdC1jb250YWluZXIge1xyXG5cdCAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcblx0fVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblx0LmltZy1saXN0LWNvbnRhaW5lciB7XHJcblx0ICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuXHR9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5pbWctbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxZW07XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xufVxuOmhvc3QgI25vLWltZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzB2aDtcbn1cbjpob3N0ICNuby1wcm9qIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuOmhvc3QgYXBwLWltYWdlLWJveCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogMjAwcHg7XG59XG46aG9zdCBpbWctc3BpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46aG9zdCBsb2FkLXNwaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOmhvc3QgLnNpZGUtYmFyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICByaWdodDogMDtcbn1cbjpob3N0IC5zdWNjZXNzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG46aG9zdCAuZGFuZ2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cbjpob3N0ICNnYWxsZXJ5LWNvbnRhaW5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuOmhvc3QgI2xvYWRpbmctbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOmhvc3QgI2dhbGxlcnktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAjZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0ICNnYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLmltYWdlciB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuOmhvc3QgLnZpZXctaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IC5nYWxsZXJ5LWJ0biB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG46aG9zdCAuZ2FsbGVyeS1jbG9zZSB7XG4gIHRvcDogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LWNsb3NlIC5nYWxsZXJ5LW5leHQge1xuICByaWdodDogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LXByZXYge1xuICByaWdodDogNTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LXByZXYgLmdhbGxlcnktbmV4dCB7XG4gIGJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NzhweCkge1xuICA6aG9zdCAuaW1nLWxpc3QtY29udGFpbmVyIGltZzpudGgtY2hpbGQoM24pOm5vdChsYXN0LW9mLXR5cGUpIHtcbiAgICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC5pbWctbGlzdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOmhvc3QgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/image-gallery/image-gallery.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/image-gallery/image-gallery.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ImageGalleryComponent */

  /***/
  function srcAppComponentsImageGalleryImageGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function () {
      return ImageGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ImageGalleryComponent =
    /*#__PURE__*/
    function () {
      function ImageGalleryComponent(geoDataService, projectsService, groupsService, renderer, spinner) {
        _classCallCheck(this, ImageGalleryComponent);

        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.groupsService = groupsService;
        this.renderer = renderer;
        this.spinner = spinner;
        this.scrolling = false;
        this.featureList = [];
        this.scrollSum = 15;
      }

      _createClass(ImageGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]; // this.activeFeatureNum = 0;
          // FIXME feature collection giving me an error when trying to access assets
          // this.geoDataService.features.subscribe( (fc: FeatureCollection) => {

          this.geoDataService.loaded.subscribe(function (e) {
            _this12.loaded = e;
          });
          this.geoDataService.features.subscribe(function (fc) {
            if (fc) {
              if (fc.features.length > 0) {
                _this12.imagesExist = true;
                _this12.featureList = fc.features.filter(function (feature) {
                  return feature.assets[0].asset_type == "image";
                });

                if (_this12.scrollSum == 15) {
                  _this12.featureListScroll = _this12.featureList.slice(0, _this12.scrollSum);
                }
              } else {
                _this12.imagesExist = false;
              }
            }
          });
          this.projectsService.projects.subscribe(function (projects) {
            _this12.projects = projects;

            if (_this12.projects.length) {
              _this12.projectsExist = true;
            } else {
              _this12.projectsExist = false;
            }
          });
          this.geoDataService.activeFeature.subscribe(function (next) {
            if (next) {
              _this12.activeFeature = next;
            }
          });
          this.groupsService.groups.subscribe(function (next) {
            _this12.groupList = next;
          });
          this.groupsService.activeGroup.subscribe(function (next) {
            _this12.activeGroup = next;
          });
          this.groupsService.featureImagesExist.subscribe(function (next) {
            _this12.groupExist = next;
          });
          this.groupsService.tempGroup.subscribe(function (next) {
            _this12.tempGroup = next;
          });
          this.groupsService.showGroup.subscribe(function (next) {
            _this12.showGroup = next;
          });
          this.groupsService.activeFeatureNum.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0)).subscribe(function (next) {
            _this12.activeFeatureNum = next;
          });
          this.groupsService.showSidebar.subscribe(function (next) {
            _this12.showSidebar = next; // this.status = !this.status;

            if (next) {
              _this12.status = true;
            } else {
              _this12.status = false;
            }
          });
          this.groupsService.setActiveFeatureNum(0);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          var _this13 = this;

          // let featureSource = this.environment.apiUrl + '/assets/' + this.activeFeature.assets[0].path;
          var activeGroupObj = this.groupList.filter(function (realGroup) {
            return realGroup.name === _this13.activeGroup;
          });

          if (activeGroupObj[0] != undefined) {
            if (activeGroupObj[0].features[this.activeFeatureNum].assets[0].path == undefined) {
              this.groupsService.setActiveFeatureNum(0); // this.groupsService.setActiveFeatureNum(0);

              if (activeGroupObj[0].features[this.activeFeatureNum] == undefined) {
                this.groupsService.setActiveGroup(this.groupList[0].name);
              }
            }
          }

          var featureSource = this.environment.apiUrl + '/assets/' + activeGroupObj[0].features[this.activeFeatureNum].assets[0].path;
          this.groupsService.setActiveFeatureId(activeGroupObj[0].features[this.activeFeatureNum].id);
          featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
          return featureSource;
        }
      }, {
        key: "appendSum",
        value: function appendSum() {
          var _this14 = this;

          if (this.featureList.length != 0) {
            if (this.scrollSum > this.featureList.length) {
              this.scrollSum = this.featureList.length;
            }

            if (this.scrollSum == this.featureList.length) {
              this.spinner.hide();
              this.scrolling = false;
              return;
            }
          }

          this.featureListScroll = this.featureList.slice(0, this.scrollSum);
          setTimeout(function () {
            _this14.spinner.hide();

            _this14.scrolling = false;
          }, 1300);
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (!this.scrolling) {
            this.spinner.show();
            this.scrollSum += 10;
            this.appendSum();
            this.scrolling = true;
          } // if (this.notscrolly && this.notEmptyPost) {
          //   this.spinner.show();
          //   this.notscrolly = false;
          //   this.loadNextPost();
          // }
          // console.log('scrolled!!');

        }
      }]);

      return ImageGalleryComponent;
    }();

    ImageGalleryComponent.ctorParameters = function () {
      return [{
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };

    ImageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-gallery.component.scss */
      "./src/app/components/image-gallery/image-gallery.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"], _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], ImageGalleryComponent);
    /***/
  },

  /***/
  "./src/app/components/main/main.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/main/main.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .top-bar {\n  height: 40px;\n  padding: 5px;\n  padding-left: 0.5em;\n  flex-wrap: nowrap;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0QsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRDtBREdFO0VBRUQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRkQ7QURNRTtFQUNEO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtZQUFBLGNBQUE7RUNKRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnRvcC1iYXIge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG5cclxuICAudG9wLWJhci1yaWdodFxyXG4gIC50b3AtYmFyLWxlZnQge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0ZmxleC13cmFwOiBub3dyYXA7XHJcblx0ZmxleDogMCAxIGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XHJcblx0LnRvcC1iYXIge1xyXG5cdCAgZmxleC13cmFwOiBub3dyYXA7XHJcblx0ICBmbGV4OiAwIDEgYXV0bztcclxuXHR9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC50b3AtYmFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG46aG9zdCAudG9wLWJhci1yaWdodCAudG9wLWJhci1sZWZ0IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuICA6aG9zdCAudG9wLWJhciB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleDogMCAxIGF1dG87XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var ngx_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-foundation */
    "./node_modules/ngx-foundation/index.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      // public activeFeature: Feature;
      // public currentUser: AuthenticatedUser;
      function MainComponent(geoDataService, authService, bsModalService) {
        _classCallCheck(this, MainComponent);

        this.geoDataService = geoDataService;
        this.authService = authService;
        this.bsModalService = bsModalService;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.geoDataService.activeFeature.subscribe( next => {
          //   this.activeFeature = next;
          // });
          // this.authService.currentUser.subscribe(next => this.currentUser = next);
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/components/main/main.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])], MainComponent);
    /***/
  },

  /***/
  "./src/app/components/map/map.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/map/map.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/map/map.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/map/map.component.ts ***!
    \*************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet.markercluster */
    "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../utils/leafletUtils */
    "./src/app/utils/leafletUtils.ts");
    /* harmony import */


    var _turf_turf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @turf/turf */
    "./node_modules/@turf/turf/turf.min.js");
    /* harmony import */


    var _turf_turf__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent(GeoDataService, route) {
        _classCallCheck(this, MapComponent);

        this.GeoDataService = GeoDataService;
        this.route = route;
        this.mapType = 'normal';
        this.features = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"](); // Have to bind these to keep this being this

        this.featureClickHandler.bind(this);
        this.mouseEventHandler.bind(this);
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          // const mapType: string = this.route.snapshot.queryParamMap.get('mapType');
          // this.projectId = +this.route.snapshot.paramMap.get("projectId");
          // this.cluster = this.route.snapshot.queryParamMap.get('mapType');
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"];
          this.overlays = new Map();
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Map"]('map', {
            center: [40, -80],
            zoom: 9
          });
          var baseOSM = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          });
          var satellite = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          }); // default to streetmap view;

          this.map.addLayer(baseOSM);
          this.loadFeatures(); // Publish the mouse location on the mapMouseLocation stream

          this.map.on('mousemove', function (ev) {
            return _this15.mouseEventHandler(ev);
          });
          this.GeoDataService.activeOverlay.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe(function (next) {
            _this15.addRemoveOverlay(next);
          }); // Listen on the activeFeature stream and zoom map to that feature when it changes

          this.GeoDataService.activeFeature.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (n) {
            return n != null;
          })).subscribe(function (next) {
            _this15.activeFeature = next;

            var bbox = _turf_turf__WEBPACK_IMPORTED_MODULE_7__["bbox"](next);

            _this15.map.fitBounds([[bbox[1], bbox[0]], [bbox[3], bbox[2]]]);
          }); // Listen for changes to the basemap

          this.GeoDataService.basemap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe(function (next) {
            if (next == 'sat') {
              _this15.map.removeLayer(baseOSM);

              _this15.map.addLayer(satellite);
            }

            if (next == 'roads') {
              _this15.map.removeLayer(satellite);

              _this15.map.addLayer(baseOSM);
            }
          });
        }
      }, {
        key: "addRemoveOverlay",
        value: function addRemoveOverlay(ov) {
          if (this.overlays.has(ov.id)) {
            this.features.removeLayer(this.overlays.get(ov.id));
            this.overlays.delete(ov.id);
          } else {
            var overlay = leaflet__WEBPACK_IMPORTED_MODULE_3__["imageOverlay"](_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/assets/' + ov.path, [[ov.minLat, ov.minLon], [ov.maxLat, ov.maxLon]]);
            this.overlays.set(ov.id, overlay);
            this.features.addLayer(overlay);
          }

          this.map.fitBounds(this.features.getBounds());
        }
      }, {
        key: "mouseEventHandler",
        value: function mouseEventHandler(ev) {
          this.GeoDataService.mapMouseLocation = ev.latlng;
        }
        /**
         * Load Features for a project.
         */

      }, {
        key: "loadFeatures",
        value: function loadFeatures() {
          var _this16 = this;

          var geojsonOptions = {
            pointToLayer: _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__["createMarker"]
          };
          this.GeoDataService.features.subscribe(function (collection) {
            _this16.features.clearLayers();

            var markers = leaflet__WEBPACK_IMPORTED_MODULE_3__["markerClusterGroup"]({
              iconCreateFunction: function iconCreateFunction(cluster) {
                return leaflet__WEBPACK_IMPORTED_MODULE_3__["divIcon"]({
                  html: "<div><b>".concat(cluster.getChildCount(), "</b></div>"),
                  className: 'marker-cluster'
                });
              }
            });
            collection.features.forEach(function (d) {
              var feat = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](d, geojsonOptions);
              feat.on('click', function (ev) {
                _this16.featureClickHandler(ev);
              });

              if (d.geometry.type == 'Point') {
                markers.addLayer(feat);
              } else {
                _this16.features.addLayer(feat);
              }
            });

            _this16.features.addLayer(markers);

            _this16.map.addLayer(_this16.features);

            try {
              _this16.map.fitBounds(_this16.features.getBounds());
            } catch (e) {}
          });
        }
        /**
         *
         * @param ev
         */

      }, {
        key: "featureClickHandler",
        value: function featureClickHandler(ev) {
          var f = ev.layer.feature;
          this.GeoDataService.activeFeature = f;
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/components/map/map.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], MapComponent);
    /***/
  },

  /***/
  "./src/app/components/modal-create-project/modal-create-project.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/modal-create-project/modal-create-project.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalCreateProjectModalCreateProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #create-project-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  padding: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1jcmVhdGUtcHJvamVjdC9EOlxcRGVzaWduU2FmZVxcdGFnZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RhbC1jcmVhdGUtcHJvamVjdFxcbW9kYWwtY3JlYXRlLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY3JlYXRlLXByb2plY3QvbW9kYWwtY3JlYXRlLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY3JlYXRlLXByb2plY3QvbW9kYWwtY3JlYXRlLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogNWVtO1xyXG4gIH1cclxufVxyXG4vLyBUT0RPOiBGaXggYW5ub3lpbmcgbWFyZ2luIGZsYXNoXHJcbi8vIDpob3N0IHtcclxuLy8gICBwb3NpdGlvbjoge3RvcDogMjBweH07XHJcbi8vICAgd2lkdGg6IDQ1MHB4O1xyXG4vLyAgIGhlaWdodDogMjUwcHg7XHJcbi8vICAgbWluLWhlaWdodDogMjBlbTtcclxuLy8gICAuZmlsZXNsaXN0aW5nIHtcclxuLy9cdG1pbi1oZWlnaHQ6IDE1ZW07XHJcbi8vXHRtYXgtaGVpZ2h0OiAxNWVtO1xyXG4vL1x0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmZpbGUtcm93IHtcclxuLy9cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vL1x0Jjpob3ZlciB7XHJcbi8vXHQgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodEdyZXk7XHJcbi8vXHQgICYuc2VsZWN0ZWQge1xyXG4vL1x0XHRiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4vL1x0ICB9XHJcbi8vXHR9XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG4iLCI6aG9zdCAjY3JlYXRlLXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/modal-create-project/modal-create-project.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/modal-create-project/modal-create-project.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ModalCreateProjectComponent */

  /***/
  function srcAppComponentsModalCreateProjectModalCreateProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCreateProjectComponent", function () {
      return ModalCreateProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ModalCreateProjectComponent =
    /*#__PURE__*/
    function () {
      function ModalCreateProjectComponent(dialogRef, dialog, projectsService) {
        _classCallCheck(this, ModalCreateProjectComponent);

        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.projectsService = projectsService;
      }

      _createClass(ModalCreateProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "submit",
        value: function submit() {
          var p = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
          p.description = this.projCreateForm.get('description').value;
          p.name = this.projCreateForm.get('name').value;
          this.projectsService.create(p);
          this.dialogRef.close();
        }
      }]);

      return ModalCreateProjectComponent;
    }();

    ModalCreateProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    ModalCreateProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-create-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-create-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-create-project.component.scss */
      "./src/app/components/modal-create-project/modal-create-project.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])], ModalCreateProjectComponent);
    /***/
  },

  /***/
  "./src/app/components/modal-current-project/modal-current-project.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/modal-current-project/modal-current-project.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalCurrentProjectModalCurrentProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #current-project-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  padding: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1jdXJyZW50LXByb2plY3QvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWwtY3VycmVudC1wcm9qZWN0XFxtb2RhbC1jdXJyZW50LXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY3VycmVudC1wcm9qZWN0L21vZGFsLWN1cnJlbnQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1jdXJyZW50LXByb2plY3QvbW9kYWwtY3VycmVudC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICNjdXJyZW50LXByb2plY3QtZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiA1ZW07XHJcbiAgfVxyXG59IiwiOmhvc3QgI2N1cnJlbnQtcHJvamVjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modal-current-project/modal-current-project.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/modal-current-project/modal-current-project.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ModalCurrentProjectComponent */

  /***/
  function srcAppComponentsModalCurrentProjectModalCurrentProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCurrentProjectComponent", function () {
      return ModalCurrentProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ModalCurrentProjectComponent =
    /*#__PURE__*/
    function () {
      function ModalCurrentProjectComponent(dialogRef, dialog, projectsService, projData) {
        _classCallCheck(this, ModalCurrentProjectComponent);

        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.projectsService = projectsService;
        this.projData = projData;
      }

      _createClass(ModalCurrentProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.projectsService.activeProject.subscribe(function (next) {
            _this17.activeProject = next;
          });
          this.projCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.activeProject.name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.activeProject.description)
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "delete",
        value: function _delete() {
          if (confirm("Are you sure to delete this project?")) {
            this.projectsService.delete(this.activeProject);
          }

          this.dialogRef.close();
        }
      }, {
        key: "update",
        value: function update() {
          var p = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
          p.description = this.projCreateForm.get('description').value;
          p.name = this.projCreateForm.get('name').value;
          p.id = this.activeProject.id;
          p.uuid = this.activeProject.uuid;
          this.projectsService.update(p);
          this.dialogRef.close();
        }
      }]);

      return ModalCurrentProjectComponent;
    }();

    ModalCurrentProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ModalCurrentProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-current-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-current-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-current-project.component.scss */
      "./src/app/components/modal-current-project/modal-current-project.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], Object])], ModalCurrentProjectComponent);
    /***/
  },

  /***/
  "./src/app/components/modal-file-browser/modal-file-browser.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/modal-file-browser/modal-file-browser.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalFileBrowserModalFileBrowserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .fileslisting {\n  min-height: 15em;\n  max-height: 15em;\n  overflow-y: scroll;\n}\n:host .selected {\n  background: #eeeeee;\n}\n:host .button-group {\n  text-align: center;\n}\n:host .file-row {\n  border: 1px solid transparent;\n}\n:host .file-row:hover {\n  border: 1px solid #d3d3d3;\n}\n:host .file-row:hover.selected {\n  background: #d3d3d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1maWxlLWJyb3dzZXIvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWwtZmlsZS1icm93c2VyXFxtb2RhbC1maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZmlsZS1icm93c2VyL21vZGFsLWZpbGUtYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNELGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pEO0FETUU7RUFDRCxtQkFBQTtBQ0pEO0FET0U7RUFDRCxrQkFBQTtBQ0xEO0FEUUU7RUFDRCw2QkFBQTtBQ05EO0FET0M7RUFDRSx5QkFBQTtBQ0xIO0FETUc7RUFDRCxtQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1maWxlLWJyb3dzZXIvbW9kYWwtZmlsZS1icm93c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLy8gVE9ETzogRml4IGFubm95aW5nIG1hcmdpbiBmbGFzaFxyXG46aG9zdCB7XHJcbiAgLy8gbWluLWhlaWdodDogMjBlbTtcclxuICAuZmlsZXNsaXN0aW5nIHtcclxuXHRtaW4taGVpZ2h0OiAxNWVtO1xyXG5cdG1heC1oZWlnaHQ6IDE1ZW07XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuc2VsZWN0ZWQge1xyXG5cdGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWdyb3VwIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmlsZS1yb3cge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdCY6aG92ZXIge1xyXG5cdCAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0R3JleTtcclxuXHQgICYuc2VsZWN0ZWQge1xyXG5cdFx0YmFja2dyb3VuZDogI2QzZDNkMztcclxuXHQgIH1cclxuXHR9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI6aG9zdCAuZmlsZXNsaXN0aW5nIHtcbiAgbWluLWhlaWdodDogMTVlbTtcbiAgbWF4LWhlaWdodDogMTVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuOmhvc3QgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuZmlsZS1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5maWxlLXJvdzpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG59XG46aG9zdCAuZmlsZS1yb3c6aG92ZXIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/modal-file-browser/modal-file-browser.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/modal-file-browser/modal-file-browser.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ModalFileBrowserComponent */

  /***/
  function srcAppComponentsModalFileBrowserModalFileBrowserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalFileBrowserComponent", function () {
      return ModalFileBrowserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/agave-systems.service */
    "./src/app/services/agave-systems.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/tapis-files.service */
    "./src/app/services/tapis-files.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ModalFileBrowserComponent =
    /*#__PURE__*/
    function () {
      function ModalFileBrowserComponent(tapisFilesService, // private modalRef: BsModalRef,
      dialogRef, dialog, authService, agaveSystemsService) {
        _classCallCheck(this, ModalFileBrowserComponent);

        this.tapisFilesService = tapisFilesService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authService = authService;
        this.agaveSystemsService = agaveSystemsService;
        this.selectedFiles = new Map();
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(ModalFileBrowserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          // This finds all the projects, and file systems found from a user 
          this.agaveSystemsService.list(); // TODO: change those hard coded systemIds to environment vars or some sort of config
          // wait on the currentUser and systems to resolve

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.authService.currentUser, this.agaveSystemsService.systems, this.agaveSystemsService.projects]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                user = _ref2[0],
                systems = _ref2[1],
                projects = _ref2[2];

            // Uses systems to find the different directories that has the files in
            _this18.myDataSystem = systems.find(function (sys) {
              return sys.id === 'designsafe.storage.default';
            });
            _this18.communityDataSystem = systems.find(function (sys) {
              return sys.id === 'designsafe.storage.community';
            });
            _this18.publishedDataSystem = systems.find(function (sys) {
              return sys.id === 'designsafe.storage.published';
            }); // This is where they choose which one they start with

            _this18.selectedSystem = _this18.myDataSystem;
            _this18.projects = projects;
            _this18.currentUser = user;
            var init = {
              system: _this18.myDataSystem.id,
              type: 'dir',
              path: _this18.currentUser.username
            };

            _this18.browse(init);
          });
        }
      }, {
        key: "selectSystem",
        value: function selectSystem(system) {
          var pth;
          system.id === this.myDataSystem.id ? pth = this.currentUser.username : pth = '/';
          var init = {
            system: system.id,
            type: 'dir',
            path: pth
          };
          this.browse(init);
        }
      }, {
        key: "browse",
        value: function browse(file) {
          var _this19 = this;

          if (file.type !== 'dir') {
            return;
          }

          this.inProgress = true;
          this.selectedFiles.clear();
          this.tapisFilesService.listFiles(file.system, file.path);
          this.tapisFilesService.listing.subscribe(function (listing) {
            _this19.inProgress = false;
            _this19.filesList = listing;
          });
        } // TODO: Ian: Error message on incorrect file type?

      }, {
        key: "select",
        value: function select(file) {
          if (this.tapisFilesService.checkIfSelectable(file)) {
            this.addSelectedFile(file);
          } // here?
          // else {
          //   Signal Error!
          // }

        }
      }, {
        key: "addSelectedFile",
        value: function addSelectedFile(file) {
          if (this.selectedFiles.has(file.path)) {
            this.selectedFiles.delete(file.path);
          } else {
            this.selectedFiles.set(file.path, file);
          }
        }
      }, {
        key: "chooseFiles",
        value: function chooseFiles() {
          var tmp = Array.from(this.selectedFiles.values()); // this.onClose.next(tmp);
          // this.modalRef.hide();

          this.dialogRef.close(tmp);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          // this.modalRef.hide();
          this.dialogRef.close();
        }
      }]);

      return ModalFileBrowserComponent;
    }();

    ModalFileBrowserComponent.ctorParameters = function () {
      return [{
        type: _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"]
      }];
    };

    ModalFileBrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-file-browser',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-file-browser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-file-browser.component.scss */
      "./src/app/components/modal-file-browser/modal-file-browser.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"]])], ModalFileBrowserComponent);
    /***/
  },

  /***/
  "./src/app/components/notfound/notfound.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/notfound/notfound.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotfoundNotfoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/notfound/notfound.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/notfound/notfound.component.ts ***!
    \***********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notfound.component.scss */
      "./src/app/components/notfound/notfound.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/select-group/select-group.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/side-bar/select-group/select-group.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSelectGroupSelectGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  overflow-y: scroll;\n}\n:host .select-group {\n  max-height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .group-subitem {\n  height: 100px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtZ3JvdXAvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZS1iYXJcXHNlbGVjdC1ncm91cFxcc2VsZWN0LWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NlbGVjdC1ncm91cC9zZWxlY3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRCxlQUFBO0FDRUQ7QURFRTtFQUNELGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQUQ7QURHRTtFQUNELHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDREQ7QURJRTtFQUNELGFBQUE7QUNGRDtBREtFO0VBQ0QsaUJBQUE7QUNIRDtBRE1FO0VBQ0QsYUFBQTtBQ0pEO0FET0U7RUFDRCxzQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNMRDtBRFFFO0VBQ0QseUJBQUE7QUNORDtBRFNFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNQRDtBRFVFO0VBQ0QscUJBQUE7RUFDQSxZQUFBO0FDUkQ7QURXRTtFQUNELFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNURDtBRFlFO0VBQ0QsWUFBQTtBQ1ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtZ3JvdXAvc2VsZWN0LWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAuc2VsZWN0LWdyb3VwIHtcclxuXHRtYXgtaGVpZ2h0OiAyMCU7XHJcblx0Ly8gaGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuc3ViaXRlbS10aXRsZSB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnN1Yml0ZW0ge1xyXG5cdGJvcmRlci13aWR0aDogMHB4IDEwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjRjFGMUYxO1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmdyb3VwLXN1Yml0ZW0ge1xyXG5cdGhlaWdodDogMTAwcHhcclxuICB9XHJcblxyXG4gIC5zdWJpdGVtLXNjcm9sbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYm94ZWQgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJveGVkIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLmJveGVkIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XHJcbiAgfVxyXG5cclxuICAuZ3JvdXAtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5uYW1lLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1ncm91cCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5idXR0b24tZ3JvdXAgZGl2IHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5zdWJpdGVtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLnN1Yml0ZW0ge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuICBib3JkZXItY29sb3I6ICNGMUYxRjE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmdyb3VwLXN1Yml0ZW0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmJveGVkIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbn1cbjpob3N0IC5ncm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCBkaXYge1xuICBwYWRkaW5nOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/select-group/select-group.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/side-bar/select-group/select-group.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectGroupComponent */

  /***/
  function srcAppComponentsSideBarSelectGroupSelectGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectGroupComponent", function () {
      return SelectGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var SelectGroupComponent =
    /*#__PURE__*/
    function () {
      function SelectGroupComponent(formsService, groupsService, geoDataService, projectsService, dialog) {
        _classCallCheck(this, SelectGroupComponent);

        this.formsService = formsService;
        this.groupsService = groupsService;
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.dialog = dialog;
        this.featureList = [];
        this.showSubitem = true;
      }

      _createClass(SelectGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.geoDataService.features.subscribe(function (fc) {
            if (fc) {
              _this20.featureList = fc.features;
            }
          });
          this.projectsService.activeProject.subscribe(function (next) {
            _this20.selectedProject = next;
          });
          this.groups$ = this.groupsService.groups.subscribe(function (next) {
            _this20.groupList = next;
          });
          this.activeGroup$ = this.groupsService.activeGroup.subscribe(function (next) {
            _this20.activeGroup = next;
          });
        }
      }, {
        key: "selectGroupForm",
        value: function selectGroupForm(group) {
          var _this21 = this;

          this.groupsService.setActiveGroup(group);
          var activeGroup = this.groupList.filter(function (what) {
            return what.name == _this21.activeGroup;
          });

          if (activeGroup[0].features.length == 0) {
            this.groupsService.setFeatureImagesExist(false);
          } else {
            this.groupsService.setFeatureImagesExist(true);
          }

          this.groupsService.setActiveFeatureNum(0);
          this.formsService.changeGroupForm(group);
        }
      }, {
        key: "openRenameOptionModal",
        value: function openRenameOptionModal(template) {
          this.dialog.open(template);
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup() {
          var _this22 = this;

          this.groupsService.addGroup(this.groupList.filter(function (what) {
            return what.name != _this22.activeGroup;
          }));
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.featureList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var feat = _step2.value;
              // this should be a shared group of
              // all the currently created objects of a particular feature
              var featProp = feat.properties;
              featProp.group = featProp.group.filter(function (e) {
                return e.name != _this22.activeGroup;
              });
              this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(feat.id), featProp);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (this.groupList.length <= 0) {
            this.showSidebar = false;
            this.groupsService.setShowSidebar(this.showSidebar);
          } else {
            this.groupsService.setActiveGroup(this.groupList[0].name); // let activeGroup = this.groupList.filter(what => what.name == this.activeGroup[0].name);
            // if (activeGroup[0].features.length == 0) {
            //	this.groupsService.setFeatureImagesExist(false);
            // } else {
            //	this.groupsService.setFeatureImagesExist(true);
            // }
          }
        }
      }, {
        key: "openRenameModal",
        value: function openRenameModal(template, name) {
          this.selectedGroup = name;
          this.dialog.open(template);
        }
      }, {
        key: "isChecked",
        value: function isChecked(name) {
          if (this.activeGroup == name) {
            return "checked";
          } else {
            return "";
          }
        }
      }, {
        key: "renameGroup",
        value: function renameGroup(name) {
          var _this23 = this;

          this.groupList.forEach(function (e) {
            if (e.name == _this23.selectedGroup) {
              e.name = name;
            }
          });
          this.groupsService.addGroup(this.groupList);
          this.groupsService.setActiveGroup(name); // let activeGroup = this.groupList.filter(what => what.name == this.activeGroup[0].name);
          // if (activeGroup[0].features.length == 0) {
          //   this.groupsService.setFeatureImagesExist(false);
          // } else {
          //   this.groupsService.setFeatureImagesExist(true);
          // }
        }
      }, {
        key: "expandPanel",
        value: function expandPanel() {
          this.showSubitem = !this.showSubitem;

          if (this.showSubitem) {} else {}
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.groups$.unsubscribe();
          this.activeGroup$.unsubscribe();
        }
      }]);

      return SelectGroupComponent;
    }();

    SelectGroupComponent.ctorParameters = function () {
      return [{
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"]
      }, {
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    SelectGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-group.component.scss */
      "./src/app/components/side-bar/select-group/select-group.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"], _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], SelectGroupComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/select-image/select-image.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/components/side-bar/select-image/select-image.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSelectImageSelectImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .asset-list {\n  max-height: 20%;\n}\n:host .asset-subitem {\n  height: 100px;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtaW1hZ2UvRDpcXERlc2lnblNhZmVcXHRhZ2dpdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZS1iYXJcXHNlbGVjdC1pbWFnZVxcc2VsZWN0LWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NlbGVjdC1pbWFnZS9zZWxlY3QtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FEO0FER0U7RUFDRCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0REO0FESUU7RUFDRCxpQkFBQTtBQ0ZEO0FES0U7RUFDRCxlQUFBO0FDSEQ7QURPRTtFQUNELGFBQUE7QUNMRDtBRFFFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNORDtBRFNFO0VBQ0QseUJBQUE7QUNQRDtBRFVFO0VBQ0QscUJBQUE7RUFDQSxZQUFBO0FDUkQ7QURXRTtFQUNELFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNURDtBRFlFO0VBQ0QsWUFBQTtFQUNBLGtCQUFBO0FDVkQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NlbGVjdC1pbWFnZS9zZWxlY3QtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnN1Yml0ZW0tdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6ICM1NTU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5zdWJpdGVtIHtcclxuXHRib3JkZXItd2lkdGg6IDBweCAxMHB4O1xyXG5cdGJvcmRlci1jb2xvcjogI0YxRjFGMTtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zdWJpdGVtLXNjcm9sbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYXNzZXQtbGlzdCB7XHJcblx0bWF4LWhlaWdodDogMjAlO1xyXG5cdC8vIGhlaWdodDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmFzc2V0LXN1Yml0ZW0ge1xyXG5cdGhlaWdodDogMTAwcHhcclxuICB9XHJcblxyXG4gIC5hc3NldC1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcclxuICB9XHJcblxyXG4gIC5uYW1lLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1ncm91cCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5idXR0b24tZ3JvdXAgZGl2IHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuc3ViaXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5zdWJpdGVtIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjRjFGMUYxO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5zdWJpdGVtLXNjcm9sbCB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuOmhvc3QgLmFzc2V0LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuYXNzZXQtc3ViaXRlbSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG46aG9zdCAuYXNzZXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCBkaXYge1xuICBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/select-image/select-image.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/side-bar/select-image/select-image.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectImageComponent */

  /***/
  function srcAppComponentsSideBarSelectImageSelectImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectImageComponent", function () {
      return SelectImageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/geo-data.service */
    "./src/app/services/geo-data.service.ts");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/groups.service */
    "./src/app/services/groups.service.ts");

    var SelectImageComponent =
    /*#__PURE__*/
    function () {
      function SelectImageComponent(formsService, groupsService, geoDataService, projectsService) {
        _classCallCheck(this, SelectImageComponent);

        this.formsService = formsService;
        this.groupsService = groupsService;
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.featureList = [];
        this.groupList = [];
        this.showSubitem = true;
      }

      _createClass(SelectImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.geoDataService.features.subscribe(function (fc) {
            if (fc) {
              _this24.featureList = fc.features;
            }
          });
          this.projectsService.activeProject.subscribe(function (next) {
            _this24.selectedProject = next;
          });
          this.groups$ = this.groupsService.groups.subscribe(function (next) {
            _this24.groupList = next;
          });
          this.activeFeatureNum$ = this.groupsService.activeFeatureNum.subscribe(function (next) {
            _this24.activeFeatureNum = next;
          });
          this.activeGroup$ = this.groupsService.activeGroup.subscribe(function (next) {
            _this24.activeGroup = next;
          });
        }
      }, {
        key: "getActiveFeatures",
        value: function getActiveFeatures() {
          var _this25 = this;

          var activeGroupObj = this.groupList.filter(function (realGroup) {
            return realGroup.name === _this25.activeGroup;
          });
          return activeGroupObj[0].features;
        }
      }, {
        key: "jumpToImage",
        value: function jumpToImage(asset) {
          var _this26 = this;

          var index = 0;
          this.groupList.forEach(function (e) {
            if (e.name == _this26.activeGroup) {
              index = e.features.indexOf(asset);
            }
          });
          this.groupsService.setActiveFeatureNum(index);
        }
      }, {
        key: "isActiveFeature",
        value: function isActiveFeature(asset) {
          var _this27 = this;

          var index = 0;
          this.groupList.forEach(function (e) {
            if (e.name == _this27.activeGroup) {
              index = e.features.indexOf(asset);
            }
          });
          return this.activeFeatureNum == index;
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup() {
          var _this28 = this;

          this.groupsService.addGroup(this.groupList.filter(function (what) {
            return what.name != _this28.activeGroup;
          }));
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.featureList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var feat = _step3.value;
              // this should be a shared group of
              // all the currently created objects of a particular feature
              var featProp = feat.properties;
              featProp.group = featProp.group.filter(function (e) {
                return e.name != _this28.activeGroup;
              });
              this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(feat.id), featProp);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (this.groupList.length <= 0) {
            this.showSidebar = false;
            this.groupsService.setShowSidebar(this.showSidebar);
          } else {
            this.groupsService.setActiveGroup(this.groupList[0].name);
          }
        }
      }, {
        key: "deleteAsset",
        value: function deleteAsset(assetId) {
          var _this29 = this;

          this.groupList.forEach(function (group) {
            if (group.name === _this29.activeGroup) {
              if (group.features.length == 1) {
                _this29.deleteGroup();
              } else {
                group.features = group.features.filter(function (asset) {
                  return asset.id != assetId;
                });

                _this29.groupsService.addGroup(_this29.groupList);
              }
            }
          });
          var featProp = this.getActiveFeatures().properties;
          featProp.group = featProp.group.filter(function (e) {
            return e.name != _this29.activeGroup;
          });
          this.geoDataService.updateFeatureProperty(this.selectedProject.id, Number(this.getActiveFeatures().id), featProp);
        }
      }, {
        key: "getAssetDisplay",
        value: function getAssetDisplay(asset) {
          if (asset.assets[0].display_path) {
            return /[^/]*$/.exec(asset.assets[0].display_path)[0];
          } else {
            var apath = /[^/]*$/.exec(asset.assets[0].path)[0];
            return apath.slice(0, 15) + "...";
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.groups$.unsubscribe();
          this.activeFeatureNum$.unsubscribe();
          this.activeGroup$.unsubscribe();
        }
      }, {
        key: "expandPanel",
        value: function expandPanel() {
          this.showSubitem = !this.showSubitem;

          if (this.showSubitem) {} else {}
        }
      }]);

      return SelectImageComponent;
    }();

    SelectImageComponent.ctorParameters = function () {
      return [{
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]
      }, {
        type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"]
      }, {
        type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }];
    };

    SelectImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-image.component.scss */
      "./src/app/components/side-bar/select-image/select-image.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"], _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])], SelectImageComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background-color: #F1F1F1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9EOlxcRGVzaWduU2FmZVxcdGFnZ2l0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xyXG4gIC8vIEZJWE1FIFRoaXMgaXNuJ3Qgd29ya2luZ1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppComponentsSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideBarComponent =
    /*#__PURE__*/
    function () {
      function SideBarComponent() {
        _classCallCheck(this, SideBarComponent);
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideBarComponent;
    }();

    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.scss */
      "./src/app/components/side-bar/side-bar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-generator/tag-generator.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarTagGeneratorTagGeneratorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  font-size: 0.8em;\n  height: calc(100vh - 50px);\n}\n:host .lat-lon-label {\n  font-size: 0.8em;\n  color: #4d4d4d;\n}\n:host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .switch {\n  margin: 0;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .no-show-option {\n  display: none;\n}\n:host .show-option {\n  display: block;\n}\n:host .create-prompt {\n  max-height: 500px;\n  height: 500px;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .input-label-group {\n  padding: 10px;\n  display: block;\n}\n:host .input-group {\n  display: inline-block;\n}\n:host .form-name {\n  text-align: center;\n}\n:host .input-group-button {\n  display: inline-block;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n  padding: 20px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .form-option-container {\n  padding: 0px;\n}\n:host .list-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #F0F0F0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .form-item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .form-type-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 5px;\n  margin-bottom: 15px;\n}\n:host .form-type-form input[type=radio] {\n  display: none;\n}\n:host .form-type-form label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ddd;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .form-type-form input[type=radio]:checked + label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #000;\n}\n:host .changed {\n  color: #F07575;\n}\n:host .unchanged {\n  color: #555555;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctZ2VuZXJhdG9yL0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGUtYmFyXFx0YWctZ2VuZXJhdG9yXFx0YWctZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1nZW5lcmF0b3IvdGFnLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctZ2VuZXJhdG9yL0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDREY7QURHRTtFQUNELGdCQUFBO0VBQ0EsY0FBQTtBQ0REO0FESUU7RUFDRCx5QkVWYTtBRFFkO0FETUM7RUFDRSxtQkFBQTtBQ0pIO0FEUUU7RUFDRCxTQUFBO0FDTkQ7QURTRTtFQUNELFNBQUE7QUNQRDtBRFVFO0VBQ0QsYUFBQTtBQ1JEO0FEV0U7RUFDRCxjQUFBO0FDVEQ7QURZRTtFQUNELGlCQUFBO0VBQ0EsYUFBQTtBQ1ZEO0FEYUU7RUFDRCxlQUFBO0VBQ0EsV0FBQTtBQ1hEO0FEY0U7RUFDRCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1pEO0FEZUU7RUFDRCxhQUFBO0VBQ0EsY0FBQTtBQ2JEO0FEZ0JFO0VBQ0QscUJBQUE7QUNkRDtBRGlCRTtFQUNELGtCQUFBO0FDZkQ7QURrQkU7RUFDRCxxQkFBQTtBQ2hCRDtBRG1CRTtFQUNELHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2pCRDtBRG9CRTtFQUNELGlCQUFBO0FDbEJEO0FEcUJFO0VBQ0QsZUFBQTtFQUNBLFdBQUE7QUNuQkQ7QURzQkU7RUFDRCxhQUFBO0FDcEJEO0FEdUJFO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDckJEO0FEd0JFO0VBQ0QseUJBQUE7QUN0QkQ7QUR5QkU7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ3ZCRDtBRDBCRTtFQUNELFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUN4QkQ7QUQyQkU7RUFDRCxZQUFBO0FDekJEO0FENEJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUMxQkQ7QUQ2QkU7RUFDRCx5QkFBQTtBQzNCRDtBRDhCRTtFQUNELFlBQUE7QUM1QkQ7QUQrQkU7RUFDRCxxQkFBQTtFQUNBLFlBQUE7QUM3QkQ7QURnQ0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQzlCRDtBRGlDRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUMvQkQ7QURrQ0U7RUFDRCxhQUFBO0FDaENEO0FEbUNFO0VBQ0QsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ2pDRDtBRG9DRTtFQUNELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xDRDtBRHFDRTtFQUNELGNBQUE7QUNuQ0Q7QURzQ0U7RUFDRCxjQUFBO0FDcENEO0FEdUNFO0VBQ0QsZUFBQTtFQUNBLFdBQUE7QUNyQ0Q7QUR3Q0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtBQ3RDRDtBRHlDRTtFQUNELHlCQUFBO0FDdkNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctZ2VuZXJhdG9yL3RhZy1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcclxuXHJcbiAgLmxhdC1sb24tbGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0Y29sb3I6ICM0ZDRkNGQ7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlLXByb2plY3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRncmVlbkFjdGl2ZTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuXHRidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcclxuXHQgIHBhZGRpbmc6IDAuODVlbSAxZW07XHJcblx0fVxyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcblx0bWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi50aW55IHtcclxuXHRtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubm8tc2hvdy1vcHRpb24ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2hvdy1vcHRpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmNyZWF0ZS1wcm9tcHQge1xyXG5cdG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5cdGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0LWdyb3VwIHtcclxuXHRtYXgtaGVpZ2h0OiAyMCU7XHJcblx0aGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuc3ViaXRlbS10aXRsZSB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWxhYmVsLWdyb3VwIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1uYW1lIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAtYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc3ViaXRlbSB7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHggMTBweDtcclxuXHRib3JkZXItY29sb3I6ICNGMUYxRjE7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5zdWJpdGVtLXNjcm9sbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgfVxyXG5cclxuICAucHJlc2V0LWRlc2NyaXB0aW9ucyB7XHJcblx0bWF4LWhlaWdodDogMjAlO1xyXG5cdGhlaWdodDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmJveGVkIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ib3hlZCBsYWJlbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gIC5ib3hlZCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xyXG4gIH1cclxuXHJcbiAgLmdyb3VwLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdG1hcmdpbjogMDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWdyb3VwIHtcclxuXHRtYXJnaW46IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tb3B0aW9uLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRtYXJnaW46IDA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qtc3Vib3B0aW9ucyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICB9XHJcblxyXG4gIC5idXR0b24tZ3JvdXAgZGl2IHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG5cclxuICAubmFtZS1ncm91cCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWl0ZW0tY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5mb3JtLXR5cGUtZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRtYXJnaW46IDVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tdHlwZS1mb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLXR5cGUtZm9ybSBsYWJlbCB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRib3JkZXItY29sb3I6ICNkZGQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG5cclxuICAuZm9ybS10eXBlLWZvcm0gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlZCB7XHJcblx0Y29sb3I6ICNGMDc1NzU7XHJcbiAgfVxyXG5cclxuICAudW5jaGFuZ2VkIHtcclxuXHRjb2xvcjogIzU1NTU1NTtcclxuICB9XHJcblxyXG4gIC5hc3NldC1saXN0IHtcclxuXHRtYXgtaGVpZ2h0OiAyMCU7XHJcblx0aGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuYXNzZXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xufVxuOmhvc3QgLmxhdC1sb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cbjpob3N0IC5hY3RpdmUtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWZmOGM7XG59XG46aG9zdCAubWVudSBidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcbiAgcGFkZGluZzogMC44NWVtIDFlbTtcbn1cbjpob3N0IC5zd2l0Y2gge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuYnV0dG9uLnRpbnkge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAubm8tc2hvdy1vcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnNob3ctb3B0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY3JlYXRlLXByb21wdCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuc3ViaXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5pbnB1dC1sYWJlbC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmZvcm0tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5pbnB1dC1ncm91cC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCAuc3ViaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogI0YxRjFGMTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCAuc3ViaXRlbS1zY3JvbGwge1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuYm94ZWQgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xufVxuOmhvc3QgLmdyb3VwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5mb3JtLW9wdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG46aG9zdCAubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmxpc3Qtc3Vib3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIGRpdiB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmZvcm0tdHlwZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbjpob3N0IC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuZm9ybS10eXBlLWZvcm0gbGFiZWwge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbjpob3N0IC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuOmhvc3QgLmNoYW5nZWQge1xuICBjb2xvcjogI0YwNzU3NTtcbn1cbjpob3N0IC51bmNoYW5nZWQge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbjpob3N0IC5hc3NldC1saXN0IHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5hc3NldC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xufSIsIiRsaWdodEJsdWU6ICMwZjgzYmQ7XHJcbiRsaWdodEdyZXk6ICNkM2QzZDM7XHJcbiRiYWNrZ3JvdW5kSGlnaGxpZ2h0OiAjYjNlNWZmO1xyXG4kZ3JlZW5BY3RpdmU6ICMxYWZmOGM7XHJcbiRBcHBNZWRpdW1CbHVlOiAjMjJjN2ZmO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-generator/tag-generator.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TagGeneratorComponent */

  /***/
  function srcAppComponentsSideBarTagGeneratorTagGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagGeneratorComponent", function () {
      return TagGeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TagGeneratorComponent =
    /*#__PURE__*/
    function () {
      function TagGeneratorComponent(formsService, groupsService, dialog, router) {
        _classCallCheck(this, TagGeneratorComponent);

        this.formsService = formsService;
        this.groupsService = groupsService;
        this.dialog = dialog;
        this.router = router;
        this.formOptions = [];
        this.changed = false;
        this.formItemList = [];
        this.openOption = {};
        this.enabledControls = [];
        this.showSubitem = true;
      }

      _createClass(TagGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.groupsService.activeGroup.subscribe(function (next) {
            _this30.activeGroup = next;
          });
          this.formsService.activeFormList.subscribe(function (next) {
            _this30.activeFormList = next;
          });
          this.formOptions = [];
          this.formItemList = [];
          this.formType = 'text';
          this.formName = '';
          this.formLabel = '';
          this.formValue = '';
          this.formRequired = false;
          this.enabledControls = ["Text", "Checkbox", "Radio", "Dropdown"];
        }
      }, {
        key: "inputFormLabel",
        value: function inputFormLabel(event) {
          // this.formLabel = event.target.value.toLowerCase();
          this.formLabel = event.target.value;
        }
      }, {
        key: "addOptionItem",
        value: function addOptionItem(value) {
          if (value) {
            var formWithValue = this.formOptions.filter(function (e) {
              return e.label == value;
            });

            if (formWithValue.length == 0 && value.length != 0) {
              this.formOptions.push({
                key: value[0],
                label: value
              });
            }
          }
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(opt) {
          this.formOptions = this.formOptions.filter(function (option) {
            return option.label != opt.label;
          });
        }
      }, {
        key: "openRenameModal",
        value: function openRenameModal(template, name) {
          this.selectedGroup = name;
          this.dialog.open(template);
        }
      }, {
        key: "openRenameOptionModal",
        value: function openRenameOptionModal(template) {
          this.dialog.open(template);
        }
      }, {
        key: "renameOption",
        value: function renameOption(opt, label) {
          if (this.showOpt == "show-option") {
            this.showOpt = "no-show-option";
          } else {
            this.showOpt = "show-option";
          }

          label = label.toLowerCase();
          this.formOptions.forEach(function (e) {
            if (e.label == opt.label) {
              e.label = label;
            }
          });
        }
      }, {
        key: "selectInputForm",
        value: function selectInputForm(name) {
          this.formType = name;
          this.formLabel = '';
          this.formOptions = [];
        }
      }, {
        key: "clearOption",
        value: function clearOption() {
          this.optionFilter = '';
        }
      }, {
        key: "clearLabel",
        value: function clearLabel() {
          this.labelFilter = '';
        }
      }, {
        key: "addFormItem",
        value: function addFormItem() {
          var _this31 = this;

          var formValueFilter = this.activeFormList.filter(function (e) {
            return e.label == _this31.formLabel;
          });

          if (formValueFilter.length == 0 && this.formLabel.length != 0) {
            var formItem = {
              type: this.formType,
              name: this.formName,
              label: this.formLabel,
              value: this.formValue,
              required: this.formRequired,
              options: []
            };
            this.openOption[this.formLabel] = false;

            if (this.formType !== "text" && this.formOptions.length != 0) {
              var myOpts = [];
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.formOptions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var opt = _step4.value;
                  myOpts.push({
                    key: opt[0],
                    label: opt
                  });
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              formItem.options = this.formOptions;
            }

            this.formItemList.push(formItem);
            this.formsService.addForm(this.activeGroup, formItem);
            this.formLabel = '';
            this.formOptions = [];
            this.labelFilter = '';
            this.changed = true;
            this.groupsService.setActivePane("tagger");
            this.router.navigateByUrl('/tagger', {
              skipLocationChange: true
            });
          }
        }
      }, {
        key: "cancelCreate",
        value: function cancelCreate() {
          this.groupsService.setActivePane("tagger");
          this.router.navigateByUrl('/tagger', {
            skipLocationChange: true
          });
        }
      }, {
        key: "expandPanel",
        value: function expandPanel() {
          this.showSubitem = !this.showSubitem;

          if (this.showSubitem) {} else {}
        }
      }]);

      return TagGeneratorComponent;
    }();

    TagGeneratorComponent.ctorParameters = function () {
      return [{
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]
      }, {
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    TagGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tag-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tag-generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tag-generator.component.scss */
      "./src/app/components/side-bar/tag-generator/tag-generator.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"], _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], TagGeneratorComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarTagImagesFormGeneratorFormGeneratorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  text-align: left;\n}\n:host .mat-form-field {\n  width: 100%;\n  text-align: left;\n}\n:host .input-group {\n  padding: 5px;\n}\n:host label {\n  padding: 5px;\n}\n:host input {\n  padding: 5px;\n  vertical-align: middle;\n}\n:host .radio-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .form-controls {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL2Zvcm0tZ2VuZXJhdG9yL0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGUtYmFyXFx0YWctaW1hZ2VzXFxmb3JtLWdlbmVyYXRvclxcZm9ybS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy9mb3JtLWdlbmVyYXRvci9mb3JtLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNELFdBQUE7RUFDQSxnQkFBQTtBQ0VEO0FEQ0U7RUFDRCxZQUFBO0FDQ0Q7QURFRTtFQUNELFlBQUE7QUNBRDtBREdFO0VBQ0QsWUFBQTtFQUNBLHNCQUFBO0FDREQ7QURJRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZEO0FES0U7RUFDRCxhQUFBO0FDSEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvZm9ybS1nZW5lcmF0b3IvZm9ybS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAge1xyXG5cdHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAucmFkaW8tZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2xzIHtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiOmhvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAuaW5wdXQtZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG59XG46aG9zdCBsYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5mb3JtLWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: FormGeneratorComponent */

  /***/
  function srcAppComponentsSideBarTagImagesFormGeneratorFormGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGeneratorComponent", function () {
      return FormGeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FormGeneratorComponent =
    /*#__PURE__*/
    function () {
      function FormGeneratorComponent(formsService) {
        _classCallCheck(this, FormGeneratorComponent);

        this.formsService = formsService; // export class FormGeneratorComponent implements OnInit, OnChanges {

        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
      }

      _createClass(FormGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.formGroup$ = this.formsService.formGroup.subscribe(function (next) {
            _this32.form = next;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formGroup$.unsubscribe();
        }
      }, {
        key: "isValid",
        get: function get() {
          return this.form.controls[this.field.label].valid;
        }
      }]);

      return FormGeneratorComponent;
    }();

    FormGeneratorComponent.ctorParameters = function () {
      return [{
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormGeneratorComponent.prototype, "field", void 0);
    FormGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-generator.component.scss */
      "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]])], FormGeneratorComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-images/tag-images.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-images/tag-images.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarTagImagesTagImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  font-size: 0.8em;\n  display: block;\n}\n:host .subitem-title {\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  padding: 10px;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .main-form-container {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .tag-forms {\n  height: 500px;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .form-item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .button-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  padding: 3px;\n  font-size: 17px;\n  font-weight: bold;\n}\n:host .list-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #F0F0F0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL0Q6XFxEZXNpZ25TYWZlXFx0YWdnaXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGUtYmFyXFx0YWctaW1hZ2VzXFx0YWctaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvdGFnLWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUU7RUFDRCxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0ZEO0FES0U7RUFDRCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRDtBRE1FO0VBQ0QsYUFBQTtBQ0pEO0FET0U7RUFDRCxhQUFBO0FDTEQ7QURRRTtFQUNELGlCQUFBO0FDTkQ7QURTRTtFQUNELHlCQUFBO0FDUEQ7QURVRTtFQUNELGFBQUE7QUNSRDtBRFdFO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDVEQ7QURZRTtFQUNELHlCQUFBO0FDVkQ7QURhRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDWEQ7QURjRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDWkQ7QURlRTtFQUdELGFBQUE7QUNmRDtBRGtCRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDaEJEO0FEbUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNqQkQ7QURvQkU7RUFDRCxlQUFBO0VBQ0EsV0FBQTtBQ2xCRDtBRHFCRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDbkJEO0FEc0JFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtBQ3BCRDtBRHVCRTtFQUNELFlBQUE7QUNyQkQ7QUR3QkU7RUFDRCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdEJEO0FEeUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUN2QkQ7QUQwQkU7RUFDRCx5QkFBQTtBQ3hCRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy90YWctaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcblxyXG4gIC5zdWJpdGVtLXRpdGxlIHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XHJcbiAgfVxyXG5cclxuICAuc3ViaXRlbSB7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHggMTBweDtcclxuXHRib3JkZXItY29sb3I6ICNGMUYxRjE7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWluLWZvcm0tY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yml0ZW0tc2Nyb2xsIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yml0ZW0tc2Nyb2xsIHtcclxuXHRib3JkZXItd2lkdGg6IDVweDtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XHJcbiAgfVxyXG5cclxuICAuYm94ZWQgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJveGVkIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLmJveGVkIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XHJcbiAgfVxyXG5cclxuICAuZ3JvdXAtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtZ3JvdXAge1xyXG5cdG1heC1oZWlnaHQ6IDIwJTtcclxuXHRoZWlnaHQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC50YWctZm9ybXMge1xyXG5cdC8vIG1heC1oZWlnaHQ6IDUwJTtcclxuXHQvLyBoZWlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5hc3NldC1saXN0IHtcclxuXHRtYXgtaGVpZ2h0OiAyMCU7XHJcblx0aGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuYXNzZXQtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcclxuXHRtYXgtaGVpZ2h0OiAyMCU7XHJcblx0aGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdG1hcmdpbjogMDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1ncm91cCBkaXYge1xyXG5cdHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC5uYW1lLWdyb3VwIHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRtYXJnaW46IDA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qtc3Vib3B0aW9ucyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5zdWJpdGVtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xufVxuOmhvc3QgLnN1Yml0ZW0ge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuICBib3JkZXItY29sb3I6ICNGMUYxRjE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLm1haW4tZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IC5zdWJpdGVtLXNjcm9sbCB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuOmhvc3QgLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmJveGVkIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbn1cbjpob3N0IC5ncm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5zZWxlY3QtZ3JvdXAge1xuICBtYXgtaGVpZ2h0OiAyMCU7XG4gIGhlaWdodDogMjAlO1xufVxuOmhvc3QgLnRhZy1mb3JtcyB7XG4gIGhlaWdodDogNTAwcHg7XG59XG46aG9zdCAuYXNzZXQtbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuYXNzZXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAucHJlc2V0LWRlc2NyaXB0aW9ucyB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAgZGl2IHtcbiAgcGFkZGluZzogM3B4O1xufVxuOmhvc3QgLm5hbWUtZ3JvdXAge1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCAubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmxpc3Qtc3Vib3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/tag-images/tag-images.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/side-bar/tag-images/tag-images.component.ts ***!
    \************************************************************************/

  /*! exports provided: TagImagesComponent */

  /***/
  function srcAppComponentsSideBarTagImagesTagImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagImagesComponent", function () {
      return TagImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/forms.service */
    "./src/app/services/forms.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TagImagesComponent =
    /*#__PURE__*/
    function () {
      function TagImagesComponent(groupsService, formsService, dialog, router) {
        _classCallCheck(this, TagImagesComponent);

        this.groupsService = groupsService;
        this.formsService = formsService;
        this.dialog = dialog;
        this.router = router;
        this.openOption = {};
        this.showSubitem = true;
      }

      _createClass(TagImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.activeGroup$ = this.activeGroup$ = this.groupsService.activeGroup.subscribe(function (next) {
            _this33.activeGroup = next;
          });
          this.activeFeatureId$ = this.groupsService.activeFeatureId.subscribe(function (next) {
            _this33.activeFeatureId = next;
          });
          this.formGroup$ = this.formsService.formGroup.subscribe(function (next) {
            _this33.form = next;
          });
        }
      }, {
        key: "openRenameModal",
        value: function openRenameModal(template, name) {
          this.selectedGroup = name;
          this.dialog.open(template);
        }
      }, {
        key: "openRenameOptionModal",
        value: function openRenameOptionModal(template) {
          this.dialog.open(template);
        }
      }, {
        key: "openOptionToggle",
        value: function openOptionToggle(label) {
          if (this.openOption[label]) {
            this.openOption[label] = false;
          } else {
            this.openOption[label] = true;
          }
        }
      }, {
        key: "createNewTag",
        value: function createNewTag() {
          this.groupsService.setActivePane("preset");
          this.router.navigateByUrl('/preset', {
            skipLocationChange: true
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.payload = this.form.getRawValue();
          console.log(this.payload);
          this.groupsService.setTagFeatureGroup(this.activeGroup, this.activeFeatureId, this.payload);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formGroup$.unsubscribe();
          this.activeFeatureId$.unsubscribe();
          this.activeGroup$.unsubscribe();
        }
      }, {
        key: "expandPanel",
        value: function expandPanel() {
          this.showSubitem = !this.showSubitem;

          if (this.showSubitem) {} else {}
        }
      }]);

      return TagImagesComponent;
    }();

    TagImagesComponent.ctorParameters = function () {
      return [{
        type: _services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]
      }, {
        type: _services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    TagImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tag-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tag-images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tag-images.component.scss */
      "./src/app/components/side-bar/tag-images/tag-images.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"], _services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], TagImagesComponent);
    /***/
  },

  /***/
  "./src/app/models/models.ts":
  /*!**********************************!*\
    !*** ./src/app/models/models.ts ***!
    \**********************************/

  /*! exports provided: Group, AssetFilters, Project, AuthToken, FeatureAsset, FeatureCollection, Feature */

  /***/
  function srcAppModelsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Group", function () {
      return Group;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetFilters", function () {
      return AssetFilters;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthToken", function () {
      return AuthToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureAsset", function () {
      return FeatureAsset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureCollection", function () {
      return FeatureCollection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feature", function () {
      return Feature;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Group = function Group() {
      _classCallCheck(this, Group);
    };

    var AssetFilters =
    /*#__PURE__*/
    function () {
      function AssetFilters() {
        _classCallCheck(this, AssetFilters);

        // bbox has the following format: [sw_lng, sw_lat, ne_lng, ne_lat], the same as leaflet
        this.bbox = [];
        this.assetType = new Set();
      }

      _createClass(AssetFilters, [{
        key: "updateAssetTypes",
        value: function updateAssetTypes(assetType) {
          this.assetType.has(assetType) ? this.assetType.delete(assetType) : this.assetType.add(assetType);
        }
      }, {
        key: "updateBBox",
        value: function updateBBox(bbox) {
          this.bbox = bbox;
        }
      }, {
        key: "toJson",
        value: function toJson() {
          return {
            assetType: _toConsumableArray(this.assetType),
            bbox: this.bbox
          };
        }
      }]);

      return AssetFilters;
    }();

    var Project = function Project() {
      _classCallCheck(this, Project);
    };

    var AuthToken =
    /*#__PURE__*/
    function () {
      /**
       *
       * @param token : String
       * @param expires: Date
       */
      function AuthToken(token, expires) {
        _classCallCheck(this, AuthToken);

        this.token = token;
        this.expires = new Date(expires);
      }

      _createClass(AuthToken, [{
        key: "isExpired",

        /**
         * Checks if the token is expired or not
         */
        value: function isExpired() {
          return new Date().getTime() > this.expires.getTime();
        }
      }], [{
        key: "fromExpiresIn",
        value: function fromExpiresIn(token, expires_in) {
          var expires = new Date(new Date().getTime() + expires_in * 1000);
          return new AuthToken(token, expires);
        }
      }]);

      return AuthToken;
    }();

    var FeatureAsset =
    /*#__PURE__*/
    function () {
      function FeatureAsset() {
        _classCallCheck(this, FeatureAsset);
      }

      _createClass(FeatureAsset, [{
        key: "assetPath",
        // TODO: Implenent this
        get: function get() {
          return '';
        }
      }]);

      return FeatureAsset;
    }();

    var FeatureCollection = function FeatureCollection() {
      _classCallCheck(this, FeatureCollection);
    };

    var Feature =
    /*#__PURE__*/
    function () {
      function Feature(f) {
        _classCallCheck(this, Feature);

        this.geometry = f.geometry;
        this.properties = f.properties;
        this.id = f.id;
        this.type = f.type;
        this.assets = f.assets;
        this.styles = f.styles;
        this.project_id = f.project_id;
      }

      _createClass(Feature, [{
        key: "featureType",
        value: function featureType() {
          if (this.assets && this.assets.length === 1) {
            return this.assets[0].asset_type;
          }

          if (this.assets && this.assets.length > 1) {
            return 'collection';
          }

          if (!this.assets.length) {
            return this.geometry.type;
          }
        }
      }]);

      return Feature;
    }();
    /***/

  },

  /***/
  "./src/app/services/agave-systems.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/agave-systems.service.ts ***!
    \***************************************************/

  /*! exports provided: AgaveSystemsService */

  /***/
  function srcAppServicesAgaveSystemsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgaveSystemsService", function () {
      return AgaveSystemsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_tapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-tapis */
    "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AgaveSystemsService =
    /*#__PURE__*/
    function () {
      function AgaveSystemsService(tapis) {
        _classCallCheck(this, AgaveSystemsService);

        this.tapis = tapis;
        this.baseUrl = 'https://agave.designsafe-ci.org/systems/v2/';
        this._systems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.systems = this._systems.asObservable();
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.projects = this._projects.asObservable();
      } //list() runs when the file browser is opened, retrieves all files in TACC for given user


      _createClass(AgaveSystemsService, [{
        key: "list",
        value: function list() {
          var _this34 = this;

          this.tapis.systemsList({
            type: 'STORAGE'
          }).subscribe(function (resp) {
            _this34._systems.next(resp.result);

            _this34._projects.next(resp.result.filter(function (sys) {
              return sys.id.startsWith('project');
            }));
          }, function (error) {
            _this34._systems.next(null);

            _this34._projects.next(null);
          });
        }
      }]);

      return AgaveSystemsService;
    }();

    AgaveSystemsService.ctorParameters = function () {
      return [{
        type: ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AgaveSystemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], AgaveSystemsService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticatedUser, AuthService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticatedUser", function () {
      return AuthenticatedUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticatedUser = function AuthenticatedUser(username, email) {
      _classCallCheck(this, AuthenticatedUser);

      this.username = username;
      this.email = email;
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.currentUser = this._currentUser.asObservable();
        this.LS_TOKEN_KEY = 'hazmapperToken';
        this.LS_USER_KEY = 'hazmapperUser';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login() {
          // First, check if the user has a token in localStorage
          var tokenStr = localStorage.getItem(this.LS_TOKEN_KEY);

          if (!tokenStr) {
            this.redirectToauthenticaor();
          } else {
            var token = JSON.parse(tokenStr);
            this.userToken = new _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"](token.token, new Date(token.expires));

            if (!this.userToken || this.userToken.isExpired()) {
              this.logout();
              this.redirectToauthenticaor();
            }

            this.getUserInfo();
          }
        }
      }, {
        key: "redirectToauthenticaor",
        value: function redirectToauthenticaor() {
          var client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientId;
          var callback = location.origin + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseHref + 'callback';
          var state = Math.random().toString(36);
          var AUTH_URL = "https://agave.designsafe-ci.org/authorize?scope=openid&client_id=".concat(client_id, "&response_type=token&redirect_uri=").concat(callback, "&state=").concat(state);
          window.location.href = AUTH_URL;
        }
        /**
         * Checks to make sure that the user has a token and the token is not expired;
         */

      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.userToken && !this.userToken.isExpired();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userToken = null;
          localStorage.removeItem(this.LS_TOKEN_KEY);
          localStorage.removeItem(this.LS_USER_KEY);
        }
      }, {
        key: "setToken",
        value: function setToken(token, expires) {
          this.userToken = _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"].fromExpiresIn(token, expires);
          localStorage.setItem(this.LS_TOKEN_KEY, JSON.stringify(this.userToken)); // hit the wso2 api to retrieve the username etc

          this.router.navigate(['/']);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var _this35 = this;

          var INFO_URL = "https://agave.designsafe-ci.org/oauth2/userinfo?schema=openid";
          var userStr = localStorage.getItem(this.LS_USER_KEY);
          var user = JSON.parse(userStr);

          if (user !== null) {
            this._currentUser.next(new AuthenticatedUser(user.username, user.email));
          } else {
            this.http.get(INFO_URL).subscribe(function (resp) {
              var u = new AuthenticatedUser(resp.name, resp.email);
              localStorage.setItem(_this35.LS_USER_KEY, JSON.stringify(u));

              _this35._currentUser.next(u);
            });
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/forms.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/forms.service.ts ***!
    \*******************************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppServicesFormsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsService", function () {
      return FormsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./groups.service */
    "./src/app/services/groups.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FormsService =
    /*#__PURE__*/
    function () {
      // THIS TODO
      // private _forms: BehaviorSubject<Group> = new BehaviorSubject<Group>({type: 'Group', formList: [], groupName: []});
      // public forms: Observable<Group> = this._forms.asObservable();
      function FormsService(groupsService) {
        _classCallCheck(this, FormsService);

        this.groupsService = groupsService; // private _forms: BehaviorSubject<any[]> = new BehaviorSubject([]);
        // public forms: Observable<any[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group[]> = new BehaviorSubject([]);
        // public forms: Observable<Group[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group[]> = new BehaviorSubject([]);
        // public forms: Observable<Group[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group> = new BehaviorSubject([]);
        // private _forms: BehaviorSubject<Group> = new BehaviorSubject<Group>({Type});
        // this._features = new BehaviorSubject<FeatureCollection>({type: 'FeatureCollection', features: []});
        // this._features = new BehaviorSubject<FeatureCollection>({type: 'FeatureCollection', features: []});

        this._forms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.forms = this._forms.asObservable();
        this._activeFormList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.activeFormList = this._activeFormList.asObservable();
        this._formGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.formGroup = this._formGroup.asObservable();
      } // getProjects(): void {
      //  this.http.get<Project[]>(environment.apiUrl + `/projects/`).subscribe( resp => {
      //    this._projects.next(resp);
      //  });
      // }
      // addForm(formList: Array<any>): void {
      //	this._forms.formList.next(formList);
      // }
      // addForm(formObj: Group[]): void {
      // TODO This should be stored in projects api later on (or not)
      // addForm(groupName: string, formGroup: Group, formList: Array<any>): void {
      // addForm(formObj: Array<Group>): void {


      _createClass(FormsService, [{
        key: "addForm",
        value: function addForm(groupName, formItem) {
          var _this36 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.push(formItem);
              }

              return groupObj;
            });
          })).subscribe(function (current) {
            return _this36._forms.next(current);
          });
          this.changeGroupForm(groupName);
        }
      }, {
        key: "updateFormItem",
        value: function updateFormItem() {
          var group = {};

          if (this._activeFormList.value) {
            this._activeFormList.value.forEach(function (e) {
              return group[e.label] = e.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](e.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](e.value || '');
            });

            this._formGroup.next(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"](group));
          }
        }
      }, {
        key: "changeGroupForm",
        value: function changeGroupForm(groupName) {
          var _this37 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                return groupObj.formList;
              }
            });
          })).subscribe(function (current) {
            _this37._activeFormList.next(current.find(function (e) {
              return e != undefined;
            }));
          });
          this.updateFormItem();
        }
      }, {
        key: "addGroup",
        value: function addGroup(groupName) {
          var _this38 = this;

          var groupObject = new _models_models__WEBPACK_IMPORTED_MODULE_3__["Group"]();
          groupObject.formList = [];
          groupObject.groupName = groupName;
          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (current) {
            current.push(groupObject);

            _this38._forms.next(current);
          });
        }
      }, {
        key: "deleteForm",
        value: function deleteForm(groupName, form) {
          var _this39 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList = groupObj.formList.filter(function (formItem) {
                  return formItem.label != form.label;
                });
              }

              return groupObj;
            });
          })).subscribe(function (current) {
            return _this39._forms.next(current);
          });
          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                return groupObj.formList.filter(function (formItem) {
                  return formItem.label != form.label;
                });
              }
            });
          })).subscribe(function (current) {
            _this39._activeFormList.next(current.find(function (e) {
              return e != undefined;
            }));
          });
          this.changeGroupForm(groupName);
        }
      }, {
        key: "renameForm",
        value: function renameForm(groupName, form, label) {
          var _this40 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.label = label;
                  }
                });
              }

              return groupObj;
            });
          })).subscribe(function (current) {
            _this40._forms.next(current);
          });
          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.label = label;
                  }
                });
              }

              return groupObj.formList;
            });
          })).subscribe(function (current) {
            _this40._activeFormList.next(current.find(function (e) {
              return e != undefined;
            }));
          });
          this.changeGroupForm(groupName);
        }
      }, {
        key: "renameOption",
        value: function renameOption(groupName, opt, form, label) {
          var _this41 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.options.forEach(function (option) {
                      if (option.label == opt.label) {
                        option.label = label;
                      }
                    });
                  }
                });
              }

              return groupObj;
            });
          })).subscribe(function (current) {
            return _this41._forms.next(current);
          });
          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.options.forEach(function (option) {
                      if (option.label == opt.label) {
                        option.label = label;
                      }
                    });
                  }
                }); // return groupList;
              }

              return groupObj.formList;
            });
          })).subscribe(function (current) {
            _this41._activeFormList.next(current.find(function (e) {
              return e != undefined;
            }));
          }); // }))).subscribe(current => {console.log(current.find(e => e != undefined))});

          this.changeGroupForm(groupName);
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(groupName, opt, form) {
          var _this42 = this;

          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.options = formItem.options.filter(function (option) {
                      return option.label != opt.label;
                    });
                  }
                });
              }

              return groupObj;
            });
          })).subscribe(function (current) {
            _this42._forms.next(current);
          });
          this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groupList) {
            return groupList.map(function (groupObj) {
              if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(function (formItem) {
                  if (formItem.label == form.label) {
                    formItem.options = formItem.options.filter(function (option) {
                      return option.label != opt.label;
                    });
                  }
                });
              }

              return groupObj.formList;
            });
          })).subscribe(function (current) {
            _this42._activeFormList.next(current.find(function (e) {
              return e != undefined;
            }));
          });
          this.changeGroupForm(groupName);
        }
      }, {
        key: "getForm",
        value: function getForm(groupName, formObj) {
          var groupObj = formObj.filter(function (groupObj) {
            return groupObj.groupName === groupName;
          });
          var finalArray = [];

          if (groupObj[0] != undefined) {
            finalArray = groupObj[0].formList;
          }

          return finalArray;
        }
      }]);

      return FormsService;
    }();

    FormsService.ctorParameters = function () {
      return [{
        type: _groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]
      }];
    };

    FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]])], FormsService);
    /***/
  },

  /***/
  "./src/app/services/geo-data.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/geo-data.service.ts ***!
    \**********************************************/

  /*! exports provided: GeoDataService */

  /***/
  function srcAppServicesGeoDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoDataService", function () {
      return GeoDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! querystring */
    "./node_modules/querystring/index.js");
    /* harmony import */


    var querystring__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);

    var GeoDataService =
    /*#__PURE__*/
    function () {
      function GeoDataService(http) {
        _classCallCheck(this, GeoDataService);

        this.http = http;
        this._pointClouds = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.pointClouds = this._pointClouds.asObservable();
        this._loaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loaded = this._loaded.asObservable();
        this._features = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
          type: 'FeatureCollection',
          features: []
        });
        this.features$ = this._features.asObservable();
        this._activeFeature = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._mapMouseLocation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null); // For the style of the basemap, defaults to OpenStreetmap

        this._basemap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('roads'); // Holds all of the overlays on a project

        this._overlays = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._activeOverlay = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(GeoDataService, [{
        key: "getFeatures",
        value: function getFeatures(projectId) {
          var _this43 = this;

          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"]();
          var qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());

          this._loaded.next(false);

          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/") + '?' + qstring).subscribe(function (fc) {
            fc.features = fc.features.map(function (feat) {
              return new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat);
            });

            _this43._features.next(fc);

            _this43._loaded.next(true);
          });
        }
      }, {
        key: "deleteFeature",
        value: function deleteFeature(feature) {
          var _this44 = this;

          this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(feature.project_id, "/features/").concat(feature.id, "/")).subscribe(function (resp) {
            _this44.getFeatures(feature.project_id);
          });
        }
      }, {
        key: "getPointClouds",
        value: function getPointClouds(projectId) {
          var _this45 = this;

          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/point-cloud/")).subscribe(function (resp) {
            console.log(resp);

            _this45._pointClouds.next(resp);
          });
        }
      }, {
        key: "addFeature",
        value: function addFeature(feat) {
          var _this46 = this;

          this.features$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (current) {
            current.features.push(feat);

            _this46._features.next(current);
          });
        }
      }, {
        key: "addPointCloud",
        value: function addPointCloud(projectId, title, conversionParams) {
          var _this47 = this;

          var payload = {
            description: title,
            conversion_parameters: conversionParams
          };
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/point-cloud/"), payload).subscribe(function (resp) {
            _this47.getPointClouds(projectId);
          }, function (error) {// TODO: notification
          });
        }
      }, {
        key: "updateFeatureProperty",
        value: function updateFeatureProperty(projectId, featureId, groupData) {
          // const payload = {
          //   description: title,
          //   conversion_parameters: conversionParams
          // };
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/").concat(featureId, "/properties/"), groupData).subscribe(function (resp) {// this.getFeatures(projectId);
          }, function (error) {// TODO: notification
          });
        }
      }, {
        key: "updateFeatureStyle",
        value: function updateFeatureStyle(projectId, featureId, groupData) {
          // const payload = {
          //   description: title,
          //   conversion_parameters: conversionParams
          // };
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/").concat(featureId, "/styles/"), groupData).subscribe(function (resp) {// this.getFeatures(projectId);
          }, function (error) {// TODO: notification
          });
        }
      }, {
        key: "deletePointCloud",
        value: function deletePointCloud(pc) {
          var _this48 = this;

          console.log(pc);
          this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(pc.project_id, "/point-cloud/").concat(pc.id, "/")).subscribe(function (resp) {
            _this48.getPointClouds(pc.project_id);
          });
        }
      }, {
        key: "addFileToPointCloud",
        value: function addFileToPointCloud(pc, file) {
          var form = new FormData();
          form.append('file', file);
          console.log(pc);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(pc.project_id, "/point-cloud/").concat(pc.id, "/"), form).subscribe(function (resp) {
            console.log(resp);
          });
        }
      }, {
        key: "importFileFromTapis",
        value: function importFileFromTapis(projectId, files) {
          var tmp = files.map(function (f) {
            return {
              system: f.system,
              path: f.path
            };
          });
          var payload = {
            files: tmp
          };
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/files/import/"), payload).subscribe(function (resp) {// this.getFeatures(projectId);
          }, function (error) {// this.getFeatures(projectId);
            // TODO: Add notification / toast
          });
        }
      }, {
        key: "downloadGeoJSON",
        value: function downloadGeoJSON(projectId) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"]();
          var qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());
          var downloadLink = document.createElement('a');
          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/") + '?' + qstring).subscribe(function (resp) {
            var blob = new Blob([JSON.stringify(resp)], {
              type: 'application/json'
            });
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.setAttribute('download', 'hazmapper.json');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(projectId, file) {
          var _this49 = this;

          var form = new FormData();
          form.append('file', file, file.name);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/features/files/"), form).subscribe(function (feats) {
            feats.forEach(function (feat) {
              _this49.addFeature(new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat));
            });
          }, function (error) {// TODO: Add notification
          });
        }
      }, {
        key: "uploadAssetFile",
        value: function uploadAssetFile(projectId, featureId, file) {
          var _this50 = this;

          var form = new FormData();
          form.append('file', file, file.name);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/projects/".concat(projectId, "/features/").concat(featureId, "/assets/"), form).subscribe(function (feature) {
            // TODO workaround to update activeFeature
            var f = _this50._activeFeature.getValue();

            if (f && f.id === featureId) {
              _this50.activeFeature = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feature);

              _this50.getFeatures(projectId);
            }
          }, function (error) {// TODO: Add notification
          });
        }
      }, {
        key: "getOverlays",
        value: function getOverlays(projectId) {
          var _this51 = this;

          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/overlays/")).subscribe(function (ovs) {
            _this51._overlays.next(ovs);
          });
        }
      }, {
        key: "addOverlay",
        value: function addOverlay(projectId, file, label, minLat, maxLat, minLon, maxLon) {
          var _this52 = this;

          var payload = new FormData();
          payload.append('file', file);
          payload.append('label', label);
          payload.append('minLat', minLat.toFixed(6));
          payload.append('maxLat', maxLat.toFixed(6));
          payload.append('minLon', minLon.toFixed(6));
          payload.append('maxLon', maxLon.toFixed(6));
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(projectId, "/overlays/"), payload).subscribe(function (resp) {
            _this52.getOverlays(projectId);
          });
        }
      }, {
        key: "overlays",
        get: function get() {
          return this._overlays.asObservable();
        }
      }, {
        key: "features",
        get: function get() {
          return this._features.asObservable();
        }
      }, {
        key: "activeFeature",
        get: function get() {
          return this._activeFeature.asObservable();
        } // TODO: This is heinous
        ,
        set: function set(f) {
          if (f) {
            if (f === this._activeFeature.getValue()) {
              this._activeFeature.next(null);
            } else {
              this._activeFeature.next(f);
            }
          } else {
            this._activeFeature.next(null);
          }
        }
      }, {
        key: "activeOverlay",
        get: function get() {
          return this._activeOverlay.asObservable();
        },
        set: function set(ov) {
          this._activeOverlay.next(ov);
        }
      }, {
        key: "mapMouseLocation",
        get: function get() {
          return this._mapMouseLocation.asObservable();
        },
        set: function set(loc) {
          this._mapMouseLocation.next(loc);
        }
      }, {
        key: "basemap",
        set: function set(bmap) {
          this._basemap.next(bmap);
        },
        get: function get() {
          return this._basemap.asObservable();
        }
      }]);

      return GeoDataService;
    }();

    GeoDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GeoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], GeoDataService);
    /***/
  },

  /***/
  "./src/app/services/groups.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/groups.service.ts ***!
    \********************************************/

  /*! exports provided: GroupsService */

  /***/
  function srcAppServicesGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsService", function () {
      return GroupsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects.service */
    "./src/app/services/projects.service.ts"); // Will inject Projects and GeoData Service to get properties of Feature


    var GroupsService =
    /*#__PURE__*/
    function () {
      function GroupsService(projectsService) {
        _classCallCheck(this, GroupsService);

        this.projectsService = projectsService;
        this._groups = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.groups = this._groups.asObservable();
        this._forms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.forms = this._forms.asObservable();
        this._tempGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tempGroup = this._tempGroup.asObservable();
        this._showGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showGroup = this._showGroup.asObservable();
        this._showSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showSidebar = this._showSidebar.asObservable();
        this._activeFeature = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeature = this._activeFeature.asObservable();
        this._activeGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeGroup = this._activeGroup.asObservable();
        this._activeFeatureNum = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeatureNum = this._activeFeatureNum.asObservable();
        this._unselectAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.unselectAll = this._unselectAll.asObservable();
        this._featureImagesExist = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.featureImagesExist = this._featureImagesExist.asObservable();
        this._activeFeatureId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeatureId = this._activeFeatureId.asObservable();
        this._activePane = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activePane = this._activePane.asObservable();
        this._tagFeatureGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tagFeatureGroup = this._tagFeatureGroup.asObservable();
      } // Loop through projects to get a list of Groups


      _createClass(GroupsService, [{
        key: "addGroup",
        value: function addGroup(groupList) {
          this._groups.next(groupList);
        }
      }, {
        key: "setGroupProperties",
        value: function setGroupProperties(featureList) {
          // let tempGroupList = {};
          var tempGroupList = {};
          var tempFeatList = {};
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = featureList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var feat = _step5.value;

              // Parses if group exists at all in server
              if (feat.properties.group) {
                // Loops through all the groups
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = feat.properties.group[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var group = _step6.value;

                    // Adds new feature to group
                    // if (!tempFeatList[group.name]) {
                    //	tempFeatList[group.name] = [];
                    // }
                    // if (!tempGroupList[group.name]) {
                    //	tempGroupList[group.name] = [];
                    // }
                    // TODO for some reason it's limiting itself to only one group per feature...
                    //if it exist
                    if (!tempGroupList[group.name]) {
                      // console.log("RENEWING");
                      // console.log(group.name);
                      // console.log(feat);
                      tempGroupList[group.name] = {
                        name: group.name,
                        features: [],
                        color: group.color
                      };
                    }

                    tempGroupList[group.name].features.push(feat); // console.log("Inside Service");
                    // console.log(tempGroupList);
                    // tempFeatList[group.name].push(feat);
                    // if (tempGroupList[group.name] != undefined) {
                    //	tempGroupList[group.name].features = tempFeatList[group.name];
                    // } else {
                    //	tempGroupList[group.name] = {
                    //	  name: group.name,
                    //	  features: tempFeatList[group.name],
                    //	  color: group.color,
                    //	}
                    // }
                    //	{
                    //	name: group.name,
                    //	features: tempFeatList[group.name],
                    //	color: group.color,
                    // });
                    // if (!tempGroupList.) {
                    // }
                    // tempGroupList.push({
                    //	name: group.name,
                    //	features: tempFeatList[group.name],
                    //	color: group.color,
                    // });
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          console.log(tempGroupList);

          this._groups.next(Object.values(tempGroupList));

          console.log(Object.values(tempGroupList)); // this._groups.next(tempGroupList);
        }
      }, {
        key: "addForm",
        value: function addForm(formList) {
          this._forms.next(formList);
        }
      }, {
        key: "addTempGroup",
        value: function addTempGroup(tempGroup) {
          this._tempGroup.next(tempGroup);
        }
      }, {
        key: "setShowGroup",
        value: function setShowGroup(show) {
          this._showGroup.next(show);
        }
      }, {
        key: "setFeatureImagesExist",
        value: function setFeatureImagesExist(feature) {
          this._featureImagesExist.next(feature);
        }
      }, {
        key: "setShowSidebar",
        value: function setShowSidebar(show) {
          this._showSidebar.next(show);
        }
      }, {
        key: "setUnselectAll",
        value: function setUnselectAll(select) {
          this._unselectAll.next(select);
        } // TODO Replace this with geo-data.service

      }, {
        key: "setActiveProject",
        value: function setActiveProject(feat) {
          // console.log(feat.assets[0].path);
          this._activeFeature.next(feat);
        }
      }, {
        key: "setActiveGroup",
        value: function setActiveGroup(groupName) {
          // console.log(feat.assets[0].path);
          this._activeGroup.next(groupName);
        }
      }, {
        key: "setActivePane",
        value: function setActivePane(pane) {
          // console.log(feat.assets[0].path);
          this._activePane.next(pane);
        }
      }, {
        key: "setActiveFeatureNum",
        value: function setActiveFeatureNum(num) {
          this._activeFeatureNum.next(num);
        }
      }, {
        key: "setActiveFeatureId",
        value: function setActiveFeatureId(id) {
          this._activeFeatureId.next(id);
        }
      }, {
        key: "setTagFeatureGroup",
        value: function setTagFeatureGroup(groupName, featureId, payload) {
          var groupFeature = groupName + featureId;
          var tagFeatureGroupValue = this._tagFeatureGroup.value;

          if (tagFeatureGroupValue == null) {
            tagFeatureGroupValue = {};
          } else {
            tagFeatureGroupValue[groupFeature] = payload;
          }

          this._tagFeatureGroup.next(tagFeatureGroupValue);
        }
      }]);

      return GroupsService;
    }();

    GroupsService.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    GroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])], GroupsService);
    /***/
  },

  /***/
  "./src/app/services/projects.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/projects.service.ts ***!
    \**********************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/models */
    "./src/app/models/models.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ProjectsService =
    /*#__PURE__*/
    function () {
      function ProjectsService(http) {
        _classCallCheck(this, ProjectsService);

        this.http = http;
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.projects = this._projects.asObservable();
        this._activeProject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.activeProject = this._activeProject.asObservable();
      } //Queries database for all user projects.


      _createClass(ProjectsService, [{
        key: "getProjects",
        value: function getProjects() {
          var _this53 = this;

          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/").subscribe(function (resp) {
            _this53._projects.next(resp); //DEBUG: outputs results of query
            //console.log(this._projects.getValue())

          });
        }
      }, {
        key: "create",
        value: function create(data) {
          var _this54 = this;

          var prom = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/", data);
          prom.subscribe(function (proj) {
            //below code from here to next comment does nothing
            var p = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
            p.name = 'test';
            p.description = 'test'; // Spread operator, just pushes the new project into the array

            _this54._projects.next([].concat(_toConsumableArray(_this54._projects.value), [proj])); // Set the active project to the one just created?


            _this54._activeProject.next(proj);
          });
          return prom;
        }
      }, {
        key: "setActiveProject",
        value: function setActiveProject(proj) {
          this._activeProject.next(proj);
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this55 = this;

          // console.log(data) 
          this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(data.id, "/"), data).subscribe(function (resp) {
            _this55._activeProject.next(resp);
          });
        } //Note: This will delete the project for everyone, if the project is shared. 
        // Need to find a way to unsubscribe a project for one person without affecting the others.

      }, {
        key: "delete",
        value: function _delete(data) {
          var _this56 = this;

          this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/projects/".concat(data.id, "/")).subscribe(function (resp) {
            _this56.getProjects(); // this._projects.next([...this._projects.value]);
            // console.log(this._projects.value[0])
            // this._activeProject.next(this._projects.value[0]);

          });
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ProjectsService);
    /***/
  },

  /***/
  "./src/app/services/tapis-files.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/tapis-files.service.ts ***!
    \*************************************************/

  /*! exports provided: TapisFilesService */

  /***/
  function srcAppServicesTapisFilesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TapisFilesService", function () {
      return TapisFilesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng_tapis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-tapis */
    "./node_modules/ng-tapis/fesm2015/ng-tapis.js");

    var TapisFilesService =
    /*#__PURE__*/
    function () {
      function TapisFilesService(tapis) {
        _classCallCheck(this, TapisFilesService);

        this.tapis = tapis;
        this.baseUrl = 'https://agave.designsafe-ci.org/files/v2/';
        this._listing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listing = this._listing.asObservable();
        this.IMPORTABLE_TYPES = ['jpg', 'las', 'laz', 'json', 'geojson', 'geotiff', 'tiff', 'gpx'];
      }

      _createClass(TapisFilesService, [{
        key: "checkIfSelectable",
        value: function checkIfSelectable(file) {
          if (file.type === 'dir') {
            return false;
          }

          var ext = this.getFileExtension(file);
          return this.IMPORTABLE_TYPES.includes(ext);
        }
      }, {
        key: "getFileExtension",
        value: function getFileExtension(file) {
          return file.name.split('.').pop();
        }
      }, {
        key: "listFiles",
        value: function listFiles(system, path) {
          var _this57 = this;

          this.tapis.filesList({
            systemId: system,
            filePath: path
          }).subscribe(function (resp) {
            var files = resp.result; // This removes the first item in the listing, which in Agave is always a reference to self.

            var current = files.shift();
            current.path = _this57.getParentPath(current.path);
            current.name = '..';
            files.unshift(current);

            _this57._listing.next(files);
          });
        }
      }, {
        key: "getParentPath",
        value: function getParentPath(path) {
          var cleaned = path.replace('//', '/');
          var arr = cleaned.split('/');
          arr.pop();
          var parentPath = arr.join('/');
          return parentPath;
        }
      }]);

      return TapisFilesService;
    }();

    TapisFilesService.ctorParameters = function () {
      return [{
        type: ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    TapisFilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], TapisFilesService);
    /***/
  },

  /***/
  "./src/app/utils/leafletUtils.ts":
  /*!***************************************!*\
    !*** ./src/app/utils/leafletUtils.ts ***!
    \***************************************/

  /*! exports provided: createMarker */

  /***/
  function srcAppUtilsLeafletUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createMarker", function () {
      return createMarker;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);

    function createCircleMarker(feature, latlng) {
      var options = {
        radius: 8,
        fillColor: "#d3d3d3",
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"])(latlng, options);
    }

    function createImageMarker(feature, latlng) {
      var divHtml = "<i class='fas fa-camera-retro fa-2x light-blue'></i>";
      var ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({
        className: 'leaflet-fa-marker-icon',
        html: divHtml
      });
      return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, {
        icon: ico
      });
    }

    function createCollectionMarker(feature, latlng) {
      var divHtml = '<i class="fa fa-folder-open fa-2x light-blue"></i>';
      var ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({
        className: 'icon-marker',
        html: divHtml
      });
      return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, {
        icon: ico
      });
    }

    function createVideoMarker(feature, latlng) {
      var divHtml = "<i class='fas fa-video fa-2x light-blue'></i>";
      var ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({
        className: 'leaflet-fa-marker-icon',
        html: divHtml
      });
      return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, {
        icon: ico
      });
    }

    function createMarker(feature, latlng) {
      var marker;

      if (feature.featureType() == 'image') {
        marker = createImageMarker(feature, latlng);
      } else if (feature.featureType() == 'collection') {
        marker = createCollectionMarker(feature, latlng);
      } else if (feature.featureType() == 'video') {
        marker = createVideoMarker(feature, latlng);
      } else {
        marker = createCircleMarker(feature, latlng);
      }

      return marker;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      apiUrl: 'https://agave.designsafe-ci.org/geo/v2/',
      clientId: 'vtDnU5adn3ue7MMNPTq__bvxSa8a',
      baseHref: '/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\DesignSafe\taggit\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map