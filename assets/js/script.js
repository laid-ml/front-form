const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("carré");
  $.querySelector("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      firstname: $.querySelector("#prénom").value,
      lastname: $.querySelector("#nom").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
  });
});
