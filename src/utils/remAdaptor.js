function setRootFontSize  () {
  const designWidth = 1920 // PC设计稿宽度
  const mobileDesignWidth = 375 // 移动端设计稿宽度
  const baseSize = 80 // PC端基准值
  const mobileBaseSize = 37.5 // 移动端基准值

  // 判断是否为移动设备
  const isMobile = window.innerWidth <= 768

  let fontSize
  if (isMobile) {
    // 移动端采用 375 设计稿的计算方式
    fontSize = (window.innerWidth / mobileDesignWidth) * mobileBaseSize
  } else {
    // 移动端采用 1440 设计稿的计算方式, 大于则按PC端基准值
    fontSize = window.innerWidth >= designWidth 
      ? baseSize
      : (window.innerWidth / designWidth) * baseSize
  }

  document.documentElement.style.fontSize = fontSize + 'px'
}

setRootFontSize()

// 当屏幕大小变化时，调用
window.addEventListener('resize', () => {
  setRootFontSize ()
})