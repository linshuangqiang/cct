<template>
  <div id="" style="min-width: 1300px;margin: 0 auto;">
    <el-container class="cont-conar cont-addjjfa" style="padding: 0 10px;">
      <el-header style="height: auto;padding: 0 5px;border: 1px solid #cdcdcd;background-color: #FFFFFF;margin-bottom: 20px;">
        <img src="../../assets/img/add1-title.png" alt="" style="float: left;margin-right: 20px;">
        <div style="padding: 10px 0 2px;">
        <strong style="font-size: 1.3em;">{{titleData.pdpNumber}}</strong><br>
        <span style="font-size: .85em;">{{titleData.projectName}}</span>
        </div>
      </el-header>
      <div  style="border: 1px solid #cdcdcd;background-color: #FFFFFF;">
        <el-form :inline="true" :model="sendData" class="demo-form-inline" style="padding: 27px 5px 0;text-align: center;border-bottom: 2px solid #41923e;">
          <h2 style="line-height: 1;color: #6bc966;text-align: left;width: 1200px;;padding-bottom: .5em;margin-left: auto;margin-right: auto;">UPS -Galaxy PX</h2>
          <el-form-item label="产品型号:">
            <el-input v-model="sendData.sku" placeholder="请输入产品型号"></el-input>
          </el-form-item>
          <el-form-item label="容量:">
            <!-- 修改为input -->

            <el-input v-model="sendData.parameter1" placeholder="请输入容量" style="width: 10em;"></el-input>
          </el-form-item>
          <el-form-item label="是否带PMM:">
            <el-select v-model="sendData.parameter2" placeholder="PMM"  style="width: 7em;">
              <el-option :label="value == 0 ?'不带':'带'" :value="value" v-for="value,index in formInline.pmmItems"></el-option>

            </el-select>
          </el-form-item>
          <el-form-item label="PMM分开关容量:">
            <el-select v-model="sendData.parameter3" placeholder="32A"  style="width: 6em;">
              <el-option :label="value" :value="value" v-for="value,index in formInline.currenItem"></el-option>

            </el-select>
          </el-form-item>
          <!-- 这个后台不需要传 -->
          <el-form-item label="并机:">
            <el-select v-model="sendData.region" placeholder="是否并机"  style="width: 6em;">
              <el-option :label="value == 0 ?'否':'是'" :value="value" v-for="value,index in formInline.weaverItem"></el-option>

            </el-select>
          </el-form-item>
          <el-form-item label="并机台数:">
            <el-select v-model="sendData.weaverNum" placeholder="并机台数"  style="width: 8em;">
              <el-option :label="value" :value="value" v-for="value,index in formInline.weaverNumItem"></el-option>

            </el-select>
          </el-form-item>
          <el-form-item style="margin-left: 30px;padding-left: 30px;border-left: 1px solid #9c9c9c;">
            <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
            <img @click="getProductList('subform')" src="../../assets/img/search.png"
                style="cursor: pointer; margin-left:5px;" alt="">
          </el-form-item>
        </el-form>
        <div class="add-table" style="margin-top: 20px;padding: 20px 30px 0;">
          <h2>符合条件的UPS</h2>
          <el-table :data="tableData.filter(f => f.checked != 1)" style="width: 100%;">
            <el-table-column prop="checked" label="" width="90" >
                <template slot-scope="scope">
              <i class="el-icon-plus" @click="checkhandle(scope.row)"></i>
              </template>
            </el-table-column>
            <el-table-column prop="productModel" label="产品系列" width="120"></el-table-column>
            <el-table-column prop="sku" label="产品型号"  width="220"></el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column  prop="interior"  label="数量" width="120">
            </el-table-column>
          </el-table>
        </div>
        <div class="add-table" style="padding: 20px 30px;">
          <h2>已选择的UPS</h2>
          <el-table :data="tableData1.filter(f => f.checked == 1)" style="width: 100%;">
            <el-table-column prop="" label="" width="90">
              <template slot-scope="scope">
            <i class="el-icon-minus"  @click="checkhandledel(scope.row)"></i>
            </template>
            </el-table-column>
            <el-table-column prop="productModel" label="产品系列" width="120"></el-table-column>
            <el-table-column prop="sku" label="产品型号"  width="220"></el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column  prop="interior"  label="数量" width="120">

                <template slot-scope="scope">
                  <el-input-number style="width: 7em;" v-model="scope.row.num" @change="handleChange" size="mini" :min="1" :max="10"></el-input-number>
                </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="footer"  style="">
        <div class="fl" style="padding-top: 3px;">
          <span style="position: relative;display: inline-block;"><img src="../../assets/img/add1-total.png" alt="">
            <span v-if="total > 0" style="position: absolute;top: 3px;left: 33px;font-style: normal;background-color: #c11111;border-radius: 50%;width: 1.52em;height: 1.52em;line-height: 1;text-align: center;color:#fff;border:3px solid #ededed">
              <i style="font-size: .75em;font-style: normal;">{{total}}</i>
              </span>
          </span>
          <span style="position: relative;top: -15px;font-size: 1.05em;color: #000;font-weight: bold;padding-left: 20px;">所选产品预览</span>
        </div>
        <div class="fr" @click="addSndSolution('ruleForm')" style="width: 10em;background-color: #61b2e1;color: #fff;height:47px;line-height: 47px;text-align: center;">
          <span>继续选择产品</span>
        </div>
      </div>

    </el-container>
