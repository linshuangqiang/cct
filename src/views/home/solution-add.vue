<template>
  <div id="">
    <el-container class="cont-conar cont-addjjfa" style="width: 50%;margin-left: auto;margin-right: auto;">
      <el-header style="height: auto;padding: 0 5px;">
        <h2 style="line-height: 1.8;">新建解决方案</h2>
      </el-header>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="PDP编号" style="padding-left: 7px;">
          <el-input v-model="ruleForm.pdpNumber" value="L20200726000002-1" class="dised" readonly style="border: 0;"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="ruleForm.ProjectName"></el-input>
        </el-form-item>
        <el-form-item label="Opp ID" prop="OppID">
          <el-input v-model="ruleForm.OppID"></el-input>
        </el-form-item>
        <el-form-item label="代理商名称" prop="dls">
          <el-input v-model="ruleForm.ChannelName"></el-input>
        </el-form-item>
        <el-form-item label="内部销售" prop="region">
          <el-select style="width: 100%;" v-model="ruleForm.SalesUserID" placeholder="请选择">
            <el-option label="内部销售1" value="1"></el-option>
            <el-option label="内部销售1" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="desc" style="padding-left: 0;box-sizing: border-box;">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
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
    addSndSolution
  } from '@/api/movie'
  export default {
    name: 'solution-add',
    data() {
      return {
        visible: false,
        ruleForm: {
          "pdpNumber": "L20200726000002-1",
          "ProjectName": "上海仙岛大机房",
          "ChannelName": "上海仙岛",
          "SalesUserID": 1,
          "Remarks": "我想要豪华大机房",
          "Flag": 1,
          "CreateUserID": 1,
          "isxNumber": "ISX202007240002",
          "OppID": "O111111",
          "CheckStatus": 0,
          "SolutionID": 1
        },
        rules: {
          ProjectName: [{
              required: true,
              message: '请输入项目名字',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 15,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          OppID: [{
              required: true,
              message: '请输入Opp ID',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 15,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          ChannelName: [{
              required: true,
              message: '请输入代理商名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          SalesUserID: [{
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
      // this.GetListImg();
      // this.addSndSolution();

    },
    methods: {

      addSndSolution(formName) {
        var that = this;
        let data1 = {

          "pdpNumber": "L20200726000002-1",
          "ProjectName": "上海仙岛大机房",
          "ChannelName": "上海仙岛",
          "SalesUserID": 1,
          "Remarks": "我想要豪华大机房",
          "Flag": 1,
          "CreateUserID": 1,
          "isxNumber": "ISX202007240002",
          "OppID": "O111111",
          "CheckStatus": 0,
          "SolutionID": 1
        }

        this.$refs[formName].validate((valid) => {
          if (valid) {
            var that = this
            addSndSolution(that.ruleForm).then((response) => {
              //这里进入回调函数，即拿到后台响应的数据 response
              //后续再对数据进行你想要的一些操作
              console.log(response)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var that = this

            var that = this;
            // /c4c/snd-solution/addSndSolution

            this.$axios({
                method: "post",
                url: "/c4c/snd-solution/addSndSolution",
                data: qs.stringify(this.ruleForm),
                headers: {
                  "Authorization": sessionStorage.getItem('Authorization'),
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
              .then((res) => {
                console.log(res)
                console.log(response.data);
              }).catch((res) => {

              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
