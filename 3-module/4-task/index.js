function showSalary(users, age) {
  // ваш код...
  const filtered = users.filter((user) => user.age <= age);

  return filtered.map((user) => `${user.name}, ${user.balance}`).join('\n');
}
