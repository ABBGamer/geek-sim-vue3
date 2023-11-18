export function checkMobile() {
    console.log(window.navigator.userAgent.includes("Mobile"))
    return window.navigator.userAgent.includes("Mobile")
}