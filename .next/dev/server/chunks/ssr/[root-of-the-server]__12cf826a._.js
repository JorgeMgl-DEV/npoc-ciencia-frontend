module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/lib/session.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getSession",
    ()=>getSession,
    "setSession",
    ()=>setSession
]);
"use client";
const KEY = "npoc.session.v1";
function getSession() {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}
function setSession(s) {
    localStorage.setItem(KEY, JSON.stringify(s));
}
function clearSession() {
    localStorage.removeItem(KEY);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "LinkButton",
    ()=>LinkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function Button({ className, variant = "primary", ...props }) {
    const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500/50";
    const styles = variant === "primary" ? "bg-emerald-600 text-white hover:bg-emerald-700" : variant === "danger" ? "bg-rose-600 text-white hover:bg-rose-700" : "bg-transparent hover:bg-slate-100 text-slate-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(base, styles, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function LinkButton({ href, children, variant = "primary", className }) {
    const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500/50";
    const styles = variant === "primary" ? "bg-emerald-600 text-white hover:bg-emerald-700" : variant === "danger" ? "bg-rose-600 text-white hover:bg-rose-700" : "bg-transparent hover:bg-slate-100 text-slate-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(base, styles, className),
        href: href,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Guard",
    ()=>Guard,
    "LogoutButton",
    ()=>LogoutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/lib/session.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Guard({ role, children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [ok, setOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
        if (!s) {
            router.replace("/login");
            return;
        }
        if (s.role !== role) {
            router.replace(s.role === "GESTOR" ? "/gestor" : "/professor");
            return;
        }
        setOk(true);
    }, [
        role,
        router
    ]);
    if (!ok) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container-max py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-600",
                    children: "Verificando sessão..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Guard.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Guard.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Guard.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
function LogoutButton() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkButton"], {
        href: "#",
        variant: "ghost",
        className: "border border-slate-200",
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick: (e)=>{
            e.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSession"])();
            router.push("/");
        },
        children: "Sair"
    }, void 0, false, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Guard.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
;
;
function Logo({ compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-extrabold tracking-tight",
                        children: "NPOC Ciência"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: "IP Coelho Neto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const nav = [
    {
        href: "/#sobre",
        label: "Sobre o NPOC Ciência"
    },
    {
        href: "/transparencia",
        label: "Transparência"
    }
];
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-max flex h-16 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 md:flex",
                        children: nav.map((n)=>{
                            const active = pathname === n.href || n.href.startsWith("/#") && pathname === "/";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: n.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("text-sm font-semibold text-slate-600 hover:text-slate-900", active && "text-slate-900"),
                                children: n.label
                            }, n.href, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkButton"], {
                            href: "/login",
                            className: "px-5",
                            children: "Área do professor"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen((v)=>!v),
                        className: "grid h-10 w-10 place-items-center rounded-xl hover:bg-slate-100 md:hidden",
                        "aria-label": "Abrir menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-100 bg-white md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-max flex flex-col gap-2 py-3",
                    children: [
                        nav.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: n.href,
                                className: "rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",
                                onClick: ()=>setOpen(false),
                                children: n.label
                            }, n.href, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkButton"], {
                            href: "/login",
                            className: "mt-2 w-full",
                            children: "Área do professor"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/lib/mockDb.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COURSES",
    ()=>COURSES,
    "getProduction",
    ()=>getProduction,
    "listProductions",
    ()=>listProductions,
    "removeProduction",
    ()=>removeProduction,
    "setStatus",
    ()=>setStatus,
    "upsertProduction",
    ()=>upsertProduction
]);
const now = ()=>new Date().toISOString();
let productions = [
    {
        id: "p1",
        titulo: "Monitoramento da qualidade da água em rios urbanos",
        tipo: "Projeto",
        evento: "FECULEMA 2025",
        ano: 2025,
        status: "Aprovado",
        autores: "Prof. Erick Macgregor; Murilo; Jorge",
        area: "IoT / Meio Ambiente",
        cursos: [
            "Informática",
            "Meio Ambiente"
        ],
        link: "https://drive.google.com/",
        descricao: "Projeto de pesquisa aplicada com coleta de dados, análise e visualização de indicadores para apoio à tomada de decisão.",
        createdAtISO: now(),
        updatedAtISO: now()
    },
    {
        id: "p2",
        titulo: "Uso de IA na previsão de evasão escolar",
        tipo: "Artigo",
        evento: "CONEDU",
        ano: 2024,
        status: "Em análise",
        autores: "Prof. João; Maria Silva; Pedro Santos",
        area: "IA / Educação",
        cursos: [
            "Administração",
            "Informática"
        ],
        link: "https://doi.org/",
        descricao: "Aplicação de modelos preditivos com variáveis acadêmicas para identificar risco de evasão e apoiar intervenções.",
        createdAtISO: now(),
        updatedAtISO: now()
    },
    {
        id: "p3",
        titulo: "Robótica educacional aplicada ao ensino médio",
        tipo: "Apresentação",
        evento: "SNCT",
        ano: 2024,
        status: "Rascunho",
        autores: "Prof. Beatriz; Equipe Robótica",
        area: "Robótica",
        cursos: [
            "Redes"
        ],
        link: "https://drive.google.com/",
        descricao: "Relato de experiência de oficinas, desafios e resultados de aprendizagem em robótica educacional.",
        createdAtISO: now(),
        updatedAtISO: now()
    }
];
function listProductions() {
    return productions;
}
function getProduction(id) {
    return productions.find((p)=>p.id === id) ?? null;
}
function upsertProduction(p) {
    const idx = productions.findIndex((x)=>x.id === p.id);
    if (idx >= 0) productions[idx] = {
        ...p,
        updatedAtISO: now()
    };
    else productions.unshift({
        ...p,
        createdAtISO: now(),
        updatedAtISO: now()
    });
}
function removeProduction(id) {
    productions = productions.filter((p)=>p.id !== id);
}
function setStatus(id, status, feedbackGestor) {
    const p = getProduction(id);
    if (!p) return;
    upsertProduction({
        ...p,
        status,
        feedbackGestor: feedbackGestor ?? p.feedbackGestor
    });
}
const COURSES = [
    "Informática",
    "Redes",
    "Farmácia",
    "Meio Ambiente",
    "Administração",
    "Enfermagem"
];
}),
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductionForm",
    ()=>ProductionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/lib/mockDb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const TYPES = [
    "Artigo",
    "Projeto",
    "Apresentação",
    "Premiação"
];
function uuid() {
    return Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
}
function ProductionForm({ id }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProduction"])(id) : null, [
        id
    ]);
    const [titulo, setTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.titulo ?? "");
    const [tipo, setTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.tipo ?? "");
    const [evento, setEvento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.evento ?? "");
    const [ano, setAno] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.ano?.toString() ?? new Date().getFullYear().toString());
    const [autores, setAutores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.autores ?? "");
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.area ?? "");
    const [cursos, setCursos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.cursos ?? [
        "Informática"
    ]);
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.link ?? "");
    const [descricao, setDescricao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existing?.descricao ?? "");
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function toggleCurso(c) {
        setCursos((prev)=>prev.includes(c) ? prev.filter((x)=>x !== c) : [
                ...prev,
                c
            ]);
    }
    function submit() {
        setErr(null);
        if (!titulo.trim()) return setErr("Informe o título.");
        if (!tipo) return setErr("Selecione o tipo.");
        if (!evento.trim()) return setErr("Informe o evento/revista/competição.");
        if (!autores.trim()) return setErr("Informe autores (professor e alunos).");
        if (!link.trim()) return setErr("Informe o link (DOI/anais/Google Drive).");
        if (!descricao.trim()) return setErr("Informe uma breve descrição.");
        if (cursos.length === 0) return setErr("Selecione ao menos um curso.");
        const payload = {
            id: existing?.id ?? `p_${uuid()}`,
            titulo: titulo.trim(),
            tipo: tipo,
            evento: evento.trim(),
            ano: Number(ano) || new Date().getFullYear(),
            status: existing?.status ?? "Em análise",
            autores: autores.trim(),
            area: area.trim() || "Área não informada",
            cursos,
            link: link.trim(),
            descricao: descricao.trim(),
            createdAtISO: existing?.createdAtISO ?? new Date().toISOString(),
            updatedAtISO: new Date().toISOString()
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertProduction"])(payload);
        router.push("/professor/producoes");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-extrabold text-blue-900",
                children: existing ? "Editar Produção Científica" : "Cadastrar Produção Científica"
            }, void 0, false, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-600",
                children: "Preencha as informações abaixo para registrar uma produção no NPOC Ciência."
            }, void 0, false, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold",
                                children: "Título da produção"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                placeholder: "Ex: Monitoramento da qualidade da água em rios urbanos",
                                value: titulo,
                                onChange: (e)=>setTitulo(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold",
                                children: "Tipo de produção"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                value: tipo,
                                onChange: (e)=>setTipo(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Selecione"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t,
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold",
                                        children: "Evento / Revista / Competição"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                        placeholder: "Ex: FECULEMA 2025, CONEDU, SNCT, Revista X...",
                                        value: evento,
                                        onChange: (e)=>setEvento(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold",
                                        children: "Ano"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                        value: ano,
                                        onChange: (e)=>setAno(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold",
                                children: "Autores (professor e alunos)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                placeholder: "Ex: Prof. João, Maria Silva, Pedro Santos...",
                                value: autores,
                                onChange: (e)=>setAutores(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold",
                                        children: "Área do projeto"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                        placeholder: "Ex: IA / Educação, Redes, Robótica...",
                                        value: area,
                                        onChange: (e)=>setArea(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold",
                                        children: "Cursos envolvidos"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COURSES"].map((c)=>{
                                            const active = cursos.includes(c);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleCurso(c),
                                                className: [
                                                    "rounded-full border px-3 py-1 text-xs font-bold transition",
                                                    active ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                                                ].join(" "),
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold",
                                children: "Link para comprovação (DOI, anais ou Google Drive)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                placeholder: "https://",
                                value: link,
                                onChange: (e)=>setLink(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold",
                                children: "Breve descrição"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "mt-2 min-h-[110px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400",
                                placeholder: "Descreva o objetivo, método e resultado esperado (resumo curto).",
                                value: descricao,
                                onChange: (e)=>setDescricao(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-slate-500",
                                children: "Sugestão (CNPq): objetivo, metodologia, resultados/impacto e palavras-chave."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700",
                        children: err
                    }, void 0, false, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: submit,
                                className: "px-6",
                                children: "Salvar produção"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkButton"], {
                                href: "/professor/producoes",
                                variant: "ghost",
                                className: "border border-slate-200",
                                children: "Voltar"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/ProductionForm.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12cf826a._.js.map