<template>
  <div class="index">
    <div class="cardbox">
      <div class="caritem">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="caritem">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="caritem">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
    <div class="indextable">
      <div class="table">
        <el-table :data="newtableData" style="width: 100%" @row-click="rowClick">
          <el-table-column prop="date" label="日期" min-width="180" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" min-width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="300" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="pag">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="pagmax"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'util';
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
        ,
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        }
        
      ],
      newtableData:[],
      pagsize:10,
      pagindex:1,
      pagmax:1
    };
  },
  created(){
      this.getNewTableData()
      this.getPagMax()
  },
  methods: {
    getid() {
      console.log(this.$route.params.id);
    },
    handleSizeChange(val) {
      this.pagsize=val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagindex=val
    },
    getNewTableData(){
        this.newtableData=this.tableData.slice((this.pagindex-1)*this.pagsize,this.pagindex*this.pagsize)
    },
    getPagMax(){
        this.pagmax=this.tableData.length
        console.log(this.pagmax)
    },
    rowClick(row, column, event){
        console.log(row.address)
        var reg=/\d+/g
        var id=row.address.match(reg)[0]
        console.log(id)
        this.$router.push({name:"tableinfo",params:{id}})
    }
  },
  watch:{
      "pagindex":function(){
          this.getNewTableData()
      }
  },
  computed:{
  
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  .cardbox {
    flex: 1;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .caritem {
      margin: 10px 30px;
      flex: 1;
      background-color: #eee;
      box-shadow: 0 0 8px #ccc;
      border-radius: 8px;
      overflow: hidden;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          display: block;
          height: 100px;
          box-sizing: border-box;
          width: 50%;
          text-align: center;
          line-height: 50px;
          border: 1px white solid;
        }
      }
    }
  }
  .indextable {
    background-color: #fff;
    margin: 30px 5px 5px 5px;
    border-radius: 10px;
    overflow: hidden;
    .pag {
      margin: 30px;
      .el-pagination {
        width: 400px;
        margin-left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>
