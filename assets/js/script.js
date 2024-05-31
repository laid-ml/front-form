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
    const response = await axios.post(
      "site--backend-form--y5mtbvcp7vlv.code.run/form",
      data
    );
    console.log(response);
  });
});
