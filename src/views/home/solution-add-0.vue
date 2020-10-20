<template>
  <div id="" style="min-width: 1300px;margin: 0 auto;">
    <el-container class="cont-conar cont-addjjfa" style="padding: 0 10px;min-height: 500px;">

        <el-aside width="250px" style="margin-right: 10px;">
          <el-menu :default-openeds="['1', '2']" style="background-color: #F5F5F5;">
            <el-submenu index="1" style="border: 1px solid #cdcdcd;background-color: #fff;padding-bottom: 20px;">
              <template slot="title">选择产品</template>
              <el-menu-item-group v-for="item in tableData">
                <template slot="title">{{item.content}}<i class="el-icon-plus"></i></template>
                <el-menu-item v-for="data in item.statuscodeList" @click="addSndSolution1(data.code)">{{data.content}}<i class="el-icon-plus"></i></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2" style="margin-top: 20px; border: 1px solid #cdcdcd;background-color: #fff;padding-bottom: 20px;">
              <template slot="title">未放置的产品</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>

        <el-container>
      <el-header style="height: auto;padding: 0 5px 5px;border: 1px solid #cdcdcd;background-color: #FFFFFF;margin-bottom: 20px;">
        <img src="../../assets/img/add0-title.png" alt="" style="float: left;margin-right: 20px;padding-top: 10px;">
        <div class="asd" style="padding: 10px 0 2px;float: right;">
          <span><img src="../../assets/img/add0-fangan.png">导出预览方案</span>
          <span><img src="../../assets/img/add0-peizhi.png">导出配置清单</span>
          <el-button type="primary">保存方案</el-button>
          <el-button type="primary">提交审核</el-button>
          <el-button type="primary" @click="show">查看配置清单</el-button>
        </div>
        <div style="padding: 10px 0 2px;">
          <strong style="font-size: 1.3em;">{{titleData.pdpNumber}}</strong><br>
          <span style="font-size: .85em;">{{titleData.projectName}}</span>
        </div>
      </el-header>

          <el-main style="padding: 0;height: auto; padding: 15px 15px; border: 1px solid rgb(205, 205, 205); background-color: rgb(255, 255, 255); margin-bottom: 20px;">
            <div style="font-weight: bold;height: 50px;line-height: 50px;margin-bottom: 20px;">
                机房设计图
                <div style="float: right;background-color:#f4f4f4;width: 50%;padding-left:20px; font-size:12px;">操作提示</div>
            </div>
            <el-main style="height: 80%;background-color: #f4f4f4;margin-top: 0;text-align: center; vertical-align: middle;">
              <div style="position: relative;top: 50%;transform: translateY(-50%);">设计区域</div>
            </el-main>
          </el-main>
        </el-container>
    </el-container>
<!-- 机柜修改为ups -->
  </div>

  </div>
</template>

<style>
  body {
    background-color: #F5F5F5;
  }
  .asd el-button{
    margin-right: 10px;
  }
  .asd > span{
    margin-right: 20px;
    color: #81c1e7;
  }
  .asd > span img{
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
  .el-submenu__title,.el-submenu__title:hover{
    background-color: #6bc966;
    border-bottom: 2px solid #41923e !important;
    color: #fff;
  }
  .el-menu{
    border: 0;
  }
  .el-menu-item, .el-submenu__title{
    height: 38px;
    line-height: 38px;
  }
  .el-submenu__title i{
    color: #fff;
  }
  .el-submenu .el-menu-item{
    height: 32px;
    line-height: 32px;
    padding: 5px 0;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: #fff;
  }
  .el-submenu .el-menu{
    margin-top: 2px;
  }
  .el-menu-item-group__title,.el-submenu .el-menu-item{
    padding-left: 10px !important;
    height: 32px;
    line-height: 20px;
    background-color: #f4f4f4;
    border: 1px solid #cccccc;
    border-left: 0;
    border-right: 0;
    padding-bottom: 10px;
    margin: -1px 15px 0;
    font-size: .8em;
  }
  .el-menu-item-group__title{
    background-color: #fff;
    border-top:0;
    color: #41923e;
    font-size: 1.1em;
    font-weight: bold;
  }
  .el-submenu i{
    float: right;
    font-size: 1em !important;
    color: #41923e;
  }
  .el-menu-item.is-active i{
    float: right;
    font-size: 0.8em;
    padding: 3px 0;
    color: #41923e;
  }
  #app .hideSidebar .el-submenu > .el-submenu__title{
    padding-left: 10px !important;
  }
</style>
<script>
  import {quaryStatuscode} from '@/api/movie'
  export default {
    name: 'solution-add-0',
    data() {
      return {
        formInline: {
          pmmItems: [],
          currenItem: [],
          weaverItem:[],
          weaverNumItem:[]
        },
        titleData:{
          pdpNumber:'',
          projectName:''
        },
        sendData:{
          solutionId:'',
          productModel:''
        },
        solutionId:'',
        tableData1:[],
        tableData: [],
        components:[],
        componentsFlag:false,
        type:[{text:1}],
      }

    },
    mounted: function() {
      	var that = this;
      that.sendData.solutionId = sessionStorage.getItem('id') || 1
      console.log(sessionStorage.getItem('id'))
      console.log(that.sendData.solutionId)
    },
    created() {
      // alert(this.$route.query.id)
      this.quaryStatuscode()

    },
    methods: {
      quaryStatuscode(){
        var that = this;
        console.log(that.tableData1)
        that.solutionId = that.sendData.solutionId = sessionStorage.getItem('id')
        console.log(that.sendData)
        // "solutionId="+sessionStorage.getItem('id')
        // {solutionId:sessionStorage.getItem('id')}
        quaryStatuscode("solutionId="+this.$route.query.id).then((response) => {
          const { data } = response;
          console.log(data)
          that.tableData = data.statuscodes;
          that.titleData = data.solution;
        })
      },
      addSndSolution1(productModel){
        let that = this;
        sessionStorage.setItem('solutionId',that.sendData.solutionId)
        sessionStorage.setItem('productModel',productModel)
        if(productModel == 'A01T1B2'){
          this.$router.push({ path: '/home/solution-add-1' })
        }else{
          this.$message({message:'正在开发中',type: 'success'});

        }
      },
      show(){

                // this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', '配置清单列表', {
                //   dangerouslyUseHTMLString: true
                // });
          this.$router.push({ path: '/home/solution-add-show',
            query:{
              solutionId:this.solutionId,
            },
            params:{
              solutionId:this.solutionId,
            }
          })
      }
    }
  }
  // 草稿  提交
  // 等待审核  通过  不通过
  // 类型  下一个页面带做的
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
