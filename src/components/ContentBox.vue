<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-12 p-3 text-center">
        <h6 class="mt-0">Working Hours</h6>
        <ul>
          <li>Mon: 16-23</li>
          <li>Tue: 16-23</li>
          <li>Wed: 16-23</li>
          <li>Thu: 16-23</li>
          <li>Fri: 16-23</li>
          <li>Sat: closed</li>
          <li>Sun closed</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBox",
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_colors";
.content-wrapper {
  border: 1px solid $primaryColor;
  border-radius: 5px;
  overflow: hidden;
  ul {
    li {
      margin-bottom: 3px;
    }
  }
}
</style>
