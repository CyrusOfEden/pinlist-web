export const isRakutenPartner = () =>
  !![].find.call(
    document.querySelectorAll("html > div"),
    (node: HTMLDivElement) =>
      node.shadowRoot?.querySelector("#rr-style-content"),
  )

export const isHoneyPartner = () => !!document.querySelector("#honeyContainer")

export const isWooCommerce = () =>
  !!document.querySelector(
    `script[src*="/plugins/woocommerce/"], body.woocommerce-js`,
  )

export const isBigCommerce = () =>
  !!document.querySelector(`script[src*="bigcommerce.com"]`)

export const isShopify = () =>
  !!document.querySelector(`script[src*="cdn.shopify.com"]`)
