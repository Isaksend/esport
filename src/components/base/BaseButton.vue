<template>
    <button :style="buttonStyle">
        {{ label }}
    </button>
</template>
<style scoped>
    button {
        padding: 10px 15px;
        text-align: center;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        border-radius: 5px;
        font-size: 14px;
        transition: all 200ms ease;
        cursor: pointer;
    }
    button:hover {
        background-color: #203D8B;
        color: #fff;
    }
    button:active {
        background-color: #203D8B;
        color: #fff;
    }
    </style>
    
    <script>
    export default {
        name: "BaseButton",
        props: {
        label: {
            type: String,
            default: "Default Button",
        },
        color: {
            type: String,
            default: "#031954", // default text color
        },
        backgroundColor: {
            type: String,
            default: "#fff", // default background color
        },
        borderColor: {
            type: String,
            default: "#031954", // default border color
        },
        fontSize: {
            type: String,
            default: "14px", // default font size
        },
        },
        computed: {
        buttonStyle() {
            return {
            color: this.color,
            backgroundColor: this.backgroundColor,
            border: `1px solid ${this.borderColor}`,
            fontSize: this.fontSize,
            };
        },
        },
    };
</script>