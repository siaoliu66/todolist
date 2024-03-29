
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
  //    $('.top').append(`<div class="user">
  //   <h1>
  //     尋找快樂的人♥
  //   </h1>
  // </div>
  // <div class="today">
  //   <p> ${today} </p>
  //   <p>喜歡笑的人運氣通常不會太差♥</p>
  // </div>`)
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


console.log("只要是你，晚一點沒關係")
console.log("嘿雖然看到的時候已經過了生日了吧")
console.log("本來是有打算幫你換點不一樣的")
console.log("但因為最近真的頗忙的只好先更新字了")
console.log("我相信 也知道你一定可以")
console.log("盡力的成為自己想要的模樣")
console.log("但路一定會有點難走也不要太過於苛責自己")
console.log("雖然不一定每件事情都能如願以償")
console.log("大不了我們就改變路線吧 反正不管如何 我都會想陪著你走")