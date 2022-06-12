<script lang="ts">
  import "./global.css";
  import Home from "./lib/views/Home.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from 'svelte/easing';
  import { View, ViewData } from './types';
  import Projects from "./lib/views/Projects.svelte";
  import Contact from "./lib/views/Contact.svelte";

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
    h-screen 
    flex 
    flex-col
    justify-center
    items-center
    rounded-3xl
    p-5
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