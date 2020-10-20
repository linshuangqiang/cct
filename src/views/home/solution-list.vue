<template>
  <div id="">
    <el-row class="cont-conar" type="flex" align="middle" style="background-color: #fff;margin-top: 0;padding-top: 30px;">
      <el-form ref="form" :model="sedData" label-width="6em" type="flex">
        <el-row class="search">
          <el-col :span="5">
            <el-form-item label="PDP编号/ISX号:" label-width="125px">
              <el-input v-model="sedData.pdpNumber" placeholder="请输入PDP编号/ISX号"></el-input>
            </el-form-item>
            <el-form-item label="施耐德销售:"   label-width="125px">
              <el-select v-model="sedData.salesUserID" clearable filterable placeholder="请你选择销售">
                  <el-option :label="item.realName" :value="item.id" :key='item.id' v-for="item in fdata.operatorList"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-col :span="12">
            <el-form-item label="项目名称:">
              <el-input v-model="sedData.projectName" placeholder="请输入项目名称"></el-input>
            </el-form-item>
            </el-col>
            <el-col :span="12">
            <el-form-item label="OPP ID:">
              <el-input v-model="sedData.oppID" placeholder="OPP ID"></el-input>
            </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="方案状态:">
                <el-select v-model="sedData.region" clearable  placeholder="请选择方案状态">
                  <el-option :label="value" :value="value" v-for="value,index in fdata.schemeList"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审核结果:">
                <el-select v-model="sedData.checkStatus" clearable placeholder="请选择审核结果">
                  <el-option :label="value" :value="value" v-for="value,index in fdata.findingsList"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="9">
            <el-form-item label=" " label-width="2em">
              <el-col :span="5" style="margin-right: 1em;">
                <el-select v-model="sedData.upTime">
                  <el-option :label="value==0 ? '创建日期' : '修改日期'" :value="value" v-for="value,index in upTimeList"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-date-picker type="date" placeholder="开始日期" v-model="sedData.statrTime1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2" style="text-align: center;">到</el-col>
              <el-col :span="8">
                <el-date-picker type="date" placeholder="结束日期" v-model="sedData.endTime1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="方案类型:" label-width="105px">
              <el-col :span="24">
                <el-select v-model="sedData.code" clearable placeholder="请选择方案类型" filterable class="toppicker" style="width: 99%;color: #6bc966;">
                  <template v-for="item in fdata.sndTwoList">
                    <el-option :label="item.content" :value="item.code" :key="item.code"></el-option>
                    <el-option :label="'--'+data.content" :value="data.code" :key="data.code" v-for="data in item.statuscodeList"></el-option>
                  </template>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="text-align: right;">
            <el-form-item label-width="2em" style="margin-top: 11px;">
              <el-col :span="2" style="height:74px;width:1px;background-color: #DCDFE6;text-align: center;"></el-col>
              <el-col :span="22" style="text-align: center;"><img @click="querySndSolution('search','search')" src="../../assets/img/search.png"
                  style="cursor: pointer; margin-left:5px;margin-top: 22px;" alt=""></el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>

    <el-container class="cont-conar cont-jjfa" style="margin-top: 0;">
      <el-header style="height: auto;padding: 0 5px;">
        <h2 style="line-height: 1.8;">解决方案列表</h2>
      </el-header>

      <el-table :data="tableData1" style="width: 100%">
        <!-- <el-table-column  prop="pdpid" label="PDP编号"  width="170"></el-table-column> -->

        <el-table-column label="PDP编号" width="180">
          <template slot-scope="scope">
            <span style="display: inline-block;">
              <img v-if="scope.row.typeflag == 1" src="../../assets/img/li-ico.png" alt="" style="height: 1em;">
            </span>
            {{scope.row.pdpNumber}}
          </template>
        </el-table-column>
        <el-table-column prop="oppID" label="Opp ID" width="138"></el-table-column>
        <el-table-column prop="isxNumber" label="ISX号" width="170"></el-table-column>
        <el-table-column prop="projectName" label="项目名称">
          <template slot-scope="scope">
            <span v-if="scope.row.flag == 5">[草稿]</span>{{scope.row.projectName}}
          </template>
        </el-table-column>
        <el-table-column prop="sndStatus" label="方案类型"  width="128"></el-table-column>
        <el-table-column prop="realname" label="内部销售"></el-table-column>
        <!-- :formatter="formatDate" -->
        <el-table-column prop="updateTime"  label="最后修改于" width="150"></el-table-column>
        <el-table-column prop="checkStatus"  label="方案审核"></el-table-column>
        <!-- <el-table-column label="方案审核">
          <template slot-scope="scope">
            <ul>
              <li v-for="item in scope.row.check">{{item}}</li>
            </ul>
          </template>
        </el-table-column> -->
        <el-table-column prop="design" label="Design Portal"></el-table-column>
        <el-table-column prop="special" label="特价审批"></el-table-column>
        <el-table-column label="操作" style="font-size: 12px;" width="130">
          <template slot-scope="scope">
          <span style="margin-right: 8px;color: #6bc966; cursor: pointer;" @click="checkhandle(scope.row.solutionID)"><img src="../../assets/img/modify.png" style="height:1em;margin-right: 3px;"
              alt="" >修改</span>

                <el-popconfirm title="确认删除？" icon="el-icon-info" iconColor="red" @onConfirm="deleteSndSolution(scope.row)"
                  style="width: 1em;height: 1em;">

          <span style="color: #6bc966; cursor: pointer; " slot="reference"><img src="../../assets/img/del.png" style="height:1em;margin-right: 3px;" alt="">删除</span>

                </el-popconfirm>
          </template>
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
            <el-table-column prop="checkStatus"  label="方案审核"></el-table-column>
            <!-- <el-table-column label="方案审核">
              <template slot-scope="scope">
                <ul>
                  <li v-for="item in scope.row.check">{{item}}</li>
                </ul>
              </template>
            </el-table-column> -->
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
            <el-table-column prop="pdpNumber" label="PDP编号" width="170"></el-table-column>
            <el-table-column prop="isxNumber" label="ISX号" width="170"></el-table-column>
            <el-table-column prop="ProjectName" label="项目名称"></el-table-column>
            <!-- 没有方案类型 -->
            <el-table-column prop="type" label="方案类型"></el-table-column>
            <el-table-column prop="realname" label="内部销售"></el-table-column>
            <el-table-column prop="updateTime" label="最后修改于"></el-table-column>
            <el-table-column prop="checkStatus" label="方案审核"></el-table-column>
            <!-- 没有 -->
            <el-table-column prop="design" label="Design Portal"></el-table-column>
            <!-- 没有 -->
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
        <el-pagination
          small
          layout="total,prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="sedData.page"
          :page-size="sedData.limit"
          :total="total">
        </el-pagination>
        </el-col>
      </el-row>
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
    querySndSolution,filterSndSolution,deleteSndSolution
  } from '@/api/movie'
  export default {
    name: 'solution-list',
    data() {
      return {
        visible: false,
        form: {
          region: '',
          startTime: '',
        },
        sedData:{
          page:1,
          limit:10,
          region: '',
          upTime:0
        },
        upTimeList:[0,1],
        activeNames: ['1'],
        value1: '',
        value2: '',
        serachFlag: 0,
        // check: '<div>电池：等待审核</div><div>空调：审核通过</div><div>UPS：审核通过</div><div>机柜：审核通过</div><div>电池：审核通过</div>',
        //
        tableData: [],
        tableData1: [],
        size:'',
        total:1,
        totalNumber:'',
        fdata:{
          operatorList:[]
        }

      }

    },
    mounted: function() {
      var that = this;

    },
    created() {
      // this.GetListImg();
      this.querySndSolution();
            this.filterSndSolution();
    },
    methods: {
      onSubmit() {
        console.log(this.form)
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

        handleCurrentChange(val) {
          this.querySndSolution(val,'element')
        },
      querySndSolution(prams,page) {
        var that = this;
          that.serachFlag == 1;
        if(page == 'page'){
          if(prams == "pageMinus" && Number(that.sedData.page) > 1){
            that.sedData.page =  Number(that.sedData.page)-1
          }else if(prams == "pageAdd" && Number(that.sedData.page) < that.totalNumber){
            that.sedData.page =  Number(that.sedData.page)+1
          }else{
            return
          }
        }
        if(page == 'element'){
            that.sedData.page = prams;
        }else{
          if(that.sedData.pdpNumber){
            that.sedData.pdpNumber = that.sedData.pdpNumber.trim()
          }
          if(that.sedData.ProjectName){
            that.sedData.ProjectName = that.sedData.ProjectName.trim()
          }
          console.log(parseInt(new Date(that.sedData.statrTime1).getTime()),parseInt(new Date(that.sedData.endTime1).getTime()))
          let time1 = parseInt(new Date(that.sedData.statrTime1).getTime());
          let time2 = parseInt(new Date(that.sedData.endTime1).getTime());
          if(time1 > 0 && !time2 || !time1 && time2 >0){
            this.$message.error('请同时选择与结束日期');
            return;
          }
          if(time1 > time2 ){
            this.$message.error('结束日期应该大于等于开始日期');
            return;
          }
          if(that.sedData.statrTime1){
            let dt = new Date(that.sedData.statrTime1)
            that.sedData.statrTime =  dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()

          }
          if(that.sedData.endTime1){

              let dt = new Date(that.sedData.endTime1)
              that.sedData.endTime =  dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + '23:59:59'

          }
        }
        let newSendData = {};

        if(page == 'search'){
          that.serachFlag = 1;
        }
        if(that.serachFlag == 0){
          newSendData.page = that.sedData.page;
          newSendData.limit = that.sedData.limit;
        }else{
          if(page == 'element'){
              that.sedData.page = prams;
          }else{
              that.sedData.page = 1;
          }
          newSendData = that.sedData;
          console.log(newSendData)
        }
          querySndSolution(newSendData).then((response) => {
            const { data } =response
            that.tableData1 = data.records;
            that.size = data.size;
            that.total = data.total;
            that.totalNumber = Math.ceil(data.total/data.size)
          })

      },
      filterSndSolution(){
        var that = this;
          filterSndSolution().then((response) => {
            const { data } =response;
            that.fdata.findingsList = data.findingsList;
            that.fdata.operatorList = data.operatorList;
            that.fdata.schemeList = data.schemeList;
            that.fdata.sndTwoList = data.sndTwoList;
            console.log(response)
            console.log(that.fdata.schemeList)
          })
      },
      formatDate(row, column) {
        // 获取单元格数据
        let data = row[column.property]
        if (!data) {
          return
        }
        let dt = new Date(data)
        return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
        //return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
      },
      checkhandle(params){
        sessionStorage.setItem('id',params)
        this.$router.push({ path: '/home/solution-add-0',
            query:{
              id:params,
            }, })
      },
      deleteSndSolution(row){
          var that = this;
            deleteSndSolution({solutionID : row.solutionID}).then((response) => {
              const { data } =response;
                      let arr = that.tableData1
                      for(let i = 0; i < arr.length; i++){
                          if(arr[i]['solutionID'] == row.solutionID){
                              arr.splice(i,1);
                              i--;
                          }
                      }
              console.log(response)
                this.$message({
                  message: response.msg,
                  type: 'success'
                });
            })
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
