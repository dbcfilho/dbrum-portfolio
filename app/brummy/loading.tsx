import BrummyBootScreen from "@/components/brummy/brummy-boot-screen"

/**
 * Fallback de Suspense da rota. Em conexões rápidas quase não aparece, porque a
 * tela de boot do header já cobriu a transição; em conexões lentas, é ela que
 * continua de onde a outra parou, em vez de um branco.
 */
export default function BrummyLoading() {
  return <BrummyBootScreen standalone />
}
