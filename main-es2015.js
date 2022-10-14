(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"callback\">\n  <div>\n    <i class=\"fas fa-spinner\"></i>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"top-bar\" color=\"primary\">\n  <img src=\"assets/logo.svg\" width=\"40PX\" />\n  <span style=\"color: white\">Taggit</span>\n\n  <button\n    mat-icon-button\n    [matMenuTriggerFor]=\"project\"\n    color=\"foreground\"\n    class=\"project-menu\"\n  >\n    <mat-icon>menu</mat-icon>\n  </button>\n\n  <mat-menu #project=\"matMenu\">\n    <span\n      mat-menu-item\n      *ngIf=\"selectedProject\"\n      (click)=\"openProjectModal(selectedProject)\"\n    >\n      Current Gallery : {{ selectedProject.name }}\n    </span>\n    <button mat-menu-item (click)=\"openCreateProjectModal()\">\n      Create Gallery\n    </button>\n    <button mat-menu-item [matMenuTriggerFor]=\"projectList\">\n      Select Gallery\n    </button>\n    <button mat-menu-item (click)=\"openFilePicker(test)\">File Browser</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"saveOptions\">Save as</button>\n  </mat-menu>\n\n  <mat-menu #projectList=\"matMenu\">\n    <button\n      mat-menu-item\n      class=\"clickable\"\n      *ngFor=\"let p of projects\"\n      (click)=\"selectProject(p)\"\n      [ngClass]=\"{ 'active-project': p === selectedProject }\"\n    >\n      {{ p.name }}\n    </button>\n  </mat-menu>\n\n  <mat-menu #saveOptions=\"matMenu\">\n    <button mat-menu-item (click)=\"saveFile(0)\">CSV file</button>\n    <button mat-menu-item (click)=\"saveFile(1)\">JSON file</button>\n    <button mat-menu-item (click)=\"openDownloadSelector()\">\n      Export to DesignSafe\n    </button>\n  </mat-menu>\n\n  <span class=\"example-spacer\"></span>\n\n  <div *ngIf=\"showTagger\" class=\"path-buttons\">\n    <div class=\"slides\" style=\"line-height: 1; font-size: 12px\">\n      {{ getAssetDisplay() }}\n      <div class=\"lr-buttons\" style=\"margin-top: 5px\">\n        <i\n          (click)=\"otherPath(false)\"\n          style=\"margin-right: 10px; cursor: pointer\"\n          class=\"fas fa-angle-left\"\n        ></i>\n        <i\n          (click)=\"otherPath(true)\"\n          style=\"margin-left: 10px; cursor: pointer\"\n          class=\"fas fa-angle-right\"\n        ></i>\n      </div>\n    </div>\n  </div>\n\n  <span class=\"example-spacer\"></span>\n\n  <div class=\"group-bar grid-x align-right\">\n    <button\n      mat-raised-button\n      class=\"button-spacing\"\n      [disabled]=\"selectedImages.length === 0\"\n      (click)=\"clearAll()\"\n    >\n      Clear Selected\n    </button>\n\n    <!-- A link that looks like a button, links to Hazmapper-->\n    <a\n      class=\"button-spacing\"\n      mat-raised-button\n      href=\"{{ hazmapperLink }}\"\n      title=\"Open your gallery in HazMapper\"\n      target=\"_blank\"\n    >\n      <img src=\"assets/hazmapper-header-logo.png\" width=\"100PX\" />\n    </a>\n\n    <button\n      mat-raised-button\n      (click)=\"openAddGroupModal(addGroupModal)\"\n      *ngIf=\"selectedImages.length > 0 && !showTagger\"\n    >\n      Add Group\n    </button>\n\n    <ng-template #addGroupModal>\n      <mat-form-field>\n        <mat-label>Group Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Group Name\"\n          (keyup.enter)=\"addGroup(groupInput.value)\"\n          #groupInput\n        />\n      </mat-form-field>\n\n      <div style=\"color: #ff0000\" *ngIf=\"invalidNameError\">Invalid Name!</div>\n      <div style=\"color: #ff0000\" *ngIf=\"existingNameError\">Existing Name!</div>\n      <br />\n      <br />\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"addGroup(groupInput.value)\"\n      >\n        Add Group\n      </button>\n      <button mat-button matDialogClose color=\"secondary\">Cancel</button>\n    </ng-template>\n  </div>\n\n  <button\n    *ngIf=\"groupsExist && !showTagger\"\n    mat-raised-button\n    style=\"margin-left: 15px\"\n    (click)=\"toggleTagger()\"\n  >\n    Taggit!\n  </button>\n\n  <button\n    *ngIf=\"showTagger\"\n    mat-raised-button\n    style=\"margin-left: 15px\"\n    (click)=\"toggleTagger()\"\n  >\n    Gallery\n  </button>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"img-container\">\n  <img\n    [ngClass]=\"imageSelected\"\n    [src]=\"featureSource\"\n    (click)=\"imageSelect()\"\n    class=\"img-responsive img-target\"\n    title=\"{{ featurePath }}\"\n  />\n  <div class=\"top-overlay\">\n    <div\n      class=\"image-option\"\n      matTooltip=\"Zoom\"\n      matTooltipPosition=\"below\"\n      (click)=\"imageZoom(diffSizes)\"\n    >\n      <i class=\"fas fa-search-plus\"></i>\n    </div>\n\n    <ng-template #diffSizes>\n      <div class=\"zoom-content\">\n        <div class=\"img-container\">\n          <img [src]=\"featureSource\" title=\"{{ featurePath }}\" />\n        </div>\n        <div class=\"img-details\">\n          <div class=\"detail-container\">\n            <div class=\"title\">Coordinates</div>\n            <div class=\"detail-contents\">\n              <div class=\"detail-item\">{{ coordinates[0] }},</div>\n              <div class=\"detail-item\">\n                {{ coordinates[1] }}\n              </div>\n            </div>\n          </div>\n          <div class=\"detail-container\">\n            <div class=\"title\">Image Source</div>\n            <div class=\"detail-contents\">\n              <div class=\"detail-item\">\n                {{ featurePath }}\n              </div>\n            </div>\n          </div>\n        </div>\n        <button\n          mat-button\n          class=\"close-button\"\n          matDialogClose\n          aria-label=\"Close modal\"\n          type=\"button\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n\n    <div\n      class=\"image-option\"\n      matTooltip=\"Remove\"\n      matTooltipPosition=\"below\"\n      (click)=\"openImageDeleteModal(deleteImage)\"\n    >\n      <i class=\"fas fa-trash\"></i>\n    </div>\n\n    <ng-template #deleteImage>\n      <div *ngIf=\"selectedImages.length === 1\">\n        This image will be deleted from the current project. It will not be\n        deleted from the Data Depot.\n      </div>\n\n      <div *ngIf=\"selectedImages.length > 1\">\n        {{ selectedImages.length }} images will be deleted from the current\n        project. They will not be deleted from the Data Depot.\n      </div>\n\n      <button\n        mat-raised-button\n        color=\"primary\"\n        matDialogClose\n        (click)=\"imageDelete()\"\n      >\n        Delete Image\n      </button>\n      <button mat-button matDialogClose>Cancel</button>\n    </ng-template>\n\n    <div\n      class=\"image-option\"\n      matTooltip=\"Add To Group\"\n      matTooltipPosition=\"below\"\n      (click)=\"openImageAddModal(addMoreToGroup)\"\n    >\n      <i class=\"fas fa-plus\"></i>\n    </div>\n\n    <ng-template #addMoreToGroup>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Groups</mat-label>\n        <mat-select matNativeControl required [(value)]=\"groupToAdd\">\n          <mat-option\n            *ngFor=\"let group of groups | keyvalue\"\n            [value]=\"group.value\"\n          >\n            {{ group.key }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <p>\n        <button\n          mat-raised-button\n          color=\"primary\"\n          matDialogClose\n          (click)=\"addGroup(groupToAdd)\"\n          [disabled]=\"!groupToAdd\"\n        >\n          Add To Group\n        </button>\n        <button mat-button color=\"secondary\" matDialogClose>Cancel</button>\n      </p>\n    </ng-template>\n  </div>\n\n  <div class=\"bottom-overlay\">\n    <div\n      *ngIf=\"feature.properties.group && feature.properties.group.length > 0\"\n    >\n      <div\n        *ngIf=\"feature.properties.group.length < 5; else dotdot\"\n        class=\"group-tags\"\n      >\n        <div\n          *ngFor=\"let group of feature.properties.group\"\n          class=\"center\"\n          (mouseover)=\"(group.name)\"\n          [matTooltip]=\"group.name\"\n          matTooltipPosition=\"above\"\n        >\n          <svg\n            class=\"box\"\n            width=\"25px\"\n            height=\"75px\"\n            (click)=\"deleteFromGroup(feature, group)\"\n          >\n            <rect\n              width=\"15px\"\n              height=\"15px\"\n              x=\"5\"\n              y=\"30\"\n              [style.fill]=\"group.color\"\n            />\n            <rect\n              class=\"inner-del\"\n              width=\"25px\"\n              height=\"15px\"\n              rx=\"3\"\n              x=\"0\"\n              y=\"0\"\n              style=\"fill: #ffffff\"\n            />\n            <rect\n              class=\"inner-del\"\n              width=\"15px\"\n              height=\"5px\"\n              x=\"5\"\n              y=\"5\"\n              style=\"fill: #de6363\"\n            />\n          </svg>\n        </div>\n      </div>\n\n      <ng-template #dotdot class=\"text\">\n        <div\n          class=\"image-option\"\n          (click)=\"openMoreGroupsModal(moreGroupsModal)\"\n        >\n          <i class=\"fas fa-ellipsis-h\"></i>\n        </div>\n      </ng-template>\n\n      <!-- TODO Should close modal once zero groups -->\n      <ng-template #moreGroupsModal>\n        <div\n          style=\"display: flex; justify-content: center; align-items: center\"\n        >\n          <div\n            *ngFor=\"let group of feature.properties.group\"\n            class=\"center-temp\"\n            style=\"display: flex\"\n            (mouseover)=\"(group.name)\"\n            [matTooltip]=\"group.name\"\n            matTooltipPosition=\"right\"\n          >\n            <svg\n              style=\"padding: 1\"\n              (click)=\"deleteFromGroup(feature, group)\"\n              width=\"15px\"\n              height=\"15px\"\n            >\n              <rect width=\"15px\" height=\"15px\" [style.fill]=\"group.color\" />\n              <rect\n                class=\"inner-del-temp\"\n                width=\"8px\"\n                height=\"4px\"\n                x=\"3.3\"\n                y=\"5.5\"\n                style=\"fill: #000\"\n              />\n            </svg>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loaded; else loader\" id=\"loading-load\">\n  <div *ngIf=\"projectsExist; else noProjWarn\" id=\"gallery-container\">\n    <div *ngIf=\"imagesExist; else noImgWarn\" id=\"gallery-container-container\">\n      <div\n        [ngClass]=\"scrollStatus\"\n        infiniteScroll\n        [infiniteScrollDistance]=\"1\"\n        [infiniteScrollThrottle]=\"1500\"\n        (scrolled)=\"onScroll()\"\n        class=\"img-list-container\"\n        *ngIf=\"!showTagger; else tagger\"\n      >\n        <app-image-box *ngFor=\"let feat of featureListScroll\" [feature]=\"feat\">\n        </app-image-box>\n      </div>\n\n      <ngx-spinner\n        bdOpacity=\"0.9\"\n        bdColor=\"\"\n        size=\"default\"\n        color=\"#3ADB76\"\n        type=\"line-scale-pulse-out\"\n        id=\"img-spin\"\n        [fullScreen]=\"false\"\n      >\n      </ngx-spinner>\n      <ng-template #tagger>\n        <div>\n          <div class=\"imager\">\n            <img class=\"view-image\" [src]=\"getPath()\" />\n          </div>\n        </div>\n      </ng-template>\n      <div *ngIf=\"showTagger\" class=\"side-bar-container\">\n        <app-side-bar></app-side-bar>\n      </div>\n    </div>\n    <ng-template #noImgWarn>\n      <div id=\"no-img\">\n        No images have been imported!<br />Please import images through the\n        menu.\n      </div>\n    </ng-template>\n  </div>\n\n  <ng-template #noProjWarn>\n    <div id=\"no-proj\">\n      No project has been created!<br />Please create a project through the\n      menu.\n    </div>\n  </ng-template>\n</div>\n\n<ng-template #loader>\n  <div *ngIf=\"projectsExist; else createProj\" id=\"loader\">Loading...</div>\n\n  <ng-template #createProj>\n    <div id=\"new-proj\" (click)=\"openCreateProjectModal()\">\n      Start a new project\n    </div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"grid-x\"> -->\n\n<!--   <div class=\"top-bar\" style=\"background-color: black\" id=\"navbar\"> -->\n\n<!--\t<div class=\"top-bar-left\"> -->\n<!--\t  <img src=\"assets/logo.svg\" width=\"30PX\"> -->\n<!--\t  <span style=\"color: white\">Taggit</span> -->\n<!--\t</div> -->\n\n<!--\t<div class=\"top-bar-right\"> -->\n<!--\t  <div class=\"light-blue\" *ngIf=\"currentUser\">{{ currentUser.username }}</div> -->\n<!--\t</div> -->\n\n<!--   </div> -->\n\n<!--   <\\!-- <div class=\"cell control-bar\"> -\\-> -->\n<!--   <\\!--\t<app-control-bar></app-control-bar> -\\-> -->\n<!--   <\\!-- </div> -\\-> -->\n<!-- </div> -->\n\n<app-control-bar></app-control-bar>\n<!-- NOTE Router Outlet was here -->\n<app-image-gallery></app-image-gallery>\n\n<!-- NOTE Leaflet was here -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\" style=\"min-height: calc(100vh - 67px)\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Create a new Gallery</h4>\n<form\n  [formGroup]=\"projCreateForm\"\n  (ngSubmit)=\"submit()\"\n  id=\"create-project-form\"\n>\n  <mat-form-field>\n    <mat-label>Name:</mat-label>\n    <input matInput type=\"text\" formControlName=\"name\" required=\"true\" />\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Description</mat-label>\n    <textarea matInput formControlName=\"description\" required=\"true\"></textarea>\n  </mat-form-field>\n\n  <div class=\"button-group small\">\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"button small warning\"\n      type=\"button\"\n      (click)=\"close()\"\n    >\n      Close\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      class=\"button small align-right\"\n      type=\"submit\"\n      [disabled]=\"!projCreateForm.valid\"\n    >\n      Submit\n    </button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Current Gallery</h4>\n<form\n  [formGroup]=\"projCreateForm\"\n  (ngSubmit)=\"update()\"\n  id=\"current-project-form\"\n>\n  <mat-form-field>\n    <mat-label>Name:</mat-label>\n    <input\n      matInput\n      type=\"text\"\n      formControlName=\"name\"\n      appearance=\"filled\"\n      required=\"true\"\n    />\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Description</mat-label>\n    <textarea matInput formControlName=\"description\" required=\"true\"></textarea>\n  </mat-form-field>\n\n  <div class=\"button-group small\">\n    <button\n      mat-raised-button\n      color=\"basic\"\n      class=\"button small warning\"\n      type=\"button\"\n      (click)=\"close()\"\n    >\n      Close\n    </button>\n    <button\n      *ngIf=\"activeProject.deletable\"\n      mat-raised-button\n      color=\"warn\"\n      class=\"button small warning\"\n      type=\"delete\"\n      (click)=\"delete()\"\n    >\n      Delete\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      class=\"button small align-right\"\n      type=\"submit\"\n      [disabled]=\"!projCreateForm.valid\"\n    >\n      Update\n    </button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-download-selector/modal-download-selector.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-download-selector/modal-download-selector.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Select Files</h4>\n<small\n  ><em>\n    If no folder is selected, the file will be saved in the root of your\n    selected system.\n  </em></small\n>\n<hr />\n<select (ngModelChange)=\"selectSystem($event)\" [(ngModel)]=\"selectedSystem\">\n  <option [ngValue]=\"myDataSystem\">My Data</option>\n  <option [ngValue]=\"communityDataSystem\">Community Data</option>\n  <option [ngValue]=\"publishedDataSystem\">Published Data</option>\n  <optgroup label=\"My Galleries\">\n    <option *ngFor=\"let project of projects\" [ngValue]=\"project\">\n      {{ project.description }}\n    </option>\n  </optgroup>\n</select>\n<div\n  class=\"fileslisting\"\n  infiniteScroll\n  [infiniteScrollDistance]=\"2\"\n  [infiniteScrollThrottle]=\"100\"\n  [scrollWindow]=\"false\"\n  (scrolled)=\"getFiles()\"\n>\n  <div\n    class=\"grid-x file-row\"\n    *ngFor=\"let file of filesList\"\n    [ngClass]=\"{ selected: selectedFiles.has(file.path) }\"\n  >\n    <div class=\"clickable\" (dblclick)=\"browse(file)\">\n      <i class=\"fas fa-folder\" *ngIf=\"file.type === 'dir'\"></i>\n      <i class=\"far fa-file\" *ngIf=\"file.type !== 'dir'\"></i>\n      <span> {{ file.name }} </span>\n    </div>\n    <div class=\"size\">\n      {{ file.length | filesize }}\n    </div>\n  </div>\n  <div class=\"grid-x\" *ngIf=\"inProgress\">\n    <div class=\"cell medium-12\">\n      <i class=\"fas fa-spin fa-atom\"></i>\n    </div>\n  </div>\n</div>\n\n<form\n  [formGroup]=\"downloadSelectForm\"\n  (ngSubmit)=\"update()\"\n  id=\"current-project-form\"\n>\n  <div>\n    <small\n      ><em>\n        If no filename is specified, it will default to the Gallery ID number.\n      </em></small\n    >\n  </div>\n\n  <mat-form-field>\n    <input\n      matInput\n      type=\"text\"\n      formControlName=\"Name\"\n      appearance=\"filled\"\n      required=\"false\"\n    />\n  </mat-form-field>\n</form>\n<span class=\"radio-box\">\n  <mat-radio-group [(ngModel)]=\"fileExtension\">\n    <mat-radio-button value=\".csv\">.csv</mat-radio-button>\n    <mat-radio-button value=\".json\">.json</mat-radio-button>\n  </mat-radio-group>\n</span>\n\n<div class=\"button-group\">\n  <button\n    mat-raised-button\n    color=\"warn\"\n    class=\"button warning\"\n    (click)=\"cancel()\"\n  >\n    Cancel\n  </button>\n  <button\n    mat-raised-button\n    color=\"primary\"\n    class=\"button\"\n    (click)=\"chooseFiles()\"\n  >\n    Save\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Select Files</h4>\n<small\n  ><em>\n    Note: Only files are selectable, not folders. Double click on a folder to\n    navigate into it.\n  </em></small\n>\n<hr />\n<select (ngModelChange)=\"selectSystem($event)\" [(ngModel)]=\"selectedSystem\">\n  <option [ngValue]=\"myDataSystem\">My Data</option>\n  <option [ngValue]=\"communityDataSystem\">Community Data</option>\n  <option [ngValue]=\"publishedDataSystem\">Published Data</option>\n  <optgroup label=\"My Projects\">\n    <option *ngFor=\"let project of projects\" [ngValue]=\"project\">\n      {{ project.description }}\n    </option>\n  </optgroup>\n</select>\n\n<div\n  class=\"fileslisting\"\n  infiniteScroll\n  [infiniteScrollDistance]=\"2\"\n  [infiniteScrollThrottle]=\"100\"\n  [scrollWindow]=\"false\"\n  (scrolled)=\"getFiles()\"\n>\n  <div class=\"clickable\" class=\"grid-x file-row\" (dblclick)=\"toRoot()\">\n    <i class=\"fas fa-folder\"></i>\n    <span> Home </span>\n  </div>\n  <div class=\"clickable\" class=\"grid-x file-row\">\n    <i class=\"fas fa-folder-open\"></i>\n    <span class=\"lineBreak\"> {{ selectedPath }} </span>\n  </div>\n  <div *ngIf=\"retrievalError\" class=\"grid-x file-row\" class=\"error\">\n    Error retrieving files\n  </div>\n  <div\n    class=\"grid-x file-row\"\n    *ngFor=\"let file of filesList; let fileIndex = index\"\n    [ngClass]=\"{ selected: selectedFiles.has(file.path) }\"\n  >\n    <div\n      class=\"clickable\"\n      (click)=\"select($event, file, fileIndex)\"\n      (dblclick)=\"browse(file)\"\n    >\n      <i class=\"fas fa-folder\" *ngIf=\"file.type === 'dir'\"></i>\n      <i class=\"far fa-file\" *ngIf=\"file.type !== 'dir'\"></i>\n      <span> {{ file.name }} </span>\n    </div>\n    <div class=\"size\">\n      {{ file.length | filesize }}\n    </div>\n  </div>\n  <div class=\"grid-x\" *ngIf=\"inProgress\">\n    <div class=\"cell medium-12\">\n      <i class=\"fas fa-spin fa-atom\"></i>\n    </div>\n  </div>\n</div>\n\n<div class=\"button-group\">\n  <button mat-raised-button color=\"basic\" (click)=\"selectAll()\">\n    Select all\n  </button>\n  <button\n    mat-raised-button\n    color=\"warn\"\n    class=\"button warning\"\n    (click)=\"cancel()\"\n  >\n    Done\n  </button>\n  <button\n    mat-raised-button\n    color=\"primary\"\n    class=\"button\"\n    [disabled]=\"!selectedFiles.size\"\n    (click)=\"chooseFiles()\"\n  >\n    Import\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-share-project/modal-share-project.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-share-project/modal-share-project.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Share this project</h4>\n<small\n  ><em>\n    People you share your project with will have full ability to edit and delete\n    this project on Taggit and on HazMapper.\n  </em></small\n>\n\n<form [formGroup]=\"projShareForm\" (ngSubmit)=\"submit()\" id=\"share-project-form\">\n  <mat-form-field>\n    <mat-label>Username:</mat-label>\n    <input matInput type=\"text\" formControlName=\"name\" required=\"true\" />\n  </mat-form-field>\n\n  <div class=\"button-group small\">\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"button small warning\"\n      type=\"button\"\n      (click)=\"close()\"\n    >\n      Close\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      class=\"button small align-right\"\n      type=\"submit\"\n      [disabled]=\"!projShareForm.valid\"\n    >\n      Add Member\n    </button>\n  </div>\n\n  <br />\n  <h5>Current Users</h5>\n  <div *ngFor=\"let user of projectUsers\">\n    <br />\n    <mat-card class=\"card-container\">\n      <span class=\"card-item\">\n        {{ user.username }}\n      </span>\n      <span class=\"card-buttons\">\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"button small warning\"\n          type=\"button\"\n          [disabled]=\"onlyOne\"\n          (click)=\"delete(user.username)\"\n        >\n          <i class=\"fas fa-trash\"></i>\n        </button>\n      </span>\n    </mat-card>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notfound works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-group\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Groups</div>\n  <div *ngIf=\"showSubitem\" class=\"subitem group-subitem\">\n    <!-- TODO redundant functionality radio is just for style -->\n    <form class=\"boxed\">\n      <div\n        *ngFor=\"let group of groups | keyvalue\"\n        (click)=\"selectGroupForm(group.value)\"\n        class=\"box form\"\n      >\n        <input\n          type=\"radio\"\n          [id]=\"group.key\"\n          [value]=\"group.key\"\n          name=\"skills\"\n          [checked]=\"isChecked(group.key)\"\n        />\n        <label\n          class=\"group-container\"\n          style=\"cursor: pointer\"\n          [for]=\"group.key\"\n        >\n          <div class=\"name-group\">\n            {{ group.key }}\n            <svg class=\"box\" width=\"10px\" height=\"10px\">\n              <rect width=\"10px\" height=\"10px\" style=\"fill: #ffffff\" />\n              <rect\n                width=\"8px\"\n                height=\"8px\"\n                x=\"1px\"\n                y=\"1px\"\n                [style.fill]=\"group.value.color\"\n              />\n            </svg>\n          </div>\n          <div class=\"button-group\">\n            <div (click)=\"deleteGroup(group.value)\">\n              <i\n                class=\"fas fa-minus\"\n                matTooltip=\"Delete\"\n                matTooltipPosition=\"below\"\n              >\n              </i>\n            </div>\n            <div (click)=\"openRenameModal(renameModal, group.value)\">\n              <i\n                class=\"fas fa-edit\"\n                matTooltip=\"Rename\"\n                matTooltipPosition=\"below\"\n              >\n              </i>\n            </div>\n            <div (click)=\"openIconSelection(iconModal, group.value)\">\n              <span\n                class=\"fa {{ group.value.icon }}\"\n                matTooltip=\"icons\"\n                matTooltipPosition=\"below\"\n              ></span>\n            </div>\n          </div>\n        </label>\n      </div>\n    </form>\n\n    <ng-template #renameModal>\n      <input\n        matInput\n        #groupRename\n        placeholder=\"Rename Group\"\n        (keyup.enter)=\"renameGroup(groupRename.value)\"\n      />\n      <br />\n      <br />\n      <div class=\"button-group\">\n        <button\n          matDialogClose\n          color=\"primary\"\n          mat-raised-button\n          (click)=\"renameGroup(groupRename.value)\"\n        >\n          Rename\n        </button>\n        <button matDialogClose mat-button>Cancel</button>\n      </div>\n    </ng-template>\n\n    <ng-template #iconModal>\n      <div class=\"iconDropdown\">\n        <select class=\"fa\" [(ngModel)]=\"selectedIcon\">\n          <option\n            class=\"fa\"\n            *ngFor=\"let icon of iconList\"\n            value=\"{{ icon.id }}\"\n            [innerHTML]=\"icon.unicode\"\n          ></option>\n        </select>\n        <br />\n        <br />\n        <div class=\"button-group\">\n          <button\n            matDialogClose\n            color=\"primary\"\n            mat-raised-button\n            (click)=\"saveIcon(selectedIcon)\"\n          >\n            Save\n          </button>\n          <button matDialogClose mat-button>Cancel</button>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <!-- subitem -->\n</div>\n<!-- select-group -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"asset-list\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Image List</div>\n\n  <div *ngIf=\"showSubitem\" class=\"subitem asset-subitem\">\n    <div\n      *ngFor=\"let feature of getActiveFeatures()\"\n      (click)=\"jumpToImage(feature)\"\n      class=\"asset-container\"\n      [ngClass]=\"{ highlight: isActiveFeature(feature) }\"\n    >\n      <div class=\"name-group\">\n        {{ getFeaturePath(feature) }}\n      </div>\n\n      <div class=\"button-group\">\n        <div (click)=\"deleteFeature(feature)\">\n          <i\n            class=\"fas fa-minus\"\n            matTooltip=\"Delete\"\n            matTooltipPosition=\"above\"\n          >\n          </i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-select-group></app-select-group>\n<app-select-image></app-select-image>\n\n<app-tag-generator *ngIf=\"showTagGenerator; else tagImages\"></app-tag-generator>\n<ng-template #tagImages>\n  <app-tag-images></app-tag-images>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-prompt\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\n    <span> Create Tag </span>\n  </div>\n  <!-- subitem-title -->\n\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\n    <form class=\"form-type-form\">\n      <div\n        *ngFor=\"let control of enabledControls; let idx = index\"\n        class=\"box form\"\n      >\n        <input\n          type=\"radio\"\n          [id]=\"control\"\n          value=\"control.toLowerCase()\"\n          name=\"form-type\"\n          [checked]=\"idx === 0\"\n          (change)=\"selectInputForm(control.toLowerCase())\"\n        />\n        <label\n          style=\"cursor: pointer; margin: 3px; padding: 3px; font-size: 10px\"\n          [for]=\"control\"\n          >{{ control }}</label\n        >\n      </div>\n      <!-- form-type-form -->\n    </form>\n\n    <div class=\"form-name\">\n      <mat-form-field class=\"input-label-group\">\n        <mat-label>Label</mat-label>\n        <input\n          matInput\n          placeholder=\"Label\"\n          #labelValue\n          [(ngModel)]=\"labelFilter\"\n          (keyup)=\"inputFormLabel($event)\"\n          name=\"labelFilter\"\n          class=\"tiny\"\n          type=\"text\"\n        />\n      </mat-form-field>\n\n      <ng-container *ngIf=\"formType != 'text'\">\n        <ng-container *ngIf=\"formType == 'color'\">\n          <mat-form-field class=\"input-label-group\">\n            <mat-label>Option Color</mat-label>\n            <input\n              matInput\n              #optionColorValue\n              placeholder=\"Option Color\"\n              #labelValue\n              [(ngModel)]=\"optionColorFilter\"\n              (change)=\"inputFormColor($event)\"\n              name=\"optionColorilter\"\n              class=\"tiny\"\n              type=\"color\"\n            />\n          </mat-form-field>\n        </ng-container>\n\n        <mat-form-field class=\"input-label-group\">\n          <mat-label>Options</mat-label>\n          <div class=\"input-group\">\n            <input\n              matInput\n              #optionValue\n              class=\"input-group-field\"\n              placeholder=\"Option\"\n              type=\"text\"\n              [(ngModel)]=\"optionFilter\"\n              name=\"optionFilter\"\n              (keyup.enter)=\"\n                addOptionItem(optionValue.value);\n                optionValue.value = '';\n                optionColorValue.value = '';\n                clearOption();\n                clearOptionColor()\n              \"\n            />\n          </div>\n          <!-- input-group -->\n        </mat-form-field>\n\n        <div class=\"input-group-button\">\n          <button\n            mat-button\n            color=\"accent\"\n            class=\"button\"\n            (click)=\"\n              addOptionItem(optionValue.value);\n              optionValue.value = '';\n              clearOption()\n            \"\n          >\n            <i class=\"fas fa-plus\"></i>\n          </button>\n        </div>\n        <!-- input-group-button -->\n\n        <ul class=\"form-option-container\">\n          <li *ngFor=\"let opt of formOptions\" class=\"list-group\">\n            <div>\n              {{ opt.label }}\n              <ng-container *ngIf=\"formType == 'color'\">\n                <svg class=\"box\" width=\"10px\" height=\"10px\">\n                  <rect width=\"10px\" height=\"10px\" style=\"fill: #ffffff\" />\n                  <rect\n                    width=\"8px\"\n                    height=\"8px\"\n                    x=\"1px\"\n                    y=\"1px\"\n                    [style.fill]=\"opt.color\"\n                  />\n                </svg>\n              </ng-container>\n            </div>\n            <!-- showopt -->\n            <div class=\"button-group\">\n              <div (click)=\"deleteOption(opt)\">\n                <i\n                  class=\"fas fa-minus\"\n                  matTooltip=\"Delete\"\n                  matTooltipPosition=\"above\"\n                  style=\"cursor: pointer\"\n                >\n                </i>\n              </div>\n              <!-- delete opt -->\n\n              <div (click)=\"openRenameOptionModal(renameOptionModal)\">\n                <i\n                  class=\"fas fa-edit\"\n                  style=\"cursor: pointer\"\n                  matTooltip=\"Rename\"\n                  matTooltipPosition=\"above\"\n                >\n                </i>\n              </div>\n\n              <ng-template #renameOptionModal>\n                <input matInput #optionRename placeholder=\"Rename Option\" />\n                <br />\n                <br />\n                <div class=\"button-group\">\n                  <button\n                    matDialogClose\n                    mat-raised-button\n                    color=\"primary\"\n                    (click)=\"renameOption(opt, optionRename.value)\"\n                  >\n                    Rename\n                  </button>\n                  <button matDialogClose mat-button>Cancel</button>\n                </div>\n              </ng-template>\n            </div>\n            <!-- button group -->\n          </li>\n        </ul>\n      </ng-container>\n    </div>\n    <!-- form-name -->\n\n    <button mat-raised-button color=\"primary\" (click)=\"addFormItem()\">\n      Save\n    </button>\n    <button mat-button color=\"primary\" (click)=\"cancelCreate()\">Cancel</button>\n  </div>\n  <!-- subitem -->\n</div>\n<!-- create-group -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let opt of form.options\" [id]=\"form.label\" class=\"input-group\">\n  <div class=\"form-check form-check\">\n    <label class=\"form-check-label\">\n      <input\n        class=\"form-check-input\"\n        type=\"checkbox\"\n        [checked]=\"isChecked(opt)\"\n        id=\"inlineCheckbox1\"\n        value=\"{{ opt.label }}\"\n        (change)=\"selected($event, opt)\"\n      />\n      {{ opt.label }}\n    </label>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let opt of form.options\" [id]=\"form.label\" class=\"input-group\">\n  <div class=\"form-check form-check\">\n    <label class=\"form-check-label\">\n      <input\n        class=\"form-check-input\"\n        [(ngModel)]=\"chosenTag\"\n        type=\"radio\"\n        id=\"inlineCheckbox3\"\n        name=\"{{ label }}\"\n        value=\"{{ opt.label }}\"\n        (change)=\"updateCheckedTag()\"\n      />\n      {{ opt.label }}\n\n      <svg class=\"box\" width=\"10px\" height=\"10px\">\n        <rect width=\"10px\" height=\"10px\" style=\"fill: #ffffff\" />\n        <rect\n          width=\"8px\"\n          height=\"8px\"\n          x=\"1px\"\n          y=\"1px\"\n          [style.fill]=\"opt.color\"\n        />\n      </svg>\n    </label>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <select\n    class=\"form-control\"\n    [(ngModel)]=\"value\"\n    id=\"field.name\"\n    name=\"field.name\"\n    (change)=\"updateCheckedTag()\"\n  >\n    <option *ngFor=\"let opt of field\" [value]=\"opt.label\">\n      {{ opt.label }}\n    </option>\n  </select>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group row\" *ngFor=\"let tag of field\">\n  <label class=\"col-md-3 form-control-label\" [attr.for]=\"tag.label\">\n    {{ field.label }}\n    <strong class=\"text-danger\" *ngIf=\"tag.required\">*</strong>\n  </label>\n  <div class=\"col-md-9\" [ngSwitch]=\"tag.type\">\n    <app-form-color\n      *ngSwitchCase=\"'color'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></app-form-color>\n    <app-form-textbox\n      *ngSwitchCase=\"'text'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></app-form-textbox>\n    <app-form-dropdown\n      *ngSwitchCase=\"'dropdown'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></app-form-dropdown>\n    <app-form-checkbox\n      *ngSwitchCase=\"'checkbox'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></app-form-checkbox>\n    <app-form-radio\n      *ngSwitchCase=\"'radio'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></app-form-radio>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [formGroup]=\"form\">\n  <div\n    *ngIf=\"!field.value\"\n    class=\"drop-container dropzone\"\n    dropZone\n    (hovered)=\"toggleHover($event)\"\n    (dropped)=\"field.onUpload($event)\"\n    [class.hovering]=\"isHovering\"\n  >\n    <p class=\"m-0\">\n      Drag a file here or\n      <label class=\"upload-button\">\n        <input\n          type=\"file\"\n          multiple=\"\"\n          (change)=\"field.onUpload($event.target.files)\"\n        />\n        browse\n      </label>\n      to upload.\n    </p>\n  </div>\n  <div *ngIf=\"field.value\">\n    <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n    <div class=\"card\">\n      <img class=\"card-img-top\" [src]=\"field.value\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let opt of form.options\" [id]=\"form.label\" class=\"input-group\">\n  <div class=\"form-check form-check\">\n    <label class=\"form-check-label\">\n      <input\n        class=\"form-check-input\"\n        [(ngModel)]=\"value\"\n        type=\"radio\"\n        id=\"inlineCheckbox2\"\n        name=\"{{ label }}\"\n        value=\"{{ opt.label }}\"\n        (change)=\"updateCheckedTag()\"\n      />\n      {{ opt.label }}\n    </label>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <textarea\n    [id]=\"field.name\"\n    rows=\"9\"\n    class=\"form-control\"\n    [placeholder]=\"'notes'\"\n    [(ngModel)]=\"value\"\n    (keyup)=\"updateValue()\"\n  ></textarea>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div [ngSwitch]=\"form.type\" class=\"form-controls\">\n    <ng-container *ngSwitchCase=\"'text'\">\n      <app-form-textbox\n        (formValue)=\"setValue($event)\"\n        [field]=\"form.options\"\n        [form]=\"form\"\n      ></app-form-textbox>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'dropdown'\">\n      <app-form-dropdown\n        (formValue)=\"setValue($event)\"\n        [field]=\"form.options\"\n        [form]=\"form\"\n      ></app-form-dropdown>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <app-form-radio\n        (formValue)=\"setValue($event)\"\n        [field]=\"opt\"\n        [form]=\"form\"\n        label=\"{{ form.label }}\"\n      ></app-form-radio>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <app-form-checkbox\n        (formValue)=\"setValue($event)\"\n        [form]=\"form\"\n      ></app-form-checkbox>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'color'\">\n      <app-form-color\n        (formValue)=\"setValue($event)\"\n        [field]=\"opt\"\n        [form]=\"form\"\n        label=\"{{ form.label }}\"\n        [color]=\"colorArray[form.options.indexOf(opt)]\"\n      ></app-form-color>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tag-forms\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\n    <span> Tag Images </span>\n    <span>\n      <span\n        style=\"cursor: pointer\"\n        (click)=\"showTagGenerator()\"\n        matTooltip=\"Add New Tag Form\"\n        style=\"cursor: pointer; margin-right: 10px\"\n        matTooltipPosition=\"above\"\n      >\n        <i class=\"fas fa-plus\"></i>\n      </span>\n    </span>\n  </div>\n  <!-- subitem-title -->\n\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\n    <div class=\"subitem-scroll\">\n      <div *ngFor=\"let form of formList\">\n        <div class=\"form-item-container\">\n          <div class=\"name-group\">{{ form.label }} ({{ form.type }})</div>\n          <div class=\"button-group\">\n            <div (click)=\"deleteForm(form)\">\n              <i\n                class=\"fas fa-minus\"\n                matTooltip=\"Delete\"\n                matTooltipPosition=\"above\"\n                style=\"cursor: pointer\"\n              >\n              </i>\n            </div>\n            <!-- delete button -->\n\n            <div (click)=\"openRenameOptionModal(renameFormItemModal)\">\n              <i\n                class=\"fas fa-edit\"\n                matTooltip=\"Rename\"\n                matTooltipPosition=\"above\"\n                style=\"cursor: pointer\"\n              >\n              </i>\n            </div>\n\n            <ng-template #renameFormItemModal>\n              <input\n                matInput\n                #formItemRename\n                [(ngModel)]=\"newTagValue\"\n                value=\"{{ form.label }}\"\n                placeholder=\"Rename Form Item\"\n                (keyup.enter)=\"renameForm(form)\"\n              />\n              <br />\n              <br />\n              <div class=\"button-group\">\n                <button\n                  matDialogClose\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"renameForm(form.label)\"\n                >\n                  Rename\n                </button>\n                <button matDialogClose mat-button>Cancel</button>\n              </div>\n            </ng-template>\n            <!-- rename modal -->\n          </div>\n          <!-- button group -->\n        </div>\n        <!-- form-item-container -->\n        <app-form-generator\n          (newValue)=\"setValue($event)\"\n          [form]=\"form\"\n        ></app-form-generator>\n      </div>\n      <div *ngIf=\"formList && formList.length\">\n        <button mat-raised-button color=\"primary\" (click)=\"saveTags()\">\n          Save\n        </button>\n      </div>\n    </div>\n    <!-- subitem scroll -->\n  </div>\n  <!--subitem -->\n</div>\n<!-- tag-forms -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Activate, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activate", function() { return Activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-bar/tag-generator/tag-generator.component */ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
/* harmony import */ var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/side-bar/tag-images/tag-images.component */ "./src/app/components/side-bar/tag-images/tag-images.component.ts");









let Activate = class Activate {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    canActivate(route, state) {
        if (this.authSvc.isLoggedIn()) {
            return true;
        }
        this.authSvc.login();
    }
};
Activate.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Activate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], Activate);

const routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        canActivate: [Activate],
        children: [
            {
                path: 'tagger',
                component: _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__["TagImagesComponent"],
                canActivateChild: [Activate],
            },
            {
                path: 'preset',
                component: _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__["TagGeneratorComponent"],
                canActivateChild: [Activate],
            },
        ],
    },
    { path: 'callback', component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__["CallbackComponent"] },
    { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [Activate],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'viewer';
    }
    ngOnInit() {
        this.authService.login();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.interceptors.ts":
/*!*************************************!*\
  !*** ./src/app/app.interceptors.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor, TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthInterceptor);

let TokenInterceptor = class TokenInterceptor {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    intercept(request, next) {
        if (request.url.indexOf('https://agave.designsafe-ci.org') > -1) {
            if (this.authSvc.isLoggedIn()) {
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + this.authSvc.userToken.token,
                    },
                });
            }
        }
        // we put the JWT on the request to our geoapi API because it is not behind ws02 if in local dev
        // and if user is logged in
        if (request.url.indexOf('http://localhost') > -1 &&
            this.authSvc.isLoggedIn()) {
            // add header
            request = request.clone({
                setHeaders: {
                    'X-JWT-Assertion-designsafe': _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].jwt,
                },
            });
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_filesize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-filesize */ "./node_modules/ngx-filesize/dist/index.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/control-bar/control-bar.component */ "./src/app/components/control-bar/control-bar.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _app_interceptors__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.interceptors */ "./src/app/app.interceptors.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/modal-file-browser/modal-file-browser.component */ "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/image-gallery/image-gallery.component */ "./src/app/components/image-gallery/image-gallery.component.ts");
/* harmony import */ var _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/image-box/image-box.component */ "./src/app/components/image-box/image-box.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-generator.component */ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/side-bar/select-group/select-group.component */ "./src/app/components/side-bar/select-group/select-group.component.ts");
/* harmony import */ var _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/side-bar/select-image/select-image.component */ "./src/app/components/side-bar/select-image/select-image.component.ts");
/* harmony import */ var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/side-bar/tag-generator/tag-generator.component */ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
/* harmony import */ var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/side-bar/tag-images/tag-images.component */ "./src/app/components/side-bar/tag-images/tag-images.component.ts");
/* harmony import */ var _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/modal-create-project/modal-create-project.component */ "./src/app/components/modal-create-project/modal-create-project.component.ts");
/* harmony import */ var _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/modal-current-project/modal-current-project.component */ "./src/app/components/modal-current-project/modal-current-project.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _components_modal_download_selector_modal_download_selector_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/modal-download-selector/modal-download-selector.component */ "./src/app/components/modal-download-selector/modal-download-selector.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_fields_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-fields.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_dropdown_form_dropdown_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_file_form_file_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_textbox_form_textbox_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_fields_form_color_form_color_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.ts");
/* harmony import */ var _components_modal_share_project_modal_share_project_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/modal-share-project/modal-share-project.component */ "./src/app/components/modal-share-project/modal-share-project.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");





// CommonModule for dynamic field































// import { TaggerComponent } from './components/tagger/tagger.component';
// import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';



