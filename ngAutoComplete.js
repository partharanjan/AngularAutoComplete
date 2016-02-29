/*
    Author: Partha Ranjan Nayak
    url:http://partha.pw
*/
function ngAutoComplete(element, http) {
    this.http=http;
    this.MinLength = 3;
    this.Element = element;
    this.onSelect = function (selectedItem) { }
    this.onReceive = function (item) { }
    this.onError = function (error) { }
}
ngAutoComplete.prototype.init = function (url) {
    var obj = this;
    try
    {
        $("#" + this.Element).autocomplete({
            source: function (searchTerm, response) {
                //post the URL
                obj.http.post(url, { s: searchTerm.term }).then(function (searchResponse) {
                    var json = Core.json(searchResponse);
                    if (json != null) {
                        var responseItems = angular.fromJson(json);
                        if (responseItems != null) {
                            response($.map(responseItems, function (item) {
                                return obj.onReceive(item);
                            }))
                        }
                    }
                });
            },

            minLength: this.MinLength,

            select: function (event, selectedItem) {
                obj.onSelect(selectedItem.item);
                event.preventDefault();
            }
        });
    }
    catch(e)
    {
        obj.onError(e);
    }
}