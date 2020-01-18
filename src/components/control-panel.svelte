<script>
  import { Radio } from "svelte-mui"
  import { createEventDispatcher } from "svelte"

  export let itemsLeft

  const dispatch = createEventDispatcher()
  const options = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Active",
      value: "active"
    },
    {
      label: "Completed",
      value: "completed"
    }
  ];

  let selectedValue = options[0].value

  $: {
    dispatch("updateFilter", {
      filterType: selectedValue
    })
  }
</script>

<style>
  .container {
    display: flex;
    align-items: center;
  }

  /*
    svelte-mui styling issue
    */
  :global(.radioButton) {
    width: auto !important;
  }
</style>

<div class="container">
  <span>{itemsLeft} items left</span>
  {#each options as option}
    <Radio bind:group={selectedValue} class="radioButton" value={option.value}>
      <span>{option.label}</span>
    </Radio>
  {/each}
</div>
