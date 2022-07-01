<script setup>
	import input_vue from '@/components/formComponents/input_form.vue'
	import checkbox_vue from '@/components/formComponents/checkbox_form.vue'
	import button_vue from '@/components/formComponents/button_form.vue'
</script>

<template>
	<section class="h-screen">
	  <div class="px-6 h-full text-gray-800">
	    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
	      <div class="grow-0 shrink-1 hidden md:flex md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
	        <img src="@/assets/draw2.webp" class="w-full" alt="Sample image" />
	      </div>
	      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
	        <form>
	          <div
	            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
	          >
	            <p class="text-center font-semibold mx-4 mb-0">Inicio de Sesion</p>
	          </div>

	          <!-- Email input -->
	          <div class="mb-6">
	          	<input_vue className="block w-full px-4 py-2 text-xl" typeInput="text" placeHolder="Correo Electronico" idInput="email_input"/>
	          </div>

	          <!-- Password input -->
	          <div class="mb-6">
	          	<input_vue className="block w-full px-4 py-2 text-xl" typeInput="password" placeHolder="Contraseña" idInput="pass_input"/>
	          </div>

	          <!-- Checkbox input -->
	          <div class="flex justify-between items-center mb-6">
	          	<checkbox_vue idInput="checkbox_input" labelClass="text-orange-600 font-bold underline" labelText="Recordar me"/>
	            <a href="#!" class="text-gray-600 font-bold underline">Olvidaste tu contraseña?</a>
	          </div>

	          <div class="text-center lg:text-left">
	          	<button_vue buttonClass="bg-green-600 text-white focus:bg-green-700 active:bg-green-800 hover:bg-green-700" buttonText="Login"/>

	            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
	              No tienes cuenta?
	              <a
	                href="#!"
	                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
	                >Registrate</a
	              >
	            </p>
	          </div>
	        </form>
	      </div>
	    </div>
	  </div>
	</section>
</template>