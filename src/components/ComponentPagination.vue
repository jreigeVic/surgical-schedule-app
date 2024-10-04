<template>
  <div class="pagination my-1 py-2 flex flex-row flex-nowrap justify-end items-center ">
    <button class="rounded-full p-2 active:bg-finx-light-blue active:text-finx-gray " @click="changePage(page - 1)"
      :disabled="page === 1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg></button>
    <span class="inline-flex !items-center justify-center rounded-full bg-finx-blue text-finx-gray p-2 w-8 h-8">{{ page }}</span>
    <button class="rounded-full p-2 active:bg-finx-light-blue active:text-finx-gray" @click="changePage(page + 1)"
      :disabled="page === totalPages"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['changePage'],
  setup(props, { emit }) {
    const page = ref(1);

    const changePage = (newPage: number) => {
      if (newPage >= 1 && newPage <= props.totalPages) {
        page.value = newPage;
        emit('changePage', newPage);
      }
    };

    return { page, changePage };
  }
});
</script>