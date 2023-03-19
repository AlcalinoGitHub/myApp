<script>
    import {page} from "$app/stores"
    let id = $page.params.productid
    let RId = $page.params.ReviewId
</script>

<h1>This is review {RId} for product {id}</h1>

<a href = "/products/{id}">Back</a> <br>

<a href = "/">Home</a>