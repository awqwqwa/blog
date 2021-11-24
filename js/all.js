   var vm = new Vue({
    el:"#app",
    data:{
        message:'hello world',
        index:0,
        arr:["../img/ys/56ab1b0f7bec54e77c912955ae389b504ec26a95.gif","../img/ys/d458dfd88d1001e9730c2044af0e7bec55e797da.jpg","../img/ys/eb167259ccbf6c816e8895a5ab3eb13532fa4052.jpg","../img/ys/f2a146dce71190efa49d2f92d91b9d16fcfa60ab.jpg"],
    },
    methods:{
        doit:function(){
            if(this.index<3){
                this.index++;
            }else{this.index=0;}
            
        }
    }
   }) 
   var tx = new Vue({
    el:"#textbook",
    data:{
        message:"这里可以输入你的备忘录",
        num:0,
        n:0,
        arr:[""],
        
    },
    methods:{
        add:function(){ 
            this.arr.push(this.message);
        },
        del:function(){
            this.arr.splice(this.num,1);
        },
    }

   })
   var on = new Vue({
        el:"#joke",
        data:{
            joke:"点击上面看笑话哦",
        },
        methods:{
            get:function(){
                var that=this;
                axios.get("https://autumnfish.cn/api/joke").then
                (function(a){
                    that.joke=a.data;
                    //this.joke=a.data;这里无法直接赋值，要改变this指向
                },
                function(b){
                }
                )
            }

        },
            
   })
   var whether = new Vue({
    el:"#weather",
    data:{
        city:"北京",
        arr:[],
    },
    methods:{            
        getweather:function(city){
            var that=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(
                function(a){
                    that.arr=a.data.data.forecast;
                    console.log(that.arr);
                }

            )
            this.city="";
        }
        
    }

   })
   var music = new Vue({
        el:"#music",
        data:{
            name,
            http:"",
            arr:[],
        },
        methods:{
            search:function(){
                var that=this;
                axios.get("https://autumnfish.cn/search?keywords="+this.name)
                .then(
                    function(a){
                        console.log(a);
                        that.arr=a.data.result.songs;
                    }
                )

            }
            ,play:function(id){
                console.log(id);
                this.http="https://music.163.com/song/media/outer/url?id="+id+".mp3"
                console.log(this.http);    
                
        
            }
        }

   })
   var upload = new Vue({
        el:"#upload",
        data:{
            title:"",
            message:"",
            author:"",
        },
        methods:{
            push:function(){//可以实现上传数据，但没有服务器....而且尝试用本地json，但失败了
                var that=this;
                axios.post("http://jsonplaceholder.typicode.com/posts",{//http://jsonplaceholder.typicode.com/posts
                    title:that.title,body:that.message,userId:1
                })
                .then(
                    function(a){
                        console.log(a);
                    }

                )

            }

        }
   })
   var showmessage = new Vue({
    el:"#showmessage",
    data:{
        arr:[],
        bool:true,
    },
    methods:{
        show:function(){
            var that=this;
            this.bool=false;
            axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(
                function(a){
                    console.log(a);
                    that.arr=a.data;
                }
            )
        },

    }

   })
