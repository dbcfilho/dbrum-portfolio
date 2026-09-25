/**
 * Fatos do Brummy Linux — fonte única, não traduzida.
 *
 * Tudo aqui foi conferido no repositório em 25/09/2026 (commit 74445b5).
 * Números são contagens reais: `git ls-files | wc -l`, `wc -l`, e as listas de
 * `packages/*.packages`. Se o repositório mudar, atualize este arquivo — nenhum
 * componente inventa valor.
 *
 * Como cada número é medido (para a próxima atualização bater com esta):
 *   trackedFiles  git ls-files | wc -l
 *   codeLines     git ls-files | grep -E '\.(sh|lua|py)$|^bin/|^install\.sh$' | xargs wc -l
 *   packages      linhas não vazias e não comentadas de todos os packages/*.packages
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
  version: "v1.4",
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
  packages: 186,
  trackedFiles: 113,
  codeLines: 2835,
  profiles: "desktop · thinkpad · general",
} as const

/**
 * Saída real do `install.sh`, na ordem em que ele imprime. Não é traduzida de
 * propósito: é o que o programa imprime, e ele imprime em português.
 */
export const BOOT_LOG = [
  "==> [brummy] perfil auto-detectado: desktop",
  "==> [brummy] checando base...",
  "==> [brummy] instalando pacotes...",
  "==> [brummy] snapshots (/ em btrfs: snapper + snap-pac + grub-btrfs)...",
  "==> [brummy] linkando configs (com backup)...",
  "==> [brummy] perfil Hyprland: desktop (monitores + GPU)...",
  "==> [brummy] boot: Plymouth + GRUB com a logo...",
] as const

/** Saída real de `brummy help` (bin/brummy). Também não traduzida. */
export const BRUMMY_HELP = [
  { cmd: "brummy help", desc: "mostra isso (descobrível, sem decorar)" },
  { cmd: "brummy update", desc: "atualiza sistema + repuxa links do repo" },
  { cmd: "brummy theme", desc: "mostra/edita o tema (default: WhiteSur-Dark + accent azul)" },
  { cmd: "brummy apps", desc: "lista atalhos principais" },
  { cmd: "brummy doctor", desc: "checa se tudo está instalado" },
  { cmd: "brummy wallpaper", desc: "troca o papel de parede padrão" },
  { cmd: "brummy hide", desc: "esconde/traz de volta apps no launcher" },
  { cmd: "brummy fix", desc: "conserta links de config quebrados (não entra na sessão?)" },
  { cmd: "brummy snapshot", desc: "pontos de restauração (btrfs)" },
  { cmd: "brummy uninstall", desc: "desfaz os links e devolve os backups das suas configs" },
  { cmd: "brummy bars", desc: "barras de título clicáveis (hyprbars)" },
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
  { id: "installer", path: "install.sh", meta: "497 linhas · 3 perfis", state: "ok" },
  { id: "lua", path: "config/hypr/hyprland.lua", meta: "340 linhas · validado a cada push", state: "ok" },
  { id: "ci", path: ".github/workflows/", meta: "check.sh · verify-config nos 3 perfis", state: "ok" },
  { id: "cli", path: "bin/brummy", meta: "399 linhas · 11 subcomandos", state: "ok" },
  { id: "packages", path: "packages/", meta: "123 base · 25 dev · 12 laptop · 4 btrfs · 22 AUR", state: "ok" },
  { id: "snapshots", path: "docs/snapshots.md", meta: "snapper · snap-pac · grub-btrfs", state: "pending" },
  { id: "bars", path: "docs/janelas-clicaveis.md", meta: "hyprbars · SUPER+M minimiza", state: "pending" },
  { id: "boot", path: "boot/", meta: "Plymouth + GRUB · make-assets.py", state: "ok" },
  { id: "iso", path: "iso/", meta: "construída no CI · ainda não instalada", state: "pending" },
  { id: "vm", path: "tools/vm.sh", meta: "276 linhas · QEMU + KVM", state: "ok" },
] as const

export type BrummyModuleId = (typeof BRUMMY_MODULES)[number]["id"]

/** Etapas do roadmap — o texto vem do dicionário; aqui só o estado real. */
export const BRUMMY_STAGES = [
  { id: "v1", tag: "v1", state: "done" },
  { id: "v11", tag: "v1.1", state: "done" },
  { id: "v11a", tag: "v1.1a", state: "done" },
  { id: "v12", tag: "v1.2", state: "done" },
  { id: "v13", tag: "v1.3", state: "done" },
  { id: "v14", tag: "v1.4", state: "done" },
  { id: "v14a", tag: "v1.4a", state: "current" },
  { id: "hw", tag: "hardware", state: "next" },
] as const

export type BrummyStageId = (typeof BRUMMY_STAGES)[number]["id"]
