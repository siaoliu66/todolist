
var time = new Date()
var day_list = ['日', '一', '二', '三', '四', '五', '六'];
var today = `${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}(${day_list[time.getDay()]})`

var app = new Vue({
  el:'#app',
  data:{
    newtodo:'',
    // todos:[],
    status:'all',
    catchtodo:[],
    catchtitle:'', 
    time: today,
    storageArray:JSON.parse(localStorage.getItem('stared')) || [],

  },
  methods:{
    addTodo:function(){
    var value = this.newtodo.trim()
    var id = Math.floor(Date.now())
    if(value){
      this.storageArray.push({
        id:id,
        title:value,
        time: today,
        completed:false,
        time: today,
        })
    }
      this.newtodo=''
localStorage.setItem('stared',JSON.stringify(this.storageArray))
    },
    removetodo:function(todo){
      var newindex=''
      this.storageArray.forEach(function(item,key){
        if(todo.id == item.id){
          newindex = key
        }
      })
      // this.todos.splice(newindex,1)
      this.storageArray.splice(newindex,1)
localStorage.setItem('stared',JSON.stringify(this.storageArray))
    },
    edit:function(item){
      this.catchtodo = item;
      this.catchtitle = item.title
    },
    canceledit:function(){
      this.catchtodo = {}
    },
    doneedit:function(item){
      item.title = this.catchtitle
      this.catchtitle=''
      this.catchtodo = {}
      localStorage.setItem('stared',JSON.stringify(this.storageArray))
    },
    clear:function(){
      // this.todos = {}
      this.storageArray=[]
      localStorage.clear(JSON.parse(localStorage.getItem('stared')))
    }
  },
  computed:{
    filitertodos:function(){
      if(this.status=='all'){
        return this.storageArray
      }
      if(this.status=='active'){
        var newtodos=[]
        this.storageArray.forEach(function(item){
          if(!item.completed){
            newtodos.push(item)
          }
        })
         return newtodos
      }
      else{
        var newtodos=[]
        this.storageArray.forEach(function(item){
          if(item.completed){
            newtodos.push(item)
          }
        })
        return newtodos
      }
    },
    undoneTodos: function(){
      return this.storageArray.filter(todo =>todo.completed != true);
    },
    barWidth: function(){
      var untodo = this.storageArray.filter(todo =>todo.completed === true)
      var todo = this.storageArray

      if ((untodo.length/todo.length)>=0){
        return Math.round((untodo.length) / (todo.length) *100 ) + '%'
      }else{
        return '0%'
      }
      
    }
  },
  mounted:function(){
    if( localStorage.getItem('stared') === null){
        this.storageArray = []
        localStorage.setItem('stared',JSON.stringify(this.storageArray))
    }else{
        this.storageArray = JSON.parse(localStorage.getItem('stared'))
    }
  },
  watch:{
    /*對name值進行監聽，只要name改變了，就會觸發程式
        newVal為更改後的值，oldVal更改前的值*/
    storageArray: {
      handler(val){
        localStorage.setItem('stared',JSON.stringify(this.storageArray))
      },
      deep:true
    },

  },
})