<!-- 机柜修改为ups -->
  </div>

  </div>
</template>

<style>
  body {
    background-color: #F5F5F5;
  }
  .el-form--inline .el-form-item__content{
    line-height: 1;
  }
  .footer{
    height: auto;padding: 0 0 0 10px;border: 1px solid #cdcdcd;background-color: #FFFFFF;margin-bottom: 20px;margin-top: 20px;
  }
  .add-table .has-gutter th{
    background-color: #6bc966;
    color: #fff;
  }
  .add-table h2{
    font-size: 1.2em;
    line-height: 2;
    padding: 5px 0;
  }
  .add-table .el-table tr td:first-child{
    text-align: center;
  }
  .add-table td:first-child i.el-icon-plus,.add-table td:first-child i.el-icon-minus{
    border: 1px solid #cdcdcd;
    padding: 3px;
  }
</style>
<script>
  import {getProductList} from '@/api/movie'
  export default {
    name: 'solution-add',
    data() {
      return {
        num:1,
        total:0,
        flag:0,
        formInline: {
          pmmItems: [],
          currenItem: [],
          weaverItem:[],
          weaverNumItem:[]
        },
        titleData:{},
        sendData:{
          solutionId:'4',
          productModel:'A01T1B2',
          sku:'',
          parameter1:'',
          parameter2:'',
          parameter3:'',
          weaverNum:'',
        },
        tableData1:[],
        tableData: [],
        type:[{text:1}]
      }

    },
    mounted: function() {
      	var that = this;
       that.tableData = [{
                      id:1,
                      checked:0,
                      num:1,
                      product: 'Galaxy PX',
                      sku: 'GPXUPS60KHS',
                      desc: 'Galaxy PX UPS 60kW 400V, Start-up 5x8',
                  },{
                      id:2,
                      checked:0,
                      num:1,
                      product: '2Galaxy PX',
                      sku: 'GPXUPS60KHS',
                      desc: 'Galaxy PX UPS 60kW 400V, Start-up 5x8',
                  },{
                      id:3,
                      checked:0,
                      num:1,
                      product: '3Galaxy PX',
                      sku: 'GPXUPS60KHS',
                      desc: 'Galaxy PX UPS 60kW 400V, Start-up 5x8',
                  }]
      that.sendData.solutionId = sessionStorage.getItem('id')
      console.log(sessionStorage.getItem('id'))
      console.log(that.sendData.solutionId)
    },
    created() {
      this.getProductList()

    },
    methods: {
      getProductList(param){
        var that = this;
        console.log(param)
        console.log(that.sendData)
        getProductList(that.sendData).then((response) => {
          const { data } = response;
          console.log(data.solution)
          that.tableData = data.productList;
          if(that.flag == 0){
              that.titleData = data.solution;
              that.tableData1 = data.haschosen;
              that.formInline = data.queryItems;
              // that.tableData1 = data.solution;
          }
          that.flag = 1;
          console.log(that.tableData1)
        })
      },
      checkhandle(row){
        row.checked = 1;
        row.num = 1;

        this.tableData1.push(row)
        // this.tableData1 = this.tableData.filter((item, index,arr)=>{
        //     return item.checked == 1
        // })
        console.log(this.tableData1.length)
        this.total = this.tableData1.length
      },
      checkhandledel(row){
        row.checked = 0;
        row.num = 1;
        // this.tableData.push(row)
        this.tableData1 = this.tableData.filter((item, index,arr)=>{
            return item.checked == 1
        })
        this.total = this.tableData1.length
        console.log(this.tableData1.length)
      },

      addSndSolution(formName) {
        console.log(this.tableData1)
      },
      handleChange(value) {
        console.log(value);
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
