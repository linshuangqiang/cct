<template>
  <div id="">
    <el-container class="cont-conar cont-jjfa" style="margin-top: 0;border:0">
      <el-header style="height: auto;padding: 0 5px;">

        <h2 style="line-height: 1.8;">配置清单列表
          <span style="float: right;"><el-button type="primary" @click="show" style="background-color: #ddd;border: 0;color: #6bc966 ;">返回上一页</el-button></span>
        </h2>
      </el-header>

          <el-table :data="tableData1" style="width: 100%;margin-top: 20px;">
            <el-table-column prop="" label="产品类型" width="120" style="text-align: center;">UPS</el-table-column>
            <el-table-column prop="type" label="产品系列" width="120" style="text-align: center;"></el-table-column>
            <el-table-column prop="sku" label="产品型号" width="220"></el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column prop="productNum" label="数量" width="120"></el-table-column>
          </el-table>


      <!-- <el-row>
        <el-col :span="24" class="pages">
        <el-pagination
          small
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="sedData.page"
          :page-size="sedData.limit"
          :total="total">
        </el-pagination>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="pages">
          <span>符合条件，共{{total}}条</span>
          <span>{{sedData.page}}/{{totalNumber}}</span>
          <span>
            <span :class="sedData.page == 1 ? 'disabled':''" @click="querySndSolution('pageMinus','page')">上一页</span> | <span :class="sedData.page == totalNumber ? 'disabled':''" @click="querySndSolution('pageAdd','page')">下一页</span>
          </span>
        </el-col>
      </el-row> -->
    </el-container>

  </div>

</template>

<style>
  #app {
    min-width: 1300px;
  }
.disabled{
  color: #C0C4CC;
}
  .list-jjfa {
    padding: 0 0 10px 0;
    background-color: #fff;
  }

  .list-jjfa .el-collapse-item__header {
    background-color: #6bc966;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
  }

  .el-table .has-gutter {
    color: #fff;
  }

  .el-table .has-gutter tr th {
    background-color: #565656;
  }

  .el-collapse-item__content {
    padding-bottom: 0;
  }

  .pages {
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
    padding: 15px;
    border: 1px solid #EBEEF5;
  }

  .pages span {
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
<script>
  import {
    getProductList
  } from '@/api/movie'
  export default {
    name: 'solution-list',
    data() {
      return {
        sendData: {
          solutionId: '4',
          productModel: 'A01T1B2',
          sku: ''
        },
        tableData1: [],
        size:'',
        total:1,
        totalNumber:''

      }

    },
    mounted: function() {
      var that = this;

    },
    created() {
      // this.GetListImg();
      // alert(this.$route.query.solutionId)
      // alert(this.$route.params.solutionId)
      this.sendData.solutionId = this.$route.query.solutionId
      this.getProductList()

    },
    methods: {
      getProductList() {
      // alert(this.$route.params.solutionId)
        var that = this;
        // that.sendData.solutionId = sessionStorage.getItem('solutionId')
        that.sendData.productModel = sessionStorage.getItem('productModel')
        getProductList(that.sendData).then((response) => {
          const { data } = response;
            that.tableData1 = data.haschosen;
        })
      },
      show(){
        
        this.$router.go(-1);
      }
  }
}
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
