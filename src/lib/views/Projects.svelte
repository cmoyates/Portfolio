<script lang="ts">
    import Button from "../components/Button.svelte";
    import { View } from '../../types';

    export let changeView: (newView: View) => void
</script>

<div class="
    flex
    flex-col
    justify-between
    items-center
    min-h-full
    space-y-6
    min-w-full
">
    <div class="
        bg-black 
        flex-grow 
        min-w-full
    ">
        Test
    </div>
    <Button text="Back" click={() => {changeView(View.Home)}}/>
</div>