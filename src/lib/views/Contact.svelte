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
    min-w-full
">
    <h1 class="text-3xl">Contact</h1>
    <table class="text-sm">
        <tr>
            <td class="pr-2">Email:</td>
            <td>
                <a href="mailto:cmoyates@gmail.com" class="
                    hover:underline
                ">
                    cmoyates@gmail.com
                </a>
            </td>
        </tr>
        <tr>
            <td class="pr-2">LinkedIn:</td> 
            <td>
                <a href="https://www.linkedin.com/in/cristopher-yates/" class="
                    hover:underline
                ">
                    https://www.linkedin.com/in/cristopher-yates/
                </a>
            </td>
        </tr>
    </table>
    <Button text="Back" click={() => {changeView(View.Home)}}/>
</div>