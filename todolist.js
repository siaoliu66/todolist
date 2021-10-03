
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

console.log('覺得很難的時候就告訴自己，值得的都不會太容易')
console.log("如果是值得的，那晚一點來沒關係")
console.log(' ')
console.log('最近好像經常一早就惹怒學姊，也許是我想太多或是調整的方式好像不太對？，但我真的沒有想讓你不開心')
console.log('上禮拜開始聊天驟減，我知道你有很多事情要處理，不管是公事還是私事，所以最近都會很忙，可能也會沒時間回我')
console.log('沒關係，反正你知道 我一直都在 也一定找得到我，如果真的有什麼不開心的事情都可以告訴我，開心的事情也可以跟我分享')
console.log('或是真的不開心我做什麼事情還是有什麼其他ㄉ想法，我也希望你可以直接告訴我')
console.log('說好我們都要一起好好的，所以也希望以後每次的見面每次的相處都會是輕鬆的開心的(´･∀･`)')
console.log('ㄉㄖ ㄅㄧㄨㄐㄨㄒㄋ')
