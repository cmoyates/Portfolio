<script lang="ts">
    import Button from "./Button.svelte";
    import type { ProjectData } from "src/types";

    export let project: ProjectData;
    export let cardWidthPercentage: number = 25;
</script>

<div style="width: {cardWidthPercentage}%;" class="p-2">
    <div class="
        flex
        flex-col
        bg-white 
        drop-shadow-md
        w-full
        items-center
        justify-between
        p-4
        rounded-md
        h-[386.5px]
    ">
        <h1 class="text-2xl text-center">{project.name}</h1>
        <img src={project.imgDir} alt="" class="drop-shadow-md"/>
        <div class="
            flex
            flex-col
            items-center
            space-y-2
            w-full
        ">
            <p class="h-12">{project.description}</p>
            <div class="
                w-full 
                flex 
                flex-row 
                justify-evenly
                items-center
            ">
                {#if project.linkToProject}
                    <Button 
                        text={project.altText ? "Download" : "View"} 
                        link={project.linkToProject}
                    />
                {:else}
                    <p class="px-2">{project.altText}</p>
                {/if}
                <Button 
                    text={"Source Code"} 
                    link={project.linkToSourceCode}
                />
            </div>
        </div>
    </div>
</div>