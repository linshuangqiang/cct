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
      <div style="border: 1px solid #cdcdcd;background-color: #FFFFFF;">
        <!-- text-align: center; -->
        <el-form :inline="true" :model="sendData" class="demo-form-inline" style="padding: 27px 5px 0 18px;text-align: center;border-bottom: 2px solid #41923e;">
          <h2 style="line-height: 1;color: #6bc966;text-align: left;padding-bottom: .5em;">UPS -Galaxy PX</h2>
          <el-form-item label="产品型号:">
            <el-input v-model="sendData.sku" placeholder="请输入产品型号" style="width: 11em;"></el-input>
          </el-form-item>
          <el-form-item label="容量:">
            <!-- 修改为input -->

            <el-input v-model="sendData.parameter1" placeholder="请输入容量" style="width: 9em;"></el-input>
          </el-form-item>
          <el-form-item label="是否带PMM:">
            <el-select v-model="sendData.parameter2" filterable placeholder="PMM" style="width: 5.5em;">
              <el-option :label="value == 0 ?'不带':'带'" :value="value" :key='value' v-for="value,index in formInline.pmmItem"></el-option>

            </el-select>
          </el-form-item>
          <template v-if="sendData.parameter2 != ''">
            <el-form-item label="PMM分开关容量:">
              <el-select v-model="sendData.parameter3" placeholder="32A" style="width: 5.6em;">
                <el-option :label="value" :value="value" v-for="value,index in formInline.currenItem"></el-option>

              </el-select>
            </el-form-item>
          </template>
          <!-- 这个后台不需要传 -->
          <el-form-item label="并机:">
            <el-select v-model="sendData.region" placeholder="是否并机" style="width: 5.5em;">
              <el-option :label="value == 0 ?'否':'是'" :value="value" v-for="value,index in formInline.weaverItem"></el-option>

            </el-select>
          </el-form-item>
          <template v-if="sendData.region != ''">
            <el-form-item label="并机台数:">
              <el-select v-model="sendData.weaverNum" placeholder="并机台数" style="width: 5em;">
                <el-option :label="value" :value="value" v-for="value,index in formInline.weaverNumItem"></el-option>
              </el-select>
            </el-form-item>
          </template>
          <el-form-item style="margin-left: 30px;padding-left: 30px;border-left: 1px solid #9c9c9c;">
            <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
            <img @click="getProductList('subform')" src="../../assets/img/search.png" style="cursor: pointer; margin-left:5px;"
              alt="">
          </el-form-item>
        </el-form>
        <div class="add-table" style="margin-top: 20px;padding: 20px 30px 0;">
          <h2>符合条件的UPS</h2>
          <el-table :data="tableData.filter(f => f.checked != 1)" style="width: 100%;">
            <el-table-column prop="checked" label="" width="90">
              <template slot-scope="scope">
                <i class="el-icon-plus" @click="checkhandle(scope.row)"></i>
              </template>
            </el-table-column>
            <el-table-column prop="productModel" label="产品系列" width="120"></el-table-column>
            <el-table-column prop="sku" label="产品型号" width="220"></el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column prop="interior" label="数量" width="120">
            </el-table-column>
          </el-table>
        </div>
        <div class="add-table" style="padding: 20px 30px;">
          <h2>已选择的UPS</h2>
          <!-- tableData1.filter(f => f.checked == 1) -->
          <el-table :data="tableData1.filter(f => true)" style="width: 100%;">
            <el-table-column prop="" label="" width="90">
              <template slot-scope="scope">
                <el-popconfirm title="确认删除？" icon="el-icon-info" iconColor="red" @onConfirm="checkhandledel(scope.row)"
                  style="width: 1em;height: 1em;">
                  <!--   @click="checkhandledel(scope.row)" -->
                  <el-button style="width: 2em;height: 2em;padding: 0;border: 0;" noboder slot="reference"><i class="el-icon-minus"></i></el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
            <el-table-column prop="productModel" label="产品系列" width="120"></el-table-column>
            <el-table-column prop="sku" label="产品型号" width="220"></el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column prop="interior" label="数量" width="120">
              <template slot-scope="scope">
                <el-input-number style="width: 7em;" v-model="scope.row.productNum" @change="((val)=>{handleChange(val, scope.row)})"
                  size="mini" :min="1"></el-input-number>
              </template>
            </el-table-column>
          </el-table>
          <!-- <table>
            <tr v-for = "item in tableData1" v-if="item.checked == 1">
              <td>{{item.productModel}}</td>
              <td>{{item.sku}}</td>
              <td>{{item.description}}</td>
              <td>
                <el-input-number style="width: 7em;" v-model="item.num" @change="((val)=>{handleChange(val, item)})" size="mini" :min="0" :max="10" :step='1'></el-input-number>
              </td>
            </tr>
          </table> -->
        </div>
      </div>

      <div class="footer" style="">
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

  .el-form--inline .el-form-item__content {
    line-height: 1;
  }

  .footer {
    height: auto;
    padding: 0 0 0 10px;
    border: 1px solid #cdcdcd;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .add-table .has-gutter th {
    background-color: #6bc966;
    color: #fff;
  }

  .add-table h2 {
    font-size: 1.2em;
    line-height: 2;
    padding: 5px 0;
  }

  .add-table .el-table tr td:first-child {
    text-align: center;
  }

  .add-table td:first-child i.el-icon-plus,
  .add-table td:first-child i.el-icon-minus {
    border: 1px solid #cdcdcd;
    padding: 3px;
  }
