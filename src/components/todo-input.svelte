<script>
  import { tasks, IdGenerator } from "../data/stores.js"
  const ENTER_KEY_CODE = 13
  let task = ""
  const idGenerator = IdGenerator()

  function handleKeyUp(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      if (task !== "") {
        tasks.update(tasks => [
          ...tasks,
          {
            id: idGenerator.next().value,
            value: task,
            completed: false
          }
        ])
      }

      task = ""
    }
  }
</script>

<input type="text" bind:value={task} on:keyup={handleKeyUp} />
