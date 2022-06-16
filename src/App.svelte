<script lang="ts">
  import "./global.css";
  import Home from "./lib/views/Home.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from 'svelte/easing';
  import { View, ViewData } from './types';
  import Projects from "./lib/views/Projects.svelte";
  import Contact from "./lib/views/Contact.svelte";
  import { onMount } from "svelte";
  import ProjectsPerRowStore from "./lib/stores/ProjectsPerRowStore";


  let width = tweened(28, {
		duration: 300,
		easing: cubicOut
	});
  let height = tweened(18, {
		duration: 300,
		easing: cubicOut
	});


  let currentView: View = View.Home;

  const VIEW_DATA_MAP = new Map<View, ViewData>([
    [View.Home, {width: 28, height: 18}],
    [View.Projects, {width: 106, height: 60}],
    [View.Contact, {width: 38, height: 18}]
  ])

  const changeView = (newView: View) => {
    currentView = newView;
    let newViewData: ViewData = VIEW_DATA_MAP.get(newView);
    width.set(newViewData.width);
    height.set(newViewData.height);
  }

  
  const BREAKPOINTS: number[] = [
    670, 
    950, 
    1250
  ]

  for (let i = 0; i < BREAKPOINTS.length; i++) {
    if (window.innerWidth < BREAKPOINTS[i]) {
      ProjectsPerRowStore.update((_) => i + 1);
      break;
    }
  }

  var mqlLG = window.matchMedia(`(max-width: ${BREAKPOINTS[2]}px)`);
  var mqlMD = window.matchMedia(`(max-width: ${BREAKPOINTS[1]}px)`);
  var mqlSM = window.matchMedia(`(max-width: ${BREAKPOINTS[0]}px)`);

  onMount(async () => {
    mqlLG.onchange = (e) => {
      ProjectsPerRowStore.update((_) => e.matches ? 3 : 4);
    }
    mqlMD.onchange = (e) => {
      ProjectsPerRowStore.update((_) => e.matches ? 2 : 3);
    }
    mqlSM.onchange = (e) => {
      ProjectsPerRowStore.update((_) => e.matches ? 1 : 2);
    }
  })
</script>

<main class="
  bg-black
  min-h-screen 
  flex 
  flex-col 
  justify-center 
  items-center
  p-4
  max-h-screen
">
  <div style="max-width: {$width}rem; max-height: {$height}rem" class="
    bg-slate-100
    w-full
    h-12
    flex 
    flex-col
    flex-grow
    justify-center
    items-center
    rounded-3xl
    p-4
  ">
    {#if currentView === View.Home}
      <Home changeView={changeView}/>
    {:else if currentView === View.Projects}
      <Projects changeView={changeView}/>
    {:else}
      <Contact changeView={changeView}/>
    {/if}
  </div>
</main>