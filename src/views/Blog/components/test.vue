<template>
  <div>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  data() {
    return {
      list:[
        {name: "项目1",isSelect:true,target:"1",children:[{name:"aaa",isSelect:false,target:"a"}]},
        {name: "项目2",isSelect:false,target:"2",children:[{name:"bbb",isSelect:false,target:"b"}]},
        {name: "项目3",isSelect:false,target:"3",children:[{name:"ccc",isSelect:false,target:"c"}]},
        {name: "项目4",isSelect:false,target:"4",children:[{name:"ddd",isSelect:false,target:"d"}]}
      ]
    };
  },
  components: {
    RightList
  },
  methods:{
    handleSelect($event){
      console.log($event)
    }
  }
};
</script>

<style>
</style>