<!-- Single Weather Card Component -->
<template>
  <div class="col-sm-12 col-md-6">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ weather._name }} -- {{ weather._country._name }}
        </h3>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="condition col-md-6 col-sm-6">
            <h2>
              {{ weather._weatherCondition ? weather._weatherCondition : "--" }}
            </h2>
          </div>
          <div class="temperature col-md-6 col-sm-6">
            <h2>{{ weather._weatherTemp ? weather._weatherTemp : "--" }} ℃</h2>
          </div>
        </div>
        <div>
          <h5>Last Update: {{ weather._weatherLastUpdated | toDateTime }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["weather"],
  data() {
    return {};
  },
  filters: {
    /* Filter to convert epoch to readable datetime */
    toDateTime(value) {
      if (value) {
        return moment.unix(value).format("MMMM Do YYYY, h:mm:ss a");
      }
      return "N/A";
    },
  },
};
</script>

<style lang="scss">
.temperature {
  text-align: right;
}

.temperature > h2 {
  color: rgba(0, 173, 255, 0.54);
}
</style>