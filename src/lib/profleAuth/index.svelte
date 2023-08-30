<script>
import { browser } from '$app/environment'
import { updateProfile } from "$lib/hook/updateProfile"
const {useUpdateProfile} = updateProfile()
  let last_name = ''
  let first_name = ''
  let day = 1
  let month = 1
  let year = 2000
  const id = browser && JSON.parse(localStorage.getItem('user'))

const handleSubmit = (()=>{
    if(!last_name || !first_name){
        console.log("feild can't be empty")
    }else{
        let date = day+"-"+month+"-"+year
        let data = { firstname:first_name, lastname:last_name , dob:date , email : id.email}
        useUpdateProfile(data)
    }
})

</script>
<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="pop sc-hKumaY hJhIys" id="">
            <div class="pop-title">One more step to get the FREE SPIN!</div>
            <p>To make NG a better place, We'd like to know you more. Thanks for your patience.</p>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO">
                <div class="input-label">Your Name</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="Last Name" bind:value={last_name}>
                        </div>
                    </div>
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="First Name" bind:value={first_name}>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO birth-input">
                <div class="input-label">Date of Birth</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="Day" bind:value={day}></div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-control">
                                <input type="text" placeholder="Month" bind:value={month}>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-control">
                                <input type="text" placeholder="Year" bind:value={year}>
                            </div>
                        </div>
                    </div>
                </div>
                <button on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn">
                    <div class="button-inner">Confirm</div>
                </button>
            </div>
    </div>
</div>


<style>
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}
   .gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
}
.gvBCkE .pop {
    transform: translate(-50%, -50%);
    min-width: 420px;
    min-height: 370px;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 1.25rem;
    position: relative;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
    font-size: 0.8125rem;
    padding: 1.25rem;
    transition: all 0.5s ease;
}
.gvBCkE .pop-title {
    color: rgb(255, 255, 255);
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
}
.kDuLvp {
    margin-top: 1rem;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.eEagjO .input-after {
    display: flex;
    margin: 0px;
}
.eEagjO .input-after > .input:first-child {
    margin-left: 0px;
}
.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
}
.eEagjO .input-after > .input {
    margin-top: 0px;
    flex: 1 1 0%;
    margin-left: 0.625rem;
}
.kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    outline: none;
}
.eEagjO .input-after > .input {
    margin-top: 0px;
    flex: 1 1 0%;
    margin-left: 0.625rem;
}
.kDuLvp {
    margin-top: 1rem;
}
.hJhIys .submit-btn {
    margin: 1.875rem auto 0.625rem;
    width: 13.75rem;
}
</style>