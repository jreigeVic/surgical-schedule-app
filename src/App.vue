<template>
  <div id="app" class="xl:mx-auto xl:max-w-screen-2xl">
    <header>
      <a href="https://finxapp.com.br" target="_blank">
        <img src="@/assets/fin-x_logo-pos-qefui1hajgepbhu05qjyoeubvymnckd4ir0js06uio.png" class="p-2 mb-3" alt="fin-x logo">
      </a>
    </header>
    <ScheduleList class="shadow-md rounded-lg mx-auto px-2 " />
  </div>
</template>

<script>
import ScheduleList from '@/views/ScheduleList.vue';

export default {
  components: {
    ScheduleList
  }
};
</script>
