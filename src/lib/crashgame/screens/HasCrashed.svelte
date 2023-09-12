<script>
    import { crashPoint, Load_animation} from "../store"

</script>

<div class="bhuSSkjs">
    <div class="word crash-point">{$crashPoint}x</div>
    <div class="word hascrashed">Crashed</div>
</div>

<style>
.bhuSSkjs {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.word.crash-point {
    font-size: 46px;
    color: rgb(237, 99, 0);
    margin-bottom: 100px;
    font-weight: bold;
}
.word.hascrashed{
    position: absolute;
    font-size: 12px;
    background: rgb(237, 99, 0);
    font-weight: bold;
    padding: 5px 50px;
    color: #dfdcdc;
    border-radius:3px;
}
</style>
