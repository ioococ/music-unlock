<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="封面">
      <template #default="scope">
        <el-image :src="scope.row.picture" style="width: 100px; height: 100px">
          <template #error class="image-slot el-image__error">
            暂无封面
          </template>
        </el-image>
      </template>
    </el-table-column>
    <el-table-column label="歌曲">
      <template #default="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="歌手">
      <template #default="scope">
        <p>{{ scope.row.artist }}</p>
      </template>
    </el-table-column>
    <el-table-column label="专辑">
      <template #default="scope">
        <p>{{ scope.row.album }}</p>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          circle
          type="success"
          @click="handlePlay(scope.$index, scope.row)"
        >
          <el-icon size="20" style="vertical-align: middle">
            <VideoPlay />
          </el-icon>
        </el-button>
        <el-button circle @click="handleDownload(scope.row)">
          <el-icon size="20" style="vertical-align: middle">
            <Download />
          </el-icon>
        </el-button>
        <el-button circle @click="handleEdit(scope.row)">
          <el-icon size="20" style="vertical-align: middle"><Edit /></el-icon>
        </el-button>
        <el-button
          circle
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          <el-icon size="20" style="vertical-align: middle">
            <Delete />
          </el-icon>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { RemoveBlobMusic } from '@/utils/utils';

export default {
  name: 'PreviewTable',
  props: {
    tableData: { type: Array, required: true },
    policy: { type: Number, required: true },
  },

  methods: {
    handlePlay(index, row) {
      this.$emit('play', row.file);
    },
    handleDelete(index, row) {
      RemoveBlobMusic(row);
      this.tableData.splice(index, 1);
    },
    handleDownload(row) {
      this.$emit('download', row);
    },
    handleEdit(row) {
      this.$emit('edit', row);
    },
  },
};
</script>

<style scoped></style>
