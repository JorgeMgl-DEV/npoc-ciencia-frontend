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
"[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GestorTable",
    ()=>GestorTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/lib/mockDb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Badge({ status }) {
    const map = {
        "Aprovado": "bg-emerald-100 text-emerald-700",
        "Em análise": "bg-amber-100 text-amber-700",
        "Rascunho": "bg-blue-100 text-blue-700",
        "Reprovado": "bg-rose-100 text-rose-700",
        "Ajustes": "bg-violet-100 text-violet-700"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("rounded-full px-3 py-1 text-xs font-bold", map[status] ?? "bg-slate-100 text-slate-700"),
        children: status
    }, void 0, false, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function GestorTable() {
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listProductions"])(), [
        tick
    ]);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-[1100px] w-full text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-50 text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Título"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Cursos"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Tipo"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Evento"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Ano"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 font-extrabold",
                                children: "Ações"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        rows.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-slate-100 align-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: p.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: p.area
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: "Link:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "underline",
                                                        href: p.link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: p.link
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: p.cursos.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: p.tipo
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: p.evento
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: p.ano
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                status: p.status
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            p.feedbackGestor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: "Feedback:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    p.feedbackGestor
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>{
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatus"])(p.id, "Aprovado");
                                                                setTick((x)=>x + 1);
                                                            },
                                                            children: "Aprovar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "danger",
                                                            onClick: ()=>{
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatus"])(p.id, "Reprovado", feedback[p.id] || "Produção recusada. Ajuste e reenviar.");
                                                                setTick((x)=>x + 1);
                                                            },
                                                            children: "Recusar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            className: "border border-slate-200",
                                                            onClick: ()=>{
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$lib$2f$mockDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatus"])(p.id, "Ajustes", feedback[p.id] || "Sugestões de ajustes: revisar autores/descrição e anexar comprovação.");
                                                                setTick((x)=>x + 1);
                                                            },
                                                            children: "Sugerir ajustes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-blue-400",
                                                    placeholder: "Feedback rápido (opcional) — usado ao recusar/sugerir ajustes",
                                                    value: feedback[p.id] ?? "",
                                                    onChange: (e)=>setFeedback((prev)=>({
                                                                ...prev,
                                                                [p.id]: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkButton"], {
                                                    href: `/gestor/editar/${p.id}`,
                                                    variant: "ghost",
                                                    className: "border border-slate-200 justify-center",
                                                    children: "Editar livremente"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)),
                        rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$npoc$2d$ciencia$2d$frontend$2d$reconstruido$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "p-6 text-slate-500",
                                colSpan: 7,
                                children: "Nenhuma submissão encontrada."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/npoc-ciencia-frontend-reconstruido-v2/src/components/GestorTable.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5bc61bc._.js.map