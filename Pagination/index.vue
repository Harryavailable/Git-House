<template>
  <!-- 分页器 -->
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul style="width: 633px">
        <li class="prev disabled" @click="previousPage">
          <a>«上一页</a>
        </li>
        <li
          v-show="startNumAndendNum.startpage >= Math.floor(this.continues / 2)"
          @click="$emit('getPageNo', 1)"
        >
          <a href="#">1</a>
        </li>
        <li
          class="dotted"
          v-show="
            startNumAndendNum.startpage - 1 >= Math.floor(this.continues / 2)
          "
        >
          <span>...</span>
        </li>
        <li
          v-for="(page, index) in startNumAndendNum.endpage"
          :key="index"
          v-if="page >= startNumAndendNum.startpage"
          :class="page === pageNo ? 'active' : ''"
          @click="getPageNo(page)"
        >
          <!-- v-show="page >= startNumAndendNum.startpage"   遍历出来的页码数大于起始页码数时展示-->
          <a href="#">{{ page }}</a>
        </li>
        <li class="dotted" v-show="startNumAndendNum.endpage + 1 < totalPages">
          <span>...</span>
        </li>
        <li
          v-show="startNumAndendNum.endpage != totalPages"
          @click="$emit('getPageNo', totalPages)"
        >
          <a href="#">{{ totalPages }}</a>
        </li>
        <li class="next" @click="nextPage">
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div class="span-center" style="width: 80px">
        <span>共{{ total }}条&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagers-index",
  props: ["pageNo", "pageSize", "total", "continues"], //pageNo 为当前所在页  pageSize为每一页所展示数据个数 total为总数据个数  continues为连续分页数一般为5或7页
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize); //计算页数时需要向上取整
    },
    // 计算出连续页码的起始数字与结束数字
    startNumAndendNum() {
      let startpage = 0;
      let endpage = 0;
      // 连续页码数至少为5页，如果数据的页数不够5页则要进行处理
      if (this.continues >= this.totalPages) {
        startpage = 1;
        endpage = this.totalPages;
      } else {
        //当前页码数位于连续页码数中间
        //如果当前页数值太小，可能分页器中会出现负数
        if (this.pageNo <= Math.floor(this.continues / 2)) {
          startpage = 1;
          endpage = this.continues;
        }
        //如果当前页数值太大，分页器中可能会出现大于总页数的数字
        else if (
          this.pageNo + Math.floor(this.continues / 2) >=
          this.totalPages
        ) {
          startpage = this.totalPages - this.continues + 1;
          endpage = this.totalPages;
        } else {
          startpage = this.pageNo - Math.floor(this.continues / 2);
          endpage = this.pageNo + Math.floor(this.continues / 2);
        }
      }
      return { startpage, endpage };
    },
  },
  methods: {
    getPageNo(page) {
      this.$emit("getPageNo", page);
    },
    previousPage() {
      if (this.pageNo === 1) {
        alert("已经是第一页了！");
      } else {
        this.$emit("getPageNo", this.pageNo - 1);
      }
    },
    nextPage() {
      if (this.pageNo === this.totalPages) {
        alert("已经是最后一页了！");
      } else {
        this.$emit("getPageNo", this.pageNo + 1);
      }
    },
  },
};
</script>

<style scoped lang="less">
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
  margin: 10px 140px;
  .sui-pagination {
    margin: 18px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      width: 490px;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
  .span-center {
    margin-top: 10px;
  }
}
</style>
