module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/api/recommendations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
// If you want to override the source, set RECOMMENDATIONS_URL in your env.
// Prefer a local JSON in /public by default to avoid 404/cors issues.
const SOURCE_URL = process.env.RECOMMENDATIONS_URL?.trim() || "/recommendations.json";
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 hours
;
let cached = null;
const isLocalSource = SOURCE_URL.startsWith("/");
const fallbackRecommendations = [
    {
        id: "sample-1",
        author: "Tech Lead, Acme Corp",
        role: "Tech Lead",
        text: "Douglas entregou arquitetura backend sólida, com segurança e observabilidade impecáveis. Comunicação clara e foco em valor de negócio.",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2024-10-15T00:00:00Z",
        company: "Acme Corp",
        authorAvatar: "/images/avatar-placeholder.png"
    },
    {
        id: "sample-2",
        author: "Head of Engineering, Orion",
        role: "Head of Engineering",
        text: "Code reviews consistentes, documentação objetiva e deploys previsíveis. Elevou o padrão da equipe em poucas semanas.",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2024-07-02T00:00:00Z",
        company: "Orion",
        authorAvatar: "/images/avatar-placeholder.png"
    },
    {
        id: "sample-3",
        author: "Product Manager, Nova",
        role: "Product Manager",
        text: "Traduz necessidades do produto em backlog técnico enxuto. Prioriza impacto e mantém stakeholders alinhados.",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2024-05-12T00:00:00Z",
        company: "Nova",
        authorAvatar: "/images/avatar-placeholder.png"
    }
];
function normalize(list) {
    return (list || []).filter((item)=>item && item.id && item.author && item.text && item.linkedinUrl && item.date).map((item)=>({
            id: String(item.id),
            author: String(item.author),
            role: item.role ? String(item.role) : "",
            text: String(item.text),
            linkedinUrl: String(item.linkedinUrl),
            date: new Date(item.date).toISOString(),
            authorAvatar: item.authorAvatar ? String(item.authorAvatar) : undefined,
            company: item.company ? String(item.company) : undefined
        })).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
}
async function GET() {
    try {
        // Avoid serving stale cache when using local file during development
        if (!isLocalSource && cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                recommendations: cached.data,
                cached: true
            });
        }
        let json;
        if (isLocalSource) {
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "recommendations.json");
            const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
            json = JSON.parse(content);
        } else {
            const res = await fetch(SOURCE_URL, {
                next: {
                    revalidate: CACHE_DURATION / 1000
                }
            });
            if (!res.ok) {
                throw new Error(`Failed to fetch recommendations: ${res.status}`);
            }
            json = await res.json();
        }
        const normalized = normalize(json);
        if (normalized.length === 0) {
            throw new Error("No valid recommendations in source");
        }
        cached = {
            data: normalized,
            timestamp: Date.now()
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            recommendations: normalized,
            source: SOURCE_URL
        });
    } catch (err) {
        console.error("[recommendations] falling back to local sample", err);
        const normalizedFallback = normalize(fallbackRecommendations);
        cached = {
            data: normalizedFallback,
            timestamp: Date.now()
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            recommendations: normalizedFallback,
            fallback: true
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d2c605c3._.js.map