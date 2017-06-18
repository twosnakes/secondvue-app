document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      message2: 'Have Fun',
      message3: 'Eat Pizza',
      message4: 'Go To The Beach',
    tasks: [
                "Drink a cocktail",
                "Take a nap",
                "Watch a movie"
                ],
    newTask: ''
    },
    methods: {
      addTask: function() {
        if (this.newTask !== '') {
        this.tasks.push(this.newTask);
        this.newTask = '';
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1); 
      }
    }
  });
});
