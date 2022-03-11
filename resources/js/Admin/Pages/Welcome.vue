<template>
  <section id="container">
    <header>Header area</header>
    <nav>Nav Area</nav>
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      inventore molestias alias nisi! Error eius aliquam, reprehenderit id
      dolorum itaque sit! Dolorem maxime soluta architecto optio aperiam! Quam
      veritatis earum nemo tempore nisi incidunt fugiat voluptatum, illum quia
      deleniti. Eius fuga at commodi doloremque tempora veritatis perspiciatis,
      consectetur consequatur quia.
    </main>
    <footer>Footer area</footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          title: "Titile 1",
        },
        {
          id: "2",
          title: "Titile 12",
        },
        {
          id: "3",
          title: "Titile 13",
        },
        {
          id: "4",
          title: "Titile 45",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  margin-top: 40px;
}
#container {
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 100px auto 150px;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  grid-gap: 10px;
}
header {
  grid-area: header;
  background-color: gray;
}
nav {
  grid-area: nav;
  background-color: blue;
}
main {
  grid-area: main;
  background-color: red;
}
footer {
  grid-area: footer;
  background: orange;
}
</style>
