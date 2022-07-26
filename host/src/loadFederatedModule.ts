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
        // @ts-ignore
        await __webpack_init_sharing__("default")
        // @ts-ignore
        const container = window[scope]
        // @ts-ignore
        await container.init(__webpack_share_scopes__.default)
        const factory = await container.get(module)
        return factory()
    }
}

export const loadFederatedModule = (url: string, scope: string, module: string) => {
    return () => loadRemote(url).then(loadComponent(scope, module))
}
