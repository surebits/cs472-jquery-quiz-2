const [p1, p2] = $("p");
console.log(p1, p2, 'p1, p2')

p2.text(p1.clone().children().remove().end().text());