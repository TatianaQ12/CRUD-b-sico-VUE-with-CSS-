const app = new Vue({
    el: "#app",
    data: {
        titulo: 'GIMNASIO',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            //console.log('click ', this.nuevaTarea);
            this.tareas.push({
               nombre: this.nuevaTarea,
               estado: false
            });
            this.nuevaTarea=" ";
        },

        editarTarea: function(index){
           // console.log('Editar ', index);

           this.tareas[index].estado= true;
        },
        eliminar: function(index){
            this.tareas.splice(index,1);
        }
    }
})