// import { ImageListComponent } from './components/image-list/image-list.component';





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_25__["MapComponent"],
            _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_26__["MainComponent"],
            _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_28__["ControlBarComponent"],
            _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__["CallbackComponent"],
            _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__["ModalFileBrowserComponent"],
            _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_35__["ImageGalleryComponent"],
            // TaggerComponent,
            // PresetGeneratorComponent,
            _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_36__["ImageBoxComponent"],
            _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_37__["FormGeneratorComponent"],
            _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_38__["SideBarComponent"],
            // ImageListComponent,
            _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_39__["SelectGroupComponent"],
            _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_40__["SelectImageComponent"],
            _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_41__["TagGeneratorComponent"],
            _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_42__["TagImagesComponent"],
            _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_43__["ModalCreateProjectComponent"],
            _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_44__["ModalCurrentProjectComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_48__["MatProgressBar"],
            _components_modal_download_selector_modal_download_selector_component__WEBPACK_IMPORTED_MODULE_50__["ModalDownloadSelectorComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_fields_component__WEBPACK_IMPORTED_MODULE_51__["FormFieldsComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_52__["FormCheckBoxComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_dropdown_form_dropdown_component__WEBPACK_IMPORTED_MODULE_53__["FormDropDownComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_file_form_file_component__WEBPACK_IMPORTED_MODULE_54__["FormFileComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_55__["FormRadioComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_textbox_form_textbox_component__WEBPACK_IMPORTED_MODULE_56__["FormTextBoxComponent"],
            _components_modal_share_project_modal_share_project_component__WEBPACK_IMPORTED_MODULE_58__["ModalShareProjectComponent"],
            _components_side_bar_tag_images_form_generator_form_fields_form_color_form_color_component__WEBPACK_IMPORTED_MODULE_57__["FormColorComponent"],
        ],
        imports: [
            // this is for the ng-tapis library
            ng_tapis__WEBPACK_IMPORTED_MODULE_22__["ApiModule"].forRoot({ rootUrl: 'https://agave.designsafe-ci.org/' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_19__["NgxMasonryModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            ngx_filesize__WEBPACK_IMPORTED_MODULE_21__["FileSizeModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__["MatProgressSpinnerModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__["MatSnackBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_59__["MatCardModule"],
        ],
        providers: [
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                multi: true,
                useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_31__["AuthInterceptor"],
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                multi: true,
                useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_31__["TokenInterceptor"],
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"],
                useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].baseHref,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
        entryComponents: [
            _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__["ModalFileBrowserComponent"],
            _components_modal_download_selector_modal_download_selector_component__WEBPACK_IMPORTED_MODULE_50__["ModalDownloadSelectorComponent"],
            _components_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_43__["ModalCreateProjectComponent"],
            _components_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_44__["ModalCurrentProjectComponent"],
            _components_modal_share_project_modal_share_project_component__WEBPACK_IMPORTED_MODULE_58__["ModalShareProjectComponent"],
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/callback/callback.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/callback/callback.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");




let CallbackComponent = class CallbackComponent {
    constructor(route, auth) {
        this.route = route;
        this.auth = auth;
    }
    ngOnInit() {
        // TODO: For some reason wso2 is sending back a fragment like #access_token=qadad&expires_in=3600
        const frag = this.route.snapshot.fragment;
        const params = new URLSearchParams(frag);
        const token = params.get('access_token');
        const expires_in = +params.get('expires_in');
        this.auth.setToken(token, expires_in);
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./callback.component.scss */ "./src/app/components/callback/callback.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], CallbackComponent);



/***/ }),

/***/ "./src/app/components/control-bar/control-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/control-bar/control-bar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .current-project {\n  padding: 30px;\n  font-size: 14px;\n}\n:host .goods {\n  height: 27px;\n  margin: 0px;\n  padding: 0px;\n}\n:host .toggler {\n  margin-left: 10px;\n}\n:host .picker {\n  display: inline-block;\n}\n:host .group-bar {\n  display: flex;\n  flex-direction: row;\n}\n:host .path-buttons {\n  text-align: center;\n}\n:host .project-menu {\n  margin-left: 10px;\n}\n:host .top-bar {\n  position: fixed;\n  margin-top: -50px;\n  height: 50px;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n:host .my-button {\n  border-radius: 5px;\n  padding: 5px;\n}\n:host .button-spacing {\n  margin-right: 15px;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    flex: 0 1 auto;\n  }\n}\n:host .example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtYmFyL2NvbnRyb2wtYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lwYXJrL3RhZ2dpdDIuMC9zcmMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1iYXIvY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUU7RUFDRSx5QkNiVTtBQ0RkO0FGa0JJO0VBQ0UsbUJBQUE7QUVoQk47QUYyQkU7RUFDRSxTQUFBO0FFekJKO0FGNEJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUUxQko7QUY2QkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUUzQko7QUY4QkU7RUFDRSxpQkFBQTtBRTVCSjtBRitCRTtFQUNFLHFCQUFBO0FFN0JKO0FGZ0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FFOUJKO0FGaUNFO0VBQ0Usa0JBQUE7QUUvQko7QUZrQ0U7RUFDRSxpQkFBQTtBRWhDSjtBRm1DRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFPQSxZQUFBO0FFdkNKO0FGMENFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFeENKO0FGMkNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FFekNKO0FGNENFO0VBQ0Usa0JBQUE7QUUxQ0o7QUY2Q0U7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFRTNDSjtBQUNGO0FGOENFO0VBQ0UsY0FBQTtBRTVDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1iYXIvY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAvLyBtYXJnaW4tdG9wIDQwcHhcbiAgLy8gZGlzcGxheSBibG9ja1xuICAvLyBmb250LXNpemUgMC44ZW1cbiAgLy8gaGVpZ2h0IDI3cHhcbiAgLy8gdmVydGljYWwtYWxpZ24gY2VudGVyXG4gIC8vIHdpZHRoIDEwMCVcbiAgLy8gei1pbmRleCA5OTlcbiAgLy8gYmFja2dyb3VuZC1jb2xvciAjZmZmXG5cbiAgLy8gTk9URSBsb3QtbGFuLWxhYmVsIHdhcyBoZXJlXG5cbiAgLmFjdGl2ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5BY3RpdmU7XG4gIH1cblxuICAubWVudSB7XG4gICAgYnV0dG9uLmRyb3Bkb3duLmJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwLjg1ZW0gMWVtO1xuICAgIH1cbiAgfVxuXG4gIC8vIC5tZW51LmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xuICAvL1x0ei1pbmRleDogMTAwMDA7XG4gIC8vIH1cblxuICAvLyBOT1RFIHN3aXRjaCB3YXMgaGVyZVxuXG4gIC8vIE5PVEUgdGlueSB3YXMgaGVyZVxuICAuYnV0dG9uLnRpbnkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jdXJyZW50LXByb2plY3Qge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmdvb2RzIHtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLnRvZ2dsZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLnBpY2tlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmdyb3VwLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLnBhdGgtYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnByb2plY3QtbWVudSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAudG9wLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvLyBwYWRkaW5nOiA1cHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cblxuICAudG9wLWJhci1yaWdodCAudG9wLWJhci1sZWZ0IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5teS1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuYnV0dG9uLXNwYWNpbmcge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIEBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLnRvcC1iYXIge1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBmbGV4OiAwIDEgYXV0bztcbiAgICB9XG4gIH1cblxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG4iLCIkbGlnaHRCbHVlOiAjMGY4M2JkO1xuJGxpZ2h0R3JleTogI2QzZDNkMztcbiRiYWNrZ3JvdW5kSGlnaGxpZ2h0OiAjYjNlNWZmO1xuJGdyZWVuQWN0aXZlOiAjMWFmZjhjO1xuJEFwcE1lZGl1bUJsdWU6ICMyMmM3ZmY7XG4iLCI6aG9zdCAuYWN0aXZlLXByb2plY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjhjO1xufVxuOmhvc3QgLm1lbnUgYnV0dG9uLmRyb3Bkb3duLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuODVlbSAxZW07XG59XG46aG9zdCAuYnV0dG9uLnRpbnkge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY3VycmVudC1wcm9qZWN0IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmdvb2RzIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuOmhvc3QgLnRvZ2dsZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjpob3N0IC5waWNrZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCAuZ3JvdXAtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5wYXRoLWJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAucHJvamVjdC1tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAudG9wLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuOmhvc3QgLnRvcC1iYXItcmlnaHQgLnRvcC1iYXItbGVmdCB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLm15LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgLmJ1dHRvbi1zcGFjaW5nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgOmhvc3QgLnRvcC1iYXIge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICB9XG59XG46aG9zdCAuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/control-bar/control-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/control-bar/control-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ControlBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBarComponent", function() { return ControlBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");
/* harmony import */ var _modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-file-browser/modal-file-browser.component */ "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
/* harmony import */ var _modal_download_selector_modal_download_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-download-selector/modal-download-selector.component */ "./src/app/components/modal-download-selector/modal-download-selector.component.ts");
/* harmony import */ var _modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-create-project/modal-create-project.component */ "./src/app/components/modal-create-project/modal-create-project.component.ts");
/* harmony import */ var _modal_share_project_modal_share_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-share-project/modal-share-project.component */ "./src/app/components/modal-share-project/modal-share-project.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modal-current-project/modal-current-project.component */ "./src/app/components/modal-current-project/modal-current-project.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/tapis-files.service */ "./src/app/services/tapis-files.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/feature.service */ "./src/app/services/feature.service.ts");























let ControlBarComponent = class ControlBarComponent {
    constructor(projectsService, geoDataService, bsModalService, groupsService, formsService, authService, cdr, filesService, router, dialog, scrollService, notificationsService, featureService) {
        this.projectsService = projectsService;
        this.geoDataService = geoDataService;
        this.bsModalService = bsModalService;
        this.groupsService = groupsService;
        this.formsService = formsService;
        this.authService = authService;
        this.cdr = cdr;
        this.filesService = filesService;
        this.router = router;
        this.dialog = dialog;
        this.scrollService = scrollService;
        this.notificationsService = notificationsService;
        this.featureService = featureService;
        this.featureList = [];
        this.mapMouseLocation = new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](0, 0);
        this.showTagger = false;
        this.invalidNameError = false;
        this.existingNameError = false;
        this.foundFilePaths = [];
    }
    ngOnInit() {
        this.filesService.getState();
        this.featureService.features$.subscribe((fc) => {
            this.features = fc;
            if (this.features != undefined) {
                this.featureList = fc.features.filter((feature) => feature.assets.length &&
                    feature.initialAsset() &&
                    feature.featureType() === 'image');
            }
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
            this.groupsExist = next && next.size ? true : false;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["combineLatest"])(this.geoDataService.activeGroup, this.geoDataService.groupsFeatures).subscribe(([grp, grpFts]) => {
            this.activeGroup = grp;
            this.groupsFeatures = grpFts;
            if (grp && grpFts) {
                this.activeGroupFeatures = grpFts.get(grp.name);
                if (this.activeGroupFeatures) {
                    this.activeGroupFeaturesRotate = [...this.activeGroupFeatures];
                }
            }
        });
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
        });
        this.geoDataService.activeFeature.subscribe((next) => {
            this.activeFeature = next;
        });
        this.notificationsService.notifications.subscribe((next) => {
            const hasSuccessNotification = next.some((note) => note.status === 'success');
            const hasFailureNotification = next.some((note) => note.status === 'error');
            if (hasSuccessNotification) {
                this.geoDataService.getFeatures(this.selectedProject.id);
            }
            if (hasFailureNotification) {
                next.forEach((item) => {
                    // Compiles a list of all necessary files to import via the alt method
                    // The substring from 0 to 16 contains the phrase "Error importing", everything after this is the file path
                    if (item.message.substring(0, 16) == 'Error importing ' &&
                        !this.foundFilePaths.some((filePath) => filePath === item.message.substring(16))) {
                        const path = item.message.substring(16);
                        this.geoDataService.uploadNewFeature(this.selectedProject.id, this.createBlankFeature(), path);
                        this.foundFilePaths.push(path);
                    }
                });
                this.geoDataService.getFeatures(this.selectedProject.id);
            }
        });
        this.authService.currentUser.subscribe((next) => (this.currentUser = next));
        this.projectsService.getProjects();
        this.projectsService.projects.subscribe((projects) => {
            this.projects = projects;
            if (this.projects.length) {
                let lastProj;
                // try {
                //   //restores view to the last visited project from local storage
                //   lastProj = JSON.parse(window.localStorage.getItem('lastProj'));
                //   // console.log(lastProj);
                // } catch (error) {
                //   lastProj = this.projectsService.setActiveProject(this.projects[0]);
                // }
                lastProj = this.projectsService.setActiveProject(this.projects[0]);
                // If lastProj is null, then there is no project saved, or can be found, default to the first project in the list
                if (lastProj == 'none' || lastProj == null) {
                    lastProj = this.projects[0];
                }
                this.projectsService.setActiveProject(lastProj);
            }
            this.groupsService.selectedImages.subscribe((next) => {
                this.selectedImages = next;
            });
            this.groupsService.showTagger.subscribe((next) => {
                this.showTagger = next;
            });
        });
        this.projectsService.activeProject.subscribe((next) => {
            this.selectedProject = next;
            this.getDataForProject(this.selectedProject);
            // retrieves uuid for project, formats result into a link to that Hazmapper map
            console.log(next.uuid);
            this.hazmapperLink =
                'https://hazmapper.tacc.utexas.edu/hazmapper/project/' + next.uuid;
        });
        this.geoDataService.mapMouseLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1)).subscribe((next) => {
            this.mapMouseLocation = next;
        });
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    clearAll() {
        this.groupsService.unselectAllImages();
    }
    selectProject(p) {
        this.projectsService.setActiveProject(p);
        this.getDataForProject(p);
    }
    getDataForProject(p) {
        this.geoDataService.getFeatures(p.id);
        this.geoDataService.getOverlays(p.id);
        this.geoDataService.getPointClouds(p.id);
    }
    openFilePicker() {
        // Refreshes the list of found paths used in importing images without Geo tagging
        this.foundFilePaths = [];
        const modal = this.dialog.open(_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__["ModalFileBrowserComponent"]);
        modal.afterClosed().subscribe((files) => {
            if (files != null) {
                this.geoDataService.importFileFromTapis(this.selectedProject.id, files);
            }
        });
    }
    // Creates a feature with a long/lat value of 0,0 and no associated image. Used in alternate image inport
    // I think if we want a placeholder image, we can add it here.
    createBlankFeature() {
        const blankFeature = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [0, 0],
            },
            properties: {},
        };
        return blankFeature;
    }
    openDownloadSelector(fileName) {
        const modal = this.dialog.open(_modal_download_selector_modal_download_selector_component__WEBPACK_IMPORTED_MODULE_8__["ModalDownloadSelectorComponent"]);
        let path;
        modal.afterClosed().subscribe((passbackData) => {
            path = passbackData;
            this.saveFile(path[3] == '.json', true, path[0], path[1], path[2]);
        });
    }
    openCreateProjectModal() {
        this.dialog.open(_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_9__["ModalCreateProjectComponent"], {
            height: '400px',
            width: '600px',
        });
    }
    openShareProjectModal() {
        this.dialog.open(_modal_share_project_modal_share_project_component__WEBPACK_IMPORTED_MODULE_10__["ModalShareProjectComponent"], {
            height: '400px',
            width: '600px',
        });
    }
    openProjectModal(project) {
        const modal = this.dialog.open(_modal_current_project_modal_current_project_component__WEBPACK_IMPORTED_MODULE_17__["ModalCurrentProjectComponent"], {
            height: '400px',
            width: '600px',
            data: {
                id: project.id,
                name: project.name,
                description: project.description,
                uuid: project.uuid,
            },
        });
        modal.afterClosed().subscribe((passbackData) => {
            this.projectsService.setActiveProject(this.projects[0]);
        });
    }
    addGroup(name) {
        this.groupName = name;
        if (!name || 0 === name.length) {
            this.invalidNameError = true;
            this.existingNameError = false;
        }
        else if (this.groups.get(name)) {
            this.invalidNameError = false;
            this.existingNameError = true;
        }
        else {
            this.invalidNameError = false;
            this.existingNameError = false;
            const newGroup = this.geoDataService.createNewGroup(this.selectedProject.id, this.selectedImages, name);
            this.dialog.closeAll();
            this.groupsService.unselectAllImages();
        }
    }
    openAddGroupModal(template) {
        this.dialog.open(template);
    }
    toggleTagger() {
        if (!this.showTagger) {
            this.scrollService.setScrollRestored(true);
            const [initialGroupName] = this.groupsFeatures.keys();
            const activeGroupFeatures = this.groupsFeatures.get(initialGroupName);
            const activeGroup = this.groups.get(initialGroupName);
            this.geoDataService.setActiveGroup(activeGroup);
            this.groupsService.setShowTagGenerator(false);
            this.groupsService.unselectAllImages();
        }
        else {
            this.scrollService.setScrollPosition();
        }
        this.groupsService.toggleTagger();
    }
    getAssetDisplay() {
        return this.activeGroupFeature.featureShortPath();
    }
    otherPath(dir) {
        if (dir) {
            this.activeGroupFeaturesRotate.push(this.activeGroupFeaturesRotate.shift());
        }
        else {
            this.activeGroupFeaturesRotate.unshift(this.activeGroupFeaturesRotate.pop());
        }
        this.activeGroupFeature = this.activeGroupFeaturesRotate[0];
        this.geoDataService.setActiveGroupFeature(this.activeGroupFeature);
    }
    // saves project as a CSV file by first organizing a JSON or a CSV and converting it. Saves to either MyData or local
    // I apologize in advance for this mess of a function -Ben
    // This really needs to be split into something like 3 separate functions
    saveFile(isJSON, forExport = false, systemID = '', path = '', fileName) {
        let CSVHolder = 'FeatureID,longitude,latitude,src';
        let JSONHolder = '';
        let projID = '';
        let tagsPresent = true;
        let headerComplete = false; // If true, then the full csv header info has been compiled
        let headerTagOptions = 0; // Controls how many tagOption columns are in the final CSV
        this.featureList.forEach((element) => {
            // Retrieves project ID for building a filename
            projID = element.project_id;
            // retrieves longitude and latitude values as an array
            const coordinates = element.geometry.coordinates;
            // creates image source URL from environment and cleans up URL to a usable link
            let featureSource = _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].apiUrl + '/assets/' + element.assets[0].path;
            featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
            // Grabs group data
            // Group data can be accessed from the feature, through the properties element
            // If the image doesn't have a group, a placeholder is given
            // NOTE: future group properties can be accessed in the same way
            let group, styles, tag;
            try {
                try {
                    group = element.properties.group;
                }
                catch (_a) {
                    group = [
                        {
                            color: '#000000',
                            name: 'N/A',
                            icon: 'fa-house-damage',
                        },
                    ];
                }
                try {
                    styles = element.properties.style;
                }
                catch (_b) {
                    styles = [];
                }
                try {
                    tag = element.properties.tag;
                }
                catch (_c) {
                    tag = [];
                }
                // If groups are present on the data, add header data
                if (group.length > 0 && !headerComplete) {
                    CSVHolder += ',groupName,groupColor,groupIcon';
                }
                // Check if the tag var has any data, if so, add new lines to the header
                if (tag != undefined && tagsPresent && !headerComplete) {
                    // Add a few more lines to the holder to accomodate tags
                    CSVHolder += ',Icon,Color,tagType,tagSelection';
                    tag.forEach((tag) => {
                        let tempTagOptionNum = 0;
                        tag.options.forEach((option) => {
                            tempTagOptionNum++;
                            if (tempTagOptionNum > headerTagOptions) {
                                CSVHolder += ',tagOption';
                                headerTagOptions = tempTagOptionNum;
                            }
                        });
                    });
                    if (!headerComplete) {
                        CSVHolder += '\r\n';
                        tagsPresent = false;
                        headerComplete = true;
                    }
                }
                else if (!headerComplete) {
                    // If not, indent the last line.
                    CSVHolder += '\r\n';
                    headerComplete = true;
                }
            }
            catch (error) { }
            if (isJSON) {
                // Compile the data it into a JSON
                JSONHolder +=
                    this.compileJSON(coordinates, element.id, featureSource, group, tag, styles) + ', \n';
            }
            else {
                // Compiles the attributes into a CSV format
                // If there is no groups for the feature, output without group info
                if (group == undefined) {
                    // Indents CSV header.
                    CSVHolder += '\r\n';
                    // Compiles data to a line of a CSV, and adds it to a growing full CSV file
                    // 			  featureID			 Longitude				Latitude			   src
                    const tempCSV = element.id +
                        ',' +
                        coordinates[0] +
                        ',' +
                        coordinates[1] +
                        ',' +
                        featureSource +
                        '\r\n';
                    CSVHolder += tempCSV;
                }
                else {
                    group.forEach((group) => {
                        // If tags exist, try to add each tag to the CSV
                        if (tag != undefined) {
                            try {
                                tag.forEach((tag) => {
                                    // If the tag is in the group, compile a row
                                    // TODO: If a group doesn't have a tag, it doesn't get printed at all
                                    if (true) {
                                        // (tag.groupName === group.name) {
                                        // 			  featureID			 Longitude				Latitude			   src
                                        let tempCSV = element.id +
                                            ',' +
                                            coordinates[0] +
                                            ',' +
                                            coordinates[1] +
                                            ',' +
                                            featureSource +
                                            ',' +
                                            // groupName			groupColor			groupIcon		   Icon					 Color
                                            group.name +
                                            ',' +
                                            group.color +
                                            ',' +
                                            group.icon +
                                            ',' +
                                            styles.faIcon +
                                            ',' +
                                            styles.color +
                                            ',' +
                                            // tagType			tagOption(This is repeated a lot)
                                            tag.type +
                                            ',' +
                                            tag.extra[0].option;
                                        tag.options.forEach((option) => {
                                            // Save each option in the tag to the CSV
                                            // Adds just the label to the CSV, we can reconstruct the key from that.
                                            tempCSV += ',' + option.label;
                                        });
                                        tempCSV += '\r\n';
                                        // And adds it to a growing full CSV file
                                        CSVHolder += tempCSV;
                                    }
                                });
                            }
                            catch (_a) {
                                try {
                                    // If the above fails, attempt to construct a line with group data
                                    // 			  featureID			 Longitude				Latitude			   src
                                    const tempCSV = element.id +
                                        ',' +
                                        coordinates[0] +
                                        ',' +
                                        coordinates[1] +
                                        ',' +
                                        featureSource +
                                        ',' +
                                        // groupName			groupColor			groupIcon
                                        group.name +
                                        ',' +
                                        group.color +
                                        ',' +
                                        group.icon +
                                        '\r\n';
                                    CSVHolder += tempCSV;
                                }
                                catch (error) {
                                    // If all else fails, It writes no data on an error, so output the groupless data
                                    // 			  featureID			 Longitude				Latitude			   src
                                    const tempCSV = element.id +
                                        ',' +
                                        coordinates[0] +
                                        ',' +
                                        coordinates[1] +
                                        ',' +
                                        featureSource +
                                        '\r\n';
                                    CSVHolder += tempCSV;
                                }
                            }
                        }
                        else {
                            // Compiles data to a line of a CSV
                            // 			  featureID			 Longitude				Latitude			   src
                            const tempCSV = element.id +
                                ',' +
                                coordinates[0] +
                                ',' +
                                coordinates[1] +
                                ',' +
                                featureSource +
                                ',' +
                                // groupName			groupColor			groupIcon
                                group.name +
                                ',' +
                                group.color +
                                ',' +
                                group.icon +
                                '\r\n';
                            // And adds it to a growing full CSV file
                            CSVHolder += tempCSV;
                        }
                    });
                }
            }
        });
        let content;
        let extension;
        // determine whether the file is wanted as a JSON or a CSV
        if (isJSON) {
            content = JSONHolder;
            extension = '.json';
        }
        else {
            content = CSVHolder;
            extension = '.csv';
        }
        // If the function is marked for export to Design Safe, route through export, otherwise, download the file
        if (forExport) {
            fileName == ''
                ? (fileName = projID + extension)
                : (fileName += extension);
            this.filesService.export(systemID, path, fileName, extension, content);
        }
        else {
            this.download(content, extension, projID);
        }
    }
    compileJSON(coordinates, featureID, featureSource, groups = [], tags = [], style) {
        let compiledJSON = '';
        let transferJSON;
        // Add the most basic information to the compiled JSON
        transferJSON = {
            longitude: coordinates[0],
            latitude: coordinates[1],
            src: featureSource,
        };
        compiledJSON += JSON.stringify(transferJSON);
        if (groups.length != 0) {
            groups.forEach((group) => {
                // At this point, group info should be added,
                // If tags are set to a default value, there are none present, compile without tag information
                transferJSON = {
                    groupName: group.name,
                    groupColor: group.color,
                };
                compiledJSON += JSON.stringify(transferJSON);
                if (tags.length > 0) {
                    // Compile a JSON with full tag information
                    tags.forEach((tag) => {
                        if (tag.feature == featureID) {
                            transferJSON = {
                                icon: style.faIcon,
                                'icon color': style.color,
                                'tag name': tag.label,
                                'tag type': tag.type,
                                'tag selection': tag.extra[0].option,
                            };
                            compiledJSON += JSON.stringify(transferJSON);
                        }
                    });
                }
            });
        }
        // If the above failed, compile the minimum JSON
        if (compiledJSON == '') {
            transferJSON = {
                longitude: coordinates[0],
                latitude: coordinates[1],
                src: featureSource,
            };
            compiledJSON += JSON.stringify(transferJSON);
        }
        return compiledJSON;
    }
    download(content, extension, projID) {
        // Creates a download link in typescript through a blob
        const blob = new Blob(['\ufeff' + content], {
            type: 'text/csv;charset=utf-8;',
        });
        const download = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const filename = 'taggit-proj-' + projID;
        // checks if the browser is Safari or otherwise, if so open download in new window
        // Its a quirk of those browsers that they don't allow same-page downloads
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            download.setAttribute('target', '_blank');
        }
        // Sets up the link, and simulates a click
        download.setAttribute('href', url);
        download.setAttribute('download', filename + extension);
        download.style.visibility = 'hidden';
        document.body.appendChild(download);
        download.click();
        document.body.removeChild(download);
    }
};
ControlBarComponent.ctorParameters = () => [
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"] },
    { type: ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_12__["GroupsService"] },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_13__["FormsService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_19__["TapisFilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_20__["ScrollService"] },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_21__["NotificationsService"] },
    { type: src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_22__["FeatureService"] }
];
ControlBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-bar.component.scss */ "./src/app/components/control-bar/control-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
        _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"],
        ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_12__["GroupsService"],
        _services_forms_service__WEBPACK_IMPORTED_MODULE_13__["FormsService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_19__["TapisFilesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"],
        src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_20__["ScrollService"],
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_21__["NotificationsService"],
        src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_22__["FeatureService"]])
], ControlBarComponent);



/***/ }),

