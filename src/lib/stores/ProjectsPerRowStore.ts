import { writable } from "svelte/store";

const ProjectsPerRowStore = writable(
    4
);

export default ProjectsPerRowStore;