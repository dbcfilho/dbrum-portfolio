/**
 * Conteúdo da experiência Brummy (PT nativo, EN, ES).
 *
 * Fica fora de `dictionaries.ts` de propósito: aquele arquivo já passa de 900
 * linhas e descreve o portfólio; este descreve um projeto com vida própria.
 *
 * Convenção: trechos entre crases viram <code> na renderização (ver `RichText`).
 * Saída de terminal e nomes de arquivo NÃO são traduzidos — estão em
 * `lib/brummy/data.ts`, porque é o que a máquina realmente imprime.
 *
 * Regra de conteúdo: nada aqui pode afirmar algo que não esteja no repositório.
 */

import type { Lang } from "@/lib/i18n/config"
import type { BrummyModuleId, BrummyStageId } from "@/lib/brummy/data"

type Module = { title: string; body: string }
type Stage = { title: string; body: string }

const pt = {
  meta: {
    title: "Brummy, um sistema Linux que eu construo por prazer | Douglas Brum",
    description:
      "Brummy Linux é um projeto pessoal e experimental: hoje uma camada própria sobre Arch Linux e Hyprland, com instalador, ISO live, configuração em Lua e boot próprio. Em desenvolvimento, sem prazo.",
  },
  header: {
    back: "Portfólio",
    backLabel: "Voltar para o portfólio de Douglas Brum",
    skip: "Pular para o conteúdo",
    project: "projeto pessoal de Douglas Brum",
  },
  hero: {
    headline: "Um sonho que eu resolvi construir.",
    lede: "Um sistema Linux que eu monto pra mim, aos poucos, porque sempre quis saber como essas coisas funcionam por dentro. Não é produto, não tem prazo, e ainda está sendo construído.",
    logoAlt: "Logo do Brummy: a letra B em pixel art, atravessada por um anel orbital",
    bootLabel: "carregando",
    scroll: "role para ver onde está",
  },
  what: {
    label: "O que é",
    heading: "O que é o Brummy",
    lede: "Hoje ele é uma camada em cima do Arch Linux com Hyprland: um instalador que reconstrói a máquina inteira, configuração versionada, um tema, um boot com a minha logo e um comando pra não precisar decorar nada. Eu uso todo dia.",
    cards: [
      {
        k: "É",
        body: "Um sistema que eu uso de verdade, versionado do primeiro pacote até a tela de boot, instalável com um comando. E a desculpa que eu precisava pra entender cada camada que abro.",
      },
      {
        k: "Não é",
        body: "Não é empresa, não é produto, não é uma distro pronta pra recomendar pra alguém. Não tem data, não tem meta e não precisa virar coisa maior pra valer a pena.",
      },
      {
        k: "Onde está",
        body: "Na `v1.4`. O instalador completo rodou numa VM limpa, a configuração do Hyprland é validada a cada push, e a primeira ISO live saiu inteira do GitHub Actions. Ninguém instalou a partir dela ainda.",
      },
    ],
  },
  origin: {
    label: "Origem",
    heading: "Como isso começou",
    paragraphs: [
      "Quando eu era criança, computador era uma caixa que fazia coisas por motivos que ninguém me explicava. Eu mexia até quebrar, formatava, e mexia de novo. Nunca perdi a curiosidade de saber o que acontece entre apertar o botão e a tela acender.",
      "Em algum momento parei de aceitar que o sistema era só aquilo que veio instalado. Dava pra trocar o gerenciador de janelas. Depois a barra. Depois a tela de login. Depois a imagem que aparece antes de tudo isso. Cada camada que eu abria tinha outra embaixo.",
      "O Brummy começou aí, sem nome e sem plano: uma pasta de configurações que eu carregava de máquina em máquina. Virou repositório no dia em que percebi que estava reescrevendo as mesmas decisões toda vez que formatava. Hoje é um instalador que sabe remontar a minha máquina do zero, e o motivo pra eu continuar descendo uma camada por vez.",
    ],
    meta: [
      { k: "começo", v: "uma pasta de dotfiles" },
      { k: "hoje", v: "113 arquivos versionados" },
      { k: "motivo", v: "curiosidade" },
    ],
  },
  now: {
    label: "Agora",
    heading: "O que existe hoje",
    lede: "Tudo aqui está no repositório e pode ser lido linha por linha. O que ainda não foi testado está marcado como não testado.",
    modules: {
      installer: {
        title: "Instalador idempotente",
        body: "Detecta o perfil da máquina por DMI, bateria e `lspci`, instala os pacotes, liga os serviços e linka `config/` para `~/.config` guardando backup datado do que já estava lá. Pode rodar quantas vezes quiser sem estragar nada.",
      },
      lua: {
        title: "Configuração em Lua",
        body: "O Hyprland aposenta o formato `.conf` na 0.57, então migrei a configuração inteira para Lua. O primeiro boot numa VM cuspiu 19 erros na tela; depois da migração, `hyprland --verify-config` responde `config ok`. Hoje o mesmo teste roda no GitHub a cada push, para os três perfis de máquina.",
      },
      cli: {
        title: "O comando",
        body: "A parte descobrível do sistema: um comando `brummy` com onze subcomandos. O `doctor` confere uns sessenta binários, links de configuração quebrados, o que o AUR deixou de instalar, os snapshots, o tema escuro e o wallpaper, e avisa o que está faltando.",
      },
      packages: {
        title: "Pacotes declarados",
        body: "186 pacotes em oito listas de texto puro. É a fonte única: o instalador e a ISO leem exatamente os mesmos arquivos, então não existe uma segunda lista pra sair de sincronia.",
      },
      boot: {
        title: "O boot",
        body: "Tema Plymouth próprio: a logo no centro, um halo que respira, cinco pontos e uma barra de 440 pixels. O fundo do GRUB sai da mesma logo, gerado por um script com Pillow.",
      },
      iso: {
        title: "ISO live com Calamares",
        body: "Uma ISO que já é o Brummy, montada com `archiso` dentro de um container Docker, com instalador gráfico. Saiu inteira na quarta build no GitHub Actions. A primeira parou num modo de boot que o archiso já tinha aposentado, a segunda no multilib, e a terceira numa regra da imagem Docker que sumia com arquivos. Ainda não instalei a partir dela.",
      },
      ci: {
        title: "Checagem a cada push",
        body: "Cansei de descobrir erro de configuração só na hora do login. Agora, a cada push, o GitHub roda o `check.sh` (shellcheck, JSON, Lua, os subcomandos) e o `hyprland --verify-config` num container Arch. Se eu errar uma opção, o commit fica vermelho antes de chegar em qualquer máquina.",
      },
      snapshots: {
        title: "Snapshots antes de atualizar",
        body: "Arch é rolling, e um dia uma atualização vai quebrar a sessão. Com `/` em btrfs, o instalador liga snapper, snap-pac e grub-btrfs: todo `pacman` tira um snapshot antes e outro depois, e dá pra voltar a um estado que funcionava direto pelo menu do GRUB. Ainda não testei a volta num disco de verdade.",
      },
      bars: {
        title: "Janelas clicáveis",
        body: "Queria poder fechar uma janela com o mouse sem abrir mão do tiling. Com o plugin hyprbars, cada janela ganha as três bolinhas à esquerda, e o botão amarelo guarda a janela numa gaveta, porque o Hyprland não tem minimizar. Escrevi a configuração lendo o código do plugin e ela passa nos testes, mas ainda não vi as barras desenhando numa sessão real.",
      },
      vm: {
        title: "A VM de teste",
        body: "O GNOME Boxes embaralhava o teclado ABNT2 e não dava aceleração 3D, então escrevi um wrapper de QEMU: `virtio-vga-gl`, scancode cru e SSH na porta 2222.",
      },
    } satisfies Record<BrummyModuleId, Module>,
    terminalTitle: "o comando, por dentro",
    untestedLabel: "Não testado",
    untestedHeading: "O que ainda não foi testado",
    untested: [
      "a instalação a partir da ISO, do boot ao primeiro login",
      "as barras de título desenhando numa sessão real",
      "snapshots e rollback num disco btrfs de verdade",
      "o hardware real: o T430 e o desktop com a RX 6600 XT",
    ],
    untestedNote:
      "O que já foi validado: o `install.sh` inteiro numa VM limpa, a configuração do Hyprland a cada push e a build da ISO. O resto é código que eu escrevi, li e conferi, mas que ainda não rodou inteiro.",
  },
  horizon: {
    label: "Horizonte",
    heading: "Pra onde isso vai",
    lede: "Isto é uma direção, não uma promessa. As datas não existem de propósito.",
    stages: {
      v1: { title: "Base montada", body: "Instalador, perfis de máquina, bundle de desenvolvimento e boot com a logo." },
      v11: { title: "Primeiro boot analisado", body: "Configuração migrada para Lua, wallpaper e tema escuro corrigidos, launcher sem apps parasitas." },
      v11a: { title: "Configuração validada", body: "`hyprland --verify-config` rodando na VM: `config ok`." },
      v12: { title: "Instalador ponta a ponta", body: "O `install.sh` inteiro rodou numa VM limpa e sobreviveu ao reboot. Veio junto a checagem a cada push." },
      v13: { title: "Janelas clicáveis", body: "Barras de título com botões em cima do tiling, e minimizar de verdade." },
      v14: { title: "A primeira ISO", body: "A ISO live com instalador gráfico, construída no GitHub Actions." },
      v14a: { title: "Instalar pela ISO", body: "Dar boot na ISO, instalar pelo Calamares e subir o sistema instalado." },
      hw: { title: "Hardware de verdade", body: "O instalador no T430 e no desktop, fora da VM." },
    } satisfies Record<BrummyStageId, Stage>,
    stateLabels: { done: "feito", current: "agora", next: "a seguir", horizon: "horizonte" },
    scratch: {
      tag: "do zero",
      title: "Um sistema construído, não configurado",
      body: "O ponto de chegada não é uma distro personalizada. É construir um sistema do zero em volta do kernel Linux, do jeito que Debian, Arch e Fedora são sistemas construídos, e não apenas configurados. Isso vive fora deste repositório e vai levar anos. Tudo bem.",
      repoCta: "Ver o repositório",
      repoPending: "Repositório em preparação",
    },
    inspiration: {
      title: "Por que isso importa pra mim",
      body: "Debian, Arch e Fedora não são só sistemas: são bases. O Ubuntu nasceu do Debian. Não estou dizendo que o Brummy vai ser isso. Estou dizendo que é esse tipo de coisa que eu acho bonito. Construir uma base boa o bastante pra que alguém, um dia, queira partir dela.",
    },
  },
  philosophy: {
    label: "Filosofia",
    lines: ["sem pressa.", "sem prazo.", "sem obrigação.", "apenas construir."],
    quote: "Feito pra usar todo dia, mexer por prazer.",
    quoteSource: "README.md do projeto",
  },
  status: {
    label: "Status",
    heading: "Status do sistema",
    rows: [
      { k: "sistema", v: "Brummy Linux" },
      { k: "versão", v: "v1.4" },
      { k: "estado", v: "em desenvolvimento" },
      { k: "base", v: "Arch Linux" },
      { k: "compositor", v: "Hyprland 0.56.2 · Wayland" },
      { k: "configuração", v: "Lua" },
      { k: "barra", v: "Waybar" },
      { k: "terminal", v: "kitty" },
      { k: "tema", v: "WhiteSur-Dark" },
      { k: "fonte", v: "JetBrains Mono Nerd Font" },
      { k: "pacotes", v: "186 declarados" },
      { k: "repositório", v: "113 arquivos · ~2.800 linhas" },
      { k: "licença", v: "MIT" },
    ],
    note: "Os números vêm do repositório, não de estimativa.",
  },
  source: {
    label: "Código",
    heading: "O código está aberto",
    body: "Tudo que está descrito aqui pode ser lido, clonado e criticado. Se você abrir e achar que alguma decisão está errada, provavelmente está. É assim que eu estou aprendendo.",
    cta: "Ver no GitHub",
    ctaNote: "MIT · sem releases ainda: a ISO sai como artefato do GitHub Actions até ser testada.",
    cloneLabel: "clonar",
    copy: "Copiar",
    copied: "Copiado",
    statFiles: "arquivos versionados",
    statPackages: "pacotes declarados",
  },
  footer: {
    back: "Voltar ao portfólio",
    by: "Um projeto pessoal de Douglas Brum",
  },
}

