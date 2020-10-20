<template>
  <div id="" style="min-width: 1300px;margin: 0 auto;">
    <el-container class="cont-conar cont-addjjfa" style="padding: 0 10px;min-height: 500px;">

      <el-aside width="250px" style="margin-right: 10px;">
        <el-menu :default-openeds="['1', '2']" style="background-color: #F5F5F5;">
          <el-submenu index="1" style="border: 1px solid #cdcdcd;background-color: #fff;padding-bottom: 20px;">
            <template slot="title">设置产品参数</template>
            <el-menu-item-group v-for="item in navItem">
              <template slot="title">{{item.name}}</template>
              <el-menu-item v-for="data in item.list" class="aaa" style="position: relative;">
                {{data.name}}
                <el-select class="nnn" v-model="navlistForm[data.key]" placeholder="" style="width: 60%;heihgt:20px;padding: 0;">
                  <el-option v-for="sublist in data.subList" :label="sublist.name" :value="sublist.id">
                  </el-option>
                </el-select>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="height: auto;padding: 0 5px 5px;border: 1px solid #cdcdcd;background-color: #FFFFFF;margin-bottom: 20px;">
          <img src="../../assets/img/add0-title.png" alt="" style="float: left;margin-right: 20px;padding-top: 10px;">

          <div style="padding: 10px 0 2px;">
            <strong style="font-size: 1.3em;" @click="show()">{{titleData.pdpNumber}}</strong><br>
            <span style="font-size: .85em;">{{titleData.projectName}}</span>
          </div>
        </el-header>

        <el-main style="padding: 0;height: auto; padding: 15px 15px; border: 1px solid rgb(205, 205, 205); background-color: rgb(255, 255, 255); margin-bottom: 20px;">
          <div style="font-weight: bold;height: 50px;line-height: 50px;margin-bottom: 20px;padding-left:20px;background-color:#f4f4f4;">
            操作提示
          </div>
          <el-main style="height: 80%;background-color: #f4f4f4;margin-top: 0;text-align: center; vertical-align: middle;">
            <div style="position: relative;top: 50%;transform: translateY(-50%);">图形区域</div>
          </el-main>
        </el-main>
      </el-container>
    </el-container>
    <!-- 机柜修改为ups -->
    <div class="wrapper">
      <el-row>
        <el-col :span="24" class="pages" style="text-align: center;background-color: #41923e;margin-top:0;color: #fff;padding: 15px 0;">
          合计： RMB 49,924
        </el-col>
      </el-row>
      <div class="add-table" style="margin-top: 5px;padding: 20px 10px 0;">
        <el-table style="width: 100%;" class="anone">
          <el-table-column prop="ato" label="SKU Type" width=""></el-table-column>
          <el-table-column prop="imdc" label="Item" width=""></el-table-column>
          <el-table-column prop="type" label="Desciption"></el-table-column>
          <el-table-column prop="sku" label="Quantity" width=""></el-table-column>
        </el-table>
        <el-table style="width: 100%;">
          <el-table-column prop="ato" label="ATO" width="200">
          </el-table-column>
          <el-table-column prop="imdc" label="IMDC" width="200"></el-table-column>
          <el-table-column prop="type" label="IMDC Solution"></el-table-column>
          <el-table-column prop="sku" label="1" width="220"></el-table-column>
        </el-table>
      </div>

      <el-row>
        <el-col :span="24">
          <div class="footer" style="background-color: #fff;border-top: 2px solid #41923e;height: 47px;">
            <div class="fl" style="padding-top: 3px;">
              <span style="position: relative;display: inline-block;"><img src="../../assets/img/add1-total.png" alt="">
                <span v-if="total > 0" style="position: absolute;top: 3px;left: 33px;font-style: normal;background-color: #c11111;border-radius: 50%;width: 1.52em;height: 1.52em;line-height: 1;text-align: center;color:#fff;border:3px solid #ededed">
                  <i style="font-size: .75em;font-style: normal;">{{total}}</i>
                </span>
              </span>
              <span style="position: relative;top: -15px;font-size: 1.05em;color: #000;font-weight: bold;padding-left: 20px;">所选产品预览</span>
            </div>
            <div class="fr" style="width: 10em;background-color: #61b2e1;color: #fff;height:47px;line-height: 47px;text-align: center;">
              <span @click="selectpro">继续选择产品</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<style>
  body {
    background-color: #F5F5F5;
  }

  .wrapper {
    border: 1px solid #cdcdcd;
    border-top: 0;
    margin: 0px 10px;
    background-color: #fff;
  }

  .anone .el-table__empty-block {
    display: none;
  }

  .add-table .has-gutter th {
    background-color: #6bc966;
    color: #fff;
  }

  .anone .has-gutter tr th {
    background-color: #fff !important;
    color: #41923e;
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

  .nnn {
    float: right;
    position: absolute;
    width: 100% !important;
    left: 0;
  }

  .el-popper[x-placement^=bottom] .popper__arrow,
  .el-popper[x-placement^=top] .popper__arrow {
    left: 50% !important;
  }

  .nnn .el-input--small .el-input__inner {
    height: 20px;
    line-height: 20px;
    border: 0;
    background-color: transparent;
    text-align: right;
    font-size: 12px;
    color: #30752e
  }

  .nnn .el-icon-arrow-up:before {
    /* content: '1'; */
    position: relative;
    top: -7px;
  }

  .asd el-button {
    margin-right: 10px;
  }

  .asd>span {
    margin-right: 20px;
    color: #81c1e7;
  }

  .asd>span img {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }

  .el-submenu__title,
  .el-submenu__title:hover {
    background-color: #6bc966;
    border-bottom: 2px solid #41923e !important;
    color: #fff;
  }

  .el-menu {
    border: 0;
  }

  .el-menu-item,
  .el-submenu__title {
    height: 38px;
    line-height: 38px;
  }

  .el-submenu__title i {
    color: #fff;
  }

  .el-submenu .el-menu-item {
    height: 32px;
    line-height: 32px;
    padding: 5px 0;
  }

  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #fff;
  }

  .el-submenu .el-menu {
    margin-top: 2px;
  }

  .el-menu-item-group__title,
  .el-submenu .el-menu-item {
    padding-left: 10px !important;
    height: 32px;
    line-height: 20px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #cccccc;
    border-left: 0;
    border-right: 0;
    padding-bottom: 10px;
    margin: -1px 15px 5px;
    font-size: .8em;
  }

  .el-menu-item-group__title {
    border: 0;
    margin-bottom: 0;
    margin-top: 8px;
  }

  .el-menu-item-group__title {
    background-color: #fff;
    border-top: 0;
    color: #41923e;
    font-size: 1.1em;
    font-weight: bold;
  }

  .el-submenu i {
    float: right;
    font-size: 1em !important;
    color: #41923e;
  }

  .el-submenu .el-menu-item {
    color: #333
  }

  .el-menu-item.is-active i {
    float: right;
    font-size: 0.8em;
    padding: 3px 0;
    color: #41923e;
  }

  #app .hideSidebar .el-submenu>.el-submenu__title {
    padding-left: 10px !important;
  }
