
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
      var untodo = this.storageArray.filter(todo =>todo.completed != true)
      var todo = this.storageArray
      return (untodo.length) / (todo.length)
    }
  },
  mounted:function(){
    if( localStorage.getItem('stared') === null){
        this.storageArray = []
        localStorage.setItem('stared',JSON.stringify(this.storageArray))
    }else{
        this.storageArray = JSON.parse(localStorage.getItem('stared'))
    }
    console.log(this.filitertodos.length)
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

console.log("雖然最近還是會有點煎熬，但我還是會想陪著你")
console.log("可能還是有些還沒有解開的情緒，覺得很難接受也沒關係，我還是會努力讓你可以好好放下這些情緒，但就慢慢來沒關係的")
console.log("然後學姊對不起，明明家應該是一個很放心的地方，不是像現在一樣讓你覺得有些陰影，所以就還是照你想做的來，但學妹也還是想了一些替代方案給你參考。")
console.log("希望你不要覺得有壓力，喜歡不喜歡都可以直接告訴我，希望你不是像他說的一樣因為不敢拒絕，才都一直勉強自己跟我見面或出去。")
console.log("也希望之後狀況都可以慢慢的轉好，不管是搬家後又或是接下來我們各自的努力，都還是希望學姊可以輕鬆一點，不用擔心也不用再害怕惹。")
console.log("木頭直男、學姊狗狗、哥哥 都是學姊限定版♡♡♡")
console.log("不用擔心我會對別人開特例，因為我雙眼都只有妳，沒有別人。")
console.log("就算有人會冒出來打擾，妳永遠是學妹拒絕別人的唯一理由。")
