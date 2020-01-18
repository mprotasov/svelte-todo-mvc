<script>
  import { createEventDispatcher } from "svelte/"
  import { Checkbox, Button } from "svelte-mui"

  export let task

  const dispatch = createEventDispatcher()

  function handleCheckboxChange(event) {
    dispatch("change", {
      updatedTask: {
        ...task,
        completed: event.target.checked
      }
    })
  }

  function handleRemoveButtonClick() {
    dispatch("remove", {
      removedTask: task
    })
  }
</script>

<style>
  .completed {
    text-decoration-line: line-through;
  }

  .container {
    display: flex;
    width: auto;
    align-items: center;
  }
</style>

<div class="container">
  <Checkbox checked={task.completed} on:change={handleCheckboxChange}>
    <span class:completed={task.completed}>{task.value}</span>
  </Checkbox>
  <Button on:click={handleRemoveButtonClick} color="red">Delete</Button>
</div>
