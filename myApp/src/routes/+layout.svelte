<header class = "header-layout">
    <a href = "/">Home</a>
</header>

<slot/> 

<footer class = "footer-layout">footer</footer>


<style>
    .header-layout {
        background-color: rgb(36, 36, 36);
        width: 100%;
        height: 5vh;
        color:azure;
        text-align: center;
        font-size: 3vh;
        border-radius: 10px;
    }

    .footer-layout {
        position: absolute;
        background-color: rgb(36, 36, 36);
        width: 100%;
        height: 5vh;
        color:azure;
        text-align: center;
        font-size: 3vh;
        border-radius: 10px;
        top: 90vh
    }

    a {
        color:white
    }
</style>