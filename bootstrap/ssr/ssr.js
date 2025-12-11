import { mergeProps, useSSRContext, unref, ref, computed, onMounted, onUnmounted, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, resolveDynamicComponent, Fragment, renderList, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderDynamicModel, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useForm, usePage, Link, Head, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$o = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-[#f6fbf7] via-[#eff6f1] to-[#dfeee5] text-gray-800" }, _attrs))}><div class="min-h-screen flex items-center justify-center px-4"><div class="w-full max-w-md bg-white/95 backdrop-blur-sm border border-[#dbe9df] shadow-xl shadow-[#0b8a4610] rounded-2xl px-8 py-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const AuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$n = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="space-y-2 text-center"><p class="text-xs uppercase tracking-[0.35em] text-[#0b8a46]">Account recovery</p><h1 class="text-2xl font-semibold text-gray-800">Reset your password</h1><p class="text-sm text-gray-500">Enter your email and we will send you a reset link.</p></div>`);
      if (__props.status) {
        _push(`<div class="rounded-xl border border-[#cde6d6] bg-[#f4fbf6] px-4 py-3 text-sm text-[#0b8a46] font-medium">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-5"><div class="space-y-2"><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input id="email" type="email" class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-[#0b8a46] focus:ring-2 focus:ring-[#0b8a46]/30 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400"${ssrRenderAttr("value", unref(form).email)} required autofocus>`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600 text-xs">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": unref(form).processing }, "w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-[#0b8a46] text-white font-semibold text-sm shadow-md shadow-[#0b8a4620] hover:bg-[#0a7a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b8a46] transition"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Send reset link </button></form></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="space-y-2 text-center"><p class="text-xs uppercase tracking-[0.35em] text-[#0b8a46]">Beyond Technology</p><h1 class="text-2xl font-semibold text-gray-800">Welcome back</h1><p class="text-sm text-gray-500">Sign in to access the dashboard.</p></div>`);
      if (__props.status) {
        _push(`<div class="rounded-xl border border-[#cde6d6] bg-[#f4fbf6] px-4 py-3 text-sm text-[#0b8a46] font-medium">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-5"><div class="space-y-2"><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input id="email" type="email" class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-[#0b8a46] focus:ring-2 focus:ring-[#0b8a46]/30 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400"${ssrRenderAttr("value", unref(form).email)} required autofocus>`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600 text-xs">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-2"><label for="password" class="block text-sm font-medium text-gray-700">Password</label><input id="password" type="password" class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-[#0b8a46] focus:ring-2 focus:ring-[#0b8a46]/30 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400"${ssrRenderAttr("value", unref(form).password)} required>`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-600 text-xs">${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"><label class="inline-flex items-center gap-2 text-gray-700"><input type="checkbox" class="h-4 w-4 rounded border-[#c7dacc] text-[#0b8a46] focus:ring-[#0b8a46]/40"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""}><span>Remember me</span></label><a${ssrRenderAttr("href", _ctx.route("password.request"))} class="text-[#0b8a46] font-semibold hover:text-[#0a7a3f]">Forgot your password?</a></div><button class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": unref(form).processing }, "w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-[#0b8a46] text-white font-semibold text-sm shadow-md shadow-[#0b8a4620] hover:bg-[#0a7a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b8a46] transition"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Log in </button></form></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    token: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const showPassword = ref(false);
    const showPasswordConfirmation = ref(false);
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-db7ff772><div class="space-y-2 text-center" data-v-db7ff772><p class="text-xs uppercase tracking-[0.35em] text-primary" data-v-db7ff772>Account recovery</p><h1 class="text-2xl font-semibold text-gray-800" data-v-db7ff772>Create new password</h1><p class="text-sm text-gray-500" data-v-db7ff772>Enter your new password below.</p></div><form class="space-y-5" data-v-db7ff772><input type="hidden"${ssrRenderAttr("value", unref(form).email)} data-v-db7ff772><input type="hidden"${ssrRenderAttr("value", unref(form).token)} data-v-db7ff772><div class="space-y-2" data-v-db7ff772><label for="email-display" class="block text-sm font-medium text-gray-700" data-v-db7ff772>Email</label><input id="email-display" type="email" class="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 cursor-not-allowed"${ssrRenderAttr("value", __props.email)} disabled readonly data-v-db7ff772></div><div class="space-y-2" data-v-db7ff772><label for="password" class="block text-sm font-medium text-gray-700" data-v-db7ff772>New Password</label><div class="relative" data-v-db7ff772><input id="password"${ssrRenderAttr("type", showPassword.value ? "text" : "password")} class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 px-4 py-3 pr-12 text-sm shadow-sm placeholder:text-gray-400"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)} required autocomplete="new-password" placeholder="Enter your new password" data-v-db7ff772><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" data-v-db7ff772>`);
      if (!showPassword.value) {
        _push(`<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db7ff772><path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db7ff772><path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-600 text-xs" data-v-db7ff772>${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-2" data-v-db7ff772><label for="password_confirmation" class="block text-sm font-medium text-gray-700" data-v-db7ff772>Confirm New Password</label><div class="relative" data-v-db7ff772><input id="password_confirmation"${ssrRenderAttr("type", showPasswordConfirmation.value ? "text" : "password")} class="block w-full rounded-xl border border-[#dbe9df] bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 px-4 py-3 pr-12 text-sm shadow-sm placeholder:text-gray-400"${ssrRenderDynamicModel(showPasswordConfirmation.value ? "text" : "password", unref(form).password_confirmation, null)} required autocomplete="new-password" placeholder="Confirm your new password" data-v-db7ff772><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" data-v-db7ff772>`);
      if (!showPasswordConfirmation.value) {
        _push(`<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db7ff772><path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db7ff772><path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path><path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-db7ff772></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(form).errors.password_confirmation) {
        _push(`<div class="text-red-600 text-xs" data-v-db7ff772>${ssrInterpolate(unref(form).errors.password_confirmation)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(form).errors.email) {
        _push(`<div class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 font-medium" data-v-db7ff772>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": unref(form).processing }, "w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-[#003D3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-db7ff772>`);
      if (unref(form).processing) {
        _push(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-db7ff772><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-db7ff772></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-db7ff772></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(form).processing ? "Resetting password..." : "Reset password")}</button></form></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-db7ff772"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "DashboardLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const sidebarCollapsed = ref(false);
    const userMenuOpen = ref(false);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const user = computed(() => page.props.auth?.user);
    const userInitial = computed(() => {
      if (user.value?.name) {
        return user.value.name.charAt(0).toUpperCase();
      }
      return "U";
    });
    const menuItems = [
      {
        name: "Pages",
        icon: "pages",
        route: "pages.index"
      }
    ];
    const isActive = (routeName) => {
      return route().current(routeName);
    };
    const closeUserMenu = (event) => {
      const userMenuElement = document.querySelector(".user-menu");
      if (userMenuElement && !userMenuElement.contains(event.target)) {
        userMenuOpen.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", closeUserMenu);
    });
    onUnmounted(() => {
      document.removeEventListener("click", closeUserMenu);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-wrapper" }, _attrs))} data-v-764f45ce><aside class="${ssrRenderClass([{ "sidebar-collapsed": sidebarCollapsed.value }, "sidebar"])}" data-v-764f45ce><div class="sidebar-header" data-v-764f45ce>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "logo-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-764f45ce${_scopeId}><svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce${_scopeId}><rect width="40" height="40" rx="8" fill="#004F4C" data-v-764f45ce${_scopeId}></rect><path d="M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26V14Z" fill="white" data-v-764f45ce${_scopeId}></path><path d="M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V20C28 21.1046 27.1046 22 26 22H20C18.8954 22 18 21.1046 18 20V14Z" fill="#E3ECEB" data-v-764f45ce${_scopeId}></path></svg>`);
            if (!sidebarCollapsed.value) {
              _push2(`<span class="logo-text" data-v-764f45ce${_scopeId}><span class="logo-beyond" data-v-764f45ce${_scopeId}>BEYOND</span><span class="logo-tech" data-v-764f45ce${_scopeId}>TECHNOLOGY</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "logo" }, [
                (openBlock(), createBlock("svg", {
                  class: "logo-icon",
                  viewBox: "0 0 40 40",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("rect", {
                    width: "40",
                    height: "40",
                    rx: "8",
                    fill: "#004F4C"
                  }),
                  createVNode("path", {
                    d: "M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26V14Z",
                    fill: "white"
                  }),
                  createVNode("path", {
                    d: "M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V20C28 21.1046 27.1046 22 26 22H20C18.8954 22 18 21.1046 18 20V14Z",
                    fill: "#E3ECEB"
                  })
                ])),
                !sidebarCollapsed.value ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "logo-text"
                }, [
                  createVNode("span", { class: "logo-beyond" }, "BEYOND"),
                  createVNode("span", { class: "logo-tech" }, "TECHNOLOGY")
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="sidebar-nav" data-v-764f45ce><ul class="nav-list" data-v-764f45ce><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<li class="nav-item" data-v-764f45ce>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(item.route),
          class: ["sidebar-menu-item", { "active": isActive(item.route) }]
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon === "pages") {
                _push2(`<svg class="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce${_scopeId}><path d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce${_scopeId}></path><path d="M11 2V6C11 6.55228 11.4477 7 12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce${_scopeId}></path><path d="M7 10H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-764f45ce${_scopeId}></path><path d="M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-764f45ce${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (!sidebarCollapsed.value) {
                _push2(`<span class="menu-text" data-v-764f45ce${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                item.icon === "pages" ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: "icon",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M11 2V6C11 6.55228 11.4477 7 12 7H16",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M7 10H13",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("path", {
                    d: "M7 13H13",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ])) : createCommentVNode("", true),
                !sidebarCollapsed.value ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "menu-text"
                }, toDisplayString(item.name), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><button class="sidebar-toggle" data-v-764f45ce><svg class="${ssrRenderClass([{ "rotated": sidebarCollapsed.value }, "toggle-icon"])}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce><path d="M12 15L7 10L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path></svg></button></aside><div class="${ssrRenderClass([{ "expanded": sidebarCollapsed.value }, "main-content"])}" data-v-764f45ce><header class="top-header" data-v-764f45ce><div class="header-left" data-v-764f45ce></div><div class="header-right" data-v-764f45ce><div class="user-menu" data-v-764f45ce><button class="user-avatar-btn" data-v-764f45ce><div class="user-avatar" data-v-764f45ce><span data-v-764f45ce>${ssrInterpolate(userInitial.value)}</span></div><svg class="${ssrRenderClass([{ "rotated": userMenuOpen.value }, "dropdown-arrow"])}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path></svg></button>`);
      if (userMenuOpen.value) {
        _push(`<div class="user-dropdown" data-v-764f45ce><div class="dropdown-header" data-v-764f45ce><div class="dropdown-user-avatar" data-v-764f45ce><span data-v-764f45ce>${ssrInterpolate(userInitial.value)}</span></div><div class="dropdown-user-info" data-v-764f45ce><span class="dropdown-user-name" data-v-764f45ce>${ssrInterpolate(user.value?.name || "User")}</span><span class="dropdown-user-email" data-v-764f45ce>${ssrInterpolate(user.value?.email || "")}</span></div></div><div class="dropdown-divider" data-v-764f45ce></div><button class="dropdown-item" data-v-764f45ce><svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce><path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path><path d="M3.75 17.5V15.8333C3.75 14.9493 4.10119 14.1014 4.72631 13.4763C5.35143 12.8512 6.19928 12.5 7.08333 12.5H12.9167C13.8007 12.5 14.6486 12.8512 15.2737 13.4763C15.8988 14.1014 16.25 14.9493 16.25 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path></svg> Edit Profile </button><button class="dropdown-item dropdown-item-danger" data-v-764f45ce><svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-764f45ce><path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.6756 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.6756 3.30072 2.98816 2.98816C3.30072 2.6756 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path><path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path><path d="M17.5 10H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-764f45ce></path></svg> Logout </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header><main class="page-content" data-v-764f45ce>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="dashboard-footer" data-v-764f45ce><p class="footer-text" data-v-764f45ce>${ssrInterpolate(unref(currentYear))} © BEYOND TECHNOLOGY</p><p class="footer-text" data-v-764f45ce></p></footer></div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DashboardLayout.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const DashboardLayout = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-764f45ce"]]);
const _sfc_main$j = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 text-gray-900">You are logged in!</div></div></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const saFlag = "/build/assets/sa-flag-D4E_9N_f.svg";
const usFlag = "/build/assets/us-flag-yPINlvk7.svg";
const _sfc_main$i = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      // English fields
      name_en: "",
      url_slug_en: "",
      meta_title_en: "",
      h1_title_en: "",
      og_title_en: "",
      hreflang_en: "",
      meta_description_en: "",
      og_description_en: "",
      og_image_en: null,
      // Arabic fields
      name_ar: "",
      url_slug_ar: "",
      meta_title_ar: "",
      h1_title_ar: "",
      og_title_ar: "",
      hreflang_ar: "",
      meta_description_ar: "",
      og_description_ar: "",
      og_image_ar: null
    });
    const ogImageEnPreview = ref(null);
    const ogImageArPreview = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-new-page" }, _attrs))} data-v-9ec1ea87><div class="page-header" data-v-9ec1ea87><h1 class="page-title" data-v-9ec1ea87>Add New Page</h1></div><div class="form-container card" data-v-9ec1ea87><div class="form-grid" data-v-9ec1ea87><div class="form-column" data-v-9ec1ea87><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Page Name <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.name_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> URL Slug <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.url_slug_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.url_slug_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Meta Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.meta_title_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.meta_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> H1 Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.h1_title_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.h1_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.og_title_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.og_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Hreflang <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_en)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.hreflang_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.hreflang_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Meta Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><textarea class="form-textarea" placeholder="" rows="4" data-v-9ec1ea87>${ssrInterpolate(unref(form).meta_description_en)}</textarea>`);
      if (unref(form).errors.meta_description_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.meta_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><textarea class="form-textarea" placeholder="" rows="4" data-v-9ec1ea87>${ssrInterpolate(unref(form).og_description_en)}</textarea>`);
      if (unref(form).errors.og_description_en) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.og_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Image <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-9ec1ea87></label><div class="upload-area" data-v-9ec1ea87><input type="file" class="hidden-input" accept="image/*" data-v-9ec1ea87>`);
      if (ogImageEnPreview.value) {
        _push(`<div class="image-preview" data-v-9ec1ea87><img${ssrRenderAttr("src", ogImageEnPreview.value)} alt="Preview" data-v-9ec1ea87></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-9ec1ea87><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec1ea87><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path></svg><span class="upload-text" data-v-9ec1ea87>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div><div class="form-column" data-v-9ec1ea87><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Page Name <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.name_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.name_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> URL Slug <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.url_slug_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.url_slug_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Meta Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.meta_title_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.meta_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> H1 Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.h1_title_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.h1_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.og_title_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.og_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Hreflang <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_ar)} placeholder="" data-v-9ec1ea87>`);
      if (unref(form).errors.hreflang_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.hreflang_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> Meta Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><textarea class="form-textarea" placeholder="" rows="4" data-v-9ec1ea87>${ssrInterpolate(unref(form).meta_description_ar)}</textarea>`);
      if (unref(form).errors.meta_description_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.meta_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><textarea class="form-textarea" placeholder="" rows="4" data-v-9ec1ea87>${ssrInterpolate(unref(form).og_description_ar)}</textarea>`);
      if (unref(form).errors.og_description_ar) {
        _push(`<div class="form-error" data-v-9ec1ea87>${ssrInterpolate(unref(form).errors.og_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-9ec1ea87><label class="form-label" data-v-9ec1ea87> OG Image <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-9ec1ea87></label><div class="upload-area" data-v-9ec1ea87><input type="file" class="hidden-input" accept="image/*" data-v-9ec1ea87>`);
      if (ogImageArPreview.value) {
        _push(`<div class="image-preview" data-v-9ec1ea87><img${ssrRenderAttr("src", ogImageArPreview.value)} alt="Preview" data-v-9ec1ea87></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-9ec1ea87><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec1ea87><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path></svg><span class="upload-text" data-v-9ec1ea87>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div></div><div class="form-actions" data-v-9ec1ea87><button class="btn-cancel"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-9ec1ea87><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec1ea87><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path></svg> Cancel </button><button class="btn-save"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-9ec1ea87><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ec1ea87><path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-9ec1ea87></path></svg> ${ssrInterpolate(unref(form).processing ? "Saving..." : "Save")}</button></div></div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Create.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-9ec1ea87"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      // English fields
      name_en: props.page.name_en || "",
      url_slug_en: props.page.url_slug_en || "",
      meta_title_en: props.page.meta_title_en || "",
      h1_title_en: props.page.h1_title_en || "",
      og_title_en: props.page.og_title_en || "",
      hreflang_en: props.page.hreflang_en || "",
      meta_description_en: props.page.meta_description_en || "",
      og_description_en: props.page.og_description_en || "",
      og_image_en: null,
      // Arabic fields
      name_ar: props.page.name_ar || "",
      url_slug_ar: props.page.url_slug_ar || "",
      meta_title_ar: props.page.meta_title_ar || "",
      h1_title_ar: props.page.h1_title_ar || "",
      og_title_ar: props.page.og_title_ar || "",
      hreflang_ar: props.page.hreflang_ar || "",
      meta_description_ar: props.page.meta_description_ar || "",
      og_description_ar: props.page.og_description_ar || "",
      og_image_ar: null
    });
    const ogImageEnPreview = ref(props.page.og_image_en || null);
    const ogImageArPreview = ref(props.page.og_image_ar || null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-new-page" }, _attrs))} data-v-7109a24a><div class="page-header" data-v-7109a24a><h1 class="page-title" data-v-7109a24a>Edit Page</h1></div><div class="form-container card" data-v-7109a24a><div class="form-grid" data-v-7109a24a><div class="form-column" data-v-7109a24a><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Page Name <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.name_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> URL Slug <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.url_slug_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.url_slug_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Meta Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.meta_title_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.meta_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> H1 Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.h1_title_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.h1_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.og_title_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.og_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Hreflang <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_en)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.hreflang_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.hreflang_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Meta Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><textarea class="form-textarea" placeholder="" rows="4" data-v-7109a24a>${ssrInterpolate(unref(form).meta_description_en)}</textarea>`);
      if (unref(form).errors.meta_description_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.meta_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><textarea class="form-textarea" placeholder="" rows="4" data-v-7109a24a>${ssrInterpolate(unref(form).og_description_en)}</textarea>`);
      if (unref(form).errors.og_description_en) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.og_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Image <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-7109a24a></label><div class="upload-area" data-v-7109a24a><input type="file" class="hidden-input" accept="image/*" data-v-7109a24a>`);
      if (ogImageEnPreview.value) {
        _push(`<div class="image-preview" data-v-7109a24a><img${ssrRenderAttr("src", ogImageEnPreview.value)} alt="Preview" data-v-7109a24a></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-7109a24a><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7109a24a><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path></svg><span class="upload-text" data-v-7109a24a>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div><div class="form-column" data-v-7109a24a><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Page Name <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.name_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.name_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> URL Slug <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.url_slug_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.url_slug_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Meta Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.meta_title_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.meta_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> H1 Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.h1_title_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.h1_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.og_title_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.og_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Hreflang <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_ar)} placeholder="" data-v-7109a24a>`);
      if (unref(form).errors.hreflang_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.hreflang_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> Meta Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><textarea class="form-textarea" placeholder="" rows="4" data-v-7109a24a>${ssrInterpolate(unref(form).meta_description_ar)}</textarea>`);
      if (unref(form).errors.meta_description_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.meta_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><textarea class="form-textarea" placeholder="" rows="4" data-v-7109a24a>${ssrInterpolate(unref(form).og_description_ar)}</textarea>`);
      if (unref(form).errors.og_description_ar) {
        _push(`<div class="form-error" data-v-7109a24a>${ssrInterpolate(unref(form).errors.og_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7109a24a><label class="form-label" data-v-7109a24a> OG Image <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-7109a24a></label><div class="upload-area" data-v-7109a24a><input type="file" class="hidden-input" accept="image/*" data-v-7109a24a>`);
      if (ogImageArPreview.value) {
        _push(`<div class="image-preview" data-v-7109a24a><img${ssrRenderAttr("src", ogImageArPreview.value)} alt="Preview" data-v-7109a24a></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-7109a24a><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7109a24a><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path></svg><span class="upload-text" data-v-7109a24a>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div></div><div class="form-actions" data-v-7109a24a><button class="btn-cancel"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-7109a24a><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7109a24a><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path></svg> Cancel </button><button class="btn-save"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-7109a24a><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7109a24a><path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7109a24a></path></svg> ${ssrInterpolate(unref(form).processing ? "Updating..." : "Update")}</button></div></div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Edit.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-7109a24a"]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const itemsPerPage = 6;
const _sfc_main$g = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const selectedPages = ref([]);
    const selectAll = ref(false);
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(props.pages.length / itemsPerPage));
    const totalResults = computed(() => props.pages.length);
    const paginatedPages = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return props.pages.slice(start, end);
    });
    const paginationInfo = computed(() => {
      if (totalResults.value === 0) return "No results";
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(currentPage.value * itemsPerPage, totalResults.value);
      return `Showing ${start} to ${end} of ${totalResults.value} results`;
    });
    const pageNumbers = computed(() => {
      const pages = [];
      for (let i2 = 1; i2 <= totalPages.value; i2++) {
        pages.push(i2);
      }
      return pages;
    });
    const isPageSelected = (pageId) => {
      return selectedPages.value.includes(pageId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-pages" }, _attrs))} data-v-d3756702><div class="page-header" data-v-d3756702><h1 class="page-title" data-v-d3756702>All Pages</h1>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("pages.create"),
        class: "btn-primary"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702${_scopeId}><path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702${_scopeId}></path></svg> Add New `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "btn-icon-svg",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M10 4V16M4 10H16",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createTextVNode(" Add New ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="table-container card" data-v-d3756702><table class="data-table" data-v-d3756702><thead data-v-d3756702><tr data-v-d3756702><th class="checkbox-column" data-v-d3756702><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(Array.isArray(selectAll.value) ? ssrLooseContain(selectAll.value, null) : selectAll.value) ? " checked" : ""} data-v-d3756702></th><th class="name-column" data-v-d3756702><div class="th-content sortable" data-v-d3756702> Pages Name <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path></svg></div></th><th class="date-column" data-v-d3756702><div class="th-content sortable" data-v-d3756702> Last Edit Date <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path></svg></div></th><th class="languages-column" data-v-d3756702></th><th class="actions-column" data-v-d3756702>Actions</th></tr></thead><tbody data-v-d3756702><!--[-->`);
      ssrRenderList(paginatedPages.value, (page) => {
        _push(`<tr data-v-d3756702><td class="checkbox-column" data-v-d3756702><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(isPageSelected(page.id)) ? " checked" : ""} data-v-d3756702></td><td class="name-column" data-v-d3756702><span class="page-name" data-v-d3756702>${ssrInterpolate(page.name)}</span></td><td class="date-column" data-v-d3756702><span class="date-text" data-v-d3756702>${ssrInterpolate(page.lastEditDate)}</span></td><td class="languages-column" data-v-d3756702><div class="language-badges" data-v-d3756702>`);
        if (page.hasArabic) {
          _push(`<button class="badge badge-sa" data-v-d3756702><img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="flag-icon" data-v-d3756702> Edit </button>`);
        } else {
          _push(`<!---->`);
        }
        if (page.hasEnglish) {
          _push(`<button class="badge badge-en" data-v-d3756702><img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="flag-icon" data-v-d3756702> Edit </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="actions-column" data-v-d3756702><div class="action-buttons" data-v-d3756702><button class="btn-icon" title="Edit" data-v-d3756702><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702><path d="M14.166 2.5L17.5 5.83333L6.66667 16.6667H3.33334V13.3333L14.166 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path></svg></button><button class="btn-icon" title="Delete" data-v-d3756702><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702><path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path><path d="M6.66666 5V3.33333C6.66666 2.89131 6.84225 2.46738 7.15481 2.15482C7.46737 1.84226 7.8913 1.66667 8.33332 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5H15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path></svg></button><button class="btn-icon" title="Duplicate" data-v-d3756702><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d3756702><path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path><path d="M4.16666 12.5H3.33332C2.8913 12.5 2.46737 12.3244 2.15481 12.0118C1.84225 11.6993 1.66666 11.2754 1.66666 10.8333V3.33333C1.66666 2.89131 1.84225 2.46738 2.15481 2.15482C2.46737 1.84226 2.8913 1.66667 3.33332 1.66667H10.8333C11.2753 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d3756702></path></svg></button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="pagination-container" data-v-d3756702><p class="pagination-info" data-v-d3756702>${ssrInterpolate(paginationInfo.value)}</p><div class="pagination" data-v-d3756702><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-d3756702> Previous </button><!--[-->`);
      ssrRenderList(pageNumbers.value, (page) => {
        _push(`<button class="${ssrRenderClass([{ "active": page === currentPage.value }, "pagination-number"])}" data-v-d3756702>${ssrInterpolate(page)}</button>`);
      });
      _push(`<!--]--><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-d3756702> Next </button></div></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Index.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-d3756702"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const successMessage = computed(() => page.props.flash?.success);
    const showPasswordFields = ref(false);
    const showCurrentPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page" }, _attrs))} data-v-388636fb><div class="page-header" data-v-388636fb><h1 class="page-title" data-v-388636fb>Edit Profile</h1></div>`);
      if (successMessage.value) {
        _push(`<div class="alert alert-success" data-v-388636fb><svg class="alert-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg> ${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="profile-card card" data-v-388636fb><form class="profile-form" data-v-388636fb><div class="profile-avatar-section" data-v-388636fb><div class="profile-avatar-large" data-v-388636fb><span data-v-388636fb>${ssrInterpolate(__props.user.name?.charAt(0).toUpperCase() || "U")}</span></div><div class="profile-avatar-info" data-v-388636fb><h2 class="profile-avatar-name" data-v-388636fb>${ssrInterpolate(__props.user.name)}</h2><p class="profile-avatar-email" data-v-388636fb>${ssrInterpolate(__props.user.email)}</p></div></div><div class="form-divider" data-v-388636fb></div><div class="form-section" data-v-388636fb><h3 class="form-section-title" data-v-388636fb>Basic Information</h3><div class="form-grid" data-v-388636fb><div class="form-group" data-v-388636fb><label for="name" class="form-label" data-v-388636fb>Full Name</label><div class="input-wrapper" data-v-388636fb><svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M3.75 17.5V15.8333C3.75 14.9493 4.10119 14.1014 4.72631 13.4763C5.35143 12.8512 6.19928 12.5 7.08333 12.5H12.9167C13.8007 12.5 14.6486 12.8512 15.2737 13.4763C15.8988 14.1014 16.25 14.9493 16.25 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" class="${ssrRenderClass([{ "input-error": unref(form).errors.name }, "form-input"])}" placeholder="Enter your full name" data-v-388636fb></div>`);
      if (unref(form).errors.name) {
        _push(`<p class="error-text" data-v-388636fb>${ssrInterpolate(unref(form).errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-388636fb><label for="email" class="form-label" data-v-388636fb>Email Address</label><div class="input-wrapper" data-v-388636fb><svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M3.33334 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33334C2.41668 16.6667 1.66668 15.9167 1.66668 15V5.00001C1.66668 4.08334 2.41668 3.33334 3.33334 3.33334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M18.3333 5L10 10.8333L1.66668 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([{ "input-error": unref(form).errors.email }, "form-input"])}" placeholder="Enter your email address" data-v-388636fb></div>`);
      if (unref(form).errors.email) {
        _push(`<p class="error-text" data-v-388636fb>${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="form-divider" data-v-388636fb></div><div class="form-section" data-v-388636fb><div class="form-section-header" data-v-388636fb><h3 class="form-section-title" data-v-388636fb>Password</h3><button type="button" class="toggle-password-btn" data-v-388636fb>`);
      if (!showPasswordFields.value) {
        _push(`<svg class="toggle-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
      } else {
        _push(`<svg class="toggle-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M4 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
      }
      _push(` ${ssrInterpolate(showPasswordFields.value ? "Cancel" : "Change Password")}</button></div>`);
      if (showPasswordFields.value) {
        _push(`<div class="password-fields" data-v-388636fb><div class="form-group" data-v-388636fb><label for="current_password" class="form-label" data-v-388636fb>Current Password</label><div class="input-wrapper" data-v-388636fb><svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></rect><path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg><input id="current_password"${ssrRenderDynamicModel(showCurrentPassword.value ? "text" : "password", unref(form).current_password, null)}${ssrRenderAttr("type", showCurrentPassword.value ? "text" : "password")} class="${ssrRenderClass([{ "input-error": unref(form).errors.current_password }, "form-input"])}" placeholder="Enter your current password" data-v-388636fb><button type="button" class="password-toggle" data-v-388636fb>`);
        if (!showCurrentPassword.value) {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        }
        _push(`</button></div>`);
        if (unref(form).errors.current_password) {
          _push(`<p class="error-text" data-v-388636fb>${ssrInterpolate(unref(form).errors.current_password)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="form-grid" data-v-388636fb><div class="form-group" data-v-388636fb><label for="password" class="form-label" data-v-388636fb>New Password</label><div class="input-wrapper" data-v-388636fb><svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></rect><path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg><input id="password"${ssrRenderDynamicModel(showNewPassword.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", showNewPassword.value ? "text" : "password")} class="${ssrRenderClass([{ "input-error": unref(form).errors.password }, "form-input"])}" placeholder="Enter new password" data-v-388636fb><button type="button" class="password-toggle" data-v-388636fb>`);
        if (!showNewPassword.value) {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        }
        _push(`</button></div>`);
        if (unref(form).errors.password) {
          _push(`<p class="error-text" data-v-388636fb>${ssrInterpolate(unref(form).errors.password)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="form-group" data-v-388636fb><label for="password_confirmation" class="form-label" data-v-388636fb>Confirm New Password</label><div class="input-wrapper" data-v-388636fb><svg class="input-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><rect x="3.33334" y="9.16667" width="13.3333" height="9.16667" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></rect><path d="M5.83334 9.16667V5.83334C5.83334 3.53216 7.69883 1.66667 10 1.66667C12.3012 1.66667 14.1667 3.53216 14.1667 5.83334V9.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg><input id="password_confirmation"${ssrRenderDynamicModel(showConfirmPassword.value ? "text" : "password", unref(form).password_confirmation, null)}${ssrRenderAttr("type", showConfirmPassword.value ? "text" : "password")} class="${ssrRenderClass([{ "input-error": unref(form).errors.password_confirmation }, "form-input"])}" placeholder="Confirm new password" data-v-388636fb><button type="button" class="password-toggle" data-v-388636fb>`);
        if (!showConfirmPassword.value) {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><path d="M11.7667 11.7667C11.5378 12.0123 11.262 12.2093 10.9553 12.3459C10.6486 12.4826 10.3176 12.556 9.98175 12.562C9.64591 12.5679 9.31244 12.5062 9.00099 12.3806C8.68954 12.255 8.40682 12.0679 8.16946 11.8306C7.93211 11.5932 7.74503 11.3105 7.61944 10.999C7.49384 10.6876 7.43215 10.3541 7.43809 10.0183C7.44403 9.68241 7.51742 9.35139 7.65408 9.04469C7.79074 8.738 7.98768 8.4622 8.23334 8.23334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M8.41666 3.15C8.93666 3.04916 9.46666 2.99916 10 3C15.8333 3 18.3333 10 18.3333 10C17.9286 10.9571 17.4238 11.8667 16.8275 12.7133" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M5.35 5.35C3.67833 6.60833 2.35417 8.18333 1.66667 10C1.66667 10 4.16667 17 10 17C11.6817 17.0067 13.3267 16.5167 14.65 15.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path><path d="M1.66666 1.66667L18.3333 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-388636fb></path></svg>`);
        }
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-divider" data-v-388636fb></div><div class="form-actions" data-v-388636fb><button type="submit" class="btn-primary btn-lg"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-388636fb>`);
      if (unref(form).processing) {
        _push(`<svg class="btn-spinner" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-388636fb><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="50.26" stroke-dashoffset="25.13" data-v-388636fb></circle></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-388636fb"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "WebsiteLayout",
  __ssrInlineRender: true,
  props: {
    lang: {
      type: String,
      default: "ar"
    },
    page: {
      type: Object,
      default: () => ({
        title: "Beyond",
        description: ""
      })
    }
  },
  setup(__props) {
    const props = __props;
    const isRtl = computed(() => props.lang === "ar");
    const direction = computed(() => isRtl.value ? "rtl" : "ltr");
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };
    onMounted(async () => {
      document.documentElement.setAttribute("dir", direction.value);
      document.documentElement.setAttribute("lang", props.lang);
      await loadScript("/assets/js/bootstrap.bundle.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js");
      await loadScript("/assets/js/aos.js");
      await loadScript("/assets/js/main.js");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.page.title)}</title><meta name="description"${ssrRenderAttr("content", __props.page.description)}${_scopeId}><meta charset="UTF-8"${_scopeId}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId}><link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"${_scopeId}><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"${_scopeId}><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"${_scopeId}><link rel="stylesheet" href="/assets/css/bootstrap.min.css"${_scopeId}><link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/all.min.css"${_scopeId}><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/aos.css"${_scopeId}><link rel="stylesheet" href="/assets/css/default.css"${_scopeId}><link rel="stylesheet" href="/assets/css/style.css"${_scopeId}><link rel="stylesheet" href="/assets/css/responsive.css"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.page.title), 1),
              createVNode("meta", {
                name: "description",
                content: __props.page.description
              }, null, 8, ["content"]),
              createVNode("meta", { charset: "UTF-8" }),
              createVNode("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
              }),
              createVNode("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/assets/favicon/apple-touch-icon.png"
              }),
              createVNode("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/assets/favicon/favicon-32x32.png"
              }),
              createVNode("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/assets/favicon/favicon-16x16.png"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/bootstrap.min.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/fontawesome-pro/fontawesome.min.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/all.min.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/aos.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/default.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/style.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/responsive.css"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-area overflow-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/WebsiteLayout.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "HeaderSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const flagAr = computed(() => props.content.flag_ar || "/assets/img/flag-1.png");
    const flagEn = computed(() => props.content.flag_en || "/assets/img/flag-2.png");
    const checkRadio = computed(() => props.content.check_icon || "/assets/img/check-radio.svg");
    const getLabel = (item) => {
      return props.lang === "ar" ? item.label_ar : item.label_en;
    };
    const contactButtonText = computed(() => {
      return props.lang === "ar" ? props.content.contact_button_text_ar : props.content.contact_button_text_en;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"><div class="offcanvas-header"><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><div class="offcanvas-menu accordion"><ul><!--[-->`);
      ssrRenderList(__props.content.menu_items, (item, index) => {
        _push(`<!--[-->`);
        if (!item.children || item.children.length === 0) {
          _push(`<li><a${ssrRenderAttr("href", item.url)}>${ssrInterpolate(getLabel(item))}</a></li>`);
        } else {
          _push(`<li><a href="#" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse-mobile-${index}`)} aria-expanded="false"${ssrRenderAttr("aria-controls", `collapse-mobile-${index}`)}>${ssrInterpolate(getLabel(item))}</a><div${ssrRenderAttr("id", `collapse-mobile-${index}`)} class="accordion-collapse collapse" data-bs-parent="#accordionExample"><ul class="dropdown-menu-list"><!--[-->`);
          ssrRenderList(item.children, (child, childIndex) => {
            _push(`<li><a class="${ssrRenderClass([{ "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }, "dropdown-item"])}"${ssrRenderAttr("href", child.url)}>${ssrInterpolate(getLabel(child))} <span><i class="far fa-chevron-left"></i></span></a></li>`);
          });
          _push(`<!--]--></ul></div></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div><button class="header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border" type="button">${ssrInterpolate(contactButtonText.value)} <span><i class="far fa-angle-left"></i></span></button></div></div><header class="header-area" data-aos="fade-in"><div class="container"><div class="header-inner-block d-flex align-items-center justify-content-between"><div class="header-left-block d-flex align-items-center"><div class="header-logo"><a href="#"><img${ssrRenderAttr("src", __props.content.logo || "/assets/img/logo.png")} alt="Logo"></a></div><div class="main-menu d-none d-lg-block"><nav><ul class="d-flex align-items-center"><!--[-->`);
      ssrRenderList(__props.content.menu_items, (item, index) => {
        _push(`<!--[-->`);
        if (!item.children || item.children.length === 0) {
          _push(`<li><a${ssrRenderAttr("href", item.url)}>${ssrInterpolate(getLabel(item))}</a></li>`);
        } else {
          _push(`<li><a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><span><i class="far fa-chevron-down"></i></span> ${ssrInterpolate(getLabel(item))}</a><ul class="dropdown-menu"><!--[-->`);
          ssrRenderList(item.children, (child, childIndex) => {
            _push(`<li><a class="${ssrRenderClass([{ "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }, "dropdown-item"])}"${ssrRenderAttr("href", child.url)}>${ssrInterpolate(getLabel(child))} <span><i class="far fa-chevron-left"></i></span></a></li>`);
          });
          _push(`<!--]--></ul></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></nav></div></div><div class="header-btns d-flex align-items-center gap-2"><button class="header-contact-btn d-none d-lg-inline-flex align-items-center" type="button">${ssrInterpolate(contactButtonText.value)} <span><i class="far fa-angle-left"></i></span></button><div class="language-select"><div class="selectorwith_flag"><div class="select-box"><div class="select-box__current" tabindex="1"><div class="select-box__value"><input class="select-box__input" type="radio" id="lang-ar" value="ar" name="language"${ssrIncludeBooleanAttr(__props.lang === "ar") ? " checked" : ""}><p class="select-box__input-text"><img${ssrRenderAttr("src", flagAr.value)} alt=""> عربي </p></div><div class="select-box__value"><input class="select-box__input" type="radio" id="lang-en" value="en" name="language"${ssrIncludeBooleanAttr(__props.lang === "en") ? " checked" : ""}><p class="select-box__input-text"><img${ssrRenderAttr("src", flagEn.value)} alt="">English </p></div></div><ul class="select-box__list"><li class="${ssrRenderClass({ active: __props.lang === "ar" })}"><label class="select-box__option" for="lang-ar" aria-hidden="true"><img${ssrRenderAttr("src", flagAr.value)} alt=""> عربي </label><span class="check-image"><img${ssrRenderAttr("src", checkRadio.value)} alt="check-radio"></span></li><li class="${ssrRenderClass({ active: __props.lang === "en" })}"><label class="select-box__option" for="lang-en" aria-hidden="true"><img${ssrRenderAttr("src", flagEn.value)} alt="">English </label><span class="check-image"><img${ssrRenderAttr("src", checkRadio.value)} alt="check-radio"></span></li></ul></div></div></div><a class="open-menu d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="far fa-bars"></i></a></div></div></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeaderSection.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-area position-relative",
        style: { backgroundImage: `url('${__props.content.background_image}')` }
      }, _attrs))}><div class="container"><div class="hero-inner-block"><div class="hero-title" data-aos="fade-up"><h5>${ssrInterpolate(subtitle.value)}</h5><h1>${title.value ?? ""}</h1></div><div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(__props.content.slides, (slide, index) => {
        _push(`<div class="swiper-slide"><div class="hero-slide-card"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.alt || "Thumb")}></div></div>`);
      });
      _push(`<!--]--></div></div><div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500"><p>${description.value ?? ""}</p></div><div class="hero-btn d-flex justify-content-center" data-aos="fade-up"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="far fa-angle-left"></i></span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "PartnersSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "brand-area" }, _attrs))}><div class="container"><div class="swiper brand-logos-slide"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(__props.content.logos, (logo, index) => {
        _push(`<div class="logo-items swiper-slide" data-aos="zoom-in"><a${ssrRenderAttr("href", logo.url || "#")}><img${ssrRenderAttr("src", logo.image)}${ssrRenderAttr("alt", logo.alt || "Logo")}></a></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/PartnersSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "ConceptSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getTitle = (block) => props.lang === "ar" ? block.title_ar : block.title_en;
    const getParagraphs = (block) => props.lang === "ar" ? block.paragraphs_ar : block.paragraphs_en;
    const getCounterLabel = (counter) => props.lang === "ar" ? counter.label_ar : counter.label_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "concept-area" }, _attrs))}><div class="container"><div class="concept-inner-block position-relative z-1 overflow-hidden"><!--[-->`);
      ssrRenderList(__props.content.blocks, (block, blockIndex) => {
        _push(`<div class="${ssrRenderClass([{ "second-concept-wrapper m-0": blockIndex > 0 }, "concept-wrapper position-relative z-1 overflow-hidden"])}"><div class="concept-wrapper-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="row align-items-center"><div class="${ssrRenderClass([{ "order-lg-2": !block.image_on_left }, "col-lg-6"])}" data-aos="zoom-in"><div class="${ssrRenderClass([{ "me-0": block.image_on_left }, "swiper concept-thumbnails"])}"><div class="swiper-wrapper"><!--[-->`);
        ssrRenderList(block.slides, (slide, slideIndex) => {
          _push(`<div class="${ssrRenderClass([slide.radius_class, "concept-single-thumb swiper-slide"])}"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.alt || "Thumb")}></div>`);
        });
        _push(`<!--]--></div></div></div><div class="${ssrRenderClass([{ "order-lg-1": !block.image_on_left }, "col-lg-6"])}" data-aos="fade-right"><div class="concept-content"><h3>${ssrInterpolate(getTitle(block))}</h3><!--[-->`);
        ssrRenderList(getParagraphs(block), (paragraph, pIndex) => {
          _push(`<p>${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--><div class="counter-up-area d-flex align-items-center justify-content-center position-relative z-1"><!--[-->`);
      ssrRenderList(__props.content.counters, (counter, counterIndex) => {
        _push(`<div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="${ssrRenderStyle({ backgroundImage: `url('${__props.content.counter_bg_image}')` })}" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", (counterIndex + 1) * 100)}><h5>${ssrInterpolate(counter.value)}</h5><p>${ssrInterpolate(getCounterLabel(counter))}</p></div>`);
      });
      _push(`<!--]--></div><div class="concept-shape position-absolute zn-1 w-100" data-aos="fade-up"><img${ssrRenderAttr("src", __props.content.bottom_shape_image)} alt="Shape"></div></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ConceptSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (service) => props.lang === "ar" ? service.title_ar : service.title_en;
    const getDescription = (service) => props.lang === "ar" ? service.description_ar : service.description_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-area position-relative overflow-hidden pb-80 z-1" }, _attrs))}><div class="container"><div class="service-inner-block"><div class="common-title text-center" data-aos="fade-up"><h3>${ssrInterpolate(sectionTitle.value)}</h3></div><div class="row"><!--[-->`);
      ssrRenderList(__props.content.services, (service, index) => {
        _push(`<div class="col-md-6" data-aos="fade-up"><div class="service-single-card d-flex align-items-center"><div class="service-card-thumb w-100"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", service.image)} alt="Thumb"></div><div class="service-card-content"><h4>${ssrInterpolate(getTitle(service))}</h4><p>${ssrInterpolate(getDescription(service))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ServicesSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "CTASection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const buttonText = computed(() => props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en);
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const getCardTitle = (card) => props.lang === "ar" ? card.title_ar : card.title_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-area overflow-hidden position-relative z-1 pt-80 pb-80" }, _attrs))}><div class="container"><div class="cta-inner-block"><div class="row align-items-center"><div class="col-xl-5" data-aos="fade-right"><div class="cta-right-block"><div class="service-card-content cta-content text-end"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="cta-btn">${ssrInterpolate(buttonText.value)}</a><h4>${ssrInterpolate(title.value)}</h4><p>${ssrInterpolate(description.value)}</p></div></div></div><div class="col-xl-7"><div class="cta-left-block"><div class="row"><!--[-->`);
      ssrRenderList(__props.content.contact_cards, (card, index) => {
        _push(`<div class="col-sm-6" data-aos="zoom-in"><div class="cta-card d-flex align-items-center flex-column"><span class="d-flex align-items-center justify-content-center"><img${ssrRenderAttr("src", card.icon)} alt="Icon"></span><h5>${ssrInterpolate(getCardTitle(card))}</h5><!--[-->`);
        ssrRenderList(card.links, (link, linkIndex) => {
          _push(`<a${ssrRenderAttr("href", link.url)}>${ssrInterpolate(link.text)}</a>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CTASection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "WorkSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (project) => props.lang === "ar" ? project.title_ar : project.title_en;
    const getDescription = (project) => props.lang === "ar" ? project.description_ar : project.description_en;
    const getLearnMoreText = (project) => props.lang === "ar" ? project.learn_more_text_ar : project.learn_more_text_en;
    const getVisitText = (project) => props.lang === "ar" ? project.visit_text_ar : project.visit_text_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-area position-relative z-1 overflow-hidden" }, _attrs))}><div class="work-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="work-second-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="container"><div class="work-inner-block"><div class="common-title text-center" data-aos="zoom-in"><h3>${ssrInterpolate(sectionTitle.value)}</h3></div><div class="outer-work-swiper swiper"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList([__props.content.projects, __props.content.projects.slice().reverse(), __props.content.projects], (slideGroup, groupIndex) => {
        _push(`<div class="swiper-slide" data-aos="fade-right"${ssrRenderAttr("data-aos-delay", 300 - groupIndex * 100)}><div class="work-wrapper"><div class="work-single-card position-relative z-1"><div class="swiper work-single-wrap"><div class="swiper-wrapper"><!--[-->`);
        ssrRenderList(slideGroup, (project, projectIndex) => {
          _push(`<div class="swiper-slide"><div class="work-slide-single-item" data-aos="fade-right"><div class="work-card-wrap d-flex align-items-center justify-content-between"><div class="work-card-items"><div class="contact-card-content work-card-content"><h4>${ssrInterpolate(getTitle(project))}</h4><p>${ssrInterpolate(getDescription(project))}</p></div><div class="${ssrRenderClass([project.btn_color_class, "work-card-btns d-flex align-items-center"])}"><a${ssrRenderAttr("href", project.learn_more_url || "#")}>${ssrInterpolate(getLearnMoreText(project))} <span><i class="far fa-angle-left"></i></span></a><a${ssrRenderAttr("href", project.visit_url || "#")} class="secondary-btn">${ssrInterpolate(getVisitText(project))} <span><i class="fal fa-long-arrow-left"></i></span></a></div></div><div class="work-card-thumb"><img${ssrRenderAttr("src", project.image)} alt="Thumb"></div></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="work-card-shape position-absolute z-n1"><img${ssrRenderAttr("src", __props.content.work_shape_image)} alt="Shape"></div><div class="swiper-pagination"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/WorkSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "TeamSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (member) => props.lang === "ar" ? member.title_ar : member.title_en;
    const getDescription = (member) => props.lang === "ar" ? member.description_ar : member.description_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-area" }, _attrs))}><div class="container"><div class="team-inner-block"><div class="common-title text-center" data-aos="fade-up"><h3>${ssrInterpolate(sectionTitle.value)}</h3></div><div class="swiper team-card-wrap"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(__props.content.members, (member, index) => {
        _push(`<div class="swiper-slide team-card position-relative z-1" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", (index + 2) * 100)}><div class="team-card-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="team-thumb"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", member.image)} alt="Thumb"></div><div class="team-card-content"><h4>${ssrInterpolate(getTitle(member))}</h4><p>${ssrInterpolate(getDescription(member))}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="team-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/TeamSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const buttonText = computed(() => props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en);
    const getCardTitle = (card) => props.lang === "ar" ? card.title_ar : card.title_en;
    const getCardDescription = (card) => props.lang === "ar" ? card.description_ar : card.description_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "contact-area overflow-hidden",
        style: { backgroundImage: `url('${__props.content.background_image}')` }
      }, _attrs))}><div class="container"><div class="contact-inner-block p-40 bg-white"><div class="row"><div class="col-xl-6" data-aos="fade-right"><div class="contact-right-block"><!--[-->`);
      ssrRenderList(__props.content.cards, (card, index) => {
        _push(`<div class="${ssrRenderClass([{ "contact-middle-card": index === 1 }, "contact-card d-flex align-items-center"])}"><div class="contact-card-icon"><img${ssrRenderAttr("src", card.icon)} alt="Icon"></div><div class="contact-card-content"><h4>${ssrInterpolate(getCardTitle(card))}</h4><p>${ssrInterpolate(getCardDescription(card))}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-xl-6" data-aos="zoom-in"><div class="contact-left d-flex align-items-center justify-content-start flex-column"><div class="contact-logo"><a href="#"><img${ssrRenderAttr("src", __props.content.contact_logo)} alt="Logo"></a></div><div class="contact-btn"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="far fa-angle-left"></i></span></a></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "GallerySection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const buttonText = computed(() => props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery-area overflow-hidden" }, _attrs))}><div class="container"><div class="gallery-inner-block position-relative z-1"><div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="common-title text-center" data-aos="fade-up"><h3>${ssrInterpolate(sectionTitle.value)}</h3><p>${ssrInterpolate(subtitle.value)}</p></div><div class="gallery-wrapper"><div class="row"><!--[-->`);
      ssrRenderList(__props.content.images, (item, index) => {
        _push(`<div class="col-md-6" data-aos="zoom-in"><div class="gallery-thumb position-relative"><img${ssrRenderAttr("src", item.image)} alt="Thumb"><div class="gallery-thumb-text position-absolute"><h3>${ssrInterpolate(item.title)}</h3></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="gallery-button d-flex justify-content-center" data-aos="fade-up"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="far fa-angle-left"></i></span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GallerySection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "FAQSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(1);
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const getQuestion = (faq) => props.lang === "ar" ? faq.question_ar : faq.question_en;
    const getAnswer = (faq) => props.lang === "ar" ? faq.answer_ar : faq.answer_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq-area position-relative z-1" }, _attrs))}><div class="faq-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="faq-sec-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div><div class="container"><div class="faq-inner-block"><div class="common-title text-center mb-40" data-aos="fade-up"><h3>${ssrInterpolate(sectionTitle.value)}</h3><p>${ssrInterpolate(subtitle.value)}</p></div><div class="accordion-wrapper"><div class="accordion faq-accordion" id="accordionExample"><!--[-->`);
      ssrRenderList(__props.content.faqs, (faq, index) => {
        _push(`<div class="accordion-item" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", (index + 1) * 100)}><h2 class="accordion-header"><button class="${ssrRenderClass([{ "collapsed": activeIndex.value !== index }, "accordion-button"])}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse-faq-${index}`)}${ssrRenderAttr("aria-expanded", activeIndex.value === index)}${ssrRenderAttr("aria-controls", `collapse-faq-${index}`)}>${ssrInterpolate(getQuestion(faq))}</button></h2><div${ssrRenderAttr("id", `collapse-faq-${index}`)} class="${ssrRenderClass([{ "show": activeIndex.value === index }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body">${ssrInterpolate(getAnswer(faq))}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FAQSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "InquirySection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const primaryButtonText = computed(() => props.lang === "ar" ? props.content.primary_button_text_ar : props.content.primary_button_text_en);
    const secondaryButtonText = computed(() => props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inquiry-area" }, _attrs))}><div class="container"><div class="inquiry-inner-block overflow-hidden position-relative z-1"><div class="inquiry-wrapper"><div class="row align-items-center"><div class="col-lg-7" data-aos="fade-right"><div class="inquiry-right-block"><div class="inquiry-content"><h4>${ssrInterpolate(title.value)}</h4><p>${ssrInterpolate(description.value)}</p></div><div class="inquiry-btns d-flex align-items-center"><a${ssrRenderAttr("href", __props.content.primary_button_url || "#")} class="secondary-btn">${ssrInterpolate(primaryButtonText.value)} <span><i class="fal fa-angle-left"></i></span></a><a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")}>${ssrInterpolate(secondaryButtonText.value)} <span><i class="fab fa-whatsapp"></i></span></a></div></div></div><div class="col-lg-5" data-aos="zoom-in"><div class="inquiry-image"><img${ssrRenderAttr("src", __props.content.image)} alt="Image"></div></div></div></div><div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/InquirySection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FooterSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const tagline = computed(() => props.lang === "ar" ? props.content.tagline_ar : props.content.tagline_en);
    const getMenuTitle = (col) => props.lang === "ar" ? col.title_ar : col.title_en;
    const getLinkLabel = (link) => props.lang === "ar" ? link.label_ar : link.label_en;
    const contactTitle = computed(() => props.lang === "ar" ? props.content.contact_info.title_ar : props.content.contact_info.title_en);
    const socialTitle = computed(() => props.lang === "ar" ? props.content.social.title_ar : props.content.social.title_en);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-area" }, _attrs))}><div class="container"><div class="footer-inner-block position-relative z-1 overflow-hidden"><div class="footer-top-wrapper"><div class="row"><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-identity"><div class="footer-logo"><a href="#"><img${ssrRenderAttr("src", __props.content.logo)} alt="Logo"></a></div><div class="footer-content"><p>${ssrInterpolate(tagline.value)}</p></div></div></div><!--[-->`);
      ssrRenderList(__props.content.menu_columns, (column, index) => {
        _push(`<div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-menu-list"><div class="footer-inner-title"><h4>${ssrInterpolate(getMenuTitle(column))}</h4></div><ul><!--[-->`);
        ssrRenderList(column.links, (link, linkIndex) => {
          _push(`<li><a${ssrRenderAttr("href", link.url)}>${ssrInterpolate(getLinkLabel(link))}</a></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-menu-list"><div class="footer-inner-title"><h4>${ssrInterpolate(contactTitle.value)}</h4></div><ul><!--[-->`);
      ssrRenderList(__props.content.contact_info.items, (item, itemIndex) => {
        _push(`<li><a${ssrRenderAttr("href", item.url)} class="d-flex align-items-center"><span class="d-flex align-items-center justify-content-between"><img${ssrRenderAttr("src", item.icon)} alt="Icon"></span> ${ssrInterpolate(item.text)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-social-block"><div class="footer-inner-title"><h4>${ssrInterpolate(socialTitle.value)}</h4></div><div class="social-icons d-flex align-items-center"><!--[-->`);
      ssrRenderList(__props.content.social.links, (social, socialIndex) => {
        _push(`<a${ssrRenderAttr("href", social.url)} class="d-flex align-items-center justify-content-center"><img${ssrRenderAttr("src", social.icon)} alt="Icon"></a>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="copyright-text text-center"><p>${ssrInterpolate(__props.content.copyright_text)}</p></div><div class="footer-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", __props.content.shape_image)} alt="Shape"></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FooterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Object,
      required: true
    },
    sections: {
      type: Array,
      default: () => []
    },
    lang: {
      type: String,
      default: "ar"
    }
  },
  setup(__props) {
    const props = __props;
    const sectionComponents = {
      "header": _sfc_main$d,
      "hero": _sfc_main$c,
      "partners": _sfc_main$b,
      "concept": _sfc_main$a,
      "services": _sfc_main$9,
      "cta": _sfc_main$8,
      "work": _sfc_main$7,
      "projects": _sfc_main$7,
      // Alias for seeder key
      "team": _sfc_main$6,
      "contact": _sfc_main$5,
      "gallery": _sfc_main$4,
      "faq": _sfc_main$3,
      "inquiry": _sfc_main$2,
      "footer": _sfc_main$1
    };
    const getComponent = (sectionKey) => {
      return sectionComponents[sectionKey] || null;
    };
    const headerSection = computed(() => props.sections.find((s2) => s2.section_type?.key === "header"));
    const footerSection = computed(() => props.sections.find((s2) => s2.section_type?.key === "footer"));
    const mainSections = computed(() => props.sections.filter(
      (s2) => s2.section_type?.key !== "header" && s2.section_type?.key !== "footer"
    ));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$e, mergeProps({
        lang: __props.lang,
        page: __props.page
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (headerSection.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getComponent("header")), {
                content: headerSection.value.content,
                lang: __props.lang
              }, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<main${_scopeId}><!--[-->`);
            ssrRenderList(mainSections.value, (section) => {
              _push2(`<!--[-->`);
              if (getComponent(section.section_type?.key)) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getComponent(section.section_type?.key)), {
                  content: section.content,
                  lang: __props.lang
                }, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></main>`);
            if (footerSection.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getComponent("footer")), {
                content: footerSection.value.content,
                lang: __props.lang
              }, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              headerSection.value ? (openBlock(), createBlock(resolveDynamicComponent(getComponent("header")), {
                key: 0,
                content: headerSection.value.content,
                lang: __props.lang
              }, null, 8, ["content", "lang"])) : createCommentVNode("", true),
              createVNode("main", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(mainSections.value, (section) => {
                  return openBlock(), createBlock(Fragment, {
                    key: section.id
                  }, [
                    getComponent(section.section_type?.key) ? (openBlock(), createBlock(resolveDynamicComponent(getComponent(section.section_type?.key)), {
                      key: 0,
                      content: section.content,
                      lang: __props.lang
                    }, null, 8, ["content", "lang"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              footerSection.value ? (openBlock(), createBlock(resolveDynamicComponent(getComponent("footer")), {
                key: 1,
                content: footerSection.value.content,
                lang: __props.lang
              }, null, 8, ["content", "lang"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Website/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var o2 = arguments[e2];
      for (var n2 in o2) ({}).hasOwnProperty.call(o2, n2) && (t3[n2] = o2[n2]);
    }
    return t3;
  }, t.apply(null, arguments);
}
const e = String.prototype.replace, o = /%20/g, n = { RFC1738: function(t3) {
  return e.call(t3, o, "+");
}, RFC3986: function(t3) {
  return String(t3);
} };
var r = "RFC3986";
const i = Object.prototype.hasOwnProperty, s = Array.isArray, u = (function() {
  const t3 = [];
  for (let e2 = 0; e2 < 256; ++e2) t3.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t3;
})(), l = function t2(e2, o2, n2) {
  if (!o2) return e2;
  if ("object" != typeof o2) {
    if (s(e2)) e2.push(o2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, o2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, o2)) && (e2[o2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(o2);
  let r2 = e2;
  return s(e2) && !s(o2) && (r2 = (function(t3, e3) {
    const o3 = e3 && e3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (let e4 = 0; e4 < t3.length; ++e4) void 0 !== t3[e4] && (o3[e4] = t3[e4]);
    return o3;
  })(e2, n2)), s(e2) && s(o2) ? (o2.forEach(function(o3, r3) {
    if (i.call(e2, r3)) {
      const i2 = e2[r3];
      i2 && "object" == typeof i2 && o3 && "object" == typeof o3 ? e2[r3] = t2(i2, o3, n2) : e2.push(o3);
    } else e2[r3] = o3;
  }), e2) : Object.keys(o2).reduce(function(e3, r3) {
    const s2 = o2[r3];
    return e3[r3] = i.call(e3, r3) ? t2(e3[r3], s2, n2) : s2, e3;
  }, r2);
}, c = 1024, a = function(t3, e2) {
  return [].concat(t3, e2);
}, f = function(t3, e2) {
  if (s(t3)) {
    const o2 = [];
    for (let n2 = 0; n2 < t3.length; n2 += 1) o2.push(e2(t3[n2]));
    return o2;
  }
  return e2(t3);
}, p = Object.prototype.hasOwnProperty, y = { brackets: function(t3) {
  return t3 + "[]";
}, comma: "comma", indices: function(t3, e2) {
  return t3 + "[" + e2 + "]";
}, repeat: function(t3) {
  return t3;
} }, d = Array.isArray, h = Array.prototype.push, b = function(t3, e2) {
  h.apply(t3, d(e2) ? e2 : [e2]);
}, m = Date.prototype.toISOString, g = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: function(t3, e2, o2, n2, r2) {
  if (0 === t3.length) return t3;
  let i2 = t3;
  if ("symbol" == typeof t3 ? i2 = Symbol.prototype.toString.call(t3) : "string" != typeof t3 && (i2 = String(t3)), "iso-8859-1" === o2) return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t4) {
    return "%26%23" + parseInt(t4.slice(2), 16) + "%3B";
  });
  let s2 = "";
  for (let t4 = 0; t4 < i2.length; t4 += c) {
    const e3 = i2.length >= c ? i2.slice(t4, t4 + c) : i2, o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      let n3 = e3.charCodeAt(t5);
      45 === n3 || 46 === n3 || 95 === n3 || 126 === n3 || n3 >= 48 && n3 <= 57 || n3 >= 65 && n3 <= 90 || n3 >= 97 && n3 <= 122 || "RFC1738" === r2 && (40 === n3 || 41 === n3) ? o3[o3.length] = e3.charAt(t5) : n3 < 128 ? o3[o3.length] = u[n3] : n3 < 2048 ? o3[o3.length] = u[192 | n3 >> 6] + u[128 | 63 & n3] : n3 < 55296 || n3 >= 57344 ? o3[o3.length] = u[224 | n3 >> 12] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3] : (t5 += 1, n3 = 65536 + ((1023 & n3) << 10 | 1023 & e3.charCodeAt(t5)), o3[o3.length] = u[240 | n3 >> 18] + u[128 | n3 >> 12 & 63] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3]);
    }
    s2 += o3.join("");
  }
  return s2;
}, encodeValuesOnly: false, format: r, formatter: n[r], indices: false, serializeDate: function(t3) {
  return m.call(t3);
}, skipNulls: false, strictNullHandling: false }, w = {}, v = function(t3, e2, o2, n2, r2, i2, s2, u2, l2, c2, a2, p2, y2, h2, m2, j2, $2, E2) {
  let O2 = t3, T2 = E2, R2 = 0, S2 = false;
  for (; void 0 !== (T2 = T2.get(w)) && !S2; ) {
    const e3 = T2.get(t3);
    if (R2 += 1, void 0 !== e3) {
      if (e3 === R2) throw new RangeError("Cyclic object value");
      S2 = true;
    }
    void 0 === T2.get(w) && (R2 = 0);
  }
  if ("function" == typeof c2 ? O2 = c2(e2, O2) : O2 instanceof Date ? O2 = y2(O2) : "comma" === o2 && d(O2) && (O2 = f(O2, function(t4) {
    return t4 instanceof Date ? y2(t4) : t4;
  })), null === O2) {
    if (i2) return l2 && !j2 ? l2(e2, g.encoder, $2, "key", h2) : e2;
    O2 = "";
  }
  if ("string" == typeof (I2 = O2) || "number" == typeof I2 || "boolean" == typeof I2 || "symbol" == typeof I2 || "bigint" == typeof I2 || (function(t4) {
    return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
  })(O2)) return l2 ? [m2(j2 ? e2 : l2(e2, g.encoder, $2, "key", h2)) + "=" + m2(l2(O2, g.encoder, $2, "value", h2))] : [m2(e2) + "=" + m2(String(O2))];
  var I2;
  const A2 = [];
  if (void 0 === O2) return A2;
  let D2;
  if ("comma" === o2 && d(O2)) j2 && l2 && (O2 = f(O2, l2)), D2 = [{ value: O2.length > 0 ? O2.join(",") || null : void 0 }];
  else if (d(c2)) D2 = c2;
  else {
    const t4 = Object.keys(O2);
    D2 = a2 ? t4.sort(a2) : t4;
  }
  const _2 = u2 ? e2.replace(/\./g, "%2E") : e2, k = n2 && d(O2) && 1 === O2.length ? _2 + "[]" : _2;
  if (r2 && d(O2) && 0 === O2.length) return k + "[]";
  for (let e3 = 0; e3 < D2.length; ++e3) {
    const f2 = D2[e3], g2 = "object" == typeof f2 && void 0 !== f2.value ? f2.value : O2[f2];
    if (s2 && null === g2) continue;
    const T3 = p2 && u2 ? f2.replace(/\./g, "%2E") : f2, S3 = d(O2) ? "function" == typeof o2 ? o2(k, T3) : k : k + (p2 ? "." + T3 : "[" + T3 + "]");
    E2.set(t3, R2);
    const I3 = /* @__PURE__ */ new WeakMap();
    I3.set(w, E2), b(A2, v(g2, S3, o2, n2, r2, i2, s2, u2, "comma" === o2 && j2 && d(O2) ? null : l2, c2, a2, p2, y2, h2, m2, j2, $2, I3));
  }
  return A2;
}, j = Object.prototype.hasOwnProperty, $ = Array.isArray, E = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: function(t3, e2, o2) {
  const n2 = t3.replace(/\+/g, " ");
  if ("iso-8859-1" === o2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t4) {
    return n2;
  }
}, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t3) {
  return t3.replace(/&#(\d+);/g, function(t4, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, T = function(t3, e2) {
  return t3 && "string" == typeof t3 && e2.comma && t3.indexOf(",") > -1 ? t3.split(",") : t3;
}, R = function(t3, e2, o2, n2) {
  if (!t3) return;
  const r2 = o2.allowDots ? t3.replace(/\.([^.[]+)/g, "[$1]") : t3, i2 = /(\[[^[\]]*])/g;
  let s2 = o2.depth > 0 && /(\[[^[\]]*])/.exec(r2);
  const u2 = s2 ? r2.slice(0, s2.index) : r2, l2 = [];
  if (u2) {
    if (!o2.plainObjects && j.call(Object.prototype, u2) && !o2.allowPrototypes) return;
    l2.push(u2);
  }
  let c2 = 0;
  for (; o2.depth > 0 && null !== (s2 = i2.exec(r2)) && c2 < o2.depth; ) {
    if (c2 += 1, !o2.plainObjects && j.call(Object.prototype, s2[1].slice(1, -1)) && !o2.allowPrototypes) return;
    l2.push(s2[1]);
  }
  return s2 && l2.push("[" + r2.slice(s2.index) + "]"), (function(t4, e3, o3, n3) {
    let r3 = n3 ? e3 : T(e3, o3);
    for (let e4 = t4.length - 1; e4 >= 0; --e4) {
      let n4;
      const i3 = t4[e4];
      if ("[]" === i3 && o3.parseArrays) n4 = o3.allowEmptyArrays && "" === r3 ? [] : [].concat(r3);
      else {
        n4 = o3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        const t5 = "[" === i3.charAt(0) && "]" === i3.charAt(i3.length - 1) ? i3.slice(1, -1) : i3, e5 = o3.decodeDotInKeys ? t5.replace(/%2E/g, ".") : t5, s3 = parseInt(e5, 10);
        o3.parseArrays || "" !== e5 ? !isNaN(s3) && i3 !== e5 && String(s3) === e5 && s3 >= 0 && o3.parseArrays && s3 <= o3.arrayLimit ? (n4 = [], n4[s3] = r3) : "__proto__" !== e5 && (n4[e5] = r3) : n4 = { 0: r3 };
      }
      r3 = n4;
    }
    return r3;
  })(l2, e2, o2, n2);
};
function S(t3, e2) {
  const o2 = /* @__PURE__ */ (function(t4) {
    return E;
  })();
  if ("" === t3 || null == t3) return o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const n2 = "string" == typeof t3 ? (function(t4, e3) {
    const o3 = { __proto__: null }, n3 = (e3.ignoreQueryPrefix ? t4.replace(/^\?/, "") : t4).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit);
    let r3, i3 = -1, s2 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < n3.length; ++r3) 0 === n3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === n3[r3] ? s2 = "utf-8" : "utf8=%26%2310003%3B" === n3[r3] && (s2 = "iso-8859-1"), i3 = r3, r3 = n3.length);
    for (r3 = 0; r3 < n3.length; ++r3) {
      if (r3 === i3) continue;
      const t5 = n3[r3], u2 = t5.indexOf("]="), l2 = -1 === u2 ? t5.indexOf("=") : u2 + 1;
      let c2, p2;
      -1 === l2 ? (c2 = e3.decoder(t5, E.decoder, s2, "key"), p2 = e3.strictNullHandling ? null : "") : (c2 = e3.decoder(t5.slice(0, l2), E.decoder, s2, "key"), p2 = f(T(t5.slice(l2 + 1), e3), function(t6) {
        return e3.decoder(t6, E.decoder, s2, "value");
      })), p2 && e3.interpretNumericEntities && "iso-8859-1" === s2 && (p2 = O(p2)), t5.indexOf("[]=") > -1 && (p2 = $(p2) ? [p2] : p2);
      const y2 = j.call(o3, c2);
      y2 && "combine" === e3.duplicates ? o3[c2] = a(o3[c2], p2) : y2 && "last" !== e3.duplicates || (o3[c2] = p2);
    }
    return o3;
  })(t3, o2) : t3;
  let r2 = o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const i2 = Object.keys(n2);
  for (let e3 = 0; e3 < i2.length; ++e3) {
    const s2 = i2[e3], u2 = R(s2, n2[s2], o2, "string" == typeof t3);
    r2 = l(r2, u2, o2);
  }
  return true === o2.allowSparse ? r2 : (function(t4) {
    const e3 = [{ obj: { o: t4 }, prop: "o" }], o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      const n3 = e3[t5], r3 = n3.obj[n3.prop], i3 = Object.keys(r3);
      for (let t6 = 0; t6 < i3.length; ++t6) {
        const n4 = i3[t6], s2 = r3[n4];
        "object" == typeof s2 && null !== s2 && -1 === o3.indexOf(s2) && (e3.push({ obj: r3, prop: n4 }), o3.push(s2));
      }
    }
    return (function(t5) {
      for (; t5.length > 1; ) {
        const e4 = t5.pop(), o4 = e4.obj[e4.prop];
        if (s(o4)) {
          const t6 = [];
          for (let e5 = 0; e5 < o4.length; ++e5) void 0 !== o4[e5] && t6.push(o4[e5]);
          e4.obj[e4.prop] = t6;
        }
      }
    })(e3), t4;
  })(r2);
}
class I {
  constructor(t3, e2, o2) {
    var n2, r2;
    this.name = t3, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (r2 = e2.wheres) ? r2 : {}, this.config = o2;
  }
  get template() {
    const t3 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t3 ? "/" : t3;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t3, e2;
    return null != (t3 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t4) => ({ name: t4.replace(/{|\??}/g, ""), required: !/\?}$/.test(t4) }))) ? t3 : [];
  }
  matchesUrl(t3) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const o2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t4, e3, o3, n3) => {
      var r3;
      const i3 = `(?<${o3}>${(null == (r3 = this.wheres[o3]) ? void 0 : r3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, r2] = t3.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${o2}/?$`).exec(n2)) ? e2 : new RegExp(`^${o2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t4 in i2.groups) i2.groups[t4] = "string" == typeof i2.groups[t4] ? decodeURIComponent(i2.groups[t4]) : i2.groups[t4];
      return { params: i2.groups, query: S(r2) };
    }
    return false;
  }
  compile(t3) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, o2, n2) => {
      var r2, i2;
      if (!n2 && [null, void 0].includes(t3[o2])) throw new Error(`Ziggy error: '${o2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[o2] && !new RegExp(`^${n2 ? `(${this.wheres[o2]})?` : this.wheres[o2]}$`).test(null != (i2 = t3[o2]) ? i2 : "")) throw new Error(`Ziggy error: '${o2}' parameter '${t3[o2]}' does not match required format '${this.wheres[o2]}' for route '${this.name}'.`);
      return encodeURI(null != (r2 = t3[o2]) ? r2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class A extends String {
  constructor(e2, o2, n2 = true, r2) {
    if (super(), this.t = null != r2 ? r2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !this.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), this.t = globalThis.Ziggy), this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new I(e2, this.t.routes[e2], this.t), this.u = this.l(o2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t3) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t3)).filter((t3) => "_query" !== t3).reduce((e3, o2) => t({}, e3, { [o2]: this.u[o2] }), {});
    return this.i.compile(this.u) + (function(t3, e3) {
      let o2 = t3;
      const i2 = (function(t4) {
        if (!t4) return g;
        if (void 0 !== t4.allowEmptyArrays && "boolean" != typeof t4.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== t4.encodeDotInKeys && "boolean" != typeof t4.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null != t4.encoder && "function" != typeof t4.encoder) throw new TypeError("Encoder has to be a function.");
        const e4 = t4.charset || g.charset;
        if (void 0 !== t4.charset && "utf-8" !== t4.charset && "iso-8859-1" !== t4.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        let o3 = r;
        if (void 0 !== t4.format) {
          if (!p.call(n, t4.format)) throw new TypeError("Unknown format option provided.");
          o3 = t4.format;
        }
        const i3 = n[o3];
        let s3, u3 = g.filter;
        if (("function" == typeof t4.filter || d(t4.filter)) && (u3 = t4.filter), s3 = t4.arrayFormat in y ? t4.arrayFormat : "indices" in t4 ? t4.indices ? "indices" : "repeat" : g.arrayFormat, "commaRoundTrip" in t4 && "boolean" != typeof t4.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        return { addQueryPrefix: "boolean" == typeof t4.addQueryPrefix ? t4.addQueryPrefix : g.addQueryPrefix, allowDots: void 0 === t4.allowDots ? true === t4.encodeDotInKeys || g.allowDots : !!t4.allowDots, allowEmptyArrays: "boolean" == typeof t4.allowEmptyArrays ? !!t4.allowEmptyArrays : g.allowEmptyArrays, arrayFormat: s3, charset: e4, charsetSentinel: "boolean" == typeof t4.charsetSentinel ? t4.charsetSentinel : g.charsetSentinel, commaRoundTrip: t4.commaRoundTrip, delimiter: void 0 === t4.delimiter ? g.delimiter : t4.delimiter, encode: "boolean" == typeof t4.encode ? t4.encode : g.encode, encodeDotInKeys: "boolean" == typeof t4.encodeDotInKeys ? t4.encodeDotInKeys : g.encodeDotInKeys, encoder: "function" == typeof t4.encoder ? t4.encoder : g.encoder, encodeValuesOnly: "boolean" == typeof t4.encodeValuesOnly ? t4.encodeValuesOnly : g.encodeValuesOnly, filter: u3, format: o3, formatter: i3, serializeDate: "function" == typeof t4.serializeDate ? t4.serializeDate : g.serializeDate, skipNulls: "boolean" == typeof t4.skipNulls ? t4.skipNulls : g.skipNulls, sort: "function" == typeof t4.sort ? t4.sort : null, strictNullHandling: "boolean" == typeof t4.strictNullHandling ? t4.strictNullHandling : g.strictNullHandling };
      })(e3);
      let s2, u2;
      "function" == typeof i2.filter ? (u2 = i2.filter, o2 = u2("", o2)) : d(i2.filter) && (u2 = i2.filter, s2 = u2);
      const l2 = [];
      if ("object" != typeof o2 || null === o2) return "";
      const c2 = y[i2.arrayFormat], a2 = "comma" === c2 && i2.commaRoundTrip;
      s2 || (s2 = Object.keys(o2)), i2.sort && s2.sort(i2.sort);
      const f2 = /* @__PURE__ */ new WeakMap();
      for (let t4 = 0; t4 < s2.length; ++t4) {
        const e4 = s2[t4];
        i2.skipNulls && null === o2[e4] || b(l2, v(o2[e4], e4, c2, a2, i2.allowEmptyArrays, i2.strictNullHandling, i2.skipNulls, i2.encodeDotInKeys, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset, f2));
      }
      const h2 = l2.join(i2.delimiter);
      let m2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (m2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? m2 + h2 : "";
    })(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t3, e3) => "boolean" == typeof t3 ? Number(t3) : e3(t3) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let o2 = {};
    const [n2, r2] = Object.entries(this.t.routes).find(([t3, n3]) => o2 = new I(t3, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, o2, { route: r2 });
  }
  m() {
    const { host: t3, pathname: e2, search: o2 } = this.h();
    return (this.t.absolute ? t3 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + o2;
  }
  current(e2, o2) {
    const { name: n2, params: r2, query: i2, route: s2 } = this.p();
    if (!e2) return n2;
    const u2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(o2) || !u2) return u2;
    const l2 = new I(n2, s2, this.t);
    o2 = this.l(o2, l2);
    const c2 = t({}, r2, i2);
    if (Object.values(o2).every((t3) => !t3) && !Object.values(c2).some((t3) => void 0 !== t3)) return true;
    const a2 = (t3, e3) => Object.entries(t3).every(([t4, o3]) => Array.isArray(o3) && Array.isArray(e3[t4]) ? o3.every((o4) => e3[t4].includes(o4) || e3[t4].includes(decodeURIComponent(o4))) : "object" == typeof o3 && "object" == typeof e3[t4] && null !== o3 && null !== e3[t4] ? a2(o3, e3[t4]) : e3[t4] == o3 || e3[t4] == decodeURIComponent(o3));
    return a2(o2, c2);
  }
  h() {
    var t3, e2, o2, n2, r2, i2;
    const { host: s2 = "", pathname: u2 = "", search: l2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t3 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t3 : s2, pathname: null != (o2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? o2 : u2, search: null != (r2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? r2 : l2 };
  }
  get params() {
    const { params: e2, query: o2 } = this.p();
    return t({}, e2, o2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t3) {
    return this.t.routes.hasOwnProperty(t3);
  }
  l(e2 = {}, o2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = o2.parameterSegments.filter(({ name: t3 }) => !this.t.defaults[t3]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, o3, r2) => t({}, e3, n2[r2] ? { [n2[r2].name]: o3 } : "object" == typeof o3 ? o3 : { [o3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(o2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(o2), this.j(e2, o2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t3 }) => this.t.defaults[t3]).reduce((e3, { name: o2 }, n2) => t({}, e3, { [o2]: this.t.defaults[o2] }), {});
  }
  j(e2, { bindings: o2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [r2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t3 }) => t3 === r2)) return t({}, e3, { [r2]: i2 });
      if (!i2.hasOwnProperty(o2[r2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${r2}' parameter is missing route model binding key '${o2[r2]}'.`);
        o2[r2] = "id";
      }
      return t({}, e3, { [r2]: i2[o2[r2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function D(t3, e2, o2, n2) {
  const r2 = new A(t3, e2, o2, n2);
  return t3 ? r2.toString() : r2;
}
const _ = { install(t3, e2) {
  const o2 = (t4, o3, n2, r2 = e2) => D(t4, o3, n2, r2);
  parseInt(t3.version) > 2 ? (t3.config.globalProperties.route = o2, t3.provide("route", o2)) : t3.mixin({ methods: { route: o2 } });
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_0, "./Pages/Auth/Login.vue": __vite_glob_0_1, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_2, "./Pages/Dashboard.vue": __vite_glob_0_3, "./Pages/Pages/Create.vue": __vite_glob_0_4, "./Pages/Pages/Edit.vue": __vite_glob_0_5, "./Pages/Pages/Index.vue": __vite_glob_0_6, "./Pages/Profile/Edit.vue": __vite_glob_0_7, "./Pages/Website/Index.vue": __vite_glob_0_8 });
      const page2 = pages[`./Pages/${name}.vue`];
      return page2.default ? page2.default : page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(_, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
