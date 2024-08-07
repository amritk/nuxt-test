// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@scalar/nuxt"],

  scalar: {
    spec: {
      url: "https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml",
    },
    pathRouting: {
      basePath: "/galaxy",
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        "@scalar/nuxt",
        "@scalar/nuxt > ajv",
        "@scalar/nuxt > asjv-draft-04 > ajv",
        "@scalar/nuxt > asjv-formats > ajv",
        "@scalar/nuxt > @scalar/api-client > ajv",
        "@scalar/nuxt > @scalar/api-client > @scalar/openapi-parser > ajv",
        "@scalar/nuxt > @scalar/api-client > @scalar/openapi-parser > ajv-draft-04 > ajv",
        "@scalar/nuxt > @scalar/api-client > @scalar/openapi-parser > ajv-formats > ajv",
        "@scalar/nuxt > @scalar/api-reference > @scalar/openapi-parser > ajv",
        "@scalar/nuxt > @scalar/api-reference > @scalar/openapi-client > @scalar/openapi-parser > ajv",
        "@scalar/nuxt > @scalar/api-reference > @scalar/openapi-client > @scalar/openapi-parser > ajv-draft-04 > ajv",
        "@scalar/nuxt > @scalar/api-reference > @scalar/openapi-client > @scalar/openapi-parser > ajv-formats > ajv",
        "@scalar/nuxt > @scalar/openapi-parser > ajv",
        "@scalar/nuxt > @scalar/openapi-parser > ajv-draft-04 > ajv",
        "@scalar/nuxt > @scalar/openapi-parser > ajv-formats > ajv",
      ],
    },
  },

  compatibilityDate: "2024-07-02",
});

