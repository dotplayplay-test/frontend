<script>
  import { createEventDispatcher } from "svelte";
  import ScriptManager from "../../logics/ScriptManager";
  import { crashGame } from "../../store";
  import Loader from "$lib/components/loader.svelte";
  export let script = null;

  $: scriptContent = "";
  $: scriptName = "";
  $: saving = false;
  $: scriptId = "";
  $: userId = "";
  $: {
    userId = script?.userId || '';
    scriptId = script?.id || "";
    scriptName = script?.name || "Script Name";
    scriptContent = script?.content || ScriptManager.SCRIPT_TEMPLATE;
  }
  const dispatch = createEventDispatcher();

  const handleSave = async () => {
    if (saving || ! (scriptName && scriptContent)) return;
    saving = true;
    dispatch("busy", true);
    try {
      await $crashGame.script.updateScript({
        ...script,
        name: scriptName,
        content: scriptContent,
        id: !scriptId ? 0 : scriptId,
      });
      dispatch("busy", false);
      dispatch("close");
    } catch (error) {
      console.log("Error saving script ", error);
    } finally {
      dispatch("busy", false);
      saving = false;
    }
  };
  const handleCancel = () => {
    if (saving) return;
    dispatch("close");
  };
</script>

{#if Boolean(script)}
  <div class="sc-jefHZX bRcAAT jScFby">
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Script Name</div>
      <div class="input-control">
        <input
          readonly={userId === "0"}
          on:input={(e) => (scriptName = e.currentTarget.value)}
          type="text"
          value={scriptName}
        />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset script-input">
      <div class="input-label">Script Content</div>
      <div class="input-control">
        <textarea
          readonly={userId === "0"}
          on:change={(e) => (scriptContent = e.currentTarget.value)}
        >
          {scriptContent}
        </textarea>
      </div>
    </div>

    {#if userId !== "0"}
      <div class="edit-btns">
        <button
          disabled={saving}
          on:click={handleSave}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal edit-confirm"
          >{#if saving}
            <Loader />
          {:else}
            <div class="button-inner">Save</div>
          {/if}
        </button><button
          disabled={saving}
          on:click={handleCancel}
          class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal edit-cancel"
          ><div class="button-inner">Cancel</div></button
        >
      </div>
    {/if}
  </div>
{/if}

<style>
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
    padding-bottom: 30px;
  }
  .bRcAAT .input:first-of-type {
    margin-top: 0.5rem;
  }
  .bRcAAT .edit-btns {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 2.25rem;
  }

  .kDuLvp {
    margin-top: 1rem;
  }
  .bRcAAT .edit-btns .edit-confirm {
    flex: 2 1 0%;
  }

  .bRcAAT .edit-confirm {
    margin-right: 0.625rem;
  }
  .bRcAAT .edit-btns .edit-cancel {
    flex: 1 1 0%;
  }

  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }

  .fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }

  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
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
  .kDuLvp .input-control textarea,
  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
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
  .bRcAAT.bc .script-input .input-control {
    height: 30rem;
  }

  .bRcAAT .script-input .input-control {
    height: 23.75rem;
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
  .kDuLvp .input-control textarea {
    padding: 1.125rem 0px;
  }

  .kDuLvp .input-control textarea,
  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
</style>
