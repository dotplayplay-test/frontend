<script>
    import { crashPoint, Load_animation} from "../store"

</script>

<div class="bhuSSkjs">
    <div class="word crash-point">{$crashPoint}<span>x</span></div>
    <div class="word hascrashed">Crashed</div>
</div>

<style>

@media only screen and (max-width : 650px){
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
    font-size:20px;
    color: rgb(237, 99, 0);
    margin-bottom: 7px;
    font-weight: bold;
}
.word.crash-point{
    font-size: 29px;
    margin-bottom: 60px;
    word-wrap: normal;
    letter-spacing: 0.5rem;
    font-weight: bold;
    width: 120px;
    
    white-space: 2;
    font-stretch: expanded;
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
}

@media only screen and (min-width : 650px){
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
.word.crash-point{
    font-size: 45px;
    margin-bottom: 100px;
    word-wrap: normal;
    letter-spacing: 0.5rem;
    font-weight: bold;
    width: 120px;
    white-space: 2;
    font-stretch: expanded;
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
}


</style>