/***/ "./src/app/components/image-box/image-box.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/image-box/image-box.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .img-container {\n  position: relative;\n}\n:host .img-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: default;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s ease;\n  backface-visibility: hidden;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .top-overlay {\n  display: flex;\n  flex-direction: row;\n  transition: 0.3s ease;\n  opacity: 0;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n  text-align: center;\n}\n:host .bottom-overlay {\n  display: flex;\n  flex-direction: row;\n  transition: 0.3s ease;\n  opacity: 1;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  text-align: center;\n}\n:host .img-container:hover img {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay:hover {\n  opacity: 1;\n}\n:host .image-option {\n  opacity: 0.9;\n  background-color: white;\n  display: flex;\n  color: black;\n  width: 40px;\n  height: 30px;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 3px;\n  justify-content: center;\n  align-items: center;\n}\n:host .image-option:hover {\n  opacity: 1;\n}\n:host .image-option .fas {\n  top: 5px;\n}\n:host .img-selected {\n  border: solid #0191ff;\n  border-width: 5px;\n}\n:host .img-unselected {\n  border: solid #fff;\n  border-width: 5px;\n}\n:host .group-tags {\n  opacity: 0.9;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  height: 30px;\n  border-radius: 5px;\n  padding: 5px;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n}\n:host .center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  transition: 0.3s ease;\n  align-items: center;\n}\n:host .center .inner-del {\n  opacity: 0;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n:host .center:hover .inner-del {\n  opacity: 1;\n}\n:host .box {\n  padding: 1px;\n}\n.center-temp {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.center-temp .inner-del-temp {\n  opacity: 0;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\n.center-temp:hover .inner-del-temp {\n  opacity: 0.5;\n}\n.zoom-content {\n  display: flex;\n  flex-direction: column;\n  max-height: 700px;\n}\n.zoom-content .img-container {\n  overflow-y: scroll;\n  width: 100%;\n  height: 100%;\n  background-color: #e7e7e7;\n}\n.zoom-content .img-details {\n  display: flex;\n  flex-direction: row;\n  margin-top: 24px;\n  background-color: #e7e7e7;\n  align-items: center;\n  text-align: center;\n}\n.zoom-content .title {\n  background-color: #ccc;\n  padding: 5px;\n}\n.zoom-content .detail-container {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  padding: 5px;\n}\n.zoom-content .detail-contents {\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  background-color: #fff;\n}\n.zoom-content .detail-item {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWJveC9pbWFnZS1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURLRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTEo7QURVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ1ZKO0FEZUU7RUFDRSxZQUFBO0FDYko7QURnQkU7RUFDRSxZQUFBO0FDZEo7QURpQkU7RUFDRSxVQUFBO0FDZko7QURrQkU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNoQko7QURtQkU7RUFDRSxVQUFBO0FDakJKO0FEb0JFO0VBQ0UsUUFBQTtBQ2xCSjtBRHFCRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNuQko7QURzQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtBQ3ZCSjtBRHdCSTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUN0Qk47QUQyQkk7RUFDRSxVQUFBO0FDekJOO0FENkJFO0VBQ0UsWUFBQTtBQzNCSjtBRCtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7QUM3QkY7QUQ4QkU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDNUJKO0FEaUNFO0VBQ0UsWUFBQTtBQzlCSjtBRGtDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDL0JGO0FEaUNFO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDaENKO0FEbUNFO0VBSUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQ0o7QUR1Q0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNyQ0o7QUR3Q0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ3RDSjtBRHlDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ3ZDSjtBRDBDRTtFQUNFLFlBQUE7QUN4Q0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWJveC9pbWFnZS1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC50b3Atb3ZlcmxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBUT0RPIG1ha2UgaXQgd29yayB3aXRoIHdpbmRvd3MgYW5kIHRyYW5zZm9ybTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAvLyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAuYm90dG9tLW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gVE9ETyBtYWtlIGl0IHdvcmsgd2l0aCB3aW5kb3dzIGFuZCB0cmFuc2Zvcm0gKG9yIHBvc3Rjc3MgcHJlZml4KTtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTs7XG4gICAgLy8gLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOztcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgLmltZy1jb250YWluZXI6aG92ZXIgLnRvcC1vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICAuaW1nLWNvbnRhaW5lcjpob3ZlciAudG9wLW92ZXJsYXk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaW1hZ2Utb3B0aW9uIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5pbWFnZS1vcHRpb246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaW1hZ2Utb3B0aW9uIC5mYXMge1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLmltZy1zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAjMDE5MWZmO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICB9XG5cbiAgLmltZy11bnNlbGVjdGVkIHtcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cblxuICAuZ3JvdXAtdGFncyB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuXG4gIC5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmlubmVyLWRlbCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5jZW50ZXI6aG92ZXIge1xuICAgIC5pbm5lci1kZWwge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAuYm94IHtcbiAgICBwYWRkaW5nOiAxcHg7XG4gIH1cbn1cblxuLmNlbnRlci10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmlubmVyLWRlbC10ZW1wIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmNlbnRlci10ZW1wOmhvdmVyIHtcbiAgLmlubmVyLWRlbC10ZW1wIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuLnpvb20tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xuXG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLy8gb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICB9XG5cbiAgLmltZy1kZXRhaWxzIHtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRldGFpbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRldGFpbC1jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmRldGFpbC1pdGVtIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbiIsIjpob3N0IC5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmltZy1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC50b3Atb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5ib3R0b20tb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuaW1nLWNvbnRhaW5lcjpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG59XG46aG9zdCAuaW1nLWNvbnRhaW5lcjpob3ZlciAudG9wLW92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjk7XG59XG46aG9zdCAuaW1nLWNvbnRhaW5lcjpob3ZlciAudG9wLW92ZXJsYXk6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgLmltYWdlLW9wdGlvbiB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5pbWFnZS1vcHRpb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgLmltYWdlLW9wdGlvbiAuZmFzIHtcbiAgdG9wOiA1cHg7XG59XG46aG9zdCAuaW1nLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiBzb2xpZCAjMDE5MWZmO1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5pbWctdW5zZWxlY3RlZCB7XG4gIGJvcmRlcjogc29saWQgI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuZ3JvdXAtdGFncyB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xufVxuOmhvc3QgLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY2VudGVyIC5pbm5lci1kZWwge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5jZW50ZXI6aG92ZXIgLmlubmVyLWRlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCAuYm94IHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uY2VudGVyLXRlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jZW50ZXItdGVtcCAuaW5uZXItZGVsLXRlbXAge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRlci10ZW1wOmhvdmVyIC5pbm5lci1kZWwtdGVtcCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnpvb20tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xufVxuLnpvb20tY29udGVudCAuaW1nLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbi56b29tLWNvbnRlbnQgLmltZy1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnpvb20tY29udGVudCAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uem9vbS1jb250ZW50IC5kZXRhaWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uem9vbS1jb250ZW50IC5kZXRhaWwtY29udGVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uem9vbS1jb250ZW50IC5kZXRhaWwtaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/image-box/image-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/image-box/image-box.component.ts ***!
  \*************************************************************/
/*! exports provided: ImageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBoxComponent", function() { return ImageBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/feature.service */ "./src/app/services/feature.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");









let ImageBoxComponent = class ImageBoxComponent {
    constructor(geoDataService, groupsService, projectsService, dialog, scrollService, featureService) {
        this.geoDataService = geoDataService;
        this.groupsService = groupsService;
        this.projectsService = projectsService;
        this.dialog = dialog;
        this.scrollService = scrollService;
        this.featureService = featureService;
        this.status = false; // Controls the whether or not an image box is selected or not
        this.imageSelected = 'img-unselected'; // Controls the whether or not an image box is selected or not
        this.hasGroup = false;
        this.colors = [];
    }
    ngOnInit() {
        // TODO: put this in models
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        let featureSource;
        if (this.feature.assets[0].path != '../../images/Image-not-found.png') {
            featureSource =
                this.environment.apiUrl + '/assets/' + this.feature.assets[0].path;
        }
        else {
            featureSource = this.feature.assets[0].path;
        }
        featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
        this.featureSource = featureSource;
        this.coordinates = this.feature.geometry.coordinates;
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.groupsService.selectedImages.subscribe((next) => {
            this.selectedImages = next;
            this.imageSelected = this.groupsService.imageSelected(this.feature)
                ? 'img-selected'
                : 'img-unselected';
        });
        this.featurePath = this.feature.featurePath();
    }
    imageSelect() {
        this.groupsService.toggleImageSelect(this.feature);
    }
    imageZoom(template) {
        this.dialog.open(template);
    }
    imageDelete() {
        const featureService = this.featureService;
        this.selectedImages.forEach(function (value) {
            featureService.deleteFeature(value);
        });
        this.groupsService.unselectAllImages();
        this.scrollService.setScrollRestored(true);
    }
    openMoreGroupsModal(template) {
        this.dialog.open(template);
    }
    openImageDeleteModal(template) {
        this.scrollService.setScrollPosition();
        this.dialog.open(template);
    }
    deleteFromGroup(feature, group) {
        this.geoDataService.deleteGroupFeatures(this.activeProject.id, [feature], group);
    }
    openImageAddModal(template) {
        this.scrollService.setScrollPosition();
        this.dialog.open(template);
    }
    addGroup(group) {
        this.geoDataService.createGroupFeatures(this.activeProject.id, this.selectedImages, this.groups.get(group.name));
        this.groupsService.unselectAllImages();
        this.scrollService.setScrollRestored(true);
    }
};
ImageBoxComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__["GeoDataService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_7__["GroupsService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__["ScrollService"] },
    { type: src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_3__["FeatureService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageBoxComponent.prototype, "feature", void 0);
ImageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-box.component.scss */ "./src/app/components/image-box/image-box.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__["GeoDataService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_7__["GroupsService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__["ScrollService"],
        src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_3__["FeatureService"]])
], ImageBoxComponent);



/***/ }),

/***/ "./src/app/components/image-gallery/image-gallery.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-gallery/image-gallery.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .img-list-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1em;\n  height: 100%;\n  padding: 1em;\n}\n:host #no-img {\n  font-size: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n}\n:host #no-proj {\n  font-size: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n}\n:host #new-proj {\n  font-size: 32px;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n:host app-image-box {\n  height: 100%;\n}\n:host .masonry-item {\n  width: 200px;\n}\n:host img-spin {\n  position: relative;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n:host load-spin {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n:host .side-bar-container {\n  background-color: #f1f1f1;\n  position: fixed;\n  width: 25%;\n  margin-right: 0px;\n  height: calc(100vh - 50px);\n  right: 0;\n}\n:host .success {\n  margin-right: 20%;\n}\n:host .danger {\n  margin-right: 0%;\n}\n:host #gallery-container-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  margin-top: 0px;\n}\n:host #loading-load {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  flex-direction: column;\n  margin-top: 50px;\n}\n:host #gallery-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n:host #gallery-container .gallery-image {\n  height: 100%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n:host #gallery-container .gallery-image img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .imager {\n  width: 75%;\n  height: calc(100vh - 50px);\n  background-color: #fefefe;\n}\n:host .view-image {\n  max-width: 100%;\n  height: auto;\n}\n:host .gallery-btn {\n  width: 35px;\n  height: 35px;\n  background: #000;\n  color: #fff;\n  text-align: center;\n  line-height: 35px;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  font-size: 20px;\n  box-sizing: border-box;\n  padding-left: 2px;\n  position: fixed;\n  bottom: 10px;\n}\n:host .gallery-btn:hover {\n  background: #222;\n}\n:host .gallery-close {\n  top: 10px;\n}\n:host .gallery-close .gallery-next {\n  right: 10px;\n}\n:host .gallery-prev {\n  right: 50px;\n}\n:host .gallery-prev .gallery-next {\n  bottom: 10px;\n}\n@media (min-width: 478px) {\n  :host .img-list-container img:nth-child(3n):not(last-of-type) {\n    grid-row-end: span 2;\n  }\n}\n@media (max-width: 768px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n}\n@media (max-width: 450px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKO0FES0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9FO0VBQ0UsWUFBQTtBQ0xKO0FEUUU7RUFDRSxZQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEWUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUdBLFFBQUE7QUNaSjtBRGVFO0VBQ0UsaUJBQUE7QUNiSjtBRGdCRTtFQUNFLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDakJKO0FEcUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRHVCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3ZCSjtBRDRCRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMxQko7QUQ2QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDM0JKO0FEOEJFO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUM1Qko7QUQrQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQzdCSjtBRGdDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFJQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUM5Qko7QURpQ0U7RUFDRSxnQkFBQTtBQy9CSjtBRGtDRTtFQUNFLFNBQUE7QUNoQ0o7QURtQ0U7RUFDRSxXQUFBO0FDakNKO0FEb0NFO0VBQ0UsV0FBQTtBQ2xDSjtBRHFDRTtFQUNFLFlBQUE7QUNuQ0o7QURzQ0U7RUFDRTtJQUNFLG9CQUFBO0VDcENKO0FBQ0Y7QUR1Q0U7RUFDRTtJQUNFLDJEQUFBO0VDckNKO0FBQ0Y7QUR3Q0U7RUFDRTtJQUNFLDJEQUFBO0VDdENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG5cbiAgI25vLWltZyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgLy8gei1pbmRleDogLTEwO1xuICB9XG5cbiAgI25vLXByb2oge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG5cbiAgI25ldy1wcm9qIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBhcHAtaW1hZ2UtYm94IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWFzb25yeS1pdGVtIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICBpbWctc3BpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICBsb2FkLXNwaW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICAvLyBNYWtlIG92ZXJmbG93IGZvciB0aGlzIGhpZGRlblxuICAuc2lkZS1iYXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5zdWNjZXNzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgfVxuXG4gIC5kYW5nZXIge1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cblxuICAjZ2FsbGVyeS1jb250YWluZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcbiAgICAvLyB6LWluZGV4OiAtMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAvLyB6LWluZGV4OiAtMTtcbiAgfVxuXG4gICNsb2FkaW5nLWxvYWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgI2dhbGxlcnktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcbiAgICAvLyB6LWluZGV4OiAtMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLy8gei1pbmRleDogLTE7XG4gIH1cblxuICAjZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2dhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuaW1hZ2VyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIH1cblxuICAudmlldy1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5nYWxsZXJ5LWJ0biB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmdhbGxlcnktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB9XG5cbiAgLmdhbGxlcnktY2xvc2Uge1xuICAgIHRvcDogMTBweDtcbiAgfVxuXG4gIC5nYWxsZXJ5LWNsb3NlIC5nYWxsZXJ5LW5leHQge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmdhbGxlcnktcHJldiB7XG4gICAgcmlnaHQ6IDUwcHg7XG4gIH1cblxuICAuZ2FsbGVyeS1wcmV2IC5nYWxsZXJ5LW5leHQge1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NzhweCkge1xuICAgIC5pbWctbGlzdC1jb250YWluZXIgaW1nOm50aC1jaGlsZCgzbik6bm90KGxhc3Qtb2YtdHlwZSkge1xuICAgICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDI7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuaW1nLWxpc3QtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG59XG46aG9zdCAjbm8taW1nIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuOmhvc3QgI25vLXByb2oge1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwdmg7XG59XG46aG9zdCAjbmV3LXByb2oge1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgYXBwLWltYWdlLWJveCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogMjAwcHg7XG59XG46aG9zdCBpbWctc3BpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46aG9zdCBsb2FkLXNwaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOmhvc3QgLnNpZGUtYmFyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICByaWdodDogMDtcbn1cbjpob3N0IC5zdWNjZXNzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG46aG9zdCAuZGFuZ2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cbjpob3N0ICNnYWxsZXJ5LWNvbnRhaW5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuOmhvc3QgI2xvYWRpbmctbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOmhvc3QgI2dhbGxlcnktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAjZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0ICNnYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLmltYWdlciB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuOmhvc3QgLnZpZXctaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IC5nYWxsZXJ5LWJ0biB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG46aG9zdCAuZ2FsbGVyeS1jbG9zZSB7XG4gIHRvcDogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LWNsb3NlIC5nYWxsZXJ5LW5leHQge1xuICByaWdodDogMTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LXByZXYge1xuICByaWdodDogNTBweDtcbn1cbjpob3N0IC5nYWxsZXJ5LXByZXYgLmdhbGxlcnktbmV4dCB7XG4gIGJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NzhweCkge1xuICA6aG9zdCAuaW1nLWxpc3QtY29udGFpbmVyIGltZzpudGgtY2hpbGQoM24pOm5vdChsYXN0LW9mLXR5cGUpIHtcbiAgICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC5pbWctbGlzdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOmhvc3QgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/image-gallery/image-gallery.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-gallery/image-gallery.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function() { return ImageGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-create-project/modal-create-project.component */ "./src/app/components/modal-create-project/modal-create-project.component.ts");
/* harmony import */ var src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/feature.service */ "./src/app/services/feature.service.ts");











let ImageGalleryComponent = class ImageGalleryComponent {
    constructor(geoDataService, projectsService, groupsService, cdr, renderer, spinner, dialog, scrollService, featureService) {
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.groupsService = groupsService;
        this.cdr = cdr;
        this.renderer = renderer;
        this.spinner = spinner;
        this.dialog = dialog;
        this.scrollService = scrollService;
        this.featureService = featureService;
        this.showTagger = false;
        this.scrolling = false;
        this.featureList = [];
        this.scrollSum = 15;
    }
    ngAfterViewChecked() {
        if (this.scrollService.scrollRestored) {
            this.scrollService.scroll();
        }
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.geoDataService.loaded.subscribe((e) => {
            this.loaded = e;
        }, (error) => {
            this.projectsExist = false;
        });
        this.featureService.features$.subscribe((fc) => {
            if (fc) {
                if (fc.features.length > 0) {
                    this.imagesExist = true;
                    this.featureList = fc.features.filter((feature) => {
                        try {
                            return (feature.initialAsset() && feature.featureType() === 'image');
                        }
                        catch (error) {
                            // If a feature has no asset, it ends up in this catch
                            console.error(error);
                            // After outputting the error, add an "image not found" placeholder,
                            // Allowing users to still select their errored import
                            // Note that this doesn't really work!
                            feature.assets.push({ path: '../../images/Image-not-found.png' });
                            return false;
                        }
                    });
                    this.featureListScroll = this.featureList.slice(0, this.scrollSum);
                }
                else {
                    this.imagesExist = false;
                }
            }
        });
        this.projectsService.projects.subscribe((projects) => {
            this.projects = projects;
            if (this.projects.length) {
                this.projectsExist = true;
            }
            else {
                this.projectsExist = false;
            }
        });
        this.geoDataService.groupsFeatures.subscribe((next) => {
            this.groupsFeatures = next;
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.geoDataService.activeFeature.subscribe((next) => {
            if (next) {
                this.activeFeature = next;
            }
        });
        this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.groupsService.showTagger.subscribe((next) => {
            this.showTagger = next;
            this.scrollStatus = next ? 'success' : 'danger';
        });
    }
    getPath() {
        return (this.environment.apiUrl +
            '/assets/' +
            this.activeGroupFeature.assets[0].path.replace(/([^:])(\/{2,})/g, '$1/'));
    }
    appendSum() {
        if (this.featureList.length != 0) {
            if (this.scrollSum == this.featureList.length) {
                this.spinner.hide();
                this.scrolling = false;
                return;
            }
            // If scrollSum is larger than the length of the feature list, curtail it to just be the length
            if (this.scrollSum > this.featureList.length) {
                this.scrollSum = this.featureList.length;
            }
        }
        this.featureListScroll = this.featureList.slice(0, this.scrollSum);
        setTimeout(() => {
            this.spinner.hide();
            this.scrolling = false;
        }, 1300);
    }
    onScroll() {
        if (!this.scrolling) {
            this.spinner.show();
            this.scrollSum += 10;
            this.appendSum();
            this.scrolling = true;
        }
    }
    openCreateProjectModal() {
        this.dialog.open(_modal_create_project_modal_create_project_component__WEBPACK_IMPORTED_MODULE_9__["ModalCreateProjectComponent"], {
            height: '400px',
            width: '600px',
        });
    }
};
ImageGalleryComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] },
    { type: src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_10__["FeatureService"] }
];
ImageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-gallery.component.scss */ "./src/app/components/image-gallery/image-gallery.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
        src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"],
        src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_10__["FeatureService"]])
], ImageGalleryComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .top-bar {\n  height: 40px;\n  padding: 5px;\n  padding-left: 0.5em;\n  flex-wrap: nowrap;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    flex: 0 1 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC50b3AtYmFyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgLnRvcC1iYXItcmlnaHQgLnRvcC1iYXItbGVmdCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIC50b3AtYmFyIHtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAudG9wLWJhciB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xufVxuOmhvc3QgLnRvcC1iYXItcmlnaHQgLnRvcC1iYXItbGVmdCB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgOmhvc3QgLnRvcC1iYXIge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");





let MainComponent = class MainComponent {
    // public activeFeature: Feature;
    // public currentUser: AuthenticatedUser;
    constructor(geoDataService, authService, bsModalService) {
        this.geoDataService = geoDataService;
        this.authService = authService;
        this.bsModalService = bsModalService;
    }
    ngOnInit() {
        // this.geoDataService.activeFeature.subscribe( next => {
        //   this.activeFeature = next;
        // });
        // this.authService.currentUser.subscribe(next => this.currentUser = next);
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
], MainComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/leafletUtils */ "./src/app/utils/leafletUtils.ts");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");











let MapComponent = class MapComponent {
    constructor(GeoDataService, route) {
        this.GeoDataService = GeoDataService;
        this.route = route;
        this.mapType = 'normal';
        this.features = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
        // Have to bind these to keep this being this
        this.featureClickHandler.bind(this);
        this.mouseEventHandler.bind(this);
    }
    ngOnInit() {
        // const mapType: string = this.route.snapshot.queryParamMap.get('mapType');
        // this.projectId = +this.route.snapshot.paramMap.get("projectId");
        // this.cluster = this.route.snapshot.queryParamMap.get('mapType');
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"];
        this.overlays = new Map();
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Map"]('map', {
            center: [40, -80],
            zoom: 9,
        });
        const baseOSM = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        });
        const satellite = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        });
        // default to streetmap view;
        this.map.addLayer(baseOSM);
        this.loadFeatures();
        // Publish the mouse location on the mapMouseLocation stream
        this.map.on('mousemove', (ev) => this.mouseEventHandler(ev));
        this.GeoDataService.activeOverlay.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe((next) => {
            this.addRemoveOverlay(next);
        });
        // Listen on the activeFeature stream and zoom map to that feature when it changes
        this.GeoDataService.activeFeature
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((n) => n != null))
            .subscribe((next) => {
            this.activeFeature = next;
            const bbox = _turf_turf__WEBPACK_IMPORTED_MODULE_7__["bbox"](next);
            this.map.fitBounds([
                [bbox[1], bbox[0]],
                [bbox[3], bbox[2]],
            ]);
        });
        // Listen for changes to the basemap
        this.GeoDataService.basemap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe((next) => {
            if (next == 'sat') {
                this.map.removeLayer(baseOSM);
                this.map.addLayer(satellite);
            }
            if (next == 'roads') {
                this.map.removeLayer(satellite);
                this.map.addLayer(baseOSM);
            }
        });
    }
    addRemoveOverlay(ov) {
        if (this.overlays.has(ov.id)) {
            this.features.removeLayer(this.overlays.get(ov.id));
            this.overlays.delete(ov.id);
        }
        else {
            const overlay = leaflet__WEBPACK_IMPORTED_MODULE_3__["imageOverlay"](_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/assets/' + ov.path, [
                [ov.minLat, ov.minLon],
                [ov.maxLat, ov.maxLon],
            ]);
            this.overlays.set(ov.id, overlay);
            this.features.addLayer(overlay);
        }
        this.map.fitBounds(this.features.getBounds());
    }
    mouseEventHandler(ev) {
        this.GeoDataService.mapMouseLocation = ev.latlng;
    }
    /**
     * Load Features for a project.
     */
    loadFeatures() {
        const geojsonOptions = {
            pointToLayer: _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__["createMarker"],
        };
        this.GeoDataService.features.subscribe((collection) => {
            this.features.clearLayers();
            const markers = leaflet__WEBPACK_IMPORTED_MODULE_3__["markerClusterGroup"]({
                iconCreateFunction: (cluster) => {
                    return leaflet__WEBPACK_IMPORTED_MODULE_3__["divIcon"]({
                        html: `<div><b>${cluster.getChildCount()}</b></div>`,
                        className: 'marker-cluster',
                    });
                },
            });
            collection.features.forEach((d) => {
                const feat = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](d, geojsonOptions);
                feat.on('click', (ev) => {
                    this.featureClickHandler(ev);
                });
                if (d.geometry.type == 'Point') {
                    markers.addLayer(feat);
                }
                else {
                    this.features.addLayer(feat);
                }
            });
            this.features.addLayer(markers);
            this.map.addLayer(this.features);
            try {
                this.map.fitBounds(this.features.getBounds());
            }
            catch (e) { }
        });
    }
    /**
     *
     * @param ev
     */
    featureClickHandler(ev) {
        const f = ev.layer.feature;
        this.GeoDataService.activeFeature = f;
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MapComponent);



/***/ }),

/***/ "./src/app/components/modal-create-project/modal-create-project.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/modal-create-project/modal-create-project.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host #create-project-form {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWNyZWF0ZS1wcm9qZWN0L21vZGFsLWNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWNyZWF0ZS1wcm9qZWN0L21vZGFsLWNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWNyZWF0ZS1wcm9qZWN0L21vZGFsLWNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICNjcmVhdGUtcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVlbTtcbiAgfVxufVxuLy8gVE9ETzogRml4IGFubm95aW5nIG1hcmdpbiBmbGFzaFxuLy8gOmhvc3Qge1xuLy8gICBwb3NpdGlvbjoge3RvcDogMjBweH07XG4vLyAgIHdpZHRoOiA0NTBweDtcbi8vICAgaGVpZ2h0OiAyNTBweDtcbi8vICAgbWluLWhlaWdodDogMjBlbTtcbi8vICAgLmZpbGVzbGlzdGluZyB7XG4vL1x0bWluLWhlaWdodDogMTVlbTtcbi8vXHRtYXgtaGVpZ2h0OiAxNWVtO1xuLy9cdG92ZXJmbG93LXk6IHNjcm9sbDtcbi8vICAgfVxuXG4vLyAgIC5maWxlLXJvdyB7XG4vL1x0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4vL1x0Jjpob3ZlciB7XG4vL1x0ICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRHcmV5O1xuLy9cdCAgJi5zZWxlY3RlZCB7XG4vL1x0XHRiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuLy9cdCAgfVxuLy9cdH1cbi8vICAgfVxuXG4vLyB9XG4iLCI6aG9zdCAjY3JlYXRlLXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/modal-create-project/modal-create-project.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/modal-create-project/modal-create-project.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalCreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCreateProjectComponent", function() { return ModalCreateProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ModalCreateProjectComponent = class ModalCreateProjectComponent {
    constructor(dialogRef, dialog, projectsService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.projectsService = projectsService;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.projCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    close(project) {
        this.dialogRef.close();
    }
    submit() {
        // Watch content we can set to false, for our project, we don't need this yet.
        // Watch content refers to syncing files created in a folder with a hazmapper map
        // Set observable to true, Hazmapper doesn't let users define that value for some reason.
        const proj = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        const projRqst = new _models_models__WEBPACK_IMPORTED_MODULE_4__["ProjectRequest"]();
        // Retrieve project name and description
        proj.description = this.projCreateForm.get('description').value;
        proj.name = this.projCreateForm.get('name').value;
        projRqst.project = proj;
        this.projectsService.create(projRqst);
        this.dialogRef.close();
    }
};
ModalCreateProjectComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
];
ModalCreateProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-create-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-create-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-create-project/modal-create-project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-create-project.component.scss */ "./src/app/components/modal-create-project/modal-create-project.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
], ModalCreateProjectComponent);



