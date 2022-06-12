<script lang="ts">
  import "./global.css";
  import Home from "./lib/views/Home.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from 'svelte/easing';

  let width = tweened(28, {
		duration: 300,
		easing: cubicOut
	});
  let height = tweened(18, {
		duration: 300,
		easing: cubicOut
	});
</script>

<main class="
  bg-black 
  min-h-screen 
  flex 
  flex-col 
  justify-center 
  items-center
  p-4
  max-h-screen
">
  <div style="max-width: {$width}rem; max-height: {$height}rem" class="
    text-xl 
    bg-slate-100
    w-full
    h-screen 
    flex 
    flex-col
    justify-center
    items-center
    rounded-3xl
  ">
    <Home width={width} height={height}/>
  </div>
</main>