</style>
<script>
  import {
    getProductList,
    sndDesign
  } from '@/api/movie'
  export default {
    name: 'solution-add',
    data() {
      return {
        num: 1,
        total: 0,
        flag: 0,
        formInline: {
          pmmItems: [],
          currenItem: [],
          weaverItem: [],
          weaverNumItem: []
        },
        titleData: {
          pdpNumber: '',
          projectName: ''
        },
        sendData: {
          solutionId: '4',
          productModel: 'A01T1B2',
          sku: '',
          parameter1: '',
          parameter2: '',
          parameter3: '',
          weaverNum: '',
          region: ''
        },
        tableData1: [],
        tableData: [],
        components: [],
        componentsFlag: false,
        type: [{
          text: 1
        }]
      }

    },
    mounted: function() {
      var that = this;
      that.sendData.solutionId = sessionStorage.getItem('id') || 1
      console.log(sessionStorage.getItem('id'))
      console.log(that.sendData.solutionId)
    },
    created() {
      this.getProductList()

    },
    methods: {
      getProductList(param) {
        var that = this;
        console.log(that.tableData1)
        if (that.sendData.componentsFlag) {
          that.sendData.weaverNum = '';
        }
        that.sendData.solutionId = sessionStorage.getItem('solutionId')
        that.sendData.productModel = sessionStorage.getItem('productModel')
        console.log(that.sendData)
        getProductList(that.sendData).then((response) => {
          const {
            data
          } = response;
          console.log(data)
          that.tableData = data.productList;
          that.titleData = data.solutions;
          if (that.flag == 0) {
            that.tableData1 = data.haschosen;
            that.formInline = data.queryItems;
          }
          if (data.components.length > 0) {
            that.components = data.components
          } else {
            that.components = []
          }
          that.flag = 1;
          that.total = that.tableData1.length
        })
      },
      checkhandle(row) {
        var that = this;
        row.checked = 1;
        row.productNum = 1;
        let dataA = row;
        let productNumSed = 1;
        let weaverNumSed = '';
        console.log(row)
        console.log(that.tableData)
        if (that.sendData.region) {
          if (Number(that.sendData.weaverNum) > 2 && !that.componentsFlag) {
            weaverNumSed = Number(that.sendData.weaverNum) - 1;
          }
        }
        let sndDesignData = {
          solutionId: that.sendData.solutionId,
          productModel: that.sendData.productModel,
          productId: row.productId,
          // productNum:row.productNum,
          productNum: productNumSed,
          checked: row.checked,
          componentNum: weaverNumSed
        }
        // console.log(sndDesignData);
        // console.log(that.componentsFlag, that.components.length)
        // return
        sndDesign(sndDesignData).then((response) => {
          const {
            data
          } = response;
          let obj = {
            productId: dataA.productId,
            productModel: dataA.productModel,
            description: dataA.description,
            checked: dataA.checked,
            productNum: dataA.productNum,
            sku: dataA.sku
          }
          let flag = true;
          that.tableData1.forEach(item => {
            console.log(item.productId, obj.productId)
            if (item.productId == obj.productId) {
              item.productNum = Number(item.productNum + 1)
              flag = false
            }
          })
          if (flag) {
            that.tableData1[that.tableData1.length] = obj
          }
// 添加ups之后删除添加的
          that.tableData.forEach(item => {
            console.log(item.productId, obj.productId)
            if (item.productId == obj.productId) {
              let index = (that.tableData.indexOf(item))
              that.tableData.splice(index, 1)
              that.tableData[that.tableData.length] = obj
            }
          })

          if (!that.componentsFlag && that.components.length > 0) {
            for (let i = 0; i < that.components.length; i++) {
              let obj1 = {
                productId: that.components[i].component['productId'],
                productModel: that.components[i].component['productModel'],
                description: that.components[i].component['description'],
                productNum: '',
                sku: that.components[i].component['sku'],
                componentNum: that.components[i].productNum
              }
              console.log(obj1);
              that.tableData1[that.tableData1.length] = obj1;
            }

            that.componentsFlag = true;
          }


          console.log(that.tableData1)
          that.total = that.tableData1.length
        })
      },
      checkhandledel(row) {
        var that = this;
        row.checked = 1;
        // row.num = 1;
        let dataA = row
        // alert(row.productId)
        console.log(row)
        let sndDesignData = {
          solutionId: that.sendData.solutionId,
          productModel: that.sendData.productModel,
          productId: row.productId,
          productNum: 0,
          checked: row.checked,
          componentNum: ''
        }


        sndDesign(sndDesignData).then((response) => {
          const {
            data
          } = response;
          let obj = {
            productId: dataA.productId,
            productModel: dataA.productModel,
            description: dataA.description,
            checked: 0,
            productNum: dataA.productNum,
            sku: dataA.sku
          }
          let flag = true;
          that.tableData1.forEach(item => {

            console.log(item.productId, obj.productId)
            if (item.productId == obj.productId) {
              let index = (that.tableData1.indexOf(item))
              that.tableData1.splice(index, 1)
              that.tableData[that.tableData.length] = obj
              // item.num = Number(item.num+1) || 1
              // flag = false
            }
          })

          console.log(that.tableData1)
          that.total = that.tableData1.length
        })
      },

      addSndSolution(formName) {
        console.log(this.tableData1)
      },
      handleChange(value, index) {
        var that = this
        index.productNum = value

        let sndDesignData = {
          solutionId: that.sendData.solutionId,
          productModel: that.sendData.productModel,
          productId: index.productId,
          productNum: index.productNum,
          checked: index.checked,
          componentNum: ''
        }
        sndDesign(sndDesignData).then((response) => {
          const {
            data
          } = response;
          let flag = true;

          console.log(that.tableData1)
          that.total = that.tableData1.length
        })


        console.log(value, index);
        console.log(this.tableData1)
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
