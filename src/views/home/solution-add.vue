<template>
  <div id="">
    <el-container class="cont-conar cont-addjjfa" style="width: 50%;margin-left: auto;margin-right: auto;">
      <el-header style="height: auto;padding: 0 5px;">
        <h2 style="line-height: 1.8;">新建解决方案</h2>
      </el-header>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="PDP编号" style="padding-left: 1px;">
          <el-input v-model="ruleForm.pdpNumber" value="" class="dised" readonly style="border: 0;"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" prop="projectName">
          <el-input v-model="ruleForm.projectName" placeholder="请输入项目名称"></el-input>
        </el-form-item>
        <el-form-item label="Opp ID" prop="oppID">
          <el-input v-model="ruleForm.oppID" placeholder="OP-191011-8230251 "></el-input>
        </el-form-item>
        <el-form-item label="代理商名称" prop="ChannelName">
          <!-- <el-input v-model="ruleForm.ChannelName"></el-input> -->

          <el-select style="width: 100%;" v-model="ruleForm.channelName" filterable placeholder="请选择代理商名称">
            <el-option :label="item.companyName" :value="item.id" :key='item.id' v-for="item in memberlist.records"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内部销售" prop="salesUserID">
          <el-select style="width: 100%;" v-model="ruleForm.salesUserID" filterable placeholder="请选择内部销售">
            <el-option :label="item.realName" :value="item.id" :key='item.id' v-for="item in operatorList.records"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="Remarks" style="padding-left: 0;box-sizing: border-box;">
          <el-input type="textarea" v-model="ruleForm.remarks" placeholder="请输入备注信息"></el-input>
        </el-form-item>
        <el-form-item label="创建人" style="padding-left: 1px;">
          <el-input v-model="username" class="dised" readonly style="border: 0;"></el-input>
        </el-form-item>
        <!-- <div style="padding:10px 1em;color: #f33; font-size: 12px;">Opp ID规则：OP- 开头， 两位年两位月两位日-八位或七位数字</div> -->
        <!-- <div style="padding:10px 1em;color: #333; font-size: 12px;">创建人：{{username}}</div> -->
        <el-form-item style="text-align: center;padding: 20px 0;border-top:1px solid #EBEEF5 ;">
          <el-button style="width: 180px;" type="primary" @click="addSndSolution('ruleForm')">开始设计</el-button>
        </el-form-item>
      </el-form>

    </el-container>

  </div>

  </div>
</template>

<style>
  body {
    background-color: #F5F5F5;
  }

  #app {
    min-width: 1300px;
  }

  .demo-ruleForm {
    border: 1px solid #EBEEF5;
    background-color: #fff;
    padding: 20px 30px 10px;
  }

  .el-input.dised .el-input__inner {
    color: #333;
    border: 0;
    background-color: #fff;
  }

  .el-form-item__label {
    /* text-align: left; */
  }

  .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before,
  .el-form-item__error {
    color: #6bc966;
  }

  .el-form-item.is-error .el-input__inner,
  .el-form-item.is-error .el-input__inner,
  .el-form-item.is-error .el-input__inner:focus {
    border-color: #6bc966;
  }
</style>
<script>
  import {
    addSndSolution,quaryMemberlist
  } from '@/api/movie'
  // quaryMemberlist
  export default {
    name: 'solution-add',
    data() {
      return {
        operatorList:[],
        memberlist:[],
        visible: false,
        username:'',
        ruleForm: {
          "pdpNumber": "",
          "projectName": "",
          "channelName": "",
          "salesUserID": '',
          "remarks": "",
          "oppID": ""
        },
        rules: {
          projectName: [{
              required: true,
              message: '请输入项目名字',
              trigger: 'blur'
            }
          ],
          salesUserID: [{
            required: true,
            message: '请选择内部销售',
            trigger: 'change'
          }],
        }
      }

    },
    mounted: function() {

      console.log(sessionStorage.getItem('token'))
      var that = this;
    },
    created() {
      console.log(1111)
      this.quaryMemberlist()
      // this.GetListImg();
      // this.addSndSolution();

    },
    methods: {

      addSndSolution(formName) {
        var that = this;
        if(that.ruleForm.OppID){
          // Opp ID规则：OP- 开头， 两位年两位月两位日-八位或七位数字
          let OppArr = that.ruleForm.OppID.split('-')
          console.log(OppArr)
          if(OppArr.length < 3 || OppArr[0].toUpperCase() !='OP' || OppArr[1].length != 6 || isNaN(OppArr[1])|| isNaN(OppArr[2])){
            // if((OppArr[2].length == 7 || OppArr[2].length == 8)){
              this.$message.error('Opp ID规则错误');
          return;
            // }
          }
          var a = OppArr[1].split('')
          console.log(a)
          var m = Number(a[2]+a[3])
          var d = Number(a[4]+a[5])
          if(m <= 0 || m > 12 || d<=0 || d>31){
              this.$message.error('Opp ID规则错误');
              return;
          }
          if(OppArr[2].length == 7 || OppArr[2].length == 8){
          }else{
              this.$message.error('Opp ID规则错误');
              return;
          }
          // for(var )
        }
        // let data1 = {

        //   "pdpNumber": "L20200726000002-1",
        //   "ProjectName": "上海仙岛大机房",
        //   "ChannelName": "上海仙岛",
        //   "SalesUserID": 1,
        //   "Remarks": "我想要豪华大机房",
        //   "Flag": 1,
        //   "CreateUserID": 1,
        //   "isxNumber": "ISX202007240002",
        //   "OppID": "O111111",
        //   "CheckStatus": 0,
        //   "SolutionID": 1
        // }
        console.log(that.ruleForm);
        // return
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var that = this
            addSndSolution(that.ruleForm).then((response) => {
              //这里进入回调函数，即拿到后台响应的数据 response
              //后续再对数据进行你想要的一些操作
              console.log(response)
              const { data } = response
              sessionStorage.setItem('id',data.solutionId)
              this.$router.push({ path: '/home/solution-add-0',
            query:{
              id:data.solutionId,
            }, }

              )
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      quaryMemberlist(){

        var that = this;
        var that = this
        quaryMemberlist().then((response) => {
          const { data } = response;
          that.ruleForm.pdpNumber = data.PDPNumber;
          that.ruleForm.username = data.userName;
          // 代理商
          that.memberlist = data.memberlist;
          // 内部销售
          that.operatorList = data.operatorList;
          that.username = data.userName
          console.log(response)
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
  .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before, .el-form-item__error{color:#F33}
</style>
