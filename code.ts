figma.showUI(__html__,{width: 375, height: 700});

// change window height
figma.clientStorage.getAsync('size').then(size => {
  if(size) figma.ui.resize(size.w,size.h);
}).catch(err=>{});
figma.ui.onmessage = msg => {
  switch (msg.type) {
    case "resize":
      figma.ui.resize(msg.size.w,msg.size.h);      
      figma.clientStorage.setAsync('size', msg.size).catch(err=>{});// save size
      break;
  }
}

// payments
  async function checkAndRunPaidFeatureCode() {
  if (figma.payments?.status.type === "UNPAID") {
    await figma.payments.initiateCheckoutAsync({
      interstitial: "PAID_FEATURE"
    })
    if (figma.payments.status.type === "UNPAID") {
      figma.notify("Please upgrade to use this feature.")
      return
    }
  }
console.log("stuff and thing");
  // DO STUFF
}
