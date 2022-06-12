<script lang="ts">
  import "./global.css"
  import Button from "./lib/Button.svelte";
</script>

<main class="bg-black min-h-screen flex flex-col justify-center items-center">
  <div class="
    text-xl 
    bg-slate-100 
    max-w-md 
    w-full 
    max-h-72 
    h-screen 
    flex 
    flex-col
    justify-evenly
    items-center
    rounded-3xl
    p-6
  ">
    <h1 class="text-3xl">Hi, my name is Cris</h1>
    <div class="
      flex
      flex-row
      space-x-5
    ">
      <Button text={"Projects"} click={() => {console.log("sjkslhfd")}}/>
      <Button text={"GitHub"} click={() => {console.log("sjkslhfd")}}/>
      <Button text={"Contact"} click={() => {console.log("sjkslhfd")}}/>
    </div>
  </div>
</main>