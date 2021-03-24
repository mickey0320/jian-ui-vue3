<template>
  <div>
    <j-button type="primary" icon="j-icon-user">按钮</j-button>
    <j-button type="warning">按钮</j-button>
    <j-button type="success">按钮</j-button>

    <j-row :gutter="10">
      <j-col :span="6">6</j-col>
      <j-col :span="6" :offset="6">6</j-col>
      <j-col :span="6">6</j-col>
    </j-row>
  </div>
</template>
<script lang="ts"></script>
