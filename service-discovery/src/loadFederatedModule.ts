import Configs from "@/Configs";

const cachedUrls = new Map();

function loadRemote(url: string): Promise<unknown> {
  if (cachedUrls.has(url)) {
    return cachedUrls.get(url)
  }

  const p$ = new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = url
    script.type = "text/javascript"
    script.async = true
    script.onload = () => {
      resolve(undefined)
    }
    document.head.appendChild(script)
  })

  cachedUrls.set(url, p$)
  return p$
}

function loadComponent(scope: string, module: string) {
  return async () => {
    await __webpack_init_sharing__("default")
    // @ts-ignore
    const container = window[scope]
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module)
    return factory()
  }
}

const loadFederatedModule = (url: string, scope: string, module: string) =>
  () => loadRemote(url).then(loadComponent(scope, module));

// Host-specific module loaders
export const loadListModule = () => loadFederatedModule(Configs.LIST.URL, Configs.LIST.SCOPE, Configs.LIST.MODULE);
export const loadFormModule = () => loadFederatedModule(Configs.FORM.URL, Configs.FORM.SCOPE, Configs.FORM.MODULE);
export const loadAuthToken = (formData: Data): Promise<TokenHttpResponse> =>
  fetch(Configs.GET_TOKEN_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  }).then((res) => res.json());