</style>
<script>
  import {
    quaryStatuscode
  } from '@/api/movie'
  export default {
    name: 'solution-add-0',
    data() {
      return {
        navlistForm: {},
        titleData: {
          pdpNumber: 'L20200726000002-1',
          projectName: '上海先岛大机房  |  方案类型：IMDC POD'
        },
        tableData: [],
        navItem: [],
        value: ''
      }

    },
    mounted: function() {
      var that = this;
      // that.sendData.solutionId = sessionStorage.getItem('id') || 1
      // console.log(sessionStorage.getItem('id'))
      // console.log(that.sendData.solutionId);
      that.navItem = [{
          name: '产品特征',
          list: [{
              name: '产品类型',
              key: 'key1',
              subList: [{
                  name: '无空调MINI',
                  id: '1'
                },
                {
                  name: '机架式空调ONE',
                  id: '2'
                },
              ]
            },
            {
              name: 'IT负载',
              key: 'key2',
              subList: [{
                  name: '3KW',
                  id: '3'
                },
                {
                  name: '6KW',
                  id: '4'
                },
                {
                  name: '10KW',
                  id: '5'
                },
              ]
            }
          ]
        },
        {
          name: 'UPS',
          list: [{
              name: 'UPS类型',
              key: 'key3',
              subList: [{
                  name: '系列',
                  id: '6'
                },
                {
                  name: 'SURT系列',
                  id: '7'
                },
              ]
            },
            {
              name: 'UPS容量',
              key: 'key4',
              subList: [{
                  name: '3KW',
                  id: '8'
                },
                {
                  name: '6KW',
                  id: '9'
                },
                {
                  name: '10KW',
                  id: '10'
                },
              ]
            }
          ]
        },
      ]
    },
    created() {
      // alert(this.$route.query.id)
      // this.quaryStatuscode()

    },
    methods: {
      quaryStatuscode() {
        var that = this;
        console.log(that.tableData1)
        that.solutionId = that.sendData.solutionId = sessionStorage.getItem('id')
        console.log(that.sendData)
        // "solutionId="+sessionStorage.getItem('id')
        // {solutionId:sessionStorage.getItem('id')}
        quaryStatuscode("solutionId=" + this.$route.query.id).then((response) => {
          const {
            data
          } = response;
          console.log(data)
          that.tableData = data.statuscodes;
          that.titleData = data.solution;
        })
      },
      addSndSolution1(productModel) {
        let that = this;
        sessionStorage.setItem('solutionId', that.sendData.solutionId)
        sessionStorage.setItem('productModel', productModel)
        if (productModel == 'A01T1B2') {
          this.$router.push({
            path: '/home/solution-add-1'
          })
        } else {
          this.$message({
            message: '正在开发中',
            type: 'success'
          });

        }
      },
      show() {
        let that = this;
        console.log(that.navlistForm)
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
