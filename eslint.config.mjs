import nextConfig from "eslint-config-next"

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      // React Compiler readiness rules — advisory for now, several shadcn/ui
      // primitives under components/ui rely on these patterns intentionally.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
]

export default eslintConfig
