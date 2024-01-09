<!-- Chat.svelte -->

<script>
  import { onMount } from "svelte";
  import io from "socket.io-client";

  let messages = [];
  let newMessage = "";
  let socket;

  onMount(() => {
    // Connect to the Socket.IO server
    socket = io("http://localhost:8000");

    // Listen for 'new-messages' event from the server
    socket.on("new-messages", (newMessages) => {
      messages = newMessages;
    });

    let defaultUsername = ["John", "Doe", "Rizza", "Malino"];
    let filteredUsers = [];
    let showMention = false;

    const mentionUser = (e) => {
      const inputValue = e.target.value;

      if (inputValue.includes("@")) {
        let atPosition = inputValue.lastIndexOf("@");

        if (atPosition - 1 == -1 || inputValue.charAt(atPosition - 1) === " ") {
          const searchTerm = inputValue.substring(atPosition + 1);
          filteredUsers = defaultUsername.filter((user) =>
            user.toLowerCase().includes(searchTerm.toLowerCase())
          );

          showMention = true;
        } else {
          showMention = false;
        }
      } else {
        showMention = false;
      }
    };

    function onUsernameFocus(e) {
      e.stopPropagation();
      e.target.classList.add("is-selected");
    }

    function onUsernameBlur(e) {
      e.stopPropagation();
      e.target.classList.remove("is-selected");
    }

    function userNameClick(username) {
      newMessages =
        newMessages.substring(0, newMessages.lastIndexOf("@")) + `@${username}`;
      showMention = false;
    }

    return () => {
      // Clean up the socket connection when the component is unmounted
      socket.disconnect();
    };
  });

  const handleSendMessage = () => {
    if (socket && newMessage.trim() !== "") {
      // Emit a 'message' event to the server
      socket.emit("message", {
        text: newMessage,
        // Add any additional message properties you need
      });

      // Clear the input field after sending the message
      newMessage = "";
    }
  };
</script>

<div style="padding: 100px;">
  <div>
    <h2>Chat Room</h2>
    <div>
      {#each messages as { text }, index}
        <div key={index}>{text}</div>
      {/each}
    </div>
  </div>
  <div>
    <input
      type="text"
      bind:value={newMessage}
      placeholder="Type your message..."
    />
    <button on:click={handleSendMessage}>Send</button>
  </div>
</div>
