"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createPagePosition = function (position, page) {
    if (page === void 0) { page = 0; }
    return {
        page: page,
        position: position
    };
};
exports.computePages = function (limitProp, offsetProp, totalProp, innerButtonCountProp, outerButtonCountProp) {
    var limit = limitProp >= 1 ? limitProp : 1;
    var offset = offsetProp >= 0 ? offsetProp : 0;
    var total = totalProp >= 0 ? totalProp : 0;
    var innerButtonCount = innerButtonCountProp >= 0 ? innerButtonCountProp : 0;
    var outerButtonCount = outerButtonCountProp >= 1 ? outerButtonCountProp : 1;
    var minPage = 1;
    var maxPage = Math.floor(total / limit) + (total % limit === 0 ? 0 : 1);
    var currentPage = Math.floor(offset / limit) + 1;
    var previousPage = currentPage <= minPage ? 0 : currentPage - 1;
    var nextPage = currentPage >= maxPage ? 0 : currentPage + 1;
    var pages = [];
    pages.push(createPagePosition(3, previousPage));
    var lowInnerReservedButtonCount = Math.max(innerButtonCount + currentPage - maxPage, 0);
    var lowInnerEllipsisPage = currentPage - innerButtonCount - lowInnerReservedButtonCount - 1;
    var lowOuterEllipsisPage = minPage + outerButtonCount;
    for (var i = minPage; i < currentPage; i++) {
        if (i < lowOuterEllipsisPage) {
            pages.push(createPagePosition(5, i));
        }
        else {
            pages.push(i === lowOuterEllipsisPage && i < lowInnerEllipsisPage
                ? createPagePosition(1)
                : createPagePosition(5, i));
            for (var j = Math.max(i, lowInnerEllipsisPage) + 1; j < currentPage; j++) {
                pages.push(createPagePosition(5, j));
            }
            break;
        }
    }
    pages.push(createPagePosition(0, currentPage));
    var highInnerReservedButtonCount = Math.max(innerButtonCount - currentPage + minPage, 0);
    var highInnerEllipsisPage = currentPage + innerButtonCount + highInnerReservedButtonCount + 1;
    var highOuterEllipsisPage = maxPage - outerButtonCount;
    for (var i = currentPage + 1; i <= maxPage; i++) {
        if (i < highInnerEllipsisPage) {
            pages.push(createPagePosition(5, i));
        }
        else {
            pages.push(i === highInnerEllipsisPage && i < highOuterEllipsisPage
                ? createPagePosition(2)
                : createPagePosition(5, i));
            for (var j = Math.max(i, highOuterEllipsisPage) + 1; j <= maxPage; j++) {
                pages.push(createPagePosition(5, j));
            }
            break;
        }
    }
    pages.push(createPagePosition(4, nextPage));
    return pages;
};
exports.getOffset = function (page, limit) {
    var offset = (page - 1) * limit;
    return offset < 0 ? 0 : offset;
};
