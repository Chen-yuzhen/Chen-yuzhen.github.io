new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        name: "iPhone 12",
        description: "This is an incredibly awesome product",
        price: 23900,
        quantity: 0,
        src: "./image/phone.png",
      },
      {
        id: 2,
        name: "Apple watch",
        description: "This is an incredibly awesome product",
        price: 12900,
        quantity: 0,
        src: "./image/watch.jpeg",
      },
      {
        id: 3,
        name: "Macbook Pro",
        description: "This is an incredibly awesome product",
        price: 39900,
        quantity: 0,
        src: "./image/macbook.png",
      },
    ],
    showCart: false,
  },
  computed: {
    cart() {
      let filter = this.products.filter((item) => {
        return item.quantity > 0;
      });
      return filter;
    },
    totalQuantity() {
      let num = this.products.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      return num;
    },
    totalPrice() {
      let total = this.products.reduce((cost, item) => {
        return cost + item.quantity * item.price;
      }, 0);
      return total;
    },
  },
  methods: {
    updateCart(product, updateType) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else {
            this.products[i].quantity++;
          }

          break;
        }
      }
    },
    showCartHandler() {
      if (this.cart.length == 0) {
        this.showCart = false;
      } else {
        this.showCart = !this.showCart;
      }
    },
  },
});
