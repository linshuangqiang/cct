<template>
  <div id="">
    <el-row class="cont-conar" type="flex" align="middle">
      <el-form ref="form" :model="form" label-width="6em" type="flex">
        <el-row class="search">
          <el-col :span="5">
            <el-form-item label="1PDP编号/ISX号:" label-width="125px">
              <el-input v-model="form.id" placeholder="12"></el-input>
            </el-form-item>
            <el-form-item label="施耐德销售:" label-width="125px">
              <el-select v-model="form.snd" placeholder="请你选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目名称:">
              <el-input v-model="form.name" placeholder="12"></el-input>
            </el-form-item>
            <el-col :span="12">
              <el-form-item label="方案状态:">
                <el-select v-model="form.region" placeholder="所有方案状态">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审核结果:">
                <el-select v-model="form.region" placeholder="所有结果">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="9">
            <el-form-item label=" " label-width="1em">
              <el-col :span="5">
                <el-select v-model="form.region" placeholder="创建日期">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col class="line" :span="1" style="text-align: center;">&nbsp;</el-col>
              <el-col :span="8">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2" style="text-align: center;">到</el-col>
              <el-col :span="8">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="方案类型:" label-width="125px">
              <el-col :span="24">
                <el-select v-model="form.region" placeholder="请你选择" class="toppicker" style="width: 100%;color: #6bc966;">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="text-align: right;">
            <el-form-item label-width="2em" style="margin-top: 11px;">
              <el-col :span="2" style="height:74px;width:1px;background-color: #DCDFE6;text-align: center;"></el-col>
              <el-col :span="22" style="text-align: center;"><img @click="onSubmit" src="../../assets/img/search.png"
                  style="cursor: pointer; margin-left:5px;margin-top: 22px;" alt=""></el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>

    <el-container class="cont-conar cont-jjfa">
      <el-header style="height: auto;padding: 0 5px;">
        <h2 style="line-height: 1.8;">解决方案列表</h2>
      </el-header>

      <el-table :data="tableData1" style="width: 100%">
        <!-- <el-table-column  prop="pdpid" label="PDP编号"  width="170"></el-table-column> -->

        <el-table-column label="PDP编号" width="180">
          <template slot-scope="scope">
            <span style="width: 1.3em;display: inline-block;">
              <img v-if="scope.row.typeflag == 1" src="../../assets/img/li-ico.png" alt="" style="height: 1em;">
            </span>
            {{scope.row.pdpNumber}}
          </template>
        </el-table-column>
        <el-table-column prop="isxNumber" label="ISX号" width="170"></el-table-column>
        <el-table-column prop="projectName" label="项目名称"></el-table-column>
        <el-table-column prop="type" label="方案类型"></el-table-column>
        <el-table-column prop="salesUserID" label="内部销售"></el-table-column>
        <el-table-column prop="updateTime" :formatter="formatDate" label="最后修改于"></el-table-column>
        <!-- <el-table-column prop="check"  label="方案审核"></el-table-column> -->
        <el-table-column label="方案审核">
          <template slot-scope="scope">
            <ul>
              <li v-for="item in scope.row.check">{{item}}</li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column prop="design" label="Design Portal"></el-table-column>
        <el-table-column prop="special" label="特价审批"></el-table-column>
        <el-table-column label="操作" style="font-size: 12px;" width="130">
          <span style="margin-right: 8px;color: #6bc966;"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
              alt="">修改</span>
          <span style="color: #6bc966;"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;" alt="">删除</span>
        </el-table-column>
      </el-table>
      <el-collapse class="list-jjfa" v-model="activeNames" @change="handleChange" style="display: none;">
        <el-collapse-item title="Opp ID:  OPP20-45679-991 >" name="1">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column  prop="pdpid" label="PDP编号"  width="170"></el-table-column> -->

            <el-table-column label="PDP编号" width="180">
              <template slot-scope="scope">
                <span style="width: 1.3em;display: inline-block;">
                  <img v-if="scope.row.typeflag == 1" src="../../assets/img/li-ico.png" alt="" style="height: 1em;">
                </span>
                {{scope.row.pdpid}}
              </template>
            </el-table-column>
            <el-table-column prop="isxid" label="ISX号" width="170"></el-table-column>
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="type" label="方案类型"></el-table-column>
            <el-table-column prop="interior" label="内部销售"></el-table-column>
            <el-table-column prop="modifyTime" label="最后修改于"></el-table-column>
            <!-- <el-table-column prop="check"  label="方案审核"></el-table-column> -->
            <el-table-column label="方案审核">
              <template slot-scope="scope">
                <ul>
                  <li v-for="item in scope.row.check">{{item}}</li>
                </ul>
              </template>
            </el-table-column>
            <el-table-column prop="design" label="Design Portal"></el-table-column>
            <el-table-column prop="special" label="特价审批"></el-table-column>
            <el-table-column label="操作" style="font-size: 12px;" width="130">
              <span style="margin-right: 8px;color: #6bc966;"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
                  alt="">修改</span>
              <span style="color: #6bc966;"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;"
                  alt="">删除</span>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="Opp ID:  OPP20-45679-991 >" name="2">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="pdpid" label="PDP编号" width="170"></el-table-column>
            <el-table-column prop="isxid" label="ISX号" width="170"></el-table-column>
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="type" label="方案类型"></el-table-column>
            <el-table-column prop="interior" label="内部销售"></el-table-column>
            <el-table-column prop="modifyTime" label="最后修改于"></el-table-column>
            <el-table-column prop="check" label="方案审核"></el-table-column>
            <el-table-column prop="design" label="Design Portal"></el-table-column>
            <el-table-column prop="special" label="特价审批"></el-table-column>
            <el-table-column label="操作" style="font-size: 12px;" width="130">
              <span style="margin-right: 8px;color: #6bc966;"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
                  alt="">修改</span>
              <span style="color: #6bc966;"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;"
                  alt="">删除</span>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="Opp ID:  OPP20-45679-991 >" name="3">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="pdpid" label="PDP编号" width="170"></el-table-column>
            <el-table-column prop="isxid" label="ISX号" width="170"></el-table-column>
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="type" label="方案类型"></el-table-column>
            <el-table-column prop="interior" label="内部销售"></el-table-column>
            <el-table-column prop="modifyTime" label="最后修改于"></el-table-column>
            <el-table-column prop="check" label="方案审核"></el-table-column>
            <el-table-column prop="design" label="Design Portal"></el-table-column>
            <el-table-column prop="special" label="特价审批"></el-table-column>
            <el-table-column label="操作" style="font-size: 12px;" width="130">
              <span style="margin-right: 8px;color: #6bc966;"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
                  alt="">修改</span>
              <span style="color: #6bc966;"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;"
                  alt="">删除</span>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="Opp ID:  OPP20-45679-991 >" name="4">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="pdpid" label="PDP编号" width="170"></el-table-column>
            <el-table-column prop="isxid" label="ISX号" width="170"></el-table-column>
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="type" label="方案类型"></el-table-column>
            <el-table-column prop="interior" label="内部销售"></el-table-column>
            <el-table-column prop="modifyTime" label="最后修改于"></el-table-column>
            <el-table-column prop="check" label="方案审核"></el-table-column>
            <el-table-column prop="design" label="Design Portal"></el-table-column>
            <el-table-column prop="special" label="特价审批"></el-table-column>
            <el-table-column label="操作" style="font-size: 12px;" width="130">
              <span style="margin-right: 8px;color: #6bc966;"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
                  alt="">修改</span>
              <span style="color: #6bc966;"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;"
                  alt="">删除</span>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
      <el-row>
        <el-col :span="24" class="pages">
          <span>符合条件，共16条</span>
          <span>1/2</span>
          <span>上一页 | 下一页</span>
        </el-col>
      </el-row>
    </el-container>

  </div>

