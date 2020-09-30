<template>
  <div class="navbar">

    <el-header class="top">

    	<el-row>
    	    <el-col :span="5" class="top-l">
    	        <img src="@/assets/img/logo.png" alt="">
    	    </el-col>
    	    <el-col :span="14" class="top-c">
    	        <el-row type="flex" class="topc" justify="center">
    	            <el-col :span='4'>
    								<router-link to="/home/solution-list" tag="div">
    	                <img src="@/assets/img/top1.png" alt="">
    	                <p>解决方案列表</p>
    								</router-link>
    	            </el-col>
    	            <el-col :span='4'>
                    <!--  class="active" -->
    								<router-link to="/home/solution-add" tag="div">
    	                <img src="@/assets/img/top2.png" alt="">
    	                <p>新建解决方案</p>
    								</router-link>
    	            </el-col>
    	            <el-col :span='4'>
    								<router-link to="/student/list1" tag="div">
    	                <img src="@/assets/img/top3.png" alt="">
    	                <p>典型方案</p>
    								</router-link>
    	            </el-col>
    	            <el-col :span='4'>
    	                <img src="@/assets/img/top4.png" alt="">
    	                <p>新品推荐</p>
    	            </el-col>
    	        </el-row>
    	    </el-col>
    	    <el-col :span="5" class="top-r" style="font-size: 12px;">
    	        <el-row type="flex" justify="right" :gutter="10">
    	            <el-col :span="4"></el-col>
    	            <el-col :span="10">
    	                <i><img src="@/assets/img/topr1.png" alt=""></i>
    	                <span>欢迎 张**</span>
    	            </el-col>
    	            <el-col :span="10">
    	                <i><img src="@/assets/img/topr2.png" alt=""></i>
    	                <span>注销</span>
    	            </el-col>
    	        </el-row>
    	    </el-col>
    	</el-row>
    </el-header>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '~@/assets/css/global.css';
 .topc .active{
		padding-bottom: 18px;
	}
</style>