export type BrummyDictionary = typeof pt

const en: BrummyDictionary = {
  meta: {
    title: "Brummy, a Linux system I build for the joy of it | Douglas Brum",
    description:
      "Brummy Linux is a personal, experimental project: today an opinionated layer over Arch Linux and Hyprland, with its own installer, live ISO, Lua configuration and boot splash. In development, no deadline.",
  },
  header: {
    back: "Portfolio",
    backLabel: "Back to Douglas Brum's portfolio",
    skip: "Skip to content",
    project: "a personal project by Douglas Brum",
  },
  hero: {
    headline: "A dream I decided to build.",
    lede: "A Linux system I put together for myself, slowly, because I always wanted to know how these things actually work underneath. Not a product, no deadline, and still being built.",
    logoAlt: "Brummy logo: the letter B in pixel art, crossed by an orbital ring",
    bootLabel: "loading",
    scroll: "scroll to see where it stands",
  },
  what: {
    label: "What it is",
    heading: "What Brummy is",
    lede: "Right now it is a layer on top of Arch Linux with Hyprland: an installer that rebuilds the whole machine, versioned configuration, a theme, a boot splash with my logo, and one command so I never have to memorise anything. I use it every day.",
    cards: [
      {
        k: "It is",
        body: "A system I actually use, versioned from the first package to the boot screen, installable with a single command. And the excuse I needed to understand every layer I open.",
      },
      {
        k: "It is not",
        body: "Not a company, not a product, not a distro I would recommend to anyone yet. No dates, no targets, and no need to become something bigger to be worth doing.",
      },
      {
        k: "Where it stands",
        body: "At `v1.4`. The full installer ran on a clean VM, the Hyprland configuration is validated on every push, and the first live ISO came out whole from GitHub Actions. Nobody has installed from it yet.",
      },
    ],
  },
  origin: {
    label: "Origin",
    heading: "How this started",
    paragraphs: [
      "When I was a kid, a computer was a box that did things for reasons nobody would explain to me. I poked at it until it broke, reinstalled, and poked again. I never lost the urge to know what happens between pressing the button and the screen lighting up.",
      "At some point I stopped accepting that the system was only whatever came installed. You could swap the window manager. Then the bar. Then the login screen. Then the image that shows up before all of that. Every layer I opened had another one underneath.",
      "Brummy started there, with no name and no plan: a folder of configuration files I carried from machine to machine. It became a repository the day I realised I was rewriting the same decisions every time I reinstalled. Today it is an installer that knows how to rebuild my machine from nothing, and the reason I keep going down another layer.",
    ],
    meta: [
      { k: "start", v: "a folder of dotfiles" },
      { k: "today", v: "113 versioned files" },
      { k: "reason", v: "curiosity" },
    ],
  },
  now: {
    label: "Now",
    heading: "What exists today",
    lede: "Everything here is in the repository and can be read line by line. Anything that has not been tested is marked as untested.",
    modules: {
      installer: {
        title: "Idempotent installer",
        body: "Detects the machine profile from DMI, battery and `lspci`, installs the packages, enables the services and links `config/` into `~/.config`, keeping a dated backup of whatever was there. Run it as many times as you like without breaking anything.",
      },
      lua: {
        title: "Configuration in Lua",
        body: "Hyprland retires the `.conf` format in 0.57, so I migrated the whole configuration to Lua. The first boot in a VM threw 19 errors on screen; after the migration, `hyprland --verify-config` answers `config ok`. Today the same check runs on GitHub on every push, for all three machine profiles.",
      },
      cli: {
        title: "The command",
        body: "The discoverable half of the system: a `brummy` command with eleven subcommands. `doctor` checks around sixty binaries, broken config links, whatever the AUR failed to install, the snapshots, the dark theme and the wallpaper, and tells me what is missing.",
      },
      packages: {
        title: "Declared packages",
        body: "186 packages across eight plain-text lists. It is the single source: the installer and the ISO read exactly the same files, so there is no second list to drift out of sync.",
      },
      boot: {
        title: "The boot",
        body: "Its own Plymouth theme: the logo in the centre, a breathing halo, five dots and a 440-pixel bar. The GRUB background comes from the same logo, generated by a Pillow script.",
      },
      iso: {
        title: "Live ISO with Calamares",
        body: "An ISO that already is Brummy, assembled with `archiso` inside a Docker container, with a graphical installer. It came out whole on the fourth build in GitHub Actions. The first one died on a boot mode archiso had already retired, the second on multilib, and the third on a rule in the Docker image that made files disappear. I have not installed from it yet.",
      },
      ci: {
        title: "Checks on every push",
        body: "I got tired of finding configuration mistakes only at login time. Now, on every push, GitHub runs `check.sh` (shellcheck, JSON, Lua, the subcommands) and `hyprland --verify-config` in an Arch container. If I get an option wrong, the commit turns red before it reaches any machine.",
      },
      snapshots: {
        title: "Snapshots before updating",
        body: "Arch is rolling, and some day an update will break the session. With `/` on btrfs, the installer turns on snapper, snap-pac and grub-btrfs: every `pacman` run takes a snapshot before and after, and you can go back to a state that worked straight from the GRUB menu. I have not tested the way back on a real disk yet.",
      },
      bars: {
        title: "Clickable windows",
        body: "I wanted to close a window with the mouse without giving up tiling. With the hyprbars plugin, every window gets the three dots on the left, and the yellow one tucks the window into a drawer, because Hyprland has no minimise. I wrote the configuration by reading the plugin's code and it passes the tests, but I have not seen the bars drawing in a real session yet.",
      },
      vm: {
        title: "The test VM",
        body: "GNOME Boxes scrambled the ABNT2 keyboard and gave no 3D acceleration, so I wrote a QEMU wrapper: `virtio-vga-gl`, raw scancodes and SSH on port 2222.",
      },
    },
    terminalTitle: "the command, from the inside",
    untestedLabel: "Untested",
    untestedHeading: "What has not been tested yet",
    untested: [
      "installing from the ISO, from boot to first login",
      "the title bars drawing in a real session",
      "snapshots and rollback on an actual btrfs disk",
      "real hardware: the T430 and the desktop with the RX 6600 XT",
    ],
    untestedNote:
      "What has been validated: the whole `install.sh` on a clean VM, the Hyprland configuration on every push, and the ISO build. The rest is code I wrote, read and checked, but that has not run end to end.",
  },
  horizon: {
    label: "Horizon",
    heading: "Where this goes",
    lede: "This is a direction, not a promise. The absence of dates is deliberate.",
    stages: {
      v1: { title: "Base assembled", body: "Installer, machine profiles, development bundle and boot splash with the logo." },
      v11: { title: "First boot analysed", body: "Configuration migrated to Lua, wallpaper and dark theme fixed, launcher cleared of stray apps." },
      v11a: { title: "Configuration validated", body: "`hyprland --verify-config` running in the VM: `config ok`." },
      v12: { title: "Installer end to end", body: "The whole `install.sh` ran on a clean VM and survived the reboot. Checks on every push came with it." },
      v13: { title: "Clickable windows", body: "Title bars with buttons on top of the tiling, and a real minimise." },
      v14: { title: "The first ISO", body: "The live ISO with a graphical installer, built in GitHub Actions." },
      v14a: { title: "Install from the ISO", body: "Boot the ISO, install through Calamares and bring up the installed system." },
      hw: { title: "Real hardware", body: "The installer on the T430 and on the desktop, outside the VM." },
    },
    stateLabels: { done: "done", current: "now", next: "next", horizon: "horizon" },
    scratch: {
      tag: "from scratch",
      title: "A system built, not configured",
      body: "The destination is not a customised distro. It is building a system from scratch around the Linux kernel, the way Debian, Arch and Fedora are systems that were built, not merely configured. That lives outside this repository and will take years. That is fine.",
      repoCta: "See the repository",
      repoPending: "Repository in preparation",
    },
    inspiration: {
      title: "Why this matters to me",
      body: "Debian, Arch and Fedora are not just systems: they are foundations. Ubuntu came out of Debian. I am not saying Brummy will be that. I am saying that is the kind of thing I find beautiful. Building a base good enough that someone, one day, might want to start from it.",
    },
  },
  philosophy: {
    label: "Philosophy",
    lines: ["no rush.", "no deadline.", "no obligation.", "just building."],
    quote: "Built to use every day, and to tinker with for pleasure.",
    quoteSource: "the project's README.md",
  },
  status: {
    label: "Status",
    heading: "System status",
    rows: [
      { k: "system", v: "Brummy Linux" },
      { k: "version", v: "v1.4" },
      { k: "state", v: "in development" },
      { k: "base", v: "Arch Linux" },
      { k: "compositor", v: "Hyprland 0.56.2 · Wayland" },
      { k: "configuration", v: "Lua" },
      { k: "bar", v: "Waybar" },
      { k: "terminal", v: "kitty" },
      { k: "theme", v: "WhiteSur-Dark" },
      { k: "font", v: "JetBrains Mono Nerd Font" },
      { k: "packages", v: "186 declared" },
      { k: "repository", v: "113 files · ~2,800 lines" },
      { k: "licence", v: "MIT" },
    ],
    note: "The numbers come from the repository, not from an estimate.",
  },
  source: {
    label: "Source",
    heading: "The code is open",
    body: "Everything described here can be read, cloned and criticised. If you open it and think some decision is wrong, it probably is. That is how I am learning.",
    cta: "View on GitHub",
    ctaNote: "MIT · no releases yet: the ISO ships as a GitHub Actions artifact until it is tested.",
    cloneLabel: "clone",
    copy: "Copy",
    copied: "Copied",
    statFiles: "versioned files",
    statPackages: "declared packages",
  },
  footer: {
    back: "Back to the portfolio",
    by: "A personal project by Douglas Brum",
  },
}

