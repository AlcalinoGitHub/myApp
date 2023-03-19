<script>
    import {page} from "$app/stores"
    import {goto} from "$app/navigation"
    let number = $page.params.number
    let invalid = function(number){if (isNaN(number)) return true}
</script>

{#if invalid(number)}
    <h1>Id must be a number</h1>
{:else}
    <h1>This is page {number}</h1>
{/if}
