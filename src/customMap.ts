export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
}
export class CustomMap {
    private googleMap: google.maps.Map

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 1
            }

        })
    }
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        })
        marker.addListener('click', () => {
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infowindow.open(this.googleMap, marker)
        })
    }
}