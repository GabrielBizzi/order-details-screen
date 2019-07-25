console.log("Generating files...");

const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const faker = require("faker/locale/pt_BR");

const emails = ["maria@email.com", "jose@email.com", "pedro@email.com"];

const payments = ["Boleto bancário", "Cartão de Crédito"];
const statuses = [
  "Aguardando pagamento",
  "Pagamento aprovado",
  "Pedido em separação",
  "Pedido em transporte",
  "Pedido entregue"
];

function random(from, to) {
  return Math.round(Math.random() * (to - from) + from);
}

function generateDate() {
  const currentDate = new Date();

  return new Date(
    currentDate.getFullYear(),
    random(0, currentDate.getMonth() - 1),
    random(1, 31)
  );
}

function generateItems() {
  const items = [];

  for (let i = 0; i < random(1, 5); i++) {
    const price = faker.commerce.price();
    items.push({
      name: `Produto #${i + 1}`,
      qty: random(1, 3),
      price
    });
  }

  return items;
}

function generateDeadline() {
  const from = random(1, 3);
  const to = random(from + 1, 10);

  return { from, to };
}

const orders = {};

(async function() {
  for (let email of emails) {
    const name = email
      .replace(/@.+$/, "")
      .split("")
      .map((char, i) => (i === 0 ? char.toUpperCase() : char))
      .join("");

    const emailDir = path.join(__dirname, email);

    await new Promise(resolve => {
      rimraf(emailDir, resolve);
    });

    fs.mkdirSync(emailDir);

    orders[email] = [];

    const address = {
      street: faker.address.streetName(),
      number: random(1, 300),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      postcode: faker.address.zipCode()
    };

    for (let i = 0; i < random(1, 10); i++) {
      const orderDate = generateDate();
      const freight = random(0, 15);
      let total = 0;

      const items = generateItems();

      for (let item of items) {
        total += Number(item.price) * item.qty;
      }

      total += freight;

      const freightDeadline = generateDeadline();

      const order = {
        id: random(100000, 300000),
        name,
        email,
        address,
        total: total.toFixed(2),
        status: faker.random.arrayElement(statuses),
        payment_method: faker.random.arrayElement(payments),
        items,
        freight: {
          price: freight.toFixed(2),
          ...freightDeadline
        },
        date: [
          String(orderDate.getDate()).padStart(2, "0"),
          String(orderDate.getMonth() + 1).padStart(2, "0"),
          orderDate.getFullYear()
        ].join("/")
      };

      const basicOrder = {
        id: order.id,
        name: order.name,
        email: order.email,
        total: order.total,
        status: order.status,
        date: order.date
      };

      fs.writeFileSync(
        path.join(emailDir, `${order.id}.json`),
        JSON.stringify(order, null, 2),
        "utf8"
      );

      orders[email].push(basicOrder);
    }

    fs.writeFileSync(
      path.join(emailDir, "orders.json"),
      JSON.stringify(orders[email], null, 2),
      "utf8"
    );
  }
})();
