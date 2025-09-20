// Estilos para header y footer
const styles = `
<style>
header {
  top: 0px;
  position: fixed;
  width: 100%;
  background-color: #f9f9f9;
  z-index: 1;
  padding: 20px;
  font-size: 15px;
}

.container-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: inherit;
  font-size: 24px;
  color: black;
  margin-left: 10px;
}

nav {
  display: flex;
  align-items: center;
}

.redes_sociales_nav {
  display: flex;
  padding: 0px;
  margin: 0px;
}

.redes_sociales_nav a {
  margin: 0 5px;
}

.redes_sociales_nav img {
  width: 24px;
  height: 24px;
}

.botones_menu {
  display: inline-block;
  text-align: center;
  margin: 0 15px;
  margin-bottom: 8px;
  width: auto;
  height: 28px;
  text-decoration: none;
  color: black;
  background: #fbca1f;
  font-family: inherit;
  padding: 0 23px;
  font-weight: 900;
  font-size: 13px;
  border: 2px solid black;
  border-radius: 0.4em;
  box-shadow: 0.2em 0.2em;
  cursor: pointer;
}

.botones_menu:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

.botones_menu:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

footer {
  min-height: 140px;
  background-color: black;
  color: white;
  padding: 50px 0;
  display: flex;
  justify-content: center;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 10px;
}

.footer-brand {
  grid-column: 1;
}

.footer-links {
  grid-column: 2;
  display: flex;
  justify-content: space-between;
}

.footer-section,
.footer-section-dos {
  flex: 1;
}

.footer-social {
  grid-column: 1 / -1;
  background: aliceblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

footer .container-center {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

footer .container-center div {
  display: flex;
  flex-direction: column;
  text-align: center;
}

footer h2,
footer h3 {
  font-size: 28px;
  margin: 30px 0;
}

footer p,
footer a {
  margin: 7px 0;
  display: block;
  color: white;
  text-decoration: none;
}

footer a:hover {
  color: gray;
}

@media (max-width: 800px) {
  nav a {
    display: none;
  }

  nav button:nth-child(5) {
    display: none;
  }

  nav button+button {
    display: flex;
  }

  header .container-center {
    margin: 0px;
    padding: 0px;
    width: 100%;
  }

  footer .container-center {
    flex-direction: column;
  }

  footer .container-center div {
    width: 100%;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .footer-brand,
  .footer-links {
    grid-column: 1;
  }

  .footer-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
`;

// Insertar estilos
document.head.insertAdjacentHTML("beforeend", styles);

// Cargar header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

// Cargar footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  });
