<script lang="ts">
    export let text: string;
    export let click: Function = () => {};
    export let link: string | undefined = undefined;
</script>

<a href={link} target="_blank">
    <button on:click={click()} href={link} class="
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
</a>
