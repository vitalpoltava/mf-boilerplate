import {loadAuthToken} from "service/Utils";

const submitForm = (formData: Data): Promise<TokenHttpResponse> => loadAuthToken(formData);

function* tokenGenerator(inputToken: string) {
  while (true) {
    yield submitForm({inputToken});
  }
}

export default tokenGenerator;
