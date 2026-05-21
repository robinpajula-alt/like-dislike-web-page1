let thumbs_up_change = (button) => {
  const icon = button.querySelector("i");
  const dislikeIcon = button.nextElementSibling.querySelector("i");

  if (icon.classList.contains("bi-hand-thumbs-up")) {
    icon.classList.replace("bi-hand-thumbs-up", "bi-hand-thumbs-up-fill");
    if (dislikeIcon.classList.contains("bi-hand-thumbs-down-fill")) {
      dislikeIcon.classList.replace("bi-hand-thumbs-down-fill", "bi-hand-thumbs-down");
    }
  } else {
    icon.classList.replace("bi-hand-thumbs-up-fill", "bi-hand-thumbs-up");
  }
};

let currentDislikeButton = null;
const modal = document.getElementById("dislikeModal");

let thumbs_down_change = (button) => {
  const icon = button.querySelector("i");
  if (icon.classList.contains("bi-hand-thumbs-down-fill")) {
    icon.classList.remove("bi-hand-thumbs-down-fill");
    icon.classList.add("bi-hand-thumbs-down");
    return;
  }
  icon.classList.remove("bi-hand-thumbs-down");
  icon.classList.add("bi-hand-thumbs-down-fill");
  const likeIcon = button.previousElementSibling.querySelector("i");
  if (likeIcon.classList.contains("bi-hand-thumbs-up-fill")) {
    likeIcon.classList.remove("bi-hand-thumbs-up-fill");
    likeIcon.classList.add("bi-hand-thumbs-up");
  }
  currentDislikeButton = button;
  modal.classList.add("active");
};

document.getElementById("dislikeConfirm").addEventListener("click", () => {
  const reason = document.getElementById("dislikeReason").value;
  if (!reason.trim()) {
    alert("Põhjus on kohustuslik!");
    return;
  }

  const formData = new FormData();
  formData.append("tekst", reason);
  fetch("idk.php", {
    method: "POST",
    body: formData
  });
  
  modal.classList.remove("active");
  document.getElementById("dislikeReason").value = "";
});

document.getElementById("dislikeCancel").addEventListener("click", () => {
  modal.classList.remove("active");
  document.getElementById("dislikeReason").value = "";
});