/***/ }),

/***/ "./src/app/components/modal-current-project/modal-current-project.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/modal-current-project/modal-current-project.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host #current-project-form {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWN1cnJlbnQtcHJvamVjdC9tb2RhbC1jdXJyZW50LXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY3VycmVudC1wcm9qZWN0L21vZGFsLWN1cnJlbnQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1jdXJyZW50LXByb2plY3QvbW9kYWwtY3VycmVudC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICNjdXJyZW50LXByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1ZW07XG4gIH1cbn1cbiIsIjpob3N0ICNjdXJyZW50LXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/modal-current-project/modal-current-project.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/modal-current-project/modal-current-project.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalCurrentProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCurrentProjectComponent", function() { return ModalCurrentProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");






let ModalCurrentProjectComponent = class ModalCurrentProjectComponent {
    constructor(dialogRef, dialog, projectsService, projData) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.projectsService = projectsService;
        this.projData = projData;
    }
    ngOnInit() {
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
        this.projCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.activeProject.name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.activeProject.description),
        });
    }
    close() {
        this.dialogRef.close();
    }
    delete() {
        if (confirm('Are you sure you want to delete this project? This will also delete it from HazMapper, and anyone this project was shared with.')) {
            this.projectsService.delete(this.activeProject);
        }
        this.dialogRef.close();
    }
    update() {
        // The project is being properly assembled, but the problem is that the returned project isn't updating.
        // Do I need more data in my projects?
        /*
          export interface Project {
          description: string;
          id?: number;
          name: string;
          ds_id?: string;
          title?: string;
          uuid?: string;
          public?: boolean;
          system_file?: string;
          system_id?: string;
          system_path?: string;
          deleting?: boolean;
          deletingFailed?: boolean;
        }
         */
        const p = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        const projRqst = new _models_models__WEBPACK_IMPORTED_MODULE_4__["ProjectRequest"]();
        p.description = this.projCreateForm.get('description').value;
        p.name = this.projCreateForm.get('name').value;
        p.id = this.activeProject.id;
        p.uuid = this.activeProject.uuid;
        projRqst.project = p;
        this.projectsService.update(projRqst);
        this.dialogRef.close();
    }
};
ModalCurrentProjectComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
ModalCurrentProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-current-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-current-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-current-project/modal-current-project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-current-project.component.scss */ "./src/app/components/modal-current-project/modal-current-project.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], Object])
], ModalCurrentProjectComponent);



/***/ }),

/***/ "./src/app/components/modal-download-selector/modal-download-selector.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/modal-download-selector/modal-download-selector.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 20em;\n}\n:host .fileslisting {\n  height: 20em;\n  overflow-y: scroll;\n  padding: 0px 20px;\n}\n:host .file-row {\n  display: flex;\n  background: #f9f9f9;\n  border: 1px solid transparent;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n:host .clickable {\n  flex: 1;\n  max-width: 20em;\n}\n:host .size {\n  align-items: flex-end;\n}\n:host .file-row:hover {\n  border: 1px solid;\n}\n:host .file-row.selected {\n  background: #d3d3d3;\n}\n:host .mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n:host .radio-box {\n  position: relative;\n  bottom: 45px;\n  left: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWRvd25sb2FkLXNlbGVjdG9yL21vZGFsLWRvd25sb2FkLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWRvd25sb2FkLXNlbGVjdG9yL21vZGFsLWRvd25sb2FkLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUNFSjtBREFFO0VBQ0UscUJBQUE7QUNFSjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1kb3dubG9hZC1zZWxlY3Rvci9tb2RhbC1kb3dubG9hZC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLWhlaWdodDogMjBlbTtcbiAgLmZpbGVzbGlzdGluZyB7XG4gICAgaGVpZ2h0OiAyMGVtO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuICAuZmlsZS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmNsaWNrYWJsZSB7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDIwZW07XG4gIH1cbiAgLnNpemUge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAuZmlsZS1yb3c6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICB9XG4gIC5maWxlLXJvdy5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgLnJhZGlvLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNDVweDtcbiAgICBsZWZ0OiA0NSU7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgbWluLWhlaWdodDogMjBlbTtcbn1cbjpob3N0IC5maWxlc2xpc3Rpbmcge1xuICBoZWlnaHQ6IDIwZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG46aG9zdCAuZmlsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCAuY2xpY2thYmxlIHtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiAyMGVtO1xufVxuOmhvc3QgLnNpemUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG46aG9zdCAuZmlsZS1yb3c6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbjpob3N0IC5maWxlLXJvdy5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG59XG46aG9zdCAubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG46aG9zdCAucmFkaW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDQ1cHg7XG4gIGxlZnQ6IDQ1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/modal-download-selector/modal-download-selector.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/modal-download-selector/modal-download-selector.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalDownloadSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDownloadSelectorComponent", function() { return ModalDownloadSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agave-systems.service */ "./src/app/services/agave-systems.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tapis-files.service */ "./src/app/services/tapis-files.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var ModalDownloadSelectorComponent_1;









let ModalDownloadSelectorComponent = ModalDownloadSelectorComponent_1 = class ModalDownloadSelectorComponent {
    constructor(tapisFilesService, 
    // private modalRef: BsModalRef,
    dialogRef, dialog, authService, agaveSystemsService) {
        this.tapisFilesService = tapisFilesService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authService = authService;
        this.agaveSystemsService = agaveSystemsService;
        this.currentPath = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filesList = [];
        this.inProgress = true;
        this.selectedFiles = new Map();
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.passbackData = ['', '', '', ''];
        this.fileName = 'Custom File Name';
        this.fileExtension = '.csv';
    }
    ngOnInit() {
        this.downloadSelectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.fileName),
            Extension: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.fileExtension),
        });
        // This finds all the projects, and file systems found from a user
        this.agaveSystemsService.list();
        // TODO: change those hard coded systemIds to environment vars or some sort of config
        // wait on the currentUser and systems to resolve
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.authService.currentUser,
            this.agaveSystemsService.systems,
            this.agaveSystemsService.projects,
        ])
            // This little thing helped me fix the problem on calling ngOnInit several times
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(([user, systems, projects]) => {
            // Uses systems to find the different directories that has the files in
            this.myDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.default');
            this.communityDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.community');
            this.publishedDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.published');
            // This is where they choose which one they start with
            this.selectedSystem = this.myDataSystem;
            this.projects = projects;
            this.currentUser = user;
            const init = {
                system: this.myDataSystem.id,
                type: 'dir',
                path: this.currentUser.username,
            };
            this.browse(init);
        });
    }
    selectSystem(system) {
        let pth;
        system.id === this.myDataSystem.id
            ? (pth = this.currentUser.username)
            : (pth = '/');
        const init = {
            system: system.id,
            type: 'dir',
            path: pth,
        };
        this.browse(init);
    }
    browse(file) {
        if (file.type !== 'dir') {
            return;
        }
        this.currentDirectory = file;
        // this.selectedFiles.clear();
        this.filesList = [];
        this.offset = 0;
        this.inProgress = false;
        this.getFiles();
    }
    getFiles() {
        const hasMoreFiles = this.offset % ModalDownloadSelectorComponent_1.limit === 0;
        if (this.inProgress || !hasMoreFiles) {
            return;
        }
        this.inProgress = true;
        this.tapisFilesService
            .listFiles(this.currentDirectory.system, this.currentDirectory.path, this.offset, ModalDownloadSelectorComponent_1.limit)
            .subscribe((listing) => {
            const files = listing.result;
            if (files.length && files[0].name === '.') {
                // This removes the first item in the listing, which in Agave
                // is always a reference to self '.' and replaces with '..'
                const current = files.shift();
                this.currentPath.next(current.path);
                this.passbackData[1] = current.path;
                current.path = this.tapisFilesService.getParentPath(current.path);
                current.name = '..';
                files.unshift(current);
            }
            const newFile = [];
            files.forEach(function (value, index) {
                if (value.type == 'file' || value.type == 'dir') {
                    newFile.push(value);
                }
            });
            this.inProgress = false;
            this.filesList = this.filesList.concat(newFile);
            this.offset = this.offset + files.length;
        }, (error) => {
            this.inProgress = false;
        });
    }
    chooseFiles() {
        this.passbackData[0] = this.selectedSystem.id;
        // checks to see if the input was left unchanged
        if (this.downloadSelectForm.dirty) {
            // if changed, enter name as specified
            this.passbackData[2] = this.downloadSelectForm.get('Name').value;
        }
        else {
            // if unchanged, enter filename as empty string
            this.passbackData[2] = '';
        }
        this.passbackData[3] = this.fileExtension;
        this.dialogRef.close(this.passbackData);
    }
    cancel() {
        this.dialogRef.close();
    }
};
ModalDownloadSelectorComponent.limit = 200; // Limits maximum amount of files displayed
ModalDownloadSelectorComponent.ctorParameters = () => [
    { type: _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalDownloadSelectorComponent.prototype, "currentPath", void 0);
ModalDownloadSelectorComponent = ModalDownloadSelectorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-download-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-download-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-download-selector/modal-download-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-download-selector.component.scss */ "./src/app/components/modal-download-selector/modal-download-selector.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"]])
], ModalDownloadSelectorComponent);



/***/ }),

/***/ "./src/app/components/modal-file-browser/modal-file-browser.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/modal-file-browser/modal-file-browser.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 20em;\n}\n:host .fileslisting {\n  height: 20em;\n  overflow-y: scroll;\n  padding: 0px 20px;\n}\n:host .file-row {\n  display: flex;\n  background: #f9f9f9;\n  border: 1px solid transparent;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n:host .clickable {\n  flex: 1;\n  max-width: 20em;\n}\n:host .size {\n  align-items: flex-end;\n}\n:host .file-row:hover {\n  border: 1px solid;\n}\n:host .file-row.selected {\n  background: #d3d3d3;\n}\n.error {\n  background-color: red;\n  color: white;\n}\n.lineBreak {\n  max-width: 350px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWZpbGUtYnJvd3Nlci9tb2RhbC1maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZmlsZS1icm93c2VyL21vZGFsLWZpbGUtYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDRUo7QURBRTtFQUNFLE9BQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLHFCQUFBO0FDRUo7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0FDRUo7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWZpbGUtYnJvd3Nlci9tb2RhbC1maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIC5maWxlc2xpc3Rpbmcge1xuICAgIGhlaWdodDogMjBlbTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbiAgLmZpbGUtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5jbGlja2FibGUge1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAyMGVtO1xuICB9XG4gIC5zaXplIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbiAgLmZpbGUtcm93OmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgfVxuICAuZmlsZS1yb3cuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIH1cbn1cblxuLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5lQnJlYWsge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuIiwiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAyMGVtO1xufVxuOmhvc3QgLmZpbGVzbGlzdGluZyB7XG4gIGhlaWdodDogMjBlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbjpob3N0IC5maWxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbn1cbjpob3N0IC5jbGlja2FibGUge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDIwZW07XG59XG46aG9zdCAuc2l6ZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbjpob3N0IC5maWxlLXJvdzpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuOmhvc3QgLmZpbGUtcm93LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbn1cblxuLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5lQnJlYWsge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/modal-file-browser/modal-file-browser.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/modal-file-browser/modal-file-browser.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalFileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFileBrowserComponent", function() { return ModalFileBrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agave-systems.service */ "./src/app/services/agave-systems.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tapis-files.service */ "./src/app/services/tapis-files.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var ModalFileBrowserComponent_1;








let ModalFileBrowserComponent = ModalFileBrowserComponent_1 = class ModalFileBrowserComponent {
    constructor(tapisFilesService, 
    // private modalRef: BsModalRef,
    dialogRef, dialog, authService, agaveSystemsService) {
        this.tapisFilesService = tapisFilesService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authService = authService;
        this.agaveSystemsService = agaveSystemsService;
        this.currentPath = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allowedExtensions = this.tapisFilesService.IMPORTABLE_TYPES;
        this.filesList = [];
        this.inProgress = true;
        this.retrievalError = false;
        this.selectedFiles = new Map();
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        // retrive state data
        // this.tapisFilesService.getState()
        // This finds all the projects, and file systems found from a user
        this.agaveSystemsService.list();
        // TODO: change those hard coded systemIds to environment vars or some sort of config
        // wait on the currentUser and systems to resolve
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.authService.currentUser,
            this.agaveSystemsService.systems,
            this.agaveSystemsService.projects,
        ])
            // This little thing helped me fix the problem on calling ngOnInit several times
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(([user, systems, projects]) => {
            // Uses systems to find the different directories that has the files in
            this.myDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.default');
            this.communityDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.community');
            this.publishedDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.published');
            // This is where they choose which one they start with
            this.selectedSystem = this.tapisFilesService.lastSystem;
            if (this.selectedSystem == null) {
                this.selectedSystem = this.myDataSystem;
                this.tapisFilesService.lastSystem = this.myDataSystem;
            }
            // If the user has already navigated to a folder, restore those options
            this.currentDirectory = this.tapisFilesService.lastFile;
            this.projects = projects;
            this.currentUser = user;
            const init = {
                system: this.myDataSystem.id,
                type: 'dir',
                path: this.currentUser.username,
            };
            // If the user hasn't yet opened the file browser, set the last file to an init file.
            if (this.tapisFilesService.noPreviousSelections) {
                this.selectedSystem = this.myDataSystem;
                this.tapisFilesService.lastFile = init;
                this.tapisFilesService.noPreviousSelections = false;
            }
            this.browse(this.tapisFilesService.lastFile);
        });
    }
    selectSystem(system) {
        let pth;
        system.id === this.myDataSystem.id
            ? (pth = this.currentUser.username)
            : (pth = '/');
        const init = {
            system: system.id,
            type: 'dir',
            path: pth,
        };
        this.selectedSystem = system;
        this.tapisFilesService.lastSystem = this.selectedSystem;
        this.browse(init);
    }
    browse(file) {
        this.selectedPath = file.path;
        this.selectedSystem = this.selectedSystem; // Self-assignment keeps the system name from disappearing while browsing subfolders
        if (file.type !== 'dir') {
            return;
        }
        this.currentDirectory = file;
        this.tapisFilesService.lastFile = file; // Updates the last directory visted
        // this.selectedFiles.clear();
        this.filesList = [];
        this.offset = 0;
        this.inProgress = false;
        this.getFiles();
    }
    toRoot() {
        let pth;
        this.selectedSystem.id === this.myDataSystem.id
            ? (pth = this.currentUser.username)
            : (pth = '/');
        const init = {
            system: this.selectedSystem.id,
            type: 'dir',
            path: pth,
        };
        this.browse(init);
    }
    getFiles() {
        const hasMoreFiles = this.offset % ModalFileBrowserComponent_1.limit === 0;
        if (this.inProgress || !hasMoreFiles) {
            return;
        }
        this.inProgress = true;
        this.tapisFilesService
            .listFiles(this.currentDirectory.system, this.currentDirectory.path, this.offset, ModalFileBrowserComponent_1.limit)
            .subscribe((listing) => {
            const files = listing.result;
            if (files.length && files[0].name === '.') {
                // This removes the first item in the listing, which in Agave
                // is always a reference to self '.' and replaces with '..'
                const current = files.shift();
                this.currentPath.next(current.path);
                current.path = this.tapisFilesService.getParentPath(current.path);
                current.name = '..';
                files.unshift(current);
            }
            const newFile = [];
            const allowedExt = this.allowedExtensions;
            files.forEach(function (value, index) {
                if ((value.type == 'file' &&
                    allowedExt.includes(value.path.split('.').pop().toLowerCase())) ||
                    value.type == 'dir') {
                    newFile.push(value);
                }
            });
            this.inProgress = false;
            this.retrievalError = false;
            this.filesList = this.filesList.concat(newFile);
            this.offset = this.offset + files.length;
        }, (error) => {
            // If retrieving the files from DesignSafe bugs out due to the site being down, this is where it ends up
            this.retrievalError = true;
            this.inProgress = false;
        });
    }
    // TODO: Ian: Error message on incorrect file type?
    select(event, file, index) {
        if (event.shiftKey) {
            this.selectFilesShiftClick(index, file);
        }
        else {
            if (this.tapisFilesService.checkIfSelectable(file)) {
                this.addSelectedFile(file, index);
            }
            else {
            }
        }
    }
    selectFilesShiftClick(index, file) {
        // this.selectedFiles.clear();
        this.selectShift(index, file);
    }
    addSelectedFile(file, index) {
        if (index != -1) {
            this.firstFileIndex = index;
        }
        if (this.tapisFilesService.checkIfSelectable(file)) {
            if (this.selectedFiles.has(file.path)) {
                this.selectedFiles.delete(file.path);
            }
            else {
                this.selectedFiles.set(file.path, file);
            }
        }
    }
    chooseFiles() {
        this.tapisFilesService.saveState();
        this.tapisFilesService.lastSystem = this.selectedSystem;
        const tmp = Array.from(this.selectedFiles.values());
        this.dialogRef.close(tmp);
    }
    cancel() {
        this.tapisFilesService.saveState();
        this.tapisFilesService.lastSystem = this.selectedSystem;
        this.dialogRef.close();
    }
    selectAll() {
        const indexTmp = -1;
        let count = 0;
        for (const file of this.filesList) {
            if (!this.selectedFiles.has(file.path)) {
                this.select('', file, indexTmp);
                count += 1;
            }
        }
        if (count == 1) {
            this.selectedFiles.clear();
        }
    }
    selectShift(index, file) {
        if (this.firstFileIndex != undefined && this.firstFileIndex != index) {
            this.addRangeFiles(this.firstFileIndex, index, true);
        }
        else {
            this.addSelectedFile(file, index);
        }
    }
    addRangeFiles(firstFileIndex, lastFileIndex, again) {
        const maxIndex = Math.max(firstFileIndex, lastFileIndex);
        const minIndex = Math.min(firstFileIndex, lastFileIndex);
        for (let i = minIndex; i < maxIndex + 1; ++i) {
            this.addSelectedFile(this.filesList[i], -1);
        }
        if (again) {
            this.addSelectedFile(this.filesList[firstFileIndex], -1);
        }
    }
};
ModalFileBrowserComponent.limit = 200; // Limits maximum amount of files displayed
ModalFileBrowserComponent.ctorParameters = () => [
    { type: _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalFileBrowserComponent.prototype, "currentPath", void 0);
ModalFileBrowserComponent = ModalFileBrowserComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-file-browser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-file-browser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-file-browser.component.scss */ "./src/app/components/modal-file-browser/modal-file-browser.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"]])
], ModalFileBrowserComponent);



/***/ }),

/***/ "./src/app/components/modal-share-project/modal-share-project.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/modal-share-project/modal-share-project.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host #share-project-form {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 5em;\n}\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n  width: 99%;\n}\n\n.card-item {\n  text-align: center;\n  align-items: center;\n}\n\n.card-buttons {\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXNoYXJlLXByb2plY3QvbW9kYWwtc2hhcmUtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1zaGFyZS1wcm9qZWN0L21vZGFsLXNoYXJlLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXNoYXJlLXByb2plY3QvbW9kYWwtc2hhcmUtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3Qge1xuICAjc2hhcmUtcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVlbTtcbiAgfVxufVxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTklO1xufVxuXG4uY2FyZC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1idXR0b25zIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuIiwiOmhvc3QgI3NoYXJlLXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNWVtO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5jYXJkLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWJ1dHRvbnMge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/modal-share-project/modal-share-project.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/modal-share-project/modal-share-project.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalShareProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalShareProjectComponent", function() { return ModalShareProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");





let ModalShareProjectComponent = class ModalShareProjectComponent {
    constructor(dialogRef, dialog, projectsService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.projectsService = projectsService;
    }
    ngOnInit() {
        // creates new form control group to access input value
        this.projShareForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        // retrieves active project, needed to add users to the project
        this.projectsService.activeProject.subscribe((proj) => {
            this.activeProj = proj;
        });
        // retrieves all users currently registered to the active project
        this.projectsService.getProjectUsers(this.activeProj).subscribe((next) => {
            this.projectUsers = next;
            this.onlyOne = this.projectUsers.length == 1;
        });
    }
    // closes modal without submitting anything
    close() {
        this.dialogRef.close();
    }
    // shares project with specified user
    submit() {
        this.projectsService.addUserToProject(this.activeProj, this.projShareForm.get('name').value);
        this.dialogRef.close();
    }
    // deletes user from project
    delete(user) {
        this.projectsService.deleteUserFromProject(this.activeProj, user);
        this.dialogRef.close();
    }
};
ModalShareProjectComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
];
ModalShareProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-share-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-share-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-share-project/modal-share-project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-share-project.component.scss */ "./src/app/components/modal-share-project/modal-share-project.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
], ModalShareProjectComponent);



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/notfound/notfound.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/side-bar/select-group/select-group.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/select-group/select-group.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow-y: scroll;\n}\n:host .select-group {\n  overflow: hidden;\n  max-height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #f1f1f1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #ffffff;\n  height: 100%;\n}\n:host .group-subitem {\n  height: 100px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #b3e5ff;\n}\n:host .group-container {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .fa {\n  font-weight: 900;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  font-family: \"FontAwesome\";\n  line-height: 1;\n}\n:host .fa option {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NlbGVjdC1ncm91cC9zZWxlY3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWdyb3VwL3NlbGVjdC1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUo7QURHRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0UsaUJBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FET0U7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FDTEo7QURRRTtFQUNFLHlCQUFBO0FDTko7QURTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ1BKO0FEVUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNSSjtBRFdFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEWUU7RUFDRSxZQUFBO0FDVko7QURhRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNYSjtBRGFFO0VBQ0UsZ0JBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWdyb3VwL3NlbGVjdC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAuc2VsZWN0LWdyb3VwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDIwJTtcbiAgICAvLyBoZWlnaHQ6IDIwJTtcbiAgfVxuXG4gIC5zdWJpdGVtLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuc3ViaXRlbSB7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZ3JvdXAtc3ViaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5zdWJpdGVtLXNjcm9sbCB7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cblxuICAuYm94ZWQgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ib3hlZCBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuXG4gIC5ib3hlZCBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmZjtcbiAgfVxuXG4gIC5ncm91cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLm5hbWUtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCBkaXYge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuXG4gIC5mYSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIC5mYSBvcHRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5zdWJpdGVtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLnN1Yml0ZW0ge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuICBib3JkZXItY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmdyb3VwLXN1Yml0ZW0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmJveGVkIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmZjtcbn1cbjpob3N0IC5ncm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCBkaXYge1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuZmEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbjpob3N0IC5mYSBvcHRpb24ge1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/select-group/select-group.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/side-bar/select-group/select-group.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGroupComponent", function() { return SelectGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_utils_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/groups */ "./src/app/utils/groups.ts");







let SelectGroupComponent = class SelectGroupComponent {
    constructor(groupsService, geoDataService, projectsService, dialog) {
        this.groupsService = groupsService;
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.dialog = dialog;
        this.iconList = src_app_utils_groups__WEBPACK_IMPORTED_MODULE_6__["groupIcons"];
        this.selectedIcon = 'fa-house-damage';
        this.showSubitem = true;
    }
    ngOnInit() {
        this.projectsService.activeProject.subscribe((next) => {
            this.selectedProject = next;
        });
        this.groups$ = this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.geoDataService.groupsFeatures.subscribe((next) => {
            this.groupsFeatures = next;
        });
        this.activeGroup$ = this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
            if (!next) {
                this.groupsService.toggleTagger();
            }
        });
    }
    selectGroupForm(group) {
        this.geoDataService.setActiveGroup(group);
    }
    openRenameOptionModal(template) {
        this.dialog.open(template);
    }
    // TODO: ensure ui is updated from getFeatures()
    deleteGroup(group) {
        const features = this.groupsFeatures.get(group.name);
        this.geoDataService.deleteGroupFeatures(this.selectedProject.id, features, group);
    }
    openRenameModal(template, group) {
        this.selectedGroup = group;
        this.dialog.open(template);
    }
    openIconSelection(template, group) {
        this.selectedGroup = group;
        this.selectedIcon = group.icon;
        this.dialog.open(template);
    }
    saveIcon(icon) {
        this.geoDataService.reiconGroup(this.selectedProject.id, this.groupsFeatures.get(this.selectedGroup.name), this.groups.get(this.selectedGroup.name), icon);
        this.dialog.closeAll();
    }
    isChecked(name) {
        if (this.activeGroup && this.activeGroup.name === name) {
            return 'checked';
        }
        else {
            return '';
        }
    }
    renameGroup(name) {
        this.geoDataService.renameGroup(this.selectedProject.id, this.groupsFeatures.get(this.selectedGroup.name), this.groups.get(this.selectedGroup.name), name);
        this.dialog.closeAll();
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
    }
    ngOnDestroy() {
        this.groups$.unsubscribe();
        this.activeGroup$.unsubscribe();
    }
};
SelectGroupComponent.ctorParameters = () => [
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] },
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
SelectGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-group.component.scss */ "./src/app/components/side-bar/select-group/select-group.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"],
        _services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], SelectGroupComponent);



