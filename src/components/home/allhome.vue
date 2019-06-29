<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="skyblue"
        >
          <el-menu-item>课程管理系统</el-menu-item>
          <el-menu-item index="1" @click="onCollapse">
            <i class="el-icon-s-fold"></i>
          </el-menu-item>
          <el-menu-item index="2" @click="gohome">
            <i class="el-icon-s-home"></i>
          </el-menu-item>
        </el-menu>
      </el-header>
      <!-- 侧边导航 -->
      <el-container>
        <el-aside :style="'width:'+elwith+'px'" >
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#545c64"
          > 
            <el-menu-item index="1" @click="goindex(1)">
              <i class="el-icon-menu"></i>
              <span slot="title">
                导航一
                </span>
            </el-menu-item>
            <el-menu-item index="2" @click="goindex(2)">
              <i class="el-icon-setting"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主体内容 -->
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- 脚 -->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false,
      elwith:200
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onCollapse() {
      this.isCollapse = !this.isCollapse
      if(this.isCollapse){
        this.elwith=64
      }else{
        this.elwith=200
      }    
    },
    goindex(id){
      this.$router.push({name:"index",params:{id}})
    },
    gohome(){
      this.$router.push({name:"home"})
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-container.is-vertical {
    height: 100%;
    .el-header {
      padding: 0;
      .el-menu.el-menu--horizontal {
        border-bottom: none;
      }
      .el-menu-item:nth-of-type(1) {
        width: 200px;
        text-align: center;
        font-size: 20px;
        font-style: italic;

        color: yellowgreen !important;
      }
    }
    .el-container {
      height: 100%;
      .el-aside {
        background-color: rgb(84, 92, 100);
        transition: width 0.5s ease;
        overflow: hidden;
        .el-menu {
          border-right: none;
        }
      }
      .el-main {
        padding: 5px;
        background-color: skyblue;
        height: 100%;
      }
    }
  }
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }


</style>

