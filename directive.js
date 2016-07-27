Vue.directive('selectpicker', {
    twoWay: true,
    priority: 750,
    bind: function() {
        $(this.el).selectpicker().on("change", function(e) {
            this.set($(this.el).val());
        }.bind(this));
        var observer = new MutationObserver(function () {
            $(this.el).selectpicker('refresh').trigger('change');
        }.bind(this));
        var config = { attributes: false, childList: true, characterData: false, subtree: false};
        observer.observe(this.el, config);
    },
    update: function (value) {
        $(this.el).selectpicker('val', value);
        $(this.el).selectpicker('refresh').trigger("change");
    },
    unbind: function () {
        $(this.el).off().selectpicker('destroy');
    }
});

new Vue({
    el: '#app',
    data : {
        amount: null,
        sauce: null,
    }
})
