<script setup lang="ts">
	defineProps<{
		buttonText: string,
		buttonClass: string,
	}>()
</script>
<template>
	<button type="button" :class="buttonClass" class="inline-block px-7 py-3 font-medium text-sm leading-snug 	uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
		Login
	</button>
</template>