
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

$(".toggle").click(function() {
   if($(".toggle").prop("checked")) {
     $('body').addClass('black')
     $('.top').append(`<div class="user">
    <h1>
      喜歡波克比的人♥
    </h1>
  </div>
  <div class="today">
    <p> ${today} </p>
    <p>你要知道擁有你的人會很幸福♥</p>
  </div>`)
   } else {
     $('body').removeClass('black') 
     $('.top').children().remove()
   }
});

//倒數
// var timer;     
// function CountDown(){     
//         if(maxtime>=0){    
// console.log(maxtime)
//             if(maxtime !=0){   
//                 --maxtime;     
//             }else{     
//               alert('520快樂❤️如果沒人跟你說那我跟你說\n我才不是要你給我什麼答案，但你要知道擁有你的人會很幸福♥\n所以繼續尋找你的答案吧～不過我還是會享受追著你跑的感覺👻\n提示到爆掉的不驚喜限定版驚喜')
//                 clearInterval(timer);     
//             }     
//         }         
// }  
// var begindate=new Date();//開始日期  
// var enddate=new Date(2021, 4, 20,17,20)//結束日期  
// var maxtime = Math.round((enddate.getTime() - begindate.getTime())/1000); 
// $(document).ready(function(){  
//     timer = setInterval("CountDown()",1000);      
// });  

console.log('給你愛心❤️希望妳開心的時候可以常常笑，如果是不開心也可以快點過去')
console.log("想陪你一起面對，但才發現我好像沒什麼信心，所以我只能在不安的時候特別擔心特別想你XD")
console.log("今天是頭腦不清楚的禮拜一 希望我們話說完之後 你還會讓我繼續陪你")
console.log("如果是值得的，那晚一點來真的沒關係")