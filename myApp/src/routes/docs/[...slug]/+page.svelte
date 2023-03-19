<script>
    import {page} from '$app/stores'
    let Args = $page.params.slug.split('/')
    console.log(Args)
</script>

<h1>This is a doc</h1>

{#if Args.length === 1}
    <h1>Docs for feature {Args[0]}</h1>
{:else if Args.length === 2}
    <h1>Docs for freature {Args[0]} with review {Args[1]}</h1>
{/if}