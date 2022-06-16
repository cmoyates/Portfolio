<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";
    import ProjectsPerRowStore from "../stores/ProjectsPerRowStore";
    import type { ProjectData } from "../../types";
    import item from "../../assets/json/ProjectData.json";

    let projectDataArray: ProjectData[] = item.projectList;


</script>

<div class="
    flex-grow 
    min-w-full
    flex
    flex-row
    flex-wrap
    max-h-full
    overflow-auto
    p-1
">
    {#each projectDataArray as project}
        <ProjectCard project={project} cardWidthPercentage={100 / $ProjectsPerRowStore}/>
    {/each}
</div>