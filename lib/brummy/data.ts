/**
 * Fatos do Brummy Linux — fonte única, não traduzida.
 *
 * Tudo aqui foi conferido no repositório em 14/09/2026 (commit b2e463c).
 * Números são contagens reais: `git ls-files | wc -l`, `wc -l`, e as listas de
 * `packages/*.packages`. Se o repositório mudar, atualize este arquivo — nenhum
 * componente inventa valor.
 */

export const BRUMMY_REPO = "https://github.com/dbcfilho/brummy-linux"

/**
 * A arte original da logo (branca, fundo transparente) está em
 * `public/brummy/brummy-logo.png`. Os arquivos servidos na página saem dela por
 * redimensionamento: `brummy-mark.webp` (herói), `brummy-mark-sm.webp` (header e
 * tela de boot, com o traço levemente engrossado para o anel sobreviver em
 * tamanho de ícone) e `app/brummy/icon.png` (favicon). A logo não é redesenhada
 * em lugar nenhum: se a arte mudar, é só regerar a partir do PNG.
 */

/**
 * Repositório do sistema construído do zero (a fase futura, fora do brummy-linux).
 * Enquanto for string vazia, a seção mostra "repositório em preparação" em vez
 * de um link quebrado. Basta preencher quando existir.
 */
export const BRUMMY_SCRATCH_REPO = ""

/**
 * Captura de tela do sistema rodando. Enquanto for `null`, o bloco inteiro não
 * é renderizado — nada de moldura vazia. Para ativar: coloque o arquivo em
 * `public/brummy/` e preencha os três campos (width/height evitam layout shift).
 */
export const BRUMMY_SCREENSHOT: { src: string; width: number; height: number } | null = null

export const BRUMMY_FACTS = {
  version: "v1.1a",
  status: "EXPERIMENTAL",
  license: "MIT",
  base: "Arch Linux",
  compositor: "Hyprland 0.56.2",
  configFormat: "Lua",
  bar: "Waybar",
  terminal: "kitty",
  shell: "fish",
  files: "nautilus",
  theme: "WhiteSur-Dark",
  font: "JetBrains Mono Nerd Font",
  packages: 179,
  trackedFiles: 99,
  codeLines: 1702,
  profiles: "desktop · thinkpad · general",
} as const

/**
 * Saída real do `install.sh`. Não é traduzida de propósito: é o que o programa
 * imprime, e ele imprime em português. A linha final do script ainda diz "v0.1"
 * (string desatualizada no repositório), então ela fica de fora daqui.
 */
export const BOOT_LOG = [
  "==> [brummy] checando base...",
  "==> [brummy] perfil auto-detectado: desktop",
  "==> [brummy] instalando pacotes...",
  "==> [brummy] linkando configs (com backup)...",
  "==> [brummy] perfil Hyprland: desktop (monitores + GPU)...",
  "==> [brummy] boot: Plymouth + GRUB com a logo...",
] as const

/** Saída real de `brummy help` (bin/brummy). Também não traduzida. */
export const BRUMMY_HELP = [
  { cmd: "brummy help", desc: "mostra isso (descobrível, sem decorar)" },
  { cmd: "brummy update", desc: "atualiza sistema + repuxa links do repo" },
  { cmd: "brummy theme", desc: "mostra/edita o tema (default: WhiteSur-Dark)" },
  { cmd: "brummy apps", desc: "lista atalhos principais" },
  { cmd: "brummy doctor", desc: "checa se tudo está instalado" },
  { cmd: "brummy wallpaper", desc: "troca o papel de parede padrão" },
  { cmd: "brummy hide", desc: "esconde apps do launcher" },
] as const

/**
 * Logo em ASCII que o fastfetch usa no sistema (config/fastfetch/brummy.txt),
 * sem os códigos de cor `$1`. É decorativa na página — vai com aria-hidden.
 */
export const BRUMMY_ASCII = String.raw`                     ▄
                     ▀▄▄
                        █▄
                 ▀▀▄▄ ▀ ███▄             ▄▄▄▄▄▄▄▄▄
                   ▀██▄▀█████▄      ▄█▀▀ ▀     ▀▀██
                ▄    ███▄▀██████████▄           ▄█▀
                  ██   ███▄▀▀▀▀▀▀▀████▄       ▄██
                    ▀▀█████        ▀████▄  ▄▄█▀
                ▄  ▄█ ████▀       ▄████▀▄▄▀▀
                 ██▄▀ ████▄███████████ ▀    ▄▄
              ▄▄▀▀   ██████████████████▄    ▀▀
           ▄█▀▀      █████         ▀█████▄
         ▄█▀         ████▀           ██████
       ▄██▄▄     ▄▄███▀█▄█         ▄████▀
        ▀▀██▀▀  ▄▄   ▄█▀█▄████████████▀
                     ▀█████▀▀▀▀▀▀▀▀▀▀
                  ▀▀  ▄ ▀▀
                      ▀`

/** Caminhos e metadados dos módulos — os textos vêm do dicionário por `id`. */
export const BRUMMY_MODULES = [
  { id: "installer", path: "install.sh", meta: "384 linhas · 3 perfis", state: "ok" },
  { id: "lua", path: "config/hypr/hyprland.lua", meta: "267 linhas · validado", state: "ok" },
  { id: "cli", path: "bin/brummy", meta: "158 linhas · 7 subcomandos", state: "ok" },
  { id: "packages", path: "packages/", meta: "120 base · 25 dev · 19 AUR · 13 laptop", state: "ok" },
  { id: "boot", path: "boot/", meta: "Plymouth + GRUB · make-assets.py", state: "ok" },
  { id: "iso", path: "iso/", meta: "esqueleto · nunca construído", state: "pending" },
  { id: "vm", path: "tools/vm.sh", meta: "242 linhas · QEMU + KVM", state: "ok" },
] as const

export type BrummyModuleId = (typeof BRUMMY_MODULES)[number]["id"]

/** Etapas do roadmap — o texto vem do dicionário; aqui só o estado real. */
export const BRUMMY_STAGES = [
  { id: "v1", tag: "v1", state: "done" },
  { id: "v11", tag: "v1.1", state: "done" },
  { id: "v11a", tag: "v1.1a", state: "done" },
  { id: "v12", tag: "v1.2", state: "current" },
  { id: "v13", tag: "v1.3", state: "next" },
] as const

export type BrummyStageId = (typeof BRUMMY_STAGES)[number]["id"]
