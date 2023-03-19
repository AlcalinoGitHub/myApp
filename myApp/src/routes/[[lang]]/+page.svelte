<script>
    import {page} from "$app/stores"
    import {goto} from "$app/navigation"
    let greetings = {
        en: "Hello",
        fr: "bounjur",
        es: "Hola"
    }

    let {lang} = $page.params
    let greeting =greetings[lang]

    if (greeting == undefined){greeting = greetings["en"]}

    function handleClick() {
        goto("/products", {replaceState: true})
    }
</script>

<h1>{greeting}</h1>

<a href = "/blog">Blogs</a> <br>
<a href = "/about">about</a> <br>
<a href = "/profile">profile</a> <br>
<a href = "/products">products</a> <br>
<a href = "/register">register</a> <br>
<a href = "/login">login</a> <br>

<button on:click = {handleClick}>Place Order</button>

