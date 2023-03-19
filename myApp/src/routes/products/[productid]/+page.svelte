<script>
    import {page} from "$app/stores"
    let id = $page.params.productid
</script>

<h1>Details about product {id} </h1>

<a href = "/products/{id}/1">Review</a>