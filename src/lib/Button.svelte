<script lang="ts">
    export let text: string;
    export let click: Function;
</script>

<button on:click={click()} class="
    rounded-sm
    bg-white
    drop-shadow-md
    px-6
    py-2
    text-sm
    hover:bg-slate-100
">
    {text}
</button>