const es: BrummyDictionary = {
  meta: {
    title: "Brummy, un sistema Linux que construyo por gusto | Douglas Brum",
    description:
      "Brummy Linux es un proyecto personal y experimental: hoy una capa propia sobre Arch Linux y Hyprland, con instalador, ISO live, configuración en Lua y arranque propio. En desarrollo, sin plazo.",
  },
  header: {
    back: "Portafolio",
    backLabel: "Volver al portafolio de Douglas Brum",
    skip: "Saltar al contenido",
    project: "un proyecto personal de Douglas Brum",
  },
  hero: {
    headline: "Un sueño que decidí construir.",
    lede: "Un sistema Linux que armo para mí, de a poco, porque siempre quise saber cómo funcionan estas cosas por dentro. No es un producto, no tiene plazo, y todavía se está construyendo.",
    logoAlt: "Logo de Brummy: la letra B en pixel art, atravesada por un anillo orbital",
    bootLabel: "cargando",
    scroll: "desplázate para ver dónde está",
  },
  what: {
    label: "Qué es",
    heading: "Qué es Brummy",
    lede: "Hoy es una capa sobre Arch Linux con Hyprland: un instalador que reconstruye la máquina entera, configuración versionada, un tema, un arranque con mi logo y un comando para no tener que memorizar nada. Lo uso todos los días.",
    cards: [
      {
        k: "Es",
        body: "Un sistema que uso de verdad, versionado desde el primer paquete hasta la pantalla de arranque, instalable con un solo comando. Y la excusa que necesitaba para entender cada capa que abro.",
      },
      {
        k: "No es",
        body: "No es una empresa, no es un producto, no es una distro lista para recomendarle a nadie. Sin fechas, sin metas, y no necesita volverse algo más grande para valer la pena.",
      },
      {
        k: "Dónde está",
        body: "En `v1.4`. El instalador completo corrió en una VM limpia, la configuración de Hyprland se valida en cada push, y la primera ISO live salió entera de GitHub Actions. Nadie instaló desde ella todavía.",
      },
    ],
  },
  origin: {
    label: "Origen",
    heading: "Cómo empezó esto",
    paragraphs: [
      "Cuando era chico, la computadora era una caja que hacía cosas por motivos que nadie me explicaba. La tocaba hasta romperla, la formateaba y la volvía a tocar. Nunca perdí la curiosidad de saber qué pasa entre apretar el botón y que se encienda la pantalla.",
      "En algún momento dejé de aceptar que el sistema era solo lo que venía instalado. Se podía cambiar el gestor de ventanas. Después la barra. Después la pantalla de inicio de sesión. Después la imagen que aparece antes de todo eso. Cada capa que abría tenía otra debajo.",
      "Brummy empezó ahí, sin nombre y sin plan: una carpeta de configuraciones que llevaba de máquina en máquina. Se volvió repositorio el día que me di cuenta de que reescribía las mismas decisiones cada vez que formateaba. Hoy es un instalador que sabe rearmar mi máquina desde cero, y el motivo para seguir bajando una capa más.",
    ],
    meta: [
      { k: "inicio", v: "una carpeta de dotfiles" },
      { k: "hoy", v: "113 archivos versionados" },
      { k: "motivo", v: "curiosidad" },
    ],
  },
  now: {
    label: "Ahora",
    heading: "Qué existe hoy",
    lede: "Todo esto está en el repositorio y se puede leer línea por línea. Lo que todavía no se probó está marcado como no probado.",
    modules: {
      installer: {
        title: "Instalador idempotente",
        body: "Detecta el perfil de la máquina por DMI, batería y `lspci`, instala los paquetes, habilita los servicios y enlaza `config/` a `~/.config` guardando un respaldo fechado de lo que ya estaba. Se puede correr las veces que quieras sin romper nada.",
      },
      lua: {
        title: "Configuración en Lua",
        body: "Hyprland retira el formato `.conf` en la 0.57, así que migré toda la configuración a Lua. El primer arranque en una VM escupió 19 errores en pantalla; tras la migración, `hyprland --verify-config` responde `config ok`. Hoy la misma prueba corre en GitHub en cada push, para los tres perfiles de máquina.",
      },
      cli: {
        title: "El comando",
        body: "La parte descubrible del sistema: un comando `brummy` con once subcomandos. `doctor` revisa unos sesenta binarios, enlaces de configuración rotos, lo que el AUR no logró instalar, los snapshots, el tema oscuro y el fondo, y avisa qué falta.",
      },
      packages: {
        title: "Paquetes declarados",
        body: "186 paquetes en ocho listas de texto plano. Es la fuente única: el instalador y la ISO leen exactamente los mismos archivos, así que no hay una segunda lista que se desincronice.",
      },
      boot: {
        title: "El arranque",
        body: "Tema Plymouth propio: el logo al centro, un halo que respira, cinco puntos y una barra de 440 píxeles. El fondo de GRUB sale del mismo logo, generado por un script con Pillow.",
      },
      iso: {
        title: "ISO live con Calamares",
        body: "Una ISO que ya es Brummy, armada con `archiso` dentro de un contenedor Docker, con instalador gráfico. Salió entera en la cuarta construcción en GitHub Actions. La primera se cayó en un modo de arranque que archiso ya había retirado, la segunda en el multilib, y la tercera en una regla de la imagen de Docker que hacía desaparecer archivos. Todavía no instalé desde ella.",
      },
      ci: {
        title: "Revisión en cada push",
        body: "Me cansé de descubrir errores de configuración recién al iniciar sesión. Ahora, en cada push, GitHub corre el `check.sh` (shellcheck, JSON, Lua, los subcomandos) y `hyprland --verify-config` en un contenedor Arch. Si me equivoco en una opción, el commit queda en rojo antes de llegar a cualquier máquina.",
      },
      snapshots: {
        title: "Snapshots antes de actualizar",
        body: "Arch es rolling, y algún día una actualización va a romper la sesión. Con `/` en btrfs, el instalador activa snapper, snap-pac y grub-btrfs: cada `pacman` toma un snapshot antes y otro después, y se puede volver a un estado que funcionaba directo desde el menú de GRUB. Todavía no probé la vuelta en un disco de verdad.",
      },
      bars: {
        title: "Ventanas clicables",
        body: "Quería poder cerrar una ventana con el mouse sin renunciar al tiling. Con el plugin hyprbars, cada ventana gana los tres puntos a la izquierda, y el amarillo guarda la ventana en un cajón, porque Hyprland no tiene minimizar. Escribí la configuración leyendo el código del plugin y pasa las pruebas, pero todavía no vi las barras dibujando en una sesión real.",
      },
      vm: {
        title: "La VM de prueba",
        body: "GNOME Boxes desordenaba el teclado ABNT2 y no daba aceleración 3D, así que escribí un envoltorio de QEMU: `virtio-vga-gl`, scancode crudo y SSH en el puerto 2222.",
      },
    },
    terminalTitle: "el comando, por dentro",
    untestedLabel: "Sin probar",
    untestedHeading: "Lo que todavía no se probó",
    untested: [
      "la instalación desde la ISO, del arranque al primer inicio de sesión",
      "las barras de título dibujando en una sesión real",
      "snapshots y rollback en un disco btrfs de verdad",
      "el hardware real: la T430 y el desktop con la RX 6600 XT",
    ],
    untestedNote:
      "Lo que ya se validó: el `install.sh` entero en una VM limpia, la configuración de Hyprland en cada push y la construcción de la ISO. El resto es código que escribí, leí y revisé, pero que todavía no corrió entero.",
  },
  horizon: {
    label: "Horizonte",
    heading: "Hacia dónde va",
    lede: "Esto es una dirección, no una promesa. La ausencia de fechas es a propósito.",
    stages: {
      v1: { title: "Base armada", body: "Instalador, perfiles de máquina, paquete de desarrollo y arranque con el logo." },
      v11: { title: "Primer arranque analizado", body: "Configuración migrada a Lua, fondo y tema oscuro corregidos, lanzador sin apps parásitas." },
      v11a: { title: "Configuración validada", body: "`hyprland --verify-config` corriendo en la VM: `config ok`." },
      v12: { title: "Instalador de punta a punta", body: "El `install.sh` entero corrió en una VM limpia y sobrevivió al reinicio. Con él llegó la revisión en cada push." },
      v13: { title: "Ventanas clicables", body: "Barras de título con botones sobre el tiling, y un minimizar de verdad." },
      v14: { title: "La primera ISO", body: "La ISO live con instalador gráfico, construida en GitHub Actions." },
      v14a: { title: "Instalar desde la ISO", body: "Arrancar la ISO, instalar con Calamares y levantar el sistema instalado." },
      hw: { title: "Hardware de verdad", body: "El instalador en la T430 y en el desktop, fuera de la VM." },
    },
    stateLabels: { done: "hecho", current: "ahora", next: "sigue", horizon: "horizonte" },
    scratch: {
      tag: "desde cero",
      title: "Un sistema construido, no configurado",
      body: "El destino no es una distro personalizada. Es construir un sistema desde cero alrededor del kernel Linux, como Debian, Arch y Fedora son sistemas construidos, y no apenas configurados. Eso vive fuera de este repositorio y va a llevar años. Está bien.",
      repoCta: "Ver el repositorio",
      repoPending: "Repositorio en preparación",
    },
    inspiration: {
      title: "Por qué esto me importa",
      body: "Debian, Arch y Fedora no son solo sistemas: son bases. Ubuntu nació de Debian. No estoy diciendo que Brummy vaya a ser eso. Digo que ese es el tipo de cosa que me parece hermoso. Construir una base lo bastante buena como para que alguien, algún día, quiera partir de ella.",
    },
  },
  philosophy: {
    label: "Filosofía",
    lines: ["sin apuro.", "sin plazo.", "sin obligación.", "solo construir."],
    quote: "Hecho para usar todos los días y toquetear por placer.",
    quoteSource: "el README.md del proyecto",
  },
  status: {
    label: "Estado",
    heading: "Estado del sistema",
    rows: [
      { k: "sistema", v: "Brummy Linux" },
      { k: "versión", v: "v1.4" },
      { k: "estado", v: "en desarrollo" },
      { k: "base", v: "Arch Linux" },
      { k: "compositor", v: "Hyprland 0.56.2 · Wayland" },
      { k: "configuración", v: "Lua" },
      { k: "barra", v: "Waybar" },
      { k: "terminal", v: "kitty" },
      { k: "tema", v: "WhiteSur-Dark" },
      { k: "fuente", v: "JetBrains Mono Nerd Font" },
      { k: "paquetes", v: "186 declarados" },
      { k: "repositorio", v: "113 archivos · ~2.800 líneas" },
      { k: "licencia", v: "MIT" },
    ],
    note: "Los números salen del repositorio, no de una estimación.",
  },
  source: {
    label: "Código",
    heading: "El código está abierto",
    body: "Todo lo descrito acá se puede leer, clonar y criticar. Si lo abrís y te parece que alguna decisión está mal, probablemente lo esté. Así es como estoy aprendiendo.",
    cta: "Ver en GitHub",
    ctaNote: "MIT · todavía sin releases: la ISO sale como artefacto de GitHub Actions hasta que se pruebe.",
    cloneLabel: "clonar",
    copy: "Copiar",
    copied: "Copiado",
    statFiles: "archivos versionados",
    statPackages: "paquetes declarados",
  },
  footer: {
    back: "Volver al portafolio",
    by: "Un proyecto personal de Douglas Brum",
  },
}

export const brummyDictionaries: Record<Lang, BrummyDictionary> = { pt, en, es }
