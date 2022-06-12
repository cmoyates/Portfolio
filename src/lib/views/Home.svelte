<script lang="ts">
    import Button from "../components/Button.svelte";
    import type { Tweened } from "svelte/motion";

    export let width: Tweened<number>;
    export let height: Tweened<number>;
</script>

<div class="
    flex 
    flex-col
    justify-evenly
    items-center
    h-full 
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