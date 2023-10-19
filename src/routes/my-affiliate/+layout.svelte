<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";  
</script>
    
<div>
    <div id="root">
    <Navbar />
    <Sidebar />
    <slot></slot>
    </div>
</div>

<style>
#root{
    background: #fff;
    height: 100vh;
}
</style>