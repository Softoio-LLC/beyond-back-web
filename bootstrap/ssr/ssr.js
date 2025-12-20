import { mergeProps, useSSRContext, unref, ref, computed, onMounted, onUnmounted, withCtx, createVNode, createBlock, openBlock, createCommentVNode, toDisplayString, watch, createTextVNode, Fragment, renderList, withModifiers, Teleport, Transition, defineAsyncComponent, nextTick, reactive, resolveDynamicComponent, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderDynamicModel, ssrRenderComponent, ssrRenderList, ssrLooseEqual, ssrRenderStyle, ssrRenderTeleport, ssrRenderVNode } from "vue/server-renderer";
import { u as useForm, a as usePage, l as link_default, h as head_default, c as createInertiaApp } from "./assets/vendor-vue-DMohnwHF.js";
import { router } from "@inertiajs/core";
import Sortable from "sortablejs";
import createServer from "@inertiajs/core/server";
import { renderToString } from "@vue/server-renderer";
import "lodash-es";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$Z = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-[#f6fbf7] via-[#eff6f1] to-[#dfeee5] text-gray-800" }, _attrs))}><div class="min-h-screen flex items-center justify-center px-4"><div class="w-full max-w-md bg-white/95 backdrop-blur-sm border border-[#dbe9df] shadow-xl shadow-[#0b8a4610] rounded-2xl px-8 py-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const AuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$Y = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = /* @__PURE__ */ Object.assign({ layout: AuthLayout }, {
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
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-db7ff772"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {
  __name: "DashboardLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const mobileMenuOpen = ref(false);
    const userMenuOpen = ref(false);
    const settingsMenuOpen = ref(false);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const user = computed(() => page.props.auth?.user);
    const userInitial = computed(() => {
      if (user.value?.name) {
        return user.value.name.charAt(0).toUpperCase();
      }
      return "U";
    });
    const unreadContactsCount = computed(() => page.props.unreadContactsCount || 0);
    const menuItems = [
      {
        name: "Dashboard",
        icon: "dashboard",
        route: "dashboard"
      },
      {
        name: "Pages",
        icon: "pages",
        route: "pages.index"
      },
      {
        name: "Contacts",
        icon: "contacts",
        route: "contacts.index",
        badge: () => unreadContactsCount.value
      }
    ];
    const settingsItems = [
      {
        name: "Custom Code",
        route: "settings.custom-code",
        description: "Header & footer scripts"
      },
      {
        name: "Email Settings",
        route: "settings.email",
        description: "SMTP & notifications"
      }
    ];
    const isActive = (routeName) => {
      return route().current(routeName);
    };
    const isSettingsActive = computed(() => {
      return settingsItems.some((item) => route().current(item.route));
    });
    const closeAllMenus = (event) => {
      const userMenuElement = document.querySelector(".user-menu");
      const settingsMenuElement = document.querySelector(".settings-dropdown-wrapper");
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      if (userMenuElement && !userMenuElement.contains(event.target)) {
        userMenuOpen.value = false;
      }
      if (settingsMenuElement && !settingsMenuElement.contains(event.target)) {
        settingsMenuOpen.value = false;
      }
      if (mobileMenuBtn && !mobileMenuBtn.contains(event.target) && !event.target.closest(".mobile-nav")) {
        mobileMenuOpen.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", closeAllMenus);
    });
    onUnmounted(() => {
      document.removeEventListener("click", closeAllMenus);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-wrapper" }, _attrs))} data-v-0451e41a><header class="navbar" data-v-0451e41a><div class="navbar-container" data-v-0451e41a>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: "/",
        class: "logo-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-0451e41a${_scopeId}><svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a${_scopeId}><rect width="40" height="40" rx="8" fill="#004F4C" data-v-0451e41a${_scopeId}></rect><path d="M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26V14Z" fill="white" data-v-0451e41a${_scopeId}></path><path d="M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V20C28 21.1046 27.1046 22 26 22H20C18.8954 22 18 21.1046 18 20V14Z" fill="#E3ECEB" data-v-0451e41a${_scopeId}></path></svg><span class="logo-text" data-v-0451e41a${_scopeId}><span class="logo-beyond" data-v-0451e41a${_scopeId}>BEYOND</span><span class="logo-tech" data-v-0451e41a${_scopeId}>TECHNOLOGY</span></span></div>`);
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
                createVNode("span", { class: "logo-text" }, [
                  createVNode("span", { class: "logo-beyond" }, "BEYOND"),
                  createVNode("span", { class: "logo-tech" }, "TECHNOLOGY")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="desktop-nav" data-v-0451e41a><ul class="nav-list" data-v-0451e41a><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<li class="nav-item" data-v-0451e41a>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route(item.route),
          class: ["nav-link", { "active": isActive(item.route) }]
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon === "dashboard") {
                _push2(`<svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a${_scopeId}><path d="M3 10L10 3L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path><path d="M5 8V16C5 16.5523 5.44772 17 6 17H8C8.55228 17 9 16.5523 9 16V12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H14C14.5523 17 15 16.5523 15 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "pages") {
                _push2(`<svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a${_scopeId}><path d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path><path d="M11 2V6C11 6.55228 11.4477 7 12 7H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path><path d="M7 10H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0451e41a${_scopeId}></path><path d="M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0451e41a${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "menus") {
                _push2(`<svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a${_scopeId}><path d="M3 5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0451e41a${_scopeId}></path><path d="M3 10H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0451e41a${_scopeId}></path><path d="M3 15H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-0451e41a${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.icon === "contacts") {
                _push2(`<svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a${_scopeId}><path d="M17 14V16C17 16.5304 16.7893 17.0391 16.4142 17.4142C16.0391 17.7893 15.5304 18 15 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path><path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path><path d="M3 14C3 12.9391 3.42143 11.9217 4.17157 11.1716C4.92172 10.4214 5.93913 10 7 10H13C14.0609 10 15.0783 10.4214 15.8284 11.1716C16.5786 11.9217 17 12.9391 17 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="nav-text" data-v-0451e41a${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              if (item.badge && item.badge() > 0) {
                _push2(`<span class="nav-badge" data-v-0451e41a${_scopeId}>${ssrInterpolate(item.badge())}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                item.icon === "dashboard" ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: "nav-icon",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M3 10L10 3L17 10",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M5 8V16C5 16.5523 5.44772 17 6 17H8C8.55228 17 9 16.5523 9 16V12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H14C14.5523 17 15 16.5523 15 16V8",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])) : createCommentVNode("", true),
                item.icon === "pages" ? (openBlock(), createBlock("svg", {
                  key: 1,
                  class: "nav-icon",
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
                item.icon === "menus" ? (openBlock(), createBlock("svg", {
                  key: 2,
                  class: "nav-icon",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M3 5H17",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("path", {
                    d: "M3 10H17",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("path", {
                    d: "M3 15H12",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ])) : createCommentVNode("", true),
                item.icon === "contacts" ? (openBlock(), createBlock("svg", {
                  key: 3,
                  class: "nav-icon",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M17 14V16C17 16.5304 16.7893 17.0391 16.4142 17.4142C16.0391 17.7893 15.5304 18 15 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V14",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M3 14C3 12.9391 3.42143 11.9217 4.17157 11.1716C4.92172 10.4214 5.93913 10 7 10H13C14.0609 10 15.0783 10.4214 15.8284 11.1716C16.5786 11.9217 17 12.9391 17 14",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])) : createCommentVNode("", true),
                createVNode("span", { class: "nav-text" }, toDisplayString(item.name), 1),
                item.badge && item.badge() > 0 ? (openBlock(), createBlock("span", {
                  key: 4,
                  class: "nav-badge"
                }, toDisplayString(item.badge()), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li class="nav-item settings-dropdown-wrapper" data-v-0451e41a><button class="${ssrRenderClass([{ "active": isSettingsActive.value }, "nav-link settings-trigger"])}" data-v-0451e41a><svg class="nav-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path><path d="M16.1667 12.5C16.0557 12.7513 16.0226 13.0302 16.0716 13.3005C16.1206 13.5708 16.2495 13.8203 16.4417 14.0167L16.4917 14.0667C16.6466 14.2214 16.7695 14.4053 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4917 16.425C16.337 16.5798 16.1531 16.7027 15.9508 16.7866C15.7485 16.8705 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8705 14.6743 16.7866C14.472 16.7027 14.2881 16.5798 14.1333 16.425L14.0833 16.375C13.887 16.1828 13.6375 16.0539 13.3672 16.0049C13.0969 15.9559 12.818 15.989 12.5667 16.1C12.3203 16.2056 12.1124 16.3833 11.9704 16.6094C11.8284 16.8355 11.7588 17.0994 11.7708 17.3667V17.5C11.7708 17.942 11.5952 18.3659 11.2826 18.6785C10.97 18.9911 10.5462 19.1667 10.1042 19.1667C9.66215 19.1667 9.23823 18.9911 8.92564 18.6785C8.61304 18.3659 8.4375 17.942 8.4375 17.5V17.4083C8.42221 17.133 8.33992 16.8655 8.1982 16.6342C8.05649 16.4029 7.85965 16.216 7.62502 16.0917C7.37373 15.9806 7.09481 15.9476 6.82453 15.9966C6.55424 16.0456 6.30476 16.1744 6.10834 16.3667L6.05834 16.4167C5.90358 16.5715 5.71973 16.6944 5.5174 16.7783C5.31507 16.8622 5.09822 16.9055 4.87917 16.9055C4.66011 16.9055 4.44327 16.8622 4.24094 16.7783C4.03861 16.6944 3.85475 16.5715 3.7 16.4167C3.54512 16.2619 3.42225 16.0781 3.33834 15.8757C3.25443 15.6734 3.21113 15.4565 3.21113 15.2375C3.21113 15.0184 3.25443 14.8016 3.33834 14.5993C3.42225 14.3969 3.54512 14.2131 3.7 14.0583L3.75 14.0083C3.94221 13.8119 4.07108 13.5624 4.12009 13.2921C4.16909 13.0218 4.13605 12.743 4.02502 12.4917C3.9194 12.2453 3.74172 12.0373 3.51561 11.8953C3.28951 11.7533 3.02556 11.6838 2.75834 11.6958H2.62502C2.18298 11.6958 1.75906 11.5203 1.44646 11.2077C1.13387 10.8951 0.958344 10.4711 0.958344 10.0292C0.958344 9.58713 1.13387 9.1632 1.44646 8.85061C1.75906 8.53801 2.18298 8.36248 2.62502 8.36248H2.71668C2.99197 8.34719 3.25952 8.2649 3.49081 8.12318C3.7221 7.98147 3.90899 7.78463 4.03334 7.55C4.14438 7.29871 4.17741 7.01979 4.12841 6.7495C4.07941 6.47922 3.95054 6.22974 3.75834 6.03331L3.70834 5.98331C3.55346 5.82856 3.43059 5.6447 3.34668 5.44237C3.26277 5.24004 3.21947 5.02319 3.21947 4.80414C3.21947 4.58509 3.26277 4.36824 3.34668 4.16591C3.43059 3.96358 3.55346 3.77973 3.70834 3.62498C3.8631 3.4701 4.04695 3.34722 4.24928 3.26331C4.45161 3.17941 4.66845 3.1361 4.88751 3.1361C5.10656 3.1361 5.32341 3.17941 5.52574 3.26331C5.72807 3.34722 5.91192 3.4701 6.06668 3.62498L6.11668 3.67498C6.31311 3.86718 6.56258 3.99605 6.83287 4.04505C7.10316 4.09406 7.38208 4.06102 7.63334 3.94998H7.70834C7.95475 3.84437 8.16274 3.66669 8.30474 3.44058C8.44674 3.21447 8.51629 2.95053 8.50418 2.68331V2.49998C8.50418 2.05795 8.67971 1.63402 8.99231 1.32143C9.3049 1.00883 9.72883 0.833313 10.1709 0.833313C10.6129 0.833313 11.0368 1.00883 11.3494 1.32143C11.662 1.63402 11.8375 2.05795 11.8375 2.49998V2.59165C11.8254 2.85886 11.895 3.12281 12.037 3.34892C12.179 3.57502 12.387 3.7527 12.6333 3.85831C12.8846 3.96935 13.1636 4.00238 13.4338 3.95338C13.7041 3.90438 13.9536 3.77551 14.15 3.58331L14.2 3.53331C14.3548 3.37843 14.5386 3.25556 14.7409 3.17165C14.9433 3.08774 15.1601 3.04444 15.3792 3.04444C15.5982 3.04444 15.8151 3.08774 16.0174 3.17165C16.2197 3.25556 16.4036 3.37843 16.5583 3.53331C16.7132 3.68807 16.8361 3.87192 16.92 4.07425C17.0039 4.27658 17.0472 4.49343 17.0472 4.71248C17.0472 4.93153 17.0039 5.14838 16.92 5.35071C16.8361 5.55304 16.7132 5.73689 16.5583 5.89165L16.5083 5.94165C16.3161 6.13807 16.1873 6.38755 16.1383 6.65783C16.0893 6.92812 16.1223 7.20704 16.2333 7.45831V7.53331C16.339 7.77972 16.5166 7.98771 16.7427 8.12971C16.9689 8.27171 17.2328 8.34126 17.5 8.32915H17.6833C18.1254 8.32915 18.5493 8.50467 18.8619 8.81727C19.1745 9.12986 19.35 9.55379 19.35 9.99581C19.35 10.4379 19.1745 10.8618 18.8619 11.1744C18.5493 11.487 18.1254 11.6625 17.6833 11.6625H17.5917C17.3245 11.6746 17.0605 11.7441 16.8344 11.8861C16.6083 12.0281 16.4306 12.2361 16.325 12.4825L16.1667 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg><span class="nav-text" data-v-0451e41a>Settings</span><svg class="${ssrRenderClass([{ "rotated": settingsMenuOpen.value }, "dropdown-chevron"])}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg></button>`);
      if (settingsMenuOpen.value) {
        _push(`<div class="settings-dropdown" data-v-0451e41a><!--[-->`);
        ssrRenderList(settingsItems, (item) => {
          _push(ssrRenderComponent(unref(link_default), {
            key: item.route,
            href: _ctx.route(item.route),
            class: ["settings-dropdown-item", { "active": isActive(item.route) }],
            onClick: ($event) => settingsMenuOpen.value = false
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="settings-item-name" data-v-0451e41a${_scopeId}>${ssrInterpolate(item.name)}</span><span class="settings-item-desc" data-v-0451e41a${_scopeId}>${ssrInterpolate(item.description)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "settings-item-name" }, toDisplayString(item.name), 1),
                  createVNode("span", { class: "settings-item-desc" }, toDisplayString(item.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></nav><div class="navbar-right" data-v-0451e41a><div class="user-menu" data-v-0451e41a><button class="user-avatar-btn" data-v-0451e41a><div class="user-avatar" data-v-0451e41a><span data-v-0451e41a>${ssrInterpolate(userInitial.value)}</span></div><svg class="${ssrRenderClass([{ "rotated": userMenuOpen.value }, "dropdown-arrow"])}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg></button>`);
      if (userMenuOpen.value) {
        _push(`<div class="user-dropdown" data-v-0451e41a><div class="dropdown-header" data-v-0451e41a><div class="dropdown-user-avatar" data-v-0451e41a><span data-v-0451e41a>${ssrInterpolate(userInitial.value)}</span></div><div class="dropdown-user-info" data-v-0451e41a><span class="dropdown-user-name" data-v-0451e41a>${ssrInterpolate(user.value?.name || "User")}</span><span class="dropdown-user-email" data-v-0451e41a>${ssrInterpolate(user.value?.email || "")}</span></div></div><div class="dropdown-divider" data-v-0451e41a></div><button class="dropdown-item" data-v-0451e41a><svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path><path d="M3.75 17.5V15.8333C3.75 14.9493 4.10119 14.1014 4.72631 13.4763C5.35143 12.8512 6.19928 12.5 7.08333 12.5H12.9167C13.8007 12.5 14.6486 12.8512 15.2737 13.4763C15.8988 14.1014 16.25 14.9493 16.25 15.8333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg> Edit Profile </button><button class="dropdown-item dropdown-item-danger" data-v-0451e41a><svg class="dropdown-item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.6756 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.6756 3.30072 2.98816 2.98816C3.30072 2.6756 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path><path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path><path d="M17.5 10H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg> Logout </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="mobile-menu-btn" data-v-0451e41a>`);
      if (!mobileMenuOpen.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0451e41a><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0451e41a></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<nav class="mobile-nav" data-v-0451e41a><ul class="mobile-nav-list" data-v-0451e41a><!--[-->`);
        ssrRenderList(menuItems, (item) => {
          _push(`<li class="mobile-nav-item" data-v-0451e41a><button class="${ssrRenderClass([{ "active": isActive(item.route) }, "mobile-nav-link"])}" data-v-0451e41a><span data-v-0451e41a>${ssrInterpolate(item.name)}</span>`);
          if (item.badge && item.badge() > 0) {
            _push(`<span class="nav-badge" data-v-0451e41a>${ssrInterpolate(item.badge())}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button></li>`);
        });
        _push(`<!--]--><li class="mobile-nav-item mobile-nav-divider" data-v-0451e41a><span class="mobile-nav-label" data-v-0451e41a>Settings</span></li><!--[-->`);
        ssrRenderList(settingsItems, (item) => {
          _push(`<li class="mobile-nav-item" data-v-0451e41a><button class="${ssrRenderClass([{ "active": isActive(item.route) }, "mobile-nav-link"])}" data-v-0451e41a>${ssrInterpolate(item.name)}</button></li>`);
        });
        _push(`<!--]--><li class="mobile-nav-item mobile-nav-divider" data-v-0451e41a><span class="mobile-nav-label" data-v-0451e41a>Account</span></li><li class="mobile-nav-item" data-v-0451e41a><button class="mobile-nav-link" data-v-0451e41a> Edit Profile </button></li><li class="mobile-nav-item" data-v-0451e41a><button class="mobile-nav-link mobile-nav-danger" data-v-0451e41a> Logout </button></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="main-content" data-v-0451e41a><main class="page-content" data-v-0451e41a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="dashboard-footer" data-v-0451e41a><p class="footer-text" data-v-0451e41a>${ssrInterpolate(unref(currentYear))} © BEYOND TECHNOLOGY</p></footer></div></div>`);
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DashboardLayout.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const DashboardLayout = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-0451e41a"]]);
const _sfc_main$U = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    contacts: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      default: () => ({ search: "", status: "all" })
    },
    unreadCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const selectedContacts = ref([]);
    const selectAll = ref(false);
    const searchQuery = ref(props.filters.search);
    const statusFilter = ref(props.filters.status);
    const showDeleteModal = ref(false);
    const contactToDelete = ref(null);
    const flash = computed(() => page.props.flash || {});
    const paginationInfo = computed(() => {
      const { from, to, total } = props.contacts;
      if (total === 0) return "No contacts";
      return `Showing ${from} to ${to} of ${total} results`;
    });
    const isContactSelected = (contactId) => {
      return selectedContacts.value.includes(contactId);
    };
    let searchTimeout;
    watch(searchQuery, (value) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        applyFilters();
      }, 300);
    });
    watch(statusFilter, () => {
      applyFilters();
    });
    const applyFilters = () => {
      router.get(route("contacts.index"), {
        search: searchQuery.value,
        status: statusFilter.value
      }, {
        preserveState: true,
        replace: true
      });
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const truncate = (text, length = 50) => {
      if (!text) return "";
      return text.length > length ? text.substring(0, length) + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts-page" }, _attrs))} data-v-878922c8>`);
      if (flash.value.success) {
        _push(`<div class="flash-message flash-success" data-v-878922c8>${ssrInterpolate(flash.value.success)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="page-header" data-v-878922c8><div class="header-left" data-v-878922c8><h1 class="page-title" data-v-878922c8>Contacts</h1>`);
      if (__props.unreadCount > 0) {
        _push(`<span class="unread-badge" data-v-878922c8>${ssrInterpolate(__props.unreadCount)} unread</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="filters-bar" data-v-878922c8><div class="filters-left" data-v-878922c8><div class="search-box" data-v-878922c8><svg class="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search contacts..." class="search-input" data-v-878922c8></div><select class="status-filter" data-v-878922c8><option value="all" data-v-878922c8${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "all") : ssrLooseEqual(statusFilter.value, "all")) ? " selected" : ""}>All Status</option><option value="unread" data-v-878922c8${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "unread") : ssrLooseEqual(statusFilter.value, "unread")) ? " selected" : ""}>Unread</option><option value="read" data-v-878922c8${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "read") : ssrLooseEqual(statusFilter.value, "read")) ? " selected" : ""}>Read</option></select></div>`);
      if (selectedContacts.value.length > 0) {
        _push(`<div class="bulk-actions" data-v-878922c8><span class="selected-count" data-v-878922c8>${ssrInterpolate(selectedContacts.value.length)} selected</span><button class="btn btn-secondary" data-v-878922c8> Mark as Read </button><button class="btn btn-danger" data-v-878922c8> Delete </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="table-container" data-v-878922c8>`);
      if (__props.contacts.data.length > 0) {
        _push(`<table class="contacts-table" data-v-878922c8><thead data-v-878922c8><tr data-v-878922c8><th class="checkbox-cell" data-v-878922c8><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectAll.value) ? ssrLooseContain(selectAll.value, null) : selectAll.value) ? " checked" : ""} class="checkbox" data-v-878922c8></th><th data-v-878922c8>Contact</th><th data-v-878922c8>Subject</th><th data-v-878922c8>Date</th><th data-v-878922c8>Status</th><th class="actions-header" data-v-878922c8>Actions</th></tr></thead><tbody data-v-878922c8><!--[-->`);
        ssrRenderList(__props.contacts.data, (contact) => {
          _push(`<tr class="${ssrRenderClass({ "unread-row": !contact.is_read })}" data-v-878922c8><td class="checkbox-cell" data-v-878922c8><input type="checkbox"${ssrIncludeBooleanAttr(isContactSelected(contact.id)) ? " checked" : ""} class="checkbox" data-v-878922c8></td><td class="contact-cell" data-v-878922c8><div class="contact-info" data-v-878922c8><span class="contact-name" data-v-878922c8>${ssrInterpolate(contact.name)}</span><span class="contact-email" data-v-878922c8>${ssrInterpolate(contact.email)}</span></div></td><td class="subject-cell" data-v-878922c8>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("contacts.show", contact.id),
            class: "subject-link"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(truncate(contact.subject, 40))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(truncate(contact.subject, 40)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="date-cell" data-v-878922c8>${ssrInterpolate(formatDate(contact.created_at))}</td><td class="status-cell" data-v-878922c8><span class="${ssrRenderClass(["status-badge", contact.is_read ? "status-read" : "status-unread"])}" data-v-878922c8>${ssrInterpolate(contact.is_read ? "Read" : "Unread")}</span></td><td class="actions-cell" data-v-878922c8><div class="action-buttons" data-v-878922c8>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("contacts.show", contact.id),
            class: "action-btn action-view",
            title: "View"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8${_scopeId}><path d="M10 4.37891C3.75 4.37891 1.25 10.0039 1.25 10.0039C1.25 10.0039 3.75 15.6289 10 15.6289C16.25 15.6289 18.75 10.0039 18.75 10.0039C18.75 10.0039 16.25 4.37891 10 4.37891Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8${_scopeId}></path><path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M10 4.37891C3.75 4.37891 1.25 10.0039 1.25 10.0039C1.25 10.0039 3.75 15.6289 10 15.6289C16.25 15.6289 18.75 10.0039 18.75 10.0039C18.75 10.0039 16.25 4.37891 10 4.37891Z",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="action-btn action-toggle"${ssrRenderAttr("title", contact.is_read ? "Mark as Unread" : "Mark as Read")} data-v-878922c8>`);
          if (contact.is_read) {
            _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M4 4H16C16.9167 4 17.6667 4.75 17.6667 5.66667V14.3333C17.6667 15.25 16.9167 16 16 16H4C3.08333 16 2.33333 15.25 2.33333 14.3333V5.66667C2.33333 4.75 3.08333 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path><path d="M17.6667 5.66797L10 10.8346L2.33333 5.66797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg>`);
          } else {
            _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M2.5 7.5L10 12.5L17.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path><path d="M2.5 7.5V15C2.5 15.4167 2.64583 15.7812 2.9375 16.0938C3.22917 16.4062 3.58333 16.5625 4 16.5625H16C16.4167 16.5625 16.7812 16.4062 17.0938 16.0938C17.4062 15.7812 17.5625 15.4167 17.5625 15V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg>`);
          }
          _push(`</button><button class="action-btn action-delete" title="Delete" data-v-878922c8><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path><path d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg></button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<div class="empty-state" data-v-878922c8><div class="empty-icon" data-v-878922c8><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path><path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg></div><h3 class="empty-title" data-v-878922c8>No contacts found</h3><p class="empty-text" data-v-878922c8>${ssrInterpolate(__props.filters.search || __props.filters.status !== "all" ? "Try adjusting your filters." : "Contact form submissions will appear here.")}</p></div>`);
      }
      _push(`</div>`);
      if (__props.contacts.data.length > 0) {
        _push(`<div class="pagination-container" data-v-878922c8><div class="pagination-info" data-v-878922c8>${ssrInterpolate(paginationInfo.value)}</div><div class="pagination" data-v-878922c8><!--[-->`);
        ssrRenderList(__props.contacts.links, (link) => {
          _push(ssrRenderComponent(unref(link_default), {
            key: link.label,
            href: link.url || "#",
            class: ["pagination-link", { "active": link.active, "disabled": !link.url }],
            preserveState: true
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showDeleteModal.value) {
        _push(`<div class="modal-overlay" data-v-878922c8><div class="modal" data-v-878922c8><div class="modal-header" data-v-878922c8><h3 class="modal-title" data-v-878922c8>Delete Contact</h3><button class="modal-close" data-v-878922c8><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-878922c8><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-878922c8></path></svg></button></div><div class="modal-body" data-v-878922c8><p data-v-878922c8>Are you sure you want to delete this contact from <strong data-v-878922c8>${ssrInterpolate(contactToDelete.value?.email)}</strong>? This action cannot be undone.</p></div><div class="modal-footer" data-v-878922c8><button class="btn btn-secondary" data-v-878922c8>Cancel</button><button class="btn btn-danger" data-v-878922c8>Delete</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Index.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-878922c8"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    usePage();
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-show-page" }, _attrs))} data-v-97591e38><div class="page-navigation" data-v-97591e38>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("contacts.index"),
        class: "back-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38${_scopeId}><path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38${_scopeId}></path></svg> Back to Contacts `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M15 10H5M5 10L10 15M5 10L10 5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createTextVNode(" Back to Contacts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="contact-container" data-v-97591e38><div class="contact-header" data-v-97591e38><div class="header-left" data-v-97591e38><h1 class="contact-subject" data-v-97591e38>${ssrInterpolate(__props.contact.subject)}</h1><span class="${ssrRenderClass(["status-badge", __props.contact.is_read ? "status-read" : "status-unread"])}" data-v-97591e38>${ssrInterpolate(__props.contact.is_read ? "Read" : "Unread")}</span></div><div class="header-actions" data-v-97591e38><button class="btn btn-secondary" data-v-97591e38>`);
      if (__props.contact.is_read) {
        _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38><path d="M4 4H16C16.9167 4 17.6667 4.75 17.6667 5.66667V14.3333C17.6667 15.25 16.9167 16 16 16H4C3.08333 16 2.33333 15.25 2.33333 14.3333V5.66667C2.33333 4.75 3.08333 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path><path d="M17.6667 5.66797L10 10.8346L2.33333 5.66797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38><path d="M2.5 7.5L10 12.5L17.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path><path d="M2.5 7.5V15C2.5 15.4167 2.64583 15.7812 2.9375 16.0938C3.22917 16.4062 3.58333 16.5625 4 16.5625H16C16.4167 16.5625 16.7812 16.4062 17.0938 16.0938C17.4062 15.7812 17.5625 15.4167 17.5625 15V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path></svg>`);
      }
      _push(` ${ssrInterpolate(__props.contact.is_read ? "Mark Unread" : "Mark Read")}</button><button class="btn btn-primary" data-v-97591e38><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38><path d="M18.3333 5L10 10.8333L1.66667 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path><path d="M1.66667 5V15C1.66667 15.4420 1.84226 15.8660 2.15482 16.1786C2.46738 16.4911 2.89131 16.6667 3.33333 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1786C18.1577 15.8660 18.3333 15.4420 18.3333 15V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path></svg> Reply </button><button class="btn btn-danger" data-v-97591e38><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38><path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path><path d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path></svg> Delete </button></div></div><div class="contact-info-card" data-v-97591e38><div class="info-row" data-v-97591e38><div class="info-item" data-v-97591e38><span class="info-label" data-v-97591e38>From</span><span class="info-value info-name" data-v-97591e38>${ssrInterpolate(__props.contact.name)}</span></div><div class="info-item" data-v-97591e38><span class="info-label" data-v-97591e38>Email</span><a${ssrRenderAttr("href", `mailto:${__props.contact.email}`)} class="info-value info-email" data-v-97591e38>${ssrInterpolate(__props.contact.email)}</a></div>`);
      if (__props.contact.phone) {
        _push(`<div class="info-item" data-v-97591e38><span class="info-label" data-v-97591e38>Phone</span><a${ssrRenderAttr("href", `tel:${__props.contact.phone}`)} class="info-value info-phone" data-v-97591e38>${ssrInterpolate(__props.contact.phone)}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="info-item" data-v-97591e38><span class="info-label" data-v-97591e38>Received</span><span class="info-value info-date" data-v-97591e38>${ssrInterpolate(formatDate(__props.contact.created_at))}</span></div></div></div><div class="message-card" data-v-97591e38><h3 class="message-label" data-v-97591e38>Message</h3><div class="message-content" data-v-97591e38>${ssrInterpolate(__props.contact.message)}</div></div>`);
      if (__props.contact.is_read && __props.contact.read_at) {
        _push(`<div class="read-info" data-v-97591e38><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-97591e38><path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-97591e38></path></svg> Read on ${ssrInterpolate(formatDate(__props.contact.read_at))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Show.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-97591e38"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 text-gray-900">You are logged in!</div></div></div></div>`);
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  __name: "VisitorChartWidget",
  __ssrInlineRender: true,
  props: {
    analytics: {
      type: Object,
      default: () => ({})
    },
    gaEnabled: {
      type: Boolean,
      default: false
    },
    gaMeasurementId: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const chartData = computed(() => props.analytics.chart_data || {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      visitors: [0, 0, 0, 0, 0, 0, 0],
      pageviews: [0, 0, 0, 0, 0, 0, 0]
    });
    const summary = computed(() => props.analytics.summary || {
      total_visitors: 0,
      total_pageviews: 0,
      avg_session_duration: "0m 0s",
      bounce_rate: "0%"
    });
    const isPlaceholder = computed(() => !props.gaEnabled || props.analytics.placeholder);
    const maxValue = computed(() => {
      const allValues = [...chartData.value.visitors, ...chartData.value.pageviews];
      return Math.max(...allValues, 1);
    });
    const getBarHeight = (value) => {
      return value / maxValue.value * 100;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "visitor-chart-widget" }, _attrs))} data-v-86d00331><div class="widget-header" data-v-86d00331><div class="widget-title-section" data-v-86d00331><h3 class="widget-title" data-v-86d00331>Visitor Analytics</h3>`);
      if (isPlaceholder.value) {
        _push(`<span class="placeholder-badge" data-v-86d00331>Placeholder Data</span>`);
      } else {
        _push(`<span class="live-badge" data-v-86d00331><span class="live-dot" data-v-86d00331></span> Live </span>`);
      }
      _push(`</div><div class="widget-period" data-v-86d00331>Last 7 days</div></div><div class="stats-grid" data-v-86d00331><div class="stat-item" data-v-86d00331><div class="stat-value" data-v-86d00331>${ssrInterpolate(summary.value.total_visitors.toLocaleString())}</div><div class="stat-label" data-v-86d00331>Total Visitors</div></div><div class="stat-item" data-v-86d00331><div class="stat-value" data-v-86d00331>${ssrInterpolate(summary.value.total_pageviews.toLocaleString())}</div><div class="stat-label" data-v-86d00331>Page Views</div></div><div class="stat-item" data-v-86d00331><div class="stat-value" data-v-86d00331>${ssrInterpolate(summary.value.avg_session_duration)}</div><div class="stat-label" data-v-86d00331>Avg. Duration</div></div><div class="stat-item" data-v-86d00331><div class="stat-value" data-v-86d00331>${ssrInterpolate(summary.value.bounce_rate)}</div><div class="stat-label" data-v-86d00331>Bounce Rate</div></div></div><div class="chart-container" data-v-86d00331><div class="chart-legend" data-v-86d00331><div class="legend-item" data-v-86d00331><span class="legend-color legend-visitors" data-v-86d00331></span><span class="legend-text" data-v-86d00331>Visitors</span></div><div class="legend-item" data-v-86d00331><span class="legend-color legend-pageviews" data-v-86d00331></span><span class="legend-text" data-v-86d00331>Page Views</span></div></div><div class="chart" data-v-86d00331><div class="chart-bars" data-v-86d00331><!--[-->`);
      ssrRenderList(chartData.value.labels, (label, index) => {
        _push(`<div class="chart-bar-group" data-v-86d00331><div class="bars" data-v-86d00331><div class="bar bar-visitors" style="${ssrRenderStyle({ height: getBarHeight(chartData.value.visitors[index]) + "%" })}"${ssrRenderAttr("title", `Visitors: ${chartData.value.visitors[index]}`)} data-v-86d00331></div><div class="bar bar-pageviews" style="${ssrRenderStyle({ height: getBarHeight(chartData.value.pageviews[index]) + "%" })}"${ssrRenderAttr("title", `Page Views: ${chartData.value.pageviews[index]}`)} data-v-86d00331></div></div><div class="bar-label" data-v-86d00331>${ssrInterpolate(label)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dashboard/VisitorChartWidget.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VisitorChartWidget = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-86d00331"]]);
const _sfc_main$Q = {
  __name: "ContactsPreviewWidget",
  __ssrInlineRender: true,
  props: {
    contacts: {
      type: Array,
      default: () => []
    },
    unreadCount: {
      type: Number,
      default: 0
    },
    totalCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.floor(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays === 0) {
        const diffHours = Math.floor(diffTime / (1e3 * 60 * 60));
        if (diffHours === 0) {
          const diffMins = Math.floor(diffTime / (1e3 * 60));
          return diffMins <= 1 ? "Just now" : `${diffMins}m ago`;
        }
        return `${diffHours}h ago`;
      } else if (diffDays === 1) {
        return "Yesterday";
      } else if (diffDays < 7) {
        return `${diffDays}d ago`;
      } else {
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
    };
    const truncate = (text, length = 40) => {
      if (!text) return "";
      return text.length > length ? text.substring(0, length) + "..." : text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts-preview-widget" }, _attrs))} data-v-67e0125f><div class="widget-header" data-v-67e0125f><div class="widget-title-section" data-v-67e0125f><h3 class="widget-title" data-v-67e0125f>Recent Contacts</h3>`);
      if (__props.unreadCount > 0) {
        _push(`<span class="unread-badge" data-v-67e0125f>${ssrInterpolate(__props.unreadCount)} unread</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("contacts.index"),
        class: "view-all-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-67e0125f${_scopeId}><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-67e0125f${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View All "),
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M7.5 15L12.5 10L7.5 5",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="contacts-stats" data-v-67e0125f><div class="stat-item" data-v-67e0125f><div class="stat-value" data-v-67e0125f>${ssrInterpolate(__props.totalCount)}</div><div class="stat-label" data-v-67e0125f>Total Contacts</div></div><div class="stat-item" data-v-67e0125f><div class="stat-value stat-unread" data-v-67e0125f>${ssrInterpolate(__props.unreadCount)}</div><div class="stat-label" data-v-67e0125f>Unread</div></div></div><div class="contacts-table-container" data-v-67e0125f>`);
      if (__props.contacts.length > 0) {
        _push(`<table class="contacts-table" data-v-67e0125f><thead data-v-67e0125f><tr data-v-67e0125f><th data-v-67e0125f>Email</th><th data-v-67e0125f>Subject</th><th data-v-67e0125f>Date</th><th data-v-67e0125f></th></tr></thead><tbody data-v-67e0125f><!--[-->`);
        ssrRenderList(__props.contacts, (contact) => {
          _push(`<tr class="${ssrRenderClass({ "unread": !contact.is_read })}" data-v-67e0125f><td class="email-cell" data-v-67e0125f><div class="email-wrapper" data-v-67e0125f>`);
          if (!contact.is_read) {
            _push(`<span class="unread-dot" data-v-67e0125f></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="email-text" data-v-67e0125f>${ssrInterpolate(contact.email)}</span></div></td><td class="subject-cell" data-v-67e0125f>${ssrInterpolate(truncate(contact.subject, 30))}</td><td class="date-cell" data-v-67e0125f>${ssrInterpolate(formatDate(contact.created_at))}</td><td class="action-cell" data-v-67e0125f>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("contacts.show", contact.id),
            class: "view-link"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View `);
              } else {
                return [
                  createTextVNode(" View ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<div class="empty-state" data-v-67e0125f><div class="empty-icon" data-v-67e0125f><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-67e0125f><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67e0125f></path><path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67e0125f></path></svg></div><p class="empty-title" data-v-67e0125f>No contacts yet</p><p class="empty-text" data-v-67e0125f>Contact form submissions will appear here.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dashboard/ContactsPreviewWidget.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const ContactsPreviewWidget = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-67e0125f"]]);
const _sfc_main$P = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    recentContacts: {
      type: Array,
      default: () => []
    },
    unreadCount: {
      type: Number,
      default: 0
    },
    totalContacts: {
      type: Number,
      default: 0
    },
    analytics: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const page = usePage();
    const gaConfig = computed(() => page.props.ga || {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-page" }, _attrs))} data-v-f7f7cdc4><div class="page-header" data-v-f7f7cdc4><h1 class="page-title" data-v-f7f7cdc4>Dashboard</h1><p class="page-subtitle" data-v-f7f7cdc4>Welcome back! Here&#39;s an overview of your website.</p></div><div class="widgets-grid" data-v-f7f7cdc4><div class="widget widget-chart" data-v-f7f7cdc4>`);
      _push(ssrRenderComponent(VisitorChartWidget, {
        analytics: __props.analytics,
        "ga-enabled": gaConfig.value.enabled,
        "ga-measurement-id": gaConfig.value.measurementId
      }, null, _parent));
      _push(`</div><div class="widget widget-contacts" data-v-f7f7cdc4>`);
      _push(ssrRenderComponent(ContactsPreviewWidget, {
        contacts: __props.recentContacts,
        "unread-count": __props.unreadCount,
        "total-count": __props.totalContacts
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-f7f7cdc4"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
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
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-9b447ad5"]]);
const _sfc_main$N = {
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
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Button.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-41acdf71"]]);
const _sfc_main$M = {
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
      hoveredSection.value = null;
      showPreview.value = false;
      emit("close");
    };
    const toggleSectionPreview = (sectionType, event) => {
      event.stopPropagation();
      if (sectionType.preview_image) {
        if (showPreview.value && hoveredSection.value?.id === sectionType.id) {
          showPreview.value = false;
          hoveredSection.value = null;
        } else {
          hoveredSection.value = sectionType;
          showPreview.value = true;
        }
      }
    };
    const getPreviewImageUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("/assets/") || path.startsWith("http")) {
        return path;
      }
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
            _push2(`<div class="modal-header" data-v-75a31a5f${_scopeId}><h2 class="modal-title" data-v-75a31a5f${_scopeId}>Choose New Section</h2><button class="close-btn" data-v-75a31a5f${_scopeId}><svg viewBox="0 0 20 20" fill="currentColor" data-v-75a31a5f${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-75a31a5f${_scopeId}></path></svg></button></div><div class="modal-body" data-v-75a31a5f${_scopeId}><div class="sections-grid" data-v-75a31a5f${_scopeId}><!--[-->`);
            ssrRenderList(__props.sectionTypes, (sectionType) => {
              _push2(`<div class="${ssrRenderClass(["section-card", { "selected": selectedSection.value?.id === sectionType.id }])}" data-v-75a31a5f${_scopeId}><div class="card-icon" data-v-75a31a5f${_scopeId}>`);
              if (sectionType.icon) {
                _push2(`<i class="${ssrRenderClass(sectionType.icon)}" data-v-75a31a5f${_scopeId}></i>`);
              } else {
                _push2(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-75a31a5f${_scopeId}><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-75a31a5f${_scopeId}></path></svg>`);
              }
              _push2(`</div><div class="card-name" data-v-75a31a5f${_scopeId}>${ssrInterpolate(sectionType.name_en)}</div>`);
              if (sectionType.preview_image) {
                _push2(`<button class="${ssrRenderClass([{ "active": showPreview.value && hoveredSection.value?.id === sectionType.id }, "info-btn"])}" data-v-75a31a5f${_scopeId}><svg viewBox="0 0 20 20" fill="currentColor" data-v-75a31a5f${_scopeId}><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-75a31a5f${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="modal-footer" data-v-75a31a5f${_scopeId}>`);
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
                _push3(`<div class="preview-tooltip" data-v-75a31a5f${_scopeId}><div class="preview-header" data-v-75a31a5f${_scopeId}><h3 class="preview-title" data-v-75a31a5f${_scopeId}>${ssrInterpolate(hoveredSection.value.name_en)}</h3></div><div class="preview-body" data-v-75a31a5f${_scopeId}><img${ssrRenderAttr("src", getPreviewImageUrl(hoveredSection.value.preview_image))}${ssrRenderAttr("alt", hoveredSection.value.name_en)} class="preview-image" data-v-75a31a5f${_scopeId}></div></div>`);
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
                      sectionType.preview_image ? (openBlock(), createBlock("button", {
                        key: 0,
                        class: ["info-btn", { "active": showPreview.value && hoveredSection.value?.id === sectionType.id }],
                        onClick: withModifiers(($event) => toggleSectionPreview(sectionType, $event), ["stop"])
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
                      ], 10, ["onClick"])) : createCommentVNode("", true)
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
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/AddSectionModal.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const AddSectionModal = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-75a31a5f"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AddSectionModal
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {
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
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TextInput.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-0cdb4751"]]);
const _sfc_main$K = {
  __name: "UrlAutocomplete",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "URL"
    },
    placeholder: {
      type: String,
      default: "Enter URL or type / for internal pages"
    },
    lang: {
      type: String,
      default: "en",
      validator: (value) => ["en", "ar"].includes(value)
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const page = usePage();
    const inputValue = ref(props.modelValue);
    const showSuggestions = ref(false);
    const selectedIndex = ref(-1);
    const inputRef = ref(null);
    const dropdownRef = ref(null);
    const pageSlugs = computed(() => {
      return page.props.slugs || [];
    });
    const suggestions = computed(() => {
      if (!inputValue.value || inputValue.value.length < 1) {
        return [];
      }
      const value = inputValue.value.toLowerCase().trim();
      if (value === "/") {
        return pageSlugs.value.map((slug) => ({
          url: `/${props.lang === "en" ? slug.en : slug.ar}`,
          label: props.lang === "en" ? slug.en : slug.ar,
          type: "internal"
        }));
      }
      if (value.startsWith("/")) {
        const searchTerm = value.substring(1).toLowerCase();
        return pageSlugs.value.filter((slug) => {
          const slugValue = props.lang === "en" ? slug.en : slug.ar;
          return slugValue && slugValue.toLowerCase().includes(searchTerm);
        }).map((slug) => ({
          url: `/${props.lang === "en" ? slug.en : slug.ar}`,
          label: props.lang === "en" ? slug.en : slug.ar,
          type: "internal"
        }));
      }
      if (value.startsWith("#")) {
        const commonAnchors = ["#contact", "#about", "#services", "#gallery", "#team", "#pricing"];
        return commonAnchors.filter((anchor) => anchor.includes(value)).map((anchor) => ({
          url: anchor,
          label: anchor,
          type: "anchor"
        }));
      }
      return [];
    });
    watch(() => inputValue.value, (newValue) => {
      emit("update:modelValue", newValue);
      if (newValue && (newValue.startsWith("/") || newValue.startsWith("#"))) {
        showSuggestions.value = true;
        selectedIndex.value = -1;
      } else {
        showSuggestions.value = false;
      }
    });
    watch(() => props.modelValue, (newValue) => {
      inputValue.value = newValue;
    });
    const handleClickOutside = (event) => {
      if (inputRef.value && dropdownRef.value && !inputRef.value.contains(event.target) && !dropdownRef.value.contains(event.target)) {
        showSuggestions.value = false;
        selectedIndex.value = -1;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "url-autocomplete" }, _attrs))} data-v-062a9a7b>`);
      if (__props.label) {
        _push(`<label class="autocomplete-label" data-v-062a9a7b>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="autocomplete-input-wrapper" data-v-062a9a7b><input${ssrRenderAttr("value", inputValue.value)} type="text" class="autocomplete-input"${ssrRenderAttr("placeholder", __props.placeholder)} data-v-062a9a7b>`);
      if (showSuggestions.value && suggestions.value.length > 0) {
        _push(`<div class="autocomplete-dropdown" data-v-062a9a7b><!--[-->`);
        ssrRenderList(suggestions.value, (suggestion, index) => {
          _push(`<div class="${ssrRenderClass([{ "is-selected": index === selectedIndex.value }, "autocomplete-item"])}" data-v-062a9a7b>`);
          if (suggestion.type === "internal") {
            _push(`<svg class="item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-062a9a7b><path d="M3.33333 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-062a9a7b></path></svg>`);
          } else if (suggestion.type === "anchor") {
            _push(`<svg class="item-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-062a9a7b><path d="M10 3.33333V16.6667M10 3.33333C8.61929 3.33333 7.5 4.45262 7.5 5.83333C7.5 7.21405 8.61929 8.33333 10 8.33333M10 3.33333C11.3807 3.33333 12.5 4.45262 12.5 5.83333C12.5 7.21405 11.3807 8.33333 10 8.33333M10 8.33333C7.23858 8.33333 5 10.5719 5 13.3333V15.8333H15V13.3333C15 10.5719 12.7614 8.33333 10 8.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-062a9a7b></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="item-label" data-v-062a9a7b>${ssrInterpolate(suggestion.label)}</span><span class="item-type" data-v-062a9a7b>${ssrInterpolate(suggestion.type)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/UrlAutocomplete.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const UrlAutocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-062a9a7b"]]);
const _sfc_main$J = {
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
    const QuillEditor = defineAsyncComponent(
      () => import("@vueup/vue-quill").then((m2) => m2.QuillEditor)
    );
    if (typeof window !== "undefined") {
      import("./assets/vendor-vue-DMohnwHF.js").then((n2) => n2.v);
    }
    const props = __props;
    const emit = __emit;
    const content = ref(props.modelValue);
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
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
      }, _attrs))} data-v-4f27bac9>`);
      if (__props.label) {
        _push(`<label class="editor-label" data-v-4f27bac9>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="required-indicator" data-v-4f27bac9>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="editor-wrapper" data-v-4f27bac9>`);
      if (isMounted.value) {
        _push(ssrRenderComponent(unref(QuillEditor), {
          content: content.value,
          "content-type": "html",
          options: editorOptions,
          "onUpdate:content": onUpdate
        }, null, _parent));
      } else {
        _push(`<div class="editor-placeholder" data-v-4f27bac9> Loading editor... </div>`);
      }
      _push(`</div>`);
      if (__props.error) {
        _push(`<p class="error-message" data-v-4f27bac9>${ssrInterpolate(__props.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/RichTextEditor.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const RichTextEditor = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-4f27bac9"]]);
const _sfc_main$I = {
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
      default: "original"
      // Use original to avoid server-side processing issues
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
      if (typeof img !== "string") return "";
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
      }, _attrs))} data-v-5a4bb2ba><label class="field-label" data-v-5a4bb2ba>${ssrInterpolate(__props.label)} `);
      if (__props.required) {
        _push(`<span class="required-indicator" data-v-5a4bb2ba>*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="image-upload-area" data-v-5a4bb2ba>`);
      if (hasImage.value) {
        _push(`<div class="image-preview" data-v-5a4bb2ba><img${ssrRenderAttr("src", imageUrl.value)}${ssrRenderAttr("alt", currentAltValue.value)} data-v-5a4bb2ba><button type="button" class="remove-btn" title="Remove image" data-v-5a4bb2ba><svg viewBox="0 0 20 20" fill="currentColor" data-v-5a4bb2ba><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-5a4bb2ba></path></svg></button></div>`);
      } else {
        _push(`<label class="${ssrRenderClass([{ "uploading": uploading.value }, "upload-zone"])}" data-v-5a4bb2ba><input type="file" accept="image/*"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""} class="hidden-input" data-v-5a4bb2ba>`);
        if (uploading.value) {
          _push(`<div class="upload-spinner" data-v-5a4bb2ba><svg class="spinner" viewBox="0 0 24 24" data-v-5a4bb2ba><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" data-v-5a4bb2ba></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-5a4bb2ba></path></svg><span data-v-5a4bb2ba>Uploading...</span></div>`);
        } else {
          _push(`<div class="upload-content" data-v-5a4bb2ba><svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-5a4bb2ba><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-5a4bb2ba></path></svg><span class="upload-text" data-v-5a4bb2ba>Click to upload</span><span class="upload-hint" data-v-5a4bb2ba>PNG, JPG, GIF, WebP up to 5MB</span></div>`);
        }
        _push(`</label>`);
      }
      _push(`</div>`);
      if (uploadError.value) {
        _push(`<p class="error-message" data-v-5a4bb2ba>${ssrInterpolate(uploadError.value)}</p>`);
      } else if (__props.error) {
        _push(`<p class="error-message" data-v-5a4bb2ba>${ssrInterpolate(__props.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (hasImage.value && __props.showAltFields) {
        _push(`<div class="alt-field" data-v-5a4bb2ba>`);
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
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/ImageWithAlt.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const ImageWithAlt = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-5a4bb2ba"]]);
const __default__ = {
  methods: {
    // Helper to get image data from item
    getImageData(item, field) {
      const imageKey = field.key;
      if (field.simpleAlt) {
        return {
          image: item[imageKey] || item.image || "",
          alt_en: item.alt || "",
          alt_ar: item.alt || ""
        };
      }
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
      if (!this.items || !this.items[index]) {
        console.warn("setImageData: Invalid index or items not initialized", { index, itemsLength: this.items?.length });
        return;
      }
      const imageKey = field.key;
      if (field.simpleAlt) {
        this.items[index][imageKey] = value.image;
        this.items[index].alt = value.alt_en || value.alt_ar || "";
        this.emitUpdate();
        return;
      }
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
const _sfc_main$H = /* @__PURE__ */ Object.assign(__default__, {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "repeater-field" }, _attrs))} data-v-9a5d6fbd><div class="repeater-header" data-v-9a5d6fbd><label class="repeater-label" data-v-9a5d6fbd>${ssrInterpolate(__props.label)}</label><span class="item-count" data-v-9a5d6fbd>${ssrInterpolate(items.value.length)} ${ssrInterpolate(items.value.length === 1 ? __props.itemLabel : __props.itemLabel + "s")}</span></div><div class="repeater-list" data-v-9a5d6fbd><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isExpanded(index) }, "repeater-item"])}" data-v-9a5d6fbd><div class="item-header" data-v-9a5d6fbd>`);
        if (__props.sortable) {
          _push(`<div class="drag-handle" data-v-9a5d6fbd><svg viewBox="0 0 20 20" fill="currentColor" data-v-9a5d6fbd><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" data-v-9a5d6fbd></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="item-title" data-v-9a5d6fbd>${ssrInterpolate(getItemTitle(item, index))}</span><div class="item-actions" data-v-9a5d6fbd>`);
        if (canAddMore.value) {
          _push(`<button type="button" class="action-btn duplicate" title="Duplicate" data-v-9a5d6fbd><svg viewBox="0 0 20 20" fill="currentColor" data-v-9a5d6fbd><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" data-v-9a5d6fbd></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" data-v-9a5d6fbd></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (canRemove.value) {
          _push(`<button type="button" class="action-btn delete" title="Delete" data-v-9a5d6fbd><svg viewBox="0 0 20 20" fill="currentColor" data-v-9a5d6fbd><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-9a5d6fbd></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="${ssrRenderClass([{ "rotated": isExpanded(index) }, "action-btn expand"])}" data-v-9a5d6fbd><svg viewBox="0 0 20 20" fill="currentColor" data-v-9a5d6fbd><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-9a5d6fbd></path></svg></button></div></div>`);
        if (isExpanded(index)) {
          _push(`<div class="item-content" data-v-9a5d6fbd><!--[-->`);
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
        _push(`<button type="button" class="add-item-btn" data-v-9a5d6fbd><svg viewBox="0 0 20 20" fill="currentColor" data-v-9a5d6fbd><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-9a5d6fbd></path></svg> Add ${ssrInterpolate(__props.itemLabel)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/RepeaterField.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const RepeaterField = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-9a5d6fbd"]]);
const _sfc_main$G = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nested-repeater" }, _attrs))} data-v-888d7aab><div class="repeater-header" data-v-888d7aab><label class="repeater-label" data-v-888d7aab>${ssrInterpolate(__props.label)}</label><span class="item-count" data-v-888d7aab>${ssrInterpolate(items.value.length)} items</span></div><div class="repeater-list" data-v-888d7aab><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isExpanded(index) }, "repeater-item"])}" data-v-888d7aab><div class="item-header" data-v-888d7aab><div class="drag-handle" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" data-v-888d7aab></path></svg></div><span class="item-title" data-v-888d7aab>${ssrInterpolate(getItemLabel(item, index))}</span>`);
        if (item.children?.length) {
          _push(`<span class="children-badge" data-v-888d7aab>${ssrInterpolate(item.children.length)} sub </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="item-actions" data-v-888d7aab><button type="button" class="action-btn delete" title="Delete" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-888d7aab></path></svg></button><button type="button" class="${ssrRenderClass([{ "rotated": isExpanded(index) }, "action-btn expand"])}" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-888d7aab></path></svg></button></div></div>`);
        if (isExpanded(index)) {
          _push(`<div class="item-content" data-v-888d7aab><div class="bilingual-fields" data-v-888d7aab><div class="lang-field" data-v-888d7aab>`);
          _push(ssrRenderComponent(TextInput, {
            "model-value": item.label_en,
            label: "Label (EN)",
            placeholder: "English label",
            "onUpdate:modelValue": ($event) => updateItemField(index, "label_en", $event)
          }, null, _parent));
          _push(`</div><div class="lang-field" data-v-888d7aab>`);
          _push(ssrRenderComponent(TextInput, {
            "model-value": item.label_ar,
            label: "Label (AR)",
            placeholder: "Arabic label",
            dir: "rtl",
            "onUpdate:modelValue": ($event) => updateItemField(index, "label_ar", $event)
          }, null, _parent));
          _push(`</div></div><div class="bilingual-fields" data-v-888d7aab><div class="lang-field" data-v-888d7aab>`);
          _push(ssrRenderComponent(UrlAutocomplete, {
            "model-value": item.url_en || item.url || "#",
            label: "URL (EN)",
            placeholder: "Type / for internal pages or # for anchors",
            lang: "en",
            "onUpdate:modelValue": ($event) => updateItemField(index, "url_en", $event)
          }, null, _parent));
          _push(`</div><div class="lang-field" data-v-888d7aab>`);
          _push(ssrRenderComponent(UrlAutocomplete, {
            "model-value": item.url_ar || item.url || "#",
            label: "URL (AR)",
            placeholder: "اكتب / للصفحات الداخلية أو # للروابط",
            lang: "ar",
            "onUpdate:modelValue": ($event) => updateItemField(index, "url_ar", $event)
          }, null, _parent));
          _push(`</div></div><div class="children-section" data-v-888d7aab><div class="children-header" data-v-888d7aab><span class="children-label" data-v-888d7aab>Sub Menu Items</span><button type="button" class="add-child-btn"${ssrIncludeBooleanAttr(item.children?.length >= __props.maxChildren) ? " disabled" : ""} data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-888d7aab></path></svg> Add Sub Item </button></div>`);
          if (item.children?.length) {
            _push(`<div class="children-list" data-v-888d7aab><!--[-->`);
            ssrRenderList(item.children, (child, childIndex) => {
              _push(`<div class="${ssrRenderClass([{ "is-expanded": isChildExpanded(index, childIndex) }, "child-item"])}" data-v-888d7aab><div class="child-header" data-v-888d7aab><span class="child-title" data-v-888d7aab>${ssrInterpolate(getChildLabel(child, childIndex))}</span><div class="item-actions" data-v-888d7aab><button type="button" class="action-btn delete" title="Delete" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-888d7aab></path></svg></button><button type="button" class="${ssrRenderClass([{ "rotated": isChildExpanded(index, childIndex) }, "action-btn expand"])}" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-888d7aab></path></svg></button></div></div>`);
              if (isChildExpanded(index, childIndex)) {
                _push(`<div class="child-content" data-v-888d7aab><div class="bilingual-fields" data-v-888d7aab><div class="lang-field" data-v-888d7aab>`);
                _push(ssrRenderComponent(TextInput, {
                  "model-value": child.label_en,
                  label: "Label (EN)",
                  placeholder: "English label",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, "label_en", $event)
                }, null, _parent));
                _push(`</div><div class="lang-field" data-v-888d7aab>`);
                _push(ssrRenderComponent(TextInput, {
                  "model-value": child.label_ar,
                  label: "Label (AR)",
                  placeholder: "Arabic label",
                  dir: "rtl",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, "label_ar", $event)
                }, null, _parent));
                _push(`</div></div><div class="bilingual-fields" data-v-888d7aab><div class="lang-field" data-v-888d7aab>`);
                _push(ssrRenderComponent(UrlAutocomplete, {
                  "model-value": child.url_en || child.url || "#",
                  label: "URL (EN)",
                  placeholder: "Type / for internal pages or # for anchors",
                  lang: "en",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, "url_en", $event)
                }, null, _parent));
                _push(`</div><div class="lang-field" data-v-888d7aab>`);
                _push(ssrRenderComponent(UrlAutocomplete, {
                  "model-value": child.url_ar || child.url || "#",
                  label: "URL (AR)",
                  placeholder: "اكتب / للصفحات الداخلية أو # للروابط",
                  lang: "ar",
                  "onUpdate:modelValue": ($event) => updateChildField(index, childIndex, "url_ar", $event)
                }, null, _parent));
                _push(`</div></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="no-children" data-v-888d7aab>No sub menu items</p>`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (canAddMore.value) {
        _push(`<button type="button" class="add-item-btn" data-v-888d7aab><svg viewBox="0 0 20 20" fill="currentColor" data-v-888d7aab><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-888d7aab></path></svg> Add Menu Item </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/NestedMenuEditor.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const NestedMenuEditor = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-888d7aab"]]);
const _sfc_main$F = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-menu-editor" }, _attrs))} data-v-82cb8801>`);
      if (showMenuColumns.value) {
        _push(`<div class="editor-section" data-v-82cb8801><div class="section-header" data-v-82cb8801><h4 class="section-title" data-v-82cb8801>Menu Columns</h4><button type="button" class="add-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="12" y1="5" x2="12" y2="19" data-v-82cb8801></line><line x1="5" y1="12" x2="19" y2="12" data-v-82cb8801></line></svg> Add Column </button></div><div class="columns-list" data-v-82cb8801><!--[-->`);
        ssrRenderList(localMenuColumns.value, (column, colIndex) => {
          _push(`<div class="column-item"${ssrRenderAttr("data-index", colIndex)} data-v-82cb8801><div class="column-header" data-v-82cb8801><div class="column-drag-handle" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="8" y1="6" x2="16" y2="6" data-v-82cb8801></line><line x1="8" y1="12" x2="16" y2="12" data-v-82cb8801></line><line x1="8" y1="18" x2="16" y2="18" data-v-82cb8801></line></svg></div><span class="column-title" data-v-82cb8801>${ssrInterpolate(getColumnTitle(column, colIndex))}</span><span class="links-badge" data-v-82cb8801>${ssrInterpolate(column.links?.length || 0)} links</span><svg class="${ssrRenderClass(["chevron", { rotated: expandedColumns[colIndex] }])}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><polyline points="6 9 12 15 18 9" data-v-82cb8801></polyline></svg><button type="button" class="remove-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="18" y1="6" x2="6" y2="18" data-v-82cb8801></line><line x1="6" y1="6" x2="18" y2="18" data-v-82cb8801></line></svg></button></div>`);
          if (expandedColumns[colIndex]) {
            _push(`<div class="column-content" data-v-82cb8801><div class="field-row" data-v-82cb8801><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Title (EN)</label>`);
            _push(ssrRenderComponent(TextInput, {
              modelValue: column.title_en || "",
              "onUpdate:modelValue": ($event) => updateColumnField(colIndex, "title_en", $event),
              placeholder: "Column title (EN)"
            }, null, _parent));
            _push(`</div><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Title (AR)</label>`);
            _push(ssrRenderComponent(TextInput, {
              modelValue: column.title_ar || "",
              "onUpdate:modelValue": ($event) => updateColumnField(colIndex, "title_ar", $event),
              placeholder: "Column title (AR)",
              dir: "rtl"
            }, null, _parent));
            _push(`</div></div><div class="links-section" data-v-82cb8801><div class="links-header" data-v-82cb8801><span class="links-title" data-v-82cb8801>Links</span><button type="button" class="add-link-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="12" y1="5" x2="12" y2="19" data-v-82cb8801></line><line x1="5" y1="12" x2="19" y2="12" data-v-82cb8801></line></svg> Add Link </button></div><div class="links-list" data-v-82cb8801><!--[-->`);
            ssrRenderList(column.links || [], (link, linkIndex) => {
              _push(`<div class="link-item"${ssrRenderAttr("data-index", linkIndex)} data-v-82cb8801><div class="link-drag-handle" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><circle cx="9" cy="5" r="1" data-v-82cb8801></circle><circle cx="9" cy="12" r="1" data-v-82cb8801></circle><circle cx="9" cy="19" r="1" data-v-82cb8801></circle><circle cx="15" cy="5" r="1" data-v-82cb8801></circle><circle cx="15" cy="12" r="1" data-v-82cb8801></circle><circle cx="15" cy="19" r="1" data-v-82cb8801></circle></svg></div><div class="link-fields" data-v-82cb8801>`);
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
                modelValue: link.url_en || "",
                "onUpdate:modelValue": ($event) => updateLinkField(colIndex, linkIndex, "url_en", $event),
                placeholder: "URL (EN)",
                class: "link-input url-input"
              }, null, _parent));
              _push(ssrRenderComponent(TextInput, {
                modelValue: link.url_ar || "",
                "onUpdate:modelValue": ($event) => updateLinkField(colIndex, linkIndex, "url_ar", $event),
                placeholder: "URL (AR)",
                dir: "rtl",
                class: "link-input url-input"
              }, null, _parent));
              _push(`</div><button type="button" class="remove-link-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="18" y1="6" x2="6" y2="18" data-v-82cb8801></line><line x1="6" y1="6" x2="18" y2="18" data-v-82cb8801></line></svg></button></div>`);
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
        _push(`<div class="editor-section" data-v-82cb8801><div class="section-header" data-v-82cb8801><h4 class="section-title" data-v-82cb8801>Contact Info</h4><span class="fixed-notice" data-v-82cb8801>Fixed 4 items (Phone, WhatsApp, Email, Location)</span></div><div class="field-row" data-v-82cb8801><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Section Title (EN)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localContactInfo.value.title_en || "",
          "onUpdate:modelValue": ($event) => updateContactTitle("title_en", $event),
          placeholder: "Contact title (EN)"
        }, null, _parent));
        _push(`</div><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Section Title (AR)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localContactInfo.value.title_ar || "",
          "onUpdate:modelValue": ($event) => updateContactTitle("title_ar", $event),
          placeholder: "Contact title (AR)",
          dir: "rtl"
        }, null, _parent));
        _push(`</div></div><div class="contact-items-section" data-v-82cb8801><div class="links-header" data-v-82cb8801><span class="links-title" data-v-82cb8801>Contact Items</span><span class="items-count" data-v-82cb8801>${ssrInterpolate((localContactInfo.value.items || []).length)} / 4 items</span></div><div class="contact-items-list" data-v-82cb8801><!--[-->`);
        ssrRenderList(localContactInfo.value.items || [], (item, itemIndex) => {
          _push(`<div class="contact-item contact-item-fixed"${ssrRenderAttr("data-index", itemIndex)} data-v-82cb8801><div class="contact-item-drag-handle" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><circle cx="9" cy="5" r="1" data-v-82cb8801></circle><circle cx="9" cy="12" r="1" data-v-82cb8801></circle><circle cx="9" cy="19" r="1" data-v-82cb8801></circle><circle cx="15" cy="5" r="1" data-v-82cb8801></circle><circle cx="15" cy="12" r="1" data-v-82cb8801></circle><circle cx="15" cy="19" r="1" data-v-82cb8801></circle></svg></div><div class="contact-item-fields" data-v-82cb8801>`);
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
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showSocial.value) {
        _push(`<div class="editor-section" data-v-82cb8801><div class="section-header" data-v-82cb8801><h4 class="section-title" data-v-82cb8801>Social Links</h4></div><div class="field-row" data-v-82cb8801><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Section Title (EN)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localSocial.value.title_en || "",
          "onUpdate:modelValue": ($event) => updateSocialTitle("title_en", $event),
          placeholder: "Social title (EN)"
        }, null, _parent));
        _push(`</div><div class="field-half" data-v-82cb8801><label class="field-label" data-v-82cb8801>Section Title (AR)</label>`);
        _push(ssrRenderComponent(TextInput, {
          modelValue: localSocial.value.title_ar || "",
          "onUpdate:modelValue": ($event) => updateSocialTitle("title_ar", $event),
          placeholder: "Social title (AR)",
          dir: "rtl"
        }, null, _parent));
        _push(`</div></div><div class="social-items-section" data-v-82cb8801><div class="links-header" data-v-82cb8801><span class="links-title" data-v-82cb8801>Social Icons</span><button type="button" class="add-link-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="12" y1="5" x2="12" y2="19" data-v-82cb8801></line><line x1="5" y1="12" x2="19" y2="12" data-v-82cb8801></line></svg> Add Social </button></div><div class="social-items-list" data-v-82cb8801><!--[-->`);
        ssrRenderList(localSocial.value.links || [], (item, itemIndex) => {
          _push(`<div class="social-item"${ssrRenderAttr("data-index", itemIndex)} data-v-82cb8801><div class="social-item-drag-handle" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><circle cx="9" cy="5" r="1" data-v-82cb8801></circle><circle cx="9" cy="12" r="1" data-v-82cb8801></circle><circle cx="9" cy="19" r="1" data-v-82cb8801></circle><circle cx="15" cy="5" r="1" data-v-82cb8801></circle><circle cx="15" cy="12" r="1" data-v-82cb8801></circle><circle cx="15" cy="19" r="1" data-v-82cb8801></circle></svg></div><div class="social-item-fields" data-v-82cb8801>`);
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
          _push(`</div><button type="button" class="remove-link-btn" data-v-82cb8801><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-82cb8801><line x1="18" y1="6" x2="6" y2="18" data-v-82cb8801></line><line x1="6" y1="6" x2="18" y2="18" data-v-82cb8801></line></svg></button></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/FooterMenuEditor.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const FooterMenuEditor = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-82cb8801"]]);
const _sfc_main$E = {
  __name: "ConceptBlockEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: true
      // Expected: { blocks: [], counters: [] }
    },
    currentLang: {
      type: String,
      default: "en"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const data = ref(JSON.parse(JSON.stringify(props.modelValue)));
    const expandedBlocks = ref(/* @__PURE__ */ new Set([0]));
    const expandedCounters = ref(/* @__PURE__ */ new Set());
    watch(() => props.modelValue, (newVal) => {
      data.value = JSON.parse(JSON.stringify(newVal));
    }, { deep: true });
    const isBlockExpanded = (index) => expandedBlocks.value.has(index);
    const getBlockTitle = (block) => {
      const title = block[`title_${props.currentLang}`] || block.title_en || block.title_ar || "";
      return title || "Untitled Block";
    };
    const updateBlockField = (blockIndex, field, value) => {
      data.value.blocks[blockIndex][field] = value;
      emitUpdate();
    };
    const getParagraphs = (block) => {
      return block[`paragraphs_${props.currentLang}`] || [];
    };
    const updateParagraph = (blockIndex, paraIndex, value) => {
      const key = `paragraphs_${props.currentLang}`;
      if (!data.value.blocks[blockIndex][key]) {
        data.value.blocks[blockIndex][key] = [];
      }
      data.value.blocks[blockIndex][key][paraIndex] = value;
      emitUpdate();
    };
    const updateSlide = (blockIndex, slideIndex, field, value) => {
      data.value.blocks[blockIndex].slides[slideIndex][field] = value;
      emitUpdate();
    };
    const isCounterExpanded = (index) => expandedCounters.value.has(index);
    const updateCounter = (index, field, value) => {
      data.value.counters[index][field] = value;
      emitUpdate();
    };
    const emitUpdate = () => {
      emit("update:modelValue", JSON.parse(JSON.stringify(data.value)));
    };
    const radiusOptions = [
      { value: "radious-bottom-left", label: "Bottom Left" },
      { value: "radious-top-right", label: "Top Right" },
      { value: "radious-bottom-right", label: "Bottom Right" },
      { value: "radious-top-left", label: "Top Left" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "concept-editor" }, _attrs))} data-v-cdeddd04><div class="editor-section" data-v-cdeddd04><div class="section-header" data-v-cdeddd04><h3 class="section-title" data-v-cdeddd04>Content Blocks</h3><span class="item-count" data-v-cdeddd04>${ssrInterpolate(data.value.blocks?.length || 0)} blocks</span></div><div class="items-list" data-v-cdeddd04><!--[-->`);
      ssrRenderList(data.value.blocks, (block, blockIndex) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isBlockExpanded(blockIndex) }, "editor-item"])}" data-v-cdeddd04><div class="item-header" data-v-cdeddd04><span class="block-number" data-v-cdeddd04>${ssrInterpolate(blockIndex + 1)}</span><span class="item-title" data-v-cdeddd04>${ssrInterpolate(getBlockTitle(block))}</span><div class="item-actions" data-v-cdeddd04><button type="button" class="${ssrRenderClass([{ "rotated": isBlockExpanded(blockIndex) }, "action-btn expand"])}" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-cdeddd04></path></svg></button></div></div>`);
        if (isBlockExpanded(blockIndex)) {
          _push(`<div class="item-content" data-v-cdeddd04>`);
          _push(ssrRenderComponent(TextInput, {
            "model-value": block[`title_${__props.currentLang}`],
            label: `Title (${__props.currentLang.toUpperCase()})`,
            placeholder: "Enter block title",
            "onUpdate:modelValue": ($event) => updateBlockField(blockIndex, `title_${__props.currentLang}`, $event)
          }, null, _parent));
          _push(`<div class="sub-section" data-v-cdeddd04><div class="sub-header" data-v-cdeddd04><span class="sub-label" data-v-cdeddd04>Paragraphs (${ssrInterpolate(__props.currentLang.toUpperCase())})</span><button type="button" class="add-btn-small" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-cdeddd04></path></svg> Add </button></div><div class="paragraphs-list" data-v-cdeddd04><!--[-->`);
          ssrRenderList(getParagraphs(block), (para, paraIndex) => {
            _push(`<div class="paragraph-item" data-v-cdeddd04>`);
            _push(ssrRenderComponent(RichTextEditor, {
              "model-value": para,
              label: `Paragraph ${paraIndex + 1}`,
              "onUpdate:modelValue": ($event) => updateParagraph(blockIndex, paraIndex, $event)
            }, null, _parent));
            if (getParagraphs(block).length > 1) {
              _push(`<button type="button" class="remove-para-btn" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-cdeddd04></path></svg></button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div><div class="sub-section" data-v-cdeddd04><div class="sub-header" data-v-cdeddd04><span class="sub-label" data-v-cdeddd04>Slides</span><button type="button" class="add-btn-small" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-cdeddd04></path></svg> Add Slide </button></div><div class="slides-grid" data-v-cdeddd04><!--[-->`);
          ssrRenderList(block.slides, (slide, slideIndex) => {
            _push(`<div class="slide-item" data-v-cdeddd04><div class="slide-preview" data-v-cdeddd04>`);
            if (slide.image) {
              _push(`<img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.alt)} data-v-cdeddd04>`);
            } else {
              _push(`<label class="slide-upload" data-v-cdeddd04><input type="file" accept="image/*" class="hidden-input" data-v-cdeddd04><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-cdeddd04><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-cdeddd04></path></svg><span data-v-cdeddd04>Upload</span></label>`);
            }
            if (slide.image) {
              _push(`<button type="button" class="slide-remove" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-cdeddd04></path></svg></button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="slide-fields" data-v-cdeddd04>`);
            _push(ssrRenderComponent(TextInput, {
              "model-value": slide.alt,
              label: "Alt Text",
              placeholder: "Describe the image",
              "onUpdate:modelValue": ($event) => updateSlide(blockIndex, slideIndex, "alt", $event)
            }, null, _parent));
            _push(`<div class="select-field" data-v-cdeddd04><label data-v-cdeddd04>Corner Style</label><select${ssrRenderAttr("value", slide.radius_class)} data-v-cdeddd04><!--[-->`);
            ssrRenderList(radiusOptions, (opt) => {
              _push(`<option${ssrRenderAttr("value", opt.value)} data-v-cdeddd04>${ssrInterpolate(opt.label)}</option>`);
            });
            _push(`<!--]--></select></div></div></div>`);
          });
          _push(`<!--]--></div>`);
          if (!block.slides?.length) {
            _push(`<p class="empty-msg" data-v-cdeddd04>No slides added</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="editor-section" data-v-cdeddd04><div class="section-header" data-v-cdeddd04><h3 class="section-title" data-v-cdeddd04>Counter Stats</h3><span class="item-count" data-v-cdeddd04>${ssrInterpolate(data.value.counters?.length || 0)} counters</span></div><div class="items-list counters-list" data-v-cdeddd04><!--[-->`);
      ssrRenderList(data.value.counters, (counter, counterIndex) => {
        _push(`<div class="${ssrRenderClass([{ "is-expanded": isCounterExpanded(counterIndex) }, "editor-item counter-item"])}" data-v-cdeddd04><div class="item-header" data-v-cdeddd04><span class="counter-value" data-v-cdeddd04>${ssrInterpolate(counter.value || "0")}</span><span class="counter-label" data-v-cdeddd04>${ssrInterpolate(counter[`label_${__props.currentLang}`] || "Counter")}</span><div class="item-actions" data-v-cdeddd04><button type="button" class="${ssrRenderClass([{ "rotated": isCounterExpanded(counterIndex) }, "action-btn expand"])}" data-v-cdeddd04><svg viewBox="0 0 20 20" fill="currentColor" data-v-cdeddd04><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-cdeddd04></path></svg></button></div></div>`);
        if (isCounterExpanded(counterIndex)) {
          _push(`<div class="item-content" data-v-cdeddd04><div class="fields-row" data-v-cdeddd04>`);
          _push(ssrRenderComponent(TextInput, {
            "model-value": counter.value,
            label: "Value",
            placeholder: "e.g., 50+",
            "onUpdate:modelValue": ($event) => updateCounter(counterIndex, "value", $event)
          }, null, _parent));
          _push(ssrRenderComponent(TextInput, {
            "model-value": counter[`label_${__props.currentLang}`],
            label: `Label (${__props.currentLang.toUpperCase()})`,
            placeholder: "e.g., Our Projects",
            "onUpdate:modelValue": ($event) => updateCounter(counterIndex, `label_${__props.currentLang}`, $event)
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/ConceptBlockEditor.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const ConceptBlockEditor = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-cdeddd04"]]);
const saFlag = "/build/assets/sa-flag-D4E_9N_f.svg";
const usFlag = "/build/assets/us-flag-yPINlvk7.svg";
const _sfc_main$D = {
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
            basicFields: [
              { key: "subtitle", type: "text" },
              { key: "title", type: "text" },
              { key: "description", type: "richtext" }
            ],
            buttonFields: [
              { key: "button_text", label: "Primary Button Text" },
              { key: "button_url", label: "Primary Button URL" },
              { key: "secondary_button_text", label: "Secondary Button Text" },
              { key: "secondary_button_url", label: "Secondary Button URL" }
            ],
            imageFields: [
              { key: "background_image", showAlt: true },
              { key: "shape_image", showAlt: false },
              { key: "icon", showAlt: false },
              { key: "hero_image", showAlt: false },
              { key: "hero_bg_image", showAlt: false }
            ],
            repeaterFields: [{
              key: "slides",
              label: "Slider Images (for Slider variant)",
              itemLabel: "Slide",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: true, simpleAlt: true }
              ],
              defaultItem: { image: "", alt: "" }
            }],
            variantField: {
              key: "variant",
              options: [
                { value: "slider", label: "Slider (Homepage)" },
                { value: "service", label: "Service (Dark Background)" },
                { value: "common", label: "Common (Light Background)" }
              ]
            }
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
                { key: "image", label: "Logo Image", type: "image", showAlt: true, simpleAlt: true },
                { key: "url", label: "Website URL", type: "url" }
              ],
              defaultItem: { image: "", url: "#", alt: "" }
            }]
          };
        case "concept":
          return {
            basicFields: [],
            buttonFields: [],
            imageFields: [
              { key: "shape_image", showAlt: false },
              { key: "bottom_shape_image", showAlt: false },
              { key: "counter_bg_image", showAlt: false }
            ],
            repeaterFields: [],
            conceptEditor: true
            // Use dedicated ConceptBlockEditor
          };
        case "services":
          return {
            basicFields: [{ key: "title", type: "text" }],
            buttonFields: [],
            imageFields: [{ key: "shape_image", showAlt: false }],
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
            basicFields: [
              { key: "title", type: "text" },
              { key: "description", type: "richtext" }
            ],
            buttonFields: ["button_text", "button_url"],
            imageFields: [{ key: "shape_image", showAlt: false }],
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
            basicFields: [{ key: "title", type: "text" }],
            buttonFields: [],
            imageFields: [
              { key: "shape_image", showAlt: false },
              { key: "work_shape_image", showAlt: false }
            ],
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
            basicFields: [{ key: "title", type: "text" }],
            buttonFields: [],
            imageFields: [{ key: "shape_image", showAlt: false }],
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
            imageFields: [
              { key: "background_image", showAlt: true },
              { key: "contact_logo", showAlt: false }
            ],
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
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" }
            ],
            buttonFields: ["button_text", "button_url"],
            imageFields: [{ key: "shape_image", showAlt: false }],
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
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" }
            ],
            buttonFields: [],
            imageFields: [{ key: "shape_image", showAlt: false }],
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
            basicFields: [
              { key: "title", type: "text" },
              { key: "description", type: "richtext" }
            ],
            buttonFields: [
              { key: "primary_button_text", label: "Primary Button Text" },
              { key: "primary_button_url", label: "Primary Button URL" },
              { key: "secondary_button_text", label: "Secondary Button Text" },
              { key: "secondary_button_url", label: "Secondary Button URL" }
            ],
            imageFields: [
              { key: "shape_image", showAlt: false },
              { key: "image", showAlt: false }
            ],
            repeaterFields: []
          };
        case "header":
          return {
            basicFields: [],
            buttonFields: ["contact_button_text", "contact_button_url"],
            imageFields: [
              { key: "logo", showAlt: false },
              { key: "flag_ar", showAlt: false },
              { key: "flag_en", showAlt: false },
              { key: "check_icon", showAlt: false }
            ],
            repeaterFields: [],
            nestedMenuField: {
              key: "menu_items",
              label: "Menu Items"
            },
            variantField: {
              key: "variant",
              options: [
                { value: "dark", label: "Dark (Transparent/White)" },
                { value: "light", label: "Light (Solid Background)" }
              ]
            }
          };
        case "footer":
          return {
            basicFields: ["tagline", "copyright_text"],
            buttonFields: [],
            imageFields: [
              { key: "logo", showAlt: false },
              { key: "shape_image", showAlt: false }
            ],
            repeaterFields: [],
            footerFields: {
              menuColumns: "menu_columns",
              contactInfo: "contact_info",
              social: "social"
            }
          };
        case "contact-info":
          return {
            basicFields: [
              { key: "section_title", type: "text" },
              { key: "section_description", type: "richtext" },
              { key: "general_info_title", type: "text" },
              { key: "general_info_description", type: "richtext" },
              { key: "form_title", type: "text" },
              { key: "form_description", type: "richtext" }
            ],
            buttonFields: [],
            imageFields: [{ key: "overlay_image", showAlt: false }],
            repeaterFields: [
              {
                key: "info_cards",
                label: "Contact Info Cards",
                itemLabel: "Card",
                fields: [
                  { key: "icon", label: "Icon", type: "image", showAlt: false },
                  { key: "title", label: "Title", type: "text", bilingual: true },
                  { key: "content", label: "Content", type: "richtext", bilingual: true }
                ],
                defaultItem: { icon: "", title_en: "", title_ar: "", content_en: "", content_ar: "" }
              },
              {
                key: "info_items",
                label: "General Info Items",
                itemLabel: "Info Item",
                fields: [
                  { key: "label", label: "Label", type: "text", bilingual: true },
                  { key: "value", label: "Value", type: "text", bilingual: true },
                  { key: "type", label: "Type", type: "text" }
                ],
                defaultItem: { label_en: "", label_ar: "", value_en: "", value_ar: "", type: "text" }
              }
            ]
          };
        case "page-banner":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" },
              { key: "breadcrumb", type: "text" }
            ],
            buttonFields: [],
            imageFields: [
              { key: "background_image", showAlt: true },
              { key: "icon", showAlt: false },
              { key: "shape_image", showAlt: false },
              { key: "side_image", showAlt: false }
            ],
            repeaterFields: [],
            variantField: {
              key: "variant",
              options: [
                { value: "default", label: "Default (Centered)" },
                { value: "services", label: "Services (Side Image)" },
                { value: "about", label: "About (Wide)" }
              ]
            }
          };
        case "contact-banner":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "breadcrumb", type: "text" }
            ],
            buttonFields: [],
            imageFields: [
              { key: "background_image", showAlt: true },
              { key: "icon", showAlt: false },
              { key: "side_image", showAlt: false }
            ],
            repeaterFields: []
          };
        case "about":
          return {
            basicFields: [],
            buttonFields: [],
            imageFields: [
              { key: "shape_image", showAlt: false },
              { key: "left_shape_image", showAlt: false },
              { key: "right_shape_image", showAlt: false }
            ],
            repeaterFields: [{
              key: "blocks",
              label: "About Blocks",
              itemLabel: "Block",
              fields: [
                { key: "icon", label: "Icon", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true },
                { key: "content", label: "Content", type: "richtext", bilingual: true },
                { key: "image", label: "Image", type: "image", showAlt: false },
                { key: "image_bg", label: "Image Background", type: "image", showAlt: false },
                { key: "layout", label: "Layout", type: "text" }
              ],
              defaultItem: {
                icon: "",
                title_en: "",
                title_ar: "",
                content_en: "",
                content_ar: "",
                image: "",
                image_bg: "",
                layout: "image-right"
              }
            }]
          };
        case "hero_slider":
          return {
            basicFields: [
              { key: "subtitle", type: "text" },
              { key: "title", type: "text" },
              { key: "description", type: "richtext" }
            ],
            buttonFields: ["button_text", "button_url"],
            imageFields: [
              { key: "background_image", showAlt: true }
            ],
            repeaterFields: [{
              key: "slides",
              label: "Slider Images",
              itemLabel: "Slide",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: true, simpleAlt: true }
              ],
              defaultItem: { image: "", alt: "" }
            }]
          };
        case "hero_common":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "description", type: "richtext" }
            ],
            buttonFields: [
              { key: "button_text", label: "Primary Button Text" },
              { key: "button_url", label: "Primary Button URL" },
              { key: "secondary_button_text", label: "Secondary Button Text" },
              { key: "secondary_button_url", label: "Secondary Button URL" }
            ],
            imageFields: [
              { key: "background_image", showAlt: false },
              { key: "shape_image", showAlt: false },
              { key: "icon", showAlt: false },
              { key: "hero_image", showAlt: false },
              { key: "hero_bg_image", showAlt: false }
            ],
            repeaterFields: []
          };
        case "newsletter":
          return {
            basicFields: [
              { key: "title1", type: "text" },
              { key: "title2", type: "text" },
              { key: "phone_label", type: "text" },
              { key: "phone", type: "text" }
            ],
            buttonFields: [],
            imageFields: [
              { key: "background_image", showAlt: false },
              { key: "icon", showAlt: false }
            ],
            repeaterFields: []
          };
        case "map":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" },
              { key: "address", type: "text" },
              { key: "business_name", type: "text" },
              { key: "latitude", type: "text" },
              { key: "longitude", type: "text" },
              { key: "zoom", type: "text" },
              { key: "height", type: "text" },
              { key: "embed_url", type: "text" }
            ],
            buttonFields: [],
            imageFields: [],
            repeaterFields: []
          };
        case "common_service":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" },
              { key: "title_color", type: "text" }
            ],
            buttonFields: [],
            imageFields: [{ key: "section_icon", showAlt: false }],
            repeaterFields: [{
              key: "services",
              label: "Services",
              itemLabel: "Service",
              fields: [
                { key: "icon", label: "Icon", type: "image", showAlt: false },
                { key: "title", label: "Title", type: "text", bilingual: true },
                { key: "description", label: "Description", type: "richtext", bilingual: true }
              ],
              defaultItem: { icon: "", title_en: "", title_ar: "", description_en: "", description_ar: "" }
            }]
          };
        case "counter_area":
          return {
            basicFields: [{ key: "no_margin_top", type: "checkbox" }],
            buttonFields: [],
            imageFields: [],
            repeaterFields: [{
              key: "counters",
              label: "Counter Items",
              itemLabel: "Counter",
              fields: [
                { key: "icon", label: "Icon", type: "image", showAlt: false },
                { key: "value", label: "Value (e.g. +40)", type: "text" },
                { key: "label", label: "Label", type: "text", bilingual: true }
              ],
              defaultItem: { icon: "", value: "", label_en: "", label_ar: "" }
            }]
          };
        case "gallery_page":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "subtitle", type: "text" },
              { key: "breadcrumb", type: "text" }
            ],
            buttonFields: [],
            imageFields: [],
            repeaterFields: [{
              key: "items",
              label: "Gallery Items",
              itemLabel: "Item",
              fields: [
                { key: "image", label: "Image", type: "image", showAlt: false },
                { key: "label", label: "Label", type: "text", bilingual: true },
                { key: "url", label: "URL", type: "url" }
              ],
              defaultItem: { image: "", label_en: "", label_ar: "", url: "#" }
            }]
          };
        case "hero_riya":
        case "hero_jiyad":
        case "hero_shopsz":
        case "hero_beyond_erp":
        case "hero_beyond_pay":
          return {
            basicFields: [
              { key: "title", type: "text" },
              { key: "description", type: "richtext" },
              { key: "title_color", type: "text" }
            ],
            buttonFields: [
              { key: "button_text", label: "Primary Button Text" },
              { key: "button_url", label: "Primary Button URL" },
              { key: "secondary_button_text", label: "Secondary Button Text" },
              { key: "secondary_button_url", label: "Secondary Button URL" }
            ],
            imageFields: [
              { key: "shape_image", showAlt: false },
              { key: "icon", showAlt: false },
              { key: "hero_image", showAlt: false },
              { key: "hero_bg_image", showAlt: false }
            ],
            repeaterFields: []
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
        formData[`${field}_alt_en`] = value.alt_en || "";
        formData[`${field}_alt_ar`] = value.alt_ar || "";
      } else {
        formData[field] = value;
      }
      emit("change");
    };
    const getImageData = (field) => {
      if (!(field in formData)) {
        formData[field] = "";
      }
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
      _push(`<!--[--><div class="sidebar-overlay" data-v-1e82804e></div><div class="edit-sidebar" data-v-1e82804e><div class="sidebar-header" data-v-1e82804e><div class="header-content" data-v-1e82804e><h2 class="sidebar-title" data-v-1e82804e>Edit Section</h2><p class="section-type" data-v-1e82804e>${ssrInterpolate(__props.section.section_type?.name_en || "Section")}</p></div><button class="close-btn" data-v-1e82804e><svg viewBox="0 0 20 20" fill="currentColor" data-v-1e82804e><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-1e82804e></path></svg></button></div><div class="sidebar-body" data-v-1e82804e><div class="language-tabs" data-v-1e82804e><button class="${ssrRenderClass(["lang-tab", { "active": currentLang.value === "en" }])}" data-v-1e82804e><img${ssrRenderAttr("src", unref(usFlag))} alt="English" class="flag-icon" data-v-1e82804e> English </button><button class="${ssrRenderClass(["lang-tab", { "active": currentLang.value === "ar" }])}" data-v-1e82804e><img${ssrRenderAttr("src", unref(saFlag))} alt="Arabic" class="flag-icon" data-v-1e82804e> Arabic </button></div><div class="content-fields" data-v-1e82804e><!--[-->`);
      ssrRenderList(getSectionFields.value.basicFields, (field) => {
        _push(`<!--[-->`);
        if (typeof field === "object") {
          _push(`<!--[-->`);
          if (field.type === "text" && hasField(field.key)) {
            _push(ssrRenderComponent(TextInput, {
              "model-value": getFieldValue(field.key),
              label: formatLabel(field.key),
              placeholder: `Enter ${formatLabel(field.key).toLowerCase()}`,
              "onUpdate:modelValue": ($event) => setFieldValue(field.key, $event)
            }, null, _parent));
          } else if (field.type === "richtext" && hasField(field.key)) {
            _push(ssrRenderComponent(RichTextEditor, {
              "model-value": getFieldValue(field.key),
              label: formatLabel(field.key),
              placeholder: `Enter ${formatLabel(field.key).toLowerCase()}`,
              "onUpdate:modelValue": ($event) => setFieldValue(field.key, $event)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else if (hasField(field)) {
          _push(ssrRenderComponent(TextInput, {
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
        _push(`<div class="field-group" data-v-1e82804e><h3 class="group-title" data-v-1e82804e>Button Settings</h3><!--[-->`);
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
              _push(ssrRenderComponent(UrlAutocomplete, {
                "model-value": formData[btnField.key],
                label: btnField.label,
                placeholder: `Type / for internal pages or enter URL`,
                lang: currentLang.value,
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
              _push(ssrRenderComponent(UrlAutocomplete, {
                "model-value": formData[btnField],
                label: formatLabel(btnField),
                placeholder: `Type / for internal pages or enter URL`,
                lang: currentLang.value,
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
        _push(`<div class="field-group" data-v-1e82804e><h3 class="group-title" data-v-1e82804e>Images</h3><!--[-->`);
        ssrRenderList(getSectionFields.value.imageFields, (imgField) => {
          _push(`<!--[-->`);
          if (typeof imgField === "object") {
            _push(ssrRenderComponent(ImageWithAlt, {
              "model-value": getImageData(imgField.key),
              label: formatLabel(imgField.key),
              "section-type": sectionKey.value,
              "current-lang": currentLang.value,
              "show-alt-fields": imgField.showAlt,
              "onUpdate:modelValue": ($event) => updateImage(imgField.key, $event)
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(ImageWithAlt, {
              "model-value": getImageData(imgField),
              label: formatLabel(imgField),
              "section-type": sectionKey.value,
              "current-lang": currentLang.value,
              "show-alt-fields": imgField.includes("background") || imgField === "image",
              "onUpdate:modelValue": ($event) => updateImage(imgField, $event)
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getSectionFields.value.conceptEditor) {
        _push(`<div class="field-group" data-v-1e82804e><h3 class="group-title" data-v-1e82804e>Content</h3>`);
        _push(ssrRenderComponent(ConceptBlockEditor, {
          "model-value": { blocks: formData.blocks || [], counters: formData.counters || [] },
          "current-lang": currentLang.value,
          "onUpdate:modelValue": ($event) => {
            formData.blocks = $event.blocks;
            formData.counters = $event.counters;
            emit("change");
          }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(getSectionFields.value.repeaterFields, (repeater) => {
        _push(`<div class="field-group" data-v-1e82804e>`);
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
        _push(`<div class="field-group" data-v-1e82804e>`);
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
        _push(`<div class="field-group" data-v-1e82804e><h3 class="group-title" data-v-1e82804e>Footer Menus &amp; Links</h3>`);
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
      if (getSectionFields.value.variantField) {
        _push(`<div class="field-group" data-v-1e82804e><h3 class="group-title" data-v-1e82804e>Layout Style</h3><div class="variant-selector" data-v-1e82804e><label class="field-label" data-v-1e82804e>${ssrInterpolate(formatLabel(getSectionFields.value.variantField.key))}</label><div class="variant-options" data-v-1e82804e><!--[-->`);
        ssrRenderList(getSectionFields.value.variantField.options, (option) => {
          _push(`<label class="${ssrRenderClass([{ "active": formData[getSectionFields.value.variantField.key] === option.value }, "variant-option"])}" data-v-1e82804e><input type="radio"${ssrRenderAttr("name", getSectionFields.value.variantField.key)}${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(formData[getSectionFields.value.variantField.key] === option.value) ? " checked" : ""} data-v-1e82804e><span class="option-label" data-v-1e82804e>${ssrInterpolate(option.label)}</span></label>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="sidebar-footer" data-v-1e82804e>`);
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
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-1e82804e${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-1e82804e${_scopeId}></path></svg> Save Changes `);
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
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/EditSectionSidebar.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const EditSectionSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-1e82804e"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditSectionSidebar
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
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
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Toast.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-662109b7"]]);
const _sfc_main$B = {
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
    },
    hreflang: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    let offcanvasElement = null;
    onMounted(() => {
      offcanvasElement = document.getElementById("offcanvasExample");
      if (offcanvasElement) {
        offcanvasElement.addEventListener("shown.bs.offcanvas", () => {
          const offcanvasBody = offcanvasElement.querySelector(".offcanvas-body");
          if (offcanvasBody) {
            offcanvasBody.style.opacity = "1";
            offcanvasBody.style.visibility = "visible";
          }
        });
      }
    });
    onUnmounted(() => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener("shown.bs.offcanvas", () => {
        });
      }
    });
    const menuItems = computed(() => props.content.menu_items || []);
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const isInternalUrl = (url) => {
      if (!url) return false;
      if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("javascript:") || url === "#") {
        return false;
      }
      if (url.startsWith("#")) return false;
      return url.startsWith("/") || !url.includes("://");
    };
    const getUrl = (item) => {
      if (props.lang === "ar") {
        return item.url_ar || item.url || "#";
      }
      return item.url_en || item.url || "#";
    };
    const getImageUrl = (img, defaultPath = "") => {
      if (!img || typeof img !== "string") return defaultPath;
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const flagAr = computed(() => getImageUrl(props.content.flag_ar, "/assets/img/flag-1.png"));
    const flagEn = computed(() => getImageUrl(props.content.flag_en, "/assets/img/flag-2.png"));
    const checkRadio = computed(() => getImageUrl(props.content.check_icon, "/assets/img/check-radio.svg"));
    const variant = computed(() => props.content.variant || "dark");
    const headerClass = computed(() => {
      return variant.value === "light" ? "header-area header-light" : "header-area";
    });
    const logo = computed(() => {
      if (!props.content.logo || props.content.logo === "/assets/img/logo.png" || props.content.logo === "/assets/img/logo-black.png") {
        return variant.value === "light" ? "/assets/img/logo-black.png" : "/assets/img/logo.png";
      }
      return getImageUrl(props.content.logo);
    });
    const getLabel = (item) => {
      return props.lang === "ar" ? item.label_ar : item.label_en;
    };
    const contactButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.contact_button_text_ar : props.content.contact_button_text_en;
      return stripHtml(text);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-v-35ce3d5f><div class="offcanvas-header" data-v-35ce3d5f><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" data-v-35ce3d5f></button></div><div class="offcanvas-body" data-v-35ce3d5f><div class="offcanvas-menu accordion" data-v-35ce3d5f><ul data-v-35ce3d5f><!--[-->`);
      ssrRenderList(menuItems.value, (item, index) => {
        _push(`<!--[-->`);
        if (!item.children || item.children.length === 0) {
          _push(`<li data-v-35ce3d5f>`);
          if (isInternalUrl(getUrl(item))) {
            _push(ssrRenderComponent(unref(link_default), {
              href: getUrl(item)
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(getLabel(item))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(getLabel(item)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a${ssrRenderAttr("href", getUrl(item))} data-v-35ce3d5f>${ssrInterpolate(getLabel(item))}</a>`);
          }
          _push(`</li>`);
        } else {
          _push(`<li data-v-35ce3d5f><a href="#" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse-mobile-${index}`)} aria-expanded="false"${ssrRenderAttr("aria-controls", `collapse-mobile-${index}`)} data-v-35ce3d5f>${ssrInterpolate(getLabel(item))}</a><div${ssrRenderAttr("id", `collapse-mobile-${index}`)} class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-35ce3d5f><ul class="dropdown-menu-list" data-v-35ce3d5f><!--[-->`);
          ssrRenderList(item.children, (child, childIndex) => {
            _push(`<li data-v-35ce3d5f>`);
            if (isInternalUrl(getUrl(child))) {
              _push(ssrRenderComponent(unref(link_default), {
                class: ["dropdown-item", { "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }],
                href: getUrl(child)
              }, {
                default: withCtx((_2, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(getLabel(child))} <span data-v-35ce3d5f${_scopeId}><i class="far fa-chevron-left" data-v-35ce3d5f${_scopeId}></i></span>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getLabel(child)) + " ", 1),
                      createVNode("span", null, [
                        createVNode("i", { class: "far fa-chevron-left" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<a class="${ssrRenderClass([{ "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }, "dropdown-item"])}"${ssrRenderAttr("href", getUrl(child))} data-v-35ce3d5f>${ssrInterpolate(getLabel(child))} <span data-v-35ce3d5f><i class="far fa-chevron-left" data-v-35ce3d5f></i></span></a>`);
            }
            _push(`</li>`);
          });
          _push(`<!--]--></ul></div></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div>`);
      if (isInternalUrl(__props.content.contact_button_url)) {
        _push(ssrRenderComponent(unref(link_default), {
          href: __props.content.contact_button_url,
          class: "header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contactButtonText.value)} <span data-v-35ce3d5f${_scopeId}><i class="far fa-angle-left" data-v-35ce3d5f${_scopeId}></i></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(contactButtonText.value) + " ", 1),
                createVNode("span", null, [
                  createVNode("i", { class: "far fa-angle-left" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttr("href", __props.content.contact_button_url || "#")} class="header-contact-btn w-100 justify-content-center d-flex align-items-center mt-40 border" data-v-35ce3d5f>${ssrInterpolate(contactButtonText.value)} <span data-v-35ce3d5f><i class="far fa-angle-left" data-v-35ce3d5f></i></span></a>`);
      }
      _push(`</div></div><header class="${ssrRenderClass(headerClass.value)}" data-aos="fade-in" data-v-35ce3d5f><div class="container" data-v-35ce3d5f><div class="header-inner-block d-flex align-items-center justify-content-between" data-v-35ce3d5f><div class="header-left-block d-flex align-items-center" data-v-35ce3d5f><div class="header-logo" data-v-35ce3d5f>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: __props.lang === "ar" ? "/ar" : "/"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logo.value)} alt="Logo" loading="lazy" data-v-35ce3d5f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: logo.value,
                alt: "Logo",
                loading: "lazy"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="main-menu d-none d-lg-block" data-v-35ce3d5f><nav data-v-35ce3d5f><ul class="d-flex align-items-center" data-v-35ce3d5f><!--[-->`);
      ssrRenderList(menuItems.value, (item, index) => {
        _push(`<!--[-->`);
        if (!item.children || item.children.length === 0) {
          _push(`<li data-v-35ce3d5f>`);
          if (isInternalUrl(getUrl(item))) {
            _push(ssrRenderComponent(unref(link_default), {
              href: getUrl(item)
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(getLabel(item))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(getLabel(item)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a${ssrRenderAttr("href", getUrl(item))} data-v-35ce3d5f>${ssrInterpolate(getLabel(item))}</a>`);
          }
          _push(`</li>`);
        } else {
          _push(`<li data-v-35ce3d5f><a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-v-35ce3d5f><span data-v-35ce3d5f><i class="far fa-chevron-down" data-v-35ce3d5f></i></span> ${ssrInterpolate(getLabel(item))}</a><ul class="dropdown-menu" data-v-35ce3d5f><!--[-->`);
          ssrRenderList(item.children, (child, childIndex) => {
            _push(`<li data-v-35ce3d5f>`);
            if (isInternalUrl(getUrl(child))) {
              _push(ssrRenderComponent(unref(link_default), {
                class: ["dropdown-item", { "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }],
                href: getUrl(child)
              }, {
                default: withCtx((_2, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(getLabel(child))} <span data-v-35ce3d5f${_scopeId}><i class="far fa-chevron-left" data-v-35ce3d5f${_scopeId}></i></span>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getLabel(child)) + " ", 1),
                      createVNode("span", null, [
                        createVNode("i", { class: "far fa-chevron-left" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<a class="${ssrRenderClass([{ "pt-0": childIndex === 0, "border-0 pb-0": childIndex === item.children.length - 1 }, "dropdown-item"])}"${ssrRenderAttr("href", getUrl(child))} data-v-35ce3d5f>${ssrInterpolate(getLabel(child))} <span data-v-35ce3d5f><i class="far fa-chevron-left" data-v-35ce3d5f></i></span></a>`);
            }
            _push(`</li>`);
          });
          _push(`<!--]--></ul></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></nav></div></div><div class="header-btns d-flex align-items-center gap-2" data-v-35ce3d5f>`);
      if (isInternalUrl(__props.content.contact_button_url)) {
        _push(ssrRenderComponent(unref(link_default), {
          href: __props.content.contact_button_url,
          class: "header-contact-btn d-none d-lg-inline-flex align-items-center"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contactButtonText.value)} <span data-v-35ce3d5f${_scopeId}><i class="far fa-angle-left" data-v-35ce3d5f${_scopeId}></i></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(contactButtonText.value) + " ", 1),
                createVNode("span", null, [
                  createVNode("i", { class: "far fa-angle-left" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttr("href", __props.content.contact_button_url || "#")} class="header-contact-btn d-none d-lg-inline-flex align-items-center" data-v-35ce3d5f>${ssrInterpolate(contactButtonText.value)} <span data-v-35ce3d5f><i class="far fa-angle-left" data-v-35ce3d5f></i></span></a>`);
      }
      _push(`<div class="language-select" data-v-35ce3d5f><div class="selectorwith_flag" data-v-35ce3d5f><div class="select-box" data-v-35ce3d5f><div class="select-box__current" tabindex="1" data-v-35ce3d5f><div class="select-box__value" data-v-35ce3d5f><input class="select-box__input" type="radio" id="lang-ar" value="ar" name="language"${ssrIncludeBooleanAttr(__props.lang === "ar") ? " checked" : ""} data-v-35ce3d5f><p class="select-box__input-text" data-v-35ce3d5f><img${ssrRenderAttr("src", flagAr.value)} alt="" loading="lazy" data-v-35ce3d5f> عربي </p></div><div class="select-box__value" data-v-35ce3d5f><input class="select-box__input" type="radio" id="lang-en" value="en" name="language"${ssrIncludeBooleanAttr(__props.lang === "en") ? " checked" : ""} data-v-35ce3d5f><p class="select-box__input-text" data-v-35ce3d5f><img${ssrRenderAttr("src", flagEn.value)} alt="" loading="lazy" data-v-35ce3d5f>English </p></div></div><ul class="select-box__list" data-v-35ce3d5f><li class="${ssrRenderClass({ active: __props.lang === "ar" })}" data-v-35ce3d5f><label class="select-box__option" for="lang-ar" aria-hidden="true" data-v-35ce3d5f><img${ssrRenderAttr("src", flagAr.value)} alt="" loading="lazy" data-v-35ce3d5f> عربي </label><span class="check-image" data-v-35ce3d5f><img${ssrRenderAttr("src", checkRadio.value)} alt="check-radio" loading="lazy" data-v-35ce3d5f></span></li><li class="${ssrRenderClass({ active: __props.lang === "en" })}" data-v-35ce3d5f><label class="select-box__option" for="lang-en" aria-hidden="true" data-v-35ce3d5f><img${ssrRenderAttr("src", flagEn.value)} alt="" loading="lazy" data-v-35ce3d5f>English </label><span class="check-image" data-v-35ce3d5f><img${ssrRenderAttr("src", checkRadio.value)} alt="check-radio" loading="lazy" data-v-35ce3d5f></span></li></ul></div></div></div><a class="open-menu d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" data-v-35ce3d5f><i class="far fa-bars" data-v-35ce3d5f></i></a></div></div></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeaderSection.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const HeaderSection = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-35ce3d5f"]]);
const _sfc_main$A = {
  __name: "HeroSliderSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
    const slidesWithUrls = computed(() => {
      if (!props.content.slides || !Array.isArray(props.content.slides)) return [];
      return props.content.slides.map((slide) => ({
        ...slide,
        imageUrl: getImageUrl(slide.image)
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-area position-relative",
        style: { backgroundImage: backgroundImageUrl.value ? `url('${backgroundImageUrl.value}')` : "" }
      }, _attrs))}><div class="container"><div class="hero-inner-block"><div class="hero-title" data-aos="fade-up"><h5>${subtitle.value ?? ""}</h5><h1>${title.value ?? ""}</h1></div><div class="swiper hero-slide-thumb" data-aos="fade-up" data-aos-delay="300"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(slidesWithUrls.value, (slide, index) => {
        _push(`<div class="swiper-slide"><div class="hero-slide-card"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", slide.imageUrl)}${ssrRenderAttr("alt", slide.alt || "Thumb")} loading="lazy" decoding="async"></div></div>`);
      });
      _push(`<!--]--></div></div><div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500"><p>${description.value ?? ""}</p></div><div class="hero-btn d-flex justify-content-center" data-aos="fade-up"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroSliderSection.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "HeroCommonSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image || props.content.side_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    const bgStyle = computed(() => {
      if (backgroundImageUrl.value) {
        return { backgroundImage: `url(${backgroundImageUrl.value})`, backgroundSize: "cover", backgroundPosition: "center" };
      }
      return {};
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-area v2 position-relative text-white pb-5 pb-lg-0",
        style: bgStyle.value
      }, _attrs))} data-v-fb76d503>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async" data-v-fb76d503>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container" data-v-fb76d503><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center" data-v-fb76d503><div class="col-lg-6" data-v-fb76d503><div class="hero__block" data-aos="fade-up" data-v-fb76d503>`);
      if (iconUrl.value) {
        _push(`<i data-v-fb76d503><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async" data-v-fb76d503></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="" data-v-fb76d503><h1 class="text-white fs-56" data-v-fb76d503>${title.value ?? ""}</h1><p data-v-fb76d503>${description.value ?? ""}</p><div class="d-flex align-items-center gap-3" data-v-fb76d503>`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center w-max" data-v-fb76d503>${ssrInterpolate(buttonText.value)} <span data-v-fb76d503><i class="${ssrRenderClass(angleIcon.value)}" data-v-fb76d503></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn text-white" data-v-fb76d503>${ssrInterpolate(secondaryButtonText.value)} <span data-v-fb76d503><i class="${ssrRenderClass(longArrowIcon.value)}" data-v-fb76d503></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6" data-v-fb76d503><div class="hero__img" data-aos="fade-up" data-aos-delay="200" data-v-fb76d503>`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async" data-v-fb76d503>`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async" data-v-fb76d503>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroCommonSection.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const HeroCommonSection = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-fb76d503"]]);
const _sfc_main$y = {
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
    const variant = computed(() => props.content.variant || "slider");
    const isSliderVariant = computed(
      () => variant.value === "slider" || variant.value === "v1"
    );
    const isServiceVariant = computed(
      () => variant.value === "service" || variant.value === "v2" || variant.value === "common"
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (isSliderVariant.value) {
        _push(ssrRenderComponent(_sfc_main$A, mergeProps({
          content: __props.content,
          lang: __props.lang
        }, _attrs), null, _parent));
      } else if (isServiceVariant.value) {
        _push(ssrRenderComponent(HeroCommonSection, mergeProps({
          content: __props.content,
          lang: __props.lang
        }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$A, mergeProps({
          content: __props.content,
          lang: __props.lang
        }, _attrs), null, _parent));
      }
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroSection.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = {
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
    const props = __props;
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const logos = computed(() => {
      const rawLogos = props.content.logos || [];
      return rawLogos.map((logo) => ({
        ...logo,
        imageUrl: getImageUrl(logo.image)
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "brand-area" }, _attrs))}><div class="container"><div class="swiper brand-logos-slide"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(logos.value, (logo, index) => {
        _push(`<div class="logo-items swiper-slide" data-aos="zoom-in"><a${ssrRenderAttr("href", logo.url || "#")}><img${ssrRenderAttr("src", logo.imageUrl)}${ssrRenderAttr("alt", logo.alt || "Logo")} loading="lazy" decoding="async"></a></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/PartnersSection.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const getTitle = (block) => props.lang === "ar" ? block.title_ar : block.title_en;
    const getParagraphs = (block) => props.lang === "ar" ? block.paragraphs_ar : block.paragraphs_en;
    const getCounterLabel = (counter) => props.lang === "ar" ? counter.label_ar : counter.label_en;
    const blocks = computed(() => {
      const rawBlocks = props.content.blocks || [];
      return rawBlocks.map((block) => ({
        ...block,
        slides: (block.slides || []).map((slide) => ({
          ...slide,
          imageUrl: getImageUrl(slide.image)
        }))
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const counterBgImageUrl = computed(() => getImageUrl(props.content.counter_bg_image));
    const bottomShapeImageUrl = computed(() => getImageUrl(props.content.bottom_shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "concept-area" }, _attrs))}><div class="container"><div class="concept-inner-block position-relative z-1 overflow-hidden"><!--[-->`);
      ssrRenderList(blocks.value, (block, blockIndex) => {
        _push(`<div class="${ssrRenderClass([{ "second-concept-wrapper m-0": blockIndex > 0 }, "concept-wrapper position-relative z-1 overflow-hidden"])}">`);
        if (shapeImageUrl.value) {
          _push(`<div class="concept-wrapper-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="row align-items-center"><div class="${ssrRenderClass([{ "order-lg-2": !block.image_on_left }, "col-lg-6"])}" data-aos="zoom-in"><div class="${ssrRenderClass([{ "me-0": block.image_on_left }, "swiper concept-thumbnails"])}"><div class="swiper-wrapper"><!--[-->`);
        ssrRenderList(block.slides, (slide, slideIndex) => {
          _push(`<div class="${ssrRenderClass([slide.radius_class, "concept-single-thumb swiper-slide"])}"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", slide.imageUrl)}${ssrRenderAttr("alt", slide.alt || "Thumb")} loading="lazy" decoding="async"></div>`);
        });
        _push(`<!--]--></div></div></div><div class="${ssrRenderClass([{ "order-lg-1": !block.image_on_left }, "col-lg-6"])}" data-aos="fade-right"><div class="concept-content"><h3>${getTitle(block) ?? ""}</h3><!--[-->`);
        ssrRenderList(getParagraphs(block), (paragraph, pIndex) => {
          _push(`<p>${paragraph ?? ""}</p>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--><div class="counter-up-area d-flex align-items-center justify-content-center position-relative z-1"><!--[-->`);
      ssrRenderList(__props.content.counters, (counter, counterIndex) => {
        _push(`<div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="${ssrRenderStyle({ backgroundImage: counterBgImageUrl.value ? `url('${counterBgImageUrl.value}')` : "" })}" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", (counterIndex + 1) * 100)}><h5>${counter.value ?? ""}</h5><p>${getCounterLabel(counter) ?? ""}</p></div>`);
      });
      _push(`<!--]--></div>`);
      if (bottomShapeImageUrl.value) {
        _push(`<div class="concept-shape position-absolute zn-1 w-100" data-aos="fade-up"><img${ssrRenderAttr("src", bottomShapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ConceptSection.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (service) => props.lang === "ar" ? service.title_ar : service.title_en;
    const getDescription = (service) => props.lang === "ar" ? service.description_ar : service.description_en;
    const services = computed(() => {
      const rawServices = props.content.services || [];
      return rawServices.map((service) => ({
        ...service,
        imageUrl: getImageUrl(service.image)
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-area position-relative overflow-hidden pb-80 z-1" }, _attrs))}><div class="container"><div class="service-inner-block"><div class="common-title text-center" data-aos="fade-up"><h3>${sectionTitle.value ?? ""}</h3></div><div class="row"><!--[-->`);
      ssrRenderList(services.value, (service, index) => {
        _push(`<div class="col-md-6" data-aos="fade-up"><div class="service-single-card d-flex align-items-center"><div class="service-card-thumb w-100"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", service.imageUrl)} alt="Thumb" loading="lazy" decoding="async"></div><div class="service-card-content"><h4>${getTitle(service) ?? ""}</h4><p>${getDescription(service) ?? ""}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (shapeImageUrl.value) {
        _push(`<div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ServicesSection.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const getCardTitle = (card) => props.lang === "ar" ? card.title_ar : card.title_en;
    const contactCards = computed(() => {
      const rawCards = props.content.contact_cards || [];
      return rawCards.map((card) => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-area overflow-hidden position-relative z-1 pt-80 pb-80" }, _attrs))}><div class="container"><div class="cta-inner-block"><div class="row align-items-center"><div class="col-xl-5" data-aos="fade-right"><div class="cta-right-block"><div class="service-card-content cta-content text-end"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="cta-btn">${ssrInterpolate(buttonText.value)}</a><h4>${title.value ?? ""}</h4><p>${description.value ?? ""}</p></div></div></div><div class="col-xl-7"><div class="cta-left-block"><div class="row"><!--[-->`);
      ssrRenderList(contactCards.value, (card, index) => {
        _push(`<div class="col-sm-6" data-aos="zoom-in"><div class="cta-card d-flex align-items-center flex-column">`);
        if (card.iconUrl) {
          _push(`<span class="d-flex align-items-center justify-content-center"><img${ssrRenderAttr("src", card.iconUrl)} alt="Icon" loading="lazy" decoding="async"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h5>${getCardTitle(card) ?? ""}</h5><!--[-->`);
        ssrRenderList(card.links, (link, linkIndex) => {
          _push(`<a${ssrRenderAttr("href", link.url)}>${link.text ?? ""}</a>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
      if (shapeImageUrl.value) {
        _push(`<div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CTASection.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (project) => props.lang === "ar" ? project.title_ar : project.title_en;
    const getDescription = (project) => props.lang === "ar" ? project.description_ar : project.description_en;
    const getLearnMoreText = (project) => stripHtml(props.lang === "ar" ? project.learn_more_text_ar : project.learn_more_text_en);
    const getVisitText = (project) => stripHtml(props.lang === "ar" ? project.visit_text_ar : project.visit_text_en);
    const projects = computed(() => {
      const rawProjects = props.content.projects || [];
      return rawProjects.map((project) => ({
        ...project,
        imageUrl: getImageUrl(project.image)
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const workShapeImageUrl = computed(() => getImageUrl(props.content.work_shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-area position-relative z-1 overflow-hidden" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<div class="work-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (shapeImageUrl.value) {
        _push(`<div class="work-second-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="work-inner-block"><div class="common-title text-center" data-aos="zoom-in"><h3>${sectionTitle.value ?? ""}</h3></div><div class="outer-work-swiper swiper"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList([projects.value, projects.value.slice().reverse(), projects.value], (slideGroup, groupIndex) => {
        _push(`<div class="swiper-slide" data-aos="fade-right"${ssrRenderAttr("data-aos-delay", 300 - groupIndex * 100)}><div class="work-wrapper"><div class="work-single-card position-relative z-1"><div class="swiper work-single-wrap"><div class="swiper-wrapper"><!--[-->`);
        ssrRenderList(slideGroup, (project, projectIndex) => {
          _push(`<div class="swiper-slide"><div class="work-slide-single-item" data-aos="fade-right"><div class="work-card-wrap d-flex align-items-center justify-content-between"><div class="work-card-items"><div class="contact-card-content work-card-content"><h4>${getTitle(project) ?? ""}</h4><p>${getDescription(project) ?? ""}</p></div><div class="${ssrRenderClass([project.btn_color_class, "work-card-btns d-flex align-items-center"])}"><a${ssrRenderAttr("href", project.learn_more_url || "#")}>${ssrInterpolate(getLearnMoreText(project))} <span><i class="far fa-angle-left"></i></span></a><a${ssrRenderAttr("href", project.visit_url || "#")} class="secondary-btn">${ssrInterpolate(getVisitText(project))} <span><i class="fal fa-long-arrow-left"></i></span></a></div></div><div class="work-card-thumb"><img${ssrRenderAttr("src", project.imageUrl)} alt="Thumb" loading="lazy" decoding="async"></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (workShapeImageUrl.value) {
          _push(`<div class="work-card-shape position-absolute z-n1"><img${ssrRenderAttr("src", workShapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="swiper-pagination"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/WorkSection.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const getTitle = (member) => props.lang === "ar" ? member.title_ar : member.title_en;
    const getDescription = (member) => props.lang === "ar" ? member.description_ar : member.description_en;
    const members = computed(() => {
      const rawMembers = props.content.members || [];
      return rawMembers.map((member) => ({
        ...member,
        imageUrl: getImageUrl(member.image)
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-area" }, _attrs))}><div class="container"><div class="team-inner-block"><div class="common-title text-center" data-aos="fade-up"><h3>${sectionTitle.value ?? ""}</h3></div><div class="swiper team-card-wrap"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(members.value, (member, index) => {
        _push(`<div class="swiper-slide team-card position-relative z-1" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", (index + 2) * 100)}>`);
        if (shapeImageUrl.value) {
          _push(`<div class="team-card-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="team-thumb"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", member.imageUrl)} alt="Thumb" loading="lazy" decoding="async"></div><div class="team-card-content"><h4>${getTitle(member) ?? ""}</h4><p>${getDescription(member) ?? ""}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="team-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/TeamSection.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const getCardTitle = (card) => props.lang === "ar" ? card.title_ar : card.title_en;
    const getCardDescription = (card) => props.lang === "ar" ? card.description_ar : card.description_en;
    const cards = computed(() => {
      const rawCards = props.content.cards || [];
      return rawCards.map((card) => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
      }));
    });
    const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
    const contactLogoUrl = computed(() => getImageUrl(props.content.contact_logo));
    const bgStyle = computed(() => {
      return backgroundImageUrl.value ? { backgroundImage: `url('${backgroundImageUrl.value}')` } : {};
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "contact-area overflow-hidden",
        style: bgStyle.value
      }, _attrs))}><div class="container"><div class="contact-inner-block p-40 bg-white"><div class="row"><div class="col-xl-6" data-aos="fade-right"><div class="contact-right-block"><!--[-->`);
      ssrRenderList(cards.value, (card, index) => {
        _push(`<div class="${ssrRenderClass([{ "contact-middle-card": index === 1 }, "contact-card d-flex align-items-center"])}">`);
        if (card.iconUrl) {
          _push(`<div class="contact-card-icon"><img${ssrRenderAttr("src", card.iconUrl)} alt="Icon" loading="lazy" decoding="async"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="contact-card-content"><h4>${getCardTitle(card) ?? ""}</h4><p>${getCardDescription(card) ?? ""}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-xl-6" data-aos="zoom-in"><div class="contact-left d-flex align-items-center justify-content-start flex-column">`);
      if (contactLogoUrl.value) {
        _push(`<div class="contact-logo"><a href="#"><img${ssrRenderAttr("src", contactLogoUrl.value)} alt="Logo" loading="lazy" decoding="async"></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="contact-btn"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="far fa-angle-left"></i></span></a></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactSection.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const images = computed(() => {
      const rawImages = props.content.images || [];
      return rawImages.map((item) => ({
        ...item,
        imageUrl: getImageUrl(item.image)
      }));
    });
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery-area overflow-hidden" }, _attrs))}><div class="container"><div class="gallery-inner-block position-relative z-1">`);
      if (shapeImageUrl.value) {
        _push(`<div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="common-title text-center" data-aos="fade-up"><h3>${sectionTitle.value ?? ""}</h3><p>${subtitle.value ?? ""}</p></div><div class="gallery-wrapper"><div class="row"><!--[-->`);
      ssrRenderList(images.value, (item, index) => {
        _push(`<div class="col-md-6" data-aos="zoom-in"><div class="gallery-thumb position-relative"><img${ssrRenderAttr("src", item.imageUrl)} alt="Thumb" loading="lazy" decoding="async"><div class="gallery-thumb-text position-absolute"><h3>${item.title ?? ""}</h3></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="gallery-button d-flex justify-content-center" data-aos="fade-up"><a${ssrRenderAttr("href", __props.content.button_url || "#")} class="common-btn d-flex align-items-center">${ssrInterpolate(buttonText.value)} <span><i class="far fa-angle-left"></i></span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GallerySection.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const activeIndex = ref(1);
    const sectionTitle = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const getQuestion = (faq) => props.lang === "ar" ? faq.question_ar : faq.question_en;
    const getAnswer = (faq) => props.lang === "ar" ? faq.answer_ar : faq.answer_en;
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq-area position-relative z-1" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<div class="faq-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (shapeImageUrl.value) {
        _push(`<div class="faq-sec-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="faq-inner-block"><div class="common-title text-center mb-40" data-aos="fade-up"><h3>${sectionTitle.value ?? ""}</h3><p>${subtitle.value ?? ""}</p></div><div class="accordion-wrapper"><div class="accordion faq-accordion" id="accordionExample"><!--[-->`);
      ssrRenderList(__props.content.faqs, (faq, index) => {
        _push(`<div class="accordion-item" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", (index + 1) * 100)}><h2 class="accordion-header"><button class="${ssrRenderClass([{ "collapsed": activeIndex.value !== index }, "accordion-button"])}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse-faq-${index}`)}${ssrRenderAttr("aria-expanded", activeIndex.value === index)}${ssrRenderAttr("aria-controls", `collapse-faq-${index}`)}>${getQuestion(faq) ?? ""}</button></h2><div${ssrRenderAttr("id", `collapse-faq-${index}`)} class="${ssrRenderClass([{ "show": activeIndex.value === index }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body">${getAnswer(faq) ?? ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FAQSection.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const primaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.primary_button_text_ar : props.content.primary_button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const imageUrl = computed(() => getImageUrl(props.content.image));
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inquiry-area" }, _attrs))}><div class="container"><div class="inquiry-inner-block overflow-hidden position-relative z-1"><div class="inquiry-wrapper"><div class="row align-items-center"><div class="col-lg-7" data-aos="fade-right"><div class="inquiry-right-block"><div class="inquiry-content"><h4>${title.value ?? ""}</h4><p>${description.value ?? ""}</p></div><div class="inquiry-btns d-flex align-items-center"><a${ssrRenderAttr("href", __props.content.primary_button_url || "#")} class="secondary-btn">${ssrInterpolate(primaryButtonText.value)} <span><i class="fal fa-angle-left"></i></span></a><a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")}>${ssrInterpolate(secondaryButtonText.value)} <span><i class="fab fa-whatsapp"></i></span></a></div></div></div>`);
      if (imageUrl.value) {
        _push(`<div class="col-lg-5" data-aos="zoom-in"><div class="inquiry-image"><img${ssrRenderAttr("src", imageUrl.value)} alt="Image" loading="lazy" decoding="async"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (shapeImageUrl.value) {
        _push(`<div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy" decoding="async"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/InquirySection.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const isInternalUrl = (url) => {
      if (!url) return false;
      if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("javascript:") || url === "#") {
        return false;
      }
      if (url.startsWith("#")) return false;
      return url.startsWith("/") || !url.includes("://");
    };
    const getUrl = (link) => {
      if (props.lang === "ar") {
        return link.url_ar || link.url || "#";
      }
      return link.url_en || link.url || "#";
    };
    const tagline = computed(() => props.lang === "ar" ? props.content.tagline_ar : props.content.tagline_en);
    const getMenuTitle = (col) => props.lang === "ar" ? col.title_ar : col.title_en;
    const getLinkLabel = (link) => props.lang === "ar" ? link.label_ar : link.label_en;
    const contactTitle = computed(() => props.lang === "ar" ? props.content.contact_info?.title_ar : props.content.contact_info?.title_en);
    const socialTitle = computed(() => props.lang === "ar" ? props.content.social?.title_ar : props.content.social?.title_en);
    const logoUrl2 = computed(() => getImageUrl(props.content.logo));
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const contactItems = computed(() => {
      const items = props.content.contact_info?.items || [];
      return items.map((item) => ({
        ...item,
        iconUrl: getImageUrl(item.icon)
      }));
    });
    const socialLinks = computed(() => {
      const links = props.content.social?.links || [];
      return links.map((social) => ({
        ...social,
        iconUrl: getImageUrl(social.icon)
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-area" }, _attrs))}><div class="container"><div class="footer-inner-block position-relative z-1 overflow-hidden"><div class="footer-top-wrapper"><div class="row"><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-identity"><div class="footer-logo">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: __props.lang === "ar" ? "/ar" : "/"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (logoUrl2.value) {
              _push2(`<img${ssrRenderAttr("src", logoUrl2.value)} alt="Logo" loading="lazy"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              logoUrl2.value ? (openBlock(), createBlock("img", {
                key: 0,
                src: logoUrl2.value,
                alt: "Logo",
                loading: "lazy"
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer-content"><p>${tagline.value ?? ""}</p></div></div></div><!--[-->`);
      ssrRenderList(__props.content.menu_columns, (column, index) => {
        _push(`<div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-menu-list"><div class="footer-inner-title"><h4>${getMenuTitle(column) ?? ""}</h4></div><ul><!--[-->`);
        ssrRenderList(column.links, (link, linkIndex) => {
          _push(`<li>`);
          if (isInternalUrl(getUrl(link))) {
            _push(ssrRenderComponent(unref(link_default), {
              href: getUrl(link)
            }, null, _parent));
          } else {
            _push(`<a${ssrRenderAttr("href", getUrl(link))}>${getLinkLabel(link) ?? ""}</a>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-menu-list"><div class="footer-inner-title"><h4>${contactTitle.value ?? ""}</h4></div><ul><!--[-->`);
      ssrRenderList(contactItems.value, (item, itemIndex) => {
        _push(`<li><a${ssrRenderAttr("href", item.url)} class="d-flex align-items-center">`);
        if (item.iconUrl) {
          _push(`<span class="d-flex align-items-center justify-content-between"><img${ssrRenderAttr("src", item.iconUrl)} alt="Icon" loading="lazy"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${item.text ?? ""}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-xl-2" data-aos="fade-in" data-aos-delay="300"><div class="footer-social-block"><div class="footer-inner-title"><h4>${socialTitle.value ?? ""}</h4></div><div class="social-icons d-flex align-items-center"><!--[-->`);
      ssrRenderList(socialLinks.value, (social, socialIndex) => {
        _push(`<a${ssrRenderAttr("href", social.url)} class="d-flex align-items-center justify-content-center" target="_blank" rel="noopener noreferrer">`);
        if (social.iconUrl) {
          _push(`<img${ssrRenderAttr("src", social.iconUrl)} alt="Icon" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="copyright-text text-center"><p>${__props.content.copyright_text ?? ""}</p></div>`);
      if (shapeImageUrl.value) {
        _push(`<div class="footer-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover"${ssrRenderAttr("src", shapeImageUrl.value)} alt="Shape" loading="lazy"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/FooterSection.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "PageBannerSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const breadcrumb = computed(() => {
      const home = props.lang === "ar" ? "الرئيسية" : "Home";
      const current = props.lang === "ar" ? props.content.breadcrumb_ar : props.content.breadcrumb_en;
      return { home, current };
    });
    const variant = computed(() => props.content.variant || "default");
    const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const sideImageUrl = computed(() => getImageUrl(props.content.side_image));
    const bgStyle = computed(() => ({
      background: backgroundImageUrl.value ? `url(${backgroundImageUrl.value}) center/cover no-repeat` : "linear-gradient(135deg, #004F4C 0%, #003836 100%)"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      if (variant.value === "default") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "page-banner-area",
          style: bgStyle.value
        }, _attrs))} data-v-91b304b8><div class="container" data-v-91b304b8><div class="row" data-v-91b304b8><div class="col-lg-12" data-v-91b304b8><div class="page__banner--content text-center" data-aos="fade-up" data-v-91b304b8><div class="d-flex flex-column align-items-center gap-3" data-v-91b304b8>`);
        if (iconUrl.value) {
          _push(`<i data-v-91b304b8><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async" data-v-91b304b8></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-91b304b8><h1 class="fs-56 text-white" data-v-91b304b8>${ssrInterpolate(title.value)}</h1>`);
        if (subtitle.value) {
          _push(`<p class="text-white-50 mb-3" data-v-91b304b8>${ssrInterpolate(subtitle.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="mb-0 breadcrumb-text" data-v-91b304b8><span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.home)}</span> / <span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.current)}</span></p></div></div></div></div></div></div></section>`);
      } else if (variant.value === "services") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "services-banner-area position-relative",
          style: bgStyle.value
        }, _attrs))} data-v-91b304b8>`);
        if (shapeImageUrl.value) {
          _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="banner-shape" alt="" loading="lazy" decoding="async" data-v-91b304b8>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="container" data-v-91b304b8><div class="row align-items-center" data-v-91b304b8><div class="col-lg-6" data-v-91b304b8><div class="services__banner--content" data-aos="fade-up" data-v-91b304b8>`);
        if (iconUrl.value) {
          _push(`<i data-v-91b304b8><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async" data-v-91b304b8></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="fs-56 text-white" data-v-91b304b8>${ssrInterpolate(title.value)}</h1>`);
        if (subtitle.value) {
          _push(`<p class="text-white-50" data-v-91b304b8>${ssrInterpolate(subtitle.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="mb-0 breadcrumb-text" data-v-91b304b8><span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.home)}</span> / <span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.current)}</span></p></div></div>`);
        if (sideImageUrl.value) {
          _push(`<div class="col-lg-6" data-v-91b304b8><div class="services__banner--image" data-aos="fade-up" data-aos-delay="100" data-v-91b304b8><img${ssrRenderAttr("src", sideImageUrl.value)} alt="" loading="lazy" decoding="async" data-v-91b304b8></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else if (variant.value === "about") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "about-banner-area",
          style: bgStyle.value
        }, _attrs))} data-v-91b304b8><div class="container" data-v-91b304b8><div class="row" data-v-91b304b8><div class="col-lg-8 mx-auto" data-v-91b304b8><div class="about__banner--content text-center" data-aos="fade-up" data-v-91b304b8>`);
        if (iconUrl.value) {
          _push(`<i data-v-91b304b8><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async" data-v-91b304b8></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="fs-56 text-white mt-3" data-v-91b304b8>${ssrInterpolate(title.value)}</h1>`);
        if (subtitle.value) {
          _push(`<p class="text-white-50 mb-4" data-v-91b304b8>${ssrInterpolate(subtitle.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="mb-0 breadcrumb-text" data-v-91b304b8><span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.home)}</span> / <span data-v-91b304b8>${ssrInterpolate(breadcrumb.value.current)}</span></p></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/PageBannerSection.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const PageBannerSection = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-91b304b8"]]);
const _sfc_main$l = {
  __name: "ContactBannerSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const breadcrumb = computed(() => {
      const home = props.lang === "ar" ? "الرئيسية" : "Home";
      const current = props.lang === "ar" ? props.content.breadcrumb_ar : props.content.breadcrumb_en;
      return { home, current };
    });
    const backgroundImageUrl = computed(() => getImageUrl(props.content.background_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const sideImageUrl = computed(() => getImageUrl(props.content.side_image));
    const bgStyle = computed(() => ({
      background: backgroundImageUrl.value ? `url(${backgroundImageUrl.value}) center/cover no-repeat` : "linear-gradient(135deg, #004F4C 0%, #003836 100%)"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-banner-area pt-5 mt-5" }, _attrs))}><div class="container-fluid"><div class="contact__banner" style="${ssrRenderStyle(bgStyle.value)}"><div class="row"><div class="col-lg-12"><div class="contact__banner--content" data-aos="fade-up"><div class="d-flex align-items-center gap-3">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><h1 class="fs-56">${ssrInterpolate(title.value)}</h1><p class="mb-0"><span>${ssrInterpolate(breadcrumb.value.home)}</span> / <span>${ssrInterpolate(breadcrumb.value.current)}</span></p></div></div>`);
      if (sideImageUrl.value) {
        _push(`<picture><img${ssrRenderAttr("src", sideImageUrl.value)} alt="" loading="lazy" decoding="async"></picture>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactBannerSection.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "ContactInfoSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    computed(() => props.lang === "ar" ? props.content.section_title_ar : props.content.section_title_en);
    computed(() => props.lang === "ar" ? props.content.section_description_ar : props.content.section_description_en);
    const generalInfoTitle = computed(() => props.lang === "ar" ? props.content.general_info_title_ar : props.content.general_info_title_en);
    const generalInfoDescription = computed(() => props.lang === "ar" ? props.content.general_info_description_ar : props.content.general_info_description_en);
    const formTitle = computed(() => props.lang === "ar" ? props.content.form_title_ar : props.content.form_title_en);
    const formDescription = computed(() => props.lang === "ar" ? props.content.form_description_ar : props.content.form_description_en);
    const overlayImageUrl = computed(() => getImageUrl(props.content.overlay_image));
    const infoCards = computed(() => {
      const cards = props.content.info_cards || [];
      return cards.map((card) => ({
        ...card,
        iconUrl: getImageUrl(card.icon)
      }));
    });
    const form = useForm({
      name: "",
      email: "",
      country_code: "+966",
      phone: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const submitSuccess = ref(false);
    const submitError = ref("");
    const placeholders = computed(() => ({
      name: props.lang === "ar" ? "الاسم الكامل" : "Full Name",
      email: props.lang === "ar" ? "البريد الالكتروني" : "Email Address",
      phone: props.lang === "ar" ? "مثال xxxxxxxx5" : "Example 5xxxxxxxx",
      subject: props.lang === "ar" ? "الموضوع" : "Subject",
      message: props.lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here...",
      submit: props.lang === "ar" ? "إرسال" : "Send",
      submitting: props.lang === "ar" ? "جاري الإرسال..." : "Sending...",
      success: props.lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message was sent successfully!"
    }));
    const getInfoItemLabel = (item) => props.lang === "ar" ? item.label_ar : item.label_en;
    const getInfoItemValue = (item) => props.lang === "ar" ? item.value_ar : item.value_en;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-info-area" }, _attrs))} data-v-02b3c2d4>`);
      if (overlayImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", overlayImageUrl.value)} class="overly-1" alt="" loading="lazy" decoding="async" data-v-02b3c2d4>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container" data-v-02b3c2d4><div class="row gy-4 mb-5 pb-0 pb-md-5" data-v-02b3c2d4><!--[-->`);
      ssrRenderList(infoCards.value, (card, index) => {
        _push(`<div class="col-md-6 col-lg-4" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)} data-v-02b3c2d4><div class="contact__info--block" data-v-02b3c2d4>`);
        if (card.iconUrl) {
          _push(`<i data-v-02b3c2d4><img${ssrRenderAttr("src", card.iconUrl)}${ssrRenderAttr("alt", __props.lang === "ar" ? card.title_ar : card.title_en)} loading="lazy" decoding="async" data-v-02b3c2d4></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 data-v-02b3c2d4>${ssrInterpolate(__props.lang === "ar" ? card.title_ar : card.title_en)}</h3><p data-v-02b3c2d4>${(__props.lang === "ar" ? card.content_ar : card.content_en) ?? ""}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="row" data-v-02b3c2d4><div class="col-lg-6" data-v-02b3c2d4><div class="contact__info--content" data-aos="fade-up" data-v-02b3c2d4><h1 class="fw-bold" data-v-02b3c2d4>${ssrInterpolate(generalInfoTitle.value)}</h1><p data-v-02b3c2d4>${ssrInterpolate(generalInfoDescription.value)}</p><ul data-v-02b3c2d4><!--[-->`);
      ssrRenderList(__props.content.info_items, (item, index) => {
        _push(`<li data-v-02b3c2d4><h6 data-v-02b3c2d4>${ssrInterpolate(getInfoItemLabel(item))}</h6>`);
        if (item.type !== "social") {
          _push(`<span data-v-02b3c2d4>${ssrInterpolate(getInfoItemValue(item))}</span>`);
        } else {
          _push(`<div class="social__link" data-v-02b3c2d4><!--[-->`);
          ssrRenderList(item.links, (social, sIdx) => {
            _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" data-v-02b3c2d4><img${ssrRenderAttr("src", social.icon)}${ssrRenderAttr("alt", social.name || "Social")} loading="lazy" decoding="async" data-v-02b3c2d4></a>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-lg-6" data-v-02b3c2d4><div class="contact__info--form" data-aos="fade-up" data-aos-delay="100" data-v-02b3c2d4><h1 class="fw-bold" data-v-02b3c2d4>${ssrInterpolate(formTitle.value)}</h1><p data-v-02b3c2d4>${ssrInterpolate(formDescription.value)}</p>`);
      if (submitSuccess.value) {
        _push(`<div class="alert alert-success mb-4" data-v-02b3c2d4>${ssrInterpolate(placeholders.value.success)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (submitError.value) {
        _push(`<div class="alert alert-danger mb-4" data-v-02b3c2d4>${ssrInterpolate(submitError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-02b3c2d4><input${ssrRenderAttr("value", unref(form).name)} type="text"${ssrRenderAttr("placeholder", placeholders.value.name)} required class="${ssrRenderClass({ "is-invalid": unref(form).errors.name })}" data-v-02b3c2d4>`);
      if (unref(form).errors.name) {
        _push(`<div class="invalid-feedback d-block" data-v-02b3c2d4>${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", unref(form).email)} type="email"${ssrRenderAttr("placeholder", placeholders.value.email)} required class="${ssrRenderClass({ "is-invalid": unref(form).errors.email })}" data-v-02b3c2d4>`);
      if (unref(form).errors.email) {
        _push(`<div class="invalid-feedback d-block" data-v-02b3c2d4>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex gap-3" data-v-02b3c2d4><input${ssrRenderAttr("value", unref(form).country_code)} type="text" style="${ssrRenderStyle({ "max-width": "100px" })}" readonly data-v-02b3c2d4><input${ssrRenderAttr("value", unref(form).phone)} type="text"${ssrRenderAttr("placeholder", placeholders.value.phone)} class="${ssrRenderClass({ "is-invalid": unref(form).errors.phone })}" data-v-02b3c2d4></div>`);
      if (unref(form).errors.phone) {
        _push(`<div class="invalid-feedback d-block" data-v-02b3c2d4>${ssrInterpolate(unref(form).errors.phone)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", unref(form).subject)} type="text"${ssrRenderAttr("placeholder", placeholders.value.subject)} class="${ssrRenderClass({ "is-invalid": unref(form).errors.subject })}" data-v-02b3c2d4>`);
      if (unref(form).errors.subject) {
        _push(`<div class="invalid-feedback d-block" data-v-02b3c2d4>${ssrInterpolate(unref(form).errors.subject)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea${ssrRenderAttr("placeholder", placeholders.value.message)} required class="${ssrRenderClass({ "is-invalid": unref(form).errors.message })}" data-v-02b3c2d4>${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(form).errors.message) {
        _push(`<div class="invalid-feedback d-block" data-v-02b3c2d4>${ssrInterpolate(unref(form).errors.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="theme-btn btn btn-success"${ssrIncludeBooleanAttr(isSubmitting.value || unref(form).processing) ? " disabled" : ""} data-v-02b3c2d4>${ssrInterpolate(isSubmitting.value ? placeholders.value.submitting : placeholders.value.submit)}</button></form></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/ContactInfoSection.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const ContactInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-02b3c2d4"]]);
const _sfc_main$j = {
  __name: "CommonServiceSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const sectionIcon = computed(() => getImageUrl(props.content.section_icon));
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const titleColor = computed(() => props.content.title_color || "inherit");
    const services = computed(() => {
      return (props.content.services || []).map((service) => ({
        icon: getImageUrl(service.icon),
        title: props.lang === "ar" ? service.title_ar : service.title_en,
        description: props.lang === "ar" ? service.description_ar : service.description_en
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "comService-area" }, _attrs))}><div class="container text-center"><div class="row"><div class="col-lg-12"><div class="mb-3">`);
      if (sectionIcon.value) {
        _push(`<i><img${ssrRenderAttr("src", sectionIcon.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (title.value) {
        _push(`<h1 style="${ssrRenderStyle({ color: titleColor.value })}">${title.value ?? ""}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (subtitle.value) {
        _push(`<p class="fs-18" style="${ssrRenderStyle({ "color": "#768495" })}">${ssrInterpolate(subtitle.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--[-->`);
      ssrRenderList(services.value, (service, index) => {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6"><div class="service__block">`);
        if (service.icon) {
          _push(`<i><img${ssrRenderAttr("src", service.icon)} alt="" loading="lazy" decoding="async"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h5>${ssrInterpolate(service.title)}</h5><p>${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CommonServiceSection.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "CounterAreaSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const counters = computed(() => {
      return (props.content.counters || []).map((counter) => ({
        icon: getImageUrl(counter.icon),
        value: counter.value,
        label: props.lang === "ar" ? counter.label_ar : counter.label_en
      }));
    });
    const extraClasses = computed(() => props.content.no_margin_top ? "mt-0" : "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["counter-area", extraClasses.value]
      }, _attrs))}><div class="container"><div class="counter__wrapper"><div class="row"><!--[-->`);
      ssrRenderList(counters.value, (counter, index) => {
        _push(`<div class="col-md-6"><div class="counter__block">`);
        if (counter.icon) {
          _push(`<i><img${ssrRenderAttr("src", counter.icon)} alt="" loading="lazy" decoding="async"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1>${ssrInterpolate(counter.value)} <span>${ssrInterpolate(counter.label)}</span></h1></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CounterAreaSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "GalleryPageSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const subtitle = computed(() => props.lang === "ar" ? props.content.subtitle_ar : props.content.subtitle_en);
    const breadcrumb = computed(() => {
      const home = props.lang === "ar" ? "الرئيسية" : "Home";
      const current = props.lang === "ar" ? props.content.breadcrumb_ar : props.content.breadcrumb_en;
      return { home, current };
    });
    const galleryItems = computed(() => {
      return (props.content.items || []).map((item) => ({
        image: getImageUrl(item.image),
        label: props.lang === "ar" ? item.label_ar : item.label_en,
        url: item.url || "#"
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="breadcrumb-nav"><div class="container"><ul><li><a href="">${ssrInterpolate(breadcrumb.value.home)}</a></li><li><span>/</span></li><li><a href="" class="active">${ssrInterpolate(breadcrumb.value.current)}</a></li></ul></div></div><section class="galleryV2-area"><div class="container py-5"><div class="row gy-4"><div class="col-lg-12 text-center"><div class=""><h1 class="mb-3">${ssrInterpolate(title.value)}</h1>`);
      if (subtitle.value) {
        _push(`<p class="off-text mb-0 fw-medium fs-18">${ssrInterpolate(subtitle.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--[-->`);
      ssrRenderList(galleryItems.value, (item, index) => {
        _push(`<div class="col-md-6"><div class="img__card__block"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.label)} loading="lazy" decoding="async"><a${ssrRenderAttr("href", item.url)}>${ssrInterpolate(item.label)}</a></div></div>`);
      });
      _push(`<!--]--></div></div></section></main>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GalleryPageSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "HeroRiyaSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    const titleColor = computed(() => props.content.title_color || "#9B4DE0");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "common-hero-area" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center"><div class="col-lg-6"><div class="hero__block">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class=""><h1 class="fs-56" style="${ssrRenderStyle({ color: titleColor.value })}">${ssrInterpolate(title.value)}</h1><p>${description.value ?? ""}</p><div class="work-card-btns green-btns d-flex align-items-center">`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")}>${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn">${ssrInterpolate(secondaryButtonText.value)} <span><i class="${ssrRenderClass(longArrowIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6 text-center"><div class="hero__img">`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroRiyaSection.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "HeroJiyadSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    const titleColor = computed(() => props.content.title_color || "#314660");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "common-hero-area" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center"><div class="col-lg-6"><div class="hero__block">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class=""><h1 class="fs-56" style="${ssrRenderStyle({ color: titleColor.value })}">${ssrInterpolate(title.value)}</h1><p>${description.value ?? ""}</p><div class="work-card-btns green-btns d-flex align-items-center">`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")}>${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn">${ssrInterpolate(secondaryButtonText.value)} <span><i class="${ssrRenderClass(longArrowIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6 text-center"><div class="hero__img">`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroJiyadSection.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "HeroShopsZSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    const titleColor = computed(() => props.content.title_color || "#00A651");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "common-hero-area pb-4 pb-lg-0 pt-4" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center"><div class="col-lg-6"><div class="hero__block">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class=""><h1 class="text-green fs-56" style="${ssrRenderStyle({ color: titleColor.value })}">${ssrInterpolate(title.value)}</h1><p>${description.value ?? ""}</p><div class="work-card-btns green-btns d-flex align-items-center">`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")}>${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn">${ssrInterpolate(secondaryButtonText.value)} <span><i class="${ssrRenderClass(longArrowIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6 text-center"><div class="hero__img">`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroShopsZSection.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "HeroBeyondERPSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "common-hero-area pb-4 pb-lg-0 pt-4" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center"><div class="col-lg-6"><div class="hero__block">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class=""><h1 class="fs-56">${ssrInterpolate(title.value)}</h1><p>${description.value ?? ""}</p><div class="work-card-btns green-btns d-flex align-items-center">`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")}>${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn">${ssrInterpolate(secondaryButtonText.value)} <span><i class="${ssrRenderClass(longArrowIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6 text-center"><div class="hero__img">`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroBeyondERPSection.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "HeroBeyondPaySection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, "").trim();
    };
    const title = computed(() => props.lang === "ar" ? props.content.title_ar : props.content.title_en);
    const description = computed(() => props.lang === "ar" ? props.content.description_ar : props.content.description_en);
    const buttonText = computed(() => {
      const text = props.lang === "ar" ? props.content.button_text_ar : props.content.button_text_en;
      return stripHtml(text);
    });
    const secondaryButtonText = computed(() => {
      const text = props.lang === "ar" ? props.content.secondary_button_text_ar : props.content.secondary_button_text_en;
      return stripHtml(text);
    });
    const angleIcon = computed(() => props.lang === "ar" ? "far fa-angle-left" : "far fa-angle-right");
    const longArrowIcon = computed(() => props.lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right");
    const shapeImageUrl = computed(() => getImageUrl(props.content.shape_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const heroImageUrl = computed(() => getImageUrl(props.content.hero_image));
    const heroBgImageUrl = computed(() => getImageUrl(props.content.hero_bg_image));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "common-hero-area pb-4 pb-lg-0 pt-4" }, _attrs))}>`);
      if (shapeImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", shapeImageUrl.value)} class="hero-shape" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center"><div class="col-lg-6"><div class="hero__block">`);
      if (iconUrl.value) {
        _push(`<i><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class=""><h1 class="fs-56">${ssrInterpolate(title.value)}</h1><p>${description.value ?? ""}</p><div class="work-card-btns green-btns d-flex align-items-center">`);
      if (buttonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.button_url || "#")}>${ssrInterpolate(buttonText.value)} <span><i class="${ssrRenderClass(angleIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      if (secondaryButtonText.value) {
        _push(`<a${ssrRenderAttr("href", __props.content.secondary_button_url || "#")} class="secondary-btn">${ssrInterpolate(secondaryButtonText.value)} <span><i class="${ssrRenderClass(longArrowIcon.value)}"></i></span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-6 text-center"><div class="hero__img">`);
      if (heroImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroImageUrl.value)}${ssrRenderAttr("alt", title.value)} loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      if (heroBgImageUrl.value) {
        _push(`<img${ssrRenderAttr("src", heroBgImageUrl.value)} class="hero-icon-bg" alt="" loading="lazy" decoding="async">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/HeroBeyondPaySection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
    const isSaving = ref(false);
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
<body class="main-area">
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
        case "hero_slider":
          return generateHeroSliderHtml(c2, lang, t3);
        case "hero_common":
          return generateHeroCommonHtml(c2, lang, t3);
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
        case "page-banner":
          return generatePageBannerHtml(c2, lang, t3);
        case "contact-banner":
          return generateContactBannerHtml(c2, lang, t3);
        case "contact-info":
          return generateContactInfoHtml(c2, lang, t3);
        case "about":
          return generateAboutHtml(c2, lang, t3);
        case "newsletter":
          return generateNewsletterHtml(c2, lang, t3);
        case "map":
          return generateMapHtml(c2, lang, t3);
        case "common_service":
          return generateCommonServiceHtml(c2, lang, t3);
        case "counter_area":
          return generateCounterAreaHtml(c2, lang, t3);
        case "gallery_page":
          return generateGalleryPageHtml(c2, lang, t3);
        case "hero_riya":
          return generateHeroRiyaHtml(c2, lang, t3);
        case "hero_jiyad":
          return generateHeroJiyadHtml(c2, lang, t3);
        case "hero_shopsz":
          return generateHeroShopsZHtml(c2, lang, t3);
        case "hero_beyond_erp":
          return generateHeroBeyondERPHtml(c2, lang, t3);
        case "hero_beyond_pay":
          return generateHeroBeyondPayHtml(c2, lang, t3);
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
    const generatePartnersHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const logos = c2.logos || c2.partners || [];
      return `
    <section class="brand-area">
        <div class="container">
            <div class="swiper brand-logos-slide">
                <div class="swiper-wrapper">
                    ${logos.map((p2) => `
                        <div class="logo-items swiper-slide" data-aos="zoom-in">
                            <a href="${p2.url || "#"}"><img src="${getImageUrl(p2.image || p2.logo)}" alt="${p2.alt || p2.name || "Partner"}" /></a>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateConceptHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const blocks = c2.blocks || [];
      const counters = c2.counters || [];
      const stripTags = (str) => {
        if (!str) return "";
        return str.replace(/<[^>]*>/g, "");
      };
      return `
    <section class="concept-area position-relative pt-80" style="padding-bottom: 80px;">
        <div class="container">
            <div class="concept-area-wrapper">
                ${blocks.map((block, idx) => {
        const paragraphsAr = block.paragraphs_ar || [];
        const paragraphsEn = block.paragraphs_en || [];
        const paragraphs = lang === "ar" ? paragraphsAr : paragraphsEn;
        const slides = block.slides || block.images || [];
        const imageOnLeft = block.image_on_left === true;
        return `
                <div class="concept-wrapper ${idx > 0 ? "second-concept-wrapper" : ""} position-relative z-1 overflow-hidden" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 24px; padding: 40px; margin-bottom: 30px;">
                    ${c2.shape_image ? `<div class="concept-wrapper-shape position-absolute z-n1" style="top: 0; right: 0; opacity: 0.1;"><img src="${getImageUrl(c2.shape_image)}" alt="Shape" style="max-width: 300px;" /></div>` : ""}
                    <div class="row align-items-center g-4">
                        <div class="col-lg-6 ${imageOnLeft ? "" : "order-lg-2"}">
                            <div class="concept-thumbnails d-flex gap-3 flex-wrap justify-content-center">
                                ${slides.slice(0, 4).map((slide, slideIdx) => `
                                    <div class="concept-single-thumb" style="width: calc(50% - 8px); border-radius: ${slideIdx % 2 === 0 ? "0 0 0 24px" : "24px 0 0 0"}; overflow: hidden;">
                                        <img src="${getImageUrl(slide.image || slide)}" alt="${slide.alt || "Thumb"}" style="width: 100%; height: 150px; object-fit: cover;" />
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                        <div class="col-lg-6 ${imageOnLeft ? "order-lg-2" : ""}">
                            <div class="concept-content" style="color: #fff;">
                                <h3 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1rem; color: #fff;">${t3(block.title_ar, block.title_en)}</h3>
                                ${paragraphs.map((p2) => {
          const text = typeof p2 === "object" ? lang === "ar" ? p2.text_ar : p2.text_en : p2;
          const cleanText = stripTags(text);
          return `<p style="color: rgba(255,255,255,0.85); margin-bottom: 0.75rem; font-size: 0.95rem; line-height: 1.6;">${cleanText}</p>`;
        }).join("")}
                            </div>
                        </div>
                    </div>
                </div>`;
      }).join("")}
                ${counters.length > 0 ? `
                <div class="counter-up-area d-flex align-items-center justify-content-center flex-wrap gap-4 mt-4" style="position: relative;">
                    ${counters.map((counter, idx) => `
                        <div class="counter-up-step d-flex align-items-center justify-content-center flex-column" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 100px; padding: 20px 40px; min-width: 180px;">
                            <h5 style="color: #fff; font-size: 1.5rem; font-weight: 700; margin: 0;">${counter.value}</h5>
                            <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 0.875rem;">${t3(counter.label_ar, counter.label_en)}</p>
                        </div>
                    `).join("")}
                </div>
                ` : ""}
            </div>
        </div>
    </section>`;
    };
    const generateServicesHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
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
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(service.image) || "/assets/img/service-thumb-1.png"}" alt="Thumb" />
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
        ${c2.shape_image ? `<div class="service-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c2.shape_image)}" alt="Shape" /></div>` : ""}
    </section>`;
    };
    const generateCtaHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const cards = c2.contact_cards || [];
      const shapeUrl = getImageUrl(c2.shape_image);
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
                                            <span class="d-flex align-items-center justify-content-center"><img src="${getImageUrl(card.icon)}" alt="Icon" /></span>
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
            ${shapeUrl ? `<div class="cta-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" /></div>` : ""}
        </div>
    </section>`;
    };
    const generateWorkHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const projects = c2.projects || [];
      const shapeUrl = getImageUrl(c2.shape_image) || "/assets/img/service-shape.png";
      return `
    <section class="work-area position-relative z-1 overflow-hidden">
        <div class="work-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" />
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
                                                    <img src="${getImageUrl(project.image)}" alt="${t3(project.title_ar, project.title_en)}" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                        ${c2.work_shape_image ? `<div class="work-card-shape position-absolute z-n1"><img src="${getImageUrl(c2.work_shape_image)}" alt="Shape" /></div>` : ""}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateTeamHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const members = c2.members || [];
      const shapeUrl = getImageUrl(c2.shape_image) || "/assets/img/team-shape.png";
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
                                    <img class="w-100 h-100 object-fit-cover" src="${shapeUrl}" alt="Shape" />
                                </div>
                                <div class="team-thumb">
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(member.image)}" alt="Thumb" />
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
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const cards = c2.cards || [];
      const bgUrl = getImageUrl(c2.background_image) || "/assets/img/contact-bg.png";
      const logoUrl2 = getImageUrl(c2.contact_logo) || "/assets/img/contact-logo.svg";
      return `
    <section class="contact-area overflow-hidden" style="background-image: url('${bgUrl}')">
        <div class="container">
            <div class="contact-inner-block p-40 bg-white">
                <div class="row">
                    <div class="col-xl-6" data-aos="fade-right">
                        <div class="contact-right-block">
                            ${cards.map((card, idx) => `
                                <div class="contact-card ${idx === 1 ? "contact-middle-card" : ""} d-flex align-items-center">
                                    <div class="contact-card-icon">
                                        <img src="${getImageUrl(card.icon)}" alt="Icon" />
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
                                <a href="#"><img src="${logoUrl2}" alt="Logo" /></a>
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
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const images = c2.images || [];
      return `
    <section class="gallery-area overflow-hidden">
        <div class="container">
            <div class="gallery-inner-block position-relative z-1">
                ${c2.shape_image ? `<div class="gallery-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c2.shape_image)}" alt="Shape" /></div>` : ""}
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>${t3(c2.title_ar, c2.title_en)}</h3>
                    <p>${t3(c2.subtitle_ar, c2.subtitle_en)}</p>
                </div>
                <div class="gallery-wrapper">
                    <div class="row">
                        ${images.map((img) => `
                            <div class="col-md-6" data-aos="zoom-in">
                                <div class="gallery-thumb position-relative">
                                    <img src="${getImageUrl(img.image)}" alt="Thumb" />
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
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const faqs = c2.faqs || [];
      return `
    <section class="faq-area position-relative z-1">
        <div class="faq-shape position-absolute z-n1">
            <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c2.shape_image) || "/assets/img/service-shape.png"}" alt="Shape" />
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
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
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
                                ${c2.image ? `<img src="${getImageUrl(c2.image)}" alt="Image" />` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                ${c2.shape_image ? `<div class="inquiry-shape position-absolute z-n1"><img class="w-100 h-100 object-fit-cover" src="${getImageUrl(c2.shape_image)}" alt="Shape" /></div>` : ""}
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
    const generatePageBannerHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const variant = c2.variant || "default";
      const title = t3(c2.title_ar, c2.title_en) || "Page Title";
      const subtitle = t3(c2.subtitle_ar, c2.subtitle_en) || "";
      const breadcrumbHome = lang === "ar" ? "الرئيسية" : "Home";
      const breadcrumbCurrent = t3(c2.breadcrumb_ar, c2.breadcrumb_en) || title;
      const bgImage = c2.background_image && c2.background_image.trim() !== "" && !c2.background_image.includes("undefined");
      const defaultBg = "linear-gradient(135deg, #004F4C 0%, #003836 100%)";
      const bgUrl = bgImage ? getImageUrl(c2.background_image) : "";
      const bgStyle = bgImage ? `url(${bgUrl}) center/cover no-repeat` : defaultBg;
      if (variant === "services") {
        return `
        <section class="hero-area v2 position-relative text-white" style="background: ${bgStyle}; min-height: 300px; padding: 80px 0;">
            ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; height: 100%; object-fit: contain; opacity: 0.3;" />` : ""}
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="hero__block" data-aos="fade-up">
                            ${c2.icon ? `<i><img src="${getImageUrl(c2.icon)}" alt="" /></i>` : ""}
                            <div>
                                <h1 class="text-white fs-56">${title}</h1>
                                ${subtitle ? `<p class="text-white-50">${subtitle}</p>` : ""}
                                <p class="mb-0 breadcrumb-text" style="color: rgba(255,255,255,0.7);">
                                    <span>${breadcrumbHome}</span> / <span style="color: #fff;">${breadcrumbCurrent}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    ${c2.side_image ? `
                    <div class="col-lg-6">
                        <div class="hero__img" data-aos="fade-up" data-aos-delay="200">
                            <img src="${getImageUrl(c2.side_image)}" alt="${title}" style="max-width: 100%; height: auto;" />
                        </div>
                    </div>
                    ` : ""}
                </div>
            </div>
        </section>`;
      }
      if (variant === "about") {
        return `
        <section class="about-banner-area" style="background: ${bgStyle}; min-height: 300px; padding: 80px 0; display: flex; align-items: center;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="about__banner--content text-center" data-aos="fade-up">
                            ${c2.icon ? `<i><img src="${getImageUrl(c2.icon)}" alt="" /></i>` : ""}
                            <h1 class="fs-56 text-white mt-3">${title}</h1>
                            ${subtitle ? `<p class="text-white-50 mb-4">${subtitle}</p>` : ""}
                            <p class="mb-0" style="color: rgba(255,255,255,0.7);">
                                <span>${breadcrumbHome}</span> / <span style="color: #fff;">${breadcrumbCurrent}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
      }
      return `
    <section class="page-banner-area" style="background: ${bgStyle}; padding: 80px 0; min-height: 200px;">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page__banner--content text-center" data-aos="fade-up">
                        <div class="d-flex flex-column align-items-center gap-3">
                            ${c2.icon ? `<i><img src="${getImageUrl(c2.icon)}" alt="" /></i>` : ""}
                            <div>
                                <h1 class="fs-56 text-white">${title}</h1>
                                ${subtitle ? `<p class="text-white-50 mb-3">${subtitle}</p>` : ""}
                                <p class="mb-0" style="color: rgba(255,255,255,0.7);">
                                    <span>${breadcrumbHome}</span> / <span style="color: #fff;">${breadcrumbCurrent}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateAboutHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const blocks = c2.blocks || [];
      return `
    <section class="about-area">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape-5" alt="" />` : ""}
        ${blocks.map((block, idx) => {
        const title = t3(block.title_ar, block.title_en) || "";
        const content = t3(block.content_ar, block.content_en) || "";
        const layout = block.layout || "image-right";
        const bgColor = idx % 2 === 0 ? "" : "background-color: #fcfcfd;";
        if (layout === "image-right" || layout === "first") {
          return `
                <div class="container pb-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="about__content">
                                ${block.icon ? `<i><img src="${getImageUrl(block.icon)}" alt="" /></i>` : ""}
                                <div>
                                    <h1 class="color-text">${title}</h1>
                                    <div>${content}</div>
                                    ${block.author ? `<span>— ${block.author}</span>` : ""}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about__img">
                                ${block.image ? `<img src="${getImageUrl(block.image)}" alt="" />` : ""}
                                ${block.image_bg ? `<img src="${getImageUrl(block.image_bg)}" class="hero-icon-bg" alt="" />` : ""}
                            </div>
                        </div>
                    </div>
                </div>`;
        } else {
          return `
                <div class="position-relative" style="${bgColor}">
                    ${c2.left_shape_image ? `<img src="${getImageUrl(c2.left_shape_image)}" class="ab-left" alt="" />` : ""}
                    ${c2.right_shape_image ? `<img src="${getImageUrl(c2.right_shape_image)}" class="ab-right" alt="" />` : ""}
                    <div class="container md">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="about__content v2">
                                    ${block.icon ? `<i><img src="${getImageUrl(block.icon)}" alt="" /></i>` : ""}
                                    <div>
                                        <h1>${title}</h1>
                                        <div>${content}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="about__img">
                                    ${block.image ? `<img src="${getImageUrl(block.image)}" alt="" />` : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
      }).join("")}
    </section>`;
    };
    const generateContactBannerHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const title = t3(c2.title_ar, c2.title_en) || (lang === "ar" ? "تواصل معنا" : "Contact Us");
      const breadcrumbHome = lang === "ar" ? "الرئيسية" : "Home";
      const breadcrumbCurrent = t3(c2.breadcrumb_ar, c2.breadcrumb_en) || title;
      const bgImage = c2.background_image && c2.background_image.trim() !== "";
      const defaultBg = "linear-gradient(135deg, #004F4C 0%, #003836 100%)";
      const bgUrl = bgImage ? getImageUrl(c2.background_image) : "";
      return `
    <section class="contact-banner-area my-5">
        <div class="container-fluid">
            <div class="contact__banner" style="background: ${bgImage ? `url(${bgUrl}) center/cover no-repeat` : defaultBg}; border-radius: 24px; padding: 60px 40px;">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact__banner--content d-flex align-items-center justify-content-between flex-wrap gap-4">
                            <div class="d-flex align-items-center gap-3">
                                ${c2.icon ? `<i style="background: #fff; border-radius: 50%; padding: 20px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 32px; height: 32px;" /></i>` : ""}
                                <div>
                                    <h1 class="fs-56 text-white">${title}</h1>
                                    <p class="mb-0" style="color: rgba(255,255,255,0.7);">
                                        <span>${breadcrumbHome}</span> / <span style="color: #fff;">${breadcrumbCurrent}</span>
                                    </p>
                                </div>
                            </div>
                            ${c2.side_image ? `<picture><img src="${getImageUrl(c2.side_image)}" alt="" style="max-height: 200px;" /></picture>` : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateContactInfoHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const infoCards = c2.info_cards || [];
      const infoItems = c2.info_items || [];
      return `
    <section class="contact-info-area" style="position: relative;">
        ${c2.overlay_image ? `<img src="${getImageUrl(c2.overlay_image)}" class="overly-1" alt="" style="position: absolute; top: 0; left: 0; opacity: 0.1; pointer-events: none;" />` : ""}
        <div class="container">
            <!-- Contact Info Cards -->
            ${infoCards.length > 0 ? `
            <div class="row gy-4 mb-5 pb-0 pb-md-5">
                ${infoCards.map((card, index) => `
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="contact__info--block" style="background: #fff; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                            ${card.icon ? `<i style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: #004F4C; border-radius: 50%; margin-bottom: 16px;"><img src="${getImageUrl(card.icon)}" alt="" style="width: 28px; height: 28px; filter: brightness(0) invert(1);" /></i>` : ""}
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; color: #1a1a1a;">${t3(card.title_ar, card.title_en)}</h3>
                            <p style="color: #666; margin: 0; line-height: 1.6;">${t3(card.content_ar, card.content_en)}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
            ` : ""}
            
            <!-- General Info & Contact Form -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact__info--content">
                        <h1 class="fw-bold" style="font-size: 2rem; margin-bottom: 16px;">${t3(c2.general_info_title_ar, c2.general_info_title_en) || (lang === "ar" ? "معلومات عامة" : "General Information")}</h1>
                        <p style="color: #666; margin-bottom: 24px;">${t3(c2.general_info_description_ar, c2.general_info_description_en) || ""}</p>
                        ${infoItems.length > 0 ? `
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            ${infoItems.map((item) => `
                                <li style="margin-bottom: 20px;">
                                    <h6 style="font-weight: 600; margin-bottom: 4px;">${t3(item.label_ar, item.label_en)}</h6>
                                    <span style="color: #666;">${t3(item.value_ar, item.value_en)}</span>
                                </li>
                            `).join("")}
                        </ul>
                        ` : ""}
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact__info--form" style="background: #f8f9fa; border-radius: 16px; padding: 30px;">
                        <h1 class="fw-bold" style="font-size: 2rem; margin-bottom: 16px;">${t3(c2.form_title_ar, c2.form_title_en) || (lang === "ar" ? "اتصل بنا" : "Contact Us")}</h1>
                        <p style="color: #666; margin-bottom: 24px;">${t3(c2.form_description_ar, c2.form_description_en) || ""}</p>
                        <form>
                            <input type="text" placeholder="${lang === "ar" ? "الاسم الكامل" : "Full Name"}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <input type="email" placeholder="${lang === "ar" ? "البريد الالكتروني" : "Email Address"}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <div class="d-flex gap-3 mb-3">
                                <input type="text" value="+966" style="max-width: 80px; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px;" readonly />
                                <input type="text" placeholder="${lang === "ar" ? "مثال xxxxxxxx5" : "Example 5xxxxxxxx"}" style="flex: 1; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px;" />
                            </div>
                            <input type="text" placeholder="${lang === "ar" ? "الموضوع" : "Subject"}" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px;" />
                            <textarea placeholder="${lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}" rows="4" style="width: 100%; padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 12px; resize: vertical;"></textarea>
                            <button type="button" class="btn" style="background: #004F4C; color: #fff; padding: 12px 32px; border-radius: 8px; font-weight: 500;">${lang === "ar" ? "إرسال" : "Send"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroSliderHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const slides = c2.slides || [];
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const bgUrl = getImageUrl(c2.background_image) || "/assets/img/hero-bg.png";
      return `
    <section class="hero-area position-relative" style="background-image: url('${bgUrl}')">
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
                                    <img class="w-100 h-100 object-fit-cover" src="${getImageUrl(slide.image)}" alt="${slide.alt || "Slide"}" />
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                ` : `<div class="text-center py-4" style="color: rgba(255,255,255,0.7);">Add slides to show here</div>`}
                <div class="hero-content text-center mt-40" data-aos="fade-up" data-aos-delay="500">
                    <p>${t3(c2.description_ar, c2.description_en) || ""}</p>
                </div>
                <div class="hero-btn d-flex justify-content-center" data-aos="fade-up">
                    <a href="${c2.button_url || "#"}" class="common-btn d-flex align-items-center">
                        ${t3(c2.button_text_ar, c2.button_text_en) || "Get Started"} <span><i class="${angleIcon}"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroCommonHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      const bgUrl = getImageUrl(c2.background_image);
      const bgStyle = bgUrl ? `url(${bgUrl}) center/cover no-repeat` : "#012d37";
      const shapeUrl = getImageUrl(c2.shape_image);
      const iconUrl = getImageUrl(c2.icon);
      const heroImgUrl = getImageUrl(c2.hero_image);
      const heroBgImgUrl = getImageUrl(c2.hero_bg_image);
      return `
    <section class="hero-area v2 position-relative" style="background: ${bgStyle}; min-height: 400px; padding: 80px 0;">
        ${shapeUrl ? `<img src="${shapeUrl}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; height: 100%; object-fit: contain; opacity: 0.3;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block" data-aos="fade-up">
                        ${iconUrl ? `<i><img src="${iconUrl}" alt="" /></i>` : ""}
                        <div>
                            <h1 class="text-white fs-56">${t3(c2.title_ar, c2.title_en) || "Hero Title"}</h1>
                            <p class="text-white-50">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="d-flex align-items-center gap-3 mt-4">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" class="common-btn d-flex align-items-center" style="background: #fff; color: #012d37;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)} <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn text-white">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)} <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" data-aos="fade-up" data-aos-delay="200">
                        ${heroImgUrl ? `<img src="${heroImgUrl}" alt="" />` : '<div style="height: 200px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">Add hero image</div>'}
                        ${heroBgImgUrl ? `<img src="${heroBgImgUrl}" class="hero-icon-bg" alt="" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateNewsletterHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const bgImage = c2.background_image && c2.background_image.trim() !== "";
      const bgUrl = bgImage ? getImageUrl(c2.background_image) : "";
      const iconUrl = c2.icon ? getImageUrl(c2.icon) : "";
      const defaultBg = "linear-gradient(135deg, #004F4C 0%, #003836 100%)";
      return `
    <section class="newsletter-area" style="background: ${bgImage ? `url(${bgUrl}) center/cover no-repeat` : defaultBg}; padding: 60px 0; border-radius: 16px;">
        <div class="container">
            <div class="newsletter-wrapper d-flex align-items-center justify-content-between flex-wrap gap-4">
                <div class="newsletter-content d-flex align-items-center gap-3">
                    ${iconUrl ? `<div class="newsletter-icon"><img src="${iconUrl}" alt="" style="width: 64px; height: 64px;" /></div>` : ""}
                    <div>
                        <h2 class="text-white mb-1">${t3(c2.title1_ar, c2.title1_en) || (lang === "ar" ? "ابدأ معنا." : "Start With Us.")}</h2>
                        <h3 class="text-white mb-0">${t3(c2.title2_ar, c2.title2_en) || (lang === "ar" ? "اتصل بنا الآن!" : "Call Us Now!")}</h3>
                    </div>
                </div>
                <div class="newsletter-cta d-flex align-items-center gap-3">
                    <div class="phone-info text-white">
                        <span style="opacity: 0.7;">${t3(c2.phone_label_ar, c2.phone_label_en) || (lang === "ar" ? "مكالمة مجانية" : "Free Call")}</span>
                        <h4 class="mb-0" dir="ltr">${c2.phone || "+966 8001111144"}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateMapHtml = (c2, lang, t3) => {
      const title = t3(c2.title_ar, c2.title_en) || (lang === "ar" ? "موقعنا" : "Our Location");
      const subtitle = t3(c2.subtitle_ar, c2.subtitle_en) || "";
      const height = c2.height || 500;
      const embedUrl = c2.embed_url;
      const lat = c2.latitude || "24.7136";
      const lng = c2.longitude || "46.6753";
      const zoom = c2.zoom || "15";
      const mapSrc = embedUrl || `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
      return `
    <section class="map-area" style="padding: 40px 0;">
        <div class="container">
            ${`
            <div class="section-title text-center mb-4">
                ${`<h2>${title}</h2>`}
                ${subtitle ? `<p style="color: #666;">${subtitle}</p>` : ""}
            </div>
            `}
            <div class="map-wrapper" style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                <iframe 
                    src="${mapSrc}" 
                    width="100%" 
                    height="${height}" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            ${c2.address ? `
            <div class="map-address text-center mt-3">
                <p style="color: #666;"><i class="far fa-map-marker-alt me-2"></i>${c2.address}</p>
            </div>
            ` : ""}
        </div>
    </section>`;
    };
    const generateCommonServiceHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const services = c2.services || [];
      const titleColor = c2.title_color || "inherit";
      return `
    <section class="comService-area" style="padding: 60px 0;">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-4">
                        ${c2.section_icon ? `<i><img src="${getImageUrl(c2.section_icon)}" alt="" /></i>` : ""}
                        <h1 style="color: ${titleColor};">${t3(c2.title_ar, c2.title_en) || ""}</h1>
                        ${c2.subtitle_ar || c2.subtitle_en ? `<p class="fs-18" style="color: #768495">${t3(c2.subtitle_ar, c2.subtitle_en)}</p>` : ""}
                    </div>
                </div>
                ${services.map((service) => `
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="service__block" style="background: #fff; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            ${service.icon ? `<i><img src="${getImageUrl(service.icon)}" alt="" style="width: 48px; height: 48px; margin-bottom: 16px;" /></i>` : ""}
                            <h5 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 12px;">${t3(service.title_ar, service.title_en)}</h5>
                            <p style="color: #666; font-size: 0.9rem; margin: 0;">${t3(service.description_ar, service.description_en)}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    </section>`;
    };
    const generateCounterAreaHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const counters = c2.counters || [];
      const noMarginTop = c2.no_margin_top ? "margin-top: 0;" : "";
      return `
    <section class="counter-area" style="padding: 40px 0; ${noMarginTop}">
        <div class="container">
            <div class="counter__wrapper" style="background: linear-gradient(135deg, #004F4C 0%, #003836 100%); border-radius: 24px; padding: 40px;">
                <div class="row">
                    ${counters.map((counter) => `
                        <div class="col-md-6">
                            <div class="counter__block d-flex align-items-center gap-3" style="padding: 20px;">
                                ${counter.icon ? `<i style="background: rgba(255,255,255,0.1); border-radius: 50%; padding: 16px;"><img src="${getImageUrl(counter.icon)}" alt="" style="width: 32px; height: 32px;" /></i>` : ""}
                                <h1 style="color: #fff; font-size: 2.5rem; margin: 0;">
                                    ${counter.value}
                                    <span style="display: block; font-size: 1rem; font-weight: 400; opacity: 0.8;">${t3(counter.label_ar, counter.label_en)}</span>
                                </h1>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateGalleryPageHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const items = c2.items || [];
      const home = lang === "ar" ? "الرئيسية" : "Home";
      const breadcrumb = t3(c2.breadcrumb_ar, c2.breadcrumb_en) || (lang === "ar" ? "المعرض" : "Gallery");
      return `
    <div>
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-nav" style="padding: 20px 0; background: #f8f9fa;">
            <div class="container">
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; gap: 8px; align-items: center;">
                    <li><a href="" style="color: #666; text-decoration: none;">${home}</a></li>
                    <li><span style="color: #999;">/</span></li>
                    <li><a href="" class="active" style="color: #004F4C; text-decoration: none; font-weight: 500;">${breadcrumb}</a></li>
                </ul>
            </div>
        </div>

        <!-- Gallery Section -->
        <section class="galleryV2-area" style="padding: 60px 0;">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-12 text-center">
                        <div class="mb-4">
                            <h1 style="margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || (lang === "ar" ? "المعرض" : "Gallery")}</h1>
                            ${c2.subtitle_ar || c2.subtitle_en ? `<p class="off-text mb-0 fw-medium fs-18" style="color: #666;">${t3(c2.subtitle_ar, c2.subtitle_en)}</p>` : ""}
                        </div>
                    </div>
                    ${items.map((item) => `
                        <div class="col-md-6">
                            <div class="img__card__block" style="position: relative; border-radius: 16px; overflow: hidden;">
                                <img src="${getImageUrl(item.image)}" alt="${t3(item.label_ar, item.label_en)}" style="width: 100%; height: 300px; object-fit: cover;" />
                                <a href="${item.url || "#"}" style="position: absolute; bottom: 16px; left: 16px; background: rgba(255,255,255,0.9); padding: 8px 16px; border-radius: 8px; text-decoration: none; color: #333; font-weight: 500;">${t3(item.label_ar, item.label_en)}</a>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    </div>`;
    };
    const generateHeroRiyaHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      const titleColor = c2.title_color || "#9B4DE0";
      return `
    <section class="common-hero-area" style="padding: 60px 0; position: relative;">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c2.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ""}
                        <div>
                            <h1 class="fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || "منصة ريا"}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c2.hero_image ? `<img src="${getImageUrl(c2.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ""}
                        ${c2.hero_bg_image ? `<img src="${getImageUrl(c2.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroJiyadHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      const titleColor = c2.title_color || "#314660";
      return `
    <section class="common-hero-area" style="padding: 60px 0; position: relative;">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c2.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ""}
                        <div>
                            <h1 class="fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || "منصة جياد"}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c2.hero_image ? `<img src="${getImageUrl(c2.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ""}
                        ${c2.hero_bg_image ? `<img src="${getImageUrl(c2.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroShopsZHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      const titleColor = c2.title_color || "#00A651";
      return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c2.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ""}
                        <div>
                            <h1 class="text-green fs-56" style="color: ${titleColor}; font-size: 3rem; margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || "منصة Shops Z"}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="work-card-btns green-btns d-flex align-items-center gap-3">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" style="background: #00A651; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn" style="color: #00A651; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c2.hero_image ? `<img src="${getImageUrl(c2.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ""}
                        ${c2.hero_bg_image ? `<img src="${getImageUrl(c2.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroBeyondERPHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c2.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ""}
                        <div>
                            <h1 class="fs-56" style="font-size: 3rem; margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || "Beyond ERP"}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c2.hero_image ? `<img src="${getImageUrl(c2.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ""}
                        ${c2.hero_bg_image ? `<img src="${getImageUrl(c2.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    };
    const generateHeroBeyondPayHtml = (c2, lang, t3) => {
      const getImageUrl = (img) => {
        if (!img || typeof img !== "string") return "";
        if (img.startsWith("http") || img.startsWith("/")) return img;
        return `/storage/${img}`;
      };
      const angleIcon = lang === "ar" ? "far fa-angle-left" : "far fa-angle-right";
      const longArrowIcon = lang === "ar" ? "fal fa-long-arrow-left" : "fal fa-long-arrow-right";
      return `
    <section class="common-hero-area pb-4 pb-lg-0 pt-4" style="padding: 40px 0; position: relative;">
        ${c2.shape_image ? `<img src="${getImageUrl(c2.shape_image)}" class="hero-shape" alt="" style="position: absolute; top: 0; right: 0; max-width: 50%; opacity: 0.5;" />` : ""}
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row gap-4 gap-lg-0 align-items-center">
                <div class="col-lg-6">
                    <div class="hero__block">
                        ${c2.icon ? `<i style="display: inline-block; margin-bottom: 16px;"><img src="${getImageUrl(c2.icon)}" alt="" style="width: 48px; height: 48px;" /></i>` : ""}
                        <div>
                            <h1 class="fs-56" style="font-size: 3rem; margin-bottom: 16px;">${t3(c2.title_ar, c2.title_en) || "Beyond Pay"}</h1>
                            <p style="color: #666; margin-bottom: 24px;">${t3(c2.description_ar, c2.description_en) || ""}</p>
                            <div class="work-card-btns d-flex align-items-center gap-3">
                                ${c2.button_text_ar || c2.button_text_en ? `
                                <a href="${c2.button_url || "#"}" style="background: #004F4C; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.button_text_ar, c2.button_text_en)}
                                    <span><i class="${angleIcon}"></i></span>
                                </a>` : ""}
                                ${c2.secondary_button_text_ar || c2.secondary_button_text_en ? `
                                <a href="${c2.secondary_button_url || "#"}" class="secondary-btn" style="color: #004F4C; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                    ${t3(c2.secondary_button_text_ar, c2.secondary_button_text_en)}
                                    <span><i class="${longArrowIcon}"></i></span>
                                </a>` : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <div class="hero__img" style="position: relative;">
                        ${c2.hero_image ? `<img src="${getImageUrl(c2.hero_image)}" alt="" style="max-width: 100%; position: relative; z-index: 1;" />` : ""}
                        ${c2.hero_bg_image ? `<img src="${getImageUrl(c2.hero_bg_image)}" class="hero-icon-bg" alt="" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 120%; z-index: 0; opacity: 0.3;" />` : ""}
                    </div>
                </div>
            </div>
        </div>
    </section>`;
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
      console.log("Saving section:", sectionId, "with content:", JSON.stringify(content, null, 2));
      router.put(
        route("pages.builder.sections.update", [props.page.id, sectionId]),
        { content },
        {
          preserveScroll: true,
          preserveState: false,
          // Allow props to update from server
          onSuccess: (page) => {
            console.log("Save success, received sections:", page.props.sections);
            if (page.props.sections) {
              sectionsList.value = page.props.sections;
            }
            showToast("Section updated successfully", "success");
            hasUnsavedChanges.value = false;
            isSaving.value = false;
            closeEditSidebar();
          },
          onError: (errors) => {
            console.error("Save error:", errors);
            showToast("Failed to update section: " + JSON.stringify(errors), "error");
            isSaving.value = false;
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
      const slug = props.page.url_slug_en || props.page.slug || "";
      const pageUrl = slug === "home" || !slug ? "/" : `/${slug}`;
      window.open(pageUrl, "_blank");
    };
    const saveAllSections = () => {
      if (isSaving.value) return;
      isSaving.value = true;
      if (editingSection.value) {
        updateSection(editingSection.value.id, editingSection.value.content);
      } else {
        setTimeout(() => {
          isSaving.value = false;
          showToast("All changes saved", "success");
          hasUnsavedChanges.value = false;
        }, 500);
      }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-builder" }, _attrs))} data-v-96c4ad56><div class="builder-header" data-v-96c4ad56><div class="header-left" data-v-96c4ad56><h1 class="page-title" data-v-96c4ad56>Page Builder</h1><div class="page-info" data-v-96c4ad56><span class="page-name" data-v-96c4ad56>${ssrInterpolate(__props.page.name_en)}</span><span class="separator" data-v-96c4ad56>•</span><span class="page-slug" data-v-96c4ad56>/${ssrInterpolate(__props.page.url_slug_en)}</span></div></div><div class="header-right" data-v-96c4ad56>`);
      _push(ssrRenderComponent(Button, {
        variant: "outline",
        size: "md",
        onClick: openPreview
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56${_scopeId}><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-96c4ad56${_scopeId}></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-96c4ad56${_scopeId}></path></svg> Preview `);
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
        size: "md",
        onClick: saveAllSections,
        disabled: isSaving.value
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isSaving.value) {
              _push2(`<svg class="icon animate-spin" viewBox="0 0 24 24" fill="none" data-v-96c4ad56${_scopeId}><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.416" stroke-dashoffset="10" data-v-96c4ad56${_scopeId}></circle></svg>`);
            } else {
              _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-96c4ad56${_scopeId}></path></svg>`);
            }
            _push2(` ${ssrInterpolate(isSaving.value ? "Saving..." : "Save")}`);
          } else {
            return [
              isSaving.value ? (openBlock(), createBlock("svg", {
                key: 0,
                class: "icon animate-spin",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createVNode("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  "stroke-dasharray": "31.416",
                  "stroke-dashoffset": "10"
                })
              ])) : (openBlock(), createBlock("svg", {
                key: 1,
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
              createTextVNode(" " + toDisplayString(isSaving.value ? "Saving..." : "Save"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="builder-content" data-v-96c4ad56><div class="sections-panel" data-v-96c4ad56><div class="panel-header" data-v-96c4ad56><h2 class="panel-title" data-v-96c4ad56>Customize Sections</h2>`);
      _push(ssrRenderComponent(Button, {
        variant: "primary",
        size: "sm",
        onClick: openAddModal
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="icon" viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-v-96c4ad56${_scopeId}></path></svg> Add New `);
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
      _push(`</div><div class="sections-list" data-v-96c4ad56><div class="sections-list-sortable" data-v-96c4ad56><!--[-->`);
      ssrRenderList(draggableSections.value, (section) => {
        _push(`<div class="${ssrRenderClass(["section-item", { "section-inactive": !section.is_active }])}" data-v-96c4ad56><div class="section-drag drag-handle" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" data-v-96c4ad56></path></svg></div><div class="section-info" data-v-96c4ad56><span class="section-name" data-v-96c4ad56>${ssrInterpolate(section.section_type.name_en)}</span></div><div class="section-actions" data-v-96c4ad56><button type="button" class="action-btn" title="Edit" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96c4ad56></path></svg></button><button type="button" class="action-btn" title="Delete" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" data-v-96c4ad56></path></svg></button><button type="button" class="action-btn" title="Duplicate" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" data-v-96c4ad56></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" data-v-96c4ad56></path></svg></button><button type="button" class="${ssrRenderClass(["action-btn", "toggle-btn", { "active": section.is_active }])}"${ssrRenderAttr("title", section.is_active ? "Hide" : "Show")} data-v-96c4ad56>`);
        if (section.is_active) {
          _push(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-96c4ad56></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-96c4ad56></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" data-v-96c4ad56></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" data-v-96c4ad56></path></svg>`);
        }
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div><div class="fixed-sections" data-v-96c4ad56><div class="fixed-section-label" data-v-96c4ad56>Fixed Sections</div>`);
      if (headerSection.value) {
        _push(`<div class="section-item section-fixed" data-v-96c4ad56><div class="section-info" data-v-96c4ad56><span class="section-name" data-v-96c4ad56>${ssrInterpolate(headerSection.value.section_type.name_en)}</span></div><div class="section-actions" data-v-96c4ad56><button type="button" class="action-btn" title="Edit" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96c4ad56></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (footerSection.value) {
        _push(`<div class="section-item section-fixed" data-v-96c4ad56><div class="section-info" data-v-96c4ad56><span class="section-name" data-v-96c4ad56>${ssrInterpolate(footerSection.value.section_type.name_en)}</span></div><div class="section-actions" data-v-96c4ad56><button type="button" class="action-btn" title="Edit" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" data-v-96c4ad56></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="preview-panel" data-v-96c4ad56><div class="preview-header" data-v-96c4ad56><h2 class="preview-title" data-v-96c4ad56>Preview</h2><div class="preview-actions" data-v-96c4ad56><div class="preview-lang-toggle" data-v-96c4ad56><button type="button" class="${ssrRenderClass(["lang-btn", { active: previewLang.value === "en" }])}" data-v-96c4ad56>EN</button><button type="button" class="${ssrRenderClass(["lang-btn", { active: previewLang.value === "ar" }])}" data-v-96c4ad56>AR</button></div><button type="button" class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "desktop" }])}" title="Desktop" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" data-v-96c4ad56></path></svg></button><button type="button" class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "tablet" }])}" title="Tablet" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-v-96c4ad56></path></svg></button><button type="button" class="${ssrRenderClass(["preview-device", { active: previewDevice.value === "mobile" }])}" title="Mobile" data-v-96c4ad56><svg viewBox="0 0 20 20" fill="currentColor" data-v-96c4ad56><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-v-96c4ad56></path></svg></button></div></div><div class="preview-content" data-v-96c4ad56><div class="${ssrRenderClass(["preview-frame-container", `preview-${previewDevice.value}`])}" data-v-96c4ad56><iframe class="preview-iframe"${ssrRenderAttr("srcdoc", previewHtml.value)} frameborder="0" data-v-96c4ad56></iframe></div></div></div></div>`);
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PageBuilder/Index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-96c4ad56"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
function useSlugify() {
  const generateSlug = (text, lang = "en") => {
    if (!text) return "";
    let slug = text.trim();
    if (lang === "en") {
      slug = slug.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    } else if (lang === "ar") {
      slug = slug.replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    return slug;
  };
  const formatAsSlug = (text, lang = "en") => {
    if (!text) return "";
    let slug = text.trim();
    if (lang === "en") {
      slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    } else if (lang === "ar") {
      slug = slug.replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    return slug;
  };
  const isValidSlug = (slug, lang = "en") => {
    if (!slug) return false;
    if (lang === "en") {
      return /^[a-z0-9-]+$/.test(slug);
    } else if (lang === "ar") {
      return slug.length > 0 && !slug.startsWith("-") && !slug.endsWith("-");
    }
    return false;
  };
  return {
    generateSlug,
    formatAsSlug,
    isValidSlug
  };
}
const _sfc_main$a = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const { generateSlug } = useSlugify();
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
    const slugManuallyEditedEn = ref(false);
    const slugManuallyEditedAr = ref(false);
    watch(() => form.name_en, (newName) => {
      if (!slugManuallyEditedEn.value && newName) {
        form.url_slug_en = generateSlug(newName, "en");
      }
    });
    watch(() => form.name_ar, (newName) => {
      if (!slugManuallyEditedAr.value && newName) {
        form.url_slug_ar = generateSlug(newName, "ar");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-new-page" }, _attrs))} data-v-3122d08e><div class="page-header" data-v-3122d08e><h1 class="page-title" data-v-3122d08e>Add New Page</h1></div><div class="form-container card" data-v-3122d08e><div class="form-grid" data-v-3122d08e><div class="form-column" data-v-3122d08e><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Page Name <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_en)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.name_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> URL Slug <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_en)} placeholder="auto-generated-from-page-name" data-v-3122d08e><div class="form-hint" data-v-3122d08e>The English URL slug can only contain lowercase letters, numbers, and hyphens.</div>`);
      if (unref(form).errors.url_slug_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.url_slug_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Meta Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_en)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.meta_title_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.meta_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> H1 Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_en)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.h1_title_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.h1_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_en)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.og_title_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.og_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Hreflang <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_en)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.hreflang_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.hreflang_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Meta Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><textarea class="form-textarea" placeholder="" rows="4" data-v-3122d08e>${ssrInterpolate(unref(form).meta_description_en)}</textarea>`);
      if (unref(form).errors.meta_description_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.meta_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><textarea class="form-textarea" placeholder="" rows="4" data-v-3122d08e>${ssrInterpolate(unref(form).og_description_en)}</textarea>`);
      if (unref(form).errors.og_description_en) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.og_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Image <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-3122d08e></label><div class="upload-area" data-v-3122d08e><input type="file" class="hidden-input" accept="image/*" data-v-3122d08e>`);
      if (ogImageEnPreview.value) {
        _push(`<div class="image-preview" data-v-3122d08e><img${ssrRenderAttr("src", ogImageEnPreview.value)} alt="Preview" data-v-3122d08e></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-3122d08e><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3122d08e><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path></svg><span class="upload-text" data-v-3122d08e>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div><div class="form-column" data-v-3122d08e><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Page Name <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_ar)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.name_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.name_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> URL Slug <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_ar)} placeholder="يتم-إنشاؤها-تلقائيا-من-اسم-الصفحة" dir="rtl" data-v-3122d08e><div class="form-hint" data-v-3122d08e>Arabic slug with readable Arabic characters.</div>`);
      if (unref(form).errors.url_slug_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.url_slug_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Meta Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_ar)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.meta_title_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.meta_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> H1 Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_ar)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.h1_title_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.h1_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_ar)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.og_title_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.og_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Hreflang <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_ar)} placeholder="" data-v-3122d08e>`);
      if (unref(form).errors.hreflang_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.hreflang_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> Meta Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><textarea class="form-textarea" placeholder="" rows="4" data-v-3122d08e>${ssrInterpolate(unref(form).meta_description_ar)}</textarea>`);
      if (unref(form).errors.meta_description_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.meta_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><textarea class="form-textarea" placeholder="" rows="4" data-v-3122d08e>${ssrInterpolate(unref(form).og_description_ar)}</textarea>`);
      if (unref(form).errors.og_description_ar) {
        _push(`<div class="form-error" data-v-3122d08e>${ssrInterpolate(unref(form).errors.og_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-3122d08e><label class="form-label" data-v-3122d08e> OG Image <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-3122d08e></label><div class="upload-area" data-v-3122d08e><input type="file" class="hidden-input" accept="image/*" data-v-3122d08e>`);
      if (ogImageArPreview.value) {
        _push(`<div class="image-preview" data-v-3122d08e><img${ssrRenderAttr("src", ogImageArPreview.value)} alt="Preview" data-v-3122d08e></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-3122d08e><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3122d08e><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path></svg><span class="upload-text" data-v-3122d08e>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div></div><div class="form-actions" data-v-3122d08e><button class="btn-cancel"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-3122d08e><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3122d08e><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path></svg> Cancel </button><button class="btn-save"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-3122d08e><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3122d08e><path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-3122d08e></path></svg> ${ssrInterpolate(unref(form).processing ? "Saving..." : "Save")}</button></div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Create.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-3122d08e"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "add-new-page" }, _attrs))} data-v-8facbc12><div class="page-header" data-v-8facbc12><h1 class="page-title" data-v-8facbc12>Edit Page</h1></div><div class="form-container card" data-v-8facbc12><div class="form-grid" data-v-8facbc12><div class="form-column" data-v-8facbc12><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Page Name <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_en)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.name_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.name_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> URL Slug <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_en)} placeholder="page-url-slug" data-v-8facbc12><div class="form-hint" data-v-8facbc12>The English URL slug can only contain lowercase letters, numbers, and hyphens.</div>`);
      if (unref(form).errors.url_slug_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.url_slug_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Meta Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_en)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.meta_title_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.meta_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> H1 Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_en)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.h1_title_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.h1_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Title <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_en)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.og_title_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.og_title_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Hreflang <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_en)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.hreflang_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.hreflang_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Meta Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><textarea class="form-textarea" placeholder="" rows="4" data-v-8facbc12>${ssrInterpolate(unref(form).meta_description_en)}</textarea>`);
      if (unref(form).errors.meta_description_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.meta_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Description <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><textarea class="form-textarea" placeholder="" rows="4" data-v-8facbc12>${ssrInterpolate(unref(form).og_description_en)}</textarea>`);
      if (unref(form).errors.og_description_en) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.og_description_en)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Image <img${ssrRenderAttr("src", unref(usFlag))} alt="US" class="label-flag" data-v-8facbc12></label><div class="upload-area" data-v-8facbc12><input type="file" class="hidden-input" accept="image/*" data-v-8facbc12>`);
      if (ogImageEnPreview.value) {
        _push(`<div class="image-preview" data-v-8facbc12><img${ssrRenderAttr("src", ogImageEnPreview.value)} alt="Preview" data-v-8facbc12></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-8facbc12><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8facbc12><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path></svg><span class="upload-text" data-v-8facbc12>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div><div class="form-column" data-v-8facbc12><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Page Name <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).name_ar)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.name_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.name_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> URL Slug <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).url_slug_ar)} placeholder="عنوان-url-الصفحة" dir="rtl" data-v-8facbc12><div class="form-hint" data-v-8facbc12>Arabic slug with readable Arabic characters.</div>`);
      if (unref(form).errors.url_slug_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.url_slug_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Meta Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).meta_title_ar)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.meta_title_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.meta_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> H1 Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).h1_title_ar)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.h1_title_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.h1_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Title <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).og_title_ar)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.og_title_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.og_title_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Hreflang <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><input type="text" class="form-input"${ssrRenderAttr("value", unref(form).hreflang_ar)} placeholder="" data-v-8facbc12>`);
      if (unref(form).errors.hreflang_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.hreflang_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> Meta Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><textarea class="form-textarea" placeholder="" rows="4" data-v-8facbc12>${ssrInterpolate(unref(form).meta_description_ar)}</textarea>`);
      if (unref(form).errors.meta_description_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.meta_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Description <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><textarea class="form-textarea" placeholder="" rows="4" data-v-8facbc12>${ssrInterpolate(unref(form).og_description_ar)}</textarea>`);
      if (unref(form).errors.og_description_ar) {
        _push(`<div class="form-error" data-v-8facbc12>${ssrInterpolate(unref(form).errors.og_description_ar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-8facbc12><label class="form-label" data-v-8facbc12> OG Image <img${ssrRenderAttr("src", unref(saFlag))} alt="SA" class="label-flag" data-v-8facbc12></label><div class="upload-area" data-v-8facbc12><input type="file" class="hidden-input" accept="image/*" data-v-8facbc12>`);
      if (ogImageArPreview.value) {
        _push(`<div class="image-preview" data-v-8facbc12><img${ssrRenderAttr("src", ogImageArPreview.value)} alt="Preview" data-v-8facbc12></div>`);
      } else {
        _push(`<div class="upload-placeholder" data-v-8facbc12><svg class="upload-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8facbc12><path d="M42 32V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path><path d="M14 20L24 10L34 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path><path d="M24 10V32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path></svg><span class="upload-text" data-v-8facbc12>Drop files here or click to upload.</span></div>`);
      }
      _push(`</div></div></div></div><div class="form-actions" data-v-8facbc12><button class="btn-cancel"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-8facbc12><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8facbc12><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path></svg> Cancel </button><button class="btn-save"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-8facbc12><svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8facbc12><path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-8facbc12></path></svg> ${ssrInterpolate(unref(form).processing ? "Updating..." : "Update")}</button></div></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Edit.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-8facbc12"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const itemsPerPage = 6;
const _sfc_main$8 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-pages" }, _attrs))} data-v-2908f4a9><div class="page-header" data-v-2908f4a9><h1 class="page-title" data-v-2908f4a9>All Pages</h1>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("pages.create"),
        class: "btn-primary"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="btn-icon-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9${_scopeId}><path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9${_scopeId}></path></svg> Add New `);
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
      _push(`</div><div class="table-container card" data-v-2908f4a9><table class="data-table" data-v-2908f4a9><thead data-v-2908f4a9><tr data-v-2908f4a9><th class="checkbox-column" data-v-2908f4a9><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(Array.isArray(selectAll.value) ? ssrLooseContain(selectAll.value, null) : selectAll.value) ? " checked" : ""} data-v-2908f4a9></th><th class="name-column" data-v-2908f4a9><div class="th-content sortable" data-v-2908f4a9> Pages Name <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path></svg></div></th><th class="date-column" data-v-2908f4a9><div class="th-content sortable" data-v-2908f4a9> Last Edit Date <svg class="sort-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M8 3V13M8 3L4 7M8 3L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path></svg></div></th><th class="actions-column" data-v-2908f4a9>Actions</th></tr></thead><tbody data-v-2908f4a9><!--[-->`);
      ssrRenderList(paginatedPages.value, (page) => {
        _push(`<tr data-v-2908f4a9><td class="checkbox-column" data-v-2908f4a9><input type="checkbox" class="checkbox-custom"${ssrIncludeBooleanAttr(isPageSelected(page.id)) ? " checked" : ""} data-v-2908f4a9></td><td class="name-column" data-v-2908f4a9><span class="page-name" data-v-2908f4a9>${ssrInterpolate(page.name)}</span></td><td class="date-column" data-v-2908f4a9><span class="date-text" data-v-2908f4a9>${ssrInterpolate(page.lastEditDate)}</span></td><td class="actions-column" data-v-2908f4a9><div class="action-buttons" data-v-2908f4a9><button class="btn-icon btn-primary-icon" title="Builder" data-v-2908f4a9><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" stroke-width="1.5" data-v-2908f4a9></path><path d="M3 7h14M7 3v14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-2908f4a9></path></svg></button><button class="btn-icon" title="Edit" data-v-2908f4a9><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M14.166 2.5L17.5 5.83333L6.66667 16.6667H3.33334V13.3333L14.166 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path></svg></button><button class="btn-icon" title="Delete" data-v-2908f4a9><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M2.5 5H4.16667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path><path d="M6.66666 5V3.33333C6.66666 2.89131 6.84225 2.46738 7.15481 2.15482C7.46737 1.84226 7.8913 1.66667 8.33332 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5H15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path></svg></button><button class="btn-icon" title="Duplicate" data-v-2908f4a9><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2908f4a9><path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path><path d="M4.16666 12.5H3.33332C2.8913 12.5 2.46737 12.3244 2.15481 12.0118C1.84225 11.6993 1.66666 11.2754 1.66666 10.8333V3.33333C1.66666 2.89131 1.84225 2.46738 2.15481 2.15482C2.46737 1.84226 2.8913 1.66667 3.33332 1.66667H10.8333C11.2753 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-2908f4a9></path></svg></button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="pagination-container" data-v-2908f4a9><p class="pagination-info" data-v-2908f4a9>${ssrInterpolate(paginationInfo.value)}</p><div class="pagination" data-v-2908f4a9><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-2908f4a9> Previous </button><!--[-->`);
      ssrRenderList(pageNumbers.value, (page) => {
        _push(`<button class="${ssrRenderClass([{ "active": page === currentPage.value }, "pagination-number"])}" data-v-2908f4a9>${ssrInterpolate(page)}</button>`);
      });
      _push(`<!--]--><button class="pagination-btn"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-2908f4a9> Next </button></div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2908f4a9"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-388636fb"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "CustomCode",
  __ssrInlineRender: true,
  props: {
    headerCode: {
      type: String,
      default: ""
    },
    footerCode: {
      type: String,
      default: ""
    },
    warnings: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    usePage();
    const form = ref({
      header_code: props.headerCode || "",
      footer_code: props.footerCode || ""
    });
    const isSaving = ref(false);
    const showSuccessMessage = ref(false);
    const hasChanges = computed(() => {
      return form.value.header_code !== (props.headerCode || "") || form.value.footer_code !== (props.footerCode || "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings-page" }, _attrs))} data-v-31d73606><div class="page-header" data-v-31d73606><div class="header-content" data-v-31d73606><h1 class="page-title" data-v-31d73606>Custom Code</h1><p class="page-subtitle" data-v-31d73606> Add custom scripts, meta tags, and tracking codes to your website&#39;s header and footer. </p></div></div><div class="warning-banner" data-v-31d73606><div class="warning-icon" data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M10 6.66667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><circle cx="10" cy="13.3333" r="0.833333" fill="currentColor" data-v-31d73606></circle></svg></div><div class="warning-content" data-v-31d73606><h3 class="warning-title" data-v-31d73606>Security Notice</h3><p class="warning-text" data-v-31d73606> Only add code from trusted sources. Malicious scripts can compromise your website&#39;s security and user data. PHP code is automatically removed for security purposes. </p></div></div>`);
      if (__props.warnings && __props.warnings.length > 0) {
        _push(`<div class="validation-warnings" data-v-31d73606><div class="validation-icon" data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M10 6.66667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><circle cx="10" cy="13.3333" r="0.833333" fill="currentColor" data-v-31d73606></circle></svg></div><div class="validation-content" data-v-31d73606><h3 class="validation-title" data-v-31d73606>Code Warnings</h3><ul class="validation-list" data-v-31d73606><!--[-->`);
        ssrRenderList(__props.warnings, (warning, index) => {
          _push(`<li data-v-31d73606>${ssrInterpolate(warning)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showSuccessMessage.value) {
        _push(`<div class="success-banner" data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M13.3333 7.5L8.75 12.0833L6.66667 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path></svg> Settings saved successfully! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="settings-form" data-v-31d73606><div class="form-section" data-v-31d73606><div class="section-header" data-v-31d73606><h2 class="section-title" data-v-31d73606>Header Code</h2><p class="section-description" data-v-31d73606> Code added here will be injected into the <code data-v-31d73606>&lt;head&gt;</code> section of every page. Common uses include Google Analytics, meta verification tags, custom fonts, and CSS. </p></div><div class="code-input-wrapper" data-v-31d73606><label for="header_code" class="code-label" data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M13.3333 15L18.3333 10L13.3333 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M6.66667 5L1.66667 10L6.66667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path></svg> &lt;head&gt; </label><textarea id="header_code" class="code-textarea" rows="8" placeholder="&lt;!-- Paste your header code here --&gt;
&lt;script&gt;...&lt;/script&gt;
&lt;meta name=&quot;verification&quot; content=&quot;...&quot;&gt;" spellcheck="false" data-v-31d73606>${ssrInterpolate(form.value.header_code)}</textarea></div><div class="section-hints" data-v-31d73606><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> Google Analytics tracking code </span><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> Meta verification tags </span><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> Custom fonts / CSS </span></div></div><div class="form-section" data-v-31d73606><div class="section-header" data-v-31d73606><h2 class="section-title" data-v-31d73606>Footer Code</h2><p class="section-description" data-v-31d73606> Code added here will be injected just before the closing <code data-v-31d73606>&lt;/body&gt;</code> tag on every page. Common uses include chat widgets, conversion tracking, and other scripts that should load after page content. </p></div><div class="code-input-wrapper" data-v-31d73606><label for="footer_code" class="code-label" data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M13.3333 15L18.3333 10L13.3333 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M6.66667 5L1.66667 10L6.66667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path></svg> &lt;/body&gt; </label><textarea id="footer_code" class="code-textarea" rows="8" placeholder="&lt;!-- Paste your footer code here --&gt;
&lt;script&gt;...&lt;/script&gt;" spellcheck="false" data-v-31d73606>${ssrInterpolate(form.value.footer_code)}</textarea></div><div class="section-hints" data-v-31d73606><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> Chat widget scripts </span><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> Conversion tracking </span><span class="hint-item" data-v-31d73606><span class="hint-icon" data-v-31d73606>✓</span> JSON-LD schema markup </span></div></div><div class="form-actions" data-v-31d73606><button type="button" class="btn btn-secondary"${ssrIncludeBooleanAttr(!hasChanges.value || isSaving.value) ? " disabled" : ""} data-v-31d73606><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M1.66667 3.33333V8.33333H6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M2.92501 12.5C3.46558 13.9264 4.43918 15.1499 5.70632 16.0002C6.97347 16.8505 8.47018 17.2834 9.99199 17.2381C11.5138 17.1928 12.9825 16.6716 14.1975 15.7473C15.4125 14.8229 16.3137 13.5409 16.7705 12.0843C17.2273 10.6277 17.2175 9.06689 16.7424 7.61601C16.2673 6.16513 15.3502 4.89471 14.1237 3.98551C12.8972 3.07631 11.4219 2.57316 9.90018 2.54637C8.37849 2.51958 6.88647 2.97054 5.62917 3.83583L1.66667 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path></svg> Reset </button><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} data-v-31d73606>`);
      if (!isSaving.value) {
        _push(`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333L17.5 6.66667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M14.1667 17.5V10.8333H5.83333V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path><path d="M5.83333 2.5V6.66667H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-31d73606></path></svg>`);
      } else {
        _push(`<svg class="spinner" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31d73606><path d="M10 2.5V5.83333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.7" d="M10 14.1667V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.5" d="M4.10833 4.10833L6.46667 6.46667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.3" d="M13.5333 13.5333L15.8917 15.8917" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.2" d="M2.5 10H5.83333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.9" d="M14.1667 10H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.4" d="M4.10833 15.8917L6.46667 13.5333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path><path opacity="0.6" d="M13.5333 6.46667L15.8917 4.10833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31d73606></path></svg>`);
      }
      _push(` ${ssrInterpolate(isSaving.value ? "Saving..." : "Save Changes")}</button></div></form></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/CustomCode.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CustomCode = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-31d73606"]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CustomCode
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ layout: DashboardLayout }, {
  __name: "Email",
  __ssrInlineRender: true,
  props: {
    settings: {
      type: Object,
      default: () => ({
        mail_mailer: "smtp",
        mail_host: "",
        mail_port: "587",
        mail_username: "",
        mail_password: "",
        mail_encryption: "tls",
        mail_from_address: "",
        mail_from_name: "Beyond",
        admin_email: ""
      })
    }
  },
  setup(__props) {
    const props = __props;
    usePage();
    const form = ref({
      mail_mailer: props.settings.mail_mailer || "smtp",
      mail_host: props.settings.mail_host || "",
      mail_port: props.settings.mail_port || "587",
      mail_username: props.settings.mail_username || "",
      mail_password: "",
      // Never pre-fill password
      mail_encryption: props.settings.mail_encryption || "tls",
      mail_from_address: props.settings.mail_from_address || "",
      mail_from_name: props.settings.mail_from_name || "Beyond",
      admin_email: props.settings.admin_email || ""
    });
    const testEmailForm = ref({
      test_email: ""
    });
    const isSaving = ref(false);
    const isTesting = ref(false);
    const showSuccessMessage = ref(false);
    const testSuccessMessage = ref("");
    const testErrorMessage = ref("");
    const hasPassword = computed(() => !!props.settings.mail_password);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings-page" }, _attrs))} data-v-7ddb5a05><div class="page-header" data-v-7ddb5a05><div class="header-content" data-v-7ddb5a05><h1 class="page-title" data-v-7ddb5a05>Email Settings</h1><p class="page-subtitle" data-v-7ddb5a05> Configure SMTP settings for sending emails from your website, including contact form notifications. </p></div></div>`);
      if (showSuccessMessage.value) {
        _push(`<div class="success-banner" data-v-7ddb5a05><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7ddb5a05><path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7ddb5a05></path><path d="M13.3333 7.5L8.75 12.0833L6.66667 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7ddb5a05></path></svg> Settings saved successfully! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="settings-form" data-v-7ddb5a05><div class="form-section" data-v-7ddb5a05><div class="section-header" data-v-7ddb5a05><h2 class="section-title" data-v-7ddb5a05>SMTP Settings</h2><p class="section-description" data-v-7ddb5a05> Configure your SMTP server credentials. </p></div><div class="form-grid two-columns" data-v-7ddb5a05><div class="form-group" data-v-7ddb5a05><label for="mail_host" class="form-label" data-v-7ddb5a05>SMTP Host</label><input type="text" id="mail_host"${ssrRenderAttr("value", form.value.mail_host)} class="form-input" placeholder="smtp.example.com" data-v-7ddb5a05></div><div class="form-group" data-v-7ddb5a05><label for="mail_port" class="form-label" data-v-7ddb5a05>SMTP Port</label><input type="text" id="mail_port"${ssrRenderAttr("value", form.value.mail_port)} class="form-input" placeholder="587" data-v-7ddb5a05></div><div class="form-group" data-v-7ddb5a05><label for="mail_username" class="form-label" data-v-7ddb5a05>SMTP Username</label><input type="text" id="mail_username"${ssrRenderAttr("value", form.value.mail_username)} class="form-input" placeholder="your@email.com" data-v-7ddb5a05></div><div class="form-group" data-v-7ddb5a05><label for="mail_password" class="form-label" data-v-7ddb5a05> SMTP Password `);
      if (hasPassword.value) {
        _push(`<span class="password-hint" data-v-7ddb5a05>(leave empty to keep existing)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><input type="password" id="mail_password"${ssrRenderAttr("value", form.value.mail_password)} class="form-input" placeholder="••••••••" data-v-7ddb5a05></div><div class="form-group" data-v-7ddb5a05><label for="mail_encryption" class="form-label" data-v-7ddb5a05>Encryption</label><select id="mail_encryption" class="form-select" data-v-7ddb5a05><option value="tls" data-v-7ddb5a05${ssrIncludeBooleanAttr(Array.isArray(form.value.mail_encryption) ? ssrLooseContain(form.value.mail_encryption, "tls") : ssrLooseEqual(form.value.mail_encryption, "tls")) ? " selected" : ""}>TLS</option><option value="ssl" data-v-7ddb5a05${ssrIncludeBooleanAttr(Array.isArray(form.value.mail_encryption) ? ssrLooseContain(form.value.mail_encryption, "ssl") : ssrLooseEqual(form.value.mail_encryption, "ssl")) ? " selected" : ""}>SSL</option><option value="null" data-v-7ddb5a05${ssrIncludeBooleanAttr(Array.isArray(form.value.mail_encryption) ? ssrLooseContain(form.value.mail_encryption, "null") : ssrLooseEqual(form.value.mail_encryption, "null")) ? " selected" : ""}>None</option></select></div></div></div><div class="form-section" data-v-7ddb5a05><div class="section-header" data-v-7ddb5a05><h2 class="section-title" data-v-7ddb5a05>From Address</h2><p class="section-description" data-v-7ddb5a05> Configure the sender information for outgoing emails. </p></div><div class="form-grid two-columns" data-v-7ddb5a05><div class="form-group" data-v-7ddb5a05><label for="mail_from_address" class="form-label" data-v-7ddb5a05>From Email Address</label><input type="email" id="mail_from_address"${ssrRenderAttr("value", form.value.mail_from_address)} class="form-input" placeholder="noreply@yourdomain.com" data-v-7ddb5a05></div><div class="form-group" data-v-7ddb5a05><label for="mail_from_name" class="form-label" data-v-7ddb5a05>From Name</label><input type="text" id="mail_from_name"${ssrRenderAttr("value", form.value.mail_from_name)} class="form-input" placeholder="Beyond" data-v-7ddb5a05></div></div></div><div class="form-section" data-v-7ddb5a05><div class="section-header" data-v-7ddb5a05><h2 class="section-title" data-v-7ddb5a05>Admin Notifications</h2><p class="section-description" data-v-7ddb5a05> This email will receive contact form submissions and other notifications. </p></div><div class="form-grid" data-v-7ddb5a05><div class="form-group" data-v-7ddb5a05><label for="admin_email" class="form-label" data-v-7ddb5a05>Admin Email Address</label><input type="email" id="admin_email"${ssrRenderAttr("value", form.value.admin_email)} class="form-input" placeholder="admin@yourdomain.com" data-v-7ddb5a05></div></div></div><div class="form-actions" data-v-7ddb5a05><button type="button" class="btn-secondary" data-v-7ddb5a05> Reset </button><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} data-v-7ddb5a05>`);
      if (isSaving.value) {
        _push(`<span data-v-7ddb5a05>Saving...</span>`);
      } else {
        _push(`<span data-v-7ddb5a05>Save Settings</span>`);
      }
      _push(`</button></div></form><div class="form-section test-section" data-v-7ddb5a05><div class="section-header" data-v-7ddb5a05><h2 class="section-title" data-v-7ddb5a05>Test Email Configuration</h2><p class="section-description" data-v-7ddb5a05> Send a test email to verify your settings are working correctly. Save your settings first! </p></div>`);
      if (testSuccessMessage.value) {
        _push(`<div class="success-banner small" data-v-7ddb5a05>${ssrInterpolate(testSuccessMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (testErrorMessage.value) {
        _push(`<div class="error-banner small" data-v-7ddb5a05>${ssrInterpolate(testErrorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="test-form" data-v-7ddb5a05><div class="form-group" data-v-7ddb5a05><label for="test_email" class="form-label" data-v-7ddb5a05>Test Email Address</label><div class="input-with-button" data-v-7ddb5a05><input type="email" id="test_email"${ssrRenderAttr("value", testEmailForm.value.test_email)} class="form-input" placeholder="Enter email to send test" data-v-7ddb5a05><button type="button" class="btn-primary"${ssrIncludeBooleanAttr(isTesting.value || !testEmailForm.value.test_email) ? " disabled" : ""} data-v-7ddb5a05>`);
      if (isTesting.value) {
        _push(`<span data-v-7ddb5a05>Sending...</span>`);
      } else {
        _push(`<span data-v-7ddb5a05>Send Test</span>`);
      }
      _push(`</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Email.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Email = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7ddb5a05"]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Email
}, Symbol.toStringTag, { value: "Module" }));
const logoUrl = "/build/assets/logo-DNzhe_vR.svg";
const _sfc_main$4 = {
  __name: "GlobalLoader",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isVisible = ref(props.loading);
    const isPreviewUrl = (url) => {
      if (!url) return false;
      return url.includes("/builder") || url.includes("/preview") || url.includes("sections.preview");
    };
    watch(() => props.loading, (newVal) => {
      if (!isPreviewUrl(window.location.href)) {
        isVisible.value = newVal;
      } else {
        isVisible.value = false;
      }
    }, { immediate: true });
    onMounted(() => {
      if (isPreviewUrl(window.location.href)) {
        isVisible.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-container" }, _attrs))} data-v-79401f7d><div class="loader-content" data-v-79401f7d><div class="bouncing-ball" data-v-79401f7d></div><img${ssrRenderAttr("src", unref(logoUrl))} alt="Beyond Technology" class="loader-logo" data-v-79401f7d></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GlobalLoader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const GlobalLoader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-79401f7d"]]);
let isAppLoaded = false;
const _sfc_main$3 = {
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
    const isLoading = ref(false);
    const props = __props;
    const isRtl = computed(() => props.lang === "ar");
    const direction = computed(() => isRtl.value ? "rtl" : "ltr");
    const injectCriticalCSS = () => {
      if (document.getElementById("critical-fouc-css")) return;
      const criticalCSS = `
        html.loading { visibility: hidden !important; opacity: 0 !important; }
        html.loaded { visibility: visible !important; opacity: 1 !important; transition: opacity 0.2s ease-in; }
        html { animation: fouc-fallback 0s 0.1s forwards; }
        @keyframes fouc-fallback { to { visibility: visible; opacity: 1; } }
    `;
      const styleElement = document.createElement("style");
      styleElement.id = "critical-fouc-css";
      styleElement.textContent = criticalCSS;
      document.head.insertBefore(styleElement, document.head.firstChild);
    };
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
      injectCriticalCSS();
      document.documentElement.classList.add("loading");
      if (!isAppLoaded) {
        isLoading.value = true;
      }
      document.documentElement.setAttribute("dir", direction.value);
      document.documentElement.setAttribute("lang", props.lang);
      injectJsonLd();
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("loading");
        document.documentElement.classList.add("loaded");
      });
      if (!isAppLoaded) {
        setTimeout(() => {
          isLoading.value = false;
          isAppLoaded = true;
        }, 200);
      }
    });
    watch(() => props.jsonLdSchema, () => {
      injectJsonLd();
    }, { deep: true });
    watch(() => props.lang, () => {
      document.documentElement.setAttribute("dir", direction.value);
      document.documentElement.setAttribute("lang", props.lang);
    });
    onUnmounted(() => {
      if (jsonLdScriptElement) {
        jsonLdScriptElement.remove();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(GlobalLoader, { loading: isLoading.value }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), null, {
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
            _push2(`<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"${_scopeId}><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"${_scopeId}><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"${_scopeId}><link rel="stylesheet" href="/assets/css/bootstrap.min.css"${_scopeId}><link rel="stylesheet" href="/assets/fontawesome-pro/fontawesome.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/all.min.css"${_scopeId}><link rel="stylesheet" href="/assets/css/default.css"${_scopeId}><link rel="stylesheet" href="/assets/css/style.css"${_scopeId}><link rel="stylesheet" href="/assets/css/responsive.css"${_scopeId}><link rel="stylesheet" href="/assets/css/custom-fixes.css"${_scopeId}>`);
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
                href: "/assets/css/default.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/style.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/responsive.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "/assets/css/custom-fixes.css"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/WebsiteLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MapSection",
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
    const mapSrc = computed(() => {
      if (props.content.embed_url) {
        return props.content.embed_url;
      }
      const baseUrl = "https://maps.google.com/maps";
      const params = new URLSearchParams({
        width: "100%",
        height: props.content.height || "500",
        hl: props.lang,
        t: "",
        // Map type
        z: props.content.zoom || "15",
        ie: "UTF8",
        iwloc: "B",
        output: "embed"
      });
      if (props.content.latitude && props.content.longitude) {
        params.set("q", `${props.content.latitude},${props.content.longitude}`);
      } else if (props.content.address) {
        params.set("q", props.content.address);
      } else {
        params.set("q", "Riyadh, Saudi Arabia");
      }
      if (props.content.business_name) {
        const q = params.get("q");
        params.set("q", `${q}+(${props.content.business_name})`);
      }
      return `${baseUrl}?${params.toString()}`;
    });
    const mapHeight = computed(() => props.content.height || 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "map-area pb-0 pb-md-5" }, _attrs))} data-v-0296c08a><div class="container" data-v-0296c08a><div class="row" data-v-0296c08a><div class="col-lg-12" data-v-0296c08a>`);
      if (__props.content.title_ar || __props.content.title_en) {
        _push(`<div class="section-title text-center mb-4" data-aos="fade-up" data-v-0296c08a><h2 data-v-0296c08a>${ssrInterpolate(__props.lang === "ar" ? __props.content.title_ar : __props.content.title_en)}</h2>`);
        if (__props.content.subtitle_ar || __props.content.subtitle_en) {
          _push(`<p data-v-0296c08a>${ssrInterpolate(__props.lang === "ar" ? __props.content.subtitle_ar : __props.content.subtitle_en)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="map-container" style="${ssrRenderStyle({ "width": "100%" })}" data-aos="fade-up" data-aos-delay="100" data-v-0296c08a><iframe width="100%"${ssrRenderAttr("height", mapHeight.value)} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"${ssrRenderAttr("src", mapSrc.value)}${ssrRenderAttr("title", __props.lang === "ar" ? "خريطة الموقع" : "Location Map")} loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-0296c08a></iframe></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/MapSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MapSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0296c08a"]]);
const _sfc_main$1 = {
  __name: "NewsletterSection",
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
    const getImageUrl = (img) => {
      if (!img || typeof img !== "string") return "";
      if (img.startsWith("http") || img.startsWith("/")) return img;
      return `/storage/${img}`;
    };
    const title1 = computed(() => props.lang === "ar" ? props.content.title1_ar : props.content.title1_en);
    const title2 = computed(() => props.lang === "ar" ? props.content.title2_ar : props.content.title2_en);
    const phoneLabel = computed(() => props.lang === "ar" ? props.content.phone_label_ar : props.content.phone_label_en);
    const backgroundUrl = computed(() => getImageUrl(props.content.background_image));
    const iconUrl = computed(() => getImageUrl(props.content.icon));
    const bgStyle = computed(() => {
      if (backgroundUrl.value) {
        return { background: `url(${backgroundUrl.value}) center/cover no-repeat` };
      }
      return { background: "linear-gradient(135deg, #004F4C 0%, #003836 100%)" };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "newLetter-area mt-5" }, _attrs))} data-v-8841e554><div class="container color-text" data-v-8841e554><div class="newLetter-wrp" style="${ssrRenderStyle(bgStyle.value)}" data-aos="fade-up" data-v-8841e554><div class="row align-items-center" data-v-8841e554><div class="col-lg-6" data-v-8841e554><div class="newsletter__content" data-v-8841e554><h1 data-v-8841e554>${ssrInterpolate(title1.value)}</h1><h1 data-v-8841e554>${ssrInterpolate(title2.value)}</h1></div></div><div class="col-lg-6" data-v-8841e554><div class="d-flex align-items-center gap-4 newsletter__contact" data-v-8841e554>`);
      if (iconUrl.value) {
        _push(`<i data-v-8841e554><img${ssrRenderAttr("src", iconUrl.value)} alt="" loading="lazy" decoding="async" data-v-8841e554></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-8841e554><h5 data-v-8841e554>${ssrInterpolate(phoneLabel.value)}</h5><h1 data-v-8841e554><a${ssrRenderAttr("href", `tel:${__props.content.phone}`)} data-v-8841e554>${ssrInterpolate(__props.content.phone)}</a></h1></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/NewsletterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsletterSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8841e554"]]);
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
      "header": HeaderSection,
      "hero": _sfc_main$y,
      "hero_slider": _sfc_main$A,
      "hero_common": HeroCommonSection,
      "partners": _sfc_main$x,
      "concept": _sfc_main$w,
      "services": _sfc_main$v,
      "cta": _sfc_main$u,
      "work": _sfc_main$t,
      "projects": _sfc_main$t,
      // Alias for seeder key
      "team": _sfc_main$s,
      "contact": _sfc_main$r,
      "gallery": _sfc_main$q,
      "faq": _sfc_main$p,
      "inquiry": _sfc_main$o,
      "footer": _sfc_main$n,
      "map": MapSection,
      "contact-info": ContactInfoSection,
      "contact-banner": _sfc_main$l,
      "page-banner": PageBannerSection,
      "newsletter": NewsletterSection,
      // New sections
      "common_service": _sfc_main$j,
      "counter_area": _sfc_main$i,
      "gallery_page": _sfc_main$h,
      "hero_riya": _sfc_main$g,
      "hero_jiyad": _sfc_main$f,
      "hero_shopsz": _sfc_main$e,
      "hero_beyond_erp": _sfc_main$d,
      "hero_beyond_pay": _sfc_main$c
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
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
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
                lang: __props.lang,
                hreflang: __props.seo?.hreflang
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
                lang: __props.lang,
                hreflang: __props.seo?.hreflang
              }, null, 8, ["content", "lang", "hreflang"])) : createCommentVNode("", true),
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
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_0, "./Pages/Auth/Login.vue": __vite_glob_0_1, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_2, "./Pages/Contacts/Index.vue": __vite_glob_0_3, "./Pages/Contacts/Show.vue": __vite_glob_0_4, "./Pages/Dashboard.vue": __vite_glob_0_5, "./Pages/Dashboard/Index.vue": __vite_glob_0_6, "./Pages/PageBuilder/AddSectionModal.vue": __vite_glob_0_7, "./Pages/PageBuilder/EditSectionSidebar.vue": __vite_glob_0_8, "./Pages/PageBuilder/Index.vue": __vite_glob_0_9, "./Pages/Pages/Create.vue": __vite_glob_0_10, "./Pages/Pages/Edit.vue": __vite_glob_0_11, "./Pages/Pages/Index.vue": __vite_glob_0_12, "./Pages/Profile/Edit.vue": __vite_glob_0_13, "./Pages/Settings/CustomCode.vue": __vite_glob_0_14, "./Pages/Settings/Email.vue": __vite_glob_0_15, "./Pages/Website/Index.vue": __vite_glob_0_16 });
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
