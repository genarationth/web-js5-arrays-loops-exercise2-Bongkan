// There are three people waiting for the bank.Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.
const waitPeople = ["Sofia", "David", "Juan"];
// Two more people get added to the back of the line - Sara and Augustin.
waitPeople.push("Sara");
waitPeople.push("Augustin");
// The first person in line is called to the teller.
waitPeople.shift();
// What does the queue look like ?
console.log(waitPeople);
// It turns out David was saving a spot for his friend Renata.She shows up and goes behind him in the line.One more person(Elena) shows up and goes to the end of the line.
waitPeople.splice(1, 0, "Renata");
waitPeople.push("Elena");
// What does the queue look like ? 
console.log(waitPeople);