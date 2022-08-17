import Config from "./configs";

const submitForm = (formData: any) => fetch(Config.GET_TOKEN_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})

function* tokenGenerator(inputToken: string) {
  while (true) {
    yield submitForm({inputToken}).then((res) => res.json());
  }
}

export default tokenGenerator;
