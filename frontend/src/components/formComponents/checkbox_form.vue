<script setup lang="ts">
	defineProps<{
		idInput: string,
		labelText: string,
		labelClass: string
	}>()
</script>

<template>
	<div class="form-group form-check">
	   <input type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
		:id="idInput"/>
	 <label :class="labelClass" class="form-check-label inline-block text-gray-800" :for="idInput">{{ labelText }}</label>
	</div>
</template>