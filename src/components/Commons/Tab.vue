<template>
    <div class="demo">
      <ul class="tab">
          <li>直播</li>
          <li>技术专题</li>
          <li>IT大咖秀</li>
      </ul>
    </div>
</template>

<script>
    export default {
     name: 'tab'
    }
</script>

<style scoped>
/* .demo ul {
   width: 750px;
   
} */
.demo .tab {
    /* width: 750px; */
    padding: 9px 29px 0 29px;
    background-color: #f4f4f4;
    box-sizing: border-box;
    list-style: none;
    display: flex;
}
.demo .tab li {
    width: 220px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    flex: 1;
   
}
.demo .tab li:hover {
    border-bottom: 1px solid #3e92cb;/*no*/
    color: #3e92cb;
}
* {
    margin: 0;
    padding: 0;
    outline: 0 none;
}
</style>