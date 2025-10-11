<template>
  <div class="titlebar">
    <div class="left"></div>

    <div class="center"></div>

    <div class="right">
      <ul class="titlebar-button">
        <!-- <li>
          <a-tooltip title="系统菜单"><MenuOutlined /></a-tooltip>
        </li>
        <li>
          <a-tooltip title="最小化"><MinusOutlined /></a-tooltip>
        </li>
        <li>
          <a-tooltip title="最大化"><BorderOutlined /></a-tooltip>
        </li>
        <li class="close">
          <a-tooltip title="关闭"><CloseOutlined /></a-tooltip>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.titlebar {
  display: flex;
  width: 100%;
  height: 36px; /* 你自己设定的固定高度 */
  flex-shrink: 0;

  .left {
    width: 200px;
  }

  .center {
    -webkit-app-region: drag; /* 如果你是 Electron，这让它能拖动窗口 */
    flex: 1;
  }

  .right {
    width: 150px;
  }

  &-button {
    float: right;
    margin: 4px;
    padding: 0;
    list-style: none;

    li {
      display: inline;
      padding: 0 8px;
      font-size: 1.25em;

      &:hover {
        color: #378cfb;
      }

      &.close:hover {
        color: #f5323f;
      }
    }
  }
}
</style>
