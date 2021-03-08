function cupcakes() {
  const cupsList = document.querySelector('ul');

  async function fill_page() {
    const cupcakes = await retrieveCups();
    for (let cupcake of cupcakes) {
      makeLi(cupcake, cupsList);
    }
  }

  async function retrieveCups() {
    const res = await axios.get('http://127.0.0.1:5000/api/cupcakes');
    return res.data.cupcakes;
  }

  function create_cupcake() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      flavor = document.getElementById('flavor').value;
      size = document.getElementById('size').value;
      rating = document.getElementById('rating').value;
      image = document.getElementById('image').value;
      cupcake = {
        flavor: flavor,
        size: size,
        rating: rating,
        image: image,
      };
      add_to_db(cupcake);
      makeLi(cupcake, cupsList);
    });
  }

  async function add_to_db(obj) {
    const BASE_URL = 'http://127.0.0.1:5000';
    const res = await axios.post(`${BASE_URL}/api/cupcakes`, obj);
  }

  function makeLi(cupcake, list) {
    const li = document.createElement('li');
    li.innerText = `${cupcake['flavor']} (Size: ${cupcake['size']}, Rating: ${cupcake['rating']})`;
    list.append(li);
  }

  create_cupcake();

  fill_page();
}

cupcakes();
