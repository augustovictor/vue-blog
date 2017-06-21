<template>
    <form>
        <div id="form-header">
            <slot name="form-header" />
        </div>

        <div id="form-fields">
            <slot name="form-fields"/>
        </div>

        <div id="form-controls">
            <slot name="form-controls"></slot>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>