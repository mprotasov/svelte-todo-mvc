<script>
  import { tasks } from "../data/stores.js"
  import TodoItem from "./todo-item.svelte"
  import ControlPanel from "./control-panel.svelte"

  let filterType

  $: shownTasks = $tasks.filter(item => {
    switch (filterType) {
      case "active":
        return !item.completed
      case "completed":
        return item.completed
      case "all":
      default:
        return true
    }
  });

  function handleItemChange(event) {
    const updatedTask = event.detail.updatedTask

    tasks.update(tasks => {
      const index = tasks.findIndex(task => task.id === updatedTask.id)
      return [...tasks.slice(0, index), updatedTask, ...tasks.slice(index + 1)]
    });
  }

  function handleItemRemove(event) {
    const removedTask = event.detail.removedTask
    tasks.update(tasks => {
      const index = tasks.findIndex(task => task.id === removedTask.id)
      return [...tasks.slice(0, index), ...tasks.slice(index + 1)]
    });
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="container">
  {#each shownTasks as task}
    <TodoItem
      {task}
      on:change={handleItemChange}
      on:remove={handleItemRemove} />
  {/each}

  {#if $tasks.length > 0}
    <ControlPanel
      itemsLeft={$tasks.reduce((acc, item) => acc + !item.completed, 0)}
      on:updateFilter={event => (filterType = event.detail.filterType)} />
  {/if}
</div>
