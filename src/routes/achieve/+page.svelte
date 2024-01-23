<script>
  import { goto } from "$app/navigation";
  import Dialog from "$lib/achieve/Dialog.svelte";
  import AchieveList from "$lib/achieve/AchieveList.svelte";
  import { medals, medalProgress } from "$lib/store/medal";
  import { handleAuthToken } from "$lib/store/routes";

  import AchieveSingle from "../../lib/achieve/AchieveSingle.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    if (!$handleAuthToken) {
      goto("/login");
    }
  });

  $: selectedMedal = null;

  const handleCancel = () => {
    goto("/promotion");
  };

  const selectMedal = (e) => {
    selectedMedal = e.detail;
  };

  const goBack = () => {
    selectedMedal = null;
  };
</script>

<Dialog title="Master Medals" on:cancel={handleCancel}>
  {#if selectedMedal}
    <AchieveSingle
      on:goBack={goBack}
      {selectedMedal}
      medal={$medals[selectedMedal]}
    />
  {:else}
    <AchieveList
      medalProgress={$medalProgress}
      medals={$medals}
      on:selectMedal={selectMedal}
    />
  {/if}
</Dialog>
