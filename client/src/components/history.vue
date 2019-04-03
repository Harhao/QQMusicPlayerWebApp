<template>
    <div class="history">
      <ul>
        <li v-for="(item,index) in historyArr" @click="addToInput" :key="index">
          <router-link :to="{path:''}">
            <span class="found"></span>
            <span class="historyName">{{item}}</span>
            <span class="del">+</span>
          </router-link>
        </li>
      </ul>
      <div id="clearHistory" @click="clearHistory">
        <p>清除记录</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      historyArr: this.$store.state.searchHistory
    };
  },
  methods: {
    clearHistory() {
      this.$store.commit("clearHistory");
    },
    hide() {
      document.getElementsByClassName("history")[0].style.display = "none";
    },
    addToInput(event) {
      document.getElementById("keyWord").value = event.target.innerText;
      this.hide();
    }
  }
};
</script>
<style scoped>
.history {
  position: absolute;
  z-index: 98;
  width: 100%;
  height: auto;
  display: none;
}
.history ul {
  width: 100%;
  height: auto;
  padding-left: 0;
}
.history li {
  list-style: none;
  height: 44px;
}
.history li a {
  display: flex;
  width: 100%;
  height: 28px;
  color: #000;
  text-decoration: none;
}
.history .found {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../static/images/clock_ic.png") no-repeat;
  background-position: left center;
  background-size: 20px 20px;
}
.historyName {
  text-align: center;
  padding-left: 3%;
  flex: 1;
}
.del {
  width: 20px;
  margin-right: 15px;
  text-align: right;
  font-size: 1.2em;
  transform: rotate(45deg);
}
#clearHistory p {
  color: #31c27c;
  text-align: center;
}
</style>
