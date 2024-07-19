<template>
    <input
        :class="inputClasses"
        :style="inputStyle"
        :placeholder="placeholder"
    />
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';
interface Props {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    placeholder?: string;
}
const props = defineProps<Props>();
const inputClasses = computed(() => [
    'p-2 border rounded w-full',
    'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent',
].join(' '));
const inputStyle = computed(() => ({
    color: props.color || '#000',
    backgroundColor: props.backgroundColor || '#D9D9D9',
    fontSize: props.fontSize || '12px',
}));
</script>

<style scoped>
input {
    height: 40px; /* fixed height */
    font-weight: 500;
}
</style>
