<template>
    <div class="app">
      <ul>
        <li v-for="item in data">{{item.title}}</li>
      </ul>

      <button @click="addAuthor">添加author</button>
      <button @click="getData">获取数据</button>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      created(){
//        this.$http.get("http://localhost:3000/getData").then((res)=>{
//          this.data=res.data.data;
//        }).catch((err)=>{
//          console.log(err);
//        })
      },
      data(){
       return{
         data:[],
       };
      },
      methods:{
        addAuthor(){
          this.$store.commit('addAuthor',"huahao")
        },
        getData(){
          this.$http.get("http://localhost:3000/getData").then((res)=>{
            for(let item of res.data.data){
              this.data.push(item);
              console.log(item);
            }

          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      computed:{
        author(){
          return this.$store.state.author;
        }
      }
    }
</script>
<style>
</style>
