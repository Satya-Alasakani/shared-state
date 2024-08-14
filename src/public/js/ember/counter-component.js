// src/public/js/ember/counter-component.js
const App = Ember.Application.create({
  rootElement: '#left-pane',
  ready: function() {
    this.register('component:counter-component', Ember.Component.extend({
      tagName: 'span',
      didInsertElement: function() {
        this._super(...arguments);
        this.set('counter', window.store.getState().counter);
        window.store.subscribe(() => {
          this.set('counter', window.store.getState().counter);
        });
      }
    }));
  }
});

setTimeout(() => {
  // Render the component in the root element
Ember.TEMPLATES['application'] = Ember.HTMLBars.template({
  "id": "application",
  "block": "{\"symbols\":[],\"statements\":[[1,[21,\"counter-component\"],false]],\"hasEval\":false}",
  "meta": {}
});

App.advanceReadiness();

}, 2000)

