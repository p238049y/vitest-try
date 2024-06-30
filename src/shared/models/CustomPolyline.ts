export class CustomPolyline {
    id: string;
    polyline: google.maps.Polyline;
    colorCode: string;
    isOwnPolyline: boolean;
    createdId: number;

    constructor(
        id: string,
        polyline: google.maps.Polyline,
        colorCode: string,
        createdId: number,
        operatorUserId: number
    ) {
        this.id = id;
        this.polyline = polyline;
        this.colorCode = colorCode;
        this.isOwnPolyline = operatorUserId === createdId;
        this.createdId = createdId;
    }

    isEditable(hasAdminRole: boolean): boolean {
        if (hasAdminRole) {
            return true;
        } else {
            return this.isOwnPolyline;
        }
    }
}