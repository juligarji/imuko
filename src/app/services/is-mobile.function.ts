
import { Platform } from '@ionic/angular';

export function isMobile (){
    if (!(<any>window).cordova) {
        alert('This is a native feature. Please use a device');
		return false;
    }
    return true
}