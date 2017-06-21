document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      message2: 'Have Fun',
      message3: 'Eat Pizza',
      message4: 'Go To The Beach',
    tasks: [{
                text: "Drink a cocktail",
                completed: true
              },
              { 
                text:"Take a nap",
                completed: false
              },
              {
                text:"Watch a movie",
                completed: true
                }],
    newTask: ''
    },
    methods: {
      toggleTask: function(task) {
          task.textVisible = !task.textVisible;
      },
      
        addTask: function() {
        if (this.newTask !== '') {
          var params = {
                           text: this.newTask,
                           completed: false
                          
                          };
        this.tasks.push(params);
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
