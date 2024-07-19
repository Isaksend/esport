<template>
    <input
        :style="inputStyle"
        :placeholder="placeholder"
        />
    </template>
    
    <script setup>
    import { computed } from 'vue';
    
    const props = defineProps({
        color: String,
        backgroundColor: String,
        fontSize: String,
        placeholder: String
    });
    
    const inputStyle = computed(() => ({
        color: props.color || '#000',
        backgroundColor: props.backgroundColor || '#D9D9D9',
        fontSize: props.fontSize || '12px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%'
    }));
    </script>
    
    <style scoped>
    input {
        height: 40px; /* fixed height */
        font-weight: 500;
    }
</style>