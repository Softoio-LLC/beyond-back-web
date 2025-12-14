import { mergeProps, useSSRContext, unref, ref, computed, onMounted, onUnmounted, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, withModifiers, Teleport, Transition, watch, nextTick, reactive, resolveDynamicComponent, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderDynamicModel, ssrRenderComponent, ssrRenderList, ssrRenderTeleport, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useForm, usePage, Link, router, Head, createInertiaApp } from "@inertiajs/vue3";
import { QuillEditor } from "@vueup/vue-quill";
import Sortable from "sortablejs";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$A = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-[#f6fbf7] via-[#eff6f1] to-[#dfeee5] text-gray-800" }, _attrs))}><div class="min-h-screen flex items-center justify-center px-4"><div class="w-full max-w-md bg-white/95 backdrop-blur-sm border border-[#dbe9df] shadow-xl shadow-[#0b8a4610] rounded-2xl px-8 py-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const AuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$z = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-db7ff772"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
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
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DashboardLayout.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const DashboardLayout = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-764f45ce"]]);
const _sfc_main$v = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 text-gray-900">You are logged in!</div></div></div></div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
      // sm, md, lg, xl, 2xl, 4xl, 6xl
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => {
      document.addEventListener("keydown", closeOnEscape);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.show) {
          _push2(`<div class="modal-overlay" data-v-9b447ad5><div class="${ssrRenderClass(["modal-container", `modal-${__props.maxWidth}`])}" data-v-9b447ad5><div class="modal-content" data-v-9b447ad5>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-9b447ad5"]]);
const _sfc_main$t = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary",
      // primary, secondary, danger, outline
      validator: (value) => ["primary", "secondary", "danger", "outline", "ghost"].includes(value)
    },
    size: {
      type: String,
      default: "md",
      // sm, md, lg
      validator: (value) => ["sm", "md", "lg"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        disabled: __props.disabled || __props.loading,
        class: ["btn", `btn-${__props.variant}`, `btn-${__props.size}`, { "btn-loading": __props.loading }]
      }, _attrs))} data-v-41acdf71>`);
      if (__props.loading) {
        _push(`<span class="btn-spinner" data-v-41acdf71></span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Button.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-41acdf71"]]);
const _sfc_main$s = {
  __name: "AddSectionModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    sectionTypes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["close", "add"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const selectedSection = ref(null);
    const hoveredSection = ref(null);
    const showPreview = ref(false);
    const selectSection = (sectionType) => {
      selectedSection.value = sectionType;
    };
    const handleAdd = () => {
      if (selectedSection.value) {
        emit("add", selectedSection.value.id);
        selectedSection.value = null;
      }
    };
    const handleClose = () => {
      selectedSection.value = null;
      emit("close");
    };
    const showSectionPreview = (sectionType, event) => {
      if (sectionType.preview_image) {
        hoveredSection.value = {
          ...sectionType,
          position: {
            x: event.clientX,
            y: event.clientY
          }
        };
        showPreview.value = true;
      }
    };
    const hidePreview = () => {
      showPreview.value = false;
      hoveredSection.value = null;
    };
    const getPreviewImageUrl = (path) => {
      if (!path) return "";
      return `/storage/${path}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Modal, mergeProps({
        show: __props.show,
        "max-width": "4xl",
        onClose: handleClose
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-header" data-v-95976a0c${_scopeId}><h2 class="modal-title" data-v-95976a0c${_scopeId}>Choose New Section</h2><button class="close-btn" data-v-95976a0c${_scopeId}><svg viewBox="0 0 20 20" fill="currentColor" data-v-95976a0c${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-95976a0c${_scopeId}></path></svg></button></div><div class="modal-body" data-v-95976a0c${_scopeId}><div class="sections-grid" data-v-95976a0c${_scopeId}><!--[-->`);
            ssrRenderList(__props.sectionTypes, (sectionType) => {
              _push2(`<div class="${ssrRenderClass(["section-card", { "selected": selectedSection.value?.id === sectionType.id }])}" data-v-95976a0c${_scopeId}><div class="card-icon" data-v-95976a0c${_scopeId}>`);
              if (sectionType.icon) {
                _push2(`<i class="${ssrRenderClass(sectionType.icon)}" data-v-95976a0c${_scopeId}></i>`);
              } else {
                _push2(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-95976a0c${_scopeId}><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-95976a0c${_scopeId}></path></svg>`);
              }
              _push2(`</div><div class="card-name" data-v-95976a0c${_scopeId}>${ssrInterpolate(sectionType.name_en)}</div><button class="info-btn" data-v-95976a0c${_scopeId}><svg viewBox="0 0 20 20" fill="currentColor" data-v-95976a0c${_scopeId}><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-95976a0c${_scopeId}></path></svg></button></div>`);
            });
            _push2(`<!--]--></div></div><div class="modal-footer" data-v-95976a0c${_scopeId}>`);
            _push2(ssrRenderComponent(Button, {
              variant: "outline",
              onClick: handleClose
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(Button, {
              variant: "primary",
              disabled: !selectedSection.value,
              onClick: handleAdd
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Choose `);
                } else {
                  return [
                    createTextVNode(" Choose ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderTeleport(_push2, (_push3) => {
              if (showPreview.value && hoveredSection.value && hoveredSection.value.preview_image) {
                _push3(`<div class="preview-tooltip" data-v-95976a0c${_scopeId}><div class="preview-header" data-v-95976a0c${_scopeId}><h3 class="preview-title" data-v-95976a0c${_scopeId}>${ssrInterpolate(hoveredSection.value.name_en)}</h3></div><div class="preview-body" data-v-95976a0c${_scopeId}><img${ssrRenderAttr("src", getPreviewImageUrl(hoveredSection.value.preview_image))}${ssrRenderAttr("alt", hoveredSection.value.name_en)} class="preview-image" data-v-95976a0c${_scopeId}></div></div>`);
              } else {
                _push3(`<!---->`);
              }
            }, "body", false, _parent2);
          } else {
            return [
              createVNode("div", { class: "modal-header" }, [
                createVNode("h2", { class: "modal-title" }, "Choose New Section"),
                createVNode("button", {
                  class: "close-btn",
                  onClick: handleClose
                }, [
                  (openBlock(), createBlock("svg", {
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ]),
              createVNode("div", { class: "modal-body" }, [
                createVNode("div", { class: "sections-grid" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.sectionTypes, (sectionType) => {
                    return openBlock(), createBlock("div", {
                      key: sectionType.id,
                      class: ["section-card", { "selected": selectedSection.value?.id === sectionType.id }],
                      onClick: ($event) => selectSection(sectionType)
                    }, [
                      createVNode("div", { class: "card-icon" }, [
                        sectionType.icon ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: sectionType.icon
                        }, null, 2)) : (openBlock(), createBlock("svg", {
                          key: 1,
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ]),
                      createVNode("div", { class: "card-name" }, toDisplayString(sectionType.name_en), 1),
                      createVNode("button", {
                        class: "info-btn",
                        onClick: withModifiers(() => {
                        }, ["stop"]),
                        onMouseenter: ($event) => showSectionPreview(sectionType, $event),
                        onMouseleave: hidePreview
                      }, [
                        (openBlock(), createBlock("svg", {
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ], 40, ["onClick", "onMouseenter"])
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "modal-footer" }, [
                createVNode(Button, {
                  variant: "outline",
                  onClick: handleClose
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }),
                createVNode(Button, {
                  variant: "primary",
                  disabled: !selectedSection.value,
                  onClick: handleAdd
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Choose ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(Transition, { name: "preview" }, {
                  default: withCtx(() => [
                    showPreview.value && hoveredSection.value && hoveredSection.value.preview_image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "preview-tooltip"
                    }, [
                      createVNode("div", { class: "preview-header" }, [
                        createVNode("h3", { class: "preview-title" }, toDisplayString(hoveredSection.value.name_en), 1)
                      ]),
                      createVNode("div", { class: "preview-body" }, [
                        createVNode("img", {
                          src: getPreviewImageUrl(hoveredSection.value.preview_image),
                          alt: hoveredSection.value.name_en,
                          class: "preview-image"
                        }, null, 8, ["src", "alt"])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/AddSectionModal.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const AddSectionModal = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-95976a0c"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddSectionModal
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-field" }, _attrs))} data-v-0cdb4751>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", inputId.value)} class="form-label" data-v-0cdb4751>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-danger" data-v-0cdb4751>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("id", inputId.value)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="${ssrRenderClass(["form-input", { "form-input-error": __props.error }])}" data-v-0cdb4751>`);
      if (__props.error) {
        _push(`<span class="form-error" data-v-0cdb4751>${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TextInput.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-0cdb4751"]]);
const _sfc_main$q = {
  __name: "RichTextEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter content..."
    },
    error: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const content = ref(props.modelValue);
    const toolbarOptions = [
      ["bold", "italic", "underline"],
      ["blockquote"],
      ["clean"]
      // remove formatting
    ];
    const editorOptions = {
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: props.placeholder,
      readOnly: props.disabled,
      theme: "snow"
    };
    watch(() => props.modelValue, (newVal) => {
      if (newVal !== content.value) {
        content.value = newVal;
      }
    });
    const onUpdate = (value) => {
      content.value = value;
      emit("update:modelValue", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rich-text-editor", { "has-error": __props.error }]
      }, _attrs))} data-v-9add3b08>`);
      if (__props.label) {
        _push(`<label class="editor-label" data-v-9add3b08>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="required-indicator" data-v-9add3b08>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="editor-wrapper" data-v-9add3b08>`);
      _push(ssrRenderComponent(unref(QuillEditor), {
        content: content.value,
        "content-type": "html",
        options: editorOptions,
        "onUpdate:content": onUpdate
      }, null, _parent));
      _push(`</div>`);
      if (__props.error) {
        _push(`<p class="error-message" data-v-9add3b08>${ssrInterpolate(__props.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/RichTextEditor.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const RichTextEditor = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-9add3b08"]]);
const _sfc_main$p = {
  __name: "ImageWithAlt",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: () => ({ image: "", alt_en: "", alt_ar: "" })
    },
    label: {
      type: String,
      default: "Image"
    },
    sectionType: {
      type: String,
      default: "general"
    },
    size: {
      type: String,
      default: "medium"
    },
    currentLang: {
      type: String,
      default: "en"
    },
    showAltFields: {
      type: Boolean,
      default: true
    },
    error: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const uploading = ref(false);
    const uploadError = ref("");
    const imageData = ref({
      image: props.modelValue?.image || props.modelValue || "",
      alt_en: props.modelValue?.alt_en || props.modelValue?.alt || "",
      alt_ar: props.modelValue?.alt_ar || ""
    });
    watch(() => props.modelValue, (newVal) => {
      if (typeof newVal === "string") {
        imageData.value.image = newVal;
      } else if (newVal) {
        imageData.value = {
          image: newVal.image || "",
          alt_en: newVal.alt_en || newVal.alt || "",
          alt_ar: newVal.alt_ar || ""
        };
      }
    }, { deep: true });
    const imageUrl = computed(() => {
      const img = imageData.value.image;
      if (!img) return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    });
    const hasImage = computed(() => !!imageData.value.image);
    const emitUpdate = () => {
      emit("update:modelValue", { ...imageData.value });
    };
    const updateAlt = (lang, value) => {
      imageData.value[`alt_${lang}`] = value;
      emitUpdate();
    };
    const currentAltLabel = computed(() => {
      return props.currentLang === "ar" ? "Alt Text (Arabic)" : "Alt Text (English)";
    });
    const currentAltValue = computed(() => {
      return props.currentLang === "ar" ? imageData.value.alt_ar : imageData.value.alt_en;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["image-with-alt", { "has-error": __props.error }]
      }, _attrs))} data-v-00b73727><label class="field-label" data-v-00b73727>${ssrInterpolate(__props.label)} `);
      if (__props.required) {
        _push(`<span class="required-indicator" data-v-00b73727>*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="image-upload-area" data-v-00b73727>`);
      if (hasImage.value) {
        _push(`<div class="image-preview" data-v-00b73727><img${ssrRenderAttr("src", imageUrl.value)}${ssrRenderAttr("alt", currentAltValue.value)} data-v-00b73727><button type="button" class="remove-btn" title="Remove image" data-v-00b73727><svg viewBox="0 0 20 20" fill="currentColor" data-v-00b73727><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-00b73727></path></svg></button></div>`);
      } else {
        _push(`<label class="${ssrRenderClass([{ "uploading": uploading.value }, "upload-zone"])}" data-v-00b73727><input type="file" accept="image/*"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""} class="hidden-input" data-v-00b73727>`);
        if (uploading.value) {
          _push(`<div class="upload-spinner" data-v-00b73727><svg class="spinner" viewBox="0 0 24 24" data-v-00b73727><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" data-v-00b73727></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-00b73727></path></svg><span data-v-00b73727>Uploading...</span></div>`);
        } else {
          _push(`<div class="upload-content" data-v-00b73727><svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-00b73727><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-00b73727></path></svg><span class="upload-text" data-v-00b73727>Click to upload</span><span class="upload-hint" data-v-00b73727>PNG, JPG, GIF, WebP up to 5MB</span></div>`);
        }
        _push(`</label>`);
      }
      _push(`</div>`);
      if (uploadError.value) {
        _push(`<p class="error-message" data-v-00b73727>${ssrInterpolate(uploadError.value)}</p>`);
      } else if (__props.error) {
        _push(`<p class="error-message" data-v-00b73727>${ssrInterpolate(__props.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (hasImage.value && __props.showAltFields) {
        _push(`<div class="alt-field" data-v-00b73727>`);
        _push(ssrRenderComponent(TextInput, {
          "model-value": currentAltValue.value,
          label: currentAltLabel.value,
          placeholder: "Describe the image",
          "onUpdate:modelValue": ($event) => updateAlt(__props.currentLang, $event)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/ImageWithAlt.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ImageWithAlt = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-00b73727"]]);
const __default__ = {
  methods: {
    // Helper to get image data from item
    getImageData(item, field) {
      const imageKey = field.key;
      const altEnKey = field.altKey ? `${field.altKey}_en` : `${field.key}_alt_en`;
      const altArKey = field.altKey ? `${field.altKey}_ar` : `${field.key}_alt_ar`;
      if (typeof item[imageKey] === "object" && item[imageKey] !== null) {
        return item[imageKey];
      }
      return {
        image: item[imageKey] || item.image || "",
        alt_en: item[altEnKey] || item.alt_en || item.alt || "",
        alt_ar: item[altArKey] || item.alt_ar || ""
      };
    },
    // Helper to set image data
    setImageData(index, field, value) {
      const imageKey = field.key;
      const altEnKey = field.altKey ? `${field.altKey}_en` : `${field.key}_alt_en`;
      const altArKey = field.altKey ? `${field.altKey}_ar` : `${field.key}_alt_ar`;
      this.items[index][imageKey] = value.image;
      this.items[index][altEnKey] = value.alt_en;
      this.items[index][altArKey] = value.alt_ar;
      this.items[index].alt = value[`alt_${this.currentLang}`];
      this.emitUpdate();
    }
  }
};
const _sfc_main$o = /* @__PURE__ */ Object.assign(__default__, {
  __name: "RepeaterField",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "Items"
    },
    itemLabel: {
      type: String,
      default: "Item"
    },
    fields: {
      type: Array,
      required: true
      // Each field: { key: string, label: string, type: 'text'|'textarea'|'richtext'|'image'|'url', bilingual?: boolean }
    },
    defaultItem: {
      type: Object,
      default: () => ({})
    },
    sectionType: {
      type: String,
      default: "general"
    },
    currentLang: {
      type: String,
      default: "en"
    },
    maxItems: {
      type: Number,
      default: 50
    },
    minItems: {
      type: Number,
      default: 0
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    sortable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const items = ref([...props.modelValue]);
    const expandedItems = ref(/* @__PURE__ */ new Set());
    const listRef = ref(null);
    let sortableInstance = null;
    watch(() => props.modelValue, (newVal) => {
      items.value = [...newVal];
    }, { deep: true });
    const initSortable = () => {
      if (!props.sortable || !listRef.value) return;
      if (sortableInstance) {
        sortableInstance.destroy();
      }
      sortableInstance = Sortable.create(listRef.value, {
        handle: ".drag-handle",
        animation: 150,
        ghostClass: "sortable-ghost",
        dragClass: "sortable-drag",
        onEnd: (evt) => {
          const movedItem = items.value.splice(evt.oldIndex, 1)[0];
          items.value.splice(evt.newIndex, 0, movedItem);
          emitUpdate();
        }
      });
    };
    const canAddMore = computed(() => items.value.length < props.maxItems);
    const canRemove = computed(() => items.value.length > props.minItems);
    const getItemTitle = (item, index) => {
      const titleKeys = ["title", "name", "label", "heading", `title_${props.currentLang}`, `name_${props.currentLang}`];
      for (const key of titleKeys) {
        if (item[key]) {
          const text = item[key];
          return text.length > 30 ? text.substring(0, 30) + "..." : text;
        }
      }
      return `${props.itemLabel} ${index + 1}`;
    };
    const isExpanded = (index) => expandedItems.value.has(index);
    const getFieldKey = (field) => {
      if (field.bilingual) {
        return `${field.key}_${props.currentLang}`;
      }
      return field.key;
    };
    const getFieldValue = (item, field) => {
      const key = getFieldKey(field);
      return item[key] ?? item[field.key] ?? "";
    };
    const setFieldValue = (itemIndex, field, value) => {
      const key = getFieldKey(field);
      items.value[itemIndex][key] = value;
      emitUpdate();
    };
    const emitUpdate = () => {
      emit("update:modelValue", [...items.value]);
    };
    onMounted(() => {
      nextTick(() => {
        initSortable();
      });
    });
    onUnmounted(() => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
    });
    watch(items, () => {
      nextTick(() => {
        initSortable();
      });
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "repeater-field" }, _attrs))} data-v-a01449d1><div class="repeater-header" data-v-a01449d1><label class="repeater-label" data-v-a01449d1>${ssrInterpolate(__props.label)}</label><span class="item-count" data-v-a01449d1>${ssrInterpolate(items.value.length)} ${ssrInterpolate(items.value.length === 1 ? __props.itemLabel : __props.itemLabel + "s")}</span></div><div class="repeater-list" data-v-a01449d1><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isExpanded(index) }, "repeater-item"])}" data-v-a01449d1><div class="item-header" data-v-a01449d1>`);
        if (__props.sortable) {
          _push(`<div class="drag-handle" data-v-a01449d1><svg viewBox="0 0 20 20" fill="currentColor" data-v-a01449d1><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" data-v-a01449d1></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="item-title" data-v-a01449d1>${ssrInterpolate(getItemTitle(item, index))}</span><div class="item-actions" data-v-a01449d1>`);
        if (canAddMore.value) {
          _push(`<button type="button" class="action-btn duplicate" title="Duplicate" data-v-a01449d1><svg viewBox="0 0 20 20" fill="currentColor" data-v-a01449d1><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" data-v-a01449d1></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" data-v-a01449d1></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (canRemove.value) {
          _push(`<button type="button" class="action-btn delete" title="Delete" data-v-a01449d1><svg viewBox="0 0 20 20" fill="currentColor" data-v-a01449d1><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-a01449d1></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="${ssrRenderClass([{ "rotated": isExpanded(index) }, "action-btn expand"])}" data-v-a01449d1><svg viewBox="0 0 20 20" fill="currentColor" data-v-a01449d1><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-a01449d1></path></svg></button></div></div>`);
        if (isExpanded(index)) {
          _push(`<div class="item-content" data-v-a01449d1><!--[-->`);
          ssrRenderList(__props.fields, (field) => {
            _push(`<!--[-->`);
            if (field.type === "text" || field.type === "url") {
              _push(ssrRenderComponent(TextInput, {
                "model-value": getFieldValue(item, field),
                label: field.label,
                placeholder: field.placeholder || `Enter ${field.label.toLowerCase()}`,
                type: field.type === "url" ? "url" : "text",
                "onUpdate:modelValue": ($event) => setFieldValue(index, field, $event)
              }, null, _parent));
            } else if (field.type === "richtext" || field.type === "textarea") {
              _push(ssrRenderComponent(RichTextEditor, {
                "model-value": getFieldValue(item, field),
                label: field.label,
                placeholder: field.placeholder || `Enter ${field.label.toLowerCase()}`,
                "onUpdate:modelValue": ($event) => setFieldValue(index, field, $event)
              }, null, _parent));
            } else if (field.type === "image") {
              _push(ssrRenderComponent(ImageWithAlt, {
                "model-value": _ctx.getImageData(item, field),
                label: field.label,
                "section-type": __props.sectionType,
                "current-lang": __props.currentLang,
                "show-alt-fields": field.showAlt !== false,
                "onUpdate:modelValue": ($event) => _ctx.setImageData(index, field, $event)
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (canAddMore.value) {
        _push(`<button type="button" class="add-item-btn" data-v-a01449d1><svg viewBox="0 0 20 20" fill="currentColor" data-v-a01449d1><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-a01449d1></path></svg> Add ${ssrInterpolate(__props.itemLabel)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/RepeaterField.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const RepeaterField = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-a01449d1"]]);
const _sfc_main$n = {
  __name: "NestedMenuEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "Menu Items"
    },
    currentLang: {
      type: String,
      default: "en"
    },
    maxItems: {
      type: Number,
      default: 20
    },
    maxChildren: {
      type: Number,
      default: 10
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const items = ref(JSON.parse(JSON.stringify(props.modelValue)));
    const expandedItems = ref(/* @__PURE__ */ new Set());
    const expandedChildren = ref(/* @__PURE__ */ new Map());
    const listRef = ref(null);
    let sortableInstance = null;
    watch(() => props.modelValue, (newVal) => {
      items.value = JSON.parse(JSON.stringify(newVal));
    }, { deep: true });
    const initSortable = () => {
      if (!listRef.value) return;
      if (sortableInstance) {
        sortableInstance.destroy();
      }
      sortableInstance = Sortable.create(listRef.value, {
        handle: ".drag-handle",
        animation: 150,
        ghostClass: "sortable-ghost",
        dragClass: "sortable-drag",
        onEnd: (evt) => {
          const movedItem = items.value.splice(evt.oldIndex, 1)[0];
          items.value.splice(evt.newIndex, 0, movedItem);
          emitUpdate();
        }
      });
    };
    const canAddMore = computed(() => items.value.length < props.maxItems);
    const getItemLabel = (item, index) => {
      const label = item[`label_${props.currentLang}`] || item.label_en || item.label_ar || "";
      return label || `Menu Item ${index + 1}`;
    };
    const getChildLabel = (child, index) => {
      const label = child[`label_${props.currentLang}`] || child.label_en || child.label_ar || "";
      return label || `Sub Item ${index + 1}`;
    };
    const isExpanded = (index) => expandedItems.value.has(index);
    const isChildExpanded = (parentIndex, childIndex) => {
      return expandedChildren.value.get(parentIndex)?.has(childIndex) || false;
    };
    const updateItemField = (index, field, value) => {
      items.value[index][field] = value;
      emitUpdate();
    };
    const updateChildField = (parentIndex, childIndex, field, value) => {
      items.value[parentIndex].children[childIndex][field] = value;
      emitUpdate();
    };
    const emitUpdate = () => {
      emit("update:modelValue", JSON.parse(JSON.stringify(items.value)));
    };
    onMounted(() => {
      nextTick(() => {
        initSortable();
      });
    });
    onUnmounted(() => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
    });
    watch(items, () => {
      nextTick(() => {
        initSortable();
      });
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nested-repeater" }, _attrs))} data-v-031de665><div class="repeater-header" data-v-031de665><label class="repeater-label" data-v-031de665>${ssrInterpolate(__props.label)}</label><span class="item-count" data-v-031de665>${ssrInterpolate(items.value.length)} items</span></div><div class="repeater-list" data-v-031de665><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isExpanded(index) }, "repeater-item"])}" data-v-031de665><div class="item-header" data-v-031de665><div class="drag-handle" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" data-v-031de665></path></svg></div><span class="item-title" data-v-031de665>${ssrInterpolate(getItemLabel(item, index))}</span>`);
        if (item.children?.length) {
          _push(`<span class="children-badge" data-v-031de665>${ssrInterpolate(item.children.length)} sub </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="item-actions" data-v-031de665><button type="button" class="action-btn delete" title="Delete" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-031de665></path></svg></button><button type="button" class="${ssrRenderClass([{ "rotated": isExpanded(index) }, "action-btn expand"])}" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-031de665></path></svg></button></div></div>`);
        if (isExpanded(index)) {
          _push(`<div class="item-content" data-v-031de665><div class="fields-row" data-v-031de665>`);
          _push(ssrRenderComponent(TextInput, {
            "model-value": item[`label_${__props.currentLang}`],
            label: `Label (${__props.currentLang.toUpperCase()})`,
            placeholder: "Enter menu label",
            "onUpdate:modelValue": ($event) => updateItemField(index, `label_${__props.currentLang}`, $event)
          }, null, _parent));
          _push(ssrRenderComponent(TextInput, {
            "model-value": item.url,
            label: "URL",
            placeholder: "#section or /page",
            "onUpdate:modelValue": ($event) => updateItemField(index, "url", $event)
          }, null, _parent));
          _push(`</div><div class="children-section" data-v-031de665><div class="children-header" data-v-031de665><span class="children-label" data-v-031de665>Sub Menu Items</span><button type="button" class="add-child-btn"${ssrIncludeBooleanAttr(item.children?.length >= __props.maxChildren) ? " disabled" : ""} data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-031de665></path></svg> Add Sub Item </button></div>`);
          if (item.children?.length) {
            _push(`<div class="children-list" data-v-031de665><!--[-->`);
            ssrRenderList(item.children, (child, childIndex) => {
              _push(`<div class="${ssrRenderClass([{ "is-expanded": isChildExpanded(index, childIndex) }, "child-item"])}" data-v-031de665><div class="child-header" data-v-031de665><span class="child-title" data-v-031de665>${ssrInterpolate(getChildLabel(child, childIndex))}</span><div class="item-actions" data-v-031de665><button type="button" class="action-btn delete" title="Delete" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-031de665></path></svg></button><button type="button" class="${ssrRenderClass([{ "rotated": isChildExpanded(index, childIndex) }, "action-btn expand"])}" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-031de665></path></svg></button></div></div>`);
              if (isChildExpanded(index, childIndex)) {
                _push(`<div class="child-content" data-v-031de665><div class="fields-row" data-v-031de665>`);
                _push(ssrRenderComponent(TextInput, {
                  "model-value": child[`label_${__props.currentLang}`],
                  label: `Label (${__props.currentLang.toUpperCase()})`,
                  placeholder: "Enter sub menu label",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, `label_${__props.currentLang}`, $event)
                }, null, _parent));
                _push(ssrRenderComponent(TextInput, {
                  "model-value": child.url,
                  label: "URL",
                  placeholder: "#section or /page",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, "url", $event)
                }, null, _parent));
                _push(`</div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="no-children" data-v-031de665>No sub menu items</p>`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (canAddMore.value) {
        _push(`<button type="button" class="add-item-btn" data-v-031de665><svg viewBox="0 0 20 20" fill="currentColor" data-v-031de665><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-031de665></path></svg> Add Menu Item </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/NestedMenuEditor.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const NestedMenuEditor = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-031de665"]]);
const _sfc_main$m = {
  __name: "FooterMenuEditor",
  __ssrInlineRender: true,
  props: {
    menuColumns: {
      type: Array,
      default: () => []
    },
    contactInfo: {
      type: Object,
      default: () => ({ title_en: "", title_ar: "", items: [] })
    },
    social: {
      type: Object,
      default: () => ({ title_en: "", title_ar: "", links: [] })
    },
    currentLang: {
      type: String,
      default: "en"
    }
  },
  emits: ["update:menuColumns", "update:contactInfo", "update:social"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localMenuColumns = ref(JSON.parse(JSON.stringify(props.menuColumns || [])));
    const localContactInfo = ref(JSON.parse(JSON.stringify(props.contactInfo || { title_en: "", title_ar: "", items: [] })));
    const localSocial = ref(JSON.parse(JSON.stringify(props.social || { title_en: "", title_ar: "", links: [] })));
    const expandedColumns = reactive({});
    const linkContainers = ref({});
    const menuColumnsContainer = ref(null);
    const contactItemsContainer = ref(null);
    const socialItemsContainer = ref(null);
    const showMenuColumns = computed(() => props.menuColumns !== void 0);
    const showContactInfo = computed(() => props.contactInfo !== void 0);
    const showSocial = computed(() => props.social !== void 0);
    watch(() => props.menuColumns, (val) => {
      localMenuColumns.value = JSON.parse(JSON.stringify(val || []));
    }, { deep: true });
    watch(() => props.contactInfo, (val) => {
      localContactInfo.value = JSON.parse(JSON.stringify(val || { title_en: "", title_ar: "", items: [] }));
    }, { deep: true });
    watch(() => props.social, (val) => {
      localSocial.value = JSON.parse(JSON.stringify(val || { title_en: "", title_ar: "", links: [] }));
    }, { deep: true });
    const getColumnTitle = (column, index) => {
      const title = props.currentLang === "ar" ? column.title_ar : column.title_en;
      return title || `Column ${index + 1}`;
    };
    const updateColumnField = (colIndex, field, value) => {
      localMenuColumns.value[colIndex][field] = value;
      emit("update:menuColumns", localMenuColumns.value);
    };
    const updateLinkField = (colIndex, linkIndex, field, value) => {
      localMenuColumns.value[colIndex].links[linkIndex][field] = value;
      emit("update:menuColumns", localMenuColumns.value);
    };
    const updateContactTitle = (field, value) => {
      localContactInfo.value[field] = value;
      emit("update:contactInfo", localContactInfo.value);
    };
    const updateContactItemField = (index, field, value) => {
      localContactInfo.value.items[index][field] = value;
      emit("update:contactInfo", localContactInfo.value);
    };
    const updateSocialTitle = (field, value) => {
      localSocial.value[field] = value;
      emit("update:social", localSocial.value);
    };
    const updateSocialItemField = (index, field, value) => {
      localSocial.value.links[index][field] = value;
      emit("update:social", localSocial.value);
    };
    const initLinksSortable = (colIndex) => {
      const container = linkContainers.value[colIndex];
      if (container && container._sortable === void 0) {
        container._sortable = Sortable.create(container, {
          animation: 150,
          handle: ".link-drag-handle",
          onEnd: (evt) => {
            const items = [...localMenuColumns.value[colIndex].links];
            const [movedItem] = items.splice(evt.oldIndex, 1);
            items.splice(evt.newIndex, 0, movedItem);
            localMenuColumns.value[colIndex].links = items;
            emit("update:menuColumns", localMenuColumns.value);
          }
        });
      }
    };
    onMounted(() => {
      if (menuColumnsContainer.value) {
        Sortable.create(menuColumnsContainer.value, {
          animation: 150,
          handle: ".column-drag-handle",
          onEnd: (evt) => {
            const items = [...localMenuColumns.value];
            const [movedItem] = items.splice(evt.oldIndex, 1);
            items.splice(evt.newIndex, 0, movedItem);
            localMenuColumns.value = items;
            emit("update:menuColumns", localMenuColumns.value);
          }
        });
      }
      if (contactItemsContainer.value) {
        Sortable.create(contactItemsContainer.value, {
          animation: 150,
          handle: ".contact-item-drag-handle",
          onEnd: (evt) => {
            const items = [...localContactInfo.value.items];
            const [movedItem] = items.splice(evt.oldIndex, 1);
            items.splice(evt.newIndex, 0, movedItem);
            localContactInfo.value.items = items;
            emit("update:contactInfo", localContactInfo.value);
          }
        });
      }
      if (socialItemsContainer.value) {
        Sortable.create(socialItemsContainer.value, {
          animation: 150,
          handle: ".social-item-drag-handle",
          onEnd: (evt) => {
            const items = [...localSocial.value.links];
            const [movedItem] = items.splice(evt.oldIndex, 1);
            items.splice(evt.newIndex, 0, movedItem);
            localSocial.value.links = items;
            emit("update:social", localSocial.value);
          }
        });
      }
      if (localMenuColumns.value.length > 0) {
        expandedColumns[0] = true;
        nextTick(() => initLinksSortable(0));
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-menu-editor" }, _attrs))} data-v-35e4ccc0>`);
      if (showMenuColumns.value) {
        _push(`<div class="editor-section" data-v-35e4ccc0><div class="section-header" data-v-35e4ccc0><h4 class="section-title" data-v-35e4ccc0>Menu Columns</h4><button type="button" class="add-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="12" y1="5" x2="12" y2="19" data-v-35e4ccc0></line><line x1="5" y1="12" x2="19" y2="12" data-v-35e4ccc0></line></svg> Add Column </button></div><div class="columns-list" data-v-35e4ccc0><!--[-->`);
        ssrRenderList(localMenuColumns.value, (column, colIndex) => {
          _push(`<div class="column-item"${ssrRenderAttr("data-index", colIndex)} data-v-35e4ccc0><div class="column-header" data-v-35e4ccc0><div class="column-drag-handle" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="8" y1="6" x2="16" y2="6" data-v-35e4ccc0></line><line x1="8" y1="12" x2="16" y2="12" data-v-35e4ccc0></line><line x1="8" y1="18" x2="16" y2="18" data-v-35e4ccc0></line></svg></div><span class="column-title" data-v-35e4ccc0>${ssrInterpolate(getColumnTitle(column, colIndex))}</span><span class="links-badge" data-v-35e4ccc0>${ssrInterpolate(column.links?.length || 0)} links</span><svg class="${ssrRenderClass(["chevron", { rotated: expandedColumns[colIndex] }])}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><polyline points="6 9 12 15 18 9" data-v-35e4ccc0></polyline></svg><button type="button" class="remove-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="18" y1="6" x2="6" y2="18" data-v-35e4ccc0></line><line x1="6" y1="6" x2="18" y2="18" data-v-35e4ccc0></line></svg></button></div>`);
          if (expandedColumns[colIndex]) {
            _push(`<div class="column-content" data-v-35e4ccc0><div class="field-row" data-v-35e4ccc0><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Title (EN)</label>`);
            _push(ssrRenderComponent(TextInput, {
              modelValue: column.title_en || "",
              "onUpdate:modelValue": ($event) => updateColumnField(colIndex, "title_en", $event),
              placeholder: "Column title (EN)"
            }, null, _parent));
            _push(`</div><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Title (AR)</label>`);
            _push(ssrRenderComponent(TextInput, {
              modelValue: column.title_ar || "",
              "onUpdate:modelValue": ($event) => updateColumnField(colIndex, "title_ar", $event),
              placeholder: "Column title (AR)",
              dir: "rtl"
            }, null, _parent));
            _push(`</div></div><div class="links-section" data-v-35e4ccc0><div class="links-header" data-v-35e4ccc0><span class="links-title" data-v-35e4ccc0>Links</span><button type="button" class="add-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="12" y1="5" x2="12" y2="19" data-v-35e4ccc0></line><line x1="5" y1="12" x2="19" y2="12" data-v-35e4ccc0></line></svg> Add Link </button></div><div class="links-list" data-v-35e4ccc0><!--[-->`);
            ssrRenderList(column.links || [], (link, linkIndex) => {
              _push(`<div class="link-item"${ssrRenderAttr("data-index", linkIndex)} data-v-35e4ccc0><div class="link-drag-handle" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><circle cx="9" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="19" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="19" r="1" data-v-35e4ccc0></circle></svg></div><div class="link-fields" data-v-35e4ccc0>`);
              _push(ssrRenderComponent(TextInput, {
                modelValue: link.label_en || "",
                "onUpdate:modelValue": ($event) => updateLinkField(colIndex, linkIndex, "label_en", $event),
                placeholder: "Label (EN)",
                class: "link-input"
              }, null, _parent));
              _push(ssrRenderComponent(TextInput, {
                modelValue: link.label_ar || "",
                "onUpdate:modelValue": ($event) => updateLinkField(colIndex, linkIndex, "label_ar", $event),
                placeholder: "Label (AR)",
                dir: "rtl",
                class: "link-input"
              }, null, _parent));
              _push(ssrRenderComponent(TextInput, {
                modelValue: link.url || "",
                "onUpdate:modelValue": ($event) => updateLinkField(colIndex, linkIndex, "url", $event),
                placeholder: "URL",
                class: "link-input url-input"
              }, null, _parent));
              _push(`</div><button type="button" class="remove-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="18" y1="6" x2="6" y2="18" data-v-35e4ccc0></line><line x1="6" y1="6" x2="18" y2="18" data-v-35e4ccc0></line></svg></button></div>`);
            });
            _push(`<!--]--></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showContactInfo.value) {
        _push(`<div class="editor-section" data-v-35e4ccc0><div class="section-header" data-v-35e4ccc0><h4 class="section-title" data-v-35e4ccc0>Contact Info</h4></div><div class="field-row" data-v-35e4ccc0><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Section Title (EN)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localContactInfo.value.title_en || "",
          "onUpdate:modelValue": ($event) => updateContactTitle("title_en", $event),
          placeholder: "Contact title (EN)"
        }, null, _parent));
        _push(`</div><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Section Title (AR)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localContactInfo.value.title_ar || "",
          "onUpdate:modelValue": ($event) => updateContactTitle("title_ar", $event),
          placeholder: "Contact title (AR)",
          dir: "rtl"
        }, null, _parent));
        _push(`</div></div><div class="contact-items-section" data-v-35e4ccc0><div class="links-header" data-v-35e4ccc0><span class="links-title" data-v-35e4ccc0>Contact Items</span><button type="button" class="add-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="12" y1="5" x2="12" y2="19" data-v-35e4ccc0></line><line x1="5" y1="12" x2="19" y2="12" data-v-35e4ccc0></line></svg> Add Item </button></div><div class="contact-items-list" data-v-35e4ccc0><!--[-->`);
        ssrRenderList(localContactInfo.value.items || [], (item, itemIndex) => {
          _push(`<div class="contact-item"${ssrRenderAttr("data-index", itemIndex)} data-v-35e4ccc0><div class="contact-item-drag-handle" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><circle cx="9" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="19" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="19" r="1" data-v-35e4ccc0></circle></svg></div><div class="contact-item-fields" data-v-35e4ccc0>`);
          _push(ssrRenderComponent(TextInput, {
            modelValue: item.icon || "",
            "onUpdate:modelValue": ($event) => updateContactItemField(itemIndex, "icon", $event),
            placeholder: "Icon URL",
            class: "contact-input"
          }, null, _parent));
          _push(ssrRenderComponent(TextInput, {
            modelValue: item.text || "",
            "onUpdate:modelValue": ($event) => updateContactItemField(itemIndex, "text", $event),
            placeholder: "Display Text",
            class: "contact-input"
          }, null, _parent));
          _push(ssrRenderComponent(TextInput, {
            modelValue: item.url || "",
            "onUpdate:modelValue": ($event) => updateContactItemField(itemIndex, "url", $event),
            placeholder: "Link URL",
            class: "contact-input"
          }, null, _parent));
          _push(`</div><button type="button" class="remove-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="18" y1="6" x2="6" y2="18" data-v-35e4ccc0></line><line x1="6" y1="6" x2="18" y2="18" data-v-35e4ccc0></line></svg></button></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showSocial.value) {
        _push(`<div class="editor-section" data-v-35e4ccc0><div class="section-header" data-v-35e4ccc0><h4 class="section-title" data-v-35e4ccc0>Social Links</h4></div><div class="field-row" data-v-35e4ccc0><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Section Title (EN)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localSocial.value.title_en || "",
          "onUpdate:modelValue": ($event) => updateSocialTitle("title_en", $event),
          placeholder: "Social title (EN)"
        }, null, _parent));
        _push(`</div><div class="field-half" data-v-35e4ccc0><label class="field-label" data-v-35e4ccc0>Section Title (AR)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localSocial.value.title_ar || "",
          "onUpdate:modelValue": ($event) => updateSocialTitle("title_ar", $event),
          placeholder: "Social title (AR)",
          dir: "rtl"
        }, null, _parent));
        _push(`</div></div><div class="social-items-section" data-v-35e4ccc0><div class="links-header" data-v-35e4ccc0><span class="links-title" data-v-35e4ccc0>Social Icons</span><button type="button" class="add-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="12" y1="5" x2="12" y2="19" data-v-35e4ccc0></line><line x1="5" y1="12" x2="19" y2="12" data-v-35e4ccc0></line></svg> Add Social </button></div><div class="social-items-list" data-v-35e4ccc0><!--[-->`);
        ssrRenderList(localSocial.value.links || [], (item, itemIndex) => {
          _push(`<div class="social-item"${ssrRenderAttr("data-index", itemIndex)} data-v-35e4ccc0><div class="social-item-drag-handle" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><circle cx="9" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="9" cy="19" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="5" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="12" r="1" data-v-35e4ccc0></circle><circle cx="15" cy="19" r="1" data-v-35e4ccc0></circle></svg></div><div class="social-item-fields" data-v-35e4ccc0>`);
          _push(ssrRenderComponent(TextInput, {
            modelValue: item.icon || "",
            "onUpdate:modelValue": ($event) => updateSocialItemField(itemIndex, "icon", $event),
            placeholder: "Icon URL/Path",
            class: "social-input"
          }, null, _parent));
          _push(ssrRenderComponent(TextInput, {
            modelValue: item.url || "",
            "onUpdate:modelValue": ($event) => updateSocialItemField(itemIndex, "url", $event),
            placeholder: "Profile URL",
            class: "social-input"
          }, null, _parent));
          _push(`</div><button type="button" class="remove-link-btn" data-v-35e4ccc0><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-35e4ccc0><line x1="18" y1="6" x2="6" y2="18" data-v-35e4ccc0></line><line x1="6" y1="6" x2="18" y2="18" data-v-35e4ccc0></line></svg></button></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/FooterMenuEditor.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const FooterMenuEditor = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-35e4ccc0"]]);
const saFlag = "/build/assets/sa-flag-D4E_9N_f.svg";
const usFlag = "/build/assets/us-flag-yPINlvk7.svg";
const _sfc_main$l = {
  __name: "EditSectionSidebar",
  __ssrInlineRender: true,
  props: {
    section: {
      type: Object,
      required: true
    },
    sectionType: {
      type: Object,
      default: null
    }
  },
  emits: ["close", "update", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentLang = ref("en");
    const initFormData = () => {
      const defaultContent = props.sectionType?.default_content || props.section.section_type?.default_content || {};
      const sectionContent = props.section.content || {};
      return deepMerge(JSON.parse(JSON.stringify(defaultContent)), JSON.parse(JSON.stringify(sectionContent)));
    };
    const deepMerge = (target, source) => {
      if (!source) return target;
      for (const key of Object.keys(source)) {
        if (source[key] instanceof Array) {
          target[key] = source[key];
        } else if (source[key] instanceof Object && target[key] instanceof Object) {
          target[key] = deepMerge(target[key], source[key]);
        } else if (source[key] !== void 0 && source[key] !== null && source[key] !== "") {
          target[key] = source[key];
        }
      }
      return target;
    };
    const formData = reactive(initFormData());
    watch(() => props.section, () => {
      Object.assign(formData, initFormData());
    }, { deep: true });
    watch(formData, () => {
      emit("change");
    }, { deep: true });
    const getFieldValue = (field) => {
      const langField = `${field}_${currentLang.value}`;
      return formData[langField] ?? formData[field] ?? "";
    };
    const setFieldValue = (field, value) => {
      const langField = `${field}_${currentLang.value}`;
      if (formData.hasOwnProperty(langField) || formData.hasOwnProperty(`${field}_en`)) {
        formData[langField] = value;
      } else {
        formData[field] = value;
      }
      emit("change");
    };
    const hasField = (field) => {
      return formData.hasOwnProperty(`${field}_en`) || formData.hasOwnProperty(`${field}_ar`) || formData.hasOwnProperty(field);
    };
    const save = () => {
      emit("update", props.section.id, { ...formData });
    };
    const close = () => {
      emit("close");
    };
    const sectionKey = computed(() => props.section.section_type?.key || "");
    const getSectionFields = computed(() => {
      const key = sectionKey.value;
      switch (key) {
        case "hero":
          return {
            basicFields: ["subtitle", "title", "description"],
            buttonFields: ["button_text", "button_url"],
            imageFields: ["background_image"],
            repeaterFields: [{
              key: "slides",
              label: "Slider Images",
              itemLabel: "Slide",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: true }
              ],
              defaultItem: { image: "", alt: "", alt_en: "", alt_ar: "" }
            }]
          };
        case "partners":
          return {
            basicFields: [],
            buttonFields: [],
            imageFields: [],
            repeaterFields: [{
              key: "logos",
              label: "Partner Logos",
              itemLabel: "Logo",
              fields: [
                { key: "image", label: "Logo Image", type: "image", showAlt: true },
                { key: "url", label: "Website URL", type: "url" }
              ],
              defaultItem: { image: "", url: "#", alt: "", alt_en: "", alt_ar: "" }
            }]
          };
        case "concept":
          return {
            basicFields: [],
            buttonFields: [],
            imageFields: ["shape_image", "bottom_shape_image", "counter_bg_image"],
            repeaterFields: [
              {
                key: "blocks",
                label: "Content Blocks",
                itemLabel: "Block",
                fields: [
                  { key: "title", label: "Title", type: "text", bilingual: true },
                  { key: "paragraphs", label: "Content", type: "richtext", bilingual: true, isArray: true }
                ],
                defaultItem: {
                  title_en: "",
                  title_ar: "",
                  paragraphs_en: [],
                  paragraphs_ar: [],
                  slides: [],
                  image_on_left: false
                }
              },
              {
                key: "counters",
                label: "Counter Stats",
                itemLabel: "Counter",
                fields: [
                  { key: "value", label: "Value", type: "text" },
                  { key: "label", label: "Label", type: "text", bilingual: true }
                ],
                defaultItem: { value: "", label_en: "", label_ar: "" }
              }
            ]
          };
        case "services":
          return {
            basicFields: ["title"],
            buttonFields: [],
            imageFields: ["shape_image"],
            repeaterFields: [{
              key: "services",
              label: "Services",
              itemLabel: "Service",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true },
                { key: "description", label: "Description", type: "richtext", bilingual: true }
              ],
              defaultItem: { image: "", title_en: "", title_ar: "", description_en: "", description_ar: "" }
            }]
          };
        case "cta":
          return {
            basicFields: ["title", "description"],
            buttonFields: ["button_text", "button_url"],
            imageFields: ["shape_image"],
            repeaterFields: [{
              key: "contact_cards",
              label: "Contact Cards",
              itemLabel: "Card",
              fields: [
                { key: "icon", label: "Icon", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true }
              ],
              defaultItem: { icon: "", title_en: "", title_ar: "", links: [] }
            }]
          };
        case "projects":
          return {
            basicFields: ["title"],
            buttonFields: [],
            imageFields: ["shape_image", "work_shape_image"],
            repeaterFields: [{
              key: "projects",
              label: "Projects",
              itemLabel: "Project",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true },
                { key: "description", label: "Description", type: "richtext", bilingual: true },
                { key: "learn_more_text", label: "Learn More Text", type: "text", bilingual: true },
                { key: "learn_more_url", label: "Learn More URL", type: "url" },
                { key: "visit_text", label: "Visit Text", type: "text", bilingual: true },
                { key: "visit_url", label: "Visit URL", type: "url" },
                { key: "btn_color_class", label: "Button Color Class", type: "text" }
              ],
              defaultItem: {
                image: "",
                title_en: "",
                title_ar: "",
                description_en: "",
                description_ar: "",
                learn_more_text_en: "Learn More",
                learn_more_text_ar: "تعرف أكثر",
                learn_more_url: "#",
                visit_text_en: "Visit Project",
                visit_text_ar: "زيارة المشروع",
                visit_url: "#",
                btn_color_class: ""
              }
            }]
          };
        case "team":
          return {
            basicFields: ["title"],
            buttonFields: [],
            imageFields: ["shape_image"],
            repeaterFields: [{
              key: "members",
              label: "Team Members",
              itemLabel: "Member",
              fields: [
                { key: "image", label: "Photo", type: "image", showAlt: false },
                { key: "title", label: "Role", type: "text", bilingual: true },
                { key: "description", label: "Description", type: "richtext", bilingual: true }
              ],
              defaultItem: { image: "", title_en: "", title_ar: "", description_en: "", description_ar: "" }
            }]
          };
        case "contact":
          return {
            basicFields: [],
            buttonFields: ["button_text", "button_url"],
            imageFields: ["background_image", "contact_logo"],
            repeaterFields: [{
              key: "cards",
              label: "Feature Cards",
              itemLabel: "Card",
              fields: [
                { key: "icon", label: "Icon", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true },
                { key: "description", label: "Description", type: "richtext", bilingual: true }
              ],
              defaultItem: { icon: "", title_en: "", title_ar: "", description_en: "", description_ar: "" }
            }]
          };
        case "gallery":
          return {
            basicFields: ["title", "subtitle"],
            buttonFields: ["button_text", "button_url"],
            imageFields: ["shape_image"],
            repeaterFields: [{
              key: "images",
              label: "Gallery Images",
              itemLabel: "Image",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: false },
                { key: "title", label: "Title/Caption", type: "text" }
              ],
              defaultItem: { image: "", title: "" }
            }]
          };
        case "faq":
          return {
            basicFields: ["title", "subtitle"],
            buttonFields: [],
            imageFields: ["shape_image"],
            repeaterFields: [{
              key: "faqs",
              label: "FAQ Items",
              itemLabel: "FAQ",
              fields: [
                { key: "question", label: "Question", type: "text", bilingual: true },
                { key: "answer", label: "Answer", type: "richtext", bilingual: true }
              ],
              defaultItem: { question_en: "", question_ar: "", answer_en: "", answer_ar: "" }
            }]
          };
        case "inquiry":
          return {
            basicFields: ["title", "description"],
            buttonFields: [
              { key: "primary_button_text", label: "Primary Button Text" },
              { key: "primary_button_url", label: "Primary Button URL" },
              { key: "secondary_button_text", label: "Secondary Button Text" },
              { key: "secondary_button_url", label: "Secondary Button URL" }
            ],
            imageFields: ["shape_image", "image"],
            repeaterFields: []
          };
        case "header":
          return {
            basicFields: [],
            buttonFields: ["contact_button_text", "contact_button_url"],
            imageFields: ["logo", "flag_ar", "flag_en", "check_icon"],
            repeaterFields: [],
            nestedMenuField: {
              key: "menu_items",
              label: "Menu Items"
            }
          };
        case "footer":
          return {
            basicFields: ["tagline", "copyright_text"],
            buttonFields: [],
            imageFields: ["logo", "shape_image"],
            repeaterFields: [],
            footerFields: {
              menuColumns: "menu_columns",
              contactInfo: "contact_info",
              social: "social"
            }
          };
        default:
          return {
            basicFields: ["title", "subtitle", "description"],
            buttonFields: hasField("button_text") ? ["button_text", "button_url"] : [],
            imageFields: hasField("background_image") ? ["background_image"] : [],
            repeaterFields: []
          };
      }
    });
    const formatLabel = (key) => {
      return key.replace(/_/g, " ").replace(/\b\w/g, (l2) => l2.toUpperCase()).replace(/Url/g, "URL").replace(/En$|Ar$/g, "");
    };
    const updateImage = (field, value) => {
      if (typeof value === "object" && value.image !== void 0) {
        formData[field] = value.image;
        if (value.alt_en) formData[`${field}_alt_en`] = value.alt_en;
        if (value.alt_ar) formData[`${field}_alt_ar`] = value.alt_ar;
      } else {
        formData[field] = value;
      }
      emit("change");
    };
    const getImageData = (field) => {
      return {
        image: formData[field] || "",
        alt_en: formData[`${field}_alt_en`] || "",
        alt_ar: formData[`${field}_alt_ar`] || ""
      };
    };
    const updateRepeater = (key, value) => {
      formData[key] = value;
      emit("change");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="sidebar-overlay" data-v-456c3f55></div><div class="edit-sidebar" data-v-456c3f55><div class="sidebar-header" data-v-456c3f55><div class="header-content" data-v-456c3f55><h2 class="sidebar-title" data-v-456c3f55>Edit Section</h2><p class="section-type" data-v-456c3f55>${ssrInterpolate(__props.section.section_type?.name_en || "Section")}</p></div><button class="close-btn" data-v-456c3f55><svg viewBox="0 0 20 20" fill="currentColor" data-v-456c3f55><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-456c3f55></path></svg></button></div><div class="sidebar-body" data-v-456c3f55><div class="language-tabs" data-v-456c3f55><button class="${ssrRenderClass(["lang-tab", { "active": currentLang.value === "en" }])}" data-v-456c3f55><img${ssrRenderAttr("src", unref(usFlag))} alt="English" class="flag-icon" data-v-456c3f55> English </button><button class="${ssrRenderClass(["lang-tab", { "active": currentLang.value === "ar" }])}" data-v-456c3f55><img${ssrRenderAttr("src", unref(saFlag))} alt="Arabic" class="flag-icon" data-v-456c3f55> Arabic </button></div><div class="content-fields" data-v-456c3f55><!--[-->`);
      ssrRenderList(getSectionFields.value.basicFields, (field) => {
        _push(`<!--[-->`);
        if (hasField(field)) {
          _push(ssrRenderComponent(RichTextEditor, {
            "model-value": getFieldValue(field),
            label: formatLabel(field),
            placeholder: `Enter ${formatLabel(field).toLowerCase()}`,
            "onUpdate:modelValue": ($event) => setFieldValue(field, $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      if (getSectionFields.value.buttonFields.length > 0) {
        _push(`<div class="field-group" data-v-456c3f55><h3 class="group-title" data-v-456c3f55>Button Settings</h3><!--[-->`);
        ssrRenderList(getSectionFields.value.buttonFields, (btnField) => {
          _push(`<!--[-->`);
          if (typeof btnField === "object") {
            _push(`<!--[-->`);
            if (btnField.key.includes("text") && hasField(btnField.key)) {
              _push(ssrRenderComponent(RichTextEditor, {
                "model-value": getFieldValue(btnField.key),
                label: btnField.label,
                placeholder: `Enter ${btnField.label.toLowerCase()}`,
                "onUpdate:modelValue": ($event) => setFieldValue(btnField.key, $event)
              }, null, _parent));
            } else if (hasField(btnField.key)) {
              _push(ssrRenderComponent(TextInput, {
                "model-value": formData[btnField.key],
                label: btnField.label,
                placeholder: `Enter ${btnField.label.toLowerCase()}`,
                type: "url",
                "onUpdate:modelValue": ($event) => {
                  formData[btnField.key] = $event;
                  emit("change");
                }
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!--[-->`);
            if (btnField.includes("text") && hasField(btnField)) {
              _push(ssrRenderComponent(RichTextEditor, {
                "model-value": getFieldValue(btnField),
                label: formatLabel(btnField),
                placeholder: `Enter ${formatLabel(btnField).toLowerCase()}`,
                "onUpdate:modelValue": ($event) => setFieldValue(btnField, $event)
              }, null, _parent));
            } else if (hasField(btnField)) {
              _push(ssrRenderComponent(TextInput, {
                "model-value": formData[btnField],
                label: formatLabel(btnField),
                placeholder: `Enter ${formatLabel(btnField).toLowerCase()}`,
                type: "url",
                "onUpdate:modelValue": ($event) => {
                  formData[btnField] = $event;
                  emit("change");
                }
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getSectionFields.value.imageFields.length > 0) {
        _push(`<div class="field-group" data-v-456c3f55><h3 class="group-title" data-v-456c3f55>Images</h3><!--[-->`);
        ssrRenderList(getSectionFields.value.imageFields, (imgField) => {
          _push(`<!--[-->`);
          if (hasField(imgField)) {
            _push(ssrRenderComponent(ImageWithAlt, {
              "model-value": getImageData(imgField),
              label: formatLabel(imgField),
              "section-type": sectionKey.value,
              "current-lang": currentLang.value,
              "show-alt-fields": imgField.includes("background") || imgField === "image",
              "onUpdate:modelValue": ($event) => updateImage(imgField, $event)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(getSectionFields.value.repeaterFields, (repeater) => {
        _push(`<div class="field-group" data-v-456c3f55>`);
        if (formData[repeater.key]) {
          _push(ssrRenderComponent(RepeaterField, {
            "model-value": formData[repeater.key],
            label: repeater.label,
            "item-label": repeater.itemLabel,
            fields: repeater.fields,
            "default-item": repeater.defaultItem,
            "section-type": sectionKey.value,
            "current-lang": currentLang.value,
            "onUpdate:modelValue": ($event) => updateRepeater(repeater.key, $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (getSectionFields.value.nestedMenuField && formData[getSectionFields.value.nestedMenuField.key]) {
        _push(`<div class="field-group" data-v-456c3f55>`);
        _push(ssrRenderComponent(NestedMenuEditor, {
          "model-value": formData[getSectionFields.value.nestedMenuField.key],
          label: getSectionFields.value.nestedMenuField.label,
          "current-lang": currentLang.value,
          "onUpdate:modelValue": ($event) => updateRepeater(getSectionFields.value.nestedMenuField.key, $event)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (getSectionFields.value.footerFields) {
        _push(`<div class="field-group" data-v-456c3f55><h3 class="group-title" data-v-456c3f55>Footer Menus &amp; Links</h3>`);
        _push(ssrRenderComponent(FooterMenuEditor, {
          "menu-columns": formData[getSectionFields.value.footerFields.menuColumns] || [],
          "contact-info": formData[getSectionFields.value.footerFields.contactInfo] || { title_en: "", title_ar: "", items: [] },
          social: formData[getSectionFields.value.footerFields.social] || { title_en: "", title_ar: "", links: [] },
          "current-lang": currentLang.value,
          "onUpdate:menuColumns": ($event) => {
            formData[getSectionFields.value.footerFields.menuColumns] = $event;
            emit("change");
          },
          "onUpdate:contactInfo": ($event) => {
            formData[getSectionFields.value.footerFields.contactInfo] = $event;
            emit("change");
          },
          "onUpdate:social": ($event) => {
            formData[getSectionFields.value.footerFields.social] = $event;
            emit("change");
          }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="sidebar-footer" data-v-456c3f55>`);
      _push(ssrRenderComponent(Button, {
        variant: "outline",
        onClick: close
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel `);
          } else {
            return [
              createTextVNode(" Cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        onClick: save
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-456c3f55${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-456c3f55${_scopeId}></path></svg> Save Changes `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "icon",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ])),
              createTextVNode(" Save Changes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/EditSectionSidebar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const EditSectionSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-456c3f55"]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditSectionSidebar
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "Toast",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success",
      // success, error, warning, info
      validator: (value) => ["success", "error", "warning", "info"].includes(value)
    },
    duration: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = ref(false);
    watch(() => props.message, (newMessage) => {
      if (newMessage) {
        visible.value = true;
        if (props.duration > 0) {
          setTimeout(() => {
            visible.value = false;
            setTimeout(() => emit("close"), 300);
          }, props.duration);
        }
      }
    }, { immediate: true });
    const icons = {
      success: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>`,
      error: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>`,
      warning: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>`,
      info: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>`
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (visible.value) {
          _push2(`<div class="${ssrRenderClass(["toast", `toast-${__props.type}`])}" data-v-662109b7><div class="toast-icon" data-v-662109b7>${icons[__props.type] ?? ""}</div><div class="toast-message" data-v-662109b7>${ssrInterpolate(__props.message)}</div><button class="toast-close" data-v-662109b7><svg viewBox="0 0 20 20" fill="currentColor" data-v-662109b7><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-662109b7></path></svg></button></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Toast.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-662109b7"]]);
const _sfc_main$j = {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeaderSection.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/PartnersSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ConceptSection.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ServicesSection.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CTASection.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/WorkSection.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/TeamSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GallerySection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FAQSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/InquirySection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FooterSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
    sectionTypes: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const showAddModal = ref(false);
    const editingSectionId = ref(null);
    const sectionsList = ref([...props.sections]);
    const sortableInstance = ref(null);
    const hasUnsavedChanges = ref(false);
    const toast = ref({ show: false, message: "", type: "success" });
    const previewLang = ref("en");
    const previewDevice = ref("desktop");
    ref(null);
    const editingSection = computed(() => {
      if (!editingSectionId.value) return null;
      return sectionsList.value.find((s2) => s2.id === editingSectionId.value);
    });
    const draggableSections = computed(() => {
      return sectionsList.value.filter((s2) => !s2.section_type.is_fixed);
    });
    const headerSection = computed(() => {
      return sectionsList.value.find((s2) => s2.section_type.key === "header");
    });
    const footerSection = computed(() => {
      return sectionsList.value.find((s2) => s2.section_type.key === "footer");
    });
    const orderedPreviewSections = computed(() => {
      const header = sectionsList.value.find((s2) => s2.section_type.key === "header");
      const footer = sectionsList.value.find((s2) => s2.section_type.key === "footer");
      const middle = sectionsList.value.filter((s2) => s2.section_type.key !== "header" && s2.section_type.key !== "footer").sort((a2, b2) => a2.order - b2.order);
      return [
        ...header ? [header] : [],
        ...middle,
        ...footer ? [footer] : []
      ];
    });
    const previewHtml = computed(() => {
      const direction = previewLang.value === "ar" ? "rtl" : "ltr";
      const lang = previewLang.value;
      let sectionsHtml = "";
      for (const section of orderedPreviewSections.value) {
        if (!section.is_active) {
          sectionsHtml += `<div class="preview-inactive-section" data-section-id="${section.id}">
                <span>${section.section_type.name_en} (Hidden)</span>
            </div>`;
          continue;
        }
        const content = section.content || {};
        const key = section.section_type?.key;
        sectionsHtml += `<div class="preview-section-wrapper" data-section-id="${section.id}" data-section-key="${key}">`;
        sectionsHtml += generateSectionHtml(key, content, lang);
        sectionsHtml += `</div>`;
      }
      return `<!DOCTYPE html>
<html lang="${lang}" dir="${direction}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css">
    <link rel="stylesheet" href="/assets/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/css/aos.css">
    <link rel="stylesheet" href="/assets/css/default.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/responsive.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .preview-section-wrapper {
            position: relative;
            cursor: pointer;
            transition: outline 0.15s;
        }
        .preview-section-wrapper:hover {
            outline: 3px solid #004F4C;
            outline-offset: -3px;
        }
        .preview-section-wrapper:hover::before {
            content: attr(data-section-key);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;
            padding: 6px 12px;
            background: #004F4C;
            color: white;
            font-size: 12px;
            font-weight: 500;
            text-transform: capitalize;
            border-bottom-right-radius: 6px;
        }
        .preview-inactive-section {
            padding: 40px;
            background: #f3f4f6;
            border: 2px dashed #d1d5db;
            text-align: center;
            color: #6b7280;
            font-style: italic;
            cursor: pointer;
        }
        .preview-inactive-section:hover {
            background: #e5e7eb;
        }
    </style>
</head>
<body class="main-area overflow-hidden">
    ${sectionsHtml}
    <script src="/assets/js/bootstrap.bundle.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script>
    <script src="/assets/js/aos.js"><\/script>
    <script>
        // Handle section clicks to communicate with parent
        document.querySelectorAll('.preview-section-wrapper, .preview-inactive-section').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const sectionId = el.dataset.sectionId;
                window.parent.postMessage({ type: 'edit-section', sectionId: parseInt(sectionId) }, '*');
            });
        });
        
        // Prevent all links from navigating
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
        
        // Initialize AOS after a slight delay to ensure DOM is ready
        setTimeout(function() {
            if (typeof AOS !== 'undefined') {
                AOS.init({ 
                    duration: 800, 
                    once: true,
                    disable: false
                });
            }
            
            // Initialize Swipers
            if (typeof Swiper !== 'undefined') {
                // Hero slide thumb
                if (document.querySelector('.hero-slide-thumb')) {
                    new Swiper('.hero-slide-thumb', {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        loop: true,
                        autoplay: { delay: 3000, disableOnInteraction: false },
                        breakpoints: {
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 }
                        }
                    });
                }
                
                // Brand logos
                if (document.querySelector('.brand-logos-slide')) {
                    new Swiper('.brand-logos-slide', {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: { delay: 2000, disableOnInteraction: false },
                        breakpoints: {
                            0: { slidesPerView: 2 },
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 }
                        }
                    });
                }
                
                // Concept thumbnails
                document.querySelectorAll('.concept-thumbnails').forEach(function(el) {
                    new Swiper(el, {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        loop: true,
                        autoplay: { delay: 2500, disableOnInteraction: false }
                    });
                });
                
                // Work slides
                if (document.querySelector('.work-single-wrap')) {
                    new Swiper('.work-single-wrap', {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: true,
                        pagination: { el: '.swiper-pagination', clickable: true }
                    });
                }
                
                // Team card wrap
                if (document.querySelector('.team-card-wrap')) {
                    new Swiper('.team-card-wrap', {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        loop: true,
                        pagination: { el: '.team-pagination', clickable: true },
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }
                    });
                }
            }
        }, 100);
    <\/script>
</body>
</html>`;
    });
    const generateSectionHtml = (key, content, lang) => {
      const c2 = content;
      const t3 = (ar, en) => lang === "ar" ? ar || en || "" : en || ar || "";
      switch (key) {
        case "header":
          return generateHeaderHtml(c2, lang, t3);
        case "hero":
        case "slider":
          return generateHeroHtml(c2, lang, t3);
        case "partners":
          return generatePartnersHtml(c2);
        case "concept":
          return generateConceptHtml(c2, lang, t3);
        case "services":
          return generateServicesHtml(c2, lang, t3);
        case "cta":
          return generateCtaHtml(c2, lang, t3);
        case "work":
        case "projects":
          return generateWorkHtml(c2, lang, t3);
        case "team":
          return generateTeamHtml(c2, lang, t3);
        case "contact":
          return generateContactHtml(c2, lang, t3);
        case "gallery":
          return generateGalleryHtml(c2, lang, t3);
        case "faq":
          return generateFaqHtml(c2, lang, t3);
        case "inquiry":
          return generateInquiryHtml(c2, lang, t3);
        case "footer":
          return generateFooterHtml(c2, lang, t3);
        default:
          return `<div class="p-5 text-center text-muted">Section: ${key}</div>`;
      }
    };
    const generateHeaderHtml = (c2, lang, t3) => {
      const menuItems = c2.menu_items || [];
      return `
    <header class="header-area" data-aos="fade-in">
        <div class="container">
            <div class="header-inner-block d-flex align-items-center justify-content-between">
                <div class="header-left-block d-flex align-items-center">
                    <div class="header-logo">
                        <a href="#"><img src="${c2.logo || "/assets/img/logo.png"}" alt="Logo" /></a>
                    </div>
                    <div class="main-menu d-none d-lg-block">
                        <nav>
                            <ul class="d-flex align-items-center">
                                ${menuItems.map((item, idx) => {
        if (!item.children || item.children.length === 0) {
          return `<li><a href="${item.url || "#"}">${t3(item.label_ar, item.label_en)}</a></li>`;
        }
        return `
                                    <li>
                                        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><i class="far fa-chevron-down"></i></span> ${t3(item.label_ar, item.label_en)}
                                        </a>
                                        <ul class="dropdown-menu">
                                            ${item.children.map((child, cIdx) => `
                                                <li><a class="dropdown-item ${cIdx === 0 ? "pt-0" : ""} ${cIdx === item.children.length - 1 ? "border-0 pb-0" : ""}" href="${child.url || "#"}">
                                                    ${t3(child.label_ar, child.label_en)} <span><i class="far fa-chevron-left"></i></span>
                                                </a></li>
                                            `).join("")}
                                        </ul>
                                    </li>`;
      }).join("")}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="header-btns d-flex align-items-center gap-2">
                    <button class="header-contact-btn d-none d-lg-inline-flex align-items-center" type="button">
                        ${t3(c2.contact_button_text_ar, c2.contact_button_text_en) || "Contact Us"} <span><i class="far fa-angle-left"></i></span>
                    </button>
                    <div class="language-select">
                        <div class="selectorwith_flag">
                            <div class="select-box">
                                <div class="select-box__current" tabindex="1">
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="lang-ar-preview" value="ar" name="language-preview" ${lang === "ar" ? "checked" : ""} />
                                        <p class="select-box__input-text"><img src="/assets/img/flag-1.png" alt="" /> عربي</p>
                                    </div>
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="lang-en-preview" value="en" name="language-preview" ${lang === "en" ? "checked" : ""} />
                                        <p class="select-box__input-text"><img src="/assets/img/flag-2.png" alt="" />English</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
    };
    const generateHeroHtml = (c2, lang, t3) => {
      const slides = c2.slides || [];
      return `
    <section class="hero-area position-relative" style="background-image: url('${c2.background_image || "/assets/img/hero-bg.png"}')">
        <div class="container">
            <div class="hero-inner-block">
                <div class="hero-title" data-aos="fade-up">
                    <h5>${t3(c2.subtitle_ar, c2.subtitle_en) || ""}</h5>
                    <h1>${t3(c2.title_ar, c2.title_en) || "Hero Title"}</h1>
                </div>
                ${slides.length > 0 ? `
                <div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300">
                    <div class="swiper-wrapper">
                        ${slides.map((slide) => `
                            <div class="swiper-slide">
                                <div class="hero-slide-card">
                                    <img class="w-100 h-100 object-fit-cover" src="${slide.image || ""}" alt="Thumb" />
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : ""}
                <div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500">
                    <p>${t3(c2.description_ar, c2.description_en) || ""}</p>
                </div>
                <div class="hero-btn d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c2.button_url || "#"}" class="common-btn d-flex align-items-center">
                        ${t3(c2.button_text_ar, c2.button_text_en) || "Get Started"} <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generatePartnersHtml = (c2, lang, t3) => {
      const partners = c2.partners || [];
      return `
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    ${partners.map((p2) => `
                        <div class="logo-items swiper-slide" data-aos="zoom-in">
                            <a href="${p2.url || "#"}"><img src="${p2.logo || p2.image || ""}" alt="${p2.name || "Partner"}" /></a>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateConceptHtml = (c2, lang, t3) => {
      const blocks = c2.blocks || [];
      const counters = c2.counters || [];
      return `
    <section class="concept-area position-relative pt-80">
        <div class="container">
            <div class="concept-area-wrapper">
                ${blocks.map((block, idx) => `
                <div class="concept-wrapper ${idx > 0 ? "second-concept-wrapper" : ""} position-relative z-1 overflow-hidden ${idx === 0 ? "" : "m-0"}">
                    ${block.shape_image ? `<div class="concept-wrapper-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${block.shape_image}" alt="Shape" /></div>` : ""}
                    <div class="row align-items-center">
                        <div class="col-lg-6 ${idx === 0 ? "order-lg-2" : ""}" data-aos="zoom-in">
                            <div class="swiper concept-thumbnails ${idx === 0 ? "ms-0" : "me-0"}">
                                <div class="swiper-wrapper">
                                    ${(block.images || []).map((img, imgIdx) => `
                                        <div class="concept-single-thumb swiper-slide ${imgIdx % 2 === 0 ? "radious-bottom-left" : "radious-top-right"}">
                                            <img class="w-100 h-100 object-fit-cover" src="${img.image || img}" alt="Thumb" />
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ${idx === 0 ? "order-lg-1" : ""}" data-aos="fade-right">
                            <div class="concept-content">
                                <h3>${t3(block.title_ar, block.title_en)}</h3>
                                ${(block.paragraphs || []).map((p2) => `<p>${t3(p2.text_ar, p2.text_en)}</p>`).join("")}
                            </div>
                        </div>
                    </div>
                </div>
                `).join("")}
                ${counters.length > 0 ? `
                <div class="counter-up-area d-flex align-items-center justify-content-center position-relative z-1">
                    ${counters.map((counter, idx) => `
                        <div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="background-image: url('/assets/img/counter-up-bg.png')" data-aos="zoom-in" data-aos-delay="${(idx + 1) * 100}">
                            <h5>${counter.value}</h5>
                            <p>${t3(counter.label_ar, counter.label_en)}</p>
                        </div>
                    `).join("")}
                </div>
                ` : ""}
            </div>
        </div>
    </section>`;
    };
    const generateServicesHtml = (c2, lang, t3) => {
      const services = c2.services || [];
      return `
    <section class="service-area position-relative overflow-hidden pb-80 z-1">
        <div class="container">
            <div class="service-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                </div>
                <div class="row">
                    ${services.map((service) => `
                        <div class="col-md-6" data-aos="fade-up">
                            <div class="service-single-card d-flex align-items-center">
                                <div class="service-card-thumb w-100">
                                    <img class="w-100 h-100 object-fit-cover" src="${service.image || "/assets/img/service-thumb-1.png"}" alt="Thumb" />
                                </div>
                                <div class="service-card-content">
                                    <h4>${t3(service.title_ar, service.title_en)}</h4>
                                    <p>${t3(service.description_ar, service.description_en)}</p>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        ${c2.shape_image ? `<div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c2.shape_image}" alt="Shape" /></div>` : ""}
    </section>`;
    };
    const generateCtaHtml = (c2, lang, t3) => {
      const cards = c2.contact_cards || [];
      return `
    <section class="cta-area overflow-hidden position-relative z-1 pt-80 pb-80">
        <div class="container">
            <div class="cta-inner-block">
                <div class="row align-items-center">
                    <div class="col-xl-5" data-aos="fade-right">
                        <div class="cta-right-block">
                            <div class="service-card-content cta-content text-end">
                                <a href="${c2.button_url || "#"}" class="cta-btn">${t3(c2.button_text_ar, c2.button_text_en) || "Contact Us"}</a>
                                <h4>${t3(c2.title_ar, c2.title_en)}</h4>
                                <p>${t3(c2.description_ar, c2.description_en)}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="cta-left-block">
                            <div class="row">
                                ${cards.map((card) => `
                                    <div class="col-sm-6" data-aos="zoom-in">
                                        <div class="cta-card d-flex align-items-center flex-column">
                                            <span class="d-flex align-items-center justify-content-center"><img src="${card.icon || ""}" alt="Icon" /></span>
                                            <h5>${t3(card.title_ar, card.title_en)}</h5>
                                            ${(card.links || []).map((link) => `<a href="${link.url || "#"}">${link.text}</a>`).join("")}
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${c2.shape_image ? `<div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c2.shape_image}" alt="Shape" /></div>` : ""}
        </div>
    </section>`;
    };
    const generateWorkHtml = (c2, lang, t3) => {
      const projects = c2.projects || [];
      return `
    <section class="work-area position-relative z-1 overflow-hidden">
        <div class="work-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${c2.shape_image || "/assets/img/service-shape.png"}" alt="Shape" />
        </div>
        <div class="container">
            <div class="work-inner-block">
                <div class="common-title text-center" data-aos="zoom-in">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                </div>
                <div class="work-wrapper">
                    <div class="work-single-card position-relative z-1">
                        <div class="swiper work-single-wrap">
                            <div class="swiper-wrapper">
                                ${projects.map((project) => `
                                    <div class="swiper-slide">
                                        <div class="work-slide-single-item" data-aos="fade-right">
                                            <div class="work-card-wrap d-flex align-items-center justify-content-between">
                                                <div class="work-card-items">
                                                    <div class="contact-card-content work-card-content">
                                                        <h4>${t3(project.title_ar, project.title_en)}</h4>
                                                        <p>${t3(project.description_ar, project.description_en)}</p>
                                                    </div>
                                                    <div class="work-card-btns ${project.btn_color_class || ""} d-flex align-items-center">
                                                        <a href="${project.learn_more_url || "#"}">${t3(project.learn_more_text_ar, project.learn_more_text_en) || "Learn More"}<span><i class="far fa-angle-left"></i></span></a>
                                                        <a href="${project.visit_url || "#"}" class="secondary-btn">${t3(project.visit_text_ar, project.visit_text_en) || "Visit Project"}<span><i class="fal fa-long-arrow-left"></i></span></a>
                                                    </div>
                                                </div>
                                                <div class="work-card-thumb">
                                                    <img src="${project.image || ""}" alt="${t3(project.title_ar, project.title_en)}" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                        ${c2.work_shape_image ? `<div class="work-card-shape position-absolute z-n1"><img src="${c2.work_shape_image}" alt="Shape" /></div>` : ""}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateTeamHtml = (c2, lang, t3) => {
      const members = c2.members || [];
      return `
    <section class="team-area">
        <div class="container">
            <div class="team-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                </div>
                <div class="swiper team-card-wrap">
                    <div class="swiper-wrapper">
                        ${members.map((member, idx) => `
                            <div class="swiper-slide team-card position-relative z-1" data-aos="zoom-in" data-aos-delay="${(idx + 2) * 100}">
                                <div class="team-card-shape position-absolute z-n1">
                                    <img class="w-100 h-100 object-fit-cover" src="${c2.shape_image || "/assets/img/team-shape.png"}" alt="Shape" />
                                </div>
                                <div class="team-thumb">
                                    <img class="w-100 h-100 object-fit-cover" src="${member.image || ""}" alt="Thumb" />
                                </div>
                                <div class="team-card-content">
                                    <h4>${t3(member.title_ar, member.title_en)}</h4>
                                    <p>${t3(member.description_ar, member.description_en)}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                    <div class="team-pagination"></div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateContactHtml = (c2, lang, t3) => {
      const cards = c2.cards || [];
      return `
    <section class="contact-area overflow-hidden" style="background-image: url('${c2.background_image || "/assets/img/contact-bg.png"}')">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            ${cards.map((card, idx) => `
                                <div class="contact-card ${idx === 1 ? "contact-middle-card" : ""} d-flex align-items-center">
                                    <div class="contact-card-icon">
                                        <img src="${card.icon || ""}" alt="Icon" />
                                    </div>
                                    <div class="contact-card-content">
                                        <h4>${t3(card.title_ar, card.title_en)}</h4>
                                        <p>${t3(card.description_ar, card.description_en)}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                    <div class="col-xl-6" data-aos="zoom-in">
                        <div class="contact-left d-flex align-items-center justify-content-start flex-column">
                            <div class="contact-logo">
                                <a href="#"><img src="${c2.contact_logo || "/assets/img/contact-logo.svg"}" alt="Logo" /></a>
                            </div>
                            <div class="contact-btn">
                                <a href="${c2.button_url || "#"}" class="common-btn d-flex align-items-center">
                                    ${t3(c2.button_text_ar, c2.button_text_en) || "Contact Us"}<span><i class="far fa-angle-left"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateGalleryHtml = (c2, lang, t3) => {
      const images = c2.images || [];
      return `
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                ${c2.shape_image ? `<div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c2.shape_image}" alt="Shape" /></div>` : ""}
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                    <p>${t3(c2.subtitle_ar, c2.subtitle_en)}</p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        ${images.map((img) => `
                            <div class="col-md-6" data-aos="zoom-in">
                                <div class="gallery-thumb position-relative">
                                    <img src="${img.image || ""}" alt="Thumb" />
                                    <div class="gallery-thumb-text position-absolute">
                                        <h3>${img.title || ""}</h3>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ${c2.button_text_en ? `
                <div class="gallery-button d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c2.button_url || "#"}" class="common-btn d-flex align-items-center">
                        ${t3(c2.button_text_ar, c2.button_text_en)} <span><i class="far fa-angle-left"></i></span>
                    </a>
                </div>
                ` : ""}
            </div>
        </div>
    </section>`;
    };
    const generateFaqHtml = (c2, lang, t3) => {
      const faqs = c2.faqs || [];
      return `
    <section class="faq-area position-relative z-1">
        <div class="faq-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${c2.shape_image || "/assets/img/service-shape.png"}" alt="Shape" />
        </div>
        <div class="container">
            <div class="faq-inner-block">
                <div class="common-title text-center mb-40" data-aos="fade-up">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                    <p>${t3(c2.subtitle_ar, c2.subtitle_en)}</p>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion faq-accordion" id="faqAccordionPreview">
                        ${faqs.map((faq, idx) => `
                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
                                <h2 class="accordion-header">
                                    <button class="accordion-button ${idx !== 1 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 1 ? "true" : "false"}" aria-controls="faqCollapse${idx}">
                                        ${t3(faq.question_ar, faq.question_en)}
                                    </button>
                                </h2>
                                <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 1 ? "show" : ""}" data-bs-parent="#faqAccordionPreview">
                                    <div class="accordion-body">
                                        ${t3(faq.answer_ar, faq.answer_en)}
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateInquiryHtml = (c2, lang, t3) => {
      return `
    <section class="inquiry-area">
        <div class="container">
            <div class="inquiry-inner-block overflow-hidden position-relative z-1">
                <div class="inquiry-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-7" data-aos="fade-right">
                            <div class="inquiry-right-block">
                                <div class="inquiry-content">
                                    <h4>${t3(c2.title_ar, c2.title_en)}</h4>
                                    <p>${t3(c2.description_ar, c2.description_en)}</p>
                                </div>
                                <div class="inquiry-btns d-flex align-items-center">
                                    <a href="${c2.primary_button_url || "#"}" class="secondary-btn">
                                        ${t3(c2.primary_button_text_ar, c2.primary_button_text_en)} <span><i class="fal fa-angle-left"></i></span>
                                    </a>
                                    <a href="${c2.secondary_button_url || "#"}">
                                        ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)} <span><i class="fab fa-whatsapp"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5" data-aos="zoom-in">
                            <div class="inquiry-image">
                                ${c2.image ? `<img src="${c2.image}" alt="Image" />` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                ${c2.shape_image ? `<div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c2.shape_image}" alt="Shape" /></div>` : ""}
            </div>
        </div>
    </section>`;
    };
    const generateFooterHtml = (c2, lang, t3) => {
      const menuColumns = c2.menu_columns || [];
      const contactInfo = c2.contact_info || {};
      const social = c2.social || {};
      return `
    <footer class="footer-area">
        <div class="container">
            <div class="footer-inner-block position-relative z-1 overflow-hidden">
                <div class="footer-top-wrapper">
                    <div class="row">
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-identity">
                                <div class="footer-logo">
                                    <a href="#"><img src="${c2.logo || "/assets/img/logo.png"}" alt="Logo" /></a>
                                </div>
                                <div class="footer-content">
                                    <p>${t3(c2.tagline_ar, c2.tagline_en)}</p>
                                </div>
                            </div>
                        </div>
                        ${menuColumns.map((col) => `
                            <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                                <div class="footer-menu-list">
                                    <div class="footer-inner-title">
                                        <h4>${t3(col.title_ar, col.title_en)}</h4>
                                    </div>
                                    <ul>
                                        ${(col.links || []).map((link) => `
                                            <li><a href="${link.url || "#"}">${t3(link.label_ar, link.label_en)}</a></li>
                                        `).join("")}
                                    </ul>
                                </div>
                            </div>
                        `).join("")}
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-menu-list">
                                <div class="footer-inner-title">
                                    <h4>${t3(contactInfo.title_ar, contactInfo.title_en)}</h4>
                                </div>
                                <ul>
                                    ${(contactInfo.items || []).map((item) => `
                                        <li>
                                            <a href="${item.url || "#"}" class="d-flex align-items-center">
                                                <span class="d-flex align-items-center justify-content-between"><img src="${item.icon}" alt="Icon" /></span> ${item.text}
                                            </a>
                                        </li>
                                    `).join("")}
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2" data-aos="fade-in" data-aos-delay="300">
                            <div class="footer-social-block">
                                <div class="footer-inner-title">
                                    <h4>${t3(social.title_ar, social.title_en)}</h4>
                                </div>
                                <div class="social-icons d-flex align-items-center">
                                    ${(social.links || []).map((link) => `
                                        <a href="${link.url || "#"}" class="d-flex align-items-center justify-content-center"><img src="${link.icon}" alt="Icon" /></a>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-text text-center">
                    <p>${c2.copyright_text || ""}</p>
                </div>
                ${c2.shape_image ? `<div class="footer-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${c2.shape_image}" alt="Shape" /></div>` : ""}
            </div>
        </div>
    </footer>`;
    };
    const availableSectionTypes = computed(() => {
      return props.sectionTypes.filter((st) => !st.is_fixed);
    });
    const openAddModal = () => {
      showAddModal.value = true;
    };
    const closeAddModal = () => {
      showAddModal.value = false;
    };
    const editSection = (sectionId) => {
      editingSectionId.value = sectionId;
    };
    const closeEditSidebar = () => {
      editingSectionId.value = null;
    };
    const addSection = (sectionTypeId) => {
      router.post(
        route("pages.builder.sections.store", props.page.id),
        { section_type_id: sectionTypeId },
        {
          preserveScroll: true,
          onSuccess: (page) => {
            sectionsList.value = page.props.sections;
            showToast("Section added successfully", "success");
            closeAddModal();
          },
          onError: (errors) => {
            showToast("Failed to add section", "error");
          }
        }
      );
    };
    const updateSection = (sectionId, content) => {
      const section = sectionsList.value.find((s2) => s2.id === sectionId);
      if (!section) return;
      router.put(
        route("pages.builder.sections.update", [props.page.id, sectionId]),
        { content },
        {
          preserveScroll: true,
          preserveState: true,
          onSuccess: (page) => {
            sectionsList.value = page.props.sections;
            showToast("Section updated successfully", "success");
            hasUnsavedChanges.value = false;
          },
          onError: (errors) => {
            showToast("Failed to update section", "error");
          }
        }
      );
    };
    const reorderSections = (newOrder) => {
      router.post(
        route("pages.builder.sections.reorder", props.page.id),
        { sections: newOrder },
        {
          preserveScroll: true,
          preserveState: true,
          onSuccess: (page) => {
            sectionsList.value = page.props.sections;
          },
          onError: () => {
            showToast("Failed to reorder sections", "error");
            sectionsList.value = [...props.sections];
          }
        }
      );
    };
    const openPreview = () => {
      window.open(route("website.home"), "_blank");
    };
    const showToast = (message, type = "success") => {
      toast.value = { show: true, message, type };
    };
    const closeToast = () => {
      toast.value.show = false;
    };
    const initSortable = () => {
      const container = document.querySelector(".sections-list-sortable");
      if (!container) return;
      sortableInstance.value = Sortable.create(container, {
        animation: 150,
        handle: ".drag-handle",
        ghostClass: "sortable-ghost",
        dragClass: "sortable-drag",
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (oldIndex === newIndex) return;
          const draggableItems = [...draggableSections.value];
          const [movedItem] = draggableItems.splice(oldIndex, 1);
          draggableItems.splice(newIndex, 0, movedItem);
          const newOrder = draggableItems.map((section, index) => ({
            id: section.id,
            order: index + 1
          }));
          reorderSections(newOrder);
        }
      });
    };
    const beforeUnload = (e2) => {
      if (hasUnsavedChanges.value) {
        e2.preventDefault();
        e2.returnValue = "";
      }
    };
    const handleIframeMessage = (event) => {
      if (event.data?.type === "edit-section" && event.data?.sectionId) {
        editSection(event.data.sectionId);
      }
    };
    onMounted(() => {
      nextTick(() => {
        initSortable();
      });
      window.addEventListener("beforeunload", beforeUnload);
      window.addEventListener("message", handleIframeMessage);
    });
    onUnmounted(() => {
      window.removeEventListener("beforeunload", beforeUnload);
      window.removeEventListener("message", handleIframeMessage);
      if (sortableInstance.value) {
        sortableInstance.value.destroy();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-builder" }, _attrs))} data-v-96d00499><div class="builder-header" data-v-96d00499><div class="header-left" data-v-96d00499><h1 class="page-title" data-v-96d00499>Page Builder</h1><div class="page-info" data-v-96d00499><span class="page-name" data-v-96d00499>${ssrInterpolate(__props.page.name_en)}</span><span class="separator" data-v-96d00499>•</span><span class="page-slug" data-v-96d00499>/${ssrInterpolate(__props.page.url_slug_en)}</span></div></div><div class="header-right" data-v-96d00499>`);
      _push(ssrRenderComponent(Button, {
        variant: "outline",
        size: "md",
        onClick: openPreview
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96d00499${_scopeId}><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-96d00499${_scopeId}></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-96d00499${_scopeId}></path></svg> Preview `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "icon",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                  "clip-rule": "evenodd"
                })
              ])),
              createTextVNode(" Preview ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        size: "md"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96d00499${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-96d00499${_scopeId}></path></svg> Save `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "icon",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ])),
              createTextVNode(" Save ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="builder-content" data-v-96d00499><div class="sections-panel" data-v-96d00499><div class="panel-header" data-v-96d00499><h2 class="panel-title" data-v-96d00499>Customize Sections</h2>`);
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        size: "sm",
        onClick: openAddModal
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96d00499${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-96d00499${_scopeId}></path></svg> Add New `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "icon",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                  "clip-rule": "evenodd"
                })
              ])),
              createTextVNode(" Add New ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sections-list" data-v-96d00499><div class="sections-list-sortable" data-v-96d00499><!--[-->`);
      ssrRenderList(draggableSections.value, (section) => {
        _push(`<div class="${ssrRenderClass(["section-item", { "section-inactive": !section.is_active }])}" data-v-96d00499><div class="section-drag drag-handle" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" data-v-96d00499></path></svg></div><div class="section-info" data-v-96d00499><span class="section-name" data-v-96d00499>${ssrInterpolate(section.section_type.name_en)}</span></div><div class="section-actions" data-v-96d00499><button class="action-btn" title="Edit" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96d00499></path></svg></button><button class="action-btn" title="Delete" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-96d00499></path></svg></button><button class="action-btn" title="Duplicate" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" data-v-96d00499></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" data-v-96d00499></path></svg></button><button class="${ssrRenderClass(["action-btn", "toggle-btn", { "active": section.is_active }])}"${ssrRenderAttr("title", section.is_active ? "Hide" : "Show")} data-v-96d00499>`);
        if (section.is_active) {
          _push(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-96d00499></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-96d00499></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" data-v-96d00499></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" data-v-96d00499></path></svg>`);
        }
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div><div class="fixed-sections" data-v-96d00499><div class="fixed-section-label" data-v-96d00499>Fixed Sections</div>`);
      if (headerSection.value) {
        _push(`<div class="section-item section-fixed" data-v-96d00499><div class="section-info" data-v-96d00499><span class="section-name" data-v-96d00499>${ssrInterpolate(headerSection.value.section_type.name_en)}</span></div><div class="section-actions" data-v-96d00499><button class="action-btn" title="Edit" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96d00499></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (footerSection.value) {
        _push(`<div class="section-item section-fixed" data-v-96d00499><div class="section-info" data-v-96d00499><span class="section-name" data-v-96d00499>${ssrInterpolate(footerSection.value.section_type.name_en)}</span></div><div class="section-actions" data-v-96d00499><button class="action-btn" title="Edit" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96d00499></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="preview-panel" data-v-96d00499><div class="preview-header" data-v-96d00499><h2 class="preview-title" data-v-96d00499>Preview</h2><div class="preview-actions" data-v-96d00499><div class="preview-lang-toggle" data-v-96d00499><button class="${ssrRenderClass(["lang-btn", { active: previewLang.value === "en" }])}" data-v-96d00499>EN</button><button class="${ssrRenderClass(["lang-btn", { active: previewLang.value === "ar" }])}" data-v-96d00499>AR</button></div><button class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "desktop" }])}" title="Desktop" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" data-v-96d00499></path></svg></button><button class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "tablet" }])}" title="Tablet" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-v-96d00499></path></svg></button><button class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "mobile" }])}" title="Mobile" data-v-96d00499><svg viewBox="0 0 20 20" fill="currentColor" data-v-96d00499><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-v-96d00499></path></svg></button></div></div><div class="preview-content" data-v-96d00499><div class="${ssrRenderClass(["preview-frame-container", `preview-${previewDevice.value}`])}" data-v-96d00499><iframe class="preview-iframe"${ssrRenderAttr("srcdoc", previewHtml.value)} frameborder="0" data-v-96d00499></iframe></div></div></div></div>`);
      _push(ssrRenderComponent(AddSectionModal, {
        show: showAddModal.value,
        "section-types": availableSectionTypes.value,
        onClose: closeAddModal,
        onAdd: addSection
      }, null, _parent));
      if (editingSection.value) {
        _push(ssrRenderComponent(EditSectionSidebar, {
          section: editingSection.value,
          "section-type": __props.sectionTypes.find((st) => st.id === editingSection.value.section_type_id),
          onClose: closeEditSidebar,
          onUpdate: updateSection,
          onChange: ($event) => hasUnsavedChanges.value = true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (toast.value.show) {
        _push(ssrRenderComponent(Toast, {
          message: toast.value.message,
          type: toast.value.type,
          onClose: closeToast
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-96d00499"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9ec1ea87"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7109a24a"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const itemsPerPage = 6;
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-pages" }, _attrs))} data-v-95112539><div class="page-header" data-v-95112539><h1 class="page-title" data-v-95112539>All Pages</h1>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("pages.create"),
        class: "btn-primary"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539${_scopeId}><path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-95112539${_scopeId}></path></svg> Add New `);
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
      _push(`</div><div class="table-container card" data-v-95112539><table class="data-table" data-v-95112539><thead data-v-95112539><tr data-v-95112539><th class="checkbox-column" data-v-95112539><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(Array.isArray(selectAll.value) ? ssrLooseContain(selectAll.value, null) : selectAll.value) ? " checked" : ""} data-v-95112539></th><th class="name-column" data-v-95112539><div class="th-content sortable" data-v-95112539> Pages Name <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path></svg></div></th><th class="date-column" data-v-95112539><div class="th-content sortable" data-v-95112539> Last Edit Date <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path></svg></div></th><th class="languages-column" data-v-95112539></th><th class="actions-column" data-v-95112539>Actions</th></tr></thead><tbody data-v-95112539><!--[-->`);
      ssrRenderList(paginatedPages.value, (page) => {
        _push(`<tr data-v-95112539><td class="checkbox-column" data-v-95112539><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(isPageSelected(page.id)) ? " checked" : ""} data-v-95112539></td><td class="name-column" data-v-95112539><span class="page-name" data-v-95112539>${ssrInterpolate(page.name)}</span></td><td class="date-column" data-v-95112539><span class="date-text" data-v-95112539>${ssrInterpolate(page.lastEditDate)}</span></td><td class="languages-column" data-v-95112539><div class="language-badges" data-v-95112539>`);
        if (page.hasArabic) {
          _push(`<button class="badge badge-sa" data-v-95112539><img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="flag-icon" data-v-95112539> Edit </button>`);
        } else {
          _push(`<!---->`);
        }
        if (page.hasEnglish) {
          _push(`<button class="badge badge-en" data-v-95112539><img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="flag-icon" data-v-95112539> Edit </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="actions-column" data-v-95112539><div class="action-buttons" data-v-95112539><button class="btn-icon btn-primary-icon" title="Builder" data-v-95112539><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" stroke-width="1.5" data-v-95112539></path><path d="M3 7h14M7 3v14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-95112539></path></svg></button><button class="btn-icon" title="Edit" data-v-95112539><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M14.166 2.5L17.5 5.83333L6.66667 16.6667H3.33334V13.3333L14.166 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path></svg></button><button class="btn-icon" title="Delete" data-v-95112539><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path><path d="M6.66666 5V3.33333C6.66666 2.89131 6.84225 2.46738 7.15481 2.15482C7.46737 1.84226 7.8913 1.66667 8.33332 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5H15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path></svg></button><button class="btn-icon" title="Duplicate" data-v-95112539><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-95112539><path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path><path d="M4.16666 12.5H3.33332C2.8913 12.5 2.46737 12.3244 2.15481 12.0118C1.84225 11.6993 1.66666 11.2754 1.66666 10.8333V3.33333C1.66666 2.89131 1.84225 2.46738 2.15481 2.15482C2.46737 1.84226 2.8913 1.66667 3.33332 1.66667H10.8333C11.2753 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-95112539></path></svg></button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="pagination-container" data-v-95112539><p class="pagination-info" data-v-95112539>${ssrInterpolate(paginationInfo.value)}</p><div class="pagination" data-v-95112539><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-95112539> Previous </button><!--[-->`);
      ssrRenderList(pageNumbers.value, (page) => {
        _push(`<button class="${ssrRenderClass([{ "active": page === currentPage.value }, "pagination-number"])}" data-v-95112539>${ssrInterpolate(page)}</button>`);
      });
      _push(`<!--]--><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-95112539> Next </button></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-95112539"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-388636fb"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
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
        description: "",
        og_title: "",
        og_description: "",
        og_image: null,
        canonical_url: "",
        hreflang: {}
      })
    },
    seo: {
      type: Object,
      default: () => ({
        canonical_url: "",
        hreflang: {},
        robots: "index, follow"
      })
    },
    jsonLdSchema: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const isRtl = computed(() => props.lang === "ar");
    const direction = computed(() => isRtl.value ? "rtl" : "ltr");
    const jsonLdContent = computed(() => {
      if (!props.jsonLdSchema || props.jsonLdSchema.length === 0) {
        return null;
      }
      if (props.jsonLdSchema.length === 1) {
        return JSON.stringify(props.jsonLdSchema[0]);
      }
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": props.jsonLdSchema.map((schema) => {
          const { "@context": context, ...rest } = schema;
          return rest;
        })
      });
    });
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
    let jsonLdScriptElement = null;
    const injectJsonLd = () => {
      if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
      }
      if (jsonLdContent.value) {
        jsonLdScriptElement = document.createElement("script");
        jsonLdScriptElement.type = "application/ld+json";
        jsonLdScriptElement.textContent = jsonLdContent.value;
        document.head.appendChild(jsonLdScriptElement);
      }
    };
    onMounted(async () => {
      document.documentElement.setAttribute("dir", direction.value);
      document.documentElement.setAttribute("lang", props.lang);
      injectJsonLd();
      await loadScript("/assets/js/bootstrap.bundle.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js");
      await loadScript("/assets/js/aos.js");
      await loadScript("/assets/js/main.js");
    });
    watch(() => props.jsonLdSchema, () => {
      injectJsonLd();
    }, { deep: true });
    onUnmounted(() => {
      if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.page.title)}</title><meta name="description"${ssrRenderAttr("content", __props.page.description)}${_scopeId}><meta charset="UTF-8"${_scopeId}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId}><meta name="robots"${ssrRenderAttr("content", __props.seo.robots || "index, follow")}${_scopeId}>`);
            if (__props.seo.canonical_url) {
              _push2(`<link rel="canonical"${ssrRenderAttr("href", __props.seo.canonical_url)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.seo.hreflang?.en) {
              _push2(`<link rel="alternate" hreflang="en"${ssrRenderAttr("href", __props.seo.hreflang.en)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.seo.hreflang?.ar) {
              _push2(`<link rel="alternate" hreflang="ar"${ssrRenderAttr("href", __props.seo.hreflang.ar)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.seo.hreflang?.["x-default"]) {
              _push2(`<link rel="alternate" hreflang="x-default"${ssrRenderAttr("href", __props.seo.hreflang["x-default"])}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta property="og:type" content="website"${_scopeId}><meta property="og:title"${ssrRenderAttr("content", __props.page.og_title || __props.page.title)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.page.og_description || __props.page.description)}${_scopeId}>`);
            if (__props.seo.canonical_url) {
              _push2(`<meta property="og:url"${ssrRenderAttr("content", __props.seo.canonical_url)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.page.og_image) {
              _push2(`<meta property="og:image"${ssrRenderAttr("content", __props.page.og_image)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta property="og:locale"${ssrRenderAttr("content", __props.lang === "ar" ? "ar_SA" : "en_US")}${_scopeId}><meta property="og:locale:alternate"${ssrRenderAttr("content", __props.lang === "ar" ? "en_US" : "ar_SA")}${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", __props.page.og_title || __props.page.title)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.page.og_description || __props.page.description)}${_scopeId}>`);
            if (__props.page.og_image) {
              _push2(`<meta name="twitter:image"${ssrRenderAttr("content", __props.page.og_image)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"${_scopeId}><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"${_scopeId}><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"${_scopeId}><link rel="stylesheet" href="/assets/css/bootstrap.min.css"${_scopeId}><link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/all.min.css"${_scopeId}><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/aos.css"${_scopeId}><link rel="stylesheet" href="/assets/css/default.css"${_scopeId}><link rel="stylesheet" href="/assets/css/style.css"${_scopeId}><link rel="stylesheet" href="/assets/css/responsive.css"${_scopeId}>`);
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
              createVNode("meta", {
                name: "robots",
                content: __props.seo.robots || "index, follow"
              }, null, 8, ["content"]),
              __props.seo.canonical_url ? (openBlock(), createBlock("link", {
                key: 0,
                rel: "canonical",
                href: __props.seo.canonical_url
              }, null, 8, ["href"])) : createCommentVNode("", true),
              __props.seo.hreflang?.en ? (openBlock(), createBlock("link", {
                key: 1,
                rel: "alternate",
                hreflang: "en",
                href: __props.seo.hreflang.en
              }, null, 8, ["href"])) : createCommentVNode("", true),
              __props.seo.hreflang?.ar ? (openBlock(), createBlock("link", {
                key: 2,
                rel: "alternate",
                hreflang: "ar",
                href: __props.seo.hreflang.ar
              }, null, 8, ["href"])) : createCommentVNode("", true),
              __props.seo.hreflang?.["x-default"] ? (openBlock(), createBlock("link", {
                key: 3,
                rel: "alternate",
                hreflang: "x-default",
                href: __props.seo.hreflang["x-default"]
              }, null, 8, ["href"])) : createCommentVNode("", true),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:title",
                content: __props.page.og_title || __props.page.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.page.og_description || __props.page.description
              }, null, 8, ["content"]),
              __props.seo.canonical_url ? (openBlock(), createBlock("meta", {
                key: 4,
                property: "og:url",
                content: __props.seo.canonical_url
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.page.og_image ? (openBlock(), createBlock("meta", {
                key: 5,
                property: "og:image",
                content: __props.page.og_image
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                property: "og:locale",
                content: __props.lang === "ar" ? "ar_SA" : "en_US"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:locale:alternate",
                content: __props.lang === "ar" ? "en_US" : "ar_SA"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: __props.page.og_title || __props.page.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.page.og_description || __props.page.description
              }, null, 8, ["content"]),
              __props.page.og_image ? (openBlock(), createBlock("meta", {
                key: 6,
                name: "twitter:image",
                content: __props.page.og_image
              }, null, 8, ["content"])) : createCommentVNode("", true),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/WebsiteLayout.vue");
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
    },
    seo: {
      type: Object,
      default: () => ({})
    },
    jsonLdSchema: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const sectionComponents = {
      "header": _sfc_main$j,
      "hero": _sfc_main$i,
      "partners": _sfc_main$h,
      "concept": _sfc_main$g,
      "services": _sfc_main$f,
      "cta": _sfc_main$e,
      "work": _sfc_main$d,
      "projects": _sfc_main$d,
      // Alias for seeder key
      "team": _sfc_main$c,
      "contact": _sfc_main$b,
      "gallery": _sfc_main$a,
      "faq": _sfc_main$9,
      "inquiry": _sfc_main$8,
      "footer": _sfc_main$7
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        lang: __props.lang,
        page: __props.page,
        seo: __props.seo,
        jsonLdSchema: __props.jsonLdSchema
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
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_0, "./Pages/Auth/Login.vue": __vite_glob_0_1, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_2, "./Pages/Dashboard.vue": __vite_glob_0_3, "./Pages/PageBuilder/AddSectionModal.vue": __vite_glob_0_4, "./Pages/PageBuilder/EditSectionSidebar.vue": __vite_glob_0_5, "./Pages/PageBuilder/Index.vue": __vite_glob_0_6, "./Pages/Pages/Create.vue": __vite_glob_0_7, "./Pages/Pages/Edit.vue": __vite_glob_0_8, "./Pages/Pages/Index.vue": __vite_glob_0_9, "./Pages/Profile/Edit.vue": __vite_glob_0_10, "./Pages/Website/Index.vue": __vite_glob_0_11 });
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
