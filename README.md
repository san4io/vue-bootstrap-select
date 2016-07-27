# vue-bootstrap-select

A Vue.js directive implementing the select control with the [bootstrap-select](https://github.com/silviomoreto/bootstrap-select)

## Requirements

[vue.js](https://github.com/vuejs/vue) 

[jquery](https://github.com/jquery/jquery) 

[bootstrap-select](https://github.com/silviomoreto/bootstrap-select) 

## Usage

###javascript
```javascript
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

```

### HTML
```html
<div id="app">
    <div class="container">
        <div class="row">
              <div class="col-md-12">
                  <select v-selectpicker="sauce" data-live-search="true" title='Choose one of the following...'>
                      <option>Mustard</option>
                      <option>Ketchup</option>
                      <option>Relish</option>
                  </select>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  <select v-selectpicker="amount"  multiple title='Choose one of the following...'>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                  </select>
              </div>
          </div>
    </div>
</div>
```

