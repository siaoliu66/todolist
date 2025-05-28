
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

console.log("知道很多時候還是很難做決定或改變，但我還是會想陪著你")
console.log("可能還是有些還沒有解開的情緒，覺得很難接受也沒關係，我還是會努力讓你可以好好放下這些情緒，但就慢慢來沒關係的")
console.log("然後學姊對不起，明明家應該是一個很放心的地方，不是像現在一樣讓你覺得有些陰影，所以就還是照你想做的來，雖然40分鐘說近不近說遠不遠，但也都歡迎你來我家。")
console.log("希望你不要覺得有壓力，喜歡不喜歡都可以直接告訴我，希望你不是像他說的一樣因為不敢拒絕，才都一直勉強自己跟我見面或出去。")
console.log("也希望之後狀況都可以慢慢的轉好，不管是搬家後又或是接下來我們各自的努力，都還是希望學姊可以輕鬆一點，不用擔心也不用再害怕惹。")
console.log("木頭直男、學姊狗狗、哥哥 都是學姊限定版♡♡♡")
console.log("不用擔心我會對別人開特例，因為我雙眼都只有妳，沒有別人。")
console.log("就算有人會冒出來打擾，妳永遠是學妹拒絕別人的唯一理由。")
