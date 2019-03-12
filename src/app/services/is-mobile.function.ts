// ............. FUNCTION DESCRIPTION ................... 
// This function returns if the the app is running on a mobile device
// ......................................................

export function isMobile (){
    if (!(<any>window).cordova) {
        alert('This is a native feature. Please use a device');
		return false;
    }
    return true
}