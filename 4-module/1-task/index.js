function makeFriendsList(friends) {
  // ваш код...
  const container = document.createElement("ul");

  for (let i = 0; i < friends.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${friends[i].firstName} ${friends[i].lastName}`;

    container.append(li);
  }

  return container;
}