</template>

<style>
  #app {
    min-width: 1300px;
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
    querySndSolution
  } from '@/api/movie'
  export default {
    name: 'solution-list',
    data() {
      return {
        visible: false,
        form: {
          region: '',
          startTime: '',
          endTime: ""
        },
        activeNames: ['1'],
        value1: '',
        value2: '',
        // check: '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        //
        tableData: [],
        tableData1: []
      }

    },
    mounted: function() {
      var that = this;
      that.tableData = [{
        typeflag: 0,
        pdpid: 'L20200726000002-2',
        isxid: 'ISX202007240002',
        name: '上海仙岛小机房',
        type: 'IMDC ONE',
        interior: '王小小',
        modifyTime: '2020-07-26',
        check: ['电池：等待审核', '空调：审核通过', 'UPS：审核通过', '机柜：审核通过', '电池：审核通过'],
        // '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        design: 'Order',
        special: '等待审核'
      }, {
        typeflag: 1,
        pdpid: 'L20200726000002-2',
        isxid: 'ISX202007240002',
        name: '上海仙岛小机房',
        type: 'IMDC ONE',
        interior: '王小小',
        modifyTime: '2020-07-26',
        check: ['电池：等待审核', '空调：审核通过', 'UPS：审核通过', '机柜：审核通过', '电池：审核通过'],
        // '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        design: 'Order',
        special: '等待审核'
      }, {
        typeflag: 1,
        pdpid: 'L20200726000002-2',
        isxid: 'ISX202007240002',
        name: '上海仙岛小机房',
        type: 'IMDC ONE',
        interior: '王小小',
        modifyTime: '2020-07-26',
        check: ['电池：等待审核', '空调：审核通过', 'UPS：审核通过', '机柜：审核通过', '电池：审核通过'],
        // '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        design: 'Order',
        special: '等待审核'
      }, {
        pdpid: 'L20200726000002-2',
        isxid: 'ISX202007240002',
        name: '上海仙岛小机房',
        type: 'IMDC ONE',
        interior: '王小小',
        modifyTime: '2020-07-26',
        check: ['电池：等待审核', '空调：审核通过', 'UPS：审核通过', '机柜：审核通过', '电池：审核通过'],
        // '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        design: 'Order',
        special: '等待审核'
      }]
    },
    created() {
      console.log(1111)
      // this.GetListImg();
      this.querySndSolution();

    },
    methods: {
      onSubmit() {
        console.log(this.form)
        console.log('submit!');
      },

      stateFormat(row, column) {
        if (row.state === 0) {
          return '正确'
        } else {
          return '错误'
        }
      },
      handleChange(val) {
        console.log(val);
      },
      querySndSolution() {
        console.log(1)
        var that = this;
        querySndSolution().then((response) => {
          const { data } =response
          that.tableData1 = data.records;
          console.log(response)
        })

      },
      formatDate(row, column) {
        // 获取单元格数据
        let data = row[column.property]
        if (!data) {
          return
        }
        let dt = new Date(data)
        return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
        //return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
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