/***/ }),

/***/ "./src/app/components/side-bar/select-image/select-image.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/select-image/select-image.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #f1f1f1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #ffffff;\n  height: 100%;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .asset-list {\n  max-height: 20%;\n  overflow: hidden;\n}\n:host .asset-subitem {\n  height: 100px;\n}\n:host .asset-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #b3e5ff;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NlbGVjdC1pbWFnZS9zZWxlY3QtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWltYWdlL3NlbGVjdC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREdFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0FDSko7QURPRTtFQUNFLGFBQUE7QUNMSjtBRFFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTko7QURTRTtFQUNFLHlCQUFBO0FDUEo7QURVRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEV0U7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVEo7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtaW1hZ2Uvc2VsZWN0LWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc3ViaXRlbS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnN1Yml0ZW0ge1xuICAgIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuXG4gIC5hc3NldC1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgLy8gaGVpZ2h0OiAyMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5hc3NldC1zdWJpdGVtIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLmFzc2V0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZmO1xuICB9XG5cbiAgLm5hbWUtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCBkaXYge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbn1cbiIsIjpob3N0IC5zdWJpdGVtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLnN1Yml0ZW0ge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuICBib3JkZXItY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuYXNzZXQtbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5hc3NldC1zdWJpdGVtIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbjpob3N0IC5hc3NldC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZmO1xufVxuOmhvc3QgLm5hbWUtZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweDtcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIGRpdiB7XG4gIHBhZGRpbmc6IDNweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/select-image/select-image.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/side-bar/select-image/select-image.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectImageComponent", function() { return SelectImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");




let SelectImageComponent = class SelectImageComponent {
    constructor(geoDataService, projectsService) {
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.showSubitem = true;
    }
    ngOnInit() {
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
        });
        this.geoDataService.groupsFeatures.subscribe((next) => {
            this.groupsFeatures = next;
            if (next && this.activeGroup) {
                const groupFeatures = this.groupsFeatures.get(this.activeGroup.name);
                if (groupFeatures) {
                    if (!groupFeatures.some((f) => f.id === this.activeGroupFeature.id)) {
                        this.geoDataService.setActiveGroupFeature(groupFeatures[0]);
                    }
                }
                else {
                    const [nextGroup] = this.groups.values();
                    if (nextGroup) {
                        this.geoDataService.setActiveGroup(nextGroup);
                    }
                    else {
                        this.geoDataService.setActiveGroup(null);
                    }
                }
            }
        });
    }
    getActiveFeatures() {
        if (this.activeGroup) {
            const groupFeatures = this.groupsFeatures.get(this.activeGroup.name);
            const group = this.groups.get(this.activeGroup.name);
            if (group) {
                return groupFeatures;
            }
            else {
                const [nextGroup] = this.groups.values();
                if (nextGroup) {
                    this.geoDataService.setActiveGroup(nextGroup);
                    return this.groupsFeatures.get(nextGroup.name);
                }
                else {
                    return [];
                }
            }
        }
        else {
            return [];
        }
    }
    jumpToImage(feat) {
        this.geoDataService.setActiveGroupFeature(feat);
    }
    isActiveFeature(feature) {
        return this.activeGroupFeature.id === feature.id;
    }
    deleteFeature(feat) {
        this.geoDataService.deleteGroupFeatures(this.activeProject.id, [feat], this.groups.get(this.activeGroup.name));
    }
    getFeaturePath(feat) {
        return feat.featureShortPath();
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
    }
};
SelectImageComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
SelectImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-image.component.scss */ "./src/app/components/side-bar/select-image/select-image.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
], SelectImageComponent);



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIC8vIEZJWE1FIFRoaXMgaXNuJ3Qgd29ya2luZ1xuICAvLyBoZWlnaHQ6IDEwMCU7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");



let SideBarComponent = class SideBarComponent {
    constructor(groupsService) {
        this.groupsService = groupsService;
        this.showTagGenerator = false;
    }
    ngOnInit() {
        this.groupsService.showTagGenerator.subscribe((next) => {
            this.showTagGenerator = next;
        });
    }
};
SideBarComponent.ctorParameters = () => [
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] }
];
SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]])
], SideBarComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-generator/tag-generator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  font-size: 0.8em;\n  height: calc(100vh - 50px);\n}\n:host .lat-lon-label {\n  font-size: 0.8em;\n  color: #4d4d4d;\n}\n:host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .switch {\n  margin: 0;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .create-prompt {\n  max-height: 500px;\n  height: 500px;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n}\n:host .input-label-group {\n  padding: 10px;\n  display: block;\n}\n:host .input-group {\n  display: inline-block;\n}\n:host .form-name {\n  text-align: center;\n}\n:host .input-group-button {\n  display: inline-block;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #f1f1f1;\n  border-style: solid;\n  overflow-y: auto;\n  background-color: #ffffff;\n  height: 40vh;\n  padding: 20px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #b3e5ff;\n}\n:host .group-container {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .button-group {\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n}\n:host .form-option-container {\n  padding: 0px;\n}\n:host .list-group {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #f0f0f0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .form-item-container {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .form-type-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 5px;\n  margin-bottom: 15px;\n}\n:host .form-type-form input[type=radio] {\n  display: none;\n}\n:host .form-type-form label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ddd;\n  transition: all 0.3s;\n}\n:host .form-type-form input[type=radio]:checked + label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #000;\n}\n:host .changed {\n  color: #f07575;\n}\n:host .unchanged {\n  color: #555555;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #b3e5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1nZW5lcmF0b3IvdGFnLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctZ2VuZXJhdG9yL3RhZy1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXBhcmsvdGFnZ2l0Mi4wL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDREY7QURHRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSx5QkVWVTtBRFFkO0FETUk7RUFDRSxtQkFBQTtBQ0pOO0FEUUU7RUFDRSxTQUFBO0FDTko7QURTRTtFQUNFLFNBQUE7QUNQSjtBRFVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDUko7QURXRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNWSjtBRGFFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNYSjtBRGNFO0VBQ0UscUJBQUE7QUNaSjtBRGVFO0VBQ0Usa0JBQUE7QUNiSjtBRGdCRTtFQUNFLHFCQUFBO0FDZEo7QURpQkU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNmSjtBRGtCRTtFQUNFLGlCQUFBO0FDaEJKO0FEbUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNqQko7QURvQkU7RUFDRSxhQUFBO0FDbEJKO0FEcUJFO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ25CSjtBRHNCRTtFQUNFLHlCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDckJKO0FEd0JFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLFlBQUE7QUN2Qko7QUQwQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUN4Qko7QUQyQkU7RUFDRSx5QkFBQTtBQ3pCSjtBRDRCRTtFQUNFLFlBQUE7QUMxQko7QUQ2QkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUMzQko7QUQ4QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUM1Qko7QUQrQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQzdCSjtBRGdDRTtFQUNFLGFBQUE7QUM5Qko7QURpQ0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQy9CSjtBRGtDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2hDSjtBRG1DRTtFQUNFLGNBQUE7QUNqQ0o7QURvQ0U7RUFDRSxjQUFBO0FDbENKO0FEcUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNuQ0o7QURzQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNwQ0o7QUR1Q0U7RUFDRSx5QkFBQTtBQ3JDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWdlbmVyYXRvci90YWctZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcblxuICAubGF0LWxvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgfVxuXG4gIC5hY3RpdmUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuQWN0aXZlO1xuICB9XG5cbiAgLm1lbnUge1xuICAgIGJ1dHRvbi5kcm9wZG93bi5idXR0b24ge1xuICAgICAgcGFkZGluZzogMC44NWVtIDFlbTtcbiAgICB9XG4gIH1cblxuICAuc3dpdGNoIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYnV0dG9uLnRpbnkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jcmVhdGUtcHJvbXB0IHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLnNlbGVjdC1ncm91cCB7XG4gICAgbWF4LWhlaWdodDogMjAlO1xuICAgIGhlaWdodDogMjAlO1xuICB9XG5cbiAgLnN1Yml0ZW0tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbnB1dC1sYWJlbC1ncm91cCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmZvcm0tbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmlucHV0LWdyb3VwLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnN1Yml0ZW0ge1xuICAgIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuXG4gIC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cblxuICAuYm94ZWQgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ib3hlZCBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuXG4gIC5ib3hlZCBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmZjtcbiAgfVxuXG4gIC5ncm91cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JtLW9wdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5saXN0LXN1Ym9wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIGRpdiB7XG4gICAgcGFkZGluZzogM3B4O1xuICB9XG5cbiAgLm5hbWUtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuZm9ybS10eXBlLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tdHlwZS1mb3JtIGxhYmVsIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuXG4gIC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XG4gIH1cblxuICAuY2hhbmdlZCB7XG4gICAgY29sb3I6ICNmMDc1NzU7XG4gIH1cblxuICAudW5jaGFuZ2VkIHtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgfVxuXG4gIC5hc3NldC1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cblxuICAuYXNzZXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmY7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xufVxuOmhvc3QgLmxhdC1sb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cbjpob3N0IC5hY3RpdmUtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWZmOGM7XG59XG46aG9zdCAubWVudSBidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcbiAgcGFkZGluZzogMC44NWVtIDFlbTtcbn1cbjpob3N0IC5zd2l0Y2gge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuYnV0dG9uLnRpbnkge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY3JlYXRlLXByb21wdCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuc3ViaXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5pbnB1dC1sYWJlbC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmZvcm0tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5pbnB1dC1ncm91cC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCAuc3ViaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAucHJlc2V0LWRlc2NyaXB0aW9ucyB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmJveGVkIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46aG9zdCAuYm94ZWQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmZjtcbn1cbjpob3N0IC5ncm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAuZm9ybS1vcHRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuOmhvc3QgLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5saXN0LXN1Ym9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCBkaXYge1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAubmFtZS1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xufVxuOmhvc3QgLmZvcm0taXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5mb3JtLXR5cGUtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCAuZm9ybS10eXBlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmZvcm0tdHlwZS1mb3JtIGxhYmVsIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46aG9zdCAuZm9ybS10eXBlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbn1cbjpob3N0IC5jaGFuZ2VkIHtcbiAgY29sb3I6ICNmMDc1NzU7XG59XG46aG9zdCAudW5jaGFuZ2VkIHtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG46aG9zdCAuYXNzZXQtbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuYXNzZXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmZjtcbn0iLCIkbGlnaHRCbHVlOiAjMGY4M2JkO1xuJGxpZ2h0R3JleTogI2QzZDNkMztcbiRiYWNrZ3JvdW5kSGlnaGxpZ2h0OiAjYjNlNWZmO1xuJGdyZWVuQWN0aXZlOiAjMWFmZjhjO1xuJEFwcE1lZGl1bUJsdWU6ICMyMmM3ZmY7XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.ts ***!
  \******************************************************************************/
/*! exports provided: TagGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagGeneratorComponent", function() { return TagGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");








let TagGeneratorComponent = class TagGeneratorComponent {
    constructor(formsService, groupsService, dialog, router, geoDataService, projectsService) {
        this.formsService = formsService;
        this.groupsService = groupsService;
        this.dialog = dialog;
        this.router = router;
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.formOptions = [];
        this.optionColorFilter = '#000000';
        this.openOption = {};
        this.enabledControls = [];
        this.showSubitem = true;
    }
    ngOnInit() {
        this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.geoDataService.groups.subscribe((next) => {
            this.groups = next;
        });
        this.geoDataService.groupsFeatures.subscribe((next) => {
            this.groupsFeatures = next;
        });
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
        this.formOptions = [];
        this.formType = 'text';
        this.formName = '';
        this.formLabel = '';
        this.formValue = '';
        this.formRequired = false;
        this.enabledControls = ['Text', 'Checkbox', 'Radio', 'Dropdown', 'Color'];
    }
    inputFormLabel(event) {
        this.formLabel = event.target.value;
    }
    inputFormColor(event) {
        this.formColor = event.target.value;
    }
    addOptionItem(value) {
        if (value) {
            const formWithValue = this.formOptions.filter((e) => e.label == value);
            if (formWithValue.length == 0 && value.length != 0) {
                this.formOptions.push({
                    label: value,
                    color: this.optionColorFilter,
                });
            }
        }
    }
    deleteOption(opt) {
        this.formOptions = this.formOptions.filter((option) => option.label != opt.label);
    }
    openRenameModal(template, name) {
        this.selectedGroup = name;
        this.dialog.open(template);
    }
    openRenameOptionModal(template) {
        this.dialog.open(template);
    }
    renameOption(opt, label) {
        label = label.toLowerCase();
        this.formOptions.forEach((e) => {
            if (e.label == opt.label) {
                e.label = label;
            }
        });
    }
    selectInputForm(name) {
        this.formType = name;
        this.formLabel = '';
        this.formOptions = [];
    }
    clearOption() {
        this.optionFilter = '';
    }
    clearLabel() {
        this.labelFilter = '';
    }
    clearOptionColor() {
        this.optionColorFilter = '#000000';
    }
    clear() {
        this.clearLabel();
        this.clearOptionColor();
        this.clearOption();
    }
    addFormItem() {
        // Assemble the new tag
        const formItem = {
            type: this.formType,
            groupName: this.activeGroup.name,
            label: this.formLabel,
            options: [],
        };
        this.openOption[this.formLabel] = false;
        // Adds the options for drop down, checklist, and radio buttons
        if (this.formType !== 'text' && this.formOptions.length != 0) {
            const myOpts = [];
            for (const opt of this.formOptions) {
                myOpts.push({
                    label: opt,
                });
            }
            formItem.options = this.formOptions;
        }
        this.formsService.createForm(this.activeProject.id, formItem, this.groups.get(this.activeGroup.name), this.groupsFeatures.get(this.activeGroup.name));
        // Reset user-defined fields to blank options
        this.formLabel = '';
        this.formColor = '';
        this.formOptions = [];
        this.groupsService.setShowTagGenerator(false);
        this.clear();
    }
    cancelCreate() {
        this.groupsService.setShowTagGenerator(false);
        this.clear();
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
    }
};
TagGeneratorComponent.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__["GeoDataService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"] }
];
TagGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag-generator.component.scss */ "./src/app/components/side-bar/tag-generator/tag-generator.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_6__["GeoDataService"],
        src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"]])
], TagGeneratorComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FormCheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheckBoxComponent", function() { return FormCheckBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feature.service */ "./src/app/services/feature.service.ts");
/* harmony import */ var src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var src_app_services_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");








let FormCheckBoxComponent = class FormCheckBoxComponent {
    constructor(formsService, groupsService, geoDataService, projectsService, featureService) {
        this.formsService = formsService;
        this.groupsService = groupsService;
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.featureService = featureService;
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = [];
    }
    ngOnInit() {
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
            this.value = this.formsService.getTagValue(next, this.form);
            this.formValue.emit({ id: this.form.id, value: this.value });
        });
        this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
    }
    isChecked(opt) {
        return this.value.some((val) => val.label === opt.label);
    }
    selected(e, option) {
        this.value = this.value.filter((opt) => opt.label !== option.label);
        if (e.target.checked) {
            this.value.push(option);
        }
        this.formValue.emit({ id: this.form.id, value: this.value });
    }
};
FormCheckBoxComponent.ctorParameters = () => [
    { type: src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] },
    { type: src_app_services_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_7__["GeoDataService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] },
    { type: src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormCheckBoxComponent.prototype, "formValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormCheckBoxComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_5__["GroupForm"])
], FormCheckBoxComponent.prototype, "form", void 0);
FormCheckBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-checkbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-checkbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-checkbox/form-checkbox.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"],
        src_app_services_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_7__["GeoDataService"],
        src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"],
        src_app_services_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]])
], FormCheckBoxComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy9mb3JtLWdlbmVyYXRvci9mb3JtLWZpZWxkcy9mb3JtLWNvbG9yL2Zvcm0tY29sb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FormColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormColorComponent", function() { return FormColorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");






let FormColorComponent = class FormColorComponent {
    constructor(formsService, projectsService, geoDataService) {
        this.formsService = formsService;
        this.projectsService = projectsService;
        this.geoDataService = geoDataService;
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.field = {};
        this.chosenColor = '#ffffff';
        this.value = {};
    }
    ngOnInit() {
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.value = this.formsService.getTagValue(next, this.form);
            this.chosenTag = this.value.label;
            this.formValue.emit({ id: this.form.id, value: this.value });
        });
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
        this.geoDataService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
        });
    }
    updateCheckedTag() {
        this.value = this.form.options.find((opt) => opt.label === this.chosenTag);
        this.formsService.saveStyles(this.activeProject.id, [this.activeGroupFeature], this.activeGroup, this.value.color);
        this.formValue.emit({ id: this.form.id, value: this.value });
    }
};
FormColorComponent.ctorParameters = () => [
    { type: src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormColorComponent.prototype, "formValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormColorComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_3__["GroupForm"])
], FormColorComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormColorComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormColorComponent.prototype, "label", void 0);
FormColorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-color',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-color.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-color.component.scss */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-color/form-color.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"]])
], FormColorComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FormDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDropDownComponent", function() { return FormDropDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");





let FormDropDownComponent = class FormDropDownComponent {
    constructor(formsService, geoDataService) {
        this.formsService = formsService;
        this.geoDataService = geoDataService;
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.field = {};
    }
    ngOnInit() {
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.value = this.formsService.getTagValue(next, this.form);
            this.formValue.emit({ id: this.form.id, value: this.value });
        });
    }
    updateCheckedTag() {
        this.formValue.emit({ id: this.form.id, value: this.value });
    }
};
FormDropDownComponent.ctorParameters = () => [
    { type: src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormDropDownComponent.prototype, "formValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormDropDownComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_3__["GroupForm"])
], FormDropDownComponent.prototype, "form", void 0);
FormDropDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-dropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-dropdown/form-dropdown.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"]])
], FormDropDownComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FormFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldsComponent", function() { return FormFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormFieldsComponent = class FormFieldsComponent {
    constructor() { }
    // This file and the HTML connected to this is useless so don't worry about it
    ngOnInit() { }
};
FormFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-fields',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-fields.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-fields.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldsComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .drop-container {\n  background: #fff;\n  border-radius: 6px;\n  height: 150px;\n  width: 100%;\n  box-shadow: 1px 2px 20px rgba(10, 10, 10, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px dashed #c0c4c7;\n}\n:host p {\n  font-size: 16px;\n  font-weight: 400;\n  color: #c0c4c7;\n}\n:host .upload-button {\n  display: inline-block;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: #5754a3;\n}\n:host .upload-button input {\n  display: none;\n}\n:host .dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0;\n}\n:host .dropzone.hovering {\n  border: 2px solid #f16624;\n  color: #dadada !important;\n}\n:host progress::-webkit-progress-value {\n  transition: width 0.1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvZm9ybS1nZW5lcmF0b3IvZm9ybS1maWVsZHMvZm9ybS1maWxlL2Zvcm0tZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL2Zvcm0tZ2VuZXJhdG9yL2Zvcm0tZmllbGRzL2Zvcm0tZmlsZS9mb3JtLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE9FO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUUU7RUFDRSwyQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL2Zvcm0tZ2VuZXJhdG9yL2Zvcm0tZmllbGRzL2Zvcm0tZmlsZS9mb3JtLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5kcm9wLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggaHNsYSgwLCAwJSwgNCUsIDAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjYzBjNGM3O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNjMGM0Yzc7XG4gIH1cblxuICAudXBsb2FkLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzU3NTRhMztcbiAgfVxuXG4gIC51cGxvYWQtYnV0dG9uIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRyb3B6b25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAuZHJvcHpvbmUuaG92ZXJpbmcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XG4gICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbiAgfVxuXG4gIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzIGVhc2U7XG4gIH1cbn1cbiIsIjpob3N0IC5kcm9wLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMjBweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2MwYzRjNztcbn1cbjpob3N0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjYzBjNGM3O1xufVxuOmhvc3QgLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzU3NTRhMztcbn1cbjpob3N0IC51cGxvYWQtYnV0dG9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMDtcbn1cbjpob3N0IC5kcm9wem9uZS5ob3ZlcmluZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XG4gIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XG59XG46aG9zdCBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FormFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFileComponent", function() { return FormFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormFileComponent = class FormFileComponent {
    constructor() {
        this.field = {};
    }
    ngOnChange() {
        console.log(this.field.value);
    }
};
FormFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-file',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-file.component.scss */ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-file/form-file.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFileComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FormRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRadioComponent", function() { return FormRadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");





let FormRadioComponent = class FormRadioComponent {
    constructor(formsService, geoDataService) {
        this.formsService = formsService;
        this.geoDataService = geoDataService;
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.field = {};
    }
    ngOnInit() {
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.value = this.formsService.getTagValue(next, this.form);
            this.formValue.emit({ id: this.form.id, value: this.value });
        });
    }
    updateCheckedTag() {
        this.formValue.emit({ id: this.form.id, value: this.value });
    }
};
FormRadioComponent.ctorParameters = () => [
    { type: src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormRadioComponent.prototype, "formValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormRadioComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_3__["GroupForm"])
], FormRadioComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormRadioComponent.prototype, "label", void 0);
FormRadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-radio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-radio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-radio/form-radio.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"]])
], FormRadioComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FormTextBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTextBoxComponent", function() { return FormTextBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");





