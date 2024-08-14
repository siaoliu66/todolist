
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
var timer;     
function CountDown(){     
        if(maxtime>=0){    
// console.log(maxtime)
            if(maxtime !=0){   
                --maxtime;     
            }else{     
              alert('不是每次都捨得讓妳離開 但還是希望妳可以過的舒服一點\n所以不是委屈 而是希望我們的關係可以更加穩固\n互相遷就可以走得很遠 雙向奔赴才有意義\n我心疼你的不容易 妳明白我的寡言\n我想寵妳像個小公主 讓妳知道我滿眼都是妳的人\n所以我願意 一直這麼等妳。')
                clearInterval(timer);     
            }     
        }         
}  
var begindate=new Date();//開始日期  
var enddate=new Date(2024, 7, 14,10,31)//結束日期  
var maxtime = Math.round((enddate.getTime() - begindate.getTime())/1000); 
$(document).ready(function(){  
    timer = setInterval("CountDown()",1000);     
    if(begindate>enddate && begindate.getDate()=='14'&& begindate.getMonth()=='7'){
        alert('雖然每個14號都是情人節，但希望未來的每一天都可以讓妳過~\n但這是限定今日不知道姊姊會不會看到XD\n快按F12去找找今日份快樂♡')
    } 
});   


console.log("只要是你，晚一點沒關係")
console.log('不是每次都捨得讓妳離開 但還是希望妳可以過的舒服一點\n所以不是委屈 而是希望我們的關係可以更加穩固\n互相遷就可以走得很遠 雙向奔赴才有意義\n我心疼你的不容易 妳明白我的寡言\n我想寵妳像個小公主 讓妳知道我滿眼都是妳的人\n所以我願意 一直這麼等妳。')
