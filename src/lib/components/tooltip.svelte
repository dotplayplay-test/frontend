<script>
    export let text = "Tooltip text";
    let tooltipElement;
    const handleMouseOut = () => {
        document
            .querySelectorAll(".tooltiptext")
            .forEach(el => document.body.removeChild(el));
    };
    const handleHover = () => {
        const firstChild = tooltipElement.firstChild;
        const tooltipText = document.createElement("span");
        tooltipText.classList.add("tooltiptext");
        document.body.appendChild(tooltipText);
        tooltipText.textContent = text;
        tooltipText.style.top =
            firstChild.getBoundingClientRect().top - (tooltipText.getBoundingClientRect().height/2) +
            "px";
        tooltipText.style.left = firstChild.getBoundingClientRect().left + "px";
    };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
    class="tooltip"
    bind:this={tooltipElement}
    on:pointerenter={handleHover}
    on:pointerleave={handleMouseOut}
>
    <slot />
</span>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }
</style>