let FormTextBoxComponent = class FormTextBoxComponent {
    constructor(formsService, geoDataService) {
        this.formsService = formsService;
        this.geoDataService = geoDataService;
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.field = {};
        this.value = '';
    }
    ngOnInit() {
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.value = this.formsService.getTagValue(next, this.form);
            this.formValue.emit({ id: this.form.id, value: this.value });
        });
    }
    updateValue() {
        this.formValue.emit({ id: this.form.id, value: this.value });
    }
};
FormTextBoxComponent.ctorParameters = () => [
    { type: src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormTextBoxComponent.prototype, "formValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormTextBoxComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_3__["GroupForm"])
], FormTextBoxComponent.prototype, "form", void 0);
FormTextBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-textbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-textbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-fields/form-textbox/form-textbox.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"]])
], FormTextBoxComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  text-align: left;\n}\n:host .mat-form-field {\n  width: 100%;\n  text-align: left;\n}\n:host .input-group {\n  padding: 5px;\n}\n:host label {\n  padding: 5px;\n}\n:host input {\n  padding: 5px;\n  vertical-align: middle;\n}\n:host .radio-group {\n  display: flex;\n  flex-direction: column;\n}\n:host .form-controls {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvZm9ybS1nZW5lcmF0b3IvZm9ybS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy9mb3JtLWdlbmVyYXRvci9mb3JtLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvZm9ybS1nZW5lcmF0b3IvZm9ybS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgbGFiZWwge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbHMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLmlucHV0LWdyb3VwIHtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG59XG46aG9zdCBpbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjpob3N0IC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuZm9ybS1jb250cm9scyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGeneratorComponent", function() { return FormGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/models */ "./src/app/models/models.ts");




let FormGeneratorComponent = class FormGeneratorComponent {
    constructor() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checked = false;
        this.colorArray = [];
        this.values = [];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.generateColors();
    }
    // Generates a key:value list of colors ranging from green (#00FF00) to red (#FF0000) based on passed in info
    generateColors() {
        let itemCount = this.form.options.length;
        let isOdd = false;
        if (itemCount % 2 === 1) {
            // if there are an odd number of items in the collection, mark it and decriment the counter
            isOdd = true;
            itemCount--;
        }
        // Subtract 2 from item count (first entry is always green, #00FF00, last entry is always red, #FF0000
        // Then half the item count, and use it to divide 255, this gives the amount we have to increment the colors
        itemCount = (itemCount - 2) / 2;
        let incrementVal = Math.floor(255 / itemCount);
        if (incrementVal === 255) {
            incrementVal = Math.floor(incrementVal / 2);
        }
        this.colorArray.push('#00FF00');
        let baseNum = 0;
        let temp;
        // First loop, counts up from zero towards 255
        for (let index = 0; index < itemCount; index++) {
            baseNum = baseNum + incrementVal;
            temp = baseNum.toString(16);
            this.colorArray.push(`#${temp}FF00`);
        }
        // if there is an odd number of selections, push full yellow as a midpoint in the gradient
        if (isOdd) {
            this.colorArray.push('#FFFF00');
        }
        baseNum = 255; // Resets baseNum to 255 for the count down
        // Second loop, counts down from 255 towards zero
        for (let index = 0; index < itemCount; index++) {
            baseNum = baseNum - incrementVal;
            temp = baseNum.toString(16);
            if (temp.length != 2) {
                temp = '0' + temp;
            }
            this.colorArray.push(`#FF${temp}00`);
        }
        // Finally, pushes the color code for red onto the stack for the last entry
        this.colorArray.push('#FF0000');
    }
    setValue(formValue) {
        this.newValue.emit(formValue);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_models__WEBPACK_IMPORTED_MODULE_3__["GroupForm"])
], FormGeneratorComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FormGeneratorComponent.prototype, "newValue", void 0);
FormGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-generator.component.scss */ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormGeneratorComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/tag-images.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/tag-images.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-size: 0.8em;\n  display: block;\n}\n:host .subitem-title {\n  text-align: left;\n  display: flex;\n  justify-content: space-between;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #f1f1f1;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #f1f1f1;\n  border-style: solid;\n  padding: 10px;\n  overflow-y: auto;\n  background-color: #ffffff;\n  height: 40vh;\n}\n:host .main-form-container {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .highlight {\n  background-color: #b3e5ff;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #b3e5ff;\n}\n:host .group-container {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .tag-forms {\n  height: 500px;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .form-item-container {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .button-group {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  padding: 3px;\n  font-size: 17px;\n  font-weight: bold;\n}\n:host .list-group {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGFyay90YWdnaXQyLjAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvdGFnLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL3RhZy1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNERjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0ZKO0FES0U7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FET0U7RUFDRSxhQUFBO0FDTEo7QURRRTtFQUNFLGlCQUFBO0FDTko7QURTRTtFQUNFLHlCQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7QUNSSjtBRFdFO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEWUU7RUFDRSx5QkFBQTtBQ1ZKO0FEYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNYSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVFO0VBR0UsYUFBQTtBQ2ZKO0FEa0JFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNoQko7QURtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNqQko7QURvQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ2xCSjtBRHFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ25CSjtBRHNCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNwQko7QUR1QkU7RUFDRSxZQUFBO0FDckJKO0FEd0JFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLHlCQUFBO0FDeEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL3RhZy1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuXG4gIC5zdWJpdGVtLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIH1cblxuICAuc3ViaXRlbSB7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cblxuICAubWFpbi1mb3JtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5zdWJpdGVtLXNjcm9sbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5zdWJpdGVtLXNjcm9sbCB7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cblxuICAuaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZmO1xuICB9XG5cbiAgLmJveGVkIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm94ZWQgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cblxuICAuYm94ZWQgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmY7XG4gIH1cblxuICAuZ3JvdXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zZWxlY3QtZ3JvdXAge1xuICAgIG1heC1oZWlnaHQ6IDIwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgfVxuXG4gIC50YWctZm9ybXMge1xuICAgIC8vIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAvLyBoZWlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5hc3NldC1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cblxuICAuYXNzZXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cblxuICAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCBkaXYge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuXG4gIC5uYW1lLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmxpc3Qtc3Vib3B0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5zdWJpdGVtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuOmhvc3QgLnN1Yml0ZW0ge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuICBib3JkZXItY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogNDB2aDtcbn1cbjpob3N0IC5tYWluLWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IC5zdWJpdGVtLXNjcm9sbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuc3ViaXRlbS1zY3JvbGwge1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZmO1xufVxuOmhvc3QgLmJveGVkIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5ib3hlZCBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuOmhvc3QgLmJveGVkIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmY7XG59XG46aG9zdCAuZ3JvdXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuc2VsZWN0LWdyb3VwIHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC50YWctZm9ybXMge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuOmhvc3QgLmFzc2V0LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAyMCU7XG4gIGhlaWdodDogMjAlO1xufVxuOmhvc3QgLmFzc2V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnByZXNldC1kZXNjcmlwdGlvbnMge1xuICBtYXgtaGVpZ2h0OiAyMCU7XG4gIGhlaWdodDogMjAlO1xufVxuOmhvc3QgLmZvcm0taXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIGRpdiB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5saXN0LXN1Ym9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/tag-images.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/tag-images.component.ts ***!
  \************************************************************************/
/*! exports provided: TagImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagImagesComponent", function() { return TagImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");








let TagImagesComponent = class TagImagesComponent {
    constructor(groupsService, formsService, dialog, projectsService, geoDataService) {
        this.groupsService = groupsService;
        this.formsService = formsService;
        this.dialog = dialog;
        this.projectsService = projectsService;
        this.geoDataService = geoDataService;
        this.showSubitem = true;
        this.formList = [];
        this.tagName = '';
        this.tagValues = [];
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.geoDataService.activeGroup, this.geoDataService.groupsFeatures, this.geoDataService.groups).subscribe(([grp, grpFts, grps]) => {
            this.activeGroup = grp;
            this.groupsFeatures = grpFts;
            this.groups = grps;
            if (grp) {
                this.formList = grp.forms;
            }
        });
        this.geoDataService.activeGroupFeature.subscribe((next) => {
            this.activeGroupFeature = next;
        });
        this.projectsService.activeProject.subscribe((next) => {
            this.activeProject = next;
        });
    }
    openRenameModal(template, name) {
        this.selectedGroup = name;
        this.dialog.open(template);
    }
    // Takes the name of the tag's group, and the tag itself to delete
    deleteForm(tag) {
        this.formsService.deleteForm(this.activeProject.id, tag, this.groups.get(this.activeGroup.name), this.groupsFeatures.get(this.activeGroup.name));
    }
    // submits a tag's name change to geoAPI
    renameForm(tag) {
        this.formsService.renameForm(this.activeProject.id, tag, this.groups.get(this.activeGroup.name), this.groupsFeatures.get(this.activeGroup.name), this.tagName);
        // Reset newTagValue for the next rename
        this.tagName = '';
        this.dialog.closeAll(); // Ensures the window closes when using enter-submission
    }
    showTagGenerator() {
        this.groupsService.setShowTagGenerator(true);
    }
    saveTags() {
        this.formsService.updateTagValues(this.activeProject, this.activeGroupFeature, this.formList, this.tagValues);
    }
    setValue(formValue) {
        this.tagValues = this.tagValues.filter((value) => value.id !== formValue.id);
        this.tagValues.push(formValue);
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
    }
};
TagImagesComponent.ctorParameters = () => [
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_7__["GroupsService"] },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_6__["FormsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"] }
];
TagImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag-images.component.scss */ "./src/app/components/side-bar/tag-images/tag-images.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_7__["GroupsService"],
        _services_forms_service__WEBPACK_IMPORTED_MODULE_6__["FormsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"],
        src_app_services_geo_data_service__WEBPACK_IMPORTED_MODULE_4__["GeoDataService"]])
], TagImagesComponent);



/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: Group, TagGroup, GroupForm, Tag, TagValue, AssetFilters, Project, ProjectRequest, AuthToken, FeatureAsset, FeatureStyles, FeatureCollection, Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagGroup", function() { return TagGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupForm", function() { return GroupForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagValue", function() { return TagValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetFilters", function() { return AssetFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRequest", function() { return ProjectRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureAsset", function() { return FeatureAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureStyles", function() { return FeatureStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollection", function() { return FeatureCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Group {
}
class TagGroup {
}
class GroupForm {
}
class Tag {
}
class TagValue {
}
class AssetFilters {
    constructor() {
        // bbox has the following format: [sw_lng, sw_lat, ne_lng, ne_lat], the same as leaflet
        this.bbox = [];
        this.assetType = new Set();
    }
    updateAssetTypes(assetType) {
        this.assetType.has(assetType)
            ? this.assetType.delete(assetType)
            : this.assetType.add(assetType);
    }
    updateBBox(bbox) {
        this.bbox = bbox;
    }
    toJson() {
        return {
            assetType: [...this.assetType],
            bbox: this.bbox,
        };
    }
}
class Project {
}
class ProjectRequest {
}
class AuthToken {
    /**
     *
     * @param token : String
     * @param expires: Date
     */
    constructor(token, expires) {
        this.token = token;
        this.expires = new Date(expires);
    }
    static fromExpiresIn(token, expires_in) {
        const expires = new Date(new Date().getTime() + expires_in * 1000);
        return new AuthToken(token, expires);
    }
    /**
     * Checks if the token is expired or not
     */
    isExpired() {
        return new Date().getTime() > this.expires.getTime();
    }
}
class FeatureAsset {
    // TODO: Implenent this
    get assetPath() {
        return '';
    }
}
class FeatureStyles {
}
class FeatureCollection {
}
class Feature {
    constructor(f) {
        this.geometry = f.geometry;
        this.properties = f.properties;
        this.id = f.id;
        this.type = f.type;
        this.assets = f.assets;
        this.styles = f.styles;
        this.project_id = f.project_id;
    }
    initialAsset() {
        return this.assets[0];
    }
    featureType() {
        if (this.assets && this.assets.length === 1) {
            return this.initialAsset().asset_type;
        }
        if (this.assets && this.assets.length > 1) {
            return 'collection';
        }
        if (!this.assets.length) {
            return this.geometry.type;
        }
    }
    featurePath() {
        const initialAsset = this.initialAsset();
        if (initialAsset.display_path) {
            return initialAsset.display_path;
        }
        else if (initialAsset.path) {
            return initialAsset.path;
        }
        else {
            return this.id.toString();
        }
    }
    featureShortPath() {
        const [initialAsset] = this.assets;
        if (initialAsset.display_path) {
            return /[^/]*$/.exec(initialAsset.display_path)[0];
        }
        else if (initialAsset.path) {
            const path = /[^/]*$/.exec(initialAsset.path)[0];
            return path.slice(0, 15) + '...';
        }
        else {
            return this.id.toString();
        }
    }
}


/***/ }),

/***/ "./src/app/services/agave-systems.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/agave-systems.service.ts ***!
  \***************************************************/
/*! exports provided: AgaveSystemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgaveSystemsService", function() { return AgaveSystemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AgaveSystemsService = class AgaveSystemsService {
    constructor(tapis) {
        this.tapis = tapis;
        this.baseUrl = 'https://agave.designsafe-ci.org/systems/v2/';
        this._systems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.systems = this._systems.asObservable();
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.projects = this._projects.asObservable();
    }
    // list() runs when the file browser is opened, retrieves all files in TACC for given user
    list() {
        this.tapis.systemsList({ type: 'STORAGE' }).subscribe((resp) => {
            this._systems.next(resp.result);
            this._projects.next(resp.result.filter((sys) => sys.id.startsWith('project')));
        }, (error) => {
            this._systems.next(null);
            this._projects.next(null);
        });
    }
};
AgaveSystemsService.ctorParameters = () => [
    { type: ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AgaveSystemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], AgaveSystemsService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticatedUser, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedUser", function() { return AuthenticatedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







class AuthenticatedUser {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.currentUser = this._currentUser.asObservable();
        this.LS_TOKEN_KEY = 'hazmapperToken';
        this.LS_USER_KEY = 'hazmapperUser';
    }
    login() {
        // First, check if the user has a token in localStorage
        const tokenStr = localStorage.getItem(this.LS_TOKEN_KEY);
        if (!tokenStr) {
            this.redirectToauthenticaor();
        }
        else {
            const token = JSON.parse(tokenStr);
            this.userToken = new _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"](token.token, new Date(token.expires));
            if (!this.userToken || this.userToken.isExpired()) {
                this.logout();
                this.redirectToauthenticaor();
            }
            this.getUserInfo();
        }
    }
    redirectToauthenticaor() {
        const client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientId;
        const callback = location.origin + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseHref + 'callback';
        const state = Math.random().toString(36);
        const AUTH_URL = `https://agave.designsafe-ci.org/authorize?scope=openid&client_id=${client_id}&response_type=token&redirect_uri=${callback}&state=${state}`;
        window.location.href = AUTH_URL;
    }
    /**
     * Checks to make sure that the user has a token and the token is not expired;
     */
    isLoggedIn() {
        return this.userToken && !this.userToken.isExpired();
    }
    logout() {
        this.userToken = null;
        localStorage.removeItem(this.LS_TOKEN_KEY);
        localStorage.removeItem(this.LS_USER_KEY);
    }
    setToken(token, expires) {
        this.userToken = _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"].fromExpiresIn(token, expires);
        localStorage.setItem(this.LS_TOKEN_KEY, JSON.stringify(this.userToken));
        // hit the wso2 api to retrieve the username etc
        this.router.navigate(['/']);
    }
    getUserInfo() {
        const INFO_URL = `https://agave.designsafe-ci.org/oauth2/userinfo?schema=openid`;
        const userStr = localStorage.getItem(this.LS_USER_KEY);
        const user = JSON.parse(userStr);
        if (user !== null) {
            this._currentUser.next(new AuthenticatedUser(user.username, user.email));
        }
        else {
            this.http.get(INFO_URL).subscribe((resp) => {
                const u = new AuthenticatedUser(resp.name, resp.email);
                localStorage.setItem(this.LS_USER_KEY, JSON.stringify(u));
                this._currentUser.next(u);
            });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/feature.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/feature.service.ts ***!
  \*********************************************/
/*! exports provided: FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo-data.service */ "./src/app/services/geo-data.service.ts");




let FeatureService = class FeatureService {
    constructor(geoDataService) {
        this.geoDataService = geoDataService;
        this._features = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: 'FeatureCollection',
            features: [],
        });
        this.features$ = this._features.asObservable();
        this.geoDataService.features.subscribe((fc) => {
            this._features.next(fc);
            this.featureCollection = fc;
        });
    }
    // Takes the feature to be deleted, and filters it out of the feature list
    deleteFeature(feat) {
        this.featureCollection.features = this.featureCollection.features.filter((featListfeat) => featListfeat.id != feat.id);
        this._features.next(this.featureCollection); // Update the observable
        this.geoDataService.deleteFeature(feat);
    }
    // Takes a list of features, and deletes them from the observable in a more efficient manner
    bulkFeatureDelete(delFeats) {
        delFeats.forEach((feat) => {
            // Filter out every feature in delFeats from the master list
            this.featureCollection.features = this.featureCollection.features.filter((featListFeature) => featListFeature.id != feat.id);
            this.geoDataService.deleteFeature(feat);
        });
        this._features.next(this.featureCollection); // Update the observable with the filtered list
    }
    saveFeature(feat) {
        this.geoDataService.updateFeatureProperty(feat.project_id, Number(feat.id), feat.properties);
    }
    // Takes a feature, and optionally an updated property section
    // If featprop is null, it assumes the passed in feature was already updated with the new properties
    updateFeatureProperties(feature, featProp = null) {
        // If featprop has a value, update the feature's properties to the new section
        if (featProp != null) {
            feature.properties = featProp;
        }
        // Update and save the list
        this.featureCollection.features.forEach((feat) => {
            if (feat.id == feature.id) {
                feat = feature;
            }
        });
        this.saveFeature(feature);
    }
};
FeatureService.ctorParameters = () => [
    { type: _geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"] }
];
FeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"]])
], FeatureService);



/***/ }),

/***/ "./src/app/services/forms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




let FormsService = class FormsService {
    constructor(geoDataService) {
        this.geoDataService = geoDataService;
    }
    deleteForm(projectId, form, activeGroup, featureGroups) {
        const taggedGroup = Object.assign({}, activeGroup, { forms: activeGroup.forms.filter((t) => t.id !== form.id) });
        this.geoDataService.updateGroupFeatures(projectId, featureGroups, taggedGroup);
    }
    renameForm(projectId, targetForm, activeGroup, featureGroups, newName) {
        const taggedGroup = Object.assign({}, activeGroup, { forms: [
                ...activeGroup.forms.filter((form) => form.id !== targetForm.id),
                Object.assign({}, targetForm, { label: newName }),
            ] });
        this.geoDataService.updateGroupFeatures(projectId, featureGroups, taggedGroup);
    }
    createForm(projectId, form, activeGroup, featureGroups) {
        const id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        form = Object.assign({}, form, { id });
        const taggedGroup = Object.assign({}, activeGroup, { forms: activeGroup.forms ? [...activeGroup.forms, form] : [form] });
        this.geoDataService.updateGroupFeatures(projectId, featureGroups, taggedGroup);
    }
    checkDefault(selectedColor, feature) {
        if (selectedColor === 'default') {
            try {
                selectedColor = feature.styles.color;
            }
            catch (error) {
                selectedColor = '#00C8FF';
            }
        }
        return selectedColor;
    }
    // Inputs:
    // color:string A 7 digit hexadecimal string (#RRGGBB) passed in from a color tag
    // This method accesses group services to retrive the current group's icon as well
    saveStyles(projectId, featureList, group, color, icon) {
        const style = {
            color: color ? color : '#00C8FF',
            faIcon: icon ? icon : group.icon,
        };
        this.geoDataService.updateGroupFeatures(projectId, featureList, group, style);
    }
    updateTagValue(activeProject, feature, form, tagValue) {
        let tagProp = feature.properties.tags ? feature.properties.tags : [];
        tagProp = tagProp.filter((tag) => form.id !== tag.id);
        const tag = {
            id: form.id,
            value: tagValue,
        };
        feature.properties.tags = [...tagProp, tag];
        this.geoDataService.updateFeatureProperty(activeProject.id, feature.id, feature.properties);
    }
    updateTagValues(activeProject, feature, formList, newValues) {
        feature.properties.tags = newValues;
        this.geoDataService.updateFeatureProperty(activeProject.id, feature.id, feature.properties);
    }
    getTagValue(feature, form) {
        if (feature.properties.tags) {
            const tagValueObj = feature.properties.tags.find((featTag) => featTag.id && featTag.id === form.id);
            if (tagValueObj) {
                return tagValueObj.value;
            }
        }
        if (form.type === 'checkbox') {
            return [];
        }
        else {
            return '';
        }
    }
};
FormsService.ctorParameters = () => [
    { type: _geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] }
];
FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"]])
], FormsService);



/***/ }),

/***/ "./src/app/services/geo-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/geo-data.service.ts ***!
  \**********************************************/
/*! exports provided: GeoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoDataService", function() { return GeoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _scroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _utils_randomColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/randomColor */ "./src/app/utils/randomColor.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__);













