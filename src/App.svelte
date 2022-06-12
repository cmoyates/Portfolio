<script lang="ts">
  import "./global.css";
  import Button from "./lib/Button.svelte";
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
  flex flex-col 
  justify-center 
  items-center
  p-4
  max-h-screen
">
  <div style="max-width: {$width}rem; max-height: {$height}rem" class="
    text-xl 
    bg-slate-100
    w-full 
    max-h-72 
    h-screen 
    flex 
    flex-col
    justify-evenly
    items-center
    rounded-3xl
  ">
    <h1 class="text-3xl">Hi, my name is Cris</h1>
    <div class="
      flex
      flex-row
      space-x-5
    ">
      <Button text={"Projects"} click={() => {width.set(106); height.set(60);}}/>
      <Button text={"GitHub"} click={() => {width.set(28); height.set(18);}}/>
      <Button text={"Contact"} click={() => {width.set(38); height.set(18);}}/>
    </div>
  </div>
</main>