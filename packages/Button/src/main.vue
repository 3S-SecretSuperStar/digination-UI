<template>
  <button class="btu" :class="[`digi-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何的内容 当我们没有传入插槽的时候 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'DigiButton',
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      // 数据类型： 字符串
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>

.btu{
  text-decoration: none;
  border: none;
  padding: 12px 40px;
  line-height: 1;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  transform: scale(1);
  &:active{
     transform: scale(0.97);
  }
}

.digi-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.digi-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover{
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.digi-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover{
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.digi-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover{
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.digi-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover{
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素的按钮
.digi-button.is-plain {
  &:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.digi-button--primary.is-plain {
  color: #a2a8ad;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.digi-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.digi-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.digi-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.digi-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.digi-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 原形按钮
.digi-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.digi-button [class*=hm-icon-]+span {
    margin-left: 5px;
}

.is-loading:before{
    content:'';
    display:inline-block;
    width:1em;
    height:1em;
    margin-right:1em;
    color:#fff;
    border:2px solid #fff;
    border-radius: 50%;
    vertical-align: -10%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%);
    animation:rotate 1s linear infinite;
}

@keyframes rotate{
    from{
      transform:rotatez(0deg);
    }
    to{
      transform:rotatez(360deg);
    }
}
</style>
