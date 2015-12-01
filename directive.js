Vue.directive('selectpicker', {
    twoWay: true,
    deep: true,

    bind: function() {
        $(this.el).selectpicker().on("change", function(e) {
            this.set($(this.el).val());
        }.bind(this));
    },
    update: function (value) {
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
        souce: null,
    }
})