let GeoDataService = class GeoDataService {
    constructor(http, notificationsService, scrollService) {
        this.http = http;
        this.notificationsService = notificationsService;
        this.scrollService = scrollService;
        this._pointClouds = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.pointClouds = this._pointClouds.asObservable();
        this._loaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loaded = this._loaded.asObservable();
        this._activeGroupId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.activeGroupId = this._activeGroupId.asObservable();
        this._activeGroup = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.activeGroup = this._activeGroup.asObservable();
        this._activeGroupFeature = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.activeGroupFeature = this._activeGroupFeature.asObservable();
        this._groups = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.groups = this._groups.asObservable();
        this._groupsFeatures = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.groupsFeatures = this._groupsFeatures.asObservable();
        this._features = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            type: 'FeatureCollection',
            features: [],
        });
        this.features$ = this._features.asObservable();
        this._activeFeature = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._mapMouseLocation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        // For the style of the basemap, defaults to OpenStreetmap
        this._basemap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('roads');
        // Holds all of the overlays on a project
        this._overlays = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._activeOverlay = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getFeature(projectId, feature) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/${feature.id}/`);
    }
    getFeatures(projectId, query = new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"](), restoreScroll = false) {
        const qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/` + '?' + qstring)
            .subscribe((fc) => {
            fc.features = fc.features.map((feat) => new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat));
            this.getGroups(fc.features);
            this._features.next(fc);
            this._loaded.next(true);
            if (restoreScroll) {
                this.scrollService.setScrollRestored(true);
            }
        }, (error) => {
            this.notificationsService.showErrorToast('Failed to retrieve project data! Geoapi might be down.');
        });
    }
    deleteFeature(feature) {
        this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl +
            `projects/${feature.project_id}/features/${feature.id}/`)
            .subscribe((resp) => {
            this.getFeatures(feature.project_id, new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"](), true);
        });
    }
    getPointClouds(projectId) {
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/point-cloud/`)
            .subscribe((resp) => {
            this._pointClouds.next(resp);
        });
    }
    setActiveGroup(group) {
        this._activeGroup.next(group);
        if (group) {
            const groupFeatures = this._groupsFeatures.value.get(group.name);
            if (!this._activeGroupFeature.value ||
                !groupFeatures.some((gf) => this._activeGroupFeature.value.id === gf.id)) {
                this.setActiveGroupFeature(groupFeatures[0]);
            }
        }
        else {
            this.setActiveGroupFeature(null);
        }
    }
    setActiveGroupFeature(feat) {
        this._activeGroupFeature.next(feat);
    }
    addFeature(feat) {
        this.features$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((current) => {
            current.features.push(feat);
            this._features.next(current);
        });
    }
    addPointCloud(projectId, title, conversionParams) {
        const payload = {
            description: title,
            conversion_parameters: conversionParams,
        };
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/point-cloud/`, payload)
            .subscribe((resp) => {
            this.getPointClouds(projectId);
        }, (error) => {
            this.notificationsService.showErrorToast('Failed to update image property!');
        });
    }
    updateFeatureProperty(projectId, featureId, groupData) {
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl +
            `projects/${projectId}/features/${featureId}/properties/`, groupData)
            .subscribe((resp) => {
            this.getFeatures(projectId);
        }, (error) => {
            this.notificationsService.showErrorToast('Failed to save tag values!');
        });
    }
    // NOTE: unused for now
    updateFeatureStyles(projectId, featureId, styles) {
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl +
            `/projects/${projectId}/features/${featureId}/styles/`, styles)
            .subscribe((resp) => {
            this.getFeatures(projectId);
        }, (error) => {
            this.notificationsService.showErrorToast('Failed to update image style!');
        });
    }
    deletePointCloud(pc) {
        this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${pc.project_id}/point-cloud/${pc.id}/`)
            .subscribe((resp) => {
            this.getPointClouds(pc.project_id);
        });
    }
    addFileToPointCloud(pc, file) {
        const form = new FormData();
        form.append('file', file);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${pc.project_id}/point-cloud/${pc.id}/`, form)
            .subscribe((resp) => {
            console.log(resp);
        });
    }
    // This function updates the underlying observable, so changes naturally flow to feature service
    importFileFromTapis(projectId, files) {
        const tmp = files.map((f) => ({ system: f.system, path: f.path }));
        const payload = {
            files: tmp,
        };
        this.fileList = tmp;
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `projects/${projectId}/features/files/import/`, payload)
            .subscribe((resp) => {
            this.notificationsService.showSuccessToast('Import started!');
        }, (error) => {
            this.notificationsService.showImportErrorToast('Import failed! Try again?');
        });
    }
    // An alternate function for importing images with no GPS data. A feature is created elsewhere, and the image is added to the feature
    // Inputs:
    // projectId: Id number of current project
    // features: A pre-created feature with user-defined or zeroed out gps data
    // file: A Tapis Remote File containing the image to be imported
    importImage(projectId, feature, path) {
        const featureId = feature.id;
        let file;
        this.fileList.forEach((remoteFile) => {
            if (remoteFile.path == path) {
                file = remoteFile;
            }
        });
        const payload = { system_id: file.system, path: file.path };
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl +
            `projects/${projectId}/features/${featureId}/assets/`, payload)
            .subscribe((resp) => {
            this.notificationsService.showSuccessToast('Import started!');
            // this.getFeatures(projectId)
        });
    }
    // Creates a new feature from an uploaded locally created feature
    uploadNewFeature(projectId, feature, path) {
        const payload = feature;
        let response;
        // Calls the addFeatureAsset route in GeoAPI, resp is a list of features
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `projects/${projectId}/features/`, payload)
            .subscribe((resp) => {
            response = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](resp[0]);
            this.importImage(projectId, response, path);
        });
    }
    downloadGeoJSON(projectId, query = new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"]()) {
        const qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());
        const downloadLink = document.createElement('a');
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/` + '?' + qstring)
            .subscribe((resp) => {
            const blob = new Blob([JSON.stringify(resp)], {
                type: 'application/json',
            });
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.setAttribute('download', 'hazmapper.json');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }
    uploadFile(projectId, file) {
        const form = new FormData();
        form.append('file', file, file.name);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/files/`, form)
            .subscribe((feats) => {
            feats.forEach((feat) => {
                this.addFeature(new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat));
            });
        }, (error) => {
            // TODO: Add notification
        });
    }
    uploadAssetFile(projectId, featureId, file) {
        const form = new FormData();
        form.append('file', file, file.name);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl +
            `/api/projects/${projectId}/features/${featureId}/assets/`, form)
            .subscribe((feature) => {
            // TODO workaround to update activeFeature
            const f = this._activeFeature.getValue();
            if (f && f.id === featureId) {
                this.activeFeature = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feature);
                this.getFeatures(projectId);
            }
        }, (error) => {
            // TODO: Add notification
        });
    }
    getOverlays(projectId) {
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/overlays/`)
            .subscribe((ovs) => {
            this._overlays.next(ovs);
        });
    }
    addOverlay(projectId, file, label, minLat, maxLat, minLon, maxLon) {
        const payload = new FormData();
        payload.append('file', file);
        payload.append('label', label);
        payload.append('minLat', minLat.toFixed(6));
        payload.append('maxLat', maxLat.toFixed(6));
        payload.append('minLon', minLon.toFixed(6));
        payload.append('maxLon', maxLon.toFixed(6));
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/overlays/`, payload)
            .subscribe((resp) => {
            this.getOverlays(projectId);
        });
    }
    // Call on getFeatures (each time feature update)
    getGroups(featureList) {
        const groups = new Map();
        const groupsFeatures = new Map();
        featureList
            .filter((feat) => feat.properties.group && feat.properties.group.length > 0)
            .forEach((feat) => {
            feat.properties.group.forEach((group) => {
                groupsFeatures.set(group.name, groupsFeatures.has(group.name)
                    ? [...groupsFeatures.get(group.name), feat]
                    : [feat]);
                groups.set(group.name, group);
            });
        });
        this._groups.next(groups);
        this._groupsFeatures.next(groupsFeatures);
        const activeGroup = this._activeGroup.value;
        if (activeGroup) {
            this.setActiveGroup(groups.get(activeGroup.name));
        }
    }
    getGroup(groupName) {
        return this._groups.value.get(groupName);
    }
    getGroupFeatures(featureList, group) {
        return featureList.filter((feat) => feat.properties.group &&
            feat.properties.group.length &&
            feat.properties.group.some((grp) => grp.id === group.id));
    }
    createGroup(featureList, group, style) {
        return featureList.map((feat) => {
            let groupProp = feat.properties.group ? feat.properties.group : [];
            groupProp = groupProp.filter((grp) => grp.id !== group.id);
            groupProp.push(group);
            feat.properties.group = groupProp;
            feat.properties.style = style
                ? style
                : feat.properties.style
                    ? feat.properties.style
                    : {};
            return feat;
        });
    }
    updateGroup(featureList, group, style) {
        return this.getGroupFeatures(featureList, group).map((feat) => {
            const groupProp = feat.properties.group.filter((grp) => grp.id !== group.id);
            groupProp.push(group);
            feat.properties.group = groupProp;
            feat.properties.style = style
                ? style
                : feat.properties.style
                    ? feat.properties.style
                    : {};
            return feat;
        });
    }
    deleteGroup(featureList, group) {
        return this.getGroupFeatures(featureList, group).map((feat) => {
            feat.properties.group = feat.properties.group.filter((grp) => grp.id !== group.id);
            return feat;
        });
    }
    createNewGroup(projectId, featureList, name) {
        const id = Object(uuid__WEBPACK_IMPORTED_MODULE_11__["v4"])();
        const myRandColor = Object(_utils_randomColor__WEBPACK_IMPORTED_MODULE_10__["getRandomColor"])();
        const group = {
            id,
            name,
            color: myRandColor,
            icon: 'fa-house-damage',
        };
        const style = {
            color: myRandColor,
            faIcon: 'fa-house-damage',
        };
        this.createGroupFeatures(projectId, featureList, group, style);
        return group;
    }
    createGroupFeatures(projectId, featureList, group, style) {
        if (style) {
            this.createGroup(featureList, group, style).forEach((feat) => {
                this.updateFeatureProperty(projectId, feat.id, feat.properties);
            });
        }
        else {
            this.createGroup(featureList, group).forEach((feat) => {
                this.updateFeatureProperty(projectId, feat.id, feat.properties);
            });
        }
    }
    deleteGroupFeatures(projectId, featureList, group) {
        this.deleteGroup(featureList, group).forEach((feat) => {
            this.updateFeatureProperty(projectId, feat.id, feat.properties);
        });
    }
    updateGroupFeatures(projectId, featureList, group, style) {
        if (style) {
            this.updateGroup(featureList, group, style).forEach((feat) => {
                this.updateFeatureProperty(projectId, feat.id, feat.properties);
            });
        }
        else {
            this.updateGroup(featureList, group).forEach((feat) => {
                this.updateFeatureProperty(projectId, feat.id, feat.properties);
            });
        }
    }
    renameGroup(projectId, featureList, group, name) {
        const renamedGroup = Object.assign({}, group, { name });
        this.updateGroupFeatures(projectId, featureList, renamedGroup);
    }
    reiconGroup(projectId, featureList, group, icon) {
        const reiconedGroup = Object.assign({}, group, { icon });
        const reiconedStyle = {
            faIcon: icon,
            color: group.color ? group.color : '#00C8FF',
        };
        this.updateGroupFeatures(projectId, featureList, reiconedGroup, reiconedStyle);
    }
    get overlays() {
        return this._overlays.asObservable();
    }
    get features() {
        return this._features.asObservable();
    }
    get activeFeature() {
        return this._activeFeature.asObservable();
    }
    // TODO: This is heinous
    set activeFeature(f) {
        if (f) {
            if (f === this._activeFeature.getValue()) {
                this._activeFeature.next(null);
            }
            else {
                this._activeFeature.next(f);
            }
        }
        else {
            this._activeFeature.next(null);
        }
    }
    get activeOverlay() {
        return this._activeOverlay.asObservable();
    }
    set activeOverlay(ov) {
        this._activeOverlay.next(ov);
    }
    get mapMouseLocation() {
        return this._mapMouseLocation.asObservable();
    }
    set mapMouseLocation(loc) {
        this._mapMouseLocation.next(loc);
    }
    set basemap(bmap) {
        this._basemap.next(bmap);
    }
    get basemap() {
        return this._basemap.asObservable();
    }
};
GeoDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"] },
    { type: _scroll_service__WEBPACK_IMPORTED_MODULE_9__["ScrollService"] }
];
GeoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"],
        _scroll_service__WEBPACK_IMPORTED_MODULE_9__["ScrollService"]])
], GeoDataService);



/***/ }),

/***/ "./src/app/services/groups.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/groups.service.ts ***!
  \********************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// Will inject Projects and GeoData Service to get properties of Feature
let GroupsService = class GroupsService {
    constructor() {
        this._selectedImages = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.selectedImages = this._selectedImages.asObservable();
        this._showTagger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showTagger = this._showTagger.asObservable();
        this._showTagGenerator = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showTagGenerator = this._showTagGenerator.asObservable();
    }
    imageSelected(feature) {
        const currentFeatures = this._selectedImages.value;
        return currentFeatures.some((feat) => feat.id === feature.id);
    }
    unselectAllImages() {
        this._selectedImages.next([]);
    }
    toggleImageSelect(feature) {
        const currentFeatures = this._selectedImages.value;
        const newFeatures = this.imageSelected(feature)
            ? currentFeatures.filter((feat) => feat.id !== feature.id)
            : [feature, ...currentFeatures];
        this._selectedImages.next(newFeatures);
    }
    setSelectedImages(selectedImages) {
        this._selectedImages.next(selectedImages);
    }
    toggleTagger() {
        this._showTagger.next(!this._showTagger.value);
    }
    setShowTagGenerator(value) {
        this._showTagGenerator.next(value);
    }
};
GroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupsService);



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");







let NotificationsService = class NotificationsService {
    constructor(toastr, http, authService) {
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        // Interval time to get notifications in millisecs
        this.TIMEOUT = 5000;
        this._notifications = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.notifications = this._notifications.asObservable();
        if (this.authService.isLoggedIn()) {
            const timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(this.TIMEOUT);
            timer.subscribe((next) => {
                this.getRecent();
            });
        }
    }
    // Sends a request to GeoAPI to retrieve recent notifications
    getRecent() {
        const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'notifications/';
        const now = new Date();
        const then = new Date(now.getTime() - this.TIMEOUT);
        this.http
            .get(baseUrl + `?startDate=${then.toISOString()}`)
            .subscribe((notes) => {
            this._notifications.next(notes);
            notes.forEach((note) => {
                switch (note.status) {
                    case 'success':
                        this.showSuccessToast(note.message);
                        break;
                    case 'error':
                        this.showErrorToast(note.message);
                        break;
                    default:
                        break;
                }
            });
        });
    }
    showSuccessToast(message) {
        this.toastr.success(message);
    }
    showImportErrorToast(message) {
        this.toastr.error(message + ', trying alternate method');
    }
    showErrorToast(message) {
        this.toastr.error(message);
    }
};
NotificationsService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], NotificationsService);



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.service */ "./src/app/services/notifications.service.ts");








let ProjectsService = class ProjectsService {
    constructor(http, authService, notificationsService) {
        this.http = http;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.projects = this._projects.asObservable();
        this._activeProject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.activeProject = this._activeProject.asObservable();
        this._projectUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.projectUsers$ = this._projectUsers.asObservable();
        this._deletingProjects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.deletingProjects = this._deletingProjects.asObservable();
    }
    testGeoApi() {
        const data = {
            name: 'Awesome Project',
            description: 'Cool project',
        };
        const prom = this.http
            .post(`http://localhost:8888/projects/`, data)
            .subscribe((resp) => {
            this._projects.next([...this._projects.value, resp]);
            // Set the active project to the one just created?
            this._activeProject.next(resp);
        });
        this.http
            .get(`http://localhost:8888/projects/`)
            .subscribe((resp) => {
            this._projects.next(resp);
        });
    }
    updateProjectsList(resp = []) {
        const myProjs = resp.length !== 0 ? resp : this._projects.value;
        this._deletingProjects.value.length !== 0
            ? this._projects.next(myProjs.map((p) => {
                const deletingProj = this._deletingProjects.value.find((dp) => dp.id === p.id);
                return deletingProj ? deletingProj : p;
            }))
            : this._projects.next(myProjs);
    }
    // Queries database for all user projects.
    getProjects() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/`).subscribe((resp) => {
            this.updateProjectsList(resp);
        }, (error) => {
            this.notificationsService.showErrorToast('Error importing files Design Safe, GeoAPI might be down');
        });
    }
    create(data) {
        const prom = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/`, data);
        prom.subscribe((proj) => {
            this._projects.next([...this._projects.value, proj]);
            // Awkward as hell, but this ensures we actually transition to the newly created project
            // Without this, the screen flickers briefly to the new project, but ends up stuck on the old project
            this.setActiveProject(proj);
            this.setActiveProject(proj);
        });
        return prom;
    }
    setActiveProject(proj) {
        // saves change as last visited project
        window.localStorage.setItem('lastProj', JSON.stringify(proj));
        try {
            this._activeProject.next(proj);
        }
        catch (error) {
            return error;
        }
    }
    update(data) {
        this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${data.project.id}/`, data)
            .subscribe((resp) => {
            this._activeProject.next(resp);
        });
    }
    // Note: This will delete the project for everyone, if the project is shared.
    delete(data) {
        this._deletingProjects.next([
            ...this._deletingProjects.value,
            Object.assign({}, data, { deleting: true }),
        ]);
        this.updateProjectsList();
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `projects/${data.id}/`).subscribe((resp) => {
            window.localStorage.setItem('lastProj', JSON.stringify('none'));
            this._deletingProjects.next(this._deletingProjects.value.filter((p) => p.id !== data.id));
            // These next two lines might be causing problems. Adding getProjects causes duplicates during project creation,
            // So I'm thinking that calling these here might be the root of my delete woes, as they're restoring the project I just
            // deleted...
            this.updateProjectsList();
            this.getProjects();
            // As elegant as a brick to the face, but this solves the delete issues...
            window.localStorage.setItem('lastProj', JSON.stringify('none'));
        }, (error) => {
            window.localStorage.setItem('lastProj', JSON.stringify('none'));
            this._deletingProjects.next(this._deletingProjects.value.map((p) => {
                return p.id === data.id
                    ? Object.assign({}, p, { deleting: false, deletingFailed: true }) : p;
            }));
            this.updateProjectsList();
            this.getProjects();
            this.notificationsService.showErrorToast('Could not delete project!');
            console.error(error);
        }); // end of error
    }
    getProjectUsers(proj) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${proj.id}/users/`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((users) => {
            this._projectUsers.next(users);
        }));
    }
    addUserToProject(proj, uname) {
        const payload = {
            username: uname,
        };
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${proj.id}/users/`, payload)
            .subscribe((resp) => {
            this.getProjectUsers(proj).subscribe();
        });
    }
    deleteUserFromProject(proj, user) {
        this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${proj.id}/users/${user}/`)
            .subscribe((resp) => {
            this.getProjectUsers(proj).subscribe();
        }, (error) => {
            // TODO: Create popup for an error message.
            console.log(error);
        });
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] }
];
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]])
], ProjectsService);



/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollService = class ScrollService {
    constructor() {
        this.scrollRestored = true; // if true, the scroll was restored to the proper place
        this.scrollPosition = 0;
    }
    setScrollRestored(change) {
        this.scrollRestored = change;
    }
    setScrollPosition() {
        this.scrollPosition = document.documentElement.scrollTop;
    }
    scroll() {
        // Attempts to scroll to the specified location
        document.documentElement.scroll({ top: this.scrollPosition });
        // if it reaches there, marks the check as complete
        if (document.documentElement.scrollTop == this.scrollPosition) {
            this.scrollRestored = false;
        }
    }
};
ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScrollService);



/***/ }),

/***/ "./src/app/services/tapis-files.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tapis-files.service.ts ***!
  \*************************************************/
/*! exports provided: TapisFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapisFilesService", function() { return TapisFilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







// import { verify } from 'ts-mockito';
let TapisFilesService = class TapisFilesService {
    constructor(tapis, http, authService, popup) {
        this.tapis = tapis;
        this.http = http;
        this.authService = authService;
        this.popup = popup;
        this.baseUrl = 'https://agave.designsafe-ci.org/files/v2/';
        this._listing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listing = this._listing.asObservable();
        this.IMPORTABLE_TYPES = [
            'jpg',
            'jpeg',
            'las',
            'laz',
            'json',
            'geojson',
            'geotiff',
            'tiff',
            'gpx',
        ];
    }
    checkIfSelectable(file) {
        if (file.type === 'dir') {
            return false;
        }
        const ext = this.getFileExtension(file);
        return this.IMPORTABLE_TYPES.includes(ext);
    }
    getFileExtension(file) {
        return file.name.split('.').pop().toLowerCase();
    }
    listFiles(system, path, offset, limit) {
        return this.tapis.filesList({
            systemId: system,
            filePath: path,
            offset,
            limit,
        });
    }
    getParentPath(path) {
        const cleaned = path.replace('//', '/');
        const arr = cleaned.split('/');
        arr.pop();
        const parentPath = arr.join('/');
        return parentPath;
    }
    // saves project to a specified format in Design Safe's my Data section
    export(systemID, path, fileName, extension, data) {
        // Constructs an object that configures the success/error pop-up
        const snackbarConfig = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        };
        // construct the full URL that points to where the data will be stored
        const fullURL = `https://agave.designsafe-ci.org/files/v2/media/system/${systemID}${path}`;
        // construct a file to submit
        let fileType = 'plain/text';
        extension == '.csv'
            ? (fileType = 'text/csv')
            : (fileType = 'application/json');
        const tmp = new Blob([data], { type: fileType });
        const date = new Date();
        const file = new File([tmp], fileName, { lastModified: date.valueOf() });
        // Creates a form data object which holds the file to be uploaded
        const form = new FormData();
        form.append('fileToUpload', file);
        // sends the packaged data to Designsafe. URL its being uploaded to handles authentication
        this.http.post(fullURL, form).subscribe((resp) => {
            console.log(resp);
            const msg = 'Successfully saved file to ' + systemID + path;
            this.popup.open(msg, '', snackbarConfig);
        }, (error) => {
            console.log(error);
            const msg = 'Faled to save file to ' + systemID + path;
            this.popup.open(msg, '', snackbarConfig);
        });
    }
    // Saves the current file directory and file system to Local Storage
    saveState() {
        const sysStr = JSON.stringify(this.lastSystem);
        const fileStr = JSON.stringify(this.lastFile);
        window.localStorage.setItem('system', sysStr);
        window.localStorage.setItem('file', fileStr);
    }
    // Attempts to retrieve the last used state
    getState() {
        try {
            this.lastSystem = JSON.parse(window.localStorage.getItem('system'));
            this.lastFile = JSON.parse(window.localStorage.getItem('file'));
            this.noPreviousSelections = this.lastFile == null;
        }
        catch (error) {
            console.log(error);
        }
    }
};
TapisFilesService.ctorParameters = () => [
    { type: ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
TapisFilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], TapisFilesService);



/***/ }),

/***/ "./src/app/utils/groups.ts":
/*!*********************************!*\
  !*** ./src/app/utils/groups.ts ***!
  \*********************************/
/*! exports provided: groupIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupIcons", function() { return groupIcons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const groupIcons = [
    { id: 'fa-house-damage', unicode: '&#xf6f1; house-damage' },
    { id: 'fa-car', unicode: '&#xf1b9; car' },
    { id: 'fa-tree', unicode: '&#xf1bb; tree' },
    { id: 'fa-school', unicode: '&#xf549; school' },
    { id: 'fa-archway', unicode: '&#xf557; archway' },
    { id: 'fa-building', unicode: '&#xf1ad; building' },
    { id: 'fa-bus', unicode: '&#xf207; bus' },
    { id: 'fa-church', unicode: '&#xf51d; church' },
    { id: 'fa-helicopter', unicode: '&#xf533; helicopter' },
    { id: 'fa-hospital-alt', unicode: '&#xf47d; hospital' },
    { id: 'fa-hotel', unicode: '&#xf594; hotel' },
    { id: 'fa-igloo', unicode: '&#xf7ae; igloo' },
    { id: 'fa-motorcycle', unicode: '&#xf21c; motorcycle' },
    { id: 'fa-place-of-worship', unicode: '&#xf67f; place-of-worship' },
    { id: 'fa-plane', unicode: '&#xf072; plane' },
    { id: 'fa-school', unicode: '&#xf549; school' },
    { id: 'fa-rocket', unicode: '&#xf135; rocket' },
    { id: 'fa-ship', unicode: '&#xf21a; ship' },
    { id: 'fa-shopping-cart', unicode: '&#xf07a; shopping-cart' },
    { id: 'fa-shuttle-van', unicode: '&#xf5b6; shuttle-van' },
    { id: 'fa-monument', unicode: '&#xf5a6; monument' },
    { id: 'fa-store', unicode: '&#xf54e; store' },
    { id: 'fa-subway', unicode: '&#xf239; subway' },
    { id: 'fa-taxi', unicode: '&#xf1ba; taxi' },
    { id: 'fa-train', unicode: '&#xf238; train' },
    { id: 'fa-truck', unicode: '&#xf0d1; truck' },
    { id: 'fa-truck-pickup', unicode: '&#xf63c; truck-pickup' },
    { id: 'fa-university', unicode: '&#xf19c; university' },
    { id: 'fa-warehouse', unicode: '&#xf494; warehouse' },
    { id: 'fa-bolt', unicode: '&#xf0e7; bolt' },
];


/***/ }),

/***/ "./src/app/utils/leafletUtils.ts":
/*!***************************************!*\
  !*** ./src/app/utils/leafletUtils.ts ***!
  \***************************************/
/*! exports provided: createMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);


function createCircleMarker(feature, latlng) {
    const options = {
        radius: 8,
        fillColor: '#d3d3d3',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
    };
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"])(latlng, options);
}
function createImageMarker(feature, latlng) {
    const divHtml = '<i class=\'fas fa-camera-retro fa-2x light-blue\'></i>';
    const ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'leaflet-fa-marker-icon', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createCollectionMarker(feature, latlng) {
    const divHtml = '<i class="fa fa-folder-open fa-2x light-blue"></i>';
    const ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'icon-marker', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createVideoMarker(feature, latlng) {
    const divHtml = '<i class=\'fas fa-video fa-2x light-blue\'></i>';
    const ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'leaflet-fa-marker-icon', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createMarker(feature, latlng) {
    let marker;
    if (feature.featureType() == 'image') {
        marker = createImageMarker(feature, latlng);
    }
    else if (feature.featureType() == 'collection') {
        marker = createCollectionMarker(feature, latlng);
    }
    else if (feature.featureType() == 'video') {
        marker = createVideoMarker(feature, latlng);
    }
    else {
        marker = createCircleMarker(feature, latlng);
    }
    return marker;
}


/***/ }),

/***/ "./src/app/utils/randomColor.ts":
/*!**************************************!*\
  !*** ./src/app/utils/randomColor.ts ***!
  \**************************************/
/*! exports provided: getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environmentType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environmentType */ "./src/environments/environmentType.ts");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt */ "./src/environments/jwt.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



const environment = {
    production: false,
    // Production
    apiUrl: 'https://agave.designsafe-ci.org/geo/v2/',
    clientId: 'vtDnU5adn3ue7MMNPTq__bvxSa8a',
    // Local host
    // apiUrl: 'http://localhost:8888/',
    // clientId: 'RMCJHgW9CwJ6mKjhLTDnUYBo9Hka',
    baseHref: '/',
    jwt: _jwt__WEBPACK_IMPORTED_MODULE_2__["jwt"],
    backend: _environmentType__WEBPACK_IMPORTED_MODULE_1__["EnvironmentType"].Local,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/environmentType.ts":
/*!*********************************************!*\
  !*** ./src/environments/environmentType.ts ***!
  \*********************************************/
/*! exports provided: EnvironmentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentType", function() { return EnvironmentType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["Production"] = "production";
    EnvironmentType["Staging"] = "staging";
    EnvironmentType["Local"] = "local";
})(EnvironmentType || (EnvironmentType = {}));


/***/ }),

/***/ "./src/environments/jwt.ts":
/*!*********************************!*\
  !*** ./src/environments/jwt.ts ***!
  \*********************************/
/*! exports provided: jwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwt", function() { return jwt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3c28yLm9yZy9wcm9kdWN0cy9hbSIsImV4cCI6MjM4NDQ4MTcxMzg0MiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9zdWJzY3JpYmVyIjoiaXBhcmsiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwcGxpY2F0aW9uaWQiOiI0NCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXBwbGljYXRpb25uYW1lIjoiRGVmYXVsdEFwcGxpY2F0aW9uIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcHBsaWNhdGlvbnRpZXIiOiJVbmxpbWl0ZWQiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwaWNvbnRleHQiOiIvYXBwcyIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdmVyc2lvbiI6IjIuMCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdGllciI6IlVubGltaXRlZCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMva2V5dHlwZSI6IlBST0RVQ1RJT04iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3VzZXJ0eXBlIjoiQVBQTElDQVRJT05fVVNFUiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW5kdXNlciI6ImlwYXJrIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9lbmR1c2VyVGVuYW50SWQiOiIxMCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGVzdHVzZXIzQHRlc3QuY29tIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9mdWxsbmFtZSI6IkRldiBVc2VyIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9naXZlbm5hbWUiOiJEZXYiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2xhc3RuYW1lIjoiVXNlciIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvcHJpbWFyeUNoYWxsZW5nZVF1ZXN0aW9uIjoiTi9BIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9yb2xlIjoiSW50ZXJuYWwvZXZlcnlvbmUiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3RpdGxlIjoiTi9BIn0.rAAlbJsSGK-aBTgc0_UWPB7wr760JPQMOss9-2fxTv8';


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ipark/taggit2.0/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map