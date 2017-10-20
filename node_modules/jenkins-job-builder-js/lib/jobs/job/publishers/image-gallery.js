'use strict';
var util$940 = require('../../../misc/util.js');
var ImageGallery$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
ImageGallery$942.prototype.up = function () {
    return this.upper;
};
ImageGallery$942.prototype.and = ImageGallery$942.prototype.up;
module.exports = ImageGallery$942;
ImageGallery$942.prototype[util$940.camelize('gallery-type')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'gallery-type',
        value$952
    ]);
};
ImageGallery$942.prototype[util$940.camelize('title')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'title',
        value$953
    ]);
};
ImageGallery$942.prototype[util$940.camelize('image-width')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'image-width',
        value$954
    ]);
};
ImageGallery$942.prototype[util$940.camelize('unstable-if-no-artifacts')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-if-no-artifacts',
        value$955
    ]);
};
ImageGallery$942.prototype[util$940.camelize('includes')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'includes',
        value$956
    ]);
};
ImageGallery$942.prototype[util$940.camelize('base-root-folder')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'base-root-folder',
        value$957
    ]);
};
ImageGallery$942.prototype[util$940.camelize('image-inner-width')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'image-inner-width',
        value$958
    ]);
};