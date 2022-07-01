<script setup lang="ts">
	defineProps<{
		className: string,
		typeInput: string,
		placeHolder: string,
		idInput: string
	}>()
</script>

<template>
	<input :type="typeInput" :id="idInput" :placeholder="placeHolder" :class="className" class="form-control font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
</template>