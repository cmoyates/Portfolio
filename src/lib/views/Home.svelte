<script lang="ts">
    import Button from "../components/Button.svelte";
    import { View } from '../../types';

    export let changeView: (newView: View) => void
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
      <Button text={"Projects"} click={() => {changeView(View.Projects)}}/>
      <Button text={"GitHub"} click={() => {changeView(View.Home)}}/>
      <Button text={"Contact"} click={() => {changeView(View.Contact)}}/>
    </div>
</div>