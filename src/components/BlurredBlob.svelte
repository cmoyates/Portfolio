<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		const blob = document.getElementById('blob');

		let firstMovement = false;

		const moveBlobToPointer = (e: PointerEvent) => {
			const { clientX, clientY } = e;
			if (!blob) return;

			if (!firstMovement) {
				firstMovement = true;
				blob.animate(
					{
						opacity: 100
					},
					{ duration: 1000, fill: 'forwards' }
				);
				blob.style.left = `${clientX}px`;
				blob.style.top = `${clientY}px`;
			}

			blob.animate(
				{
					top: `${clientY}px`,
					left: `${clientX}px`
				},
				{ duration: 5000, fill: 'forwards' }
			);
		};

		document.addEventListener('pointermove', moveBlobToPointer);
	});

	onDestroy(() => {});
</script>

<div
	id="blob"
	class="absolute -z-20 aspect-square w-[50vmin] -translate-x-1/2 -translate-y-1/2 opacity-0"
>
	<div
		id="inner-blob"
		class="aspect-square w-[50vmin] rounded-full bg-white bg-gradient-to-l from-teal-300 to-purple-500"
	/>
</div>

<div id="blur" class="absolute -z-10 h-screen w-screen backdrop-blur-[20vmin]" />

<style>
	@keyframes rotate {
		from {
			rotate: 0deg;
		}
		50% {
			scale: 1 1.5;
		}
		to {
			rotate: 360deg;
		}
	}
	#inner-blob {
		animation-name: rotate;
		animation-duration: 20s;
		animation-iteration-count: infinite;
	}
